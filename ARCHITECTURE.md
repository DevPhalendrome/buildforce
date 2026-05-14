# Phalendrone Works - Architecture Setup Complete

## 📁 New Project Structure

```
phalendrone-works/
├── src/                          # Source files
│   ├── index.html               # Homepage
│   ├── css/
│   │   ├── styles.css          # Main stylesheet (imports all modules)
│   │   ├── variables.css        # Design tokens & custom properties
│   │   ├── base.css             # Typography & base styles
│   │   ├── layout.css           # Layout utilities & responsive
│   │   └── components.css       # Component styles (navbar, buttons, forms, etc.)
│   ├── js/
│   │   ├── main.js              # Entry point - initializes all components
│   │   ├── components/
│   │   │   ├── navbar.js        # Navigation component
│   │   │   ├── forms.js         # Form validation
│   │   │   ├── gallery.js       # Gallery filtering
│   │   │   └── lazy-loading.js  # Image lazy loading
│   │   └── utils/
│   │       └── helpers.js       # Utility functions
│   ├── components/              # HTML partials (for future templating)
│   │   ├── navbar.html
│   │   └── footer.html
│   ├── pages/
│   │   ├── about.html
│   │   ├── contact.html
│   │   ├── gallery.html
│   │   ├── privacy.html
│   │   └── terms.html
│   └── assets/
│       └── images/              # Project images
├── dist/                        # Production build (auto-generated)
├── package.json                 # Dependencies & npm scripts
├── vite.config.js              # Vite build configuration
├── .gitignore                  # Git ignored files
└── README.md                   # Architecture documentation

## Old Files (No Longer Needed)
- /css/ (replaced by /src/css/)
- /js/ (replaced by /src/js/)
- /pages/ (replaced by /src/pages/)
- /index.html (replaced by /src/index.html)
- /assets/ (replaced by /src/assets/)
```

## ✅ What's Included

### 1. **Modular CSS Architecture**
- **variables.css** - Design tokens (colors, spacing, typography, shadows, transitions)
- **base.css** - Base HTML styles and typography rules
- **layout.css** - Container, grid, flexbox utilities, responsive breakpoints
- **components.css** - Reusable component styles (navbar, buttons, forms, cards, gallery, footer)
- **styles.css** - Main file that imports all modules

### 2. **Modular JavaScript (ES Modules)**
- **main.js** - Entry point that initializes all components
- **components/navbar.js** - Mobile menu toggle functionality
- **components/forms.js** - Form validation with error handling
- **components/gallery.js** - Gallery category filtering
- **components/lazy-loading.js** - IntersectionObserver for image lazy loading
- **utils/helpers.js** - Reusable utility functions

### 3. **Reusable HTML Components**
- **navbar.html** - Navigation partial
- **footer.html** - Footer partial
(These can be used with templating engines in future)

### 4. **Build Tool (Vite)**
- Fast development server with HMR (Hot Module Reload)
- Optimized production builds
- Asset bundling and minification
- ES module support

## 🚀 Getting Started

### Installation
```bash
cd phalendrone-works
npm install
```

### Development Server
```bash
npm run dev
```
- Opens at http://localhost:3000
- Hot reload on file changes
- Full Vite dashboard

### Production Build
```bash
npm run build
```
- Creates optimized `/dist` folder
- All assets bundled and minified
- Ready for deployment

### Preview Production Build
```bash
npm run preview
```
- Serves the production build locally for testing

## 🎨 Design System

### Color Palette
- **Primary**: #2c3e50 (Dark charcoal - main brand color)
- **Accent**: #00a8a8 (Teal - highlights and CTAs)
- **Grayscale**: 10-level palette from #f9fafb to #111827
- **Semantic**: Success (#27ae60), Warning (#f39c12), Danger (#e74c3c), Info (#3498db)

### Typography
- **Font Family**: System font stack (-apple-system, Segoe UI, Roboto, etc.)
- **Sizes**: xs (0.75rem) → 5xl (3rem) with consistent scale
- **Line Heights**: tight (1.2), normal (1.5), relaxed (1.75)

### Spacing Scale
- Consistent scale from 0 to 6rem (--space-1 to --space-24)
- Used via CSS variables for consistent spacing

### Responsive Breakpoints
- **Mobile First** approach
- **Tablet**: max-width 768px
- **Mobile**: max-width 640px

## 📝 Project Statistics

### CSS
- **Total Lines**: ~800 across 5 modular files
- **Variables**: 50+ CSS custom properties for theming
- **Components**: 8 major components (navbar, buttons, forms, cards, gallery, footer, etc.)

### JavaScript
- **ES Modules**: 5 component modules + 1 utility module
- **Classes**: 5 component classes (Navbar, FormValidator, Gallery, LazyLoader, App)
- **No External Dependencies**: Pure vanilla JavaScript
- **Bundle Size**: Minimal (< 5KB with minification)

### HTML
- **Pages**: 6 pages (homepage + 5 content pages)
- **Semantic**: Proper semantic HTML structure
- **Accessibility**: ARIA labels and proper form elements

## 🔧 Key Features

### Navigation
- Sticky navbar with mobile hamburger menu
- Smooth scroll behavior for anchor links
- Accessible menu toggle

### Forms
- Full validation (required, email, tel formats)
- Error messages with visual feedback
- Proper accessibility with labels

### Gallery
- Responsive grid layout
- Category filtering with smooth transitions
- Hover effects on images

### Performance
- Lazy image loading with IntersectionObserver
- CSS transitions for smooth animations
- Optimized bundle with Vite

## 📦 Deployment

### To Deploy:
1. Run `npm run build`
2. Upload `/dist` folder to your web server
3. Files are optimized and production-ready

### Best Practices:
- ✅ Keep src/ for development
- ✅ Deploy `/dist` folder to production
- ✅ Use npm scripts for all builds
- ✅ Test responsive design at breakpoints
- ✅ Optimize images before adding to assets/

## 🛠️ Development Workflow

### Adding a New Page:
1. Create `/src/pages/new-page.html`
2. Include navbar and footer sections
3. Link to `../css/styles.css` and import `../js/main.js` as module
4. Vite automatically handles routing in development

### Adding a New Component:
1. Create `/src/js/components/new-component.js` with a class
2. Import and initialize in `/src/js/main.js`
3. Add component styles to `/src/css/components.css`

### Updating Design Tokens:
1. Modify `/src/css/variables.css`
2. All files using `var()` automatically update
3. No need to change component files

## 💡 Best Practices

- Use CSS custom properties for all values (colors, spacing, typography)
- Keep components small and focused
- Use ES6 modules for organized code structure
- Write semantic HTML
- Test on multiple devices before deploying
- Commit `/dist` separately or use `.gitignore`

## 📚 Resources

- **Vite Documentation**: https://vitejs.dev
- **CSS Variables Guide**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **ES Modules**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

---

**Architecture Version**: 1.0.0  
**Created**: February 2026  
**Last Updated**: February 21, 2026
