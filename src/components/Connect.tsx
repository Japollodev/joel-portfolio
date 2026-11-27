import { connect } from "@/content";
import { Container, gridClass } from "./Container";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionLabel } from "./SectionLabel";

const linkClass =
  "text-fg underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:text-accent-text hover:decoration-accent";

export function Connect() {
  return (
    <Section id="connect" tone="ink" curve="swell" labelledBy="connect-heading">
      <Container className="pt-[clamp(72px,10vw,150px)]">
        <div className={`${gridClass} gap-y-16`}>
          <div className="col-span-4 md:col-span-7">
            <Reveal>
              <SectionLabel id="connect-label" index={connect.index} label={connect.label} />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="connect-heading" className="display mt-8 text-[clamp(2.6rem,6vw,5.75rem)]">
                {connect.headline}
              </h2>
            </Reveal>

            <Reveal delay={0.2} className="mt-12 md:mt-16">
              <a
                id="connect-email"
                href={`mailto:${connect.primaryEmail}`}
                className="group inline-flex max-w-full items-center gap-4 rounded-full bg-paper px-7 py-5 text-ink transition-colors duration-500 hover:bg-accent hover:text-white md:gap-6 md:px-10 md:py-6"
              >
                <span className="display truncate text-[clamp(1.6rem,4vw,3rem)] leading-none">
                  {connect.primaryEmail}
                </span>
                <span
                  aria-hidden="true"
                  className="font-display text-[clamp(1.6rem,4vw,3rem)] leading-none transition-transform duration-500 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.3}>
              <dl className="mt-14 grid gap-y-6 border-t border-rule pt-8 text-[13px] sm:grid-cols-[9rem_1fr] md:text-sm">
                <dt className="label pt-1 text-muted">Also</dt>
                <dd>
                  <a href={`mailto:${connect.secondaryEmail}`} className={linkClass}>
                    {connect.secondaryEmail}
                  </a>
                </dd>
                <dt className="label pt-1 text-muted">Social</dt>
                <dd>
                  <a href={connect.linkedin.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {connect.linkedin.label}
                    <span aria-hidden="true"> ↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
                <dt className="label pt-1 text-muted">Location</dt>
                <dd className="text-fg">{connect.location}</dd>
              </dl>
            </Reveal>
          </div>

          <Reveal className="col-span-4 sm:col-span-3 md:col-span-4 md:col-start-9 md:self-start">
            <Photo
              photo={connect.photo}
              aspect="3 / 4"
              sizes="(min-width: 1440px) 440px, (min-width: 768px) 32vw, 80vw"
            />
          </Reveal>
        </div>

        <footer className="mt-[clamp(96px,12vw,180px)] flex flex-col gap-4 border-t border-rule py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-muted">{connect.footer}</p>
          <a href="#top" className="label text-muted transition-colors hover:text-accent-text">
            Back to top ↑
          </a>
        </footer>
      </Container>
    </Section>
  );
}
