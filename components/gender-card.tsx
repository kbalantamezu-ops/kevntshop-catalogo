import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

interface GenderCardProps {
  href: string;
  label: string;
  copy: string;
  image: string;
  alt: string;
  priority?: boolean;
}

export function GenderCard({
  href,
  label,
  copy,
  image,
  alt,
  priority = false,
}: GenderCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/5] sm:aspect-[5/6]">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-paper sm:p-7">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/55">
              {copy}
            </p>
            <h3 className="mt-1.5 font-display text-3xl uppercase leading-none tracking-[-0.02em] sm:text-4xl">
              {label}
            </h3>
          </div>
          <span className="flex size-10 shrink-0 items-center justify-center border border-white/35 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-ink">
            <ArrowUpRightIcon className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
