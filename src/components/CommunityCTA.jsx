import { images, imageSources } from "../data/content";
import { Button, Reveal } from "./UI";

export default function CommunityCTA({ compact = false }) {
  return (
    <section className={`community-cta ${compact ? "compact" : ""}`}>
      <img
        src={images.group}
        srcSet={imageSources(images.group)}
        sizes="100vw"
        alt="Players celebrating together at a pickleball community event"
        loading="lazy"
      />
      <div className="cta-overlay" />
      <Reveal className="cta-content">
        <p className="eyebrow">LESS SCROLLING. MORE RALLYING.</p>
        <h2 className="display">
          {compact ? (
            <>
              READY
              <br />
              TO PLAY?
            </>
          ) : (
            <>
              YOUR NEXT GAME
              <br />
              STARTS HERE.
            </>
          )}
        </h2>
        <p>New friends. Fresh air. Your new favorite thing.</p>
        <Button to="/contact">
          {compact ? "Contact Us" : "Join the Community"}
        </Button>
      </Reveal>
      <span className="cta-corner" aria-hidden="true">
        SEE YOU ON COURT ↗
      </span>
    </section>
  );
}
