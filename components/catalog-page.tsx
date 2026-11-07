import type { Category, Gender, PublicProduct } from "@/data/types";
import { ContactBand } from "@/components/contact-band";
import { ProductBrowser } from "@/components/product-browser";

interface CatalogPageProps {
  gender: Gender;
  title: string;
  intro: string;
  products: PublicProduct[];
  categories: Category[];
}

export function CatalogPage({
  gender,
  title,
  intro,
  products,
  categories,
}: CatalogPageProps) {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-muted">Catálogo · {gender}</p>
              <h1 className="mt-3 font-display text-[clamp(3.2rem,10vw,7rem)] uppercase leading-[0.82] tracking-[-0.045em]">
                {title}
              </h1>
            </div>
            <p className="hidden pb-2 text-[9px] uppercase tracking-[0.2em] text-muted sm:block">
              {products.length} prendas
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-lg text-sm leading-6 text-muted">{intro}</p>
            <p className="text-[9px] uppercase tracking-[0.2em] text-muted sm:hidden">
              {products.length} prendas
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
        <ProductBrowser
          products={products}
          filterCategories={categories}
          showFilters
        />
      </section>

      <ContactBand />
    </>
  );
}
