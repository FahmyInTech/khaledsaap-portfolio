// ===================================
// Animations Component
// ===================================

/**
 * Initialize all animations on the page
 */
export function initAnimations() {
  initScrollAnimations();
  // Removed parallax effects for better performance
  initTypingAnimation();
  initCounterAnimation();
  // Removed complex hover effects for better performance
}

/**
 * Initialize scroll-triggered animations
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  if (animatedElements.length === 0) return;
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationType = element.dataset.animate;
        const delay = element.dataset.delay || 0;
        
        setTimeout(() => {
          element.classList.add('animate', `animate-${animationType}`);
        }, delay);
        
        // Unobserve after animation is triggered
        observer.unobserve(element);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Initialize typing animation
 */
function initTypingAnimation() {
  const typingElements = document.querySelectorAll('[data-typing]');
  
  typingElements.forEach(element => {
    const text = element.textContent;
    const speed = element.dataset.typingSpeed || 150;
    
    element.textContent = '';
    element.style.visibility = 'visible';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    
    // Start typing when element comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriter();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(element);
  });
}

/**
 * Initialize counter animation
 */
function initCounterAnimation() {
  const counterElements = document.querySelectorAll('[data-counter]');
  
  if (counterElements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = parseInt(element.dataset.counter);
        const duration = parseInt(element.dataset.counterDuration) || 3000;
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          element.textContent = Math.floor(current);
        }, 16);
        
        observer.unobserve(element);
      }
    });
  });
  
  counterElements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Add CSS animation classes - simplified for better performance
 */
export function addAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Fade In Animation - simplified */
    .animate-fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease-out;
    }
    
    .animate-fade-in.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Slide In Left Animation - simplified */
    .animate-slide-left {
      opacity: 0;
      transform: translateX(-30px);
      transition: all 0.6s ease-out;
    }
    
    .animate-slide-left.animate {
      opacity: 1;
      transform: translateX(0);
    }
    
    /* Slide In Right Animation - simplified */
    .animate-slide-right {
      opacity: 0;
      transform: translateX(30px);
      transition: all 0.6s ease-out;
    }
    
    .animate-slide-right.animate {
      opacity: 1;
      transform: translateX(0);
    }
    
    /* Scale In Animation - simplified */
    .animate-scale {
      opacity: 0;
      transform: scale(0.9);
      transition: all 0.6s ease-out;
    }
    
    .animate-scale.animate {
      opacity: 1;
      transform: scale(1);
    }
    
    /* Bounce In Animation - simplified */
    .animate-bounce {
      opacity: 0;
      transform: scale(0.7);
      transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    .animate-bounce.animate {
      opacity: 1;
      transform: scale(1);
    }
    
    /* Stagger animation for lists - simplified */
    .animate-stagger > * {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease-out;
    }
    
    .animate-stagger.animate > * {
      opacity: 1;
      transform: translateY(0);
    }
    
    .animate-stagger.animate > *:nth-child(1) { transition-delay: 0.1s; }
    .animate-stagger.animate > *:nth-child(2) { transition-delay: 0.2s; }
    .animate-stagger.animate > *:nth-child(3) { transition-delay: 0.3s; }
    .animate-stagger.animate > *:nth-child(4) { transition-delay: 0.4s; }
    .animate-stagger.animate > *:nth-child(5) { transition-delay: 0.5s; }
    
    /* Simple hover animations - performance optimized */
    .hover-lift {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .hover-lift:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    
    .hover-glow {
      transition: box-shadow 0.3s ease;
    }
    
    .hover-glow:hover {
      box-shadow: 0 0 15px rgba(0, 122, 204, 0.2);
    }
    
    /* Loading animation - simplified */
    .loading {
      position: relative;
      overflow: hidden;
    }
    
    .loading::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      animation: loading 2s infinite;
    }
    
    @keyframes loading {
      0% { left: -100%; }
      100% { left: 100%; }
    }
    
    /* Pulse animation - simplified */
    .pulse {
      animation: pulse 3s infinite;
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }
    
    /* Fade in up animation - simplified */
    .fade-in-up {
      animation: fadeInUp 0.6s ease-out;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  
  document.head.appendChild(style);
}

/**
 * Trigger animation on element
 */
export function triggerAnimation(element, animationType = 'fade-in') {
  element.classList.add('animate', `animate-${animationType}`);
}

/**
 * Reset animation on element
 */
export function resetAnimation(element) {
  element.classList.remove('animate');
  element.classList.forEach(className => {
    if (className.startsWith('animate-')) {
      element.classList.remove(className);
    }
  });
}

// Initialize animation styles when module is loaded
addAnimationStyles();

 