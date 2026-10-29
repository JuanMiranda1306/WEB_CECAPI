// Año actual en el pie de página
document.getElementById('anio').textContent = new Date().getFullYear();

// Formulario de contacto (pendiente de conectar a un servicio de envío)
document.querySelector('.formulario').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Gracias por tu mensaje. Te contactaremos pronto.');
  e.target.reset();
});
