let pageHeaderWrapperEl = document.querySelector('.page-header__wrapper');
let mainNavEl = document.querySelector('.main-nav');
let mainNavButtonEl = document.querySelector('.main-nav__toggle');

mainNavEl.classList.remove('main-nav--nojs');
mainNavEl.classList.add('main-nav--closed');
pageHeaderWrapperEl.classList.toggle('page-header__wrapper--closed-menu');

mainNavButtonEl.addEventListener('click', function() {
  pageHeaderWrapperEl.classList.toggle('page-header__wrapper--closed-menu');
  mainNavEl.classList.toggle('main-nav--opened');
  mainNavEl.classList.toggle('main-nav--closed');
})
