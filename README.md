# Simple Email Composer

Compose beautiful email HTML simpler - A single-page email composer with an intuitive interface for creating and sending HTML emails.

## Features

- 🎨 **Beautiful HTML Editor**: Create stunning email content with inline CSS styling
- ✉️ **Easy Email Sending**: Send emails directly from the browser
- 💅 **Editable Content**: Rich text editing with real-time preview
- 🚀 **Simple Setup**: Quick Node.js setup with minimal dependencies

## Installation

1. Clone the repository:
```bash
git clone https://github.com/anywork-dev/simple-email-composer.git
cd simple-email-composer
```

2. Install dependencies:
```bash
npm install
```

3. Configure SMTP settings:
   - Copy `.env.example` to `.env`
   - Update the SMTP credentials with your email provider settings

```bash
cp .env.example .env
```

Example `.env` file:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
PORT=3000
```

**Note**: For Gmail, you'll need to use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

## Usage

1. Start the server:
```bash
npm start
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

3. Use the email composer:
   - Enter the destination email address at the top
   - Edit the HTML content in the beautiful editor (you can use rich formatting)
   - Click the "Send Email" button to send

The application extracts the HTML content using `outerHTML` from the content container, cleans it up by removing editor-specific attributes, and sends it as a formatted email.

## How It Works

1. **Frontend (index.html)**: 
   - Single-page application with destination input at the top
   - Editable HTML content area with beautiful inline CSS
   - Send button in the footer
   - Extracts content using `contentEditor.outerHTML`
   - Cleans up the HTML by removing contenteditable attributes and replacing classes with inline styles

2. **Backend (server.js)**:
   - Express server serving the static HTML page
   - `/send-email` endpoint that receives destination and HTML content
   - Uses Nodemailer to send emails via SMTP
   - Validates email addresses and handles errors

## Technologies Used

- **Node.js**: Backend runtime
- **Express**: Web server framework
- **Nodemailer**: Email sending library
- **Vanilla JavaScript**: Frontend interactivity
- **HTML/CSS**: Beautiful UI with gradient designs and inline styles

## Security Notes

- Never commit your `.env` file with real credentials
- Use environment variables for sensitive data
- For Gmail, use App Passwords instead of account passwords
- The application validates email addresses before sending
- HTML content size is limited to 1MB to prevent DoS attacks
- **Note**: This is a minimal implementation without rate limiting. For production use, consider adding:
  - Rate limiting middleware (e.g., express-rate-limit)
  - User authentication
  - Additional input sanitization
  - CSRF protection

## Known Limitations

- No rate limiting on email sending endpoint (suitable for personal use only)
- No user authentication (anyone with access can send emails using your SMTP credentials)
- The HTML content is sent as-is in emails (this is intentional, not an XSS vulnerability)

## License

ISC
