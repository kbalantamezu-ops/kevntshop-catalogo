import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className, light = false }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display uppercase leading-none",
        className,
      )}
      aria-label="KEVNTSHOP"
    >
      <span
        className={cn(
          "font-bold tracking-[0.18em]",
          light ? "text-white" : "text-ink",
        )}
      >
        KEVNT
      </span>
      <span
        className={cn(
          "font-light tracking-[0.26em]",
          light ? "text-white/55" : "text-muted",
        )}
      >
        SHOP
      </span>
    </span>
  );
}
