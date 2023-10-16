var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    if (slides.length === 0) {
      return;
    }
  
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    
    slideIndex++;
    
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }