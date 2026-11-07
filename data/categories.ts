import type { Category, CategoryId, Gender } from "@/data/types";

export const categories: Record<CategoryId, Category> = {
  "mens-jeans": {
    id: "mens-jeans",
    gender: "hombre",
    label: "Jeans",
    hint: "Flare & straight",
  },
  "mens-denim-shorts": {
    id: "mens-denim-shorts",
    gender: "hombre",
    label: "Denim Short",
  },
  "mens-shorts": {
    id: "mens-shorts",
    gender: "hombre",
    label: "Shorts",
    hint: "Mesh, board & casual",
  },
  "mens-tops": {
    id: "mens-tops",
    gender: "hombre",
    label: "Tops",
    hint: "Camisas & tees",
  },
  "mens-sets": {
    id: "mens-sets",
    gender: "hombre",
    label: "Conjuntos",
  },
  "mens-accesorios": {
    id: "mens-accesorios",
    gender: "hombre",
    label: "Accesorios",
  },
  "womens-tops": {
    id: "womens-tops",
    gender: "mujer",
    label: "Tops",
  },
  "womens-jeans": {
    id: "womens-jeans",
    gender: "mujer",
    label: "Jeans",
  },
  "womens-dresses": {
    id: "womens-dresses",
    gender: "mujer",
    label: "Vestidos",
  },
  "womens-sets": {
    id: "womens-sets",
    gender: "mujer",
    label: "Conjuntos",
    emptyTitle: "Conjuntos en camino",
    emptyMessage:
      "Estamos preparando esta selección. Escríbenos por WhatsApp para conocer disponibilidad.",
  },
};

export const categoryList = Object.values(categories);

export function categoriesForGender(gender: Gender): Category[] {
  return categoryList.filter((category) => category.gender === gender);
}
