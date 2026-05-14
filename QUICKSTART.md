# 🎯 Quick Start Guide - Phalendrone Works

## What's New?

Your website now has a **professional, scalable architecture** with:

✅ **Modular CSS** - 5 organized stylesheets with design tokens  
✅ **Component-Based JS** - ES modules with reusable component classes  
✅ **Modern Build Tool** - Vite for fast development and optimized builds  
✅ **Reusable Components** - HTML partials for navbar, footer  
✅ **Configuration Files** - package.json, vite.config.js, .gitignore  

## Folder Structure

```
src/                    ← All development files
├── index.html         ← Homepage
├── css/               ← Modular stylesheets
│   ├── variables.css  ← Design tokens
│   ├── base.css       ← Typography & base
│   ├── layout.css     ← Layout utilities
│   ├── components.css ← Component styles
│   └── styles.css     ← Main import file
├── js/                ← JavaScript modules
│   ├── main.js        ← Entry point
│   ├── components/    ← Reusable classes
│   └── utils/         ← Helper functions
├── pages/             ← Content pages
└── assets/images/     ← Project images
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Opens at **http://localhost:3000** with hot reload

### 3. Build for Production
```bash
npm run build
```
Creates optimized `/dist` folder for deployment

### 4. Preview Production Build
```bash
npm run preview
```
Test the production build locally

## File Locations Reference

| Need to... | File Location |
|-----------|---------------|
| Change colors/theme | `src/css/variables.css` |
| Update typography | `src/css/base.css` |
| Modify navbar style | `src/css/components.css` |
| Add form validation | `src/js/components/forms.js` |
| Add gallery filters | `src/js/components/gallery.js` |
| Add new page | `src/pages/new-page.html` |
| Update build settings | `vite.config.js` at root |

## Design System

### Colors
- **Primary**: #2c3e50 (charcoal)
- **Accent**: #00a8a8 (teal)
- All defined in `src/css/variables.css`

### Spacing
- Scale from `--space-0` to `--space-24`
- Use in CSS with `var(--space-4)`, `var(--space-8)`, etc.

### Typography
- Sizes: `--text-xs` to `--text-5xl`
- Line heights: `--line-tight`, `--line-normal`, `--line-relaxed`

## Key Components

### Navbar (`src/js/components/navbar.js`)
- Mobile hamburger menu
- Smooth transitions
- Auto-closes on link click

### Form Validator (`src/js/components/forms.js`)
- Email/phone validation
- Error message display
- Full accessibility

### Gallery Filter (`src/js/components/gallery.js`)
- Category-based filtering
- Smooth opacity transitions
- No external dependencies

### Lazy Loading (`src/js/components/lazy-loading.js`)
- IntersectionObserver API
- Fallback for older browsers
- Smooth fade in

## Development Best Practices

✅ **CSS**: Use `var()` for colors, spacing, typography  
✅ **JS**: Keep components small and focused  
✅ **HTML**: Use semantic markup (`<section>`, `<article>`, etc.)  
✅ **Responsive**: Mobile-first with media queries at 768px and 640px  
✅ **Performance**: Images are lazy-loaded automatically  

## Deployment

1. Run `npm run build`
2. Upload the `/dist` folder to your server
3. All files are optimized and production-ready

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Styles not loading | Check CSS import path in HTML (should be `../css/styles.css` from pages) |
| Scripts not working | Ensure `<script type="module" src="...">` is used |
| Images not showing | Verify image path from `src/assets/images/` |
| Mobile menu not working | Check navbar.js in browser console for errors |

## File Tree

```
phalendrone-works/
├── .gitignore              # Git ignore rules
├── ARCHITECTURE.md         # Architecture documentation
├── README.md              # Project overview
├── package.json           # Dependencies & scripts
├── vite.config.js        # Vite configuration
├── src/                  # Source files
│   ├── index.html
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   ├── components/
│   │   │   ├── navbar.js
│   │   │   ├── forms.js
│   │   │   ├── gallery.js
│   │   │   └── lazy-loading.js
│   │   └── utils/
│   │       └── helpers.js
│   ├── pages/
│   │   ├── about.html
│   │   ├── contact.html
│   │   ├── gallery.html
│   │   ├── privacy.html
│   │   └── terms.html
│   ├── components/
│   │   ├── navbar.html
│   │   └── footer.html
│   └── assets/
│       └── images/
├── dist/                 # Production build (auto-generated)
├── node_modules/         # Dependencies
└── QUICKSTART.md        # This file
```

## Next Steps

1. ✅ Install: `npm install`
2. ✅ Develop: `npm run dev`
3. ✅ Build: `npm run build` when ready for production
4. ✅ Deploy: Upload `/dist` to server

---

For more details, see **ARCHITECTURE.md**
