let smlide = document.querySelectorAll('.smlide');
let drev = document.querySelector('.drev');
let pext = document.querySelector('.pext');

let smlidIndex = 0;


function showSmlide() {
    for (let i = 0; i < smlide.length; i++) {
        smlide[i].classList.remove('smlide');
    }
    smlide[smlidIndex].classList.add('smlide');
    if (smlidIndex === 0) {
        drev.classList.remove('smlide');
    } else {
        drev.classList.add('smlide');
    }
    if (smlidIndex === slides.length - 1) {
        pext.classList.remove('smlide');
    } else {
        pext.classList.add('smlide');
    }
   }
   
   function nextSlide() {
    smlidIndex++;
    if (smlidIndex >= smlide.length) {
        smlidIndex = 0;
    }
    showSmlide();
   }
   
   function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
     slideIndex = smlide.length  -1;
    }
    showSmlide();
   }
   
   drev.addEventListener('click', drevSlide);
   pext.addEventListener('click', pextSlide);
   
   
   
   
   
      