let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Calculate new index
    currentIndex += direction;

    // Loop back to the beginning or end
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Move the slides
    const slideContainer = document.querySelector('.slider');
    slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
