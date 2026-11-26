import { about } from "@/content";
import { Container, gridClass } from "./Container";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { Section, sectionPad } from "./Section";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <Section id="about" tone="paper" curve="arc" labelledBy="about-heading">
      <Container className={sectionPad}>
        <div className={`${gridClass} gap-y-14 md:items-end`}>
          <Reveal className="col-span-4 md:col-span-5 lg:col-span-4">
            <Photo
              photo={about.photo}
              aspect="4 / 5"
              sizes="(min-width: 1440px) 440px, (min-width: 768px) 40vw, 90vw"
            />
          </Reveal>

          <div className="col-span-4 md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <SectionLabel index={about.index} label={about.label} />
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="about-heading"
                className="display mt-8 text-[clamp(2.4rem,5.4vw,5rem)]"
              >
                {about.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-[54ch] text-[13px] leading-[1.85] text-muted md:text-sm">
                {about.bio}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <ul aria-label="Quick facts" className="mt-10 flex flex-wrap gap-2.5">
                {about.facts.map((fact) => (
                  <li
                    key={fact}
                    className="label rounded-full border border-rule px-4 py-2.5 text-fg"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
