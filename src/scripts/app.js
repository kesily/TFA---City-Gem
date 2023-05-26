const menuBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__list');
const cross = document.querySelector('.cross');

menuBurger.addEventListener('click', function(){
    menu.classList.toggle('menu--open');
});

cross.addEventListener('click', function(){
    menu.classList.remove('menu--open');
});