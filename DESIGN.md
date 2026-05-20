# NANOTRONICS — Guía de diseño y CRO

## Posicionamiento

> La tienda tecnológica más confiable, moderna y completa del oriente antioqueño.

## Jerarquía visual

1. **Buscador** — protagonista del header (patrón Amazon)
2. **CTA primario** — azul eléctrico, sombra suave
3. **WhatsApp** — verde, siempre accesible
4. **Precio + cuotas** — above the fold en PDP
5. **Prueba social** — estrellas, testimonios, marcas

## Home — flujo de conversión

```
Hero (estático) → Beneficios → Categorías → Destacados → Gaming → Audio → Celulares → Servicio técnico → Testimonios → Marcas
```

Cada bloque responde: *¿esto ayuda a vender?*

## Mobile first

- Thumb zone: barra inferior (Inicio, Categorías, Buscar, WhatsApp, Carrito)
- Sticky ATC en PDP
- Filtros colección en panel full-screen
- Tipografía fluida con `clamp()`

## Paleta

| Uso | Color |
|-----|-------|
| CTA / links | Azul eléctrico `#0066FF` |
| Headers oscuros | `#0F172A` |
| Fondos alternos | `#F8FAFC` |
| Texto secundario | `#64748B` |

## Tipografía

- **Inter** 400–900
- Títulos: letter-spacing `-0.02em`, weight 800–900
- Cuerpo: 16px, line-height 1.6

## Componentes clave

- `snippets/product-card.liquid` — card CRO universal
- `snippets/whatsapp-link.liquid` — enlace parametrizable
- `sections/header.liquid` — sticky + búsqueda
- `assets/theme.css` — design system completo

## Páginas críticas de confianza

1. **Nosotros** — historia, misión, tienda física
2. **Servicio técnico** — pasos, servicios, CTA diagnóstico
3. **PDP** — garantía, envío, métodos de pago visibles

## SEO

- `layout/theme.liquid`: canonical, OG, schema Product/Store
- URLs limpias vía Shopify
- Títulos H1 únicos por template
