// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
    
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slideIndex++;

//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }

//     slides[slideIndex - 1].style.display = "block";

//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = 0; 
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    var currentSlide = slides[slideIndex - 1];
    currentSlide.style.display = "block";

    var opacity = 0;
    var fadeInInterval = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(fadeInInterval);
            setTimeout(fadeOut, 1800); 
        } else {
            opacity += 0.02; 
            currentSlide.style.opacity = opacity;
        }
    }, 20); 

    function fadeOut() {
        var fadeOutInterval = setInterval(function () {
            if (opacity <= 0) {
                clearInterval(fadeOutInterval);
                showSlides();
            } else {
                opacity -= 0.02;
                currentSlide.style.opacity = opacity;
            }
        }, 20); 
    }
}