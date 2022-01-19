// Toggle Menu for Mobile View
const menuToggle = document.querySelector('.toggle-menu input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

function toggle() {
    var blur = document.querySelector('.destination', '.branding');
    blur.classList.toggle('blur-effect')
}