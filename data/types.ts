export type Gender = "hombre" | "mujer";

export type CategoryId =
  | "mens-jeans"
  | "mens-denim-shorts"
  | "mens-shorts"
  | "mens-tops"
  | "mens-sets"
  | "mens-accesorios"
  | "womens-tops"
  | "womens-jeans"
  | "womens-dresses"
  | "womens-sets";

export interface Category {
  id: CategoryId;
  gender: Gender;
  label: string;
  hint?: string;
  emptyTitle?: string;
  emptyMessage?: string;
}

export interface Product {
  id: string;
  name: string;
  gender: Gender;
  category: CategoryId;
  image: string;
  alt: string;
  color?: string;
  sourceUrl: string;
  /** Precio de referencia en Fashion Nova. Solo uso interno. */
  sourcePriceUSD?: number;
  /** Costo de compra en COP. Se usa para calcular costo x 2. */
  costCOP?: number;
  /** Precio final manual. Tiene prioridad sobre cualquier regla. */
  priceCOP?: number;
  featured?: boolean;
}

export type PublicProduct = Omit<
  Product,
  "sourceUrl" | "sourcePriceUSD" | "costCOP" | "priceCOP"
> & {
  price: number | null;
};
