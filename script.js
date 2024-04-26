
// script.js

// Modificar el primer "¡Hola mundo!" a "Adiós" con JS
document.querySelector('h1').innerText = 'Adiós';

// Cambiar el color de fuente de un encabezado a naranja con JS
document.querySelector('h1:nth-child(3)').style.color = 'orange';

// Agregar un encabezado en el que se pueda hacer clic y que cambie el color de la fuente a marrón con JS
const clickableHeader = document.createElement('h1');
clickableHeader.innerText = 'Haz clic para cambiar el color a marrón';
clickableHeader.addEventListener('click', () => {
    clickableHeader.style.color = 'brown';
});
document.body.appendChild(clickableHeader);
