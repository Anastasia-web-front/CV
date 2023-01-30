'use strict'

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlide() {
      showSlides(slideIndex += 1);
  }
  
  function minusSlide() {
      showSlides(slideIndex -= 1);  
  }
  
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("MySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }
      slides[slideIndex - 1].style.display = "block";
   
      for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
     slideIndex++;
     if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 3500); 
 }