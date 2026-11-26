import type { ReactNode } from "react";

/** Page-width wrapper shared by every section and the grid-line overlay. */
export const containerClass = "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12";

/** 4 columns on phones, 12 from md up. */
export const gridClass = "grid grid-cols-4 gap-x-5 md:grid-cols-12 lg:gap-x-6";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${containerClass} ${className}`}>{children}</div>;
}
