# Security Implementation Guide

## For Phalendrone Works - Buildforce Website

This guide provides step-by-step security implementations for the website.

---

## 1. Server-Side Security Headers

Add these headers to your web server. These prevent common web attacks.

### Nginx Configuration

```nginx
server {
    # Content Security Policy - prevent XSS attacks
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.example.com" always;
    
    # Prevent MIME type sniffing
    add_header X-Content-Type-Options "nosniff" always;
    
    # Prevent clickjacking attacks
    add_header X-Frame-Options "DENY" always;
    
    # Enable browser XSS protection
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Referrer policy for privacy
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Force HTTPS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
```

### Apache Configuration (.htaccess)

```apache
# Security Headers
Header set Content-Security-Policy "default-src 'self'"
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "DENY"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"
Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
```

### Vercel Configuration (vercel.json)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 2. Form Submission Security

### Client-Side Validation (Already Implemented)

✅ Form validation checks required fields  
✅ Email format validation  
✅ Phone number format validation  
✅ Error messages shown to user

### Server-Side Implementation (TODO)

**Implement on your backend API:**

```javascript
// Example Node.js/Express endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, service, message } = req.body;
        
        // 1. VALIDATION - never trust client input
        if (!name || name.trim().length === 0) {
            return res.status(400).json({ error: 'Name is required' });
        }
        
        if (!email || !isValidEmail(email)) {
            return res.status(400).json({ error: 'Valid email is required' });
        }
        
        if (!phone || !isValidPhone(phone)) {
            return res.status(400).json({ error: 'Valid phone is required' });
        }
        
        // 2. SANITIZATION - remove dangerous characters
        const sanitized = {
            name: sanitizeString(name),
            email: sanitizeEmail(email),
            phone: sanitizePhone(phone),
            service: sanitizeString(service),
            message: sanitizeString(message)
        };
        
        // 3. RATE LIMITING - prevent spam/DOS
        const ipAddress = req.ip;
        const submissions = await getRecentSubmissions(ipAddress);
        if (submissions.length > 5) {
            return res.status(429).json({ error: 'Too many requests. Please try again later.' });
        }
        
        // 4. SPAM DETECTION - check for suspicious patterns
        if (isSpam(sanitized.message)) {
            return res.status(400).json({ error: 'Message flagged as spam' });
        }
        
        // 5. SEND EMAIL
        await sendEmailNotification(sanitized);
        
        // 6. LOG FOR AUDIT
        await logFormSubmission(sanitized, req.ip);
        
        return res.status(200).json({ 
            success: true, 
            message: 'Thank you! We\'ll contact you within 24 hours.' 
        });
        
    } catch (error) {
        // Never expose internal errors to client
        console.error('Form submission error:', error);
        res.status(500).json({ error: 'An error occurred. Please try again.' });
    }
});

// Validation utilities
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length < 254;
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

function sanitizeString(str) {
    return str
        .trim()
        .slice(0, 1000) // Limit length
        .replace(/[<>\"']/g, ''); // Remove dangerous chars
}

function sanitizeEmail(email) {
    return email.toLowerCase().trim().slice(0, 254);
}

function sanitizePhone(phone) {
    return phone.replace(/[^0-9\+\-\(\)\s]/g, '').slice(0, 20);
}

function isSpam(message) {
    // Check for spam patterns
    const spamPatterns = [
        /viagra|casino|lottery/gi,
        /click here|buy now/gi,
        /(https?:\/\/){2,}/g // Multiple URLs
    ];
    return spamPatterns.some(pattern => pattern.test(message));
}
```

### CSRF Token Protection (Optional but Recommended)

**For critical forms, add CSRF token:**

```javascript
// Get token before form submission
const csrfToken = await fetch('/api/csrf-token')
    .then(r => r.json())
    .then(d => d.token);

// Include in form submission
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken  // Add token header
    },
    body: JSON.stringify(formData)
});
```

---

## 3. Environment Variables Protection

❌ **NEVER** put secrets in frontend code  
✅ **DO** use environment variables

```javascript
// ❌ WRONG - Don't do this!
const API_KEY = "sk-abc123xyz";

// ✅ RIGHT - Use environment variables
const apiKey = import.meta.env.VITE_API_KEY;
```

**For backend secrets:**

```javascript
// Backend environment variables (not accessible from frontend)
const DATABASE_PASSWORD = process.env.DB_PASSWORD;
const API_SECRET_KEY = process.env.SECRET_KEY;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
```

---

## 4. HTTPS & SSL/TLS

✅ **ALWAYS** use HTTPS in production  
✅ **Force** redirect from HTTP to HTTPS

### Nginx
```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name buildforce.example.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS Server
server {
    listen 443 ssl http2;
    server_name buildforce.example.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
}
```

### Vercel/Netlify
- SSL certificate included automatically ✅
- Auto-redirect HTTP → HTTPS ✅

---

## 5. Input Sanitization

When displaying user input, always sanitize it:

```javascript
// ❌ DANGEROUS - XSS vulnerability
element.innerHTML = userInput;

// ✅ SAFE - Text content only
element.textContent = userInput;

// ✅ SAFE - Using sanitization library
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput);
```

---

## 6. Image Upload Security (If Applicable)

If users can upload images/files:

```javascript
// Validation
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

function validateFile(file) {
    if (file.size > MAX_FILE_SIZE) {
        throw new Error('File too large');
    }
    
    if (!ALLOWED_TYPES.includes(file.type)) {
        throw new Error('Invalid file type');
    }
    
    // Verify magic numbers (file signature)
    const header = await file.slice(0, 4).arrayBuffer();
    if (!isValidImageSignature(header)) {
        throw new Error('Invalid file');
    }
}
```

---

## 7. API Security Best Practices

If you have a backend API:

### Rate Limiting
```javascript
// Limit requests per IP address
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.'
});

app.use('/api/', limiter);
```

### Input Size Limits
```javascript
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb' }));
```

### CORS Policy
```javascript
// Only allow requests from your domain
const cors = require('cors');
app.use(cors({
    origin: 'https://buildforce.example.com',
    credentials: true
}));
```

---

## 8. Data Protection & Privacy

### When Collecting Data:

✅ Only collect necessary information  
✅ Have a privacy policy (already have one)  
✅ Don't share data with third parties  
✅ Delete data when no longer needed  
✅ Encrypt sensitive data in transit (HTTPS) and at rest

### Compliance

- **GDPR** (if serving EU users): Need consent before collecting data
- **CCPA** (if serving California users): Need privacy notice and opt-out

---

## 9. Session Management

### Secure Cookies
```javascript
// If using sessions
res.cookie('sessionId', token, {
    httpOnly: true,    // Not accessible via JavaScript
    secure: true,      // HTTPS only
    sameSite: 'Strict', // CSRF protection
    maxAge: 3600000    // 1 hour
});
```

---

## 10. Error Handling & Logging

❌ **DON'T** show internal error details to users:
```javascript
// Bad
res.status(500).json({ error: error.message }); // Leaks internal info
```

✅ **DO** show generic errors and log details:
```javascript
// Good
console.error('Payment processing failed:', error); // Log internal details
res.status(500).json({ error: 'An error occurred. Please try again.' });
```

---

## 11. Security Audit Checklist

- [ ] HTTPS enabled in production
- [ ] Security headers configured (CSP, X-Frame-Options, etc.)
- [ ] Form input validated server-side
- [ ] Sensitive data not in environment files
- [ ] Rate limiting implemented
- [ ] Error messages don't leak internal details
- [ ] Dependencies up-to-date (`npm audit`)
- [ ] No console.log with sensitive data
- [ ] API authentication tokens handled securely
- [ ] Database connections encrypted
- [ ] Regular security audits scheduled

---

## 12. Dependencies Security

Keep dependencies updated and secure:

```bash
# Check for vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Or fix manually
npm outdated # See what's outdated
npm update   # Update to latest

# Audit specific package
npm audit --audit-level=moderate
```

---

## 13. Resources

- **OWASP Top 10**: https://owasp.org/www-project-top-ten/
- **MDN Web Security**: https://developer.mozilla.org/en-US/docs/Web/Security
- **CWE Top 25**: https://cwe.mitre.org/top25/

---

## Contact Security Issues

If you discover a security vulnerability, please email: security@phalendrone.com

**Last Updated: February 21, 2026**
