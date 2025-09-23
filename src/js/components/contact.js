// Contact Page Enhancements with EmailJS Integration
export function initContactPage() {
    const form = document.querySelector('#contactForm');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const formGroups = document.querySelectorAll('.form-group[data-step]');
    
    if (!form) return;
    
    let currentStep = 0;
    const totalSteps = formGroups.length;
    
    // Initialize EmailJS
    function initEmailJS() {
        // Initialize EmailJS with your public key
        emailjs.init("N0sxu-8v3zgFHH4vk");
        console.log('EmailJS initialized');
    }
    
    // Update progress
    function updateProgress() {
        if (!progressFill || !progressText) return;
        
        const progress = (currentStep / totalSteps) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Step ${currentStep + 1} of ${totalSteps}`;
    }
    
    // Check form completion
    function checkFormCompletion() {
        const requiredFields = form.querySelectorAll('[required]');
        const filledRequiredFields = Array.from(requiredFields).filter(field => field.value.trim() !== '');
        const completionRate = filledRequiredFields.length / requiredFields.length;
        
        currentStep = Math.floor(completionRate * totalSteps);
        updateProgress();
    }
    
    // Validate form
    function validateForm() {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = 'var(--color-error)';
                isValid = false;
            } else {
                field.style.borderColor = '';
            }
        });
        
        // Validate email format
        const emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value)) {
                emailField.style.borderColor = 'var(--color-error)';
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    // Show notification
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '600',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            fontSize: '14px'
        });
        
        // Set background color based on type
        switch (type) {
            case 'success':
                notification.style.backgroundColor = '#10b981';
                break;
            case 'error':
                notification.style.backgroundColor = '#ef4444';
                break;
            case 'warning':
                notification.style.backgroundColor = '#f59e0b';
                break;
            default:
                notification.style.backgroundColor = '#3b82f6';
        }
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
    
    // Add event listeners to form fields
    formGroups.forEach(group => {
        const inputs = group.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', checkFormCompletion);
            input.addEventListener('change', checkFormCompletion);
            input.addEventListener('blur', checkFormCompletion);
            
            // Clear error styling on input
            input.addEventListener('input', function() {
                if (this.style.borderColor === 'var(--color-error)' || this.style.borderColor === 'rgb(239, 68, 68)') {
                    this.style.borderColor = '';
                }
            });
        });
    });
    
    // Form submission with EmailJS
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }
        
        const submitBtn = form.querySelector('.contact-form__submit');
        const originalText = submitBtn.querySelector('span').textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = 'Sending...';
        submitBtn.style.opacity = '0.8';
        
        // Collect form data
        const formData = new FormData(form);
        const templateParams = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            company: formData.get('company') || 'Not specified',
            project_type: formData.get('project-type') || 'Not specified',
            budget: formData.get('budget') || 'Not specified',
            message: formData.get('message'),
            to_name: 'Khaled Saab' // Your name
        };
        
        // EmailJS configuration
        
        const serviceID = 'service_hy7gnjm';
        const templateID = 'template_nhcw623';
        
        // Send email using EmailJS
        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success state
                submitBtn.querySelector('span').textContent = 'Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                // Show success notification
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset form after delay
                setTimeout(() => {
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.querySelector('span').textContent = originalText;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.background = '';
                    currentStep = 0;
                    updateProgress();
                }, 2000);
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                
                // Show error state
                submitBtn.querySelector('span').textContent = 'Failed to Send';
                submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                
                // Show error notification
                showNotification('Failed to send message. Please try again or contact me directly.', 'error');
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.querySelector('span').textContent = originalText;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.background = '';
                }, 3000);
            });
    });
    
    // Initialize EmailJS and progress
    initEmailJS();
    updateProgress();
    
    // Add subtle floating elements animation
    const floatingShapes = document.querySelectorAll('.floating-shape');
    floatingShapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 2}s`;
    });
    
    // Add gentle scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe form groups for gentle animation
    formGroups.forEach(group => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(10px)';
        group.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(group);
    });
    
    // Add subtle hover effects to contact info items
    const contactInfoItems = document.querySelectorAll('.contact-info__item');
    contactInfoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.01)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initContactPage); 