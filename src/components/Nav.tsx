"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content";
import { containerClass } from "./Container";

export function Nav() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="label sr-only z-[70] bg-paper px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      {/* Difference blend keeps the bar legible over ink, paper and photos alike. */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <div className={`${containerClass} flex h-16 items-center justify-between md:h-20`}>
          <a
            href="#top"
            className="pointer-events-auto font-display text-xl tracking-wide md:text-2xl"
          >
            {site.name}
          </a>

          <nav aria-label="Primary" className="pointer-events-auto hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="label relative py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-index"
            className="label pointer-events-auto -mr-2 px-2 py-3 lg:hidden"
          >
            Index
          </button>
        </div>
      </header>

      {/* Full-screen index overlay (mobile / tablet) */}
      <div
        id="mobile-index"
        role="dialog"
        aria-modal="true"
        aria-label="Site index"
        hidden={!open}
        className="tone-ink fixed inset-0 z-[60] overflow-y-auto lg:hidden"
      >
        <div className={`${containerClass} flex h-16 items-center justify-between md:h-20`}>
          <span className="font-display text-xl tracking-wide md:text-2xl">{site.name}</span>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
            className="label -mr-2 px-2 py-3"
          >
            Close
          </button>
        </div>
        <nav aria-label="Index" className={`${containerClass} pb-16 pt-8`}>
          <ol className="border-t border-rule">
            {nav.map((item, i) => (
              <li key={item.href} className="border-b border-rule">
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-5 py-4"
                >
                  <span className="label text-accent-text">{String(i + 1).padStart(3, "0")}</span>
                  <span className="display text-4xl transition-colors group-hover:text-accent-text sm:text-5xl">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </>
  );
}
