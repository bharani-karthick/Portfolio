// selectiong nav bar 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 0);
});

// selecting menu toggle and nav links
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {

  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}
