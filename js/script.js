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

  renderArticles();

});