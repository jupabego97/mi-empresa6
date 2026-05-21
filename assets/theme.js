/**
 * NANOTRONICS Premium — JS mínimo para conversión y UX
 */
(function () {
  'use strict';

  const qs = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* Mobile menu */
  const menuToggle = qs('[data-nt-menu-toggle]');
  const mobileNav = qs('[data-nt-mobile-nav]');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  /* Collection filters mobile */
  const filterToggle = qs('[data-nt-filter-toggle]');
  const filtersPanel = qs('[data-nt-filters]');
  if (filterToggle && filtersPanel) {
    filterToggle.addEventListener('click', () => {
      filtersPanel.classList.toggle('nt-filters--open');
    });
  }

  /* PDP gallery */
  const mainImg = qs('[data-nt-pdp-main]');
  qsa('[data-nt-pdp-thumb]').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const src = thumb.dataset.src;
      if (mainImg && src) {
        mainImg.src = src;
        qsa('[data-nt-pdp-thumb]').forEach((t) => t.classList.remove('nt-pdp__thumb--active'));
        thumb.classList.add('nt-pdp__thumb--active');
      }
    });
  });

  /* PDP tabs */
  qsa('[data-nt-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.ntTab;
      qsa('[data-nt-tab]').forEach((b) => b.classList.remove('nt-tabs__btn--active'));
      qsa('[data-nt-tab-panel]').forEach((p) => p.hidden = true);
      btn.classList.add('nt-tabs__btn--active');
      const panel = qs(`[data-nt-tab-panel="${id}"]`);
      if (panel) panel.hidden = false;
    });
  });

  /* Quick add feedback */
  document.addEventListener('submit', (e) => {
    const form = e.target.closest('[data-nt-quick-add]');
    if (!form) return;
    const btn = form.querySelector('[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.dataset.originalText = btn.textContent;
      const i18n = window.NT_I18N || {};
      btn.textContent = i18n.adding || 'Agregando...';
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = btn.dataset.originalText || i18n.addFallback || i18n.add || 'Agregar';
      }, 1500);
    }
  });

  /* Lazy reveal */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px', threshold: 0.01 }
    );
    qsa('[data-nt-reveal]').forEach((el) => io.observe(el));
  }
})();
