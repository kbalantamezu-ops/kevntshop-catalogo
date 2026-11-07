import Link from "next/link";
import { ArrowUpRightIcon, WhatsAppIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { store } from "@/data/store";
import { whatsappUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo light className="text-xl" />
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
              Selección de moda para hombre y mujer. Compra directa, sin
              registros y con atención personalizada.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.22em] text-white/40">
              Catálogo
            </h2>
            <nav aria-label="Catálogo" className="mt-5 flex flex-col gap-3">
              <Link
                href="/hombre"
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
                Hombre
              </Link>
              <Link
                href="/mujer"
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
                Mujer
              </Link>
              <Link
                href="/#contacto"
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
                Contacto
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.22em] text-white/40">
              Contacto
            </h2>
            <a
              href={whatsappUrl(
                "Hola KEVNTSHOP, quiero hacer una consulta sobre el catálogo.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
            >
              <WhatsAppIcon className="size-4" />
              {store.whatsappDisplay}
              <ArrowUpRightIcon className="size-3.5" />
            </a>
            <p className="mt-4 text-xs leading-5 text-white/40">
              Atención personalizada por WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.18em] text-white/35">
          <p>© 2026 KEVNTSHOP. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
