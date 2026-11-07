"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { store } from "@/data/store";
import { whatsappUrl } from "@/lib/whatsapp";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex size-10 items-center justify-center text-ink md:hidden"
      >
        <MenuIcon className="size-6" />
      </button>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden motion-safe:animate-fade-in"
        >
          <div className="flex h-16 items-center justify-between border-b border-line px-4">
            <Logo className="text-[15px]" />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="flex size-10 items-center justify-center text-ink"
            >
              <CloseIcon className="size-6" />
            </button>
          </div>

          <nav
            aria-label="Navegación móvil"
            className="flex flex-1 flex-col justify-center gap-2 px-6"
          >
            <Link
              href="/hombre"
              onClick={() => setOpen(false)}
              className="border-b border-line py-5 font-display text-5xl uppercase leading-none tracking-[-0.02em]"
            >
              Hombre
            </Link>
            <Link
              href="/mujer"
              onClick={() => setOpen(false)}
              className="border-b border-line py-5 font-display text-5xl uppercase leading-none tracking-[-0.02em]"
            >
              Mujer
            </Link>
            <a
              href={whatsappUrl(
                "Hola KEVNTSHOP, quiero hacer una consulta sobre el catálogo.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line py-5 font-display text-5xl uppercase leading-none tracking-[-0.02em]"
            >
              Contacto
              <WhatsAppIcon className="size-7" />
            </a>
          </nav>

          <div className="border-t border-line p-6">
            <a
              href={whatsappUrl(
                "Hola KEVNTSHOP, quiero hacer una consulta sobre el catálogo.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink w-full"
            >
              <WhatsAppIcon className="size-4" />
              Escribir por WhatsApp
            </a>
            <p className="mt-4 text-center text-xs tracking-wide text-muted">
              {store.whatsappDisplay}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
