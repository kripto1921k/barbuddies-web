// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.add('scrolled');
        });
    } else {
        header.classList.remove('scrolled');
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('scrolled');
        });
    }
});

// Mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Search bar toggle
const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('#search-bar');

searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('show');
});

