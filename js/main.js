document.getElementById('menu-toggle')
        .addEventListener('click', () =>
          document.getElementById('main-nav').classList.toggle('hidden'));

// 1. Responsive Navbar Toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const opened = navList.classList.toggle('open');
    navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', opened);
  });
}

// 2. Smooth scroll para enlaces internos 
const internalLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
internalLinks.forEach(link => {
  link.addEventListener('click', e => {
    const targetID = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetID);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
      navList.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    }
  });
});
