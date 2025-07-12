window.onload = async () => {
  const API_URL = 'https://your-api-url.com/projects'; // TODO: replace
  try {
    const res = await fetch(API_URL);
    const projects = await res.json();

    const current = projects.find(p => p.uuid == 1);
    if (!current) throw new Error('Project #1 not found');

    // Fill main project
    document.getElementById('IRONHACK-PROJECT1').textContent = current.name;
    document.getElementById('project-desc').textContent = current.description;
    document.getElementById('project-content').innerHTML = current.content;
    document.getElementById('project-image').src = current.image;
    document.getElementById('project-image').alt = current.name;
    document.getElementById('completed-on').textContent =
      `Completed on: ${new Date(current.completed_on).toLocaleDateString()}`;

 const others = projects.filter(p => p.uuid != 1)
                           .slice(0, 3);
    const container = document.getElementById('other-projects');
    others.forEach(p => {
      container.insertAdjacentHTML('beforeend', `
        <article class="card">
          <img src="${p.image}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <a href="/projects/${p.uuid}.html">Read more →</a>
        </article>`);
    });
  } catch (err) {
    console.error(err);
    alert('Error loading project data.');
  }
};

document.getElementById('js-navbar-toggle').addEventListener('click', function() {
  document.getElementById('js-menu').classList.toggle('active');
});
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
