import { containerClass } from "./Container";

/**
 * Faint vertical layout lines that run the full height of the page.
 * mix-blend-difference keeps them visible (and equally faint) on both ink and paper.
 */
export function GridLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 mix-blend-difference"
    >
      <div className={`${containerClass} grid h-full grid-cols-4 lg:grid-cols-6`}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`h-full border-l border-white/[0.07] ${i >= 4 ? "hidden lg:block" : ""} ${
              i === 3 ? "border-r lg:border-r-0" : ""
            } ${i === 5 ? "border-r" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
