# NANOTRONICS — Tema Shopify Premium

Tema e-commerce profesional para **NANOTRONICS**, tienda de tecnología en El Carmen de Viboral, Antioquia, Colombia.

Diseñado con enfoque en **conversión (CRO)**, **mobile first**, **velocidad** y sensación **premium** (Apple + Amazon + retail tecnológico moderno).

Repositorio: [github.com/jupabego97/mi-empresa6](https://github.com/jupabego97/mi-empresa6)

---

## Arquitectura del sitio

| Página | Template / Sección |
|--------|-------------------|
| Home | `templates/index.json` |
| Categorías | `collection.json`, `list-collections.json` |
| Producto (PDP) | `product.json` → `main-product.liquid` |
| Carrito | `cart.json` |
| Checkout | Checkout nativo Shopify (optimizado visualmente vía marca) |
| Nosotros | `page.nosotros.json` |
| Servicio técnico | `page.servicio-tecnico.json` |
| Contacto | `page.contacto.json` |
| Búsqueda | `search.json` |
| Ofertas | Colección `ofertas` |
| Marcas | `page.marcas.json` |
| Móvil | Barra inferior + sticky ATC en PDP |

---

## Stack

- **Shopify Online Store 2.0**
- **Liquid** (sections, snippets, JSON templates)
- **CSS custom** (design system tipo Tailwind — variables, grid, componentes)
- **JavaScript mínimo** (`assets/theme.js`)

---

## Design system

| Token | Valor |
|-------|-------|
| Azul eléctrico | `#0066FF` |
| Azul royal | `#1E3A8A` |
| Oscuro | `#0F172A` |
| Tipografía | Inter (Google Fonts) |

Componentes: header sticky, buscador prominente, product cards CRO, WhatsApp flotante, testimonios, secciones gaming/audio.

---

## Instalación en Shopify

### 1. Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
cd mi-empresa6
shopify theme dev --store tu-tienda.myshopify.com
```

### 2. Subir tema

```bash
shopify theme push --unpublished
```

Luego en **Admin → Tienda online → Temas** → publicar **NANOTRONICS Premium**.

### 3. Configuración obligatoria

En **Personalizar tema**:

1. **WhatsApp**: número real (ej. `573001234567`)
2. **Logo** y colores de marca
3. **Tienda física**: dirección, horario, teléfono
4. Asignar **colecciones** en secciones Home (destacados, gaming)
5. Crear páginas con handles:
   - `nosotros`
   - `servicio-tecnico`
   - `contacto`
   - `marcas`
6. Menú principal con categorías

### 4. Colección Ofertas

Crear colección automática o manual con handle `ofertas` para el enlace del header.

---

## CRO implementado

- Hero estático (sin slider pesado)
- Buscador grande en header
- Product cards: descuento %, cuotas, stock, quick add
- WhatsApp en header, PDP, carrito, flotante
- Sticky add to cart en móvil (PDP)
- Barra navegación inferior móvil
- Testimonios y marcas (prueba social)
- Banner servicio técnico con CTA diagnóstico
- Schema.org Product y Store
- Open Graph en layout

---

## Performance

- Imágenes con `loading="lazy"` / `fetchpriority="high"` en hero
- CSS único minificable
- JS < 3KB sin dependencias
- Objetivo Lighthouse móvil > 90 (tras optimizar imágenes reales WebP en Shopify CDN)

---

## Próximos pasos recomendados

1. Fotos reales de productos, taller y equipo
2. App de reviews (Judge.me / Loox)
3. Integrar filtros Shopify Search & Discovery
4. Pixels Meta + Google Analytics 4
5. Checkout branding en Shopify Plus o extensibilidad estándar

---

## Licencia

Uso privado — NANOTRONICS © 2026
