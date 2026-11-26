import { toolkit } from "@/content";
import { Container, gridClass } from "./Container";
import { Reveal } from "./Reveal";
import { Section, sectionPad } from "./Section";
import { SectionLabel } from "./SectionLabel";

export function Toolkit() {
  return (
    <Section id="toolkit" tone="paper" curve="arc" labelledBy="toolkit-heading">
      <Container className={sectionPad}>
        <Reveal>
          <SectionLabel index={toolkit.index} label={toolkit.label} id="toolkit-heading" />
        </Reveal>

        <dl className="mt-14 border-t border-rule md:mt-20">
          {toolkit.groups.map((group, i) => (
            <Reveal key={group.name} delay={0.06 * i} className={`${gridClass} gap-y-5 border-b border-rule py-8 md:py-10`}>
              <dt className="display col-span-4 text-[clamp(2.4rem,5vw,4.5rem)] leading-none md:col-span-4">
                {group.name}
              </dt>
              <dd className="col-span-4 self-center md:col-span-8">
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="label rounded-full border border-rule px-4 py-2.5 text-fg transition-colors duration-300 hover:border-accent hover:text-accent-text"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
