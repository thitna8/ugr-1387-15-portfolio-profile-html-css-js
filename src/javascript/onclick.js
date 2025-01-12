const hamburger = document.querySelector('.container');

const navMenu = document.querySelector('.nav-menu');



hamburger.addEventListener('click', () => {

  navMenu.classList.toggle('hide');

});