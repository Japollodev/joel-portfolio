import type { ReactNode } from "react";

type Tone = "ink" | "paper";
type Curve = "arc" | "swell" | "none";

const curves: Record<Exclude<Curve, "none">, string> = {
  // Symmetric dome rising into the section above
  arc: "M0 160 C 260 40 520 0 720 0 C 920 0 1180 40 1440 160 Z",
  // Asymmetric swell, higher on the right
  swell: "M0 160 L0 140 C 360 150 760 10 1100 10 C 1260 10 1370 40 1440 70 L1440 160 Z",
};

/**
 * A full-bleed page section. The curved top edge is painted in this
 * section's own color and overlaps the section above, so tones meet in a
 * soft curve instead of a straight line.
 */
export function Section({
  id,
  tone,
  curve = "arc",
  flip = false,
  children,
  className = "",
  labelledBy,
}: {
  id?: string;
  tone: Tone;
  curve?: Curve;
  flip?: boolean;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`tone-${tone} relative isolate ${className}`}
    >
      {curve !== "none" && (
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className={`pointer-events-none absolute inset-x-0 top-0 -z-0 block h-[clamp(48px,9vw,150px)] w-full -translate-y-[calc(100%-1px)] ${
            flip ? "-scale-x-100" : ""
          }`}
        >
          <path d={curves[curve]} fill="var(--tone-bg)" />
        </svg>
      )}
      {children}
    </section>
  );
}

/** Standard vertical rhythm for content sections. */
export const sectionPad = "pt-[clamp(72px,10vw,150px)] pb-[clamp(120px,16vw,240px)]";
