const hamburgerToggle = document.querySelector('.hamburger');

const links = document.querySelector('.nav-links');

hamburgerToggle.addEventListener('click', function() {
    links.classList.toggle('show-nav-links');
});

