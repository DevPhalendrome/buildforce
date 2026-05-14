/* ===== GALLERY COMPONENT ===== */

export class Gallery {
    constructor(gallerySelector = '.gallery-grid', filterSelector = '.filter-btn') {
        this.gallery = document.querySelector(gallerySelector);
        this.filterButtons = document.querySelectorAll(filterSelector);
        
        if (this.gallery && this.filterButtons.length > 0) {
            this.init();
        }
    }

    init() {
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });
    }

    handleFilter(e) {
        const filter = e.target.dataset.filter || 'all';
        const items = this.gallery.querySelectorAll('[data-category]');

        // Update active button and aria-pressed attributes
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });
        e.target.classList.add('active');
        e.target.setAttribute('aria-pressed', 'true');

        // Filter items
        items.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'block';
                    item.style.opacity = '1';
                }, 0);
            } else {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }
}
