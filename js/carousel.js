// document.addEventListener('DOMContentLoaded', () => {
//   const coverImages = [
//     'https://picsum.photos/800/400?random=1',
//     'https://picsum.photos/800/400?random=2',
//     'https://picsum.photos/800/400?random=3'
//   ];
  
//   let currentIndex = 0;
//   let isTransitioning = false;
  
//   const carouselTrack = document.getElementById('carouselTrack');
//   const slides = document.querySelectorAll('.carousel-slide');
//   const prevBtn = document.getElementById('prevBtn');
//   const nextBtn = document.getElementById('nextBtn');
//   const radios = document.querySelectorAll('.radio-input input[type="radio"]');
  
//   function updateCarousel(newIndex, direction = 'next') {
//     if (isTransitioning) return;
    
//     isTransitioning = true;
    
//     // Remove active class from current slide
//     slides[currentIndex].classList.remove('active');
    
//     // Update current index
//     currentIndex = newIndex;
    
//     // Add slide animation class based on direction
//     const activeSlide = slides[currentIndex];
//     activeSlide.classList.add(direction === 'next' ? 'slide-in-right' : 'slide-in-left');
    
//     // Move carousel track to show current slide
//     carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    
//     // Update slide states
//     slides.forEach((slide, index) => {
//       if (index === currentIndex) {
//         slide.classList.add('active');
//       } else {
//         slide.classList.remove('active');
//       }
//     });
    
//     // Update radio buttons
//     radios.forEach((radio, i) => {
//       radio.checked = (i === currentIndex);
//     });
    
//     // Clean up animation classes and reset transition state
//     setTimeout(() => {
//       activeSlide.classList.remove('slide-in-right', 'slide-in-left');
//       isTransitioning = false;
//     }, 1200);
//   }
  
//   // Previous button
//   prevBtn.addEventListener('click', () => {
//     if (isTransitioning) return;
//     let newIndex = currentIndex - 1;
//     if (newIndex < 0) newIndex = coverImages.length - 1;
//     updateCarousel(newIndex, 'prev');
//   });
  
//   // Next button
//   nextBtn.addEventListener('click', () => {
//     if (isTransitioning) return;
//     let newIndex = currentIndex + 1;
//     if (newIndex >= coverImages.length) newIndex = 0;
//     updateCarousel(newIndex, 'next');
//   });
  
//   // Radio button navigation
//   radios.forEach((radio, i) => {
//     radio.addEventListener('click', () => {
//       if (isTransitioning || i === currentIndex) return;
//       const direction = i > currentIndex ? 'next' : 'prev';
//       updateCarousel(i, direction);
//     });
//   });
  
//   // Initialize
//   updateCarousel(0);
  
//   // Auto-play every 7.5 seconds
//   setInterval(() => {
//     if (!isTransitioning) {
//       let newIndex = currentIndex + 1;
//       if (newIndex >= coverImages.length) newIndex = 0;
//       updateCarousel(newIndex, 'next');
//     }
//   }, 7500);
// });

using_classes = {
  class FeaturedCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-item');
        this.totalSlides = this.slides.length;
        this.radioButtons = document.querySelectorAll('input[name="radio"]');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startAutoPlay();
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        this.radioButtons.forEach((radio, index) => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    this.goToSlide(index);
                }
            });
        });

        // Pause auto-play on hover
        const carousel = document.querySelector('.carousel-wrapper');
        carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    goToSlide(slideIndex) {
        this.stopAutoPlay();
        
        // Remove active class from all slides
        this.slides.forEach(slide => {
            slide.classList.remove('active', 'prev');
        });

        // Add prev class to current slide for animation
        if (slideIndex !== this.currentSlide) {
            this.slides[this.currentSlide].classList.add('prev');
        }

        // Set new current slide
        this.currentSlide = slideIndex;
        this.slides[this.currentSlide].classList.add('active');

        // Update radio buttons
        this.radioButtons.forEach((radio, index) => {
            radio.checked = index === this.currentSlide;
        });

        this.startAutoPlay();
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    previousSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
  }

  // Initialize carousel when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new FeaturedCarousel();
  });

  // Add smooth scrolling and parallax effect
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#featured-section');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
  });
}