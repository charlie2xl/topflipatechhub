const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links');

function toggleMenu() {
  const isOpen = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  // update ARIA for assistive tech
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// open/close when user clicks the hamburger
hamburger.addEventListener('click', toggleMenu);

// close when a nav link is clicked (useful for single-page anchors)
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// close when clicking outside the menu (optional but nice UX)
document.addEventListener('click', (e) => {
  const target = e.target;
  // if click outside both hamburger button and the nav panel, close
  if (!navLinks.contains(target) && !hamburger.contains(target) && navLinks.classList.contains('open')) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});
