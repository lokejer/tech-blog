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
      
      // ALL OTHER ELEMENTS: normal animation (no stagger)
      else {
        entry.target.classList.add('visible');
      }
    }
  });
  }, {
  threshold: 0.3
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  /* ========== dynamic article rendering for blog.html ========== */
  initializeFromLocalStorage();
  updateSavedCount();
  renderArticles();
  
  /* ========== dynamic pagination for blog.html ========== */
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
