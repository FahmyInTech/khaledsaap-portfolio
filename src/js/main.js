// ===================================
// Main JavaScript File - Portfolio Website
// ===================================

// Import component modules
import { initMobileNav } from './components/mobile-nav.js';
import { initCarousel } from './components/carousel.js';
import { initAnimations } from './components/animations.js';
import { initWordCloud } from './components/word-cloud.js';
import { initTypingEffect } from './components/typing-effect.js';
import { initPortfolio } from './components/portfolio.js';
import { initClients } from './components/clients.js';
import { initContactPage } from './components/contact.js';
import { initCaseStudyNavigation } from './components/case-study-navigation.js';
import './components/experience.js';

// ===================================
// Global Functions
// ===================================

/**
 * Initialize all components when DOM is loaded
 */
function initApp() {
  console.log('Portfolio website initializing...');
  
  // Initialize components
  initMobileNav();
  initCarousel();
  initAnimations();
  initWordCloud();
  initTypingEffect();
  initPortfolio();
  initClients();
  initContactPage();
  initCaseStudyNavigation();
  // Experience animations are handled in experience.js
  
  // Initialize global features
  initHeaderScroll();
  initSmoothScrolling();
  initFormValidation();
  initLazyLoading();
  
  console.log('Portfolio website initialized successfully!');
}

/**
 * Handle header scroll effects
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class for styling
    if (scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll (optional)
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Initialize form validation
 */
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (validateForm(form)) {
        // Form is valid, you can submit it here
        console.log('Form is valid, submitting...');
        submitForm(form);
      }
    });
  });
}

/**
 * Validate form fields
 */
function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    if (input.hasAttribute('required') && !input.value.trim()) {
      showFieldError(input, 'This field is required');
      isValid = false;
    } else if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        showFieldError(input, 'Please enter a valid email address');
        isValid = false;
      } else {
        clearFieldError(input);
      }
    } else {
      clearFieldError(input);
    }
  });
  
  return isValid;
}

/**
 * Show field error message
 */
function showFieldError(input, message) {
  clearFieldError(input);
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'field-error';
  errorDiv.textContent = message;
  errorDiv.style.color = 'var(--color-error)';
  errorDiv.style.fontSize = 'var(--font-size-sm)';
  errorDiv.style.marginTop = 'var(--spacing-xs)';
  
  input.parentNode.appendChild(errorDiv);
  input.style.borderColor = 'var(--color-error)';
}

/**
 * Clear field error message
 */
function clearFieldError(input) {
  const existingError = input.parentNode.querySelector('.field-error');
  if (existingError) {
    existingError.remove();
  }
  input.style.borderColor = '';
}

/**
 * Submit form data
 */
function submitForm(form) {
  const formData = new FormData(form);
  const submitButton = form.querySelector('button[type="submit"]');
  
  // Show loading state
  if (submitButton) {
    submitButton.classList.add('btn-loading');
    submitButton.disabled = true;
  }
  
  // Simulate form submission (replace with actual submission logic)
  setTimeout(() => {
    if (submitButton) {
      submitButton.classList.remove('btn-loading');
      submitButton.disabled = false;
    }
    
    // Show success message
    showNotification('Message sent successfully!', 'success');
    form.reset();
  }, 2000);
}

/**
 * Initialize lazy loading for images
 */
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach(img => {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
    });
  }
}

/**
 * Show notification message
 */
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Style the notification
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: 'var(--spacing-md) var(--spacing-lg)',
    borderRadius: 'var(--border-radius-md)',
    color: 'var(--color-background)',
    fontWeight: 'var(--font-weight-medium)',
    zIndex: 'var(--z-modal)',
    transform: 'translateX(100%)',
    transition: 'transform var(--transition-normal)'
  });
  
  // Set background color based on type
  switch (type) {
    case 'success':
      notification.style.backgroundColor = 'var(--color-success)';
      break;
    case 'error':
      notification.style.backgroundColor = 'var(--color-error)';
      break;
    case 'warning':
      notification.style.backgroundColor = 'var(--color-warning)';
      break;
    default:
      notification.style.backgroundColor = 'var(--color-accent)';
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

/**
 * Utility function to debounce function calls
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Utility function to throttle function calls
 */
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===================================
// Event Listeners
// ===================================

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Handle window resize with debouncing
window.addEventListener('resize', debounce(() => {
  // Reinitialize components that depend on window size
  console.log('Window resized, reinitializing components...');
}, 250));

// Export functions for use in other modules
export {
  showNotification,
  debounce,
  throttle,
  validateForm
}; 