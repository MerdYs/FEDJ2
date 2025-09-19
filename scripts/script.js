// JavaScript Document

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel li');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const dotsList = document.querySelector('.carousel-dots');

let index = 0;

slides.forEach((_, i) => {
  const dot = document.createElement('li');
  dot.addEventListener('click', () => {
    index = i;
    updateCarousel();
  });
  dotsList.appendChild(dot);
});

const dots = dotsList.querySelectorAll('li');

function updateCarousel() {
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : slides.length - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index < slides.length - 1) ? index + 1 : 0;
  updateCarousel();
});

updateCarousel();