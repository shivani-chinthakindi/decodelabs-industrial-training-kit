const menuBtn = document.querySelector('.menu-btn');

const navLinks = document.querySelector('.nav-links');


menuBtn.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});


// FORM SUBMISSION

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('Message Sent Successfully!');

});