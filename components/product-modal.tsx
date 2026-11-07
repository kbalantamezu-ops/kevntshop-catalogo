"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CloseIcon, WhatsAppIcon } from "@/components/icons";
import { Price } from "@/components/price";
import { categories } from "@/data/categories";
import type { PublicProduct } from "@/data/types";
import { productWhatsAppUrl } from "@/lib/whatsapp";

interface ProductModalProps {
  product: PublicProduct;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const category = categories[product.category];

  useEffect(() => {
    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [onClose]);

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/65 p-0 backdrop-blur-sm motion-safe:animate-fade-in sm:items-center sm:p-6"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[92dvh] w-full max-w-5xl overflow-y-auto bg-paper shadow-2xl motion-safe:animate-scale-in sm:grid sm:max-h-[88dvh] sm:grid-cols-[1.05fr_1fr]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar detalles del producto"
          className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center bg-paper/90 text-ink backdrop-blur-sm transition-colors hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
        >
          <CloseIcon className="size-5" />
        </button>

        <div className="relative aspect-[2/3] w-full bg-mist sm:aspect-auto sm:h-full sm:min-h-[600px]">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="flex flex-col p-6 sm:p-9 lg:p-12">
          <p className="eyebrow text-muted">{category.label}</p>
          <h2
            id="product-modal-title"
            className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-[-0.02em] sm:text-4xl"
          >
            {product.name}
          </h2>

          {product.color ? (
            <p className="mt-5 text-sm text-muted">
              Color: <span className="text-ink">{product.color}</span>
            </p>
          ) : null}

          <div className="mt-7 border-t border-line pt-6">
            <Price
              value={product.price}
              className="text-2xl font-semibold"
              pendingClassName="text-sm"
            />
            {product.price == null ? (
              <p className="mt-3 max-w-sm text-xs leading-5 text-muted">
                Estamos confirmando el precio de esta prenda. Escríbenos y te lo
                damos de inmediato.
              </p>
            ) : null}
          </div>

          <div className="mt-8">
            <a
              href={productWhatsAppUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink w-full"
            >
              <WhatsAppIcon className="size-4" />
              Consultar por WhatsApp
            </a>
            <p className="mt-3 text-center text-[9px] uppercase tracking-[0.18em] text-muted">
              Atención personalizada · Respuesta directa
            </p>
          </div>

          <div className="mt-auto pt-10">
            <p className="text-xs leading-5 text-muted">
              Precio en pesos colombianos. Consulta disponibilidad de tallas y
              colores por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
