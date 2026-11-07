import type { Metadata } from "next";
import { CatalogPage } from "@/components/catalog-page";
import { categoriesForGender } from "@/data/categories";
import { getProductsByGender } from "@/data/products";

export const metadata: Metadata = {
  title: "Mujer",
  description:
    "Tops, jeans, vestidos y conjuntos para mujer. Selección de prendas en tendencia. Compra directa por WhatsApp.",
};

export default function MujerPage() {
  return (
    <CatalogPage
      gender="mujer"
      title="Mujer"
      intro="Tops, jeans, vestidos y conjuntos elegidos por su estilo y potencial comercial."
      products={getProductsByGender("mujer")}
      categories={categoriesForGender("mujer")}
    />
  );
}
