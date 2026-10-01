import { images, imageSources } from "../data/content";
import { coachingPrograms, progression } from "../data/flow";
import {
  AnimatedImage,
  Button,
  Reveal,
  SectionHeading,
} from "../components/UI";
import { PageHero } from "../components/Flow";

export default function Coaching() {
  return (
    <>
      <PageHero
        eyebrow="PICKLE ADDICT / COACHING"
        lines={["BUILD YOUR", "NEXT LEVEL."]}
        description="From your first rally to a more confident game. Find the right way to train."
      />
      <section className="wrap flow-columns coaching-intro">
        <Reveal>
          <AnimatedImage
            src={images.hero}
            srcSet={imageSources(images.hero)}
            sizes="(max-width: 767px) 100vw, 50vw"
            alt="Player focused on returning a pickleball shot"
          />
        </Reveal>
        <Reveal>
          <p className="eyebrow">100+ PLAYERS TRAINED</p>
          <h2 className="display">
            SMALL STEPS.
            <br />
            STRONGER GAME.
          </h2>
          <p>
            Explore Pickle Addict coaching and Playmakers Academy. Tell us your
            experience and goals, and enquire about a session that fits.
          </p>
          <Button to="/contact?interest=coaching">Book a Session</Button>
          <p className="demo-note">
            Session times, locations, and pricing to be confirmed.
          </p>
        </Reveal>
      </section>
      <section className="wrap section-space">
        <SectionHeading eyebrow="FIND YOUR WAY TO TRAIN">
          COACHING FOR YOUR GAME.
        </SectionHeading>
        <div className="program-grid">
          {coachingPrograms.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.05}>
              <article className="feature-card">
                <span className="eyebrow">0{index + 1} / TRAIN</span>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <Button to="/contact?interest=coaching" variant="text">
                  Enquire About Sessions
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="features-section section-space">
        <div className="wrap">
          <SectionHeading eyebrow="PLAYER PROGRESSION">
            LEARN. BUILD. PLAY.
          </SectionHeading>
          <div className="progression-grid">
            {progression.map(([title, text], index) => (
              <Reveal key={title}>
                <span className="eyebrow">STEP 0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
