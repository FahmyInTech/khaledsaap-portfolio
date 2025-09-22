// استيراد كل ملفات الـ SVG من فولدر logos
const logos = import.meta.glob('@/assets/images/logos/*.{svg,png,jpg,jpeg}', { eager: true, import: 'default' });
// Clients Data with enhanced information
const clientsData = {
  automotive: [
    { name: "FAW", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240062/faw_mqurhq.svg", description: "A leading Chinese automotive manufacturing company.", projects: 1 },
    { name: "Fuchs", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240062/fuchs_znusxf.svg", description: "A global group that develops, produces, and distributes lubricants.", projects: 1 },
    { name: "Hankook", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240070/hankook-tire-white_hxfsjn.svg", description: "A major South Korean tire manufacturing company.", projects: 1 },
    { name: "Honda", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240037/honda-automobiles-1_hdwvo5.svg", description: "A Japanese multinational conglomerate known for automobiles and motorcycles.", projects: 1 },
    { name: "Mercedes-Benz", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240041/mercedes-benz-9_vgzij8.svg", description: "A global luxury and commercial vehicle automotive brand.", projects: 1 },
    { name: "Mitsubishi", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240041/mitsubishi_xhgc90.svg", description: "A Japanese multinational automotive manufacturer.", projects: 2 },
    { name: "Petromin", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240043/PETROMIN_l53sjd.svg", description: "A leading lubricants and automotive services company in Saudi Arabia.", projects: 1 },
    { name: "Renault", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240045/renault_qosbj6.svg", description: "A French multinational automobile manufacturer.", projects: 1 },
    { name: "Rolls-Royce", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240043/rolls-royce_ta5uro.svg", description: "A British luxury automobile maker.", projects: 3 }
  ],
  service: [
    { name: "Careem", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240060/careem_dtx9ko.svg", description: "A leading ride-hailing and delivery service in the Middle East.", projects: 1 },
    { name: "Hyatt Regency", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240036/Hyatt_Regency_Logo_Vector_u5bhyr.svg", description: "A global brand of major hotels and resorts.", projects: 1 },
    { name: "International Medical Center", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240037/International_Medical_Center_Logo_SVG_PNG_t585o5.svg", description: "A multi-disciplinary hospital providing comprehensive healthcare services.", projects: 1 },
    { name: "King Faisal Specialist Hospital", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240039/king-faisal-specialist-hospital-research-centre-seeklogo_bosc3m.svg", description: "A leading tertiary healthcare organization in the Middle East.", projects: 1 },
    { name: "National Water Company", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240041/National_Water_Company_wjwtxa.svg", description: "The state-owned water utility provider in Saudi Arabia.", projects: 1 },
    { name: "Zain", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240052/Zain_fteygg.svg", description: "A leading mobile telecommunications provider across the Middle East and Africa.", projects: 4 }
  ],
  financial: [
    { name: "Al Rajhi Takaful", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240053/Al_Rajhi_Takaful_idnVnJYgo9_1_fzxgac.svg", description: "A major provider of cooperative insurance solutions in Saudi Arabia.", projects: 1 },
    { name: "Al Ahli Bank (NCB)", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240053/Alahli-01_bhlrvm.svg", description: "One of the largest commercial banks in Saudi Arabia.", projects: 1 },
    { name: "Alinma Bank", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240054/Alinma-01_biynyi.svg", description: "A prominent Sharia-compliant banking institution in Saudi Arabia.", projects: 1 },
    { name: "Bank Aljazira", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240060/Bank_ALjazira_arudad.svg", description: "A leading Islamic banking institution in Saudi Arabia.", projects: 10 },
    { name: "Kafalah", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240037/Kafalah_id5N_Dr8Qy_0_ucyrco.png", description: "A Saudi government program that supports financing for SMEs.", projects: 1 },
    { name: "Taajeer Finance", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240048/taajeer-finance-seeklogo_lpoeoq.png", description: "A financial services company specializing in leasing and financing.", projects: 1 },
    { name: "Saudi Exchange (Tadawul)", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240040/Main-Logo-PNG-Format_bhrqgc.svg", description: "The official stock exchange of Saudi Arabia.", projects: 1 }
  ],
  fmcg: [
    { name: "Almarai", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240055/Almarai_ajiurl.svg", description: "The world's largest vertically integrated dairy company.", projects: 1 },
    { name: "Dabur", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240061/Dabur-Logo.wine_cmoxfm.svg", description: "A leading Indian multinational consumer goods company.", projects: 1 },
    { name: "Goody", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240068/goody_xuej4p.svg", description: "A well-known Saudi brand for canned food products.", projects: 1 },
    { name: "Nestlé", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240042/nestle-4_jky5w7.svg", description: "A Swiss multinational food and drink processing conglomerate.", projects: 1 },
    { name: "Unilever", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240052/unilever-4_onhror.svg", description: "A British multinational consumer goods company.", projects: 1 }
  ],
  industrial: [
    { name: "BAE Systems", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240059/bae-systems-1_xa9x5r.svg", description: "A British multinational arms, security, and aerospace company.", projects: 1 },
    { name: "CPC (Construction Products Holding)", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240061/Cpc_Construction_Products_Holding_Company_Logo_Vector_j6qype.svg", description: "A leading manufacturer of building materials in the region.", projects: 4 },
    { name: "Jotun", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240036/jotun_g3jcq9.svg", description: "A Norwegian multinational chemicals company dealing in decorative paints and performance coatings.", projects: 1 },
    { name: "Tetra Pak", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240051/tetra-pak-1_kzi8rf.svg", description: "A multinational food packaging and processing company.", projects: 1 }
  ],
  "health-wellness": [
    { name: "AbbVie", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240053/abbvie-1_rbkmcp.svg", description: "A global biopharmaceutical company focused on developing advanced therapies.", projects: 1 },
    { name: "Diet Center", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240061/diet-center_mekfqc.svg", description: "A leading provider of healthy meals and nutritional consultation.", projects: 1 },
    { name: "Saudi Enaya", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240052/8311.SR_BIG_hrmdhp.svg", description: "A cooperative health insurance company in Saudi Arabia.", projects: 2 }
  ],
  retail: [
    { name: "Garnier", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240062/garnier-2_kyfdgm.svg", description: "A mass-market cosmetics brand of French cosmetics company L'Oréal.", projects: 1 },
    { name: "Panda", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240043/panda-retail-company-seeklogo_twwgfj.svg", description: "One of the largest grocery retail chains in Saudi Arabia.", projects: 1 }
  ],
  destination: [
    { name: "KAEC (King Abdullah Economic City)", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240038/king-abdullah-economic-city-kaec-seeklogo_gns1gu.svg", description: "A megaproject and tourist destination on the Red Sea coast.", projects: 1 },
    { name: "Saudi Arabian Airlines", filename: "https://res.cloudinary.com/dgqequjgk/image/upload/v1758240045/saudi-arabian-airlines_r6qb7r.svg", description: "The national flag carrier airline of Saudi Arabia.", projects: 1 }
  ]
};

// Category display names and icons
const categoryNames = {
  automotive: "Automotive",
  service: "Service",
  financial: "Financial",
  fmcg: "FMCG (Fast-Moving Consumer Goods)",
  industrial: "Industrial",
  "health-wellness": "Health & Wellness",
  retail: "Retail",
  destination: "Destination"
};

// Industry icons for each category
const categoryIcons = {
  automotive: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
  service: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  financial: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>`,
  fmcg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>`,
  industrial: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  "health-wellness": `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H6v-2h4V7h2v4h4v2h-4v4z"/></svg>`,
  retail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>`,
  destination: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`
};

// Generate client card HTML
function generateClientCard(client, category) {
  const categoryName = categoryNames[category] || category;
  const categoryIcon = categoryIcons[category] || '';
  
  return `
    <div class="client-card" data-category="${category}">
      <div class="client-card__header">
        <div class="client-card__logo">
        <img src="${
  client.filename.startsWith('http') 
    ? client.filename 
    : logos[`/src/assets/images/logos/${client.filename}`]
}" alt="${client.name} Logo" loading="lazy">

        </div>
        <div class="client-card__badges">
          <span class="client-card__projects-badge">${client.projects} Projects</span>
        </div>
      </div>
      
      <div class="client-card__content">
        <h3 class="client-card__name">${client.name}</h3>
        <p class="client-card__description">${client.description}</p>
        <div class="client-card__category">
          <span class="client-card__category-icon">${categoryIcon}</span>
          <span class="client-card__category-name">${categoryName}</span>
        </div>
      </div>
    </div>
  `;
}

// Generate category section HTML
function generateCategorySection(category, clients) {
  const categoryName = categoryNames[category] || category;
  
  return `
    <section class="client-category" data-category="${category}">
      <div class="client-category__header">
        <h2 class="client-category__title">${categoryName}</h2>
        <p class="client-category__count">${clients.length} Clients</p>
      </div>
      <div class="client-category__grid">
        ${clients.map(client => generateClientCard(client, category)).join('')}
      </div>
    </section>
  `;
}

// Filter clients by category
function filterClients(category) {
  const container = document.querySelector('.clients-grid__container');
  
  if (!container) return;
  
  // Show loading state
  container.innerHTML = '<div class="clients-grid__loading"><div class="loading-spinner"></div></div>';
  
  // Simulate loading delay for smooth transition
  setTimeout(() => {
    if (category === 'all') {
      // Show all categories
      const allSections = Object.entries(clientsData).map(([category, clients]) => 
        generateCategorySection(category, clients)
      );
      container.innerHTML = allSections.join('');
    } else {
      // Show specific category
      const categoryClients = clientsData[category] || [];
      
      if (categoryClients.length === 0) {
        container.innerHTML = `
          <div class="clients-grid__empty">
            <div class="clients-grid__empty-icon">🏢</div>
            <div class="clients-grid__empty-text">No clients found</div>
            <div class="clients-grid__empty-subtext">Try selecting a different category</div>
          </div>
        `;
      } else {
        container.innerHTML = generateCategorySection(category, categoryClients);
      }
    }
    
    // Add animation to new sections
    const newSections = document.querySelectorAll('.client-category');
    newSections.forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        section.style.transition = 'all 0.4s ease';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, 300);
}

// Initialize clients functionality
export function initClients() {
  const filterButtons = document.querySelectorAll('.client-filter-btn');
  const container = document.querySelector('.clients-grid__container');
  
  if (!container) return;
  
  // Generate initial client sections
  const allSections = Object.entries(clientsData).map(([category, clients]) => 
    generateCategorySection(category, clients)
  );
  container.innerHTML = allSections.join('');
  
  // Add click event listeners to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('client-filter-btn--active'));
      this.classList.add('client-filter-btn--active');
      
      // Filter clients
      filterClients(category);
    });
  });
  
  // Add hover effects to client cards
  document.addEventListener('mouseover', function(e) {
    const clientCard = e.target.closest('.client-card');
    if (clientCard) {
      clientCard.style.transform = 'translateY(-8px) scale(1.02)';
    }
  });
  
  document.addEventListener('mouseout', function(e) {
    const clientCard = e.target.closest('.client-card');
    if (clientCard) {
      clientCard.style.transform = 'translateY(0) scale(1)';
    }
  });
  
  // Add error handling for missing images
  document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && e.target.closest('.client-card__logo')) {
      const clientName = e.target.alt.replace(' Logo', '');
      e.target.style.display = 'none';
      e.target.parentElement.innerHTML = `
        <div style="
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          color: var(--color-accent);
          background: rgba(0, 139, 139, 0.1);
          border-radius: 8px;
        ">
          ${clientName.charAt(0)}
        </div>
      `;
    }
  }, true);
  
  // Initialize smart filter visibility (hide/show on scroll)
  initSmartFilterVisibility();
}

// Smart hide/show functionality for clients filters
function initSmartFilterVisibility() {
  const filters = document.querySelector('.clients-filters');
  
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
      filters.classList.add('clients-filters--hidden');
      isFiltersVisible = false;
    } else if (scrollTop < lastScrollTop && !isFiltersVisible) {
      // Scrolling up - show filters
      filters.classList.remove('clients-filters--hidden');
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
      filters.classList.remove('clients-filters--hidden');
      isFiltersVisible = true;
    }
  });
} 