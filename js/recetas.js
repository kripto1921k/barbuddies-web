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

// Section para Recetas
document.addEventListener('DOMContentLoaded', () => {
    const filterToggle = document.getElementById('filter-toggle');
    const filters = document.getElementById('filters');
    const searchInput = document.getElementById('search-input');
    const filterElements = document.querySelectorAll('.filters select');
    const cocktailCards = document.querySelectorAll('.cocktail-card');
  
    // Toggle de filtros solo en pantallas pequeñas
    filterToggle.addEventListener('click', () => {
        filters.classList.toggle('active');
    });

    // Cerrar filtros al hacer clic fuera de ellos (solo en móvil)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!filters.contains(e.target) && !filterToggle.contains(e.target)) {
                filters.classList.remove('active');
            }
        }
    });

    // Mantener filtros visibles en pantallas grandes
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            filters.classList.remove('active');
            filters.style.display = 'flex';
        } else {
            if (!filters.classList.contains('active')) {
                filters.style.display = 'none';
            }
        }
    });
  
    // Función para filtrar cócteles
    function filterCocktails() {
      const searchValue = searchInput.value.toLowerCase();
      const selectedFilters = {
        licor: document.getElementById('licor').value,
        sabor: document.getElementById('sabor').value,
        dificultad: document.getElementById('dificultad').value,
        tiempo: document.getElementById('tiempo').value,
        ocasion: document.getElementById('ocasion').value,
        color: document.getElementById('color').value
      };
  
      cocktailCards.forEach(card => {
        // Búsqueda por nombre o ingrediente
        const name = card.querySelector('h3').textContent.toLowerCase();
        const matchesSearch = name.includes(searchValue);
  
        // Verificar cada filtro
        const matchesLicor = selectedFilters.licor === "" || card.dataset.licor === selectedFilters.licor;
        const matchesSabor = selectedFilters.sabor === "" || card.dataset.sabor === selectedFilters.sabor;
        const matchesDificultad = selectedFilters.dificultad === "" || card.dataset.dificultad === selectedFilters.dificultad;
        const matchesTiempo = selectedFilters.tiempo === "" || card.dataset.tiempo === selectedFilters.tiempo;
        const matchesOcasion = selectedFilters.ocasion === "" || card.dataset.ocasion === selectedFilters.ocasion;
        const matchesColor = selectedFilters.color === "" || card.dataset.color === selectedFilters.color;
  
        // Mostrar o esconder la tarjeta
        if (matchesSearch && matchesLicor && matchesSabor && matchesDificultad && matchesTiempo && matchesOcasion && matchesColor) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  
    // Event listeners para filtros y búsqueda
    searchInput.addEventListener('input', filterCocktails);
    filterElements.forEach(filter => {
      filter.addEventListener('change', filterCocktails);
    });
  });
