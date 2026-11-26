/**
 * All site copy lives here. Edit text freely without touching components.
 *
 * Formatting: wrap a word or phrase in *asterisks* to italicize it.
 * The word *focus* is automatically rendered in the accent blue.
 */

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS object-position, used to keep faces in frame when cropped */
  position?: string;
};

export const site = {
  name: "Joel McGill",
  title: "Joel McGill — AI Integrations & Forward Deployed Engineering",
  description:
    "Joel McGill is a former Coinbase software engineer who builds AI integrations for small businesses, startups and nonprofits. He works where operations, engineering and product meet, turning everyday bottlenecks into systems that save teams time.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "My Story", href: "#story" },
  { label: "Thesis", href: "#thesis" },
  { label: "Work", href: "#work" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Beyond Work", href: "#beyond" },
  { label: "Goals", href: "#goals" },
  { label: "Connect", href: "#connect" },
];

export const hero = {
  eyebrow: "Founder, Sinfra / Former Coinbase Software Engineer",
  name: "Joel McGill",
  thesis:
    "Winning and scaling isn't about the technology. It's about *focus*, and knowing where to apply it.",
  intro:
    "I understand how businesses run, diagnose their pain points, and deliver technology integrations that close the gap.",
  ctas: [
    { label: "Let's talk", href: "#connect", primary: true },
    { label: "See the work", href: "#work", primary: false },
  ],
  background: {
    src: "/images/background-fuji-window.jpg",
    alt: "",
    width: 2400,
    height: 1800,
    position: "50% 35%",
  } satisfies Photo,
  portrait: {
    src: "/images/hero-column-bw.jpg",
    alt: "Joel McGill in a suit, leaning against a white column",
    width: 1560,
    height: 2400,
    position: "50% 20%",
  } satisfies Photo,
};

export const about = {
  index: "001",
  label: "About",
  headline:
    "An engineer who speaks business, and a builder who finishes the job.",
  bio: site.description,
  facts: ["Washington, DC based", "Full stack engineer", "Avid traveler"],
  photo: {
    src: "/images/about-orchid.jpg",
    alt: "Joel McGill smiling in a canvas jacket beneath a hanging ceiling of orchids",
    width: 1800,
    height: 2400,
    position: "70% 50%",
  } satisfies Photo,
};

export const story = {
  index: "002",
  label: "My Story",
  headline: "When building the roadmap wasn't enough",
  paragraphs: [
    "I always wanted to solve problems, brainstorm new ideas, and figure out how to make things that were slow or annoying better, faster, and more convenient. However, it always took someone who knew software to implement my ideas. That sparked in me the desire to be able to do it myself.",
    "In 2019, I had the catalyst I needed: a job managing software engineers implementing AV programs. I wanted to see ideas come to life. I didn't want to go back to school, so I looked for ways to pivot. That's when I found Fullstack Academy.",
    "I started with Fullstack Academy's introductory course, a one-to-two-month foundation in software engineering, then completed the full program in about five months. I kept teaching myself after graduating, and that hard work along with some prayer and divine grace led to a software engineering role at Coinbase, where I spent five years furthering my skills to build.",
  ],
  photo: {
    src: "/images/story-iceland-road.jpg",
    alt: "Joel walking away down an open gravel road beneath green mountains in Iceland",
    width: 1800,
    height: 2400,
    position: "40% 50%",
  } satisfies Photo,
};

export const thesis = {
  index: "003",
  label: "The Thesis",
  headline: "Technology is the easy part.",
  framing:
    "Why do so many businesses buy new tools and still feel stuck? Because AI and technology are like a sculptor's hammer and chisel. In the right hands, they can shape something remarkable. Without that skill and focus, they're just pieces of metal.",
  pillars: [
    {
      number: "01",
      title: "Understand.",
      body: "Learn the business's goals and the impact it's trying to drive, and the metrics that measure it.",
    },
    {
      number: "02",
      title: "Diagnose.",
      body: "Find the pain point or blocker, and why it's occurring. Then prescribe the right technology to solve the why.",
    },
    {
      number: "03",
      title: "Deliver.",
      body: "Implement the prescribed technology, and metrics to track the measurable impact, while ensuring the workflow itself doesn't become a blocker.",
    },
  ],
  closing:
    "Understand, diagnose, deliver are the pillars, but the key is resolve and *focus*.",
  photo: {
    src: "/images/thesis-parthenon.jpg",
    alt: "Joel standing among the towering columns of the Parthenon under a bright, cloudy sky",
    width: 1800,
    height: 2400,
    position: "50% 60%",
  } satisfies Photo,
};

export type WorkEntry = {
  company: string;
  role: string;
  dates: string;
  summary?: string;
  bullets?: string[];
};

export const work = {
  index: "004",
  label: "Work & Experience",
  entries: [
    {
      company: "Sinfra",
      role: "Founder",
      dates: "2026 – Present",
      summary:
        "Works with local businesses, startups and nonprofits. Currently working with a startup in the finance space, another in media storage, and Wacif, the Washington Area Community Investment Fund, a nonprofit looking to bring AI education to local businesses.",
    },
    {
      company: "Coinbase",
      role: "Software Engineer (Remote)",
      dates: "2020 – Feb 2026",
      bullets: [
        "Founding engineer on login.coinbase.com and accounts.coinbase.com. Designed the error and translation architecture that became the pattern across Coinbase's identity platforms, and launched accounts.coinbase.com to all international markets in 2022.",
        "Led a cross-functional account recovery initiative after the Q4 2023 surge in lockouts driven by BTC ETF demand. Raised the recovery rate from 60% to an 84% average (88% peak), helping ~132,000 users a month regain access and cutting customer service contacts by 42%.",
        "Found and fixed a systemic repeat-lockout problem caused by token timing. Repeat lockouts dropped 17.5% and login success rose 11%.",
        "Built Coinbase's current password reset flow and the login recovery route, moving every recovery path (2FA, email, ID verification, security questions, trusted contacts) off a legacy system.",
        "Shipped 0-to-1 products with startup-style autonomy: Sign In with Google for Coinbase login, and a Go service for a dYdX proof-of-concept that attested a wallet belonged to a verified human.",
        "Integrated Arkose Labs bot detection into Coinbase Prime's institutional login and managed the vendor relationship directly.",
      ],
    },
    {
      company: "Activaire",
      role: "Project Manager (New York, NY)",
      dates: "2017 – June 2019",
      bullets: [
        "Managed the audio-visual design workflow for retail, office and consumer spaces, and directed bid responses for installations across the Americas on projects with budgets of $200K+.",
        "Kept 5–6 external stakeholders aligned per project to deliver on time.",
        'Restructured internal operations: streamlined the service invoice process and built a "lessons learned" repository to improve future projects.',
      ],
    },
  ] satisfies WorkEntry[],
};

export const toolkit = {
  index: "005",
  label: "Toolkit",
  groups: [
    {
      name: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Material UI"],
    },
    { name: "Backend", items: ["Python", "FastAPI", "Pydantic"] },
    {
      name: "AI",
      items: [
        "LangChain",
        "OpenAI and Anthropic APIs",
        "Claude Code",
        "Cursor",
      ],
    },
  ],
};

export const beyond = {
  index: "006",
  label: "Beyond Work",
  headline: "Off the clock: art, jazz, anime and one very goofy dog.",
  tiles: [
    {
      kind: "image" as const,
      caption: "Apollo",
      photo: {
        src: "/images/beyond-apollo-dc.jpg",
        alt: "Joel crouching beside his dog Apollo, an Aussie Mountain Doodle, on a plaza in DC",
        width: 2400,
        height: 1800,
        position: "50% 60%",
      } satisfies Photo,
    },
    {
      kind: "image" as const,
      caption: "Anime",
      photo: {
        src: "/images/beyond-straw-hat.jpg",
        alt: "Joel in a red haori and straw hat, seated beside a suit of samurai armor",
        width: 2400,
        height: 1800,
        position: "55% 40%",
      } satisfies Photo,
    },
    {
      kind: "video" as const,
      caption: "Jazz",
      src: "/images/beyond-concert-loop.mp4",
      poster: "/images/beyond-concert-poster.jpg",
      alt: "A live concert stage washed in yellow spotlights, seen from the crowd",
    },
    {
      kind: "image" as const,
      caption: "Art",
      photo: {
        src: "/images/beyond-art-deco-triptych.jpg",
        alt: "An Art Deco triptych of three painted panels with gold leaf, robed women, and stylized flowers, hanging in a gallery",
        width: 1024,
        height: 768,
        position: "50% 50%",
      } satisfies Photo,
    },
  ],
  items: [
    {
      title: "Anime",
      body: "Animation is the corner of film I live for, from *Avatar: The Last Airbender* (technically not anime) to One Piece and Spy x Family.",
    },
    {
      title: "Art",
      body: "Favorite art museums are the Hirshhorn and the National Gallery of Art.",
    },
    {
      title: "Jazz",
      body: "A night out at Blues Alley is my idea of a good evening. I keep coming back to John Coltrane, Dizzy Gillespie and Duke Ellington.",
    },
    {
      title: "Apollo",
      body: "I share my life with Apollo, a silly, affable Aussie Mountain Doodle (an Australian Shepherd and Bernedoodle mix). He loves being chased around the couch and greeting every dog and person we pass on our walks around NoMa.",
    },
    {
      title: "Church",
      body: "As a man of faith, I serve on the Groups team and the Setup/Takedown team at my local church, Union Church.",
    },
  ],
};

export const goals = {
  index: "007",
  label: "Goals",
  headline:
    "To build a reputation of curious customer focus and relentless engineering rigor.",
  items: [
    {
      title: "Career goal",
      body: "Continuously working with interesting businesses, startups and organizations, helping them scale, finding room for efficiency gains and pushing them towards success.",
    },
    {
      title: "What I'm building toward",
      body: "Creating a brand of engineering that is laser focused on outcome and customer delight.",
      link: { label: "sinfra.io", href: "https://sinfra.io" },
    },
  ],
};

export const connect = {
  index: "008",
  label: "Connect",
  headline:
    "Looking for an easier process, or want to build something cool? Let's talk.",
  primaryEmail: "joel@sinfra.io",
  secondaryEmail: "japollodev@gmail.com",
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/japollodev/",
  },
  location: "Washington, DC → New York",
  footer: "© 2026 Joel McGill · Built with focus · Washington, DC",
  photo: {
    src: "/images/connect-capitol-tux.jpg",
    alt: "Joel smiling in a tuxedo in front of the U.S. Capitol",
    width: 1800,
    height: 2400,
    position: "50% 40%",
  } satisfies Photo,
};
