# Intraud

Sitio institucional y catálogo digital de Intraud, fabricante argentino de equipos de soldadura, corte por plasma, cargadores y arrancadores.

## Stack

- Next.js 16 con App Router y Server Components
- React 19 y TypeScript
- Tailwind CSS 4
- Supabase como fuente del catálogo
- Vercel para despliegue

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
cp .env.example .env.local
npm run dev
```

La aplicación queda disponible en `http://localhost:3000`.

## Variables de entorno

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

La clave utilizada es publicable y todas las tablas expuestas deben conservar RLS activo. Nunca se debe usar una clave secreta o `service_role` en variables `NEXT_PUBLIC_*`.

## Catálogo

Supabase es la única fuente de verdad para los productos. La consulta relaciona:

- `products`
- `product_categories`
- `product_subcategories`
- `product_specifications`
- `product_images`

Los listados se revalidan cada hora. Las fichas conocidas se generan estáticamente durante el build y mantienen revalidación incremental.

## Verificación

Antes de publicar:

```bash
npm run lint
npm run build
```

El build también valida TypeScript, genera las 49 fichas de producto, `sitemap.xml` y `robots.txt`.
