 // Abrir modal
  const buttons = document.querySelectorAll('.card button');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.modal-close');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      document.getElementById(modalId).classList.add('active');
      document.body.style.overflow = 'hidden'; // Evitar scroll al abrir modal
    });
  });

  // Cerrar modal al hacer click en la X
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  // Cerrar modal al hacer click fuera del contenido
  modals.forEach(modal => {
    modal.addEventListener('click', e => {
      if(e.target === modal){
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });