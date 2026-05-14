# Quick Reference Guide - Phalendrone Works Next.js

## Running the Project

```bash
# Installation
npm install

# Development
npm run dev          # Runs on http://localhost:3001

# Production
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check types and lint rules
```

---

## Component Usage Examples

### 1. Using the Button Component
```tsx
import Button from '@/components/ui/Button'

<Button variant="primary" size="lg">Click Me</Button>
<Button variant="secondary" disabled>Disabled</Button>
```

### 2. Creating a New Section
```tsx
'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import Container from '@/components/ui/Container'

export default function NewSection() {
  return (
    <section id="section-id" className="section-padding bg-white">
      <Container>
        <SectionHeader
          title="Section Title"
          subtitle="Optional subtitle text"
        />
        {/* Your content here */}
      </Container>
    </section>
  )
}
```

### 3. Adding an Image
```tsx
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={1200}
  height={800}
  className="rounded-lg"
/>
```

### 4. Using Framer Motion
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### 5. Responsive Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Items automatically adjust to 1 col on mobile, 2 on tablet, 3 on desktop */}
</div>
```

---

## Tailwind CSS Quick Reference

### Colors
```
Primary Colors:
- bg-dark / text-dark: #0f0f0f
- bg-accent / text-accent: #ff6b35
- bg-gray-{50-900}: Grayscale palette

Usage: <div className="bg-accent text-white">Orange on white</div>
```

### Spacing
```
Padding: p-{1-12} where 1=0.25rem, 2=0.5rem, etc.
Margin: m-{1-12} / mt-{1-12} (margin-top) / mb, ml, mr
Gap: gap-{1-12} (for flex/grid)

Examples:
p-4 = 1rem padding
mt-8 = 2rem margin-top
gap-6 = 1.5rem gap between items
```

### Responsive Breakpoints
```
Mobile first (no prefix): < 640px
sm: 640px+
md: 768px+    (tablet)
lg: 1024px+   (desktop)
xl: 1280px+   (large desktop)

Usage: className="text-lg md:text-xl lg:text-2xl"
```

### Common Utilities
```
Flexbox: flex flex-col gap-4 items-center justify-between
Grid: grid grid-cols-2 gap-4
Display: block inline flex hidden
Positioning: absolute fixed sticky relative
Hover: hover:bg-accent transition duration-300
```

---

## File Structure Navigation

```
Main Homepage → app/page.tsx
├── Navbar → components/layout/Navbar.tsx
├── Hero → components/sections/Hero.tsx
├── Services → components/sections/Services.tsx
├── Gallery → components/sections/Gallery.tsx
├── About → components/sections/About.tsx
├── CTA → components/sections/CTA.tsx
├── Contact (section) → components/sections/Contact.tsx
└── Footer → components/layout/Footer.tsx

Dedicated Contact Page → app/contact/page.tsx
└── ContactForm → components/ContactForm.tsx
    └── Submits to → app/api/contact/route.ts

Design System → app/globals.css
Configuration → tailwind.config.js, next.config.js
```

---

## Common Tasks

### Add a New Service Card
Edit `components/sections/Services.tsx`, add to the `services` array:
```tsx
const services = [
  // ... existing services
  {
    icon: SomeIcon,
    title: 'New Service',
    description: 'Service description here.'
  }
]
```

### Add Images to Gallery
1. Place images in `/public/images/`
2. Edit `components/sections/Gallery.tsx`
3. Add to `galleryImages` array:
```tsx
const galleryImages = [
  // ... existing images
  { src: '/images/your-image.jpg', alt: 'Image alt text' }
]
```

### Update Navbar Links
Edit `components/layout/Navbar.tsx`:
```tsx
<Link href="#section-id">Link Text</Link>
```

### Style a Component
Use Tailwind classes in `className`:
```tsx
<div className="bg-accent text-white p-6 rounded-lg hover:shadow-lg transition">
  Styled content
</div>
```

### Add New Page
1. Create folder: `app/new-page/`
2. Add file: `page.tsx`
3. Navbar automatically available (it's in root layout)
4. Access at: `/new-page`

### Update Footer
Edit `components/layout/Footer.tsx` - 4 column structure:
- Brand column
- Services column  
- Company links column
- Contact/social column

---

## Form Handling

### Contact Form Location
- Component: `components/ContactForm.tsx`
- Handles validation and submission
- Submits to: `POST /api/contact`

### Form Configuration
Edit `ContactForm.tsx` to:
- Add/remove fields
- Change validation rules
- Modify service options
- Update error messages

### API Configuration
Edit `app/api/contact/route.ts` to:
- Integrate with email service (Resend, SendGrid, Formspree)
- Add database storage
- Configure email templates
- Add spam protection

---

## Styling Guidelines

### Color Usage
- **Primary (Dark #0f0f0f)**: Text, backgrounds, sections
- **Accent (Orange #ff6b35)**: Buttons, highlights, calls-to-action
- **Gray Scale**: Text hierarchy, borders, subtle backgrounds
- **White**: Cards, content areas, text on dark

### Typography
- **Headings**: Using `.text-h1`, `.text-h2`, etc. classes
- **Body text**: `.text-body` or default `text-base`
- **Small text**: `.text-small` for captions, labels

### Spacing
- **Section padding**: Use `section-padding` utility
- **Card padding**: Use `p-6` or `p-8`
- **Gap between items**: Use `gap-4` through `gap-8`
- **Between sections**: Use `mb-16` or `mt-16`

---

## Animation Guidelines

### Using Framer Motion
All animations use these patterns:
```tsx
initial={{ opacity: 0, y: 20 }}      // Start state
whileInView={{ opacity: 1, y: 0 }}   // End state (when in viewport)
transition={{ duration: 0.6 }}       // Duration
viewport={{ once: true }}            // Animate only once
```

### Common Animations
- Fade-in: `initial={{ opacity: 0 }}` → `whileInView={{ opacity: 1 }}`
- Slide up: `initial={{ y: 20 }}` → `whileInView={{ y: 0 }}`
- Scale: `initial={{ scale: 0.8 }}` → `whileInView={{ scale: 1 }}`

---

## Performance Tips

1. **Use Next.js Image component** always for images
2. **Lazy load heavy components** with `dynamic()` if needed
3. **Keep animations smooth** with `transition={{ duration: 0.6 }}`
4. **Optimize images** (WebP format, proper sizing)
5. **Limit font sizes** to improve rendering
6. **Use CSS utilities** instead of custom CSS when possible

---

## Deployment Checklist

- [ ] All images optimized and in `/public/images/`
- [ ] Form submission configured (email service)
- [ ] Meta tags updated for each page
- [ ] Navigation links tested
- [ ] Mobile responsive verified
- [ ] No console errors
- [ ] Build successful: `npm run build`
- [ ] `npm run lint` passes
- [ ] Analytics configured
- [ ] Domain/DNS configured
- [ ] SSL certificate ready

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 in use | Dev server uses 3001 automatically |
| Images not showing | Check `/public/images/` folder path |
| Styles not applying | Verify Tailwind class names (typos?) |
| Component not rendering | Check `'use client'` directive if using hooks |
| Build errors | Run `npm install` and `npm run build` |
| TypeScript errors | Check `tsconfig.json` paths config |

---

## Useful Commands

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run linting
npm install PACKAGE      # Install new package
npm audit fix            # Fix security vulnerabilities
rm -r .next              # Clear build cache
```

---

## Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev/
- React Docs: https://react.dev/

---

**Last Updated**: 2025-01-15  
**Maintained by**: Development Team
