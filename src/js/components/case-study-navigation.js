// ===================================
// Case Study Navigation Component
// ===================================

// Portfolio data in correct order (same as portfolio.js)
const caseStudyOrder = [
    // Banking & Finance
    { title: "Al Jazira Bank - Shariah Banking Launch", slug: "aljazira-shariah" },
    { title: "Al Jazira Bank - Corporate Video", slug: "aljazira-corporate-video" },
    { title: "Al Jazira Bank - Phone Banking Campaign", slug: "aljazira-phone-banking" },
    { title: "Al Jazira Bank - Digital Banking Launch (Meet Digiman)", slug: "aljazira-digital-banking" },
    { title: "Al Jazira Bank - Online Banking", slug: "aljazira-online-banking" },
    { title: "Al Jazira Bank - Premier Account", slug: "aljazira-premier" },
    { title: "BAJ Takaful Insurance Campaign", slug: "baj-takaful" },
    { title: "Al Jazira Bank - Credit Card 0% Travel Offer", slug: "aljazira-credit-card" },
    { title: "Al Jazira Bank - Titanium Card Campaign", slug: "aljazira-titanium" },
    { title: "Bank Al Jazira - Ajwaa Credit Card Launch", slug: "aljazira-ajwaa" },
    { title: "NCB Bank (SNB) - Long-term Experience & Campaigns", slug: "ncb-bank-snb" },
    { title: "NCB Bank - Islamic Card Summer Promo", slug: "ncb-islamic-card-promo" },

    // Logos & Brand Identity
    { title: "Palma | Event Planning & Management", slug: "palma-identity" },
    { title: "CPC | New Logo and Brand Identity", slug: "cpc-logo&brand" },
    { title: "Bloq | Logo Creations", slug: "bloq-logo" },
    { title: "AlReef Sugar | Brand Identity", slug: "alreef-sugar" },
    { title: "Vibe On Application | Logo & Identity", slug: "vibe-on-app" },
    { title: "Wizzy Tales | AI-powered App", slug: "wizzy-tales" },
    { title: "AceLancer Souq - Brand Identity", slug: "acelancer-souq" },

    // Telecommunications
    { title: "Zain - International Data Roaming Launch", slug: "zain-international-roaming" },
    { title: "Zain - Youth Unlimited YouTube Offers", slug: "zain-youth-unlimited" },
    { title: "Zain - Multi-Offer Campaign Series", slug: "zain-multi-offer" },
    { title: "Zain - Unlimited Kooora & YouTube Offer", slug: "zain-unlimited-kooora" },

    // Automotive
    { title: "Mitsubishi - 50th Anniversary in Saudi Arabia", slug: "mitsubishi-50th" },
    { title: "Rolls Royce - Ramadan Ad", slug: "rolls-royce-ramadan" },
    { title: "Rolls Royce - National Day Ad", slug: "rolls-royce-national-day" },
    { title: "Rolls-Royce - Valentine's Day Campaign", slug: "rolls-royce-valentine" },
    { title: "Mercedes-Benz - Ramadan Campaign", slug: "mercedes-ramadan" },
    { title: "Mitsubishi - Tactical Pajero / L200 Campaigns", slug: "mitsubishi-tactical" },
    { title: "Taajeer Group / MG - MG 6 Launch", slug: "taajeer-mg6" },
    { title: "Exceed by Chery - Brand Launch", slug: "exceed-chery" },
    { title: "Chery Pro Series - Tiggo 4 / Arrizo 6 Launch", slug: "chery-pro-series" },
    { title: "Faw Motors - Launch Campaign", slug: "faw-motors" },
    { title: "FUCHS Lubricants - Awareness Campaign", slug: "fuchs-lubricants" },
    { title: "Eni Lubricants - Brand Launch", slug: "eni-lubricants" },
    { title: "Hankook - On-ground Activation", slug: "hankook-activation" },

    // FMCG
    { title: "OMO - National Day Campaign", slug: "omo-national-day" },
    { title: "OMO - Mother's Day Edition Campaign", slug: "omo-mothers-day" },
    { title: "Omelac Baby Milk - Launch Campaign", slug: "omelac-baby-milk" },
    { title: "Tetra Pak - Awareness Campaign", slug: "tetra-pak" },
    { title: "Aquafina Water - Awareness Campaign", slug: "aquafina-water" },
    { title: "Tanmiah Chicken - Integrated Yearly Campaign", slug: "tanmiah-chicken" },
    { title: "Al Taj Cream - Campaign", slug: "al-taj-cream" },

    // Construction Sector
    { title: "CPC - Awareness Campaigns (The Complete Building Solutions)", slug: "cpc-awareness" },
    { title: "CPC - Subsidiaries Campaign", slug: "cpc-subsidiaries" },
    { title: "CPC - 'Gift Boxes' Awareness Campaign", slug: "cpc-gift-boxes" },
    { title: "CPC - Brand Consistency & Collaterals", slug: "cpc-collaterals" },
    { title: "Bahra Cables - Awareness Campaign", slug: "bahra-cables" },

    // Health & Wellness
    { title: "Saudi Enaya - Health Insurance Launch Campaign", slug: "saudi-enaya" },
    { title: "Saudi Enaya - Awareness Campaign (Protective Sphere)", slug: "saudi-enaya-awareness" },
    { title: "Saudi Enaya - Brand Identity Project", slug: "saudi-enaya-identity" },
    { title: "AbbVie - Awareness & Health Campaigns", slug: "abbvie-health" },

    // SME Programs
    { title: "Kafalah - 'One Purpose, Many Ideas' Campaign", slug: "kafalah-many-ideas" },
    { title: "Kafalah - 'Blueprint Concept' Campaign", slug: "kafalah-blueprint" },
    { title: "Kafalah - TV Commercial (TVC)", slug: "kafalah-tvc" }
];

/**
 * Initialize case study navigation
 */
export function initCaseStudyNavigation() {
    // Get current page filename
    const currentPage = getCurrentPageSlug();
    
    if (!currentPage) return;
    
    // Find current case study in the order
    const currentIndex = caseStudyOrder.findIndex(item => item.slug === currentPage);
    
    if (currentIndex === -1) return;
    
    // Get previous and next case studies
    const prevCaseStudy = currentIndex > 0 ? caseStudyOrder[currentIndex - 1] : null;
    const nextCaseStudy = currentIndex < caseStudyOrder.length - 1 ? caseStudyOrder[currentIndex + 1] : null;
    
    // Update navigation links
    updateNavigationLinks(prevCaseStudy, nextCaseStudy);
}

/**
 * Get current page slug from URL
 */
function getCurrentPageSlug() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    if (!filename || filename === 'index.html' || filename === '') {
        return null;
    }
    
    // Remove .html extension
    return filename.replace('.html', '');
}

/**
 * Update navigation links in the DOM
 */
function updateNavigationLinks(prevCaseStudy, nextCaseStudy) {
    const prevLink = document.querySelector('.case-study-navigation__link--prev');
    const nextLink = document.querySelector('.case-study-navigation__link--next');
    
    // Update previous link
    if (prevLink && prevCaseStudy) {
        prevLink.href = `${prevCaseStudy.slug}.html`;
        const prevTitle = prevLink.querySelector('.case-study-navigation__title');
        if (prevTitle) {
            prevTitle.textContent = prevCaseStudy.title;
        }
        // Fix previous arrow to point left
        const prevIcon = prevLink.querySelector('.case-study-navigation__icon');
        if (prevIcon) {
            prevIcon.innerHTML = '<path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
        }
        prevLink.style.display = 'flex';
    } else if (prevLink) {
        // Hide previous link if no previous case study
        prevLink.style.display = 'none';
    }
    
    // Update next link
    if (nextLink && nextCaseStudy) {
        nextLink.href = `${nextCaseStudy.slug}.html`;
        const nextTitle = nextLink.querySelector('.case-study-navigation__title');
        if (nextTitle) {
            nextTitle.textContent = nextCaseStudy.title;
        }
        // Keep next arrow pointing right
        const nextIcon = nextLink.querySelector('.case-study-navigation__icon');
        if (nextIcon) {
            nextIcon.innerHTML = '<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
        }
        nextLink.style.display = 'flex';
    } else if (nextLink) {
        // Hide next link if no next case study
        nextLink.style.display = 'none';
    }
}





/**
 * Get navigation data for a specific case study (for manual use)
 */
export function getCaseStudyNavigation(slug) {
    const currentIndex = caseStudyOrder.findIndex(item => item.slug === slug);
    
    if (currentIndex === -1) {
        return { prev: null, next: null };
    }
    
    const prevCaseStudy = currentIndex > 0 ? caseStudyOrder[currentIndex - 1] : null;
    const nextCaseStudy = currentIndex < caseStudyOrder.length - 1 ? caseStudyOrder[currentIndex + 1] : null;
    
    return {
        prev: prevCaseStudy,
        next: nextCaseStudy
    };
}

/**
 * Get all case studies in order (for debugging or other uses)
 */
export function getAllCaseStudies() {
    return [...caseStudyOrder];
}
