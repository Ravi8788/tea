const header = document.getElementById('main-header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

function closeMobileMenu() {
  mobileMenu?.classList.add('hidden');
  mobileMenu?.classList.remove('flex');
  mobileMenuBtn?.setAttribute('aria-expanded', 'false');
}

function openMobileMenu() {
  mobileMenu?.classList.remove('hidden');
  mobileMenu?.classList.add('flex');
  mobileMenuBtn?.setAttribute('aria-expanded', 'true');
}

// Sticky header style on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
mobileMenuBtn?.addEventListener('click', () => {
  if (mobileMenu?.classList.contains('hidden')) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
});

mobileMenuClose?.addEventListener('click', closeMobileMenu);

// Close mobile menu on link click
mobileLinks.forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});
