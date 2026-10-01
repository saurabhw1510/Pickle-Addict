import { images, imageSources } from "../data/content";
import { founderJourney } from "../data/flow";
import {
  AnimatedImage,
  Button,
  Reveal,
  SectionHeading,
} from "../components/UI";
import { PageHero } from "../components/Flow";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="PICKLE ADDICT / ABOUT & FOUNDER"
        lines={["MORE THAN", "A GAME."]}
        description="Player. Coach. Community builder. Tournament organizer. Entrepreneur. A journey connected by pickleball."
      />
      <Reveal className="about-banner wrap">
        <AnimatedImage
          src={images.group}
          srcSet={imageSources(images.group)}
          sizes="100vw"
          alt="The Pickle Addict community at an event"
        />
      </Reveal>
      <section className="wrap section-space">
        <SectionHeading eyebrow="THE FOUNDER’S JOURNEY">
          ONE PASSION.
          <br />
          MANY CHAPTERS.
        </SectionHeading>
        <ol className="founder-journey">
          {founderJourney.map((stage, index) => (
            <li key={stage}>
              <span>0{index + 1}</span>
              <h3>{stage}</h3>
            </li>
          ))}
        </ol>
      </section>
      <section className="features-section section-space">
        <div className="wrap flow-columns">
          <Reveal>
            <p className="eyebrow">THE PERSON BEHIND THE PASSION</p>
            <h2 className="display">THE PICKLEADDICT MASTER.</h2>
            <p>
              From playing the game to coaching others, building a community,
              organizing tournaments, and becoming an entrepreneur.
            </p>
            <p className="editorial-note">
              The founder’s name, personal story, and milestones will be added
              here.
            </p>
          </Reveal>
          <Reveal>
            <p className="eyebrow">THE COMMUNITY BEHIND THE NAME</p>
            <h2 className="display">THE PICKLE ADDICT STORY.</h2>
            <p>
              Where pickleball meets community. Pickle Addict brings together
              opportunities to play, compete, train, and partner.
            </p>
            <p>
              With a community of 500+ and 100+ players trained, the story is
              about both the game and the people around it.
            </p>
            <p className="editorial-note">
              The full origin story and key milestones are coming soon.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="wrap section-space">
        <SectionHeading eyebrow="THE PEOPLE BEHIND THE GAME">
          OUR COMMUNITY, IN FOCUS.
        </SectionHeading>
        <div className="flow-columns">
          <Reveal>
            <article className="feature-card">
              <h3>Stories & testimonials</h3>
              <p>
                Player journeys, community stories, and voices from the court.
                First-hand testimonials will be added when available.
              </p>
              <Button to="/about/stories" variant="text">
                Community Stories
              </Button>
            </article>
          </Reveal>
          <Reveal delay={0.07}>
            <article className="feature-card">
              <h3>The Vault</h3>
              <p>
                Familiar faces, behind-the-scenes moments, and memories worth
                keeping.
              </p>
              <Button to="/about/vault" variant="text">
                Open the Vault
              </Button>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
