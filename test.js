wrapper = document.querySelector('.slideshow-wrapper');
 slides = document.querySelectorAll('.slide');
dots = document.querySelectorAll('.dot');
prevArrow = document.getElementById('prev');
nextArrow = document.getElementById('next');

let currentSlide = 0;
const totalSlides = slides.length;
const visibleSlides = 3;
let autoSlideInterval = 3000; 
let slideTimer;

function updateSlidePosition() {
    let offset;

    if (currentSlide === 0) {
        offset = 0; 
    } else if (currentSlide === 1) {
        offset = -100 / visibleSlides; 
    } else if (currentSlide === 2) {
        offset = -200 / visibleSlides; // Fix here
    } else {
        offset = -300 / visibleSlides; // Fix here
    }

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

function startAutoSlide(interval) {
    clearInterval(slideTimer);
    slideTimer = setInterval(autoSlide, interval);
}

function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

//the arrows
prevArrow.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
    startAutoSlide(5000); 
});

nextArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
    startAutoSlide(5000); 
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentSlide = parseInt(e.target.getAttribute('data-index'));
        updateSlidePosition();
        startAutoSlide(5000);
    });
});


startAutoSlide(autoSlideInterval);
updateSlidePosition();
