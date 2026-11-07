import Link from "next/link";
import { ArrowUpRightIcon, WhatsAppIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { whatsappUrl } from "@/lib/whatsapp";

export function SiteHeader() {
  return (
    <>
      <div className="bg-ink text-paper">
        <p className="mx-auto max-w-[1440px] px-4 py-2.5 text-center text-[9px] uppercase tracking-[0.24em] sm:text-[10px]">
          Compra directa por WhatsApp · Atención personalizada
        </p>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link href="/" aria-label="KEVNTSHOP, ir al inicio">
            <Logo className="text-[15px]" />
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-10 md:flex"
          >
            <Link href="/hombre" className="nav-link">
              Hombre
            </Link>
            <Link href="/mujer" className="nav-link">
              Mujer
            </Link>
          </nav>

          <a
            href={whatsappUrl(
              "Hola KEVNTSHOP, quiero hacer una consulta sobre el catálogo.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ink hidden md:inline-flex"
          >
            <WhatsAppIcon className="size-3.5" />
            WhatsApp
            <ArrowUpRightIcon className="size-3.5" />
          </a>

          <MobileMenu />
        </div>
      </header>
    </>
  );
}
