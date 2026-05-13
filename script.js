/* ═══════════════════════════════════════════════════════════════
   GLORE — script.js
   Animations, interactions, and form handling
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── Helpers ─────────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];


/* ── 1. Dynamic year in footer ───────────────────────────────── */
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ── 2. Sticky nav scroll state ──────────────────────────────── */
const nav = $('#nav');

function onScroll() {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 24);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load


/* ── 3. Mobile menu ──────────────────────────────────────────── */
const hamburger  = $('#hamburger');
const mobileMenu = $('#mobile-menu');

function openMenu() {
  hamburger.classList.add('open');
  mobileMenu.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });
}

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});


/* ── 4. Scroll-triggered animations (IntersectionObserver) ───── */
/* Hero elements (.hero-el) animate via CSS on load — exclude them here */
const animatedEls = $$('[data-animate]').filter(
  (el) => !el.closest('#hero')
);

const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const delay = parseInt(el.dataset.delay ?? '0', 10);

    setTimeout(() => {
      el.classList.add('is-visible');
    }, delay);

    observer.unobserve(el);
  });
}, observerOptions);

animatedEls.forEach((el) => observer.observe(el));


/* ── 5. Active nav link on scroll (section spy) ──────────────── */
const sections = $$('section[id]');
const navLinks  = $$('.nav__link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        link.style.color = href === `#${id}` ? 'var(--text)' : '';
      });
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => sectionObserver.observe(s));


/* ── 6. Contact form handling ────────────────────────────────── */
const form        = $('#contact-form');
const formSuccess = $('#form-success');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name  = form.name.value.trim();
    const email = form.email.value.trim();

    // Simple inline validation
    if (!name || !email) {
      highlightEmpty(form);
      return;
    }
    if (!isValidEmail(email)) {
      shakeInput($('#email'));
      return;
    }

    // Simulate submission (replace with real endpoint / API call)
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Joining…';
    btn.disabled = true;

    setTimeout(() => {
      form.hidden = true;
      if (formSuccess) formSuccess.hidden = false;
    }, 900);
  });
}

function isValidEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function highlightEmpty(formEl) {
  $$('input[required]', formEl).forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = 'rgba(232,121,176,0.7)';
      input.addEventListener('input', () => {
        input.style.borderColor = '';
      }, { once: true });
    }
  });
}

function shakeInput(el) {
  if (!el) return;
  el.style.borderColor = 'rgba(232,121,176,0.7)';
  el.animate(
    [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-6px)' },
      { transform: 'translateX(6px)' },
      { transform: 'translateX(-4px)' },
      { transform: 'translateX(4px)' },
      { transform: 'translateX(0)' },
    ],
    { duration: 320, easing: 'ease-in-out' }
  );
  el.addEventListener('input', () => { el.style.borderColor = ''; }, { once: true });
}


/* ── 7. Smooth-scroll for anchor links ───────────────────────── */
$$('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;

    const target = $(href);
    if (!target) return;

    e.preventDefault();
    closeMenu();

    const navHeight = nav ? nav.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* ── 8. Hero visual subtle mouse parallax ────────────────────── */
const heroVisual = $('#hero .hero__visual');

if (heroVisual && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  let raf;

  document.addEventListener('mousemove', (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx; // -1 → 1
      const dy = (e.clientY - cy) / cy;
      /* Gentle tilt — backdrop moves slightly less than orbit nodes */
      heroVisual.style.transform = `translate(${dx * 6}px, ${dy * 4}px)`;
    });
  });
}
