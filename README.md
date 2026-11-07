# KEVNTSHOP

Catálogo público de moda para hombre y mujer, construido con **Next.js 16 + React 19 + TypeScript + Tailwind CSS 4**.

## Datos del proyecto

- **Marca:** KEVNTSHOP
- **WhatsApp:** `+57 313 335 1400` (`573133351400` en enlaces)
- **Moneda:** COP
- **Rutas públicas:** `/`, `/hombre`, `/mujer`

## Estructura principal

- `app/`: páginas y metadatos (`/`, `/hombre`, `/mujer`, `sitemap`, `robots`, `icon.svg`).
- `components/`: UI reutilizable (header, footer, hero, catálogo, tarjetas, modal, WhatsApp).
- `data/products.ts`: catálogo. **Aquí se agregan o editan productos.**
- `data/store.ts`: datos de la marca, WhatsApp y precios fijos.
- `data/categories.ts`: categorías por género.
- `lib/pricing.ts`: reglas de cálculo de precio.
- `public/images/`: imágenes locales de producto en WebP (2:3).
- `scripts/download-images.mjs`: descarga/optimiza imágenes desde URLs.
- `scripts/create-og.mjs`: genera `public/og.jpg`.

## Reglas de precio

Orden de prioridad:

1. **`priceCOP`** en el producto → se usa ese precio exacto.
2. **`mens-jeans`** → precio fijo `$190.000` (editable en `data/store.ts`).
3. **`mens-denim-shorts`** → precio fijo `$160.000` (editable en `data/store.ts`).
4. **`mens-sets`, `womens-tops`, `womens-jeans`, `womens-dresses`, `womens-sets`** → `costCOP × 2`.
5. Si no hay dato → **“Precio por confirmar”**.

> Los campos `sourceUrl`, `sourcePriceUSD` y `costCOP` son de uso interno y **no se envían a la interfaz pública**. Solo se expone el precio final calculado.

## Agregar un producto

1. Copia la imagen a `public/images/<hombre|mujer>/<categoria>/mi-producto.webp` (recomendado 1000×1500).
2. Agrega el producto en `data/products.ts`:

```ts
{
  id: "mi-producto",               // único
  name: "Nombre del producto",
  gender: "mujer",                 // hombre | mujer
  category: "womens-sets",         // ver data/categories.ts
  image: "/images/mujer/conjuntos/mi-producto.webp",
  alt: "Nombre del producto en color ...",
  color: "Black",
  sourceUrl: "https://...",
  costCOP: 130000,                 // mujer/conjuntos: costo × 2
  featured: false,
}
```

Para jeans/shorts de hombre, usa `priceCOP` si quieres un precio manual; si no, se aplica el precio fijo configurado.

## Agregar conjuntos

Las categorías `mens-sets` y `womens-sets` ya existen. Al agregar productos con esas categorías aparecerán automáticamente en los filtros de `/hombre` y `/mujer`.

## Desarrollo

```bash
npm install
npm run dev
```

Abrir: `http://localhost:3000`

## Validación

```bash
npm run lint
npm run build
npm start
```

## Publicar en Vercel (recomendado)

1. Sube este proyecto a un repositorio Git (GitHub/GitLab/Bitbucket).
2. En [Vercel](https://vercel.com/new), importa el repositorio.
3. Vercel detectará Next.js automáticamente.
4. (Opcional) agrega `NEXT_PUBLIC_SITE_URL=https://tu-dominio-o-vercel.app` en variables de entorno.
5. Deploy. Obtendrás un enlace público `*.vercel.app`.

## Publicar en Netlify (alternativa)

1. Sube el proyecto a Git y conéctalo desde Netlify.
2. Netlify detecta Next.js y usa su adaptador/OpenNext automáticamente.
3. (Opcional) define `NEXT_PUBLIC_SITE_URL` con la URL pública.
4. Publica y comparte el enlace.

## Notas

- Cada producto usa una imagen local (no hotlink).
- Las fotografías actuales son de referencia de Fashion Nova, usadas bajo la autorización indicada para este catálogo.
- Para completar conjuntos, envía: **nombre, enlace, costo COP** (y color si aplica). El precio se calculará como costo × 2, salvo precio manual.
