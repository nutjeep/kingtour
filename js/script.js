

// Toggle Menu for Mobile View
const menuToggle = document.querySelector('.toggle-menu input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

// Blur Effect for Navbar - Mobile
function toggle() {
    var blur =document.querySelector('.carousel');
    blur.classList.toggle('blur-effect');
    var blur =document.querySelector('.about');
    blur.classList.toggle('blur-effect');
    var blur = document.querySelector('.destination');
    blur.classList.toggle('blur-effect');
    var blur = document.querySelector('.branding');
    blur.classList.toggle('blur-effect');
    var blur =document.querySelector('.gallery');
    blur.classList.toggle('blur-effect');
    var blur = document.querySelector('.footer');
    blur.classList.toggle('blur-effect');
}

// Active Navigation Bar
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("active", window.scrollY > 50);
})
