let page = document.querySelector('.main-nav__list');
let themeButton = document.querySelector('.main-nav__toggle');
themeButton.onclick = function() {
  page.classList.toggle('main-nav__list--closed');
  page.classList.toggle('main-nav__list--opened');
};

// const btnToggle = document.querySelector('.main-header__toggle');
// const mainHeader = document.querySelector('.main-nav');

// themeButton.addEventListener('click', function() {
// themeButton.classList.toggle('main-header__toggle--active');
// mainHeader.classList.toggle('main-header__top--active');
// })
