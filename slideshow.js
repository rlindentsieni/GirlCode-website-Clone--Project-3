const wrapper = document.querySelector('.slideshow-wrapper');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
const totalSlides = slides.length;
const visibleSlides = 3;
const autoSlideInterval = 3000; // 0.3 seconds

function updateSlidePosition() {
    const offset = currentSlide * -(100 / visibleSlides);
    wrapper.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentSlide = parseInt(e.target.getAttribute('data-index'));
        updateSlidePosition();
    });
});

// Auto-slide functionality
function autoSlide() {
    currentSlide = (currentSlide + 1) % (totalSlides - visibleSlides + 1);
    updateSlidePosition();
}

setInterval(autoSlide, autoSlideInterval);

// Initial position and active dot
updateSlidePosition();
