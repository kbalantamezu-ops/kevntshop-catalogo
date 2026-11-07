import { ArrowUpRightIcon, WhatsAppIcon } from "@/components/icons";
import { generalWhatsAppMessage, whatsappUrl } from "@/lib/whatsapp";

export function ContactBand() {
  return (
    <section id="contacto" className="bg-ink text-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 sm:py-16 md:flex-row md:items-center lg:px-10">
        <div>
          <p className="eyebrow text-white/45">Atención personalizada</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl uppercase leading-[0.95] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Compra directo por WhatsApp
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
            Consulta disponibilidad, tallas y precio de cualquier prenda. Te
            respondemos de forma directa.
          </p>
        </div>

        <a
          href={whatsappUrl(generalWhatsAppMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-light shrink-0"
        >
          <WhatsAppIcon className="size-4" />
          Escribir por WhatsApp
          <ArrowUpRightIcon className="size-4" />
        </a>
      </div>
    </section>
  );
}
