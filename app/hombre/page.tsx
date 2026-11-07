import type { Metadata } from "next";
import { CatalogPage } from "@/components/catalog-page";
import { categoriesForGender } from "@/data/categories";
import { getProductsByGender } from "@/data/products";

export const metadata: Metadata = {
  title: "Hombre",
  description:
    "Jeans flare y straight, denim shorts y conjuntos para hombre. Compra directa por WhatsApp.",
};

export default function HombrePage() {
  return (
    <CatalogPage
      gender="hombre"
      title="Hombre"
      intro="Jeans flare y straight, denim shorts y conjuntos. Una selección directa, sin ruido."
      products={getProductsByGender("hombre")}
      categories={categoriesForGender("hombre")}
    />
  );
}
