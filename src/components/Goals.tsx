import { goals } from "@/content";
import { Container, gridClass } from "./Container";
import { Reveal } from "./Reveal";
import { Section, sectionPad } from "./Section";
import { SectionLabel } from "./SectionLabel";

export function Goals() {
  return (
    <Section id="goals" tone="paper" curve="arc" flip labelledBy="goals-heading">
      <Container className={sectionPad}>
        <Reveal>
          <SectionLabel index={goals.index} label={goals.label} />
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="goals-heading"
            className="display mt-8 max-w-[20ch] text-[clamp(2.4rem,6vw,5.75rem)]"
          >
            {goals.headline}
          </h2>
        </Reveal>

        <div className={`${gridClass} mt-16 gap-y-10 md:mt-24`}>
          {goals.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={0.08 * i}
              className={`col-span-4 border-t border-rule pt-8 md:col-span-5 ${i === 1 ? "md:col-start-7" : ""}`}
            >
              <h3 className="label text-fg">{item.title}</h3>
              <p className="mt-5 max-w-[46ch] text-[13px] leading-[1.85] text-muted md:text-sm">{item.body}</p>
              {"link" in item && item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="display mt-8 inline-flex items-baseline gap-3 text-4xl text-accent-text underline decoration-1 underline-offset-[10px] transition-colors hover:decoration-2 md:text-5xl"
                >
                  {item.link.label}
                  <span aria-hidden="true" className="text-2xl">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
