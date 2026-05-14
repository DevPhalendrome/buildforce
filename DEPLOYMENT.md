# 📦 DEPLOYMENT GUIDE

## Prerequisites

- Node.js 18+ LTS
- npm or yarn package manager
- Git for version control

## Local Development

### Setup
```bash
# Clone or navigate to project
cd phalendrone-works

# Install dependencies
npm install

# Start dev server
npm run dev
# Opens http://localhost:3000 automatically
```

### Available Scripts
```bash
npm run dev      # Start dev server with hot reload
npm run build    # Create production build
npm run preview  # Preview production build locally
```

## Building for Production

### Create Optimized Build
```bash
npm run build

# Output directory: /dist
# - index.html (minified)
# - css/styles.css (minified)
# - js/main.js (minified & bundled)
# - assets/ (images, etc.)
```

### Build Configuration
Current settings in `vite.config.js`:
- Minification: terser (JavaScript)
- Output directory: `../dist`
- Empty output directory before build: yes

## Deployment Options

### 1. Vercel (Recommended - Zero Config)

**Setup:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in dashboard
# - VITE_API_URL
# - VITE_FORM_ENDPOINT
```

**Benefits:**
- ✅ Automatic preview deployments
- ✅ Custom domains support
- ✅ Automatic HTTPS
- ✅ Edge network CDN
- ✅ Form submission handling
- ✅ Serverless functions available

**Configuration (`vercel.json`):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_API_URL": "@api_url",
    "VITE_FORM_ENDPOINT": "@form_endpoint"
  }
}
```

### 2. Netlify

**Setup:**
```bash
# Connect GitHub repository in Netlify dashboard
# - No CLI needed, auto-deploys on push
```

**Configuration (`netlify.toml`):**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[functions]
  directory = "netlify/functions"
```

**Benefits:**
- ✅ Easy GitHub integration
- ✅ Built-in form handling
- ✅ Netlify Functions for backend
- ✅ Branch previews

### 3. AWS S3 + CloudFront

**Upload to S3:**
```bash
# Create S3 bucket
aws s3 mb s3://phalendrone-works

# Upload build
aws s3 sync dist/ s3://phalendrone-works/ --delete

# Enable static website hosting in S3 console
# - Index document: index.html
# - Error document: 404.html
```

**CloudFront (CDN):**
```bash
# Configure in AWS CloudFront console for caching
# - Origin: S3 bucket
# - Behaviors: Cache all
# - Viewer protocol: Redirect HTTP to HTTPS
```

### 4. GitHub Pages

**Simple static hosting:**
```bash
# Update package.json
{
  "homepage": "https://yourusername.github.io/phalendrone-works"
}

# Deploy
npm run build
git add dist/
git commit -m "Deploy"
git push
```

## Environment Variables

### Create `.env` files
```bash
# .env (shared, can be committed)
VITE_API_URL=https://api.phalendrone.com

# .env.local (local only, NEVER commit)
VITE_FORM_ENDPOINT=http://localhost:3000/api/contact

# .env.production
VITE_API_URL=https://api.phalendrone.com
VITE_FORM_ENDPOINT=https://api.phalendrone.com/api/contact
```

### Add to `.gitignore`
```
.env.local
.env.*.local
```

## Security Headers

### Add to deployment config:

**Vercel (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"
        }
      ]
    }
  ]
}
```

**Netlify (netlify.toml):**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
    Content-Security-Policy = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';"
```

## Custom Domain Setup

### Vercel
1. Go to Project Settings > Domains
2. Add custom domain
3. Update DNS records (provided by Vercel)
4. Wait 5-10 minutes for propagation

### Netlify
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Update DNS CNAME record
4. Wait for propagation

### DNS Configuration Example
```
phalendrone.com    A       76.76.19.165      # Vercel IP
www.phalendrone.com  CNAME  cname.vercel-dns.com
```

## SSL/HTTPS Certificate

- ✅ All platforms above provide free SSL certificates
- ✅ Auto-renewal handled automatically
- ✅ HTTPS enforced automatically

## Performance Optimization

### Pre-deployment Checklist
```bash
# 1. Run build
npm run build

# 2. Check bundle size
du -sh dist/
# Goal: < 1MB total, < 100KB JS

# 3. Check for large dependencies
npm ls --depth=0

# 4. Analyze bundle (optional)
npm run build -- --analyze

# 5. Test locally
npm run preview
# Visit http://localhost:4173
```

### Image Optimization
```bash
# Install sharp for image optimization
npm install --save-dev sharp

# Create optimization script (optional)
# Reduces PNG/JPG sizes by 30-50%
```

## Database (Form Submissions)

### Option 1: Netlify Forms (Easiest)
```html
<form name="contact" method="POST" netlify>
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Option 2: Third-party Service
- [Formspree](https://formspree.io/) - Email forms
- [Basin](https://basinhq.com/) - Form backend
- [Kwes](https://kwes.io/) - Form handling
- [Getform](https://getform.io/) - Form submission

### Option 3: Custom Backend (Recommended)
```javascript
// Node + Express example
app.post('/api/contact', async (req, res) => {
  // 1. Validate inputs
  // 2. Rate limit check
  // 3. Store in database
  // 4. Send confirmation email
  // 5. Return success
});
```

## Monitoring & Analytics

### Vercel Analytics
```bash
# Enable in Vercel dashboard
# Automatic performance monitoring
```

### Error Tracking (Sentry)
```bash
# Install Sentry
npm install @sentry/browser

# Initialize in main.js
import * as Sentry from "@sentry/browser";
Sentry.init({ dsn: process.env.VITE_SENTRY_DSN });
```

### Google Analytics (Optional)
```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXX');
</script>
```

## Continuous Deployment (CI/CD)

### GitHub Actions Example
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm audit --production
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/
```

## Rollback Procedures

### Vercel
```bash
# View deployments
vercel logs

# Rollback to previous version
# Dashboard: Projects > Deployments > Click previous > Redeploy
# Or: vercel deploy --prod --prebuilt
```

### Netlify
```bash
# View deploys in dashboard
# Click previous deploy > Deploy this version
```

## Pre-launch Checklist

- [ ] Build locally: `npm run build`
- [ ] Test build: `npm run preview`
- [ ] Check bundle size acceptable
- [ ] Run security audit: `npm audit`
- [ ] Verify environment variables
- [ ] Test form submission
- [ ] Check on mobile
- [ ] Verify accessibility: use screen reader
- [ ] Run Lighthouse audit
- [ ] Setup domain & DNS
- [ ] Setup SSL certificate
- [ ] Setup monitoring/analytics
- [ ] Create rollback plan
- [ ] Deploy to staging first
- [ ] Final testing on live
- [ ] Setup alerts/notifications

## Post-launch Monitoring

### Daily
- Check error logs
- Monitor uptime
- Check form submissions

### Weekly
- Review analytics
- Check Core Web Vitals
- Monitor error trends

### Monthly
- Performance review
- Security update checks
- Dependency updates

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf node_modules dist
npm install

# Try build again
npm run build
```

### 404 Errors on Pages
```
# SPA routing issue
# Solution: Configure if using client-side routing
# Most platforms detect Vite automatically
```

### Images Not Loading on Deploy
```
# Check paths are relative
# ✅ Good: ./assets/image.jpg
# ❌ Bad: /assets/image.jpg
```

### Form Submission Not Working
```
# Verify API endpoint is accessible
# Check CORS headers if submitting to different domain
# Verify form endpoint environment variable
```

## Support & Resources

- [Vite Documentation](https://vitejs.dev/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [Web Vitals](https://web.dev/vitals/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

*Last Updated: February 21, 2026*
