// Toggle Menu for Mobile View
const menuToggle = document.querySelector('.toggle-menu input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

// Blur Effect for Navbar - Mobile
function toggle() {
    var blur = document.querySelector('.destination', '.branding');
    blur.classList.toggle('blur-effect')
}

// Active Navigation Bar
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("active", window.scrollY > 50);
})
