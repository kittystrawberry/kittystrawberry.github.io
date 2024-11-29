const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;
const visibleCards = 3; // Minimum number of visible cards
const totalCards = document.querySelectorAll('.card').length;
const cardWidth = track.querySelector('.card').offsetWidth + 20; // Include margin

// Move carousel
function moveCarousel(index) {
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Previous button click
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveCarousel(currentIndex);
  }
});

// Next button click
nextButton.addEventListener('click', () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    moveCarousel(currentIndex);
  }
});