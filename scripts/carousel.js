const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;
const visibleCards = 3; // Minimum number of visible cards
const totalCards = document.querySelectorAll('.card').length;
const cardWidth = track.querySelector('.card').offsetWidth + 20;


function moveCarousel(index) {
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveCarousel(currentIndex);
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    moveCarousel(currentIndex);
  }
});