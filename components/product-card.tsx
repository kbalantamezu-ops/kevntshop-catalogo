"use client";

import Image from "next/image";
import { categories } from "@/data/categories";
import type { PublicProduct } from "@/data/types";
import { productWhatsAppUrl } from "@/lib/whatsapp";
import { Price } from "@/components/price";
import { WhatsAppIcon } from "@/components/icons";

interface ProductCardProps {
  product: PublicProduct;
  onOpen: () => void;
  priority?: boolean;
}

export function ProductCard({
  product,
  onOpen,
  priority = false,
}: ProductCardProps) {
  const category = categories[product.category];

  return (
    <article className="group min-w-0">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Ver detalles de ${product.name}`}
        className="relative block aspect-[2/3] w-full overflow-hidden bg-mist text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
      >
        <Image
          src={product.image}
          alt={product.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        <span className="absolute left-3 top-3 bg-white/90 px-2.5 py-1 text-[8px] uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
          {category.label}
        </span>
        <span className="absolute inset-x-0 bottom-0 hidden translate-y-full bg-white/95 py-3 text-center text-[9px] uppercase tracking-[0.22em] text-ink transition-transform duration-300 group-hover:translate-y-0 sm:block">
          Vista rápida
        </span>
      </button>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[9px] uppercase tracking-[0.16em] text-muted">
            {category.label}
            {product.color ? ` · ${product.color}` : ""}
          </p>
          <h3 className="mt-1 text-[13px] font-medium leading-snug text-ink sm:text-sm">
            {product.name}
          </h3>
          <div className="mt-2">
            <Price value={product.price} />
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2">
          <a
            href={productWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar ${product.name} por WhatsApp`}
            className="flex size-9 items-center justify-center border border-line text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="size-4" />
          </a>
          <button
            type="button"
            onClick={onOpen}
            className="text-[9px] uppercase tracking-[0.16em] text-muted underline underline-offset-4 transition-colors hover:text-ink"
          >
            Ver
          </button>
        </div>
      </div>
    </article>
  );
}
