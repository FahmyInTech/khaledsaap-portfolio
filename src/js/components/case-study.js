/**
 * Case Study Lightbox Functionality
 * Provides interactive image viewing with smooth animations and navigation
 */

class CaseStudyLightbox {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.getElementById('lightbox-image');
        this.lightboxCaption = document.getElementById('lightbox-caption');
        this.lightboxCounter = document.getElementById('lightbox-counter');
        this.closeButton = document.getElementById('lightbox-close');
        this.prevButton = document.getElementById('lightbox-prev');
        this.nextButton = document.getElementById('lightbox-next');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        
        this.currentIndex = 0;
        this.totalImages = this.galleryItems.length;
        
        // Debug logging
        console.log('CaseStudyLightbox initialized');
        console.log('Lightbox elements found:', {
            lightbox: !!this.lightbox,
            lightboxImage: !!this.lightboxImage,
            lightboxCaption: !!this.lightboxCaption,
            lightboxCounter: !!this.lightboxCounter,
            closeButton: !!this.closeButton,
            prevButton: !!this.prevButton,
            nextButton: !!this.nextButton,
            galleryItems: this.galleryItems.length
        });
        
        // Debug gallery items
        console.log('Gallery items found:', this.galleryItems.length);
        this.galleryItems.forEach((item, index) => {
            console.log(`Gallery item ${index}:`, {
                dataset: item.dataset,
                dataImage: item.dataset.image,
                dataCaption: item.dataset.caption
            });
        });
        
        this.init();
    }

    init() {
        // Add click event listeners to gallery items
        this.galleryItems.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentIndex = index;
                this.openLightbox(item);
            });
        });

        // Close lightbox events
        this.closeButton.addEventListener('click', () => this.closeLightbox());
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });

        // Navigation events
        this.prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            this.navigate('prev');
        });
        
        this.nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            this.navigate('next');
        });

        // Keyboard support - Simplified and more reliable
        document.addEventListener('keydown', (e) => {
            // Only handle keys when lightbox is active
            if (!this.lightbox.classList.contains('active')) return;
            
            console.log('Key pressed:', e.key);
            
            switch(e.key) {
                case 'Escape':
                    e.preventDefault();
                    this.closeLightbox();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('ArrowLeft - navigating prev');
                    this.navigate('prev');
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('ArrowRight - navigating next');
                    this.navigate('next');
                    break;
            }
        });

        // Prevent body scroll when lightbox is open
        this.lightbox.addEventListener('transitionend', () => {
            if (this.lightbox.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    openLightbox(item) {
        const imageSrc = item.dataset.image;
        const caption = item.dataset.caption;

        // Set image source and caption
        this.lightboxImage.src = imageSrc;
        this.lightboxImage.alt = caption;
        this.lightboxCaption.textContent = caption;

        // Show lightbox with animation
        this.lightbox.classList.add('active');

        // Update navigation buttons state and counter
        this.updateNavigationState();
        this.updateCounter();

        // Focus management for accessibility
        this.closeButton.focus();
        
        console.log('Lightbox opened for image:', imageSrc);
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
        
        console.log('Lightbox closed');
    }

    navigate(direction) {
        if (direction === 'prev') {
            this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.totalImages - 1;
        } else {
            this.currentIndex = this.currentIndex < this.totalImages - 1 ? this.currentIndex + 1 : 0;
        }

        const targetItem = this.galleryItems[this.currentIndex];
        if (!targetItem) {
            console.error('Target item not found!');
            return;
        }
        
        const imageSrc = targetItem.dataset.image;
        const caption = targetItem.dataset.caption;

        // Update image and caption with smooth transition
        this.lightboxImage.style.opacity = '0';
        
        setTimeout(() => {
            this.lightboxImage.src = imageSrc;
            this.lightboxImage.alt = caption;
            this.lightboxCaption.textContent = caption;
            this.lightboxImage.style.opacity = '1';
        }, 150);

        // Update navigation buttons state and counter
        this.updateNavigationState();
        this.updateCounter();
    }

    updateNavigationState() {
        // Update navigation buttons visibility (hide if only one image)
        if (this.totalImages <= 1) {
            this.prevButton.style.display = 'none';
            this.nextButton.style.display = 'none';
        } else {
            this.prevButton.style.display = 'flex';
            this.nextButton.style.display = 'flex';
        }
    }

    updateCounter() {
        if (this.lightboxCounter) {
            this.lightboxCounter.textContent = `${this.currentIndex + 1} / ${this.totalImages}`;
        }
    }
}

// Initialize lightbox when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CaseStudyLightbox();
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CaseStudyLightbox;
} 