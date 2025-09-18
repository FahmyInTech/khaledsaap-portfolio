// ===================================
// Carousel Component
// ===================================

/**
 * Initialize all carousels on the page
 */
export function initCarousel() {
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach((carousel, index) => {
    initSingleCarousel(carousel, index);
  });
}

/**
 * Initialize a single carousel
 */
function initSingleCarousel(carousel, index) {
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const indicators = carousel.querySelectorAll('.carousel-indicator');
  const autoPlay = carousel.dataset.autoplay === 'true';
  const autoPlaySpeed = parseInt(carousel.dataset.autoplaySpeed) || 5000;
  
  let currentSlide = 0;
  let isTransitioning = false;
  let autoPlayInterval;
  
  if (slides.length === 0) return;
  
  // Initialize carousel
  updateCarousel();
  
  // Event listeners for navigation buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (!isTransitioning) {
        goToSlide(currentSlide - 1);
      }
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (!isTransitioning) {
        goToSlide(currentSlide + 1);
      }
    });
  }
  
  // Event listeners for indicators
  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      if (!isTransitioning && i !== currentSlide) {
        goToSlide(i);
      }
    });
  });
  
  // Keyboard navigation
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (!isTransitioning) goToSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (!isTransitioning) goToSlide(currentSlide + 1);
    }
  });
  
  // Touch/swipe support
  let startX = 0;
  let endX = 0;
  
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  
  carousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });
  
  // Mouse drag support
  let isDragging = false;
  let dragStartX = 0;
  let dragEndX = 0;
  
  carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    carousel.style.cursor = 'grabbing';
  });
  
  carousel.addEventListener('mousemove', (e) => {
    if (isDragging) {
      e.preventDefault();
    }
  });
  
  carousel.addEventListener('mouseup', (e) => {
    if (isDragging) {
      isDragging = false;
      dragEndX = e.clientX;
      carousel.style.cursor = '';
      handleSwipe();
    }
  });
  
  carousel.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      carousel.style.cursor = '';
    }
  });
  
  // Auto-play functionality
  if (autoPlay) {
    startAutoPlay();
    
    // Pause auto-play on hover
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    
    // Pause auto-play on focus
    carousel.addEventListener('focusin', stopAutoPlay);
    carousel.addEventListener('focusout', startAutoPlay);
  }
  
  /**
   * Go to specific slide
   */
  function goToSlide(slideIndex) {
    if (isTransitioning) return;
    
    isTransitioning = true;
    
    // Handle infinite loop
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    
    const prevSlide = currentSlide;
    currentSlide = slideIndex;
    
    // Update slides
    slides[prevSlide].classList.remove('active');
    slides[currentSlide].classList.add('active');
    
    // Update indicators
    if (indicators.length > 0) {
      indicators[prevSlide]?.classList.remove('active');
      indicators[currentSlide]?.classList.add('active');
    }
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Trigger transition end
    setTimeout(() => {
      isTransitioning = false;
    }, 300); // Match CSS transition duration
  }
  
  /**
   * Update carousel display
   */
  function updateCarousel() {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === currentSlide) {
        slide.classList.add('active');
      }
    });
    
    indicators.forEach((indicator, i) => {
      indicator.classList.remove('active');
      if (i === currentSlide) {
        indicator.classList.add('active');
      }
    });
    
    updateNavigationButtons();
  }
  
  /**
   * Update navigation button states
   */
  function updateNavigationButtons() {
    if (prevBtn) {
      prevBtn.disabled = currentSlide === 0 && !carousel.dataset.loop;
    }
    
    if (nextBtn) {
      nextBtn.disabled = currentSlide === slides.length - 1 && !carousel.dataset.loop;
    }
  }
  
  /**
   * Handle swipe gestures
   */
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = Math.abs(startX - endX);
    
    if (diff > swipeThreshold) {
      if (startX > endX) {
        // Swipe left - next slide
        goToSlide(currentSlide + 1);
      } else {
        // Swipe right - previous slide
        goToSlide(currentSlide - 1);
      }
    }
  }
  
  /**
   * Start auto-play
   */
  function startAutoPlay() {
    if (autoPlayInterval) return;
    
    autoPlayInterval = setInterval(() => {
      if (!isTransitioning) {
        goToSlide(currentSlide + 1);
      }
    }, autoPlaySpeed);
  }
  
  /**
   * Stop auto-play
   */
  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }
  
  // Public methods for external control
  carousel.goToSlide = goToSlide;
  carousel.next = () => goToSlide(currentSlide + 1);
  carousel.prev = () => goToSlide(currentSlide - 1);
  carousel.startAutoPlay = startAutoPlay;
  carousel.stopAutoPlay = stopAutoPlay;
}

/**
 * Create carousel indicators
 */
export function createCarouselIndicators(carousel, count) {
  const indicatorsContainer = carousel.querySelector('.carousel-indicators');
  if (!indicatorsContainer) return;
  
  indicatorsContainer.innerHTML = '';
  
  for (let i = 0; i < count; i++) {
    const indicator = document.createElement('button');
    indicator.className = 'carousel-indicator';
    indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
    indicator.setAttribute('data-slide', i);
    
    indicatorsContainer.appendChild(indicator);
  }
}

/**
 * Initialize testimonial carousel
 */
export function initTestimonialCarousel() {
  const testimonialCarousel = document.querySelector('.testimonial-carousel');
  if (!testimonialCarousel) return;
  
  const testimonials = testimonialCarousel.querySelectorAll('.testimonial-item');
  
  if (testimonials.length === 0) return;
  
  let currentIndex = 0;
  let autoPlayInterval;
  
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? 'block' : 'none';
    });
  }
  
  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }
  
  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }
  
  // Initialize
  showTestimonial(currentIndex);
  
  // Auto-play
  autoPlayInterval = setInterval(nextTestimonial, 6000);
  
  // Pause on hover
  testimonialCarousel.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
  });
  
  testimonialCarousel.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextTestimonial, 6000);
  });
  
  // Navigation buttons
  const prevBtn = testimonialCarousel.querySelector('.testimonial-prev');
  const nextBtn = testimonialCarousel.querySelector('.testimonial-next');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', prevTestimonial);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', nextTestimonial);
  }
} 