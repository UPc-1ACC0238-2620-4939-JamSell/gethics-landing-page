// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navlinks = document.getElementById('navlinks');

if (menuToggle && navlinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navlinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navlinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navlinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Sticky header shadow on scroll
const header = document.getElementById('siteHeader');
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Scroll-reveal animation for elements marked .reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  // no IntersectionObserver support: just show everything
  revealEls.forEach((el) => el.classList.add('in'));
}
