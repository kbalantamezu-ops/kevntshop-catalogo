import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { ContactBand } from "@/components/contact-band";
import { GenderCard } from "@/components/gender-card";
import { Hero } from "@/components/hero";
import { ProductBrowser } from "@/components/product-browser";
import { SectionHeading } from "@/components/section-heading";
import { getFeaturedProducts } from "@/data/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <SectionHeading
          eyebrow="Compra por género"
          title="Encuentra tu estilo"
          action={
            <div className="flex items-center gap-5 text-[9px] uppercase tracking-[0.18em] text-muted">
              <Link href="/hombre" className="transition-colors hover:text-ink">
                Hombre
              </Link>
              <Link href="/mujer" className="transition-colors hover:text-ink">
                Mujer
              </Link>
            </div>
          }
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
          <GenderCard
            href="/hombre"
            label="Hombre"
            copy="Jeans & denim shorts"
            image="/images/hombre/jeans/undercover-slim-stacked-flare-jeans.webp"
            alt="Selección de hombre KEVNTSHOP"
          />
          <GenderCard
            href="/mujer"
            label="Mujer"
            copy="Tops, bodysuits y shorts"
            image="/images/mujer/tops/speed-up-leopard-halter-top-leopard.webp"
            alt="Selección de mujer KEVNTSHOP"
          />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeading
            eyebrow="Selección KEVNTSHOP"
            title="Piezas destacadas"
            action={
              <Link href="/mujer" className="link-underline">
                Explorar catálogo
                <ArrowRightIcon className="size-3.5" />
              </Link>
            }
          />

          <div className="mt-8">
            <ProductBrowser products={featuredProducts} />
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
