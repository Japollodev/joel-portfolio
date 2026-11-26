import { beyond } from "@/content";
import { Container, gridClass } from "./Container";
import { Emph } from "./Emph";
import { LoopVideo } from "./LoopVideo";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { Section, sectionPad } from "./Section";
import { SectionLabel } from "./SectionLabel";

const tileSizes = "(min-width: 1440px) 300px, (min-width: 768px) 24vw, 75vw";

export function Beyond() {
  return (
    <Section id="beyond" tone="ink" curve="swell" labelledBy="beyond-heading">
      <Container className={sectionPad}>
        <div className={gridClass}>
          <div className="col-span-4 md:col-span-10 lg:col-span-8">
            <Reveal>
              <SectionLabel index={beyond.index} label={beyond.label} />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="beyond-heading" className="display mt-8 text-[clamp(2.4rem,5.4vw,5rem)]">
                {beyond.headline}
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Small tiles: swipeable row on phones, three across from md up */}
        <Reveal className="mt-14 md:mt-20">
          <ul
            aria-label="Photos from life outside work"
            tabIndex={0}
            className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:max-w-[960px] md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0"
          >
            {beyond.tiles.map((tile) => (
              <li key={tile.caption} className="w-[72vw] shrink-0 snap-start sm:w-[44vw] md:w-auto">
                <figure>
                  {tile.kind === "image" ? (
                    <Photo photo={tile.photo} aspect="4 / 3" sizes={tileSizes} />
                  ) : (
                    <div className="grain group relative aspect-[4/3] overflow-hidden bg-black/20">
                      <LoopVideo src={tile.src} poster={tile.poster} alt={tile.alt} sizes={tileSizes} />
                    </div>
                  )}
                  <figcaption className="label mt-3 flex items-center justify-between text-muted">
                    <span>{tile.caption}</span>
                    {tile.kind === "video" && <span aria-hidden="true">● Loop</span>}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>

        <dl className="mt-20 grid gap-x-10 gap-y-0 md:mt-28 md:grid-cols-2 lg:grid-cols-3">
          {beyond.items.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * (i % 3)} className="border-t border-rule py-8">
              <dt className="label text-fg">{item.title}</dt>
              <dd className="mt-4 max-w-[46ch] text-[13px] leading-[1.85] text-muted md:text-sm">
                <Emph text={item.body} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
