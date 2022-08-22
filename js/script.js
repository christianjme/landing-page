const hamburgerMenu = document.querySelector('.nav__menu')
const menu = document.querySelector('.menu')

hamburgerMenu.addEventListener('click', e=>{
  menu.classList.toggle('show-menu')
})