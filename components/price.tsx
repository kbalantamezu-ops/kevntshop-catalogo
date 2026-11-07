import { formatCOP } from "@/lib/format";
import { cn } from "@/lib/utils";

interface PriceProps {
  value: number | null;
  className?: string;
  pendingClassName?: string;
}

export function Price({ value, className, pendingClassName }: PriceProps) {
  if (value == null) {
    return (
      <span
        className={cn(
          "text-[11px] uppercase tracking-[0.14em] text-muted",
          pendingClassName,
        )}
      >
        Precio por confirmar
      </span>
    );
  }

  return (
    <span className={cn("text-sm font-semibold tracking-tight", className)}>
      {formatCOP(value)}
    </span>
  );
}
