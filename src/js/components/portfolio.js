// Portfolio Data
const portfolioData = [
    // Banking & Finance
    { title: "Al Jazira Bank - Shariah Banking Launch", category: "banking-finance", slug: "aljazira-shariah", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757277414/AlJazira_Phone_1_ntshal.png" },
    { title: "Al Jazira Bank - Corporate Video", category: "banking-finance", slug: "aljazira-corporate-video", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757276822/bank-aijazira-banner-wap_tpo6n5.jpg" },
    { title: "Al Jazira Bank - Phone Banking Campaign", category: "banking-finance", slug: "aljazira-phone-banking", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757276398/AlJazira_Phone_1._PNG_vt9p8v.png" },
    { title: "Al Jazira Bank - Digital Banking Launch (Meet Digiman)", category: "banking-finance", slug: "aljazira-digital-banking", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757275027/Section_Image_Wallet_payment-2_dudavl.png" },
    { title: "Al Jazira Bank - Online Banking", category: "banking-finance", slug: "aljazira-online-banking", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757275137/file-10-1433965052951247300_zbt5xl.jpg" },
    { title: "Al Jazira Bank - Premier Account", category: "banking-finance", slug: "aljazira-premier", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757277414/AlJazira_Phone_1_ntshal.png" },
    { title: "BAJ Takaful Insurance Campaign", category: "banking-finance", slug: "baj-takaful", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757344992/images_yyrfsj.png" },
    { title: "Al Jazira Bank - Credit Card 0% Travel Offer", category: "banking-finance", slug: "aljazira-credit-card", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757273383/Visa_Travel_Benefits.Large_mbwwh4.jpg" },
    { title: "Al Jazira Bank - Titanium Card Campaign", category: "banking-finance", slug: "aljazira-titanium", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757277414/AlJazira_Phone_1_ntshal.png" },
    { title: "Bank Al Jazira - Ajwaa Credit Card Launch", category: "banking-finance", slug: "aljazira-ajwaa", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757257627/ajwaa-ar_uarii3.jpg" },
    { title: "NCB Bank (SNB) - Long-term Experience & Campaigns", category: "banking-finance", slug: "ncb-bank-snb", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757608417/NCB_Bank_SNB_gra0ir.png" },
    { title: "NCB Bank - Islamic Card Summer Promo", category: "banking-finance", slug: "ncb-islamic-card-promo", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757608417/NCB_Bank_SNB_gra0ir.png" },

    // Logos & Brand Identity
    { title: "Palma | Event Planning & Management", category: "logos-brand-identity", slug: "palma-identity", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758588857/palmaevent_logo_zotknt.png" },
    { title: "CPC | New Logo and Brand Identity", category: "logos-brand-identity", slug: "cpc-logo&brand", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757408153/cpc-construction-products-holding-company-logo-png_seeklogo-324992_soen5y.png" },
    { title: "Bloq | Logo Creations", category: "logos-brand-identity", slug: "bloq-logo", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757406579/Screenshot_2025-09-09_112831_jy9jgp.png" },
    { title: "AlReef Sugar | Brand Identity", category: "logos-brand-identity", slug: "alreef-sugar", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1756386153/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_2_vieebz.png" },
    { title: "Vibe On Application | Logo & Identity", category: "logos-brand-identity", slug: "vibe-on-app", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757630010/vibeon_fglqrt.png" },
    { title: "Wizzy Tales | AI-powered App", category: "logos-brand-identity", slug: "wizzy-tales", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757630785/Wizzy_Tales_ac4kyz.png" },
    { title: "AceLancer Souq - Brand Identity", category: "logos-brand-identity", slug: "acelancer-souq", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757255836/1200x630wa_segc4b.png" },

    // Telecommunications
    { title: "Zain - International Data Roaming Launch", category: "telecommunications", slug: "zain-international-roaming", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757631144/1393864021770083400_zlq3of.jpg" },
    { title: "Zain - Youth Unlimited YouTube Offers", category: "telecommunications", slug: "zain-youth-unlimited", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757631144/1393864021770083400_zlq3of.jpg" },
    { title: "Zain - Multi-Offer Campaign Series", category: "telecommunications", slug: "zain-multi-offer", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757631144/1393864021770083400_zlq3of.jpg" },
    { title: "Zain - Unlimited Kooora & YouTube Offer", category: "telecommunications", slug: "zain-unlimited-kooora", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757631144/1393864021770083400_zlq3of.jpg" },

    // Automotive
    { title: "Mitsubishi - 50th Anniversary in Saudi Arabia", category: "automotive", slug: "mitsubishi-50th", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757607440/Mitsubishi_2_srmqfu.png" },
    { title: "Rolls Royce - Ramadan Ad", category: "automotive", slug: "rolls-royce-ramadan", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757625454/Rolls-Royce_xtzy4l.png" },
    { title: "Rolls Royce - National Day Ad", category: "automotive", slug: "rolls-royce-national-day", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757625454/Rolls-Royce_xtzy4l.png" },
    { title: "Rolls-Royce - Valentine's Day Campaign", category: "automotive", slug: "rolls-royce-valentine", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757625454/Rolls-Royce_xtzy4l.png" },
    { title: "Mercedes-Benz - Ramadan Campaign", category: "automotive", slug: "mercedes-ramadan", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757606802/Mercedes_Benz_a2zexe.png" },
    { title: "Taajeer Group / MG - MG 6 Launch", category: "automotive", slug: "taajeer-mg6", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757628839/MG_tggmej.png" },
    { title: "Exceed by Chery - Brand Launch", category: "automotive", slug: "exceed-chery", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757406976/Chery-Font_pnulrw.jpg" },
    { title: "Chery Pro Series - Tiggo 4 / Arrizo 6 Launch", category: "automotive", slug: "chery-pro-series", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757406976/Chery-Font_pnulrw.jpg" },
    { title: "Faw Motors - Launch Campaign", category: "automotive", slug: "faw-motors", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757600486/faw_x5nhdn.png" },
    { title: "FUCHS Lubricants - Awareness Campaign", category: "automotive", slug: "fuchs-lubricants", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757600774/csm_Logo_Color_sRGB_f280e23a19_mkdpbh.png" },
    { title: "Eni Lubricants - Brand Launch", category: "automotive", slug: "eni-lubricants", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757599471/gallery-logo-1998-1_yov8kk.jpg" },
    { title: "Hankook - On-ground Activation", category: "automotive", slug: "hankook-activation", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757602739/a2d614d8b39a37420ac80770cabdc609_p6wnmq.jpg" },

    // FMCG
    { title: "OMO - National Day Campaign", category: "fmcg", slug: "omo-national-day", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757624817/OMO_2_i3b4cz.png" },
    { title: "OMO - Mother's Day Edition Campaign", category: "fmcg", slug: "omo-mothers-day", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757624817/OMO_2_i3b4cz.png" },
    { title: "Omelac Baby Milk - Launch Campaign", category: "fmcg", slug: "omelac-baby-milk", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757624203/Omelac-logo_s2fynj.jpg" },
    { title: "Tetra Pak - Awareness Campaign", category: "fmcg", slug: "tetra-pak", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757629314/Tetra-Pak-Egypt-10043-og_gkyfd7.webp" },
    { title: "Aquafina Water - Awareness Campaign", category: "fmcg", slug: "aquafina-water", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757343945/1440_AQUAFINA_Square-Full-Bleed_01_cm1rfj.jpg" },
    { title: "Tanmiah Chicken - Integrated Yearly Campaign", category: "fmcg", slug: "tanmiah-chicken", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757629084/93662_ebcltt.jpg" },
    { title: "Al Taj Cream - Campaign", category: "fmcg", slug: "al-taj-cream", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757632207/images_6_zeqza8.jpg" },

    // Construction Sector
    { title: "CPC - Awareness Campaigns (The Complete Building Solutions)", category: "construction-sector", slug: "cpc-awareness", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757408153/cpc-construction-products-holding-company-logo-png_seeklogo-324992_soen5y.png" },
    { title: "CPC - Subsidiaries Campaign", category: "construction-sector", slug: "cpc-subsidiaries", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757408153/cpc-construction-products-holding-company-logo-png_seeklogo-324992_soen5y.png" },
    { title: "CPC - 'Gift Boxes' Awareness Campaign", category: "construction-sector", slug: "cpc-gift-boxes", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757408153/cpc-construction-products-holding-company-logo-png_seeklogo-324992_soen5y.png" },
    { title: "CPC - Brand Consistency & Collaterals", category: "construction-sector", slug: "cpc-collaterals", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757408153/cpc-construction-products-holding-company-logo-png_seeklogo-324992_soen5y.png" },
    { title: "Bahra Cables - Awareness Campaign", category: "construction-sector", slug: "bahra-cables", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757344321/8hhCUauAkQBLhBiwKwvJT4tZnCaH9PVgSURDKvSQ_dfhwvu.webp" },

    // Health & Wellness
    { title: "Saudi Enaya - Health Insurance Launch Campaign", category: "health-wellness", slug: "saudi-enaya", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757628161/images_2_vztpd0.png" },
    { title: "Saudi Enaya - Awareness Campaign (Protective Sphere)", category: "health-wellness", slug: "saudi-enaya-awareness", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757628161/images_2_vztpd0.png" },
    { title: "Saudi Enaya - Brand Identity Project", category: "health-wellness", slug: "saudi-enaya-identity", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757628161/images_2_vztpd0.png" },
    { title: "AbbVie - Awareness & Health Campaigns", category: "health-wellness", slug: "abbvie-health", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757631981/AbbVieLogo_Preferred_DarkBlue_on_white_bmji5e.jpg" },

    // SME Programs
    { title: "Kafalah - 'One Purpose, Many Ideas' Campaign", category: "sme-programs", slug: "kafalah-many-ideas", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757603312/%D9%85%D9%86%D8%B4%D9%88%D8%B1_Instagram_%D8%A7%D9%82%D8%AA%D8%A8%D8%A7%D8%B3_%D8%A8%D8%A7%D9%84%D9%84%D9%88%D9%86_%D8%A7%D9%84%D8%A3%D8%B2%D8%B1%D9%82_nefep4.png" },
    { title: "Kafalah - 'Blueprint Concept' Campaign", category: "sme-programs", slug: "kafalah-blueprint", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757603312/%D9%85%D9%86%D8%B4%D9%88%D8%B1_Instagram_%D8%A7%D9%82%D8%AA%D8%A8%D8%A7%D8%B3_%D8%A8%D8%A7%D9%84%D9%84%D9%88%D9%86_%D8%A7%D9%84%D8%A3%D8%B2%D8%B1%D9%82_nefep4.png" },
   { title: "Kafalah - TV Commercial (TVC)", category: "sme-programs", slug: "kafalah-tvc", thumbnail: "https://res.cloudinary.com/dgqequjgk/image/upload/v1757603312/%D9%85%D9%86%D8%B4%D9%88%D8%B1_Instagram_%D8%A7%D9%82%D8%AA%D8%A8%D8%A7%D8%B3_%D8%A8%D8%A7%D9%84%D9%84%D9%88%D9%86_%D8%A7%D9%84%D8%A3%D8%B2%D8%B1%D9%82_nefep4.png" }

];

// Category display names
const categoryNames = {
    "logos-brand-identity": "Logos & Brand Identity",
    "banking-finance": "Banking & Finance",
    "telecommunications": "Telecommunications",
    "automotive": "Automotive",
    "fmcg": "FMCG",
    "construction-sector": "Construction Sector",
    "health-wellness": "Health & Wellness",
    "sme-programs": "SME Programs"
};

// Category Introduction Data
const categoryIntroductions = {
    "banking-finance": {
        title: "THE BANKING SECTION",
        headline: "TURNING TRUST INTO TRUTH",
        subtitle: "ONE BRAND AT A TIME.",
        description: "In a world ruled by digits and doubts, banking brands need more than trust: they need a voice. I spent years creating campaigns for top-tier financial institutions — not just building trust, but sparking emotional connection. From redefining corporate tone to rehumanizing Islamic and digital banking, I helped banks act more like brands: human, bold, and culturally sharp. These aren't just case studies — they're highlights with impact. And when words step back, the work speaks loud.",
        slug: "banking-finance"
    },
    "logos-brand-identity": {
        title: "BRAND IDENTITY SECTION",
        headline: "WHERE LOGOS BECOME LEGACIES",
        subtitle: "EVERY MARK TELLS A STORY.",
        description: "A logo is more than a symbol—it's the foundation of a brand's visual language. I've crafted identities that don't just represent companies, they embody their values, aspirations, and cultural relevance. From startups to established enterprises, each project begins with deep research into the brand's essence and ends with a visual system that resonates across all touchpoints. These aren't just designs; they're strategic tools that build recognition, trust, and emotional connection.",
        slug: "logos-brand-identity"
    },
    "telecommunications": {
        title: "TELECOMMUNICATIONS SECTION",
        headline: "CONNECTING BEYOND NETWORKS",
        subtitle: "BRIDGING DIGITAL DIVIDES.",
        description: "In the fast-paced world of telecommunications, brands must evolve beyond service providers to become lifestyle enablers. I've helped telecom giants transform their messaging from technical specifications to human experiences. Whether launching new data packages or redefining customer relationships, the focus has always been on making technology feel personal and accessible. These campaigns don't just sell services—they sell possibilities.",
        slug: "telecommunications"
    },
    "automotive": {
        title: "AUTOMOTIVE SECTION",
        headline: "DRIVING EMOTIONAL CONNECTION",
        subtitle: "WHERE MACHINES MEET DREAMS.",
        description: "Automotive marketing isn't about selling cars—it's about selling freedom, status, and aspiration. I've worked with luxury and mainstream brands to create campaigns that transcend product features and tap into the emotional journey of ownership. From launch campaigns to seasonal promotions, each project celebrates the relationship between driver and machine. These aren't just advertisements; they're invitations to experience life behind the wheel.",
        slug: "automotive"
    },
    "fmcg": {
        title: "FMCG SECTION",
        headline: "EVERYDAY BRANDS, EXTRAORDINARY IMPACT",
        subtitle: "MAKING THE MUNDANE MEMORABLE.",
        description: "Fast-moving consumer goods require a different kind of creativity—one that makes everyday products feel essential and exciting. I've helped brands break through the clutter with campaigns that resonate on both rational and emotional levels. From household essentials to personal care products, the challenge is always the same: make the familiar feel fresh and the ordinary feel extraordinary. These campaigns don't just drive sales—they build lasting brand relationships.",
        slug: "fmcg"
    },
    "construction-sector": {
        title: "CONSTRUCTION SECTION",
        headline: "BUILDING BRANDS FROM THE GROUND UP",
        subtitle: "WHERE STRENGTH MEETS STRATEGY.",
        description: "The construction sector demands a unique approach—one that balances technical expertise with accessible communication. I've helped construction companies and building material suppliers position themselves as trusted partners in development. From corporate identity projects to product awareness campaigns, the focus has been on building trust through clarity and reliability. These aren't just marketing materials—they're foundations for long-term business relationships.",
        slug: "construction-sector"
    },
    "health-wellness": {
        title: "HEALTH & WELLNESS SECTION",
        headline: "CARING BEYOND CURE",
        subtitle: "WHERE HEALTH MEETS HOPE.",
        description: "Health and wellness marketing requires a delicate balance of empathy, authority, and accessibility. I've worked with healthcare providers and wellness brands to create campaigns that educate, reassure, and inspire. From insurance launches to awareness campaigns, the goal has always been to make healthcare feel more human and less intimidating. These campaigns don't just promote services—they promote peace of mind and better living.",
        slug: "health-wellness"
    },
    "sme-programs": {
        title: "SME PROGRAMS SECTION",
        headline: "EMPOWERING ENTREPRENEURSHIP",
        subtitle: "WHERE IDEAS BECOME ENTERPRISES.",
        description: "Small and medium enterprises are the backbone of economic growth, and their success depends on effective communication and strategic positioning. I've worked with SME support programs to create campaigns that inspire, educate, and connect entrepreneurs with the resources they need. From awareness campaigns to educational initiatives, the focus has been on making complex programs accessible and appealing. These aren't just marketing efforts—they're catalysts for economic development.",
        slug: "sme-programs"
    }
};

// Generate category introduction card HTML
function generateCategoryIntroductionCard(category) {
    const intro = categoryIntroductions[category];
    if (!intro) return '';
    
            return `
            <div class="category-intro-card" data-category="${category}">
                <div class="category-intro-card__glow"></div>
                <div class="category-intro-card__background">
                    <div class="category-intro-card__pattern"></div>
                </div>
                <div class="category-intro-card__content">
                    <div class="category-intro-card__header">
                        <span class="category-intro-card__badge">${intro.title}</span>
                        <h2 class="category-intro-card__headline">
                            ${intro.headline}
                            <svg class="category-intro-card__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </h2>
                        <p class="category-intro-card__subtitle">${intro.subtitle}</p>
                    </div>
                </div>
                <a href="category-${intro.slug}.html" class="category-intro-card__link" aria-label="Explore ${categoryNames[category]} category"></a>
            </div>
        `;
}

// Generate portfolio item HTML
function generatePortfolioItem(project) {
    const categoryName = categoryNames[project.category] || project.category;
    
    return `
        <div class="portfolio-item" data-category="${project.category}">
            <div class="portfolio-item__glow"></div>
            <div class="portfolio-item__image">
                ${project.thumbnail ? 
                    `<img src="${project.thumbnail}" alt="${project.title}" class="portfolio-item__thumbnail" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                     <div class="portfolio-item__placeholder" style="display: none;">${project.title.charAt(0)}</div>` :
                    `<div class="portfolio-item__placeholder">${project.title.charAt(0)}</div>`
                }
                <div class="portfolio-item__overlay">
                    <div class="portfolio-item__view-btn">
                        <span>View Project</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="portfolio-item__content">
                <h3 class="portfolio-item__title">
                    ${project.title}
                    <svg class="portfolio-item__arrow" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </h3>
                <span class="portfolio-item__category">${categoryName}</span>
            </div>
            <a href="case-studies/${project.slug}.html" class="portfolio-item__link" aria-label="View ${project.title} case study"></a>
        </div>
    `;
}

// Filter portfolio items
function filterPortfolio(category) {
    const grid = document.getElementById('portfolio-grid');
    const items = document.querySelectorAll('.portfolio-item');
    
    if (!grid) return;
    
    // Show loading state
    grid.innerHTML = '<div class="portfolio-grid__loading"><div class="loading-spinner"></div></div>';
    
    // Simulate loading delay for smooth transition
    setTimeout(() => {
        if (category === 'all') {
            // Show all items without introduction card
            grid.innerHTML = portfolioData.map(generatePortfolioItem).join('');
        } else {
            // Filter items and add introduction card
            const filteredData = portfolioData.filter(project => project.category === category);
            
            if (filteredData.length === 0) {
                grid.innerHTML = `
                    <div class="portfolio-grid__empty">
                        <div class="portfolio-grid__empty-icon">🔍</div>
                        <div class="portfolio-grid__empty-text">No projects found</div>
                        <div class="portfolio-grid__empty-subtext">Try selecting a different category</div>
                    </div>
                `;
            } else {
                // Add introduction card at the top, then filtered projects
                const introCard = generateCategoryIntroductionCard(category);
                const projectItems = filteredData.map(generatePortfolioItem).join('');
                grid.innerHTML = introCard + projectItems;
            }
        }
        
        // Add animation to new items
        const newItems = document.querySelectorAll('.portfolio-item, .category-intro-card');
        newItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.4s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }, 300);
}

// Initialize portfolio functionality
export function initPortfolio() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const grid = document.getElementById('portfolio-grid');
    
    if (!grid) return;
    
    // Generate initial portfolio items
    grid.innerHTML = portfolioData.map(generatePortfolioItem).join('');
    
    // Check for URL parameters to auto-filter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam && categoryParam !== 'all') {
        // Find and activate the corresponding filter button
        const targetButton = document.querySelector(`[data-category="${categoryParam}"]`);
        if (targetButton) {
            filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
            targetButton.classList.add('filter-btn--active');
            filterPortfolio(categoryParam);
        }
    }
    
    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
            this.classList.add('filter-btn--active');
            
            // Update URL without page reload
            const url = new URL(window.location);
            if (category === 'all') {
                url.searchParams.delete('category');
            } else {
                url.searchParams.set('category', category);
            }
            window.history.pushState({}, '', url);
            
            // Filter items
            filterPortfolio(category);
        });
    });
    
    // Add hover effects to portfolio items
    document.addEventListener('mouseover', function(e) {
        const portfolioItem = e.target.closest('.portfolio-item');
        if (portfolioItem) {
            portfolioItem.style.transform = 'translateY(-8px) scale(1.02)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        const portfolioItem = e.target.closest('.portfolio-item');
        if (portfolioItem) {
            portfolioItem.style.transform = 'translateY(0) scale(1)';
        }
    });
    
    // Initialize smart filter visibility (hide/show on scroll)
    initSmartFilterVisibility();
}

// Smart hide/show functionality for portfolio filters
function initSmartFilterVisibility() {
    const filters = document.querySelector('.portfolio-filters');
    
    if (!filters) return;
    
    let lastScrollTop = 0;
    let isFiltersVisible = true;
    const scrollThreshold = 100;
    
    // Throttle scroll events for better performance
    let ticking = false;
    
    function updateFilterVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Only trigger if scroll distance is significant
        if (Math.abs(scrollTop - lastScrollTop) < scrollThreshold) {
            ticking = false;
            return;
        }
        
        // Hide filters when scrolling down, show when scrolling up
        if (scrollTop > lastScrollTop && scrollTop > 200 && isFiltersVisible) {
            // Scrolling down - hide filters
            filters.classList.add('portfolio-filters--hidden');
            isFiltersVisible = false;
        } else if (scrollTop < lastScrollTop && !isFiltersVisible) {
            // Scrolling up - show filters
            filters.classList.remove('portfolio-filters--hidden');
            isFiltersVisible = true;
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateFilterVisibility);
            ticking = true;
        }
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Show filters when user hovers near the top of the screen
    document.addEventListener('mousemove', (e) => {
        if (e.clientY < 150 && !isFiltersVisible) {
            filters.classList.remove('portfolio-filters--hidden');
            isFiltersVisible = true;
        }
    });
} 