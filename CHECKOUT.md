# Personalizar checkout NANOTRONICS

## Shopify Plus

Si tienes **Shopify Plus**, el tema incluye [`layout/checkout.liquid`](layout/checkout.liquid) y [`assets/checkout.css`](assets/checkout.css) con el mismo diseño que carrito y tienda (Inter, azul eléctrico, cards, confianza).

## Plan estándar (mayoría de tiendas)

El checkout ocurre en el dominio de Shopify (`checkout.shopify.com`). Personalízalo así:

1. **Admin** → **Configuración** → **Checkout** → **Personalizar**
2. Aplica estos valores (alineados al tema):

| Elemento | Valor |
|----------|--------|
| Fondo | `#F8FAFC` |
| Acento / botones | `#0066FF` |
| Texto principal | `#0F172A` |
| Tipografía | **Inter** |
| Esquinas | Redondeadas (12–16px) |
| Logo | Mismo que en Personalizar tema |

3. En **Políticas y pie**, enlaza envíos y garantías como en el footer del tema.

4. Opcional: en **Scripts adicionales**, no es necesario si usas el editor visual.

## Coherencia con el carrito

El resumen del pedido en checkout debe verse similar al bloque "Resumen del pedido" del carrito: fondo blanco, bordes suaves, total destacado en negrita.
