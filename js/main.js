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

// Seccion de las Recetas
document.addEventListener('DOMContentLoaded', function() {
  const recipes = [
      {
          title: "Receta 1",
          image: "assets/images/cocktail1.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing"
      },
      {
          title: "Receta 2",
          image: "assets/images/cocktail2.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing"
      },
      {
          title: "Receta 3",
          image: "assets/images/cocktail3.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing"
      },
      {
          title: "Receta 4",
          image: "assets/images/cocktail4.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing"
      }
  ];

  function createRecipeElement(recipe) {
      return `
          <div class="recipe-item">
              <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
              <h3 class="recipe-title">${recipe.title}</h3>
              <p class="recipe-description">${recipe.description}</p>
          </div>
      `;
  }

  // Llenar el grid para pantallas grandes
  const largeScreenGrid = document.getElementById('largeScreenGrid');
  largeScreenGrid.innerHTML = recipes.map(recipe => createRecipeElement(recipe)).join('');

  // Llenar la lista para pantallas pequeñas
  const smallScreenList = document.getElementById('smallScreenList');
  smallScreenList.innerHTML = recipes.map(recipe => createRecipeElement(recipe)).join('');
});

document.querySelector('.menu-button .view-more').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});
