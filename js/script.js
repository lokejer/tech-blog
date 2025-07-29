document.addEventListener('DOMContentLoaded', function() {

  // handling highlighting of navbar links
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

  // dynamic articles for blog.html
  renderArticles();

  // dynamic pagination for blog.html
  console.log('Page loaded, initializing pagination...');
  
  // #1 Render the first page of articles
  renderArticles(allArticles, 1);
  
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

// fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});