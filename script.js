// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navlinks = document.getElementById('navlinks');

if (menuToggle && navlinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navlinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // close menu after choosing a link (mobile)
  navlinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navlinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
