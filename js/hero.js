/* RESPONSIVE VIDEO
  loads static picture when device width below 768px 
  loads low res video when device width below 1200px
  loads high res video when on desktop (width above 1200px)
*/
function ResponsiveVideoLoader() {
  const video = document.querySelector('.hero-video');
  const container = document.querySelector('.video-container');
  
  if (!video || !container) return;
  
  function updateVideoSource() {
    const width = window.innerWidth;
    
    if (width < 768) {
      // mobile - use static image
      video.style.display = 'none';
      container.style.backgroundImage = 'url("assets/hero/globe-static.png")';
      container.style.backgroundSize = 'cover';
      container.style.backgroundPosition = 'center';
    } else if (width < 1200) {
      // tablet - use low res video
      video.style.display = 'block';
      container.style.backgroundImage = '';
      video.src = 'assets/hero/globe-360p.mp4';
      video.load();
    } else {
      // desktop - use HD video
      video.style.display = 'block';
      container.style.backgroundImage = '';
      video.src = 'assets/hero/globe-1080p.mp4';
      video.load();
    }
  }
  
  // initial load
  updateVideoSource();
  
  // handle manual window resizing
  window.addEventListener('resize', () => {
    clearTimeout(window.videoResizeTimeout);
    window.videoResizeTimeout = setTimeout(updateVideoSource, 250);
  });
}

document.addEventListener('DOMContentLoaded', ResponsiveVideoLoader);