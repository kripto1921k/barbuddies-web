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

// Sección de Productos
document.addEventListener('DOMContentLoaded', () => {
    const filterToggle = document.getElementById('filter-toggle');
    const filters = document.getElementById('filters');
    const searchBar = document.getElementById('searchBar');
    const productGrid = document.getElementById('productGrid');
    const categoryFilter = document.getElementById('categoria');
    const priceFilter = document.getElementById('precios');
    const ratingFilter = document.getElementById('calificaciones');

    // Datos de ejemplo de productos
    const products = [
        {
            id: 1,
            name: 'Coctelera Premium',
            category: 'herramientas',
            price: 45.99,
            rating: 4.5,
            image: '/api/placeholder/200/200'
        },
        {
            id: 2,
            name: 'Set de Copas',
            category: 'cocteles',
            price: 89.99,
            rating: 5,
            image: '/api/placeholder/200/200'
        },
        {
            id: 3,
            name: 'Decoración LED para Bar',
            category: 'decoracion',
            price: 129.99,
            rating: 4.2,
            image: '/api/placeholder/200/200'
        },
        {
            id: 4,
            name: 'Coctelera Premium',
            category: 'herramientas',
            price: 45.99,
            rating: 4.5,
            image: '/api/placeholder/200/200'
        },
        {
            id: 5,
            name: 'Set de Copas',
            category: 'cocteles',
            price: 89.99,
            rating: 5,
            image: '/api/placeholder/200/200'
        },
        {
            id: 6,
            name: 'Decoración LED para Bar',
            category: 'decoracion',
            price: 129.99,
            rating: 4.2,
            image: '/api/placeholder/200/200'
        }
    ];

    function renderProducts(filteredProducts) {
        if (!productGrid) return; // Verificación de seguridad
        
        productGrid.innerHTML = '';
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <p class="rating">★ ${product.rating}</p>
                <a href="#" class="btn">Ver en Amazon</a>
            `;
            productGrid.appendChild(productCard);
        });
    }

    function filterProducts() {
        const searchTerm = searchBar.value.toLowerCase();
        const category = categoryFilter.value;
        const priceRange = priceFilter.value;
        const minRating = parseFloat(ratingFilter.value) || 0;

        let filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            const matchesCategory = category === '' || product.category === category;
            const matchesRating = !minRating || product.rating >= minRating;
            
            let matchesPrice = true;
            if (priceRange === 'low') {
                matchesPrice = product.price < 50;
            } else if (priceRange === 'medium') {
                matchesPrice = product.price >= 50 && product.price <= 100;
            } else if (priceRange === 'high') {
                matchesPrice = product.price > 100;
            }

            return matchesSearch && matchesCategory && matchesPrice && matchesRating;
        });

        renderProducts(filtered);
    }

    // Toggle de filtros en móvil
    if (filterToggle && filters) {
        filterToggle.addEventListener('click', () => {
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
    }

    // Event listeners
    if (searchBar) searchBar.addEventListener('input', filterProducts);
    if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);
    if (priceFilter) priceFilter.addEventListener('change', filterProducts);
    if (ratingFilter) ratingFilter.addEventListener('change', filterProducts);

    // Renderizar todos los productos al cargar
    renderProducts(products);
});
