// scripts.js — final version

function toggleMenu() {
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.getElementById('navOverlay');
  const desktopSearch = document.querySelector('.desktop-search');

  hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
});

  if (mobileNav.classList.contains('active') && desktopSearch) {
    desktopSearch.style.display = 'none';
  } else if (desktopSearch) {
    desktopSearch.style.display = 'flex';
  }
}

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 10);
});

document.addEventListener('DOMContentLoaded', function() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('headerContainer').innerHTML = data;
      document.getElementById('hamburgerBtn')?.addEventListener('click', toggleMenu);
      document.getElementById('navOverlay')?.addEventListener('click', toggleMenu);

      // Header load hone ke baad Swiper init karo (sirf index.html pe)
      if (document.querySelector('.swiper')) {
        new Swiper('.swiper', {
          loop: true,
          autoplay: { delay: 1000, disableOnInteraction: false },
          speed: 1000,
          effect: 'fade',
          pagination: { el: '.swiper-pagination', clickable: true },
          navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
          grabCursor: true,
        });
      }
    });

  fetch('footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footerContainer').innerHTML = data);
});