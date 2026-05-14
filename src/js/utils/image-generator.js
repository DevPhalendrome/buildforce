/* ===== IMAGE GENERATOR ===== */

export class ImageGenerator {
    static generateBuildingSVG(index) {
        const colors = ['#2c3e50', '#00a8a8', '#34495e', '#008585', '#1a252f'];
        const colorIndex = index % colors.length;
        const color1 = colors[colorIndex];
        const color2 = colors[(colorIndex + 1) % colors.length];
        
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
            <defs>
                <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${color1};stop-opacity:1"/>
                    <stop offset="100%" style="stop-color:${color2};stop-opacity:1"/>
                </linearGradient>
            </defs>
            <rect width="400" height="500" fill="url(#grad${index})"/>
            <rect x="30" y="80" width="70" height="100" fill="#fff" opacity="0.3"/>
            <rect x="110" y="60" width="70" height="120" fill="#fff" opacity="0.25"/>
            <rect x="190" y="40" width="70" height="140" fill="#fff" opacity="0.2"/>
            <rect x="270" y="70" width="70" height="110" fill="#fff" opacity="0.25"/>
            <polygon points="100,80 200,20 300,80" fill="#00a8a8" opacity="0.3"/>
            <text x="200" y="280" font-family="Arial" font-size="28" fill="#fff" opacity="0.5" text-anchor="middle">Project</text>
        </svg>`;
        
        return `data:image/svg+xml;base64,${btoa(svg)}`;
    }

    static setImagePlaceholder(img, index) {
        img.src = this.generateBuildingSVG(index);
        img.style.display = 'block';
        img.dataset.placeholder = 'true';
    }

    static init() {
        // Initial setup on DOM ready
        const processImages = () => {
            document.querySelectorAll('img').forEach((img, index) => {
                // Skip logo and toggle button
                if (img.classList.contains('logo') || img.id === 'dark-mode-toggle') {
                    return;
                }

                // Check if image path is invalid or missing
                const src = img.src || '';
                const shouldReplace = src.includes('assets/images/') || 
                                     src.includes('undefined') || 
                                     src === '' ||
                                     src.startsWith('about:');

                if (shouldReplace && !img.dataset.placeholder) {
                    this.setImagePlaceholder(img, index);
                }

                // Add error handler for broken images
                img.addEventListener('error', () => {
                    if (!img.dataset.placeholder) {
                        this.setImagePlaceholder(img, index);
                    }
                });
            });
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', processImages);
        } else {
            processImages();
        }

        // Also watch for dynamically added images
        if (window.MutationObserver) {
            const observer = new MutationObserver(processImages);
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    }
}
