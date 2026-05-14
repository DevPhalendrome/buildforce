# Form Submission Integration Guide

## Phalendrone Works - Buildforce Website

This guide explains how to set up form submission handling for the contact form.

---

## Overview

The contact form currently has client-side validation implemented. To actually send the form data to a server, you need to integrate one of the form submission services below.

---

## Option 1: Formspree.io (Easiest)

### Setup (5 minutes)

1. **Create Account**
   - Go to https://formspree.io
   - Sign up with your email

2. **Create Form**
   - Click "New Project"
   - Name: "Buildforce Contact"
   - Add your website URL

3. **Get Form ID**
   - Formspree will show you a Form ID like: `f/abc123xyz`

4. **Update Environment Variable**
   - Create/edit `.env` file in project root:
   ```env
   VITE_FORMSPREE_ID=f/abc123xyz
   ```

5. **Update forms.js**
   - Replace the `sendFormData()` method in [src/js/components/forms.js](src/js/components/forms.js#L95):
   ```javascript
   sendFormData(formData) {
       const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
       return fetch(`https://formspree.io/${formspreeId}`, {
           method: 'POST',
           body: formData,
           headers: { 'Accept': 'application/json' }
       });
   }
   ```

6. **Test**
   - Fill out contact form at http://localhost:3000/#contact
   - Submit and check Formspree dashboard for submission

### Pros
- ✅ No backend required
- ✅ 50 submissions/month free
- ✅ Email notifications
- ✅ Built-in spam filtering

### Cons
- ❌ Limited free tier
- ❌ Need paid plan for custom features

---

## Option 2: Netlify Forms (If Hosting on Netlify)

### Setup (3 minutes)

1. **Deploy to Netlify**
   - Connect your GitHub repo to Netlify
   - Netlify will auto-detect forms

2. **Update Contact Form HTML**
   - In [src/index.html](src/index.html#L275), add `netlify` attribute:
   ```html
   <form class="contact-form" id="contactForm" netlify novalidate>
       <!-- form fields -->
   </form>
   ```

3. **Add Hidden Field** (Optional)
   ```html
   <input type="hidden" name="form-name" value="contact">
   ```

4. **Redeploy**
   - Commit changes: `git push`
   - Netlify auto-deploys and enables forms

5. **Set Notifications**
   - Netlify Dashboard → Forms → Settings
   - Add email notification address

### Pros
- ✅ Zero-config
- ✅ 100 submissions/month free
- ✅ Email & Slack notifications
- ✅ Response spam filtering

### Cons
- ❌ Netlify-only (can't use with other hosts)
- ❌ Limited customization

---

## Option 3: Custom Backend API

### Setup (30 minutes)

For full control, implement your own backend.

#### 1. Create Backend Endpoint

```javascript
// Express.js example
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, service, message } = req.body;
        
        // Validate
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'info@phalendrone.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });
        
        // Send confirmation to user
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'We Received Your Message',
            html: `
                <p>Hi ${name},</p>
                <p>Thank you for contacting Buildforce. We received your message and will get back to you within 24 hours.</p>
                <p>Best regards,<br>The Buildforce Team</p>
            `
        });
        
        res.status(200).json({ 
            success: true, 
            message: 'Form submitted successfully' 
        });
        
    } catch (error) {
        console.error('Form submission error:', error);
        res.status(500).json({ error: 'Failed to process form' });
    }
});

app.listen(3000, () => console.log('API running on port 3000'));
```

#### 2. Update Environment Variables

```env
# .env
VITE_FORM_ENDPOINT=https://your-api.example.com/api/contact

# Backend variables (in your server's .env)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=info@phalendrone.com
```

#### 3. Update forms.js

Replace `sendFormData()` in [src/js/components/forms.js](src/js/components/forms.js#L95):

```javascript
sendFormData(formData) {
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
    const data = Object.fromEntries(formData);
    
    return fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}
```

#### 4. Deploy Backend

- Deploy to Heroku, DigitalOcean, AWS Lambda, etc.
- Set environment variables on hosting platform
- Update `VITE_FORM_ENDPOINT` to production URL

### Pros
- ✅ Full control
- ✅ Custom validation & logic
- ✅ Database storage
- ✅ Custom email templates

### Cons
- ❌ Requires backend knowledge
- ❌ Server hosting costs
- ❌ More maintenance

---

## Option 4: Email Service API (SendGrid, Mailgun)

### Setup (15 minutes)

#### Example: SendGrid

1. **Create SendGrid Account**
   - Sign up at https://sendgrid.com
   - Create API key in Settings → API Keys

2. **Update Environment**
   ```env
   VITE_SENDGRID_API_KEY=SG.xxx...
   VITE_SENDGRID_FROM=noreply@phalendrone.com
   ```

3. **Create Backend Endpoint**
   ```javascript
   const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   
   app.post('/api/contact', async (req, res) => {
       const { name, email, phone, service, message } = req.body;
       
       try {
           await sgMail.send({
               to: 'info@phalendrone.com',
               from: process.env.SENDGRID_FROM,
               subject: `Contact Form: ${name}`,
               html: `<p>${message}</p>`
           });
           res.json({ success: true });
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   });
   ```

4. **Deploy and Test**

### Pros
- ✅ Reliable delivery
- ✅ Advanced features
- ✅ Good for production

### Cons
- ❌ API key required
- ❌ Monthly costs
- ❌ Needs backend

---

## Testing Form Submission

### Local Testing

```bash
# Start dev server
npm run dev

# Open browser to http://localhost:3000
# Fill out contact form
# Submit and check:
# - Browser console for errors
# - Form submission service dashboard
# - Email inbox
```

### Test Data

```
Name: John Doe
Email: john@example.com
Phone: +27 (0) 12 345 6789
Service: Roofing
Message: I would like a quote for roofing work on my new home.
```

### Debugging

1. **Check Browser Console**
   - Open DevTools (F12)
   - Look for errors in Console tab
   - Check Network tab for API calls

2. **Check Form Submission Service**
   - Formspree: https://formspree.io/dashboard
   - Netlify: Site → Forms → Recent submissions
   - Custom API: Check server logs

3. **Check Email**
   - Verify email was received
   - Check spam/junk folder
   - Verify email formatting

---

## Production Checklist

Before launching to production:

- [ ] Form submission endpoint working
- [ ] Environment variables configured
- [ ] Email notifications tested
- [ ] Confirmation email sent to user
- [ ] Error messages user-friendly
- [ ] No sensitive data in console
- [ ] Rate limiting implemented (if needed)
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Monitoring/alerting set up

---

## Common Issues & Solutions

### Issue: "Form submission failed" message

**Possible causes:**
1. API endpoint offline
2. CORS error (if cross-domain)
3. Invalid API key
4. Rate limit exceeded

**Solution:**
- Check browser console for detailed error
- Verify API is running and accessible
- Check environment variables
- Add CORS headers if needed

### Issue: Email not received

**Possible causes:**
1. Email sent to wrong address
2. Email in spam folder
3. Email service quota exceeded
4. Invalid email format

**Solution:**
- Check sender email is whitelisted
- Verify recipient email in dashboard
- Check email service quota
- Test with different email

### Issue: Form resets but no success message

**Possible causes:**
1. Submission succeeded but message not showing
2. JavaScript error preventing message display

**Solution:**
- Check form.js success message code
- Look for JavaScript errors in console
- Check CSS display of success message

---

## Next Steps

1. **Choose form submission method** above
2. **Implement integration** following steps
3. **Test thoroughly** with various inputs
4. **Deploy to production**
5. **Monitor form submissions**
6. **Iterate based on feedback**

---

## Support

For questions about form setup, contact:
- Email: info@phalendrone.com
- Documentation: See relevant service docs

---

*Last Updated: February 21, 2026*
