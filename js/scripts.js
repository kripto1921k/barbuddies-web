// script.js

document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");
    const header = document.querySelector("header");

    // Toggle del menú de hamburguesa
    mobileMenu.addEventListener("click", function() {
        navLinks.classList.toggle("active"); // Activa o desactiva la visibilidad del menú
    });

    // Cerrar el menú al hacer clic en una opción (solo en móvil)
    navLinks.addEventListener("click", function(e) {
        if (e.target.tagName === "A") {
            navLinks.classList.remove("active");
        }
    });

    // Cambio de fondo del header al hacer scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

// JavaScript para manejar el despliegue del menú móvil
const mobileMenu = document.querySelector('.mobile-menu');
const openMenuBtn = document.querySelector('#open-menu');
const closeMenuBtn = document.querySelector('.close-btn');

openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('show-menu');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('show-menu');
});
