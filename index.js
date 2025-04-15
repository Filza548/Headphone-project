// document.addEventListener("scroll", () => {
//     const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
//     const angle = (scrollPercentage / 100) * 360; // Convert scroll percentage to angle
//     document.body.style.background = `linear-gradient(${angle}deg, #006680, #000000)`;
// });

// document.addEventListener("scroll", () => {
//     const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
//     const angle = (scrollPercentage / 100) * 360; // Convert scroll percentage to angle
//     document.body.style.background = `linear-gradient(${angle}deg, #006680, #111111)`;
// });

// document.addEventListener("scroll", () => {
//     const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
//     const angle = (scrollPercentage / 100) * 360; // Convert scroll percentage to angle
//     document.body.style.background = `linear-gradient(${angle}deg, #006680, #111111)`;
// });

document.addEventListener("scroll", () => {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    const angle = (scrollPercentage / 100) * 360; // Convert scroll percentage to angle
    document.body.style.background = `linear-gradient(${angle}deg, #006680, #111111)`;
});


document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.custom-carousel');
    const slides = document.querySelectorAll('.custom-carousel-slide');
    const prevBtn = document.querySelector('.custom-carousel-prev');
    const nextBtn = document.querySelector('.custom-carousel-next');
    const dotsContainer = document.querySelector('.custom-carousel-dots');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('custom-carousel-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        goToSlide(index);
      });
      dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.custom-carousel-dot');
    
    // Update carousel position
    function updateCarousel() {
      const slideWidth = carousel.offsetWidth;
      document.querySelector('.custom-carousel-slides').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      
      // Update active dot
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
    
    // Go to specific slide
    function goToSlide(index) {
      currentIndex = index;
      if (currentIndex >= totalSlides) currentIndex = 0;
      if (currentIndex < 0) currentIndex = totalSlides - 1;
      updateCarousel();
    }
    
    // Next slide
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
    
    // Previous slide
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
    
    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        goToSlide(currentIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        goToSlide(currentIndex - 1);
      }
    });
    
    // Handle swipe for touch devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
    
    function handleSwipe() {
      if (touchEndX < touchStartX - 50) {
        // Swipe left - next slide
        goToSlide(currentIndex + 1);
      } else if (touchEndX > touchStartX + 50) {
        // Swipe right - previous slide
        goToSlide(currentIndex - 1);
      }
    }
    
    // Initialize carousel
    updateCarousel();
    
    // Handle window resize
    window.addEventListener('resize', updateCarousel);
  });

