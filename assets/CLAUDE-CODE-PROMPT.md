# Claude Code prompt: Joel McGill personal portfolio

Copy everything below the line into Claude Code, run from an empty folder that contains this `portfolio-resources` folder.

---

Build my personal portfolio website: one scrolling page, production-ready, deployable to Vercel.

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- `next/image` for every photo; Framer Motion for subtle scroll-in reveals
- Fonts from `next/font/google`
- Copy the files in `./portfolio-resources/photos/` into `public/images/` and use them exactly as mapped below. Do not swap, crop out faces, or add other images.
- Fully responsive (looks intentional at 375px phone width), accessible (real links/buttons, alt text, 4.5:1 text contrast), respects `prefers-reduced-motion`.

## Look and feel
Editorial and quiet, inspired by the mood of nickhh.com, but an original design: do not copy its code, layout or assets.
- **Sections alternate** between near-black (`#0E0E0E`) and warm off-white (`#F2EFE9`), joined by large soft curved edges instead of straight lines.
- **Faint vertical grid lines** (1px, ~6% opacity) run down the whole page, like an editorial layout grid.
- **Type:** a tall, thin, Art Deco–flavored display face for headlines (try `Italiana` or `Poiret One`); a small monospace for body and labels (`IBM Plex Mono` or `JetBrains Mono`); generous letter-spacing on small uppercase labels.
- **One accent color only: electric blue `#2F6BFF`.** Use it sparingly: section numbers, links, hover states, the italic word *focus*. Nothing else is colored except the photos.
- **Photos stay in full color**, except the hero portrait, which is already black and white. Give photos a very light film-grain overlay (CSS/SVG noise, low opacity) so they feel cohesive.
- Section labels numbered in a minimal index style: `001 / About`, `002 / My Story`, etc.
- Lots of empty space. Headlines big; body text small.
- Motion: gentle fade-and-rise on scroll, slow parallax on the background image, photos scale up 2–3% on hover. Nothing flashy.

## Photo map (locked)
| Section | File | Notes |
|---|---|---|
| Background | `background-fuji-window.jpg` | Full-bleed backdrop behind the Hero, slow parallax, dark gradient overlay so text reads. Mt. Fuji seen through a window grid = "focus". |
| Hero | `hero-column-bw.jpg` | Tall framed portrait on the right of the hero (stacks below text on mobile). Alt: "Joel McGill in a suit, leaning against a white column". |
| About | `about-orchid.jpg` | Portrait beside the bio. |
| My Story | `story-iceland-road.jpg` | Tall image beside the story text: walking down an open road. |
| Thesis | `thesis-parthenon.jpg` | Standing among the Parthenon's columns: pairs with the three pillars. |
| Beyond Work tile 1 | `beyond-apollo-dc.jpg` | Joel and his dog Apollo in DC. |
| Beyond Work tile 2 | `beyond-straw-hat.jpg` | Straw hat beside samurai armor (anime). |
| Beyond Work tile 3 | `beyond-concert-loop.mp4` | Short silent loop: `autoplay muted loop playsInline`, no controls; show a still poster frame if reduced motion is on. Caption it "Music". |
| Connect | `connect-capitol-tux.jpg` | Smiling in a tux in front of the U.S. Capitol. |

Beyond Work tiles are **small**: a row of three on desktop, swipeable or stacked on mobile.

## Page content (use this copy as written)

**Nav:** Joel McGill (left). Links: About · My Story · Thesis · Work · Toolkit · Beyond Work · Goals · Connect.

**Hero**
- Eyebrow: Founder, Sinfra / Former Coinbase Software Engineer
- Name: Joel McGill
- Thesis line: Winning and scaling isn't about the technology. It's about *focus*, and knowing where to apply it.
- Intro: I understand how businesses run, diagnose their pain points, and deliver technology integrations that close the gap.
- Buttons: "Let's talk" → #connect, "See the work" → #work

**001 / About**
- Headline: An engineer who speaks business, and a builder who finishes the job.
- Bio: Joel McGill is a former Coinbase software engineer who builds AI integrations for small businesses, startups and nonprofits. He works where operations, engineering and product meet, turning everyday bottlenecks into systems that save teams time.
- Quick facts (tags): Washington, DC based · Full stack engineer · Avid traveler

**002 / My Story**
- Headline: When building the roadmap wasn't enough
- I always wanted to solve problems, brainstorm new ideas, and figure out how to make things that were slow or annoying better, faster, and more convenient. However, it always took someone who knew software to implement my ideas. That sparked in me the desire to be able to do it myself.
- In 2019, I had the catalyst I needed: a job managing software engineers implementing AV programs. I wanted to see ideas come to life. I didn't want to go back to school, so I looked for ways to pivot. That's when I found Fullstack Academy.
- I started with Fullstack Academy's introductory course, a one-to-two-month foundation in software engineering, then completed the full program in about five months. I kept teaching myself after graduating, and that work led to a software engineering role at Coinbase, where I spent about five years.

**003 / The Thesis**
- Headline: Technology is the easy part.
- Framing: Why do so many businesses buy new tools and still feel stuck? Because AI and technology are like a sculptor's hammer and chisel. In the right hands, they can shape something remarkable. Without that skill and focus, they're just pieces of metal.
- Pillar 01 — *Understand.* Learn the business's goals and the impact it's trying to drive, and the metrics that measure it.
- Pillar 02 — *Diagnose.* Find the pain point or blocker, and why it's occurring. Then prescribe the right technology to solve the why.
- Pillar 03 — *Deliver.* Implement the prescribed technology, and metrics to track the measurable impact, while ensuring the workflow itself doesn't become a blocker.
- Closing line: Understand, diagnose, deliver are the pillars, but the key is resolve and *focus*.

**004 / Work & Experience** (three entries, newest first; each opens to show bullets)
1. **Sinfra** — Founder — 2026 – Present
   Works with local businesses, startups and nonprofits. Currently working with a startup in the finance space, another in media storage, and Wacif, the Washington Area Community Investment Fund, a nonprofit looking to bring AI education to local businesses.
2. **Coinbase** — Software Engineer (Remote) — 2020 – Feb 2026
   - Founding engineer on login.coinbase.com and accounts.coinbase.com. Designed the error and translation architecture that became the pattern across Coinbase's identity platforms, and launched accounts.coinbase.com to all international markets in 2022.
   - Led a cross-functional account recovery initiative after the Q4 2023 surge in lockouts driven by BTC ETF demand. Raised the recovery rate from 60% to an 84% average (88% peak), helping ~132,000 users a month regain access and cutting customer service contacts by 42%.
   - Found and fixed a systemic repeat-lockout problem caused by token timing. Repeat lockouts dropped 17.5% and login success rose 11%.
   - Built Coinbase's current password reset flow and the login recovery route, moving every recovery path (2FA, email, ID verification, security questions, trusted contacts) off a legacy system.
   - Shipped 0-to-1 products with startup-style autonomy: Sign In with Google for Coinbase login, and a Go service for a dYdX proof-of-concept that attested a wallet belonged to a verified human.
   - Integrated Arkose Labs bot detection into Coinbase Prime's institutional login and managed the vendor relationship directly.
3. **Activaire** — Project Manager (New York, NY) — 2017 – June 2019
   - Managed the audio-visual design workflow for retail, office and consumer spaces, and directed bid responses for installations across the Americas on projects with budgets of $200K+.
   - Kept 5–6 external stakeholders aligned per project to deliver on time.
   - Restructured internal operations: streamlined the service invoice process and built a "lessons learned" repository to improve future projects.

**005 / Toolkit** (grouped tags)
- Frontend: React, TypeScript, Next.js, Tailwind CSS, Material UI
- Backend: Python, FastAPI, Pydantic
- AI: LangChain, OpenAI and Anthropic APIs, Claude Code, Cursor

**006 / Beyond Work**
- Headline: Off the clock: art, jazz, anime and one very goofy dog.
- The three photo tiles above, then short text items:
  - Anime: Animation is the corner of film I live for, from *Avatar: The Last Airbender* (technically not anime) to One Piece and Spy x Family.
  - Art: Favorite art museums are the Hirshhorn and the National Gallery of Art.
  - Jazz: A night out at Blues Alley is my idea of a good evening. I keep coming back to John Coltrane, Dizzy Gillespie and Duke Ellington.
  - Apollo: I share my life with Apollo, a silly, affable Aussie Mountain Doodle (an Australian Shepherd and Bernedoodle mix). He loves being chased around the couch and greeting every dog and person we pass on our walks around NoMa.
  - Church: As a man of faith, I serve on the Groups team and the Setup/Takedown team at my local church, Union Church.

**007 / Goals**
- Headline: To build a reputation of curious customer focus and relentless engineering rigor.
- Career goal: Continuously working with interesting businesses, startups and organizations, helping them scale, finding room for efficiency gains and pushing them towards success.
- What I'm building toward: Creating a brand of engineering that is laser focused on outcome and customer delight. Link: sinfra.io

**008 / Connect**
- Headline: Looking for an easier process, or want to build something cool? Let's talk.
- Email: joel@sinfra.io (primary, large button) · japollodev@gmail.com
- LinkedIn: https://www.linkedin.com/in/japollodev/
- Location: Washington, DC → New York
- Footer: © 2026 Joel McGill · Built with focus · Washington, DC

## Deliverables
1. The working site, `npm run dev` ready, with content kept in one `content.ts` file so I can edit copy without touching components.
2. Optimized images (next/image sizes, lazy loading below the fold; preload the hero).
3. Metadata: title "Joel McGill — AI Integrations & Forward Deployed Engineering", description from the About bio, Open Graph image from the hero.
4. A short README with how to run, edit content and deploy to Vercel.

Before building, show me a one-paragraph plan of the layout and the fonts you chose, then build it.
