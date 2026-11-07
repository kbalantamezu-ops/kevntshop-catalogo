import type { Gender, Product, PublicProduct } from "@/data/types";
import { toPublicProduct } from "@/lib/pricing";

/**
 * Reglas de precio:
 * - Jeans de hombre: precio fijo de $190.000 (editable en data/store.ts).
 * - Denim shorts de hombre: precio fijo de $160.000 (editable en data/store.ts).
 * - Conjuntos de hombre y prendas de mujer: costo de compra x 2.
 * - Si falta el costo, el precio queda como "Precio por confirmar".
 * - `priceCOP` en un producto tiene prioridad sobre cualquier regla.
 *
 * Los costos no se envían al navegador: solo se entrega el precio final.
 */
export const products: Product[] = [
  {
    id: "no-cap-stacked-skinny-flare-jeans",
    name: "No Cap Stacked Skinny Flare Jeans",
    gender: "hombre",
    category: "mens-jeans",
    image: "/images/hombre/jeans/no-cap-stacked-skinny-flare-jeans.webp",
    alt: "No Cap Stacked Skinny Flare Jeans en color Black Wash",
    color: "Black Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/no-cap-stacked-skinny-flare-jeans",
    sourcePriceUSD: 30,
    featured: true,
  },
  {
    id: "i-be-jeweled-stacked-skinny-flare-jeans",
    name: "I Be Jeweled Stacked Skinny Flare Jeans",
    gender: "hombre",
    category: "mens-jeans",
    image: "/images/hombre/jeans/i-be-jeweled-stacked-skinny-flare-jeans.webp",
    alt: "I Be Jeweled Stacked Skinny Flare Jeans en color Light Blue",
    color: "Light Blue",
    sourceUrl:
      "https://www.fashionnova.com/products/i-be-jeweled-stacked-skinny-flare-jeans",
    sourcePriceUSD: 27,
    priceCOP: 190000,
  },
  {
    id: "undercover-slim-stacked-flare-jeans",
    name: "Undercover Slim Stacked Flare Jeans",
    gender: "hombre",
    category: "mens-jeans",
    image: "/images/hombre/jeans/undercover-slim-stacked-flare-jeans.webp",
    alt: "Undercover Slim Stacked Flare Jeans en color Medium Blue Wash",
    color: "Medium Blue Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/undercover-slim-stacked-flare-jeans",
    sourcePriceUSD: 29,
    featured: true,
  },
  {
    id: "the-staple-straight-jean",
    name: "The Staple Straight Jean",
    gender: "hombre",
    category: "mens-jeans",
    image: "/images/hombre/jeans/the-staple-straight-jean.webp",
    alt: "The Staple Straight Jean en color Medium Wash",
    color: "Medium Wash",
    sourceUrl: "https://www.fashionnova.com/products/the-staple-straight-jean",
    sourcePriceUSD: 20,
    priceCOP: 120000,
  },
  {
    id: "splatter-skate-relaxed-denim-shorts",
    name: "Splatter Skate Relaxed Denim Shorts",
    gender: "hombre",
    category: "mens-denim-shorts",
    image:
      "/images/hombre/denim-short/splatter-skate-relaxed-denim-shorts.webp",
    alt: "Splatter Skate Relaxed Denim Shorts en color Medium Wash",
    color: "Medium Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/splatter-skate-relaxed-denim-shorts",
    sourcePriceUSD: 24,
    featured: true,
  },
  {
    id: "barker-relaxed-denim-shorts",
    name: "Barker Relaxed Denim Shorts",
    gender: "hombre",
    category: "mens-denim-shorts",
    image: "/images/hombre/denim-short/barker-relaxed-denim-shorts.webp",
    alt: "Barker Relaxed Denim Shorts en color Vintage Blue Wash",
    color: "Vintage Blue Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/barker-relaxed-denim-shorts",
    sourcePriceUSD: 24,
  },
  {
    id: "run-around-relaxed-denim-shorts",
    name: "Run Around Relaxed Denim Shorts",
    gender: "hombre",
    category: "mens-denim-shorts",
    image: "/images/hombre/denim-short/run-around-relaxed-denim-shorts.webp",
    alt: "Run Around Relaxed Denim Shorts en color Medium Wash",
    color: "Medium Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/run-around-relaxed-denim-shorts",
    sourcePriceUSD: 21,
  },
  {
    id: "lonely-road-relaxed-denim-shorts",
    name: "Lonely Road Relaxed Denim Shorts",
    gender: "hombre",
    category: "mens-denim-shorts",
    image: "/images/hombre/denim-short/lonely-road-relaxed-denim-shorts.webp",
    alt: "Lonely Road Relaxed Denim Shorts en color Medium Wash",
    color: "Medium Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/lonely-road-relaxed-denim-shorts",
    sourcePriceUSD: 24,
    featured: true,
  },
  {
    id: "celine-cut-out-bandage-short-sleeve-top",
    name: "Celine Cut Out Bandage Short Sleeve Top",
    gender: "mujer",
    category: "womens-tops",
    image:
      "/images/mujer/tops/celine-cut-out-bandage-short-sleeve-top.webp",
    alt: "Celine Cut Out Bandage Short Sleeve Top en color Black",
    color: "Black",
    sourceUrl:
      "https://www.fashionnova.com/products/celine-cut-out-bandage-short-sleeve-top",
    sourcePriceUSD: 21,
    featured: true,
  },
  {
    id: "night-prowl-crew-neck-long-sleeve-mesh-top",
    name: "Night Prowl Crew Neck Long Sleeve Mesh Top",
    gender: "mujer",
    category: "womens-tops",
    image:
      "/images/mujer/tops/night-prowl-crew-neck-long-sleeve-mesh-top.webp",
    alt: "Night Prowl Crew Neck Long Sleeve Mesh Top en color Brown/combo",
    color: "Brown/combo",
    sourceUrl:
      "https://www.fashionnova.com/products/night-prowl-crew-neck-long-sleeve-mesh-top",
    sourcePriceUSD: 13.8,
  },
  {
    id: "diana-long-sleeve-scoop-neck-baby-tee",
    name: "Diana Long Sleeve Scoop Neck Baby Tee",
    gender: "mujer",
    category: "womens-tops",
    image: "/images/mujer/tops/diana-long-sleeve-scoop-neck-baby-tee.webp",
    alt: "Diana Long Sleeve Scoop Neck Baby Tee en color White",
    color: "White",
    sourceUrl:
      "https://www.fashionnova.com/products/diana-long-sleeve-scoop-neck-baby-tee",
    sourcePriceUSD: 8,
  },
  {
    id: "starstruck-raglan-long-sleeve-tee",
    name: "StarStruck Raglan Long Sleeve Tee",
    gender: "mujer",
    category: "womens-tops",
    image: "/images/mujer/tops/starstruck-raglan-long-sleeve-tee.webp",
    alt: "StarStruck Raglan Long Sleeve Tee en color Olive",
    color: "Olive",
    sourceUrl:
      "https://www.fashionnova.com/products/starstruck-raglan-long-sleeve-tee",
    sourcePriceUSD: 12,
  },
  {
    id: "westside-low-rise-wide-leg-jean",
    name: "Westside Low Rise Wide Leg Jean",
    gender: "mujer",
    category: "womens-jeans",
    image: "/images/mujer/jeans/westside-low-rise-wide-leg-jean.webp",
    alt: "Westside Low Rise Wide Leg Jean en color Light Wash",
    color: "Light Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/westside-low-rise-wide-leg-jean",
    sourcePriceUSD: 20,
    featured: true,
  },
  {
    id: "remi-ripped-stretch-baggy-jeans",
    name: "Remi Ripped Stretch Baggy Jeans",
    gender: "mujer",
    category: "womens-jeans",
    image: "/images/mujer/jeans/remi-ripped-stretch-baggy-jeans.webp",
    alt: "Remi Ripped Stretch Baggy Jeans en color Medium Wash",
    color: "Medium Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/remi-ripped-stretch-baggy-jeans",
    sourcePriceUSD: 24,
  },
  {
    id: "atlanta-low-stretch-classic-straight-leg-jeans",
    name: "Atlanta Low Stretch Classic Straight Leg Jeans",
    gender: "mujer",
    category: "womens-jeans",
    image:
      "/images/mujer/jeans/atlanta-low-stretch-classic-straight-leg-jeans.webp",
    alt: "Atlanta Low Stretch Classic Straight Leg Jeans en color Vintage Wash",
    color: "Vintage Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/atlanta-low-stretch-classic-straight-leg-jeans",
    sourcePriceUSD: 24,
  },
  {
    id: "tall-premium-cuffed-straight-leg-jeans",
    name: "Tall Premium Cuffed Straight Leg Jeans",
    gender: "mujer",
    category: "womens-jeans",
    image:
      "/images/mujer/jeans/tall-premium-cuffed-straight-leg-jeans.webp",
    alt: "Tall Premium Cuffed Straight Leg Jeans en color Dark Wash",
    color: "Dark Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/tall-premium-cuffed-straight-leg-jeans",
    sourcePriceUSD: 30,
  },
  {
    id: "brenda-leopard-maxi-dress",
    name: "Brenda Leopard Maxi Dress",
    gender: "mujer",
    category: "womens-dresses",
    image: "/images/mujer/vestidos/brenda-leopard-maxi-dress.webp",
    alt: "Brenda Leopard Maxi Dress en color Leopard",
    color: "Leopard",
    sourceUrl:
      "https://www.fashionnova.com/products/brenda-leopard-maxi-dress",
    sourcePriceUSD: 18,
    featured: true,
  },
  {
    id: "effortless-love-sheer-lace-midi-dress",
    name: "Effortless Love Sheer Lace Midi Dress",
    gender: "mujer",
    category: "womens-dresses",
    image:
      "/images/mujer/vestidos/effortless-love-sheer-lace-midi-dress.webp",
    alt: "Effortless Love Sheer Lace Midi Dress en color Brown",
    color: "Brown",
    sourceUrl:
      "https://www.fashionnova.com/products/effortless-love-sheer-lace-midi-dress",
    sourcePriceUSD: 28.8,
    featured: true,
  },
  {
    id: "taking-calls-collared-sweater-mini-dress",
    name: "Taking Calls Collared Sweater Mini Dress",
    gender: "mujer",
    category: "womens-dresses",
    image:
      "/images/mujer/vestidos/taking-calls-collared-sweater-mini-dress.webp",
    alt: "Taking Calls Collared Sweater Mini Dress en color Black",
    color: "Black",
    sourceUrl:
      "https://www.fashionnova.com/products/taking-calls-collared-sweater-mini-dress",
    sourcePriceUSD: 24,
  },
  {
    id: "frankie-flannel-trim-sweatshirt-mini-dress",
    name: "Frankie Flannel Trim Sweatshirt Mini Dress",
    gender: "mujer",
    category: "womens-dresses",
    image:
      "/images/mujer/vestidos/frankie-flannel-trim-sweatshirt-mini-dress.webp",
    alt: "Frankie Flannel Trim Sweatshirt Mini Dress en color Black/combo",
    color: "Black/combo",
    sourceUrl:
      "https://www.fashionnova.com/products/frankie-flannel-trim-sweatshirt-mini-dress",
    sourcePriceUSD: 24,
  },
  {
    id: "speed-up-leopard-halter-top",
    name: "Speed Up Leopard Halter Top",
    gender: "mujer",
    category: "womens-tops",
    image: "/images/mujer/tops/speed-up-leopard-halter-top-leopard.webp",
    alt: "Speed Up Leopard Halter Top en color Leopard",
    color: "Leopard",
    sourceUrl:
      "https://www.fashionnova.com/products/speed-up-leopard-halter-top",
    sourcePriceUSD: 7.98,
    priceCOP: 70000,
  },
  {
    id: "ripped-and-bleach-splatter-stacked-slim-flare-jeans",
    name: "Ripped And Bleach Splatter Stacked Slim Flare Jeans",
    gender: "hombre",
    category: "mens-jeans",
    image:
      "/images/hombre/jeans/ripped-and-bleach-splatter-stacked-slim-flare-jeans-light-blue-wash.webp",
    alt: "Ripped And Bleach Splatter Stacked Slim Flare Jeans en color Light Blue Wash",
    color: "Light Blue Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/ripped-and-bleach-splatter-stacked-slim-flare-jeans",
    sourcePriceUSD: 27,
  },
  {
    id: "i-be-jeweled-stacked-skinny-flare-jeans-black",
    name: "I Be Jeweled Stacked Skinny Flare Jeans",
    gender: "hombre",
    category: "mens-jeans",
    image:
      "/images/hombre/jeans/i-be-jeweled-stacked-skinny-flare-jeans-black.webp",
    alt: "I Be Jeweled Stacked Skinny Flare Jeans en color Black",
    color: "Black",
    sourceUrl:
      "https://www.fashionnova.com/products/i-be-jeweled-stacked-skinny-flare-jeans",
    sourcePriceUSD: 27,
    priceCOP: 190000,
  },
  {
    id: "ruthless-embroidered-stacked-skinny-flare-jeans",
    name: "Ruthless Embroidered Stacked Skinny Flare Jeans",
    gender: "hombre",
    category: "mens-jeans",
    image:
      "/images/hombre/jeans/ruthless-embroidered-stacked-skinny-flare-jeans-bleach-blue-wash.webp",
    alt: "Ruthless Embroidered Stacked Skinny Flare Jeans en color Bleach Blue Wash",
    color: "Bleach Blue Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/ruthless-embroidered-stacked-skinny-flare-jeans",
    sourcePriceUSD: 30,
  },
  {
    id: "about-fray-stacked-skinny-flare-jeans-light-wash",
    name: "About Fray Stacked Skinny Flare Jeans",
    gender: "hombre",
    category: "mens-jeans",
    image:
      "/images/hombre/jeans/about-fray-stacked-skinny-flare-jeans-light-wash.webp",
    alt: "About Fray Stacked Skinny Flare Jeans en color Light Wash",
    color: "Light Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/about-fray-stacked-skinny-flare-jeans",
    sourcePriceUSD: 29,
  },
  {
    id: "about-fray-stacked-skinny-flare-jeans-black-wash",
    name: "About Fray Stacked Skinny Flare Jeans",
    gender: "hombre",
    category: "mens-jeans",
    image:
      "/images/hombre/jeans/about-fray-stacked-skinny-flare-jeans-black-wash.webp",
    alt: "About Fray Stacked Skinny Flare Jeans en color Black Wash",
    color: "Black Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/about-fray-stacked-skinny-flare-jeans",
    sourcePriceUSD: 29,
  },
  {
    id: "through-it-ripped-skinny-flared-jeans",
    name: "Through It Ripped Skinny Flared Jeans",
    gender: "hombre",
    category: "mens-jeans",
    image:
      "/images/hombre/jeans/through-it-ripped-skinny-flared-jeans-black-wash.webp",
    alt: "Through It Ripped Skinny Flared Jeans en color Black Wash",
    color: "Black Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/through-it-ripped-skinny-flared-jeans",
    sourcePriceUSD: 29,
    priceCOP: 170000,
  },
  {
    id: "relaxed-osaka-block-short",
    name: "Relaxed Osaka Block Short",
    gender: "hombre",
    category: "mens-shorts",
    image: "/images/hombre/shorts/relaxed-osaka-block-short-purple-combo.webp",
    alt: "Relaxed Osaka Block Short en color Purple/combo",
    color: "Purple/combo",
    sourceUrl:
      "https://www.fashionnova.com/products/relaxed-osaka-block-short",
    sourcePriceUSD: 15.98,
    priceCOP: 100000,
  },
  {
    id: "everyday-stretch-paneled-boardshorts-9",
    name: "Everyday Stretch Paneled Boardshorts 9\"",
    gender: "hombre",
    category: "mens-shorts",
    image:
      "/images/hombre/shorts/everyday-stretch-paneled-boardshorts-9-green.webp",
    alt: "Everyday Stretch Paneled Boardshorts 9 pulgadas en color Green",
    color: "Green",
    sourceUrl:
      "https://www.fashionnova.com/products/everyday-stretch-paneled-boardshorts-9-fncolorname-green",
    sourcePriceUSD: 4.98,
    priceCOP: 50000,
  },
  {
    id: "marcello-relaxed-mesh-short",
    name: "Marcello Relaxed Mesh Short",
    gender: "hombre",
    category: "mens-shorts",
    image: "/images/hombre/shorts/marcello-relaxed-mesh-short-red-combo.webp",
    alt: "Marcello Relaxed Mesh Short en color Red/combo",
    color: "Red/combo",
    sourceUrl:
      "https://www.fashionnova.com/products/marcello-relaxed-mesh-short",
    sourcePriceUSD: 18,
    priceCOP: 50000,
  },
  {
    id: "cassiel-tapestry-shirt",
    name: "Cassiel Tapestry Shirt",
    gender: "hombre",
    category: "mens-tops",
    image: "/images/hombre/tops/cassiel-tapestry-shirt-multi-color.webp",
    alt: "Cassiel Tapestry Shirt en color Multi Color",
    color: "Multi Color",
    sourceUrl: "https://www.fashionnova.com/products/cassiel-tapestry-shirt",
    sourcePriceUSD: 18,
    priceCOP: 140000,
  },
  {
    id: "rogue-tapestry-shirt",
    name: "Rogue Tapestry Shirt",
    gender: "hombre",
    category: "mens-tops",
    image: "/images/hombre/tops/rogue-tapestry-shirt-multi-color.webp",
    alt: "Rogue Tapestry Shirt en color Multi Color",
    color: "Multi Color",
    sourceUrl: "https://www.fashionnova.com/products/rogue-tapestry-shirt",
    sourcePriceUSD: 21,
    priceCOP: 140000,
  },
  {
    id: "jeweled-plaid-raw-hem-button-up-shirt",
    name: "Jeweled Plaid Raw Hem Button Up Shirt",
    gender: "hombre",
    category: "mens-tops",
    image:
      "/images/hombre/tops/jeweled-plaid-raw-hem-button-up-shirt-black.webp",
    alt: "Jeweled Plaid Raw Hem Button Up Shirt en color Black",
    color: "Black",
    sourceUrl:
      "https://www.fashionnova.com/products/jeweled-plaid-raw-hem-button-up-shirt",
    sourcePriceUSD: 27,
    priceCOP: 120000,
  },
  {
    id: "day-to-day-slip-on-slides",
    name: "Day To Day Slip On Slides",
    gender: "hombre",
    category: "mens-accesorios",
    image: "/images/hombre/accesorios/day-to-day-slip-on-slides-black.webp",
    alt: "Day To Day Slip On Slides en color Black",
    color: "Black",
    sourceUrl:
      "https://www.fashionnova.com/products/day-to-day-slip-on-slides",
    sourcePriceUSD: 12,
    priceCOP: 80000,
  },
  {
    id: "azrael-tapestry-set",
    name: "Azrael Tapestry Set",
    gender: "hombre",
    category: "mens-sets",
    image: "/images/hombre/conjuntos/azrael-tapestry-set.webp",
    alt: "Conjunto Azrael Tapestry: camisa y shorts",
    color: "Multi Color / Black combo",
    sourceUrl: "https://www.fashionnova.com/products/azrael-tapestry-shirt",
    priceCOP: 300000,
  },
  {
    id: "von-dutch-eyeball-denim-set",
    name: "Von Dutch Eyeball Denim Set",
    gender: "hombre",
    category: "mens-sets",
    image: "/images/hombre/conjuntos/von-dutch-eyeball-denim-set.webp",
    alt: "Conjunto Von Dutch Eyeball Denim: hoodie y jean",
    color: "Green",
    sourceUrl:
      "https://www.fashionnova.com/products/von-dutch-eyeball-denim-zip-up-hoodie",
  },
  {
    id: "tayson-resort-set",
    name: "Tayson Resort Set",
    gender: "hombre",
    category: "mens-sets",
    image: "/images/hombre/conjuntos/tayson-resort-set.webp",
    alt: "Conjunto Tayson Resort: track jacket y sweatpants",
    color: "Black",
    sourceUrl:
      "https://www.fashionnova.com/products/tayson-resort-track-jacket",
    priceCOP: 350000,
  },
  {
    id: "tayson-oversized-heavyweight-striped-set",
    name: "Tayson Oversized Heavyweight Striped Set",
    gender: "hombre",
    category: "mens-sets",
    image:
      "/images/hombre/conjuntos/tayson-oversized-heavyweight-striped-set.webp",
    alt: "Conjunto Tayson Oversized Heavyweight Striped: tee y shorts",
    color: "Black",
    sourceUrl:
      "https://www.fashionnova.com/products/tayson-oversized-heavyweight-striped-tee",
    priceCOP: 300000,
  },
  {
    id: "relaxed-fray-with-tapestry-sides-denim-short",
    name: "Relaxed Fray With Tapestry Sides Denim Short",
    gender: "hombre",
    category: "mens-denim-shorts",
    image:
      "/images/hombre/denim-short/relaxed-fray-with-tapestry-sides-denim-short-light-blue-wash.webp",
    alt: "Relaxed Fray With Tapestry Sides Denim Short en color Light Blue Wash",
    color: "Light Blue Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/relaxed-fray-with-tapestry-sides-denim-short",
    sourcePriceUSD: 8.98,
    priceCOP: 160000,
  },
  {
    id: "relaxed-osaka-block-short-navy-combo",
    name: "Relaxed Osaka Block Short",
    gender: "hombre",
    category: "mens-shorts",
    image: "/images/hombre/shorts/relaxed-osaka-block-short-navy-combo.webp",
    alt: "Relaxed Osaka Block Short en color Navy/combo",
    color: "Navy/combo",
    sourceUrl:
      "https://www.fashionnova.com/products/relaxed-osaka-block-short",
    sourcePriceUSD: 15.98,
    priceCOP: 100000,
  },
  {
    id: "relaxed-osaka-block-short-black-brown",
    name: "Relaxed Osaka Block Short",
    gender: "hombre",
    category: "mens-shorts",
    image:
      "/images/hombre/shorts/relaxed-osaka-block-short-black-brown.webp",
    alt: "Relaxed Osaka Block Short en color Black/Brown",
    color: "Black/Brown",
    sourceUrl:
      "https://www.fashionnova.com/products/relaxed-osaka-block-short",
    sourcePriceUSD: 9.98,
    priceCOP: 100000,
  },
  {
    id: "stacked-skinny-flare-fringe-blade-jeans",
    name: "Stacked Skinny Flare Fringe Blade Jeans",
    gender: "hombre",
    category: "mens-jeans",
    image:
      "/images/hombre/jeans/stacked-skinny-flare-fringe-blade-jeans-vintage-wash.webp",
    alt: "Stacked Skinny Flare Fringe Blade Jeans en color Vintage Wash",
    color: "Vintage Wash",
    sourceUrl:
      "https://www.fashionnova.com/products/stacked-skinny-flare-fringe-blade-jeans",
    sourcePriceUSD: 24,
    priceCOP: 180000,
  },
  {
    id: "jeweled-plaid-long-sleeve-button-up-shirt",
    name: "Jeweled Plaid Long Sleeve Button Up Shirt",
    gender: "hombre",
    category: "mens-tops",
    image:
      "/images/hombre/tops/jeweled-plaid-long-sleeve-button-up-shirt-olive-combo.webp",
    alt: "Jeweled Plaid Long Sleeve Button Up Shirt en color Olive/combo",
    color: "Olive/combo",
    sourceUrl:
      "https://www.fashionnova.com/products/jeweled-plaid-long-sleeve-button-up-shirt",
    sourcePriceUSD: 27,
    priceCOP: 140000,
  },
];

export function getProductsByGender(gender: Gender): PublicProduct[] {
  return products
    .filter((product) => product.gender === gender)
    .map(toPublicProduct);
}

export function getFeaturedProducts(): PublicProduct[] {
  return products.filter((product) => product.featured).map(toPublicProduct);
}
