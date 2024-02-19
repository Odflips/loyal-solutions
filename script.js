document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    // Agregar un listener al botón de WhatsApp
    whatsappBtn.addEventListener('click', function() {
      // Número de teléfono al que se enviará el mensaje (reemplaza con tu número)
      const phoneNumber = 'tu_numero_de_telefono';
      
      // Mensaje que se enviará (opcional)
      const message = 'Hola, estoy interesado en tus servicios.';
      
      // Crear el enlace de WhatsApp con el número y el mensaje
      const whatsappLink = `https://wa.me/${+5513991694235}?text=${encodeURIComponent(message)}`;
      
      // Abrir la conversación de WhatsApp en una nueva pestaña
      window.open(whatsappLink, '_blank');
    });
    
    // Obtener el elemento de la fecha actual y asignarlo al footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  });

  const images = document.querySelectorAll('.carousel-slide img');
let counter = 0;

setInterval(() => {
  images.forEach(img => img.classList.remove('active'));
  images[counter].classList.add('active');

  counter++;
  if (counter === images.length) {
    counter = 0;
  }
}, 3000);

