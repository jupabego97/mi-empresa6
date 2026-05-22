/**

 * NANOTRONICS Premium — JS para conversión y UX (Fase 2)

 */

(function () {

  'use strict';



  const qs = (sel, ctx = document) => ctx.querySelector(sel);

  const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const money = (cents, currency) => {

    try {

      return new Intl.NumberFormat(document.documentElement.lang || 'es-CO', {

        style: 'currency',

        currency: currency || 'COP',

        minimumFractionDigits: 0,

      }).format(cents / 100);

    } catch {

      return (cents / 100).toFixed(0);

    }

  };



  const setOpen = (el, open, attr) => {

    if (!el) return;

    el.classList.toggle('is-open', open);

    el.setAttribute(attr || 'aria-hidden', open ? 'false' : 'true');

    document.body.style.overflow = open ? 'hidden' : '';

  };



  /* Mobile menu */

  const menuToggle = qs('[data-nt-menu-toggle]');

  const mobileNav = qs('[data-nt-mobile-nav]');

  const closeMenu = () => {

    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');

    setOpen(mobileNav, false);

  };

  if (menuToggle && mobileNav) {

    menuToggle.addEventListener('click', () => {

      const open = !mobileNav.classList.contains('is-open');

      menuToggle.setAttribute('aria-expanded', open);

      setOpen(mobileNav, open);

    });

    qsa('[data-nt-menu-close]', mobileNav).forEach((el) => el.addEventListener('click', closeMenu));

  }



  /* Cart drawer */

  const cartDrawer = qs('[data-nt-cart-drawer]');

  const openCart = (e) => {

    const link = e.target.closest('[data-nt-open-cart]');

    if (!link || !cartDrawer) return;

    e.preventDefault();

    setOpen(cartDrawer, true);

  };

  document.addEventListener('click', openCart);

  if (cartDrawer) {

    qsa('[data-nt-cart-close]', cartDrawer).forEach((el) =>

      el.addEventListener('click', () => setOpen(cartDrawer, false))

    );

  }



  /* Collection filters mobile */

  const filterToggle = qs('[data-nt-filter-toggle]');

  const filtersPanel = qs('[data-nt-filters]');

  const closeFilters = () => filtersPanel && filtersPanel.classList.remove('nt-filters--open');

  if (filterToggle && filtersPanel) {

    filterToggle.addEventListener('click', () => filtersPanel.classList.toggle('nt-filters--open'));

    qsa('[data-nt-filter-close]', filtersPanel).forEach((el) => el.addEventListener('click', closeFilters));

  }



  /* Sort by */

  const sortSelect = qs('[data-nt-sort]');

  if (sortSelect) {

    sortSelect.addEventListener('change', () => {

      const form = sortSelect.closest('form');

      if (form) form.submit();

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



  /* PDP zoom (desktop) */

  const zoomWrap = qs('[data-nt-zoom-wrap]');

  if (zoomWrap && mainImg && window.matchMedia('(min-width: 769px)').matches) {

    zoomWrap.addEventListener('mousemove', (e) => {

      const rect = zoomWrap.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width) * 100;

      const y = ((e.clientY - rect.top) / rect.height) * 100;

      mainImg.style.transformOrigin = `${x}% ${y}%`;

      mainImg.style.transform = 'scale(1.35)';

    });

    zoomWrap.addEventListener('mouseleave', () => {

      mainImg.style.transform = '';

    });

  }



  /* PDP variants */

  const productJson = qs('[data-nt-product-json]');

  const variantSelect = qs('[data-nt-variant-select]');

  if (productJson && variantSelect) {

    let product;

    try {

      product = JSON.parse(productJson.textContent);

    } catch {

      product = null;

    }

    const currency = product?.variants?.[0]?.price ? window.Shopify?.currency?.active : 'COP';



    const updateVariant = (id) => {

      const v = product?.variants?.find((x) => String(x.id) === String(id));

      if (!v) return;

      const priceEl = qs('[data-nt-pdp-price] .nt-pdp__price');

      const compareEl = qs('[data-nt-pdp-compare]');

      const stickyPrice = qs('[data-nt-sticky-price]');

      const stockEl = qs('[data-nt-pdp-stock]');

      const skuEl = qs('[data-nt-spec-sku]');

      const addBtns = qsa('[data-nt-add-cart], [data-nt-buy-now], .nt-pdp__sticky-bar button[type="submit"]');



      if (priceEl) priceEl.textContent = money(v.price, currency);

      if (stickyPrice) stickyPrice.textContent = money(v.price, currency);

      if (compareEl) {

        if (v.compare_at_price > v.price) {

          compareEl.textContent = money(v.compare_at_price, currency);

          compareEl.hidden = false;

        } else {

          compareEl.hidden = true;

        }

      }

      if (stockEl) {

        stockEl.textContent = v.available

          ? (window.NT_I18N?.inStock || 'Disponible')

          : (window.NT_I18N?.outOfStock || 'Agotado');

        stockEl.style.color = v.available ? '' : 'var(--nt-danger)';

      }

      if (skuEl) skuEl.textContent = v.sku || '—';

      if (v.featured_image?.src && mainImg) mainImg.src = v.featured_image.src;

      addBtns.forEach((btn) => {

        btn.disabled = !v.available;

      });

    };



    variantSelect.addEventListener('change', () => updateVariant(variantSelect.value));

    updateVariant(variantSelect.value);

  }



  /* PDP tabs */

  qsa('[data-nt-tab]').forEach((btn) => {

    btn.addEventListener('click', () => {

      const id = btn.dataset.ntTab;

      qsa('[data-nt-tab]').forEach((b) => b.classList.remove('nt-tabs__btn--active'));

      qsa('[data-nt-tab-panel]').forEach((p) => (p.hidden = true));

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



  /* Cart quantity steppers */

  qsa('[data-nt-qty]').forEach((wrap) => {

    const input = wrap.querySelector('[data-nt-qty-input]');

    const minus = wrap.querySelector('[data-nt-qty-minus]');

    const plus = wrap.querySelector('[data-nt-qty-plus]');

    if (!input || !minus || !plus) return;

    minus.addEventListener('click', () => {

      const v = parseInt(input.value, 10) || 0;

      if (v > 0) input.value = v - 1;

    });

    plus.addEventListener('click', () => {

      input.value = (parseInt(input.value, 10) || 0) + 1;

    });

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

