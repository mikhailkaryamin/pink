let mainNav = document.querySelector('.main-nav');
let mainNavButton = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.add('main-nav--opened');

mainNavButton.addEventListener('click', function() {
  mainNav.classList.toggle('main-nav--opened');
  mainNav.classList.toggle('main-nav--closed');
})
