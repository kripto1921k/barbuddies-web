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

// Section de los cursos
document.addEventListener('DOMContentLoaded', () => {
    const filterToggle = document.getElementById('filter-toggle');
    const filters = document.getElementById('filters');
    const searchInput = document.getElementById('search-input');
    const filterElements = document.querySelectorAll('.filters select');
    const courseCards = document.querySelectorAll('.course-card');
  
    // Toggle de filtros en móvil
    filterToggle?.addEventListener('click', () => {
        filters.classList.toggle('active');
    });

    // Cerrar filtros al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!filters.contains(e.target) && !filterToggle.contains(e.target)) {
                filters.classList.remove('active');
            }
        }
    });

    // Función para filtrar cursos
    function filterCourses() {
        const searchValue = searchInput.value.toLowerCase();
        const selectedFilters = {
            categoria: document.getElementById('categoria').value,
            nivel: document.getElementById('nivel').value,
            duracion: document.getElementById('duracion').value,
            precio: document.getElementById('precio').value,
            modalidad: document.getElementById('modalidad').value
        };

        courseCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const instructor = card.querySelector('.instructor').textContent.toLowerCase();
            const matchesSearch = title.includes(searchValue) || instructor.includes(searchValue);

            const matchesFilters = Object.entries(selectedFilters).every(([key, value]) => {
                return value === "" || card.dataset[key] === value;
            });

            card.style.display = matchesSearch && matchesFilters ? 'block' : 'none';
        });
    }

    // Event listeners
    searchInput?.addEventListener('input', filterCourses);
    filterElements.forEach(filter => {
        filter?.addEventListener('change', filterCourses);
    });
});
