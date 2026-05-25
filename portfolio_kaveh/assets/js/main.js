/* ─────────────────────────────────────────────
   PORTFOLIO KAVEH OSTAD — script principal
   ───────────────────────────────────────────── */

/* ════════════════════════════════════════════
   THÈME (jour / nuit)
   ════════════════════════════════════════════ */
(function initTheme() {
  // Récupérer le thème sauvegardé ou utiliser les préférences système
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'dark'); // par défaut sombre
  document.documentElement.setAttribute('data-theme', theme);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
}

/* ════════════════════════════════════════════
   CURSEUR CUSTOM
   ════════════════════════════════════════════ */
const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  if (cursor) {
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  }
});

function animateCursor() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  if (cursorRing) {
    cursorRing.style.left = rx + 'px';
    cursorRing.style.top = ry + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Effet d'expansion du ring sur les éléments interactifs
document.querySelectorAll('a, button, .card, .contact-item, input, textarea, select').forEach(el => {
  el.addEventListener('mouseenter', () => cursorRing?.classList.add('expand'));
  el.addEventListener('mouseleave', () => cursorRing?.classList.remove('expand'));
});

/* ════════════════════════════════════════════
   REVEAL ON SCROLL (IntersectionObserver)
   ════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ════════════════════════════════════════════
   ACTIVE NAV LINK (basé sur l'URL)
   ════════════════════════════════════════════ */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

/* ════════════════════════════════════════════
   COMPTEURS ANIMÉS
   ════════════════════════════════════════════ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1500;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

/* ════════════════════════════════════════════
   BARRES DE PROGRESSION ANIMÉES
   ════════════════════════════════════════════ */
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.progress-bar').forEach(bar => {
        const target = bar.dataset.width;
        if (target) bar.style.width = target;
      });
      progressObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.card').forEach(c => {
  if (c.querySelector('.progress-bar')) progressObserver.observe(c);
});

/* ════════════════════════════════════════════
   MENU BURGER MOBILE
   ════════════════════════════════════════════ */
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Fermer le menu au clic sur un lien
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ════════════════════════════════════════════
   ACCORDÉONS (pour les pages E5 / E6)
   ════════════════════════════════════════════ */
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('open');
  });
});
