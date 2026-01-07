const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');
const navLinks = document.querySelectorAll('.nav-links a');

// Smooth scroll for navigation
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form validation & mock submission
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const mensaje = form.mensaje.value.trim();
    const acepta = form.acepto.checked;

    if (!nombre || !correo || !mensaje || !acepta) {
      feedback.textContent = 'Por favor completa los campos requeridos y acepta el tratamiento de datos.';
      feedback.style.color = '#f2c744';
      return;
    }

    feedback.textContent = '¡Gracias! Hemos recibido tu solicitud y te contactaremos muy pronto.';
    feedback.style.color = '#6ee7ff';
    form.reset();
  });
}

// Floating WhatsApp bounce interaction
const whatsappButton = document.querySelector('.whatsapp');
if (whatsappButton) {
  whatsappButton.addEventListener('mouseenter', () => {
    whatsappButton.style.transform = 'translateY(-4px) scale(1.04)';
  });
  whatsappButton.addEventListener('mouseleave', () => {
    whatsappButton.style.transform = '';
  });
}
