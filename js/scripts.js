// JavaScript para abrir y cerrar el menú móvil
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('#mobile-menu');
    const openMenuBtn = document.querySelector('#open-menu');
    const closeMenuBtn = document.querySelector('.close-btn');
    
    openMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('show-menu');
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('show-menu');
    });

    // Cambia el color del header al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
