   function toggleMenu() {
  const mobileNav = document.getElementById('mobileNav');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const overlay = document.getElementById('navOverlay');
  if (mobileNav && hamburgerBtn && overlay) {
    mobileNav.classList.toggle('active');
    hamburgerBtn.classList.toggle('open');
    overlay.classList.toggle('active');
  } else {
    console.error('One or more elements not found!');
  }
}

// Close mobile nav when a link is clicked
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    const mobileNav = document.getElementById('mobileNav');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const overlay = document.getElementById('navOverlay');
    if (mobileNav && hamburgerBtn && overlay) {
      mobileNav.classList.remove('active');
      hamburgerBtn.classList.remove('open');
      overlay.classList.remove('active');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

  // Lazy-loading polyfill: if browser doesn't support loading attr, load lazysizes
    (function(){
      if ('loading' in HTMLImageElement.prototype) {
        // browser supports native lazy loading -> nothing to do
        // but we keep 'loading="lazy"' on images
      } else {
        // load small polyfill
        var s = document.createElement('script');
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        s.async = true;
        document.body.appendChild(s);
      }
    })();