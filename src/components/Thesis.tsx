import { thesis } from "@/content";
import { Container, gridClass } from "./Container";
import { Emph } from "./Emph";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { Section, sectionPad } from "./Section";
import { SectionLabel } from "./SectionLabel";

export function Thesis() {
  return (
    <Section id="thesis" tone="paper" curve="arc" labelledBy="thesis-heading">
      <Container className={sectionPad}>
        <div className={gridClass}>
          <div className="col-span-4 md:col-span-12">
            <Reveal>
              <SectionLabel index={thesis.index} label={thesis.label} />
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="thesis-heading"
                className="display mt-8 text-[clamp(3rem,9vw,8.5rem)] leading-[0.92]"
              >
                {thesis.headline}
              </h2>
            </Reveal>
          </div>
          <Reveal
            delay={0.2}
            className="col-span-4 mt-10 md:col-span-6 md:col-start-7 md:mt-14 lg:col-span-5 lg:col-start-8"
          >
            <p className="text-[13px] leading-[1.85] text-muted md:text-sm">{thesis.framing}</p>
          </Reveal>
        </div>

        <div className={`${gridClass} mt-20 gap-y-14 md:mt-28`}>
          <Reveal className="col-span-4 md:col-span-5 lg:col-span-5">
            <Photo
              photo={thesis.photo}
              aspect="3 / 4"
              sizes="(min-width: 1440px) 560px, (min-width: 768px) 40vw, 90vw"
            />
          </Reveal>

          <ol className="col-span-4 self-end md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7">
            {thesis.pillars.map((pillar, i) => (
              <Reveal
                as="li"
                key={pillar.number}
                delay={0.08 * i}
                className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-rule py-8 last:border-b md:grid-cols-[5rem_1fr]"
              >
                <span className="label pt-3 text-accent-text">
                  <span className="sr-only">Pillar </span>
                  {pillar.number}
                </span>
                <div>
                  <h3 className="display text-[clamp(2rem,3.6vw,3.25rem)] italic">{pillar.title}</h3>
                  <p className="mt-3 max-w-[48ch] text-[13px] leading-[1.85] text-muted md:text-sm">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-24 md:mt-36">
          <p className="display max-w-[24ch] text-[clamp(2rem,4.4vw,4rem)] leading-[1.08]">
            <Emph text={thesis.closing} />
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
