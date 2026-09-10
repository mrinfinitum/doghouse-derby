import Image from "next/image";

const campaignFacts = [
  { value: "Fast", label: "Pick-up-and-play rounds" },
  { value: "Tactical", label: "Timing that matters" },
  { value: "Chaotic", label: "Big table reactions" },
];

const gamePillars = [
  {
    number: "01",
    eyebrow: "Build your pack",
    title: "Recruit the dogs.",
    copy: "Play scrappy characters with distinct personalities and build a pack that can survive the table.",
    image: "Bulldog Card.svg",
  },
  {
    number: "02",
    eyebrow: "Protect the prize",
    title: "Claim Bone Cards.",
    copy: "Bone Cards drive the derby. Get them into your kennel—and keep every other player away.",
    image: "Bone Card.svg",
  },
  {
    number: "03",
    eyebrow: "Play dirty",
    title: "Ruin the lead.",
    copy: "Banana peels, alley ambushes, and perfectly timed sabotage can overturn a round in seconds.",
    image: "Banana Peel Card.svg",
  },
];

const cityScenes = [
  {
    tag: "The underworld",
    title: "Every alley has a bone economy.",
    copy: "Bulldogs guard the door, cards change paws, and the whole block knows when the derby is on.",
    image: "/doghouse-derby-city-bulldog-poster-v3.png",
  },
  {
    tag: "The high life",
    title: "Classy dogs. Dirty plays.",
    copy: "The prettiest hand in the room can still hide the meanest trick card.",
    image: "/doghouse-derby-city-poodle-poster-v3.png",
  },
  {
    tag: "The chase",
    title: "Loose cards. Fast paws.",
    copy: "One bad play sends the whole pack through butcher stalls and back streets.",
    image: "/doghouse-derby-city-chase-poster-v3.png",
  },
];

const cardLineup = [
  { file: "Beagle Card.svg", alt: "Beagle character card", label: "Beagle" },
  { file: "Bulldog Card.svg", alt: "Bulldog character card", label: "Bulldog" },
  { file: "Boxer Card.svg", alt: "Boxer character card", label: "Boxer" },
  { file: "Dachshund Card.svg", alt: "Dachshund character card", label: "Dachshund" },
  { file: "Chihuahua Card.svg", alt: "Chihuahua character card", label: "Chihuahua" },
  { file: "Cat Ambush Card.svg", alt: "Cat Ambush action card", label: "Cat Ambush" },
];

const gameplaySteps = [
  ["Deal", "Build your opening hand and size up the table."],
  ["Recruit", "Play a dog and strengthen your pack."],
  ["Sabotage", "Drop an action card at exactly the wrong moment."],
  ["Win", "Secure the Bone Cards before the pack turns on you."],
];

const boxContents = [
  {
    number: "I",
    title: "The complete core deck",
    copy: "A full table-ready game built around rival dogs, fast decisions, and spectacular reversals.",
  },
  {
    number: "II",
    title: "Dogs, bones & dirty tricks",
    copy: "Character cards, the prizes everyone is chasing, and enough sabotage to end old friendships.",
  },
  {
    number: "III",
    title: "A fast-start field guide",
    copy: "A concise rulebook designed to move the first round from box to table without the lecture.",
  },
  {
    number: "IV",
    title: "First-print presentation",
    copy: "A vintage-inspired package and early campaign extras created for the founding pack.",
  },
];

function assetPath(file: string) {
  return `/${file.replaceAll(" ", "%20")}`;
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2c.6 6.2 3.8 9.4 10 10-6.2.6-9.4 3.8-10 10-.6-6.2-3.8-9.4-10-10 6.2-.6 9.4-3.8 10-10Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="icon-dot" />
    </svg>
  );
}

function KickstarterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M9 7v10M9.5 12l5-5M9.5 12l5 5" />
    </svg>
  );
}

function CampaignCta({
  eyebrow,
  title,
  theme = "light",
}: {
  eyebrow: string;
  title: string;
  theme?: "light" | "dark";
}) {
  return (
    <aside className={`campaign-cta campaign-cta-${theme}`}>
      <div>
        <span>{eyebrow}</span>
        <strong>{title}</strong>
      </div>
      <a href="#reserve">Get the launch alert <ArrowIcon /></a>
    </aside>
  );
}

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <div className="announcement">
        <span>Campaign in development</span>
        <p>Follow the project and be first through the kennel doors.</p>
        <a href="#reserve">Join the launch list <ArrowIcon /></a>
      </div>

      <header className="hero" aria-labelledby="hero-title">
        <div className="hero-art" aria-hidden="true">
          <Image
            src="/doghouse-derby-city-poster-v3.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-grain" aria-hidden="true" />

        <nav className="topbar" aria-label="Campaign navigation">
          <a className="brand" href="#top" aria-label="Doghouse Derby home">
            <Image src="/doghouse-derby-logo-v2.png" alt="Doghouse Derby" width={150} height={100} priority />
          </a>
          <div className="nav-links">
            <a href="#world">The world</a>
            <a href="#gameplay">How to play</a>
            <a href="#cards">The deck</a>
          </div>
          <a className="nav-cta" href="#reserve">Notify me on launch <ArrowIcon /></a>
        </nav>

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-light"><SparkIcon /> An original card game</div>
            <h1 id="hero-title">
              <span>Run the</span>
              <em>streets.</em>
            </h1>
            <p className="hero-kicker">
              Build your pack. Chase the bones. Outsmart every dog in a
              fast-moving card game set in a lavish 1920s underworld.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#reserve">
                Notify me on launch <ArrowIcon />
              </a>
              <a className="text-link" href="#gameplay">Discover the game <ArrowIcon /></a>
            </div>
            <div className="hero-note">
              <span className="pulse" /> Coming soon to Kickstarter
            </div>
          </div>
        </div>

        <div className="fact-bar" aria-label="Game highlights">
          {campaignFacts.map((fact) => (
            <div key={fact.value}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
          <p>Slip. Steal. Sabotage. Win.</p>
        </div>
      </header>

      <section className="intro-section" id="world">
        <div className="section-kicker"><span>01</span> Welcome to the city</div>
        <div className="intro-grid">
          <h2>Good dogs.<br />Bad decisions.</h2>
          <div>
            <p className="lead-copy">
              Doghouse Derby drops you into a city of speakeasy scams, butcher-shop
              deals, and double-crossing dogs—all chasing the same precious bones.
            </p>
            <p>
              The rules stay approachable. The decisions get personal. Every hand
              builds toward the kind of reversal your table will talk about after the box closes.
            </p>
            <div className="intro-callout">
              <strong>One goal</strong>
              <span>Own the Bone Cards before the whole city turns on you.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="city-showcase" aria-label="The world of Doghouse Derby">
        <div className="city-stories">
          {cityScenes.map((scene, index) => (
            <article className={`world-story world-story-${index + 1}`} key={scene.title}>
              <div className="world-art">
                <Image src={scene.image} alt="" fill sizes="(max-width: 900px) 100vw, 68vw" />
              </div>
              <div className="world-copy">
                <span className="world-number">0{index + 1}</span>
                <p>{scene.tag}</p>
                <h3>{scene.title}</h3>
                <span className="world-description">{scene.copy}</span>
              </div>
            </article>
          ))}
        </div>
        <CampaignCta
          eyebrow="The city is warming up"
          title="Get the first campaign reveal before the whole pack arrives."
        />
      </section>

      <section className="gameplay-section" id="gameplay">
        <div className="gameplay-feature">
          <div className="gameplay-feature-art" aria-hidden="true">
            <Image
              src="/doghouse-derby-gameplay-poster-v3.png"
              alt=""
              fill
              sizes="100vw"
            />
          </div>
          <div className="gameplay-feature-copy">
            <div className="section-kicker"><span>02</span> How the derby runs</div>
            <p className="eyebrow"><SparkIcon /> Easy to enter. Hard to forget.</p>
            <h2>Read the table.<br />Wreck the plan.</h2>
            <p>
              Build a pack, protect your bones, and play the perfect dirty trick
              before another dog does it to you.
            </p>
            <a className="text-link" href="#cards">Meet the troublemakers <ArrowIcon /></a>
          </div>
        </div>

        <div className="round-rail">
          <div className="round-rail-intro">
            <span>One round</span>
            <strong>Quick to learn.<br />Sharp enough to sting.</strong>
          </div>
          <ol className="step-list">
            {gameplaySteps.map(([title, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{title}</strong><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mechanics-chapter">
          <div className="mechanics-heading">
            <div>
              <p className="eyebrow"><SparkIcon /> The tools of the trade</p>
              <h2>Three ways to<br />turn the table.</h2>
            </div>
            <p>
              Recruit muscle, collect the prize, then unleash exactly the wrong
              card at exactly the right time.
            </p>
          </div>

          <div className="pillar-grid">
            {gamePillars.map((pillar, index) => (
              <article className="pillar-card" key={pillar.title}>
                <div className="pillar-visual">
                  <span>{pillar.number}</span>
                  <Image src={assetPath(pillar.image)} alt="" width={260} height={390} loading={index === 0 ? "eager" : "lazy"} />
                </div>
                <div className="pillar-copy">
                  <p>{pillar.eyebrow}</p>
                  <h3>{pillar.title}</h3>
                  <span>{pillar.copy}</span>
                </div>
              </article>
            ))}
          </div>
          <CampaignCta
            eyebrow="Ready to join the derby?"
            title="Follow the project and be there when the kennel doors open."
            theme="dark"
          />
        </div>
      </section>

      <section className="deck-section" id="cards">
        <div className="deck-layout">
          <div className="deck-heading">
            <div className="section-kicker section-kicker-dark"><span>03</span> Meet the pack</div>
            <h2>Cards with<br />real character.</h2>
            <p>
              Every card is built like a tiny piece of the world: expressive,
              tactile, and full of vintage cartoon energy.
            </p>
            <span className="deck-note">A growing cast of dogs, trouble, and precious bones.</span>
          </div>
          <div className="card-stage">
            {cardLineup.map((card) => (
              <figure key={card.file}>
                <Image src={assetPath(card.file)} alt={card.alt} width={260} height={390} />
                <figcaption>{card.label}</figcaption>
              </figure>
            ))}
          </div>
          <CampaignCta
            eyebrow="More trouble is coming"
            title="See new characters, reveals, and campaign extras first."
          />
        </div>
        <p className="concept-note">Campaign preview artwork. Final components may evolve before production.</p>
      </section>

      <section className="edition-section" aria-labelledby="box-title">
        <div className="edition-art">
          <Image src="/doghouse-derby-founders-edition-chase-v5.png" alt="Three dogs racing through a lively 1920s city street with rivals in pursuit" fill sizes="(max-width: 900px) 100vw, 54vw" />
          <span>First-print campaign preview</span>
        </div>
        <div className="edition-copy">
          <p className="eyebrow"><SparkIcon /> The Founder&apos;s Edition</p>
          <h2 id="box-title">One box.<br />A city of trouble.</h2>
          <p className="edition-lead">
            A focused, table-ready experience with every component earning its
            place—and a first printing made for the founding pack.
          </p>
          <ol className="edition-list">
            {boxContents.map((item) => (
              <li key={item.number}>
                <span>{item.number}</span>
                <div><strong>{item.title}</strong><p>{item.copy}</p></div>
              </li>
            ))}
          </ol>
          <a className="edition-cta" href="#reserve">Get Founder&apos;s Edition updates <ArrowIcon /></a>
          <small>Final contents and campaign extras will be confirmed before launch.</small>
        </div>
      </section>

      <section className="reserve-section" id="reserve" aria-labelledby="reserve-title">
        <div className="reserve-card">
          <div className="reserve-copy">
            <p className="eyebrow eyebrow-light"><SparkIcon /> Kickstarter launch list</p>
            <h2 id="reserve-title">Be there when the gates open.</h2>
            <p>
              Get the launch announcement, first-look reveals, and details on the earliest campaign extras.
            </p>
          </div>
          <div className="reserve-form-card">
            <span>Invitation 001</span>
            <strong>Join the founding pack.</strong>
            <p>One useful email when the campaign goes live.</p>
            <form className="signup-form" action="mailto:hello@doghousederby.com" method="post" encType="text/plain">
              <label className="sr-only" htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="Enter your email address" required />
              <button type="submit">Notify me on launch <ArrowIcon /></button>
            </form>
            <small className="privacy-note">No spam. Unsubscribe anytime.</small>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">
          <Image src="/doghouse-derby-logo-v2.png" alt="Doghouse Derby — an original card game" width={180} height={120} />
        </a>
        <div className="footer-links">
          <a href="#world">The world</a>
          <a href="#gameplay">How to play</a>
          <a href="#cards">The deck</a>
        </div>
        <div className="footer-end">
          <div className="social-links" aria-label="Doghouse Derby social channels">
            <a
              className="social-link"
              href="https://www.kickstarter.com/projects/doghousederby/"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Doghouse Derby on Kickstarter"
            >
              <KickstarterIcon /> Kickstarter
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/doghousederby/"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Doghouse Derby on Instagram"
            >
              <InstagramIcon /> Instagram
            </a>
          </div>
          <p>© {new Date().getFullYear()} Doghouse Derby.<br />All dogs reserved.</p>
        </div>
      </footer>
    </main>
  );
}
