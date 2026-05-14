/* ===== LAZY LOADING COMPONENT ===== */

export class LazyLoader {
    constructor(imageSelector = 'img[data-src]') {
        this.images = document.querySelectorAll(imageSelector);
        if (this.images.length > 0) {
            this.init();
        }
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '50px' });

            this.images.forEach(img => observer.observe(img));
            
            // Load images that are already visible in viewport
            setTimeout(() => {
                this.images.forEach(img => {
                    if (img.dataset.src && !img.src) {
                        const rect = img.getBoundingClientRect();
                        if (rect.top < window.innerHeight && rect.bottom > 0) {
                            this.loadImage(img);
                        }
                    }
                });
            }, 100);
        } else {
            // Fallback for browsers without IntersectionObserver
            this.images.forEach(img => this.loadImage(img));
        }
    }

    loadImage(img) {
        const src = img.dataset.src;
        if (src && !img.src) {
            const tempImg = new Image();
            tempImg.onload = () => {
                img.src = src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                img.style.opacity = '1';
            };
            tempImg.onerror = () => {
                img.classList.add('failed');
                img.alt = 'Image failed to load';
                // Set a placeholder or error image
                img.style.backgroundColor = 'var(--gray-700)';
            };
            tempImg.src = src;
        }
    }
}
