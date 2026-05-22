# Fase 2 — NANOTRONICS Premium (completada)

Funcionalidades y pulido añadidos sobre la Fase 1 (home, PDP base, carrito, traducciones).

## Entregables

| Área | Archivos / comportamiento |
|------|---------------------------|
| Menú móvil | `snippets/mobile-menu.liquid`, botón en `sections/header.liquid`, estilos + `theme.js` |
| Mini-carrito | `snippets/cart-drawer.liquid`, icono carrito abre drawer (`data-nt-open-cart`) |
| Colección | Filtros Shopify (`snippets/collection-filters.liquid`), orden `sort_by`, breadcrumbs, paginación |
| PDP | Selector variantes + JS precio/stock/imagen, zoom desktop, tabs FAQ, `payment-icons`, sticky ATC |
| Páginas | FAQ (`page.faq.json`), contacto con formulario (`page-contacto.liquid`), 404 dedicada |
| Clientes | `templates/customers/*.json` + login, registro, cuenta |
| Ofertas | `templates/collection.ofertas.json` |
| i18n | Claves nuevas en `locales/es.default.json` |

## Configuración en Shopify (post-deploy)

1. **Menú**: Online Store → Navigation → `main-menu` con categorías.
2. **Colección ofertas**: crear colección con handle `ofertas` y asignar template **ofertas** si aplica.
3. **Filtros**: Apps → **Search & Discovery** → activar filtros por colección.
4. **Páginas** (handles sugeridos):
   - `faq` → plantilla **page.faq**
   - `contacto` → plantilla **page.contacto**
   - Enlazar footer FAQ a `/pages/faq` o ajustar handle en `footer.liquid`
5. **Cuentas de cliente**: Settings → Customer accounts → habilitar cuentas clásicas o nueva experiencia (templates compatibles con login JSON).

## Checkout

Plan estándar: personalizar en **Settings → Checkout** (ver `CHECKOUT.md`). `layout/checkout.liquid` solo aplica en **Shopify Plus**.

## Referencia de ejemplo

`config/settings_data.example.json` — valores sugeridos para copiar al personalizar (no commitear secretos).
