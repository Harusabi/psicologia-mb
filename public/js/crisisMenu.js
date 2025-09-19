// Variables para el menú
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');
  const overlay = document.getElementById('overlay');
  const mainContent = document.getElementById('mainContent');

  // Función para abrir el menú
  function openMenu() {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
    menuToggle.classList.add('active');
    mainContent.classList.add('blur');
    document.body.style.overflow = 'hidden';
  }

  // Función para cerrar el menú
  function closeMenu() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
    mainContent.classList.remove('blur');
    document.body.style.overflow = 'auto';
  }

  // Event listeners
  menuToggle.addEventListener('click', function() {
    if (sideMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Cerrar menú al hacer clic en el overlay
  overlay.addEventListener('click', closeMenu);

  // Cerrar menú con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
      closeMenu();
    }
  });
  // Animación de entrada suave
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
      mainContent.style.opacity = '1';
      mainContent.style.transform = 'translateY(0)';
    }, 300);
  });

  // Prevenir scroll del body cuando el menú está abierto
  sideMenu.addEventListener('touchmove', function(e) {
    e.stopPropagation();
  });