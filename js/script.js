/* script.js is for handling fade-in animations and rendering articles in blog.html */

document.addEventListener('DOMContentLoaded', function() {

  /* ========== NAV LINK ACTIVE STATES ========== */
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    
    const linkHref = link.getAttribute('href');
    
    // flexible matching system
    let isMatch = false;
    
    // direct match
    if (linkHref === currentPath) {
      isMatch = true;
    }
    // handle index.html cases
    else if (linkHref === 'index.html' && (currentPath === '/' || currentPath.endsWith('/') || currentPath.endsWith('/index.html'))) {
      isMatch = true;
    }
    // handle other HTML files
    else if (currentPath.endsWith('/' + linkHref)) {
      isMatch = true;
    }
    
    if (isMatch) {
      link.classList.add('active');
    }
  });

  /* ========== NAVBAR LIGHT/DARK TOGGLE FUNCTION ========== */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  const root = document.documentElement;

  // LIGHT THEME palette
  const lightTheme = {
    '--off-black': 'hsl(0, 0%, 95%)',
    '--dark-surface': 'hsl(0, 0%, 100%)',
    '--elevated-surface': 'hsl(220, 15%, 96%)',
    '--divider': 'hsl(220, 13%, 85%)',
    '--text-primary': 'hsl(0, 0%, 20%)',
    '--text-secondary': 'hsl(215, 14%, 45%)',
    '--text-heading': 'hsl(0, 0%, 10%)'
  };
  // DARK THEME palette
  const darkTheme = {
    '--off-black': 'hsl(0, 0%, 9%)',
    '--dark-surface': 'hsl(220, 14%, 12%)',
    '--elevated-surface': 'hsl(220, 15%, 20%)',
    '--divider': 'hsl(220, 13%, 25%)',
    '--text-primary': 'hsl(0, 0%, 88%)',
    '--text-secondary': 'hsl(215, 14%, 65%)',
    '--text-heading': 'hsl(0, 0%, 100%)'
  };

  // check user's preferred theme and apply it
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);
  updateThemeButton(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
  });

  function applyTheme(theme) {
    const colors = theme === 'dark' ? darkTheme : lightTheme;
    
    // apply colors to CSS variables
    Object.entries(colors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
    
    // set data-theme attribute for specific overrides
    root.setAttribute('data-theme', theme);
  }

  function updateThemeButton(theme) {
    if (theme === 'dark') {
      themeIcon.className = 'bi bi-sun me-2';
      themeText.textContent = 'Light Mode';
    } else {
      themeIcon.className = 'bi bi-moon me-2';
      themeText.textContent = 'Dark Mode';
    }
  }

  /* ========== FADE-IN ANIMATIONS ========== */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {

      // (index.html) FAQ ACCORDION ONLY: staggered animation (can duplicate this block to apply stagger to other sections)
      if (entry.target.closest('#hero-section')) {
        const heroItems = document.querySelectorAll('#hero-section .hero-title, #hero-section .hero-content p, #hero-section .hero-btn-wrapper');
        const index = Array.from(heroItems).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 300); // 0.3s stagger
      }

      else if (entry.target.closest('#faq-section')) {
        const faqItems = document.querySelectorAll('#faq-section .accordion-item');
        const index = Array.from(faqItems).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 200); // 0.2s stagger
      }
      
      // (blog.html) x3 FEATURED ARTICLES ONLY: staggered animation
      else if (entry.target.closest('.quick-links-wrapper')) {
        const links = document.querySelectorAll('.quick-links-wrapper .row');
        const index = Array.from(links).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 300); // 0.3s stagger
      }

      // (blog.html) x4 FILTERS ONLY: staggered animation
      else if (entry.target.closest('.filter-section')) {
        const links = document.querySelectorAll('.filter-section .filter-btn');
        const index = Array.from(links).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 200); // 0.3s stagger
      }

      // (form.html) FEEDBACK FORM ONLY: staggered animations only for currently visible elements
      else if (entry.target.closest('#feedbackForm')) {
        // get all form elements currently visible on screen
        const currentlyVisible = entries.filter(e => 
          e.isIntersecting && e.target.closest('#feedbackForm')
        );
        
        // find the index within this batch of visible elements
        const batchIndex = currentlyVisible.findIndex(e => e.target === entry.target);
        
        // apply a much shorter stagger
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, batchIndex * 200); // 0.2s stagger
      }
      
      // ALL OTHER ELEMENTS: normal animation (no stagger)
      else {
        entry.target.classList.add('visible');
      }
    }
  });

  // this is 'options' -- the second parameter in IntersectionObserver(callback, options)
  }, { 
  threshold: 0.3 // only triggers above function when >30% of el is visible on screen
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  /* ========== INITIALISE TOOLTIPS FOR index.html (image carousel) ========== */
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl =>
    new bootstrap.Tooltip(tooltipTriggerEl)
  );

  /* ========== INITIALISE DYNAMIC ARTICLE RENDERING FOR blog.html ========== */
  initializeFromLocalStorage();
  updateSavedCount();
  renderArticles();
  
  /* ========== INITIALISE DYNAMIC PAGINATION FOR blog.html ========== */
  console.log('Articles loaded! Initializing...');
  console.log('Page loaded! Initializing dynamic pagination...');
  
  // #2 Set up the pagination buttons
  updatePaginationButtons(allArticles);
  
  // #3: Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    const totalPages = getTotalPages();
    
    if (e.key === 'ArrowLeft' && currentPage > 1) {
      goToPage(currentPage - 1);
    } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  });
  
  console.log('Pagination initialized successfully!');
});