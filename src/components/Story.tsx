import { story } from "@/content";
import { Container, gridClass } from "./Container";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { Section, sectionPad } from "./Section";
import { SectionLabel } from "./SectionLabel";

const numerals = ["i.", "ii.", "iii.", "iv.", "v."];

export function Story() {
  return (
    <Section id="story" tone="ink" curve="swell" labelledBy="story-heading">
      <Container className={sectionPad}>
        <div className={`${gridClass} gap-y-14`}>
          <div className="col-span-4 md:col-span-7 lg:col-span-6">
            <Reveal>
              <SectionLabel index={story.index} label={story.label} />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="story-heading" className="display mt-8 text-[clamp(2.4rem,5.4vw,5rem)]">
                {story.headline}
              </h2>
            </Reveal>

            <ol className="mt-14 space-y-10 md:mt-20">
              {story.paragraphs.map((p, i) => (
                <Reveal as="li" key={i} delay={0.05 * i} className="grid grid-cols-[3rem_1fr] gap-2 border-t border-rule pt-6">
                  <span aria-hidden="true" className="font-display text-xl text-muted">
                    {numerals[i]}
                  </span>
                  <p className="max-w-[56ch] text-[13px] leading-[1.85] text-muted md:text-sm">{p}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="col-span-4 md:col-span-5 md:col-start-8 lg:col-span-5 lg:col-start-8">
            <Reveal className="md:sticky md:top-28">
              <Photo
                photo={story.photo}
                aspect="3 / 4.4"
                sizes="(min-width: 1440px) 540px, (min-width: 768px) 40vw, 90vw"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
