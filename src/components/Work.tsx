"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { work } from "@/content";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Section, sectionPad } from "./Section";
import { SectionLabel } from "./SectionLabel";

export function Work() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <Section id="work" tone="ink" curve="swell" flip labelledBy="work-heading">
      <Container className={sectionPad}>
        <Reveal>
          <SectionLabel index={work.index} label={work.label} id="work-heading" />
        </Reveal>

        <ol className="mt-14 border-t border-rule md:mt-20">
          {work.entries.map((entry, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;
            return (
              <Reveal as="li" key={entry.company} delay={0.06 * i} className="border-b border-rule">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-8 text-left md:grid-cols-[5rem_1fr_16rem_3rem] md:py-10 lg:grid-cols-[6rem_1fr_18rem_3rem]"
                  >
                    <span className="label text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                    <span className="display text-[clamp(2.6rem,7vw,6rem)] leading-none transition-colors duration-300 group-hover:text-accent-text">
                      {entry.company}
                    </span>
                    <span className="label col-start-2 mt-4 block text-muted md:col-start-auto md:mt-0">
                      <span className="block text-fg">{entry.role}</span>
                      <span className="mt-1.5 block">{entry.dates}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`relative col-start-3 row-start-1 block h-5 w-5 self-center justify-self-end transition-transform duration-500 md:col-start-4 ${
                        isOpen ? "rotate-45 text-accent-text" : ""
                      }`}
                    >
                      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      key="panel"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-x-4 pb-12 md:grid-cols-[5rem_1fr] lg:grid-cols-[6rem_1fr]">
                        <div className="md:col-start-2 md:max-w-[78ch]">
                          {entry.summary && (
                            <p className="text-[13px] leading-[1.85] text-muted md:text-sm">{entry.summary}</p>
                          )}
                          {entry.bullets && (
                            <ul className="space-y-5">
                              {entry.bullets.map((b) => (
                                <li
                                  key={b}
                                  className="grid grid-cols-[1.5rem_1fr] text-[13px] leading-[1.85] text-muted md:text-sm"
                                >
                                  <span aria-hidden="true" className="text-accent-text">—</span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
