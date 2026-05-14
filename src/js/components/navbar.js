/* ===== NAVBAR COMPONENT ===== */

export class Navbar {
    constructor() {
        this.toggle = document.querySelector('.nav-toggle');
        this.menu = document.querySelector('.nav-menu');
        this.navbar = document.querySelector('.navbar');
        this.menuItems = document.querySelectorAll('.nav-menu a');
        this.darkModeToggle = document.querySelector('#dark-mode-toggle');
        
        if (this.toggle) {
            this.init();
        }
        
        if (this.darkModeToggle) {
            this.initDarkMode();
        }
    }

    init() {
        this.toggle.addEventListener('click', () => this.handleToggle());
        this.menuItems.forEach(item => {
            item.addEventListener('click', () => this.closeMenu());
        });
        
        // Add scroll effect
        window.addEventListener('scroll', () => this.handleScroll());
    }

    initDarkMode() {
        // Check localStorage for saved preference
        const isDarkMode = localStorage.getItem('dark-mode') !== 'false';
        
        if (isDarkMode) {
            document.documentElement.classList.remove('light-mode');
            this.darkModeToggle.textContent = '☀️';
        } else {
            document.documentElement.classList.add('light-mode');
            this.darkModeToggle.textContent = '🌙';
        }
        
        // Add click event
        this.darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
    }

    toggleDarkMode() {
        const isCurrentlyDark = !document.documentElement.classList.contains('light-mode');
        
        if (isCurrentlyDark) {
            // Switch to light mode
            document.documentElement.classList.add('light-mode');
            localStorage.setItem('dark-mode', 'false');
            this.darkModeToggle.textContent = '🌙';
        } else {
            // Switch to dark mode
            document.documentElement.classList.remove('light-mode');
            localStorage.setItem('dark-mode', 'true');
            this.darkModeToggle.textContent = '☀️';
        }
    }

    handleToggle() {
        this.toggle.classList.toggle('active');
        this.menu.classList.toggle('active');
    }

    closeMenu() {
        this.toggle.classList.remove('active');
        this.menu.classList.remove('active');
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }
}
