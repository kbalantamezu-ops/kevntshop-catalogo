import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <div className="relative min-h-[68svh] sm:min-h-[74svh] lg:min-h-[82svh]">
        <Image
          src="/images/mujer/vestidos/brenda-leopard-maxi-dress.webp"
          alt="Vestido maxi leopardo de la selección KEVNTSHOP"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[68svh] max-w-[1440px] flex-col justify-end px-4 pb-10 pt-24 sm:min-h-[74svh] sm:px-6 sm:pb-14 lg:min-h-[82svh] lg:px-10 lg:pb-16">
          <div className="max-w-3xl motion-safe:animate-fade-up">
            <p className="eyebrow text-white/55">
              Nueva selección · Hombre + Mujer
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.9rem,8vw,7.6rem)] font-semibold uppercase leading-[0.86] tracking-[-0.045em]">
              Estilo que
              <br />
              habla por ti.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/65 sm:text-base">
              Jeans, shorts, tops y vestidos seleccionados para destacar.
              Compra directo por WhatsApp, sin registros.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/hombre" className="btn-light">
                Ver hombre
                <ArrowRightIcon className="size-4" />
              </Link>
              <Link href="/mujer" className="btn-outline-light">
                Ver mujer
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
