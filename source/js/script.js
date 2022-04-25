let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('no-js');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--opened');
});
