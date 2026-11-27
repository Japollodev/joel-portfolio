"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero } from "@/content";
import { Container, gridClass } from "./Container";
import { Emph } from "./Emph";
import { Photo } from "./Photo";

/**
 * Scroll to Connect so the section label, headline and email button all sit
 * below the fixed nav. If they don't all fit (short viewports), scroll just
 * far enough to show the whole email button, keeping as much headline as possible.
 * Falls back to the plain #connect anchor if the elements aren't found.
 */
function scrollToConnect(e: React.MouseEvent<HTMLAnchorElement>, reduce: boolean | null) {
  const label = document.getElementById("connect-label");
  const button = document.getElementById("connect-email");
  if (!label || !button) return;
  e.preventDefault();

  const gap = 24;
  const navH = document.querySelector("header")?.getBoundingClientRect().height ?? 80;
  // offsetTop ignores transforms, so Reveal's not-yet-played 28px rise doesn't skew this.
  const docTop = (el: HTMLElement) => {
    let y = 0;
    for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) y += n.offsetTop;
    return y;
  };
  const top = docTop(label);
  const bottom = docTop(button) + button.offsetHeight;
  const viewH = window.innerHeight;

  const fits = bottom - top <= viewH - navH - gap * 2;
  const y = fits ? top - navH - gap : bottom - viewH + gap;

  window.scrollTo({ top: Math.max(0, y), behavior: reduce ? "auto" : "smooth" });
  history.pushState(null, "", "#connect");
  button.focus({ preventScroll: true });
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-name"
      className="tone-ink relative isolate overflow-hidden"
    >
      {/* Background: Mt. Fuji through a window grid, slow parallax */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduce ? 0 : bgY }}
        className="grain absolute inset-x-0 top-[-6%] -z-10 h-[118%]"
      >
        <Image
          src={hero.background.src}
          alt=""
          fill
          preload
          sizes="100vw"
          quality={70}
          className="object-cover"
          style={{ objectPosition: hero.background.position }}
        />
      </motion.div>
      {/* Gradient so text reads */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,14,14,0.92)_0%,rgba(14,14,14,0.78)_45%,rgba(14,14,14,0.45)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(14,14,14,0.55)_0%,rgba(14,14,14,0)_30%,rgba(14,14,14,0)_60%,rgba(14,14,14,0.85)_100%)]"
      />

      <Container className="min-h-svh pb-[clamp(120px,16vw,240px)] pt-28 md:pt-36">
        <div className={`${gridClass} items-end gap-y-14`}>
          <div className="col-span-4 md:col-span-7 lg:col-span-7">
            <motion.p {...rise(0.1)} className="label text-muted">
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              {...rise(0.2)}
              id="hero-name"
              className="display mt-6 text-[clamp(4rem,13vw,11.5rem)] leading-[0.86]"
            >
              {hero.name}
            </motion.h1>

            <motion.p
              {...rise(0.35)}
              className="display mt-10 max-w-[22ch] text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.12]"
            >
              <Emph
                text={hero.thesis}
                focusClass="font-jazz font-black tracking-[-0.01em] [font-size:1.08em] leading-none"
              />
            </motion.p>

            <motion.p
              {...rise(0.5)}
              className="mt-8 max-w-[46ch] text-[13px] leading-relaxed text-muted md:text-sm"
            >
              {hero.intro}
            </motion.p>

            <motion.div {...rise(0.6)} className="mt-10 flex flex-wrap gap-3">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  onClick={cta.href === "#connect" ? (e) => scrollToConnect(e, reduce) : undefined}
                  className={
                    cta.primary
                      ? "label inline-flex items-center gap-3 rounded-full bg-paper px-6 py-3.5 text-ink ring-1 ring-paper transition-colors duration-300 hover:bg-transparent hover:text-accent-text hover:ring-accent"
                      : "label inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-paper ring-1 ring-paper/40 transition-colors duration-300 hover:text-accent-text hover:ring-accent"
                  }
                >
                  {cta.label}
                  <span aria-hidden="true">{cta.primary ? "→" : "↓"}</span>
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            {...rise(0.3)}
            className="col-span-4 sm:col-span-3 md:col-span-4 md:col-start-9 lg:col-span-4 lg:col-start-9"
          >
            <figure>
              <Photo
                photo={hero.portrait}
                preload
                sizes="(min-width: 1440px) 420px, (min-width: 768px) 32vw, 90vw"
                className="ring-1 ring-paper/15"
              />
              <figcaption className="label mt-4 flex justify-between text-muted">
                <span>Washington, DC</span>
                <span aria-hidden="true">↘ Scroll</span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
