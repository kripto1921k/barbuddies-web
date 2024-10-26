// Ejemplo de script para interacción
document.querySelectorAll('.boton').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const recetaNombre = event.target.parentElement.querySelector('h3').innerText;
        document.querySelector('.detalles').innerHTML = `
            <h2>${recetaNombre}</h2>
            <p>Aquí puedes añadir los ingredientes y el procedimiento para ${recetaNombre}.</p>
        `;
        window.scrollTo({ top: document.querySelector('#detalles').offsetTop, behavior: 'smooth' });
    });
});
