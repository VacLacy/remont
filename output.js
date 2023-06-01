let slides = document.querySelectorAll('.slime');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slideIndex = 0;



showSlides();

function showSlides() {
 for (let i = 0; i < slides.length; i++) {
  slides[i].classList.remove('slime');
 }
 slides[slideIndex].classList.add('slime');
 if (slideIndex === 0) {
  prev.classList.remove('slime');
 } else {
  prev.classList.add('slime');
 }
 if (slideIndex === slides.length - 1) {
  next.classList.remove('slime');
 } else {
  next.classList.add('slime');
 }
}

function nextSlide() {
 slideIndex++;
 if (slideIndex >= slides.length) {
  slideIndex = 0;
 }
 showSlides();
}

function prevSlide() {
 slideIndex--;
 if (slideIndex < 0) {
  slideIndex = slides.length  -1;
 }
 showSlides();
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);





   