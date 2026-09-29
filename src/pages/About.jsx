import { images, imageSources } from "../data/content";
import { founderJourney } from "../data/flow";
import { Reveal, SectionHeading } from "../components/UI";
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
        <img
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
            <h2 className="display">THE FOUNDER’S STORY.</h2>
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
    </>
  );
}
