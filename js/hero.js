// Responsive video loading
function loadResponsiveVideo() {
  const video = document.querySelector('.hero-video');
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1200;
  
  if (isMobile) {
    // load static image or very low-res video
    video.style.display = 'none';
    document.querySelector('.video-container').style.backgroundImage = 
      'url("assets/hero/globe-static.png")';
  } else if (isTablet) {
    // load low resolution
    video.src = 'globe-360p.mp4';
  } else {
    // load full HD
    video.src = 'globe-1080p.mp4';
  }
}

// Connection-aware loading
if ('connection' in navigator) {
  const connection = navigator.connection;
  if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
    // Force static image for slow connections
    document.querySelector('.hero-video').style.display = 'none';
  }
}

// Intersection Observer for performance
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadResponsiveVideo();
    }
  });
});

observer.observe(document.querySelector('.hero-section'));