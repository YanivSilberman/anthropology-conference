// Navbar scroll effect
const navbar = document.getElementById('navbar');

const navLinks = document.getElementById('navLinks');

function updateNavbar() {
  const menuOpen = navLinks.classList.contains('open');
  if (window.scrollY > 60 || menuOpen) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavbar, { passive: true });

// Mobile nav toggle
function toggleNav() {
  navLinks.classList.toggle('open');
  updateNavbar();
}

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    updateNavbar();
  });
});

// Scroll fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// Apply fade-in to key elements
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.section-header, .about-text, .about-image, .cfp-card, ' +
    '.venue-hero, .venue-info, .venue-photos, .calendar, ' +
    '.victoria-intro, .gallery-item, .travel-card, .travel-image, .reg-content'
  );
  targets.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

// Smooth anchor scrolling for browsers without native support
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
