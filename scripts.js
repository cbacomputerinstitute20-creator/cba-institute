// scripts.js — FINAL STABLE VERSION

document.addEventListener('DOMContentLoaded', () => {

  // Header load
  fetch('header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('headerContainer').innerHTML = html;

      const hamburger = document.getElementById('hamburgerBtn');
      const mobileNav = document.getElementById('mobileNav');
      const overlay = document.getElementById('navOverlay');
      const desktopSearch = document.querySelector('.desktop-search');

      // 🔒 Force close on load
      mobileNav?.classList.remove('active');
      overlay?.classList.remove('active');

      function openMenu() {
        mobileNav.classList.add('active');
        overlay.classList.add('active');
        if (desktopSearch) desktopSearch.style.display = 'none';
      }

      function closeMenu() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        if (desktopSearch) desktopSearch.style.display = 'flex';
      }

      // ✅ ONE TIME listeners (VERY IMPORTANT)
      hamburger?.addEventListener('click', openMenu);
      overlay?.addEventListener('click', closeMenu);

      // ESC key support
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMenu();
      });

      // Swiper (sirf index.html pe)
      if (document.querySelector('.swiper')) {
        new Swiper('.swiper', {
          loop: true,
          autoplay: { delay: 1000, disableOnInteraction: false },
          speed: 1000,
          effect: 'fade',
          pagination: { el: '.swiper-pagination', clickable: true },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          grabCursor: true,
        });
      }
    });

  // Footer load
  fetch('footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('footerContainer').innerHTML = html;
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header?.classList.toggle('scrolled', window.scrollY > 10);
});
