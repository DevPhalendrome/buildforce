/* ===== FORM VALIDATION COMPONENT ===== */

export class FormValidator {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
            this.submitForm();
        }
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateInput(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateInput(input) {
        const value = input.value.trim();
        
        if (!value) {
            this.showError(input, 'This field is required');
            return false;
        }

        if (input.type === 'email' && !this.isValidEmail(value)) {
            this.showError(input, 'Please enter a valid email');
            return false;
        }

        if (input.type === 'tel' && !this.isValidPhone(value)) {
            this.showError(input, 'Please enter a valid phone number');
            return false;
        }

        this.clearError(input);
        return true;
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    isValidPhone(phone) {
        return /^[\d\s\-\+\(\)]{10,}$/.test(phone);
    }

    showError(input, message) {
        this.clearError(input);
        const error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = 'var(--danger)';
        error.style.fontSize = 'var(--text-sm)';
        error.style.marginTop = 'var(--space-2)';
        error.textContent = message;
        
        input.parentNode.appendChild(error);
        input.style.borderColor = 'var(--danger)';
    }

    clearError(input) {
        const error = input.parentNode.querySelector('.error-message');
        if (error) error.remove();
        input.style.borderColor = '';
    }

    submitForm() {
        const formData = new FormData(this.form);
        const submitButton = this.form.querySelector('button[type="submit"]');
        
        // Disable button and show loading state
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            // Send to form service endpoint (formspree, netlify forms, etc.)
            // For now: simulate API call with setTimeout
            this.sendFormData(formData).then(() => {
                this.showSuccess();
                this.form.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }).catch((error) => {
                this.showError('Failed to submit. Please try again or call us directly.');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        } catch (error) {
            this.showError('An error occurred. Please try again.');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }

    sendFormData(formData) {
        // TODO: Replace with actual API endpoint
        // Example: POST to /api/contact or formspree endpoint
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }

    showSuccess() {
        const successMsg = document.createElement('div');
        successMsg.className = 'form-message form-message--success';
        successMsg.textContent = '✓ Thank you! We\'ll contact you within 24 hours.';
        successMsg.setAttribute('role', 'alert');
        this.form.parentNode.insertBefore(successMsg, this.form);
        
        setTimeout(() => successMsg.remove(), 5000);
    }

    showError(message) {
        const errorMsg = document.createElement('div');
        errorMsg.className = 'form-message form-message--error';
        errorMsg.textContent = message;
        errorMsg.setAttribute('role', 'alert');
        this.form.parentNode.insertBefore(errorMsg, this.form);
    }
}
