import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { images, imageSources, features } from "../data/content";
import { pathways } from "../data/flow";
import {
  AnimatedText,
  Ball,
  Button,
  FeatureCard,
  Reveal,
  SectionHeading,
} from "../components/UI";
import Stats from "../components/Stats";

export default function Home() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 900], [0, 90]);
  return (
    <>
      <section className="hero">
        <div className="hero-photo">
          <motion.img
            src={images.hero}
            srcSet={imageSources(images.hero)}
            sizes="100vw"
            alt="Pickleball player returning a shot on a floodlit court"
            fetchPriority="high"
            style={{ y: reduced ? 0 : imageY }}
            initial={{ scale: reduced ? 1 : 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4 }}
          />
        </div>
        <div className="hero-shade" />
        <div className="hero-content wrap">
          <p className="eyebrow">
            <span />
            THE COURT IS CALLING.
          </p>
          <AnimatedText
            className="community-headline"
            lines={["WHERE PICKLEBALL", "MEETS", "COMMUNITY."]}
          />
          <Reveal delay={0.35}>
            <p className="hero-description">
              A little friendly competition. A whole lot of good times.
              <br className="hidden sm:block" /> Find your people. Find your
              game.
            </p>
            <div className="hero-buttons">
              <Button to="/events">Explore Events</Button>
              <Button to="/coaching" variant="outline">
                Find Your Training
              </Button>
            </div>
          </Reveal>
          <div className="hero-social">
            <div className="avatar-stack">
              {[images.community, images.group, images.about].map(
                (image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    style={{ objectPosition: `${25 + index * 20}% center` }}
                  />
                ),
              )}
            </div>
            <p>
              <strong>Good people. Great games.</strong>
              <span>One growing community.</span>
            </p>
          </div>
        </div>
        <div className="hero-sticker" aria-hidden="true">
          <span>LESS SCREEN TIME</span>
          <Ball />
          <span>MORE COURT TIME</span>
        </div>
        <a href="#intro" className="hero-scroll">
          <ArrowDown size={15} /> SCROLL TO EXPLORE
        </a>
        <span className="hero-coordinate">PICKLE ADDICT / ALWAYS IN PLAY</span>
      </section>
      <div className="rally-strip" aria-hidden="true">
        {[
          "PLAY YOUR WAY",
          "FIND YOUR PEOPLE",
          "LOVE THE GAME",
          "ONE MORE RALLY",
        ].map((text) => (
          <span key={text}>
            {text}
            <Ball />
          </span>
        ))}
      </div>
      <section className="wrap latest-update">
        <div>
          <p className="eyebrow">NEXT ON COURT / UPCOMING EVENT</p>
          <h2>Something to look forward to.</h2>
          <p>
            Our next tournament announcement is coming soon. Dates and
            registration details will be shared here.
          </p>
        </div>
        <Button to="/events" variant="dark">
          Explore Upcoming Events
        </Button>
      </section>
      <Stats />
      <section className="wrap pathway-section">
        <SectionHeading eyebrow="FIND YOUR WAY IN">
          YOUR GAME. YOUR COMMUNITY.
        </SectionHeading>
        <div className="pathway-grid">
          {pathways.map((item) => (
            <Reveal key={item.label}>
              <article className="feature-card">
                <h3>{item.label}</h3>
                <p>{item.text}</p>
                <Button to={item.to} variant="text">
                  {item.label}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="intro" className="intro wrap section-space">
        <Reveal className="intro-image">
          <img
            src={images.community}
            srcSet={imageSources(images.community)}
            sizes="(max-width: 767px) 100vw, 50vw"
            alt="Pickleball medalists sharing a moment after their games"
            loading="lazy"
          />
          <div className="image-caption">
            <span>ON THE COURT. IN YOUR ELEMENT.</span>
            <ArrowUpRight size={20} />
          </div>
          <div className="image-stamp">
            <Ball />
            <span>
              ALL SKILL LEVELS.
              <br />
              ALL GOOD VIBES.
            </span>
          </div>
        </Reveal>
        <Reveal className="intro-copy">
          <p className="eyebrow">
            <span />
            SMALL COURT. BIG ENERGY.
          </p>
          <h2 className="display">
            YOUR NEW
            <br />
            HAPPY PLACE<span className="green">.</span>
          </h2>
          <p>
            Pickleball is fast, social, and ridiculously fun. Whether you’re
            stepping onto the court for the first time or chasing your next win,
            there’s always another game to play.
          </p>
          <p>
            No egos. No sidelines. Just grab a paddle and get in on something
            good.
          </p>
          <Button to="/about" variant="text">
            Get to Know Us
          </Button>
        </Reveal>
      </section>
      <section className="features-section section-space">
        <div className="wrap">
          <SectionHeading
            eyebrow="THE GOOD KIND OF ADDICTIVE"
            text="A sport that brings more to your day. More movement, more connection, more reasons to come back."
          >
            ONE GAME.
            <br />
            SO MANY REASONS.
          </SectionHeading>
          <div className="feature-grid">
            {features.map((item, index) => (
              <FeatureCard item={item} index={index} key={item.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
