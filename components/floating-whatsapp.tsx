import { WhatsAppIcon } from "@/components/icons";
import { generalWhatsAppMessage, whatsappUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl(generalWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center rounded-full bg-ink text-paper shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
