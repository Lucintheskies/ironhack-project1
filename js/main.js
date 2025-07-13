// Responsive Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbar-menu');

if (hamburger && navbarMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navbarMenu.classList.remove('active');
    });
  });
}

// Smooth scroll para enlaces internos
const internalLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
internalLinks.forEach(link => {
  link.addEventListener('click', e => {
    const targetID = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetID);
    if (targetEl) {
      e.preventDefault();
      
      // Calcular el offset del header
      const headerHeight = 80;
      const elementPosition = targetEl.offsetTop;
      
      // Para la sección hero (home), ir al top de la página
      let offsetPosition;
      if (targetID === 'hero') {
        offsetPosition = 0;
      } else {
        offsetPosition = Math.max(0, elementPosition - headerHeight);
      }
      
      // Scroll suave con offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (hamburger && navbarMenu) {
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
      }
    }
  });
});

// Function for project cards (if needed)
function mostrarTextoSimplify() {
  const texto = document.getElementById('texto-simplify');
  if (texto) {
    texto.style.display = texto.style.display === 'none' ? 'block' : 'none';
  }
}