const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
    const { to, html } = req.body;

    if (!to || !html) {
        return res.status(400).json({ 
            success: false, 
            message: 'Destination address and HTML content are required' 
        });
    }

    // Email validation - using a simple but safe regex pattern
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(to)) {
        return res.status(400).json({ 
            success: false, 
            message: 'Invalid email address' 
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
        // Configure email transporter
        // Note: For production, use environment variables for credentials
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: process.env.SMTP_PORT || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Verify transporter configuration
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            return res.status(500).json({ 
                success: false, 
                message: 'Email server not configured. Please set SMTP_USER and SMTP_PASS environment variables.' 
            });
        }

        await transporter.verify();

        // Send email
        // Note: The HTML content is user-created and intended for email composition.
        // It's sent directly to the email recipient, not rendered in a browser context.
        // Users should only send emails through their own SMTP account.
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: to,
            subject: 'Email from Simple Email Composer',
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

app.listen(PORT, () => {
    console.log(`Simple Email Composer running on http://localhost:${PORT}`);
    console.log('Make sure to set SMTP_USER and SMTP_PASS environment variables for email sending.');
});
