// Mobile Navigation Component
export function initMobileNav() {
  const toggleButton = document.getElementById('mobile-menu-toggle');
  const menuOverlay = document.getElementById('mobile-menu-overlay');

  if (!toggleButton || !menuOverlay) {
    // If elements don't exist on a page, do nothing.
    return;
  }

  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !isExpanded);
    menuOverlay.classList.toggle('visible');
    // Prevent the page from scrolling when the menu is open
    document.body.classList.toggle('overflow-hidden');
  });

  // Close menu when clicking on a link
  const menuLinks = menuOverlay.querySelectorAll('.mobile-menu-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleButton.setAttribute('aria-expanded', 'false');
      menuOverlay.classList.remove('visible');
      document.body.classList.remove('overflow-hidden');
    });
  });

  // Close menu when clicking outside
  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      toggleButton.setAttribute('aria-expanded', 'false');
      menuOverlay.classList.remove('visible');
      document.body.classList.remove('overflow-hidden');
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('visible')) {
      toggleButton.setAttribute('aria-expanded', 'false');
      menuOverlay.classList.remove('visible');
      document.body.classList.remove('overflow-hidden');
    }
  });
}

/**
 * Open mobile menu
 */
function openMobileMenu() {
  const mobileMenuBtn = document.querySelector('.site-header__mobile-toggle');
  const nav = document.querySelector('.site-header__nav');
  const body = document.body;
  
  if (mobileMenuBtn && nav) {
    mobileMenuBtn.classList.add('active');
    nav.classList.add('active');
    body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Add focus trap for accessibility
    addFocusTrap(nav);
  }
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
  const mobileMenuBtn = document.querySelector('.site-header__mobile-toggle');
  const nav = document.querySelector('.site-header__nav');
  const body = document.body;
  
  if (mobileMenuBtn && nav) {
    mobileMenuBtn.classList.remove('active');
    nav.classList.remove('active');
    body.style.overflow = ''; // Restore scrolling
    
    // Remove focus trap
    removeFocusTrap();
  }
}

/**
 * Add focus trap for accessibility
 */
function addFocusTrap(container) {
  const focusableElements = container.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  );
  
  if (focusableElements.length === 0) return;
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  // Store original tabindex values
  container.dataset.originalTabindex = container.tabIndex;
  
  // Make container focusable
  container.tabIndex = -1;
  container.focus();
  
  // Handle tab key
  function handleTabKey(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  }
  
  container.addEventListener('keydown', handleTabKey);
  container.dataset.focusTrapHandler = handleTabKey;
}

/**
 * Remove focus trap
 */
function removeFocusTrap() {
  const nav = document.querySelector('.site-header__nav');
  if (!nav) return;
  
  // Restore original tabindex
  if (nav.dataset.originalTabindex !== undefined) {
    nav.tabIndex = nav.dataset.originalTabindex;
    delete nav.dataset.originalTabindex;
  }
  
  // Remove event listener
  if (nav.dataset.focusTrapHandler) {
    nav.removeEventListener('keydown', nav.dataset.focusTrapHandler);
    delete nav.dataset.focusTrapHandler;
  }
}

/**
 * Update active navigation link based on current page
 */
export function updateActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.site-header__nav-link, .mobile-menu-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Remove active class from all links
    link.classList.remove('site-header__nav-link--active', 'mobile-menu-link--active');
    
    // Add active class to current page link
    if (linkPath === currentPath || 
        (currentPath === '/' && linkPath === 'index.html') ||
        (currentPath.endsWith('.html') && linkPath === currentPath.split('/').pop())) {
      if (link.classList.contains('site-header__nav-link')) {
        link.classList.add('site-header__nav-link--active');
      } else if (link.classList.contains('mobile-menu-link')) {
        link.classList.add('mobile-menu-link--active');
      }
    }
  });
}

/**
 * Smooth scroll to section when clicking on navigation links
 */
export function initSmoothNavScroll() {
  const navLinks = document.querySelectorAll('.site-header__nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
} 