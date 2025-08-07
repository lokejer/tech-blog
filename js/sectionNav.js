/* Section Navigation for index.html */
document.addEventListener('DOMContentLoaded', () => {

  /* ========== (ON RIGHT SIDE) SECTION NAVIGATION ========== */
  const sectionNav = document.getElementById('section-nav');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.section-nav a');

  function updateSectionNav() {
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`.section-nav a[href="#${sectionId}"]`).classList.add('active');
      }
    });
  }

  // show/hide section navigation on scroll
  function toggleSectionNav() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      sectionNav.classList.add('show');
    } else {
      sectionNav.classList.remove('show');
    }
  }

  window.addEventListener('scroll', () => {
    updateSectionNav();
    toggleSectionNav();
  });

  // smooth scrolling for section navigation
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

});