import { store } from "@/data/store";
import type { CategoryId, Product, PublicProduct } from "@/data/types";

const fixedPrices = store.fixedPrices as Partial<Record<CategoryId, number>>;

export function calculatePrice(product: Product): number | null {
  if (product.priceCOP != null) {
    return product.priceCOP;
  }

  const fixedPrice = fixedPrices[product.category];
  if (fixedPrice != null) {
    return fixedPrice;
  }

  if (product.costCOP != null) {
    return product.costCOP * store.marginMultiplier;
  }

  return null;
}

export function toPublicProduct(product: Product): PublicProduct {
  return {
    id: product.id,
    name: product.name,
    gender: product.gender,
    category: product.category,
    image: product.image,
    alt: product.alt,
    color: product.color,
    featured: product.featured,
    price: calculatePrice(product),
  };
}
