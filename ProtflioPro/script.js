let slideIndex = 1;
showSlide(slideIndex);

// Function to show a specific slide
function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides and remove active class from dots
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show the current slide and add active class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');
}

// Function to move to the next or previous slide
function moveSlide(n) {
    showSlide(slideIndex += n);
}

// Function to set the current slide when a dot is clicked
function currentSlide(n) {
    showSlide(slideIndex = n);
}

// Auto-change slides every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
