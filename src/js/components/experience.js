// Experience Page JavaScript

// Animation observer for timeline items
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all timeline items
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item[data-animate]');
    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // CV Modal Functionality
    const cvModal = document.getElementById('cv-modal');
    const cvPreviewBtn = document.getElementById('cv-preview-btn');
    const cvModalClose = document.getElementById('cv-modal-close');
    const cvModalOverlay = document.getElementById('cv-modal-overlay');

    // Open modal
    if (cvPreviewBtn) {
        cvPreviewBtn.addEventListener('click', () => {
            cvModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close modal functions
    const closeModal = () => {
        cvModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (cvModalClose) {
        cvModalClose.addEventListener('click', closeModal);
    }

    if (cvModalOverlay) {
        cvModalOverlay.addEventListener('click', closeModal);
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cvModal.classList.contains('active')) {
            closeModal();
        }
    });

    // CV Download button enhancement
    const cvDownloadBtn = document.querySelector('.cv-download-btn');
    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener('click', (e) => {
            // Add download animation
            cvDownloadBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                cvDownloadBtn.style.transform = '';
            }, 150);
        });
    }
}); 