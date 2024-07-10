document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav__menu');

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('nav__menu--active');
        burger.classList.toggle('burger--active')
    });
});
