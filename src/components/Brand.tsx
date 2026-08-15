import { Link } from "@tanstack/react-router";
import emblem from "@/assets/aum-emblem.png";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Brand({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn("flex min-w-0 items-center gap-3", className)}
      aria-label={`${site.company} — A Unite for Multiple Solutions`}
    >
      <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-primary/40 bg-navy-deep shadow-[var(--shadow-gold)] sm:size-12">
        <img
          src={emblem}
          alt="AUM Sol Corp logo"
          width={96}
          height={96}
          className="size-full object-contain p-0.5"
        />
      </span>

      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-base font-bold text-primary sm:text-lg">
          {site.company}
        </span>

        <span
          className={
            compact
              ? "block truncate text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase"
              : "block truncate text-[0.6rem] tracking-[0.12em] text-muted-foreground sm:text-[0.68rem]"
          }
        >
          <span className="font-bold text-primary">A</span>
          {" "}
          <span className="font-bold text-primary">U</span>nite
          {" for "}
          <span className="font-bold text-primary">M</span>ultiple
          {" "}
          <span className="font-bold text-primary">Sol</span>utions
        </span>
      </span>
    </Link>
  );
}
