/* ================================================================
   TUKIDS — Shared JavaScript
   ================================================================ */

/* ── Theme ── */
const THEME_KEY = 'tukids-theme';
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  applyTheme(saved);
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.classList.toggle('on', saved === 'dark');
    toggle.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      toggle.classList.toggle('on', next === 'dark');
      localStorage.setItem(THEME_KEY, next);
    });
  }
}
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

/* ── Mobile nav active state ── */
function initMobileNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.mob-nav-item[data-page]').forEach(item => {
    if (item.dataset.page === path) item.classList.add('active');
  });
}

/* ── Favorites ── */
let favorites = JSON.parse(localStorage.getItem('tk-favs') || '[]');
function toggleFav(id, btn) {
  const idx = favorites.indexOf(id);
  if (idx === -1) {
    favorites.push(id);
    btn.classList.add('active');
    showToast('¡Guardado!', 'Producto añadido a favoritos ❤️', 'coral');
  } else {
    favorites.splice(idx, 1);
    btn.classList.remove('active');
    showToast('Eliminado', 'Producto eliminado de favoritos', 'gray');
  }
  localStorage.setItem('tk-favs', JSON.stringify(favorites));
}
function initFavBtns() {
  document.querySelectorAll('.fav-btn[data-id]').forEach(btn => {
    if (favorites.includes(btn.dataset.id)) btn.classList.add('active');
    btn.addEventListener('click', e => { e.stopPropagation(); toggleFav(btn.dataset.id, btn); });
  });
}

/* ── Cart ── */
let cart = JSON.parse(localStorage.getItem('tk-cart') || '[]');
function addToCart(item) {
  const exists = cart.find(c => c.id === item.id);
  if (!exists) {
    cart.push(item);
    localStorage.setItem('tk-cart', JSON.stringify(cart));
    showToast('¡Añadido!', `${item.name} está en tu carrito 🛒`, 'mint');
    updateCartCount();
  } else {
    showToast('Ya está', 'Este producto ya está en tu carrito', 'yellow');
  }
}
function updateCartCount() {
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = cart.length;
    el.style.display = cart.length > 0 ? 'flex' : 'none';
  });
}

/* ── Toast ── */
function showToast(title, msg, type = 'coral') {
  const container = document.getElementById('toastContainer') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${type === 'coral' ? 'var(--coral)' : type === 'mint' ? 'var(--mint)' : 'var(--yellow-dark)'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${type === 'coral' ? '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>' : type === 'mint' ? '<polyline points="20 6 9 17 4 12"/>' : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
    </svg>
    <div class="toast-content"><strong>${title}</strong><p>${msg}</p></div>
    <button onclick="this.parentElement.classList.add('out')" style="opacity:0.5;font-size:1.2rem;line-height:1;">×</button>
  `;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('out'); setTimeout(() => toast.remove(), 300); }, 4000);
}
function createToastContainer() {
  const el = document.createElement('div');
  el.id = 'toastContainer';
  el.className = 'toast-container';
  document.body.appendChild(el);
  return el;
}

/* ── Scroll animations ── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(el);
  });
}

/* ── Skeleton loaders ── */
function removeSkeleton() {
  setTimeout(() => {
    document.querySelectorAll('.skeleton-card').forEach(s => s.classList.remove('skeleton-card'));
  }, 1200);
}

/* ── Number formatter ── */
function formatCOP(n) {
  return '$' + n.toLocaleString('es-CO') + ' COP';
}

/* ── Rating stars ── */
function renderStars(rating, container) {
  if (!container) return;
  container.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    star.setAttribute('width', '16');
    star.setAttribute('height', '16');
    star.setAttribute('viewBox', '0 0 24 24');
    star.setAttribute('fill', i <= Math.floor(rating) ? 'var(--yellow)' : 'none');
    star.setAttribute('stroke', 'var(--yellow-dark)');
    star.setAttribute('stroke-width', '2');
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2');
    star.appendChild(polygon);
    container.appendChild(star);
  }
}

/* ── Lazy image loading ── */
function initLazyImages() {
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && e.target.dataset.src) {
        e.target.src = e.target.dataset.src;
        e.target.removeAttribute('data-src');
        imgObserver.unobserve(e.target);
      }
    });
  });
  document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
}

/* ── Init on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initFavBtns();
  initScrollAnimations();
  initLazyImages();
  updateCartCount();
  removeSkeleton();
});

/* ── Smooth page transitions ── */
document.addEventListener('click', e => {
  const link = e.target.closest('a[href]');
  if (link && link.href.includes('.html') && !link.href.startsWith('#') && !link.target) {
    e.preventDefault();
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.2s ease';
    setTimeout(() => { window.location.href = link.href; }, 200);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';
  requestAnimationFrame(() => { document.body.style.opacity = '1'; });
});
