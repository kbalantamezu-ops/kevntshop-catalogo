"use client";

import { useMemo, useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { ProductModal } from "@/components/product-modal";
import { categories } from "@/data/categories";
import type { Category, PublicProduct } from "@/data/types";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface ProductBrowserProps {
  products: PublicProduct[];
  filterCategories?: Category[];
  showFilters?: boolean;
}

export function ProductBrowser({
  products,
  filterCategories = [],
  showFilters = false,
}: ProductBrowserProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] =
    useState<PublicProduct | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }

    return products.filter(
      (product) => product.category === activeCategory,
    );
  }, [activeCategory, products]);

  const activeCategoryData = filterCategories.find(
    (category) => category.id === activeCategory,
  );

  return (
    <>
      {showFilters ? (
        <div className="mb-8">
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              aria-pressed={activeCategory === "all"}
              className={cn(
                "shrink-0 border px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
                activeCategory === "all"
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-paper text-ink hover:border-ink",
              )}
            >
              Todos
              <span className="ml-2 opacity-50">{products.length}</span>
            </button>

            {filterCategories.map((category) => {
              const count = products.filter(
                (product) => product.category === category.id,
              ).length;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={activeCategory === category.id}
                  className={cn(
                    "shrink-0 border px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
                    activeCategory === category.id
                      ? "border-ink bg-ink text-paper"
                      : "border-line bg-paper text-ink hover:border-ink",
                  )}
                >
                  {category.label}
                  <span className="ml-2 opacity-50">
                    {count === 0 ? "Pronto" : count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 4}
              onOpen={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      ) : (
        <div className="border border-line bg-mist px-6 py-20 text-center">
          <p className="eyebrow text-muted">Próximamente</p>
          <h3 className="mt-3 font-display text-3xl uppercase">
            {activeCategoryData?.emptyTitle ?? "Selección en camino"}
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
            {activeCategoryData?.emptyMessage ??
              "Estamos preparando esta categoría. Escríbenos para conocer disponibilidad."}
          </p>
          <a
            href={whatsappUrl(
              "Hola KEVNTSHOP, quiero conocer las prendas disponibles.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ink mt-7"
          >
            <WhatsAppIcon className="size-4" />
            Consultar por WhatsApp
          </a>
        </div>
      )}

      {selectedProduct ? (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      ) : null}
    </>
  );
}

export { categories };
