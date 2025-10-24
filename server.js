const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// SMTP Configuration storage
const CONFIG_FILE = 'smtp-configs.json';

// Load SMTP configurations from file
function loadSMTPConfigs() {
    try {
        if (fs.existsSync(CONFIG_FILE)) {
            const data = fs.readFileSync(CONFIG_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading SMTP configurations:', error);
    }

    // Return default configurations if file doesn't exist
    return {
        truedignity: {
            host: 'smtp.gmail.com',
            port: '587',
            user: 'support@truedignity.id',
            pass: ''
        },
        anywork: {
            host: 'smtp.hostinger.com',
            port: '465',
            user: 'mail@anywork.dev',
            pass: '1-Kemenangan'
        }
    };
}

// Save SMTP configurations to file
function saveSMTPConfigs(configs) {
    try {
        fs.writeFileSync(CONFIG_FILE, JSON.stringify(configs, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving SMTP configurations:', error);
        return false;
    }
}

// Initialize SMTP configurations
let smtpConfigs = loadSMTPConfigs();

// Middleware to parse JSON bodies
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

// Serve the main dashboard page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve TrueDignity composer
app.get('/truedignity', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'truedignity', 'index.html'));
});

// Serve AnyWork composer
app.get('/anywork', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'anywork', 'index.html'));
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
    const { composer, from, to, subject, html } = req.body;

    if (!composer || !from || !to || !subject || !html) {
        return res.status(400).json({
            success: false,
            message: 'Composer, from address, destination address, subject, and HTML content are required'
        });
    }

    // Validate composer exists in configurations
    if (!smtpConfigs[composer]) {
        return res.status(400).json({
            success: false,
            message: `Composer '${composer}' not found in SMTP configurations`
        });
    }

    // Email validation - handle both simple and formatted addresses
    const extractEmailFromFormatted = (address) => {
        // Check if it's a formatted address like "Name" <email@domain.com>
        const formattedRegex = /^"[^"]*"\s*<([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})>$/;
        const match = address.match(formattedRegex);
        if (match) {
            return match[1]; // Return the email part
        }
        // If not formatted, return the original address
        return address;
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Extract email from formatted from address
    const fromEmail = extractEmailFromFormatted(from);
    if (!emailRegex.test(fromEmail)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid from email address'
        });
    }

    // Destination should always be a simple email address
    if (!emailRegex.test(to)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid destination email address'
        });
    }

    // HTML content size validation (limit to 1MB to prevent DoS)
    if (html.length > 1048576) {
        return res.status(400).json({ 
            success: false, 
            message: 'HTML content too large (max 1MB)' 
        });
    }

    try {
        // Get SMTP configuration for the composer
        const smtpConfig = smtpConfigs[composer];

        // Configure email transporter using stored configuration
        const transporter = nodemailer.createTransport({
            host: smtpConfig.host,
            port: parseInt(smtpConfig.port),
            secure: parseInt(smtpConfig.port) === 465, // SSL for port 465
            auth: {
                user: smtpConfig.user,
                pass: smtpConfig.pass
            }
        });

        // Verify transporter configuration
        if (!smtpConfig.user || !smtpConfig.pass) {
            return res.status(500).json({
                success: false,
                message: `SMTP configuration for ${composer} is incomplete. Please configure SMTP settings in the dashboard.`
            });
        }

        await transporter.verify();

        // Send email
        // Note: The HTML content is user-created and intended for email composition.
        // It's sent directly to the email recipient, not rendered in a browser context.
        // Users should only send emails through their own SMTP account.
        const info = await transporter.sendMail({
            from: from,
            to: to,
            subject: subject,
            html: html
        });

        console.log('Email sent:', info.messageId);
        res.json({ 
            success: true, 
            message: 'Email sent successfully!',
            messageId: info.messageId 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send email: ' + error.message 
        });
    }
});

// SMTP Configuration endpoint
app.post('/save-smtp-config', (req, res) => {
    const { composer, config } = req.body;

    if (!composer || !config) {
        return res.status(400).json({
            success: false,
            message: 'Composer and configuration are required'
        });
    }

    try {
        // Validate required fields
        if (!config.host || !config.port || !config.user || !config.pass) {
            return res.status(400).json({
                success: false,
                message: 'All SMTP configuration fields are required'
            });
        }

        // Update the configuration for the specified composer
        smtpConfigs[composer] = config;

        // Save to file
        const saved = saveSMTPConfigs(smtpConfigs);

        if (!saved) {
            return res.status(500).json({
                success: false,
                message: 'Failed to save SMTP configuration to file'
            });
        }

        console.log(`SMTP configuration saved for ${composer}:`, {
            host: config.host,
            port: config.port,
            user: config.user,
            // Don't log the password for security
            pass: '***'
        });

        res.json({
            success: true,
            message: 'SMTP configuration saved successfully!'
        });

    } catch (error) {
        console.error('Error saving SMTP configuration:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to save SMTP configuration: ' + error.message
        });
    }
});

// Get SMTP configurations endpoint
app.get('/get-smtp-configs', (req, res) => {
    try {
        res.json({
            success: true,
            configs: smtpConfigs
        });
    } catch (error) {
        console.error('Error getting SMTP configurations:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to get SMTP configurations: ' + error.message
        });
    }
});

// Get specific composer SMTP configuration
app.get('/get-smtp-config/:composer', (req, res) => {
    const { composer } = req.params;

    try {
        const config = smtpConfigs[composer];

        if (!config) {
            return res.status(404).json({
                success: false,
                message: `SMTP configuration for ${composer} not found`
            });
        }

        res.json({
            success: true,
            config: config
        });
    } catch (error) {
        console.error('Error getting SMTP configuration:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to get SMTP configuration: ' + error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Simple Email Composer running on http://localhost:${PORT}`);
    console.log('Make sure to set SMTP_USER and SMTP_PASS environment variables for email sending.');
    console.log('Available composers:');
    console.log('  - TrueDignity: http://localhost:' + PORT + '/truedignity');
    console.log('  - AnyWork: http://localhost:' + PORT + '/anywork');
});
