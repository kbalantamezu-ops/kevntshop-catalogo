import { categories } from "@/data/categories";
import { store } from "@/data/store";
import type { PublicProduct } from "@/data/types";
import { formatCOP } from "@/lib/format";

export const generalWhatsAppMessage =
  "Hola KEVNTSHOP, quiero hacer una consulta sobre el catálogo.";

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${store.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function productWhatsAppUrl(product: PublicProduct): string {
  const category = categories[product.category];

  const lines = [
    `Hola ${store.name} 👋`,
    `Me interesa: ${product.name}`,
    `Categoría: ${category.label}`,
    product.color ? `Color: ${product.color}` : null,
    product.price != null
      ? `Precio: ${formatCOP(product.price)}`
      : "Precio: por confirmar",
    "¿Está disponible?",
  ].filter((line): line is string => Boolean(line));

  return whatsappUrl(lines.join("\n"));
}
