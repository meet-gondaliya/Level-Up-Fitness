let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menus');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
}

// Typing Text Code
const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Body building', 'Weight Lifting'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});

// Smooth Transtion
AOS.init({
    offset: 300,
    duration: 1200,
  });