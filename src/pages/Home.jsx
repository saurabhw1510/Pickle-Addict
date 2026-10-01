import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { images, imageSources, navigation } from "../data/content";
import { motionTiming } from "../data/motion";
import {
  AnimatedText,
  AnimatedImage,
  Button,
  Reveal,
  StaggerLink,
} from "../components/UI";
import Stats from "../components/Stats";

export default function Home() {
  const reduced = useReducedMotion();
  return (
    <div className="home-landing">
      <section className="hero after-hours-hero">
        <div className="hero-photo">
          <motion.img
            src={images.hero}
            srcSet={imageSources(images.hero)}
            sizes="100vw"
            alt="Pickleball under the lights at a community night"
            fetchPriority="high"
            initial={{ scale: reduced ? 1 : 1.04 }}
            animate={{ scale: 1 }}
            transition={{
              duration: reduced ? 0 : 0.8,
              ease: motionTiming.ease,
            }}
          />
        </div>
        <div className="hero-shade" />
        <div className="hero-content wrap">
          <p className="eyebrow">
            <span />
            PICKLEADDICT / AFTER HOURS
          </p>
          <AnimatedText lines={["AFTER HOURS.", "ON COURT."]} />
          <Reveal delay={0.14}>
            <p className="hero-description">
              Where pickleball meets community.
              <br />
              Good games. New faces. One more rally.
            </p>
            <div className="hero-buttons">
              <Button to="/events/nights">Explore the Nights</Button>
              <Button to="/coaching" variant="outline">
                Find Your Training
              </Button>
            </div>
          </Reveal>
          <Stats />
        </div>
        <span className="night-caption">LIGHTS ON. GAME ON.</span>
      </section>
      <section className="wrap home-next">
        <Reveal className="next-event">
          <Link
            to="/events/nights"
            className="next-event-photo"
            aria-label="Explore PickleAddict Nights"
          >
            <AnimatedImage
              src={images.group}
              srcSet={imageSources(images.group)}
              sizes="(max-width: 767px) 35vw, 40vw"
              alt="PickleAddict Nights players celebrating together"
              loading="lazy"
            />
          </Link>
          <div>
            <p className="eyebrow">NEXT UP / PICKLEADDICT NIGHTS</p>
            <h2 className="display">YOUR NEXT NIGHT OUT.</h2>
            <p>Next date coming soon. Bring your game. Find your people.</p>
            <Button to="/events/nights" variant="text">
              Event Details
            </Button>
          </div>
        </Reveal>
      </section>
      <section className="wrap home-explore" aria-labelledby="explore-heading">
        <Reveal>
          <div className="home-section-label">
            <h2 id="explore-heading">Find your way in.</h2>
            <span>ON & OFF COURT</span>
          </div>
          <div className="home-section-links">
            {navigation.map((item, index) => (
              <StaggerLink key={item.to} to={item.to} index={index}>
                <span className="link-index">0{index + 1}</span>
                <span>{item.label}</span>
                <ArrowUpRight aria-hidden="true" />
              </StaggerLink>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
