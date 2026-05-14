# Deployment Guide - Phalendrone Works

## Pre-Deployment Checklist

### Code Quality
- [x] TypeScript compilation successful
- [x] No linting errors
- [x] All components render without errors
- [x] Build completes successfully
- [ ] Accessibility audit passed (WCAG 2.1 AA)
- [ ] All links tested and working
- [ ] Mobile responsive verified (320px-1920px)

### Content
- [x] All 170+ images included
- [x] Service descriptions complete
- [x] About section populated
- [ ] Team member photos (if applicable)
- [ ] Company background information updated
- [ ] Contact information accurate

### Functionality
- [ ] Contact form submission configured
- [ ] Email notifications set up
- [ ] Form validation working
- [ ] Error pages configured (404, 500)
- [ ] Analytics configured
- [ ] CDN configured for static assets

### Configuration
- [ ] Environment variables set
- [ ] API endpoints configured
- [ ] Domain verified
- [ ] SSL certificate installed
- [ ] Redirects configured (www → non-www or vice versa)
- [ ] Sitemap generated
- [ ] robots.txt configured

---

## Deployment Options

### Option 1: Vercel (Recommended)

**Advantages**:
- Zero-config deployment
- Automatic SSL/HTTPS
- Global CDN included
- Built-in analytics
- Automatic deployments on git push
- Free tier available
- Serverless functions for APIs

**Steps**:
1. Create account: https://vercel.com/signup
2. Connect GitHub repository
3. Select "phalendrone-works" project
4. Click "Deploy"
5. Add environment variables (if any)
6. Domain configuration:
   - Default: `phalendrone-works.vercel.app`
   - Custom domain: Point DNS to Vercel

**Commands**:
```bash
npm install -g vercel
vercel                    # Deploy current directory
vercel --prod            # Deploy to production
```

### Option 2: Netlify

**Advantages**:
- Similar to Vercel
- Good CDN and analytics
- Form submission handling built-in

**Steps**:
1. Create account: https://app.netlify.com
2. "New site from Git"
3. Select GitHub repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy

### Option 3: AWS Amplify

**Advantages**:
- Enterprise-grade infrastructure
- AWS ecosystem integration
- Advanced monitoring

**Steps**:
1. Create AWS account
2. Go to AWS Amplify
3. Create new app from GitHub
4. Configure build settings
5. Deploy

### Option 4: Self-Hosted (VPS)

**Requirements**:
- Node.js 18+ installed on server
- PM2 or similar process manager
- Nginx/Apache reverse proxy
- SSL certificate (Let's Encrypt)

**Steps**:
```bash
# On your server
git clone <your-repo-url>
cd phalendrone-works
npm install
npm run build
npm run start

# For production (background process with PM2)
npm install -g pm2
pm2 start "npm start" --name "phalendrone"
pm2 startup
pm2 save
```

**Nginx Config Example**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Environment Variables

Create `.env.local` file in project root:

```env
# Form Submission
FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
# OR
RESEND_API_KEY=re_xxxxxxxxxxxxx
# OR
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature Flags
NEXT_PUBLIC_ENABLE_CONTACT_FORM=true
```

---

## Form Submission Configuration

### Option A: Formspree (Simplest)

1. Go to https://formspree.io
2. Create new form
3. Copy form endpoint
4. Add to `.env.local`:
   ```env
   FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID_HERE
   ```
5. Update `app/api/contact/route.ts`:
   ```ts
   if (process.env.FORMSPREE_ENDPOINT) {
     const res = await fetch(process.env.FORMSPREE_ENDPOINT, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(body)
     })
   }
   ```

### Option B: Resend (Modern Email API)

1. Create account: https://resend.com
2. Create API key
3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```
4. Update `app/api/contact/route.ts`:
   ```ts
   import { Resend } from 'resend'
   
   const resend = new Resend(process.env.RESEND_API_KEY)
   
   await resend.emails.send({
     from: 'forms@yourdomain.com',
     to: 'contact@phalendrone-works.co.za',
     subject: `New Contact Form: ${body.service}`,
     html: `<h3>${body.name}</h3>...`
   })
   ```

### Option C: SendGrid (Enterprise)

1. Create account: https://sendgrid.com
2. Create API key
3. Verify sender email
4. Add to `.env.local`:
   ```env
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   ```

---

## Domain Setup

### Vercel Domain Setup
1. In Vercel dashboard → Settings → Domains
2. Add custom domain
3. Add DNS records to your registrar:
   - Type A record pointing to Vercel IP
   - Or use Vercel name servers

### Self-Hosted Domain Setup
1. Point domain to your server IP address (A record)
2. Wait for DNS propagation (up to 24 hours)
3. Install SSL:
   ```bash
   sudo apt-get install certbot nginx-certbot
   sudo certbot certonly --nginx -d yourdomain.com
   ```

---

## Performance Optimization

### Image Optimization
- All images automatically optimized by Next.js
- WebP/AVIF formats used when supported
- Lazy loading implemented
- Responsive image sizes configured

### CSS & JavaScript
- CSS is minified automatically
- Unused styles removed (tree-shaking)
- Code splitting by route
- Unused dependencies removed

### Caching
- Set cache headers for static assets (1 year)
- Set cache headers for dynamic pages (1 minute)
- Use CDN for global distribution

### Monitoring
- Enable Vercel Analytics
- Monitor Core Web Vitals
- Check error rates
- Monitor form submission success rate

---

## Post-Deployment Tasks

### Immediate (Day 1)
- [ ] Test website on all devices
- [ ] Verify all links work
- [ ] Test contact form submission
- [ ] Check images load correctly
- [ ] Run Google PageSpeed Insights
- [ ] Run accessibility checker
- [ ] Verify analytics working

### Short-term (Week 1)
- [ ] Set up email notifications for form submissions
- [ ] Configure backup strategy
- [ ] Create monitoring alerts
- [ ] Document server setup
- [ ] Create deployment runbook
- [ ] Train team on updates

### Ongoing
- [ ] Monitor error logs
- [ ] Check Core Web Vitals
- [ ] Review analytics
- [ ] Update content as needed
- [ ] Apply security patches
- [ ] Review and optimize performance

---

## Monitoring & Maintenance

### Health Checks
```bash
# Check if site is responding
curl https://yourdomain.com

# Check Page Speed
# Visit: https://pagespeed.web.dev/

# Check Lighthouse Score
# In Chrome DevTools: Lighthouse tab
```

### Error Tracking
- Set up Sentry for error reporting
- Configure email alerts
- Monitor 404 and 500 errors
- Track form submission failures

### Performance Monitoring
- Track Core Web Vitals
- Monitor page load times
- Track image loading times
- Monitor API response times

---

## Security Checklist

### Pre-Deployment
- [ ] No API keys in code (use env variables)
- [ ] HTTPS/SSL enabled
- [ ] Form validation implemented
- [ ] CORS properly configured
- [ ] Security headers set
- [ ] Rate limiting configured

### Post-Deployment
- [ ] Monitor security alerts
- [ ] Keep dependencies updated
- [ ] Regular security audits
- [ ] Backup strategy in place
- [ ] DDoS protection configured
- [ ] WAF (Web Application Firewall) enabled

### Recommended Headers
Add to `next.config.js`:
```js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' }
      ]
    }
  ]
}
```

---

## Troubleshooting Deployment

| Issue | Cause | Solution |
|-------|-------|----------|
| Build fails | Missing env variables | Check `.env.local` is deployed |
| 404 images | Wrong image paths | Verify `/public/images/` structure |
| Slow loading | Large image files | Optimize with WebP/AVIF |
| Form not submitting | API endpoint issue | Check FORMSPREE_ENDPOINT value |
| SSL errors | Certificate expired | Renew certificate automatically |
| DNS not resolving | DNS propagation delay | Wait 24 hours or contact registrar |

---

## Rollback Procedure

### Vercel
1. Go to Deployments
2. Click on previous deployment
3. Click "Promote to Production"

### Self-Hosted
```bash
git log --oneline                    # View previous commits
git revert <commit-hash>             # Revert to previous version
npm run build && npm run start       # Rebuild and restart
```

---

## Support Contacts

- **Vercel Support**: https://vercel.com/support
- **Next.js Docs**: https://nextjs.org/docs/deployment
- **Tailwind CSS Support**: https://tailwindcss.com/docs
- **Framer Motion Help**: https://www.framer.com/motion/

---

## Deployment Timeline

```
Week 1: Pre-deployment setup
  - Configure form submission
  - Set up environment variables
  - Add custom domain
  - Run security audit

Week 2: Deployment
  - Deploy to staging
  - Final testing
  - Production deployment
  - Monitor logs

Week 3: Post-launch
  - Monitor performance
  - Gather user feedback
  - Optimize if needed
  - Plan incremental improvements
```

---

**Last Updated**: 2025-01-15  
**Status**: Ready for Deployment 🚀
