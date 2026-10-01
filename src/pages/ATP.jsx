import { Button, SectionHeading } from "../components/UI";
import { EmptyState, PageHero } from "../components/Flow";

export default function ATP() {
  return (
    <>
      <PageHero
        eyebrow="ATP / ADDICTED TO PICKLEBALL"
        lines={["ADDICTED TO", "PICKLEBALL."]}
        description="A dedicated home for ATP: the concept, the Service Points, and the moments between."
      />
      <section className="mission">
        <div className="wrap">
          <p className="eyebrow">THE ATP CONCEPT</p>
          <h2 className="display">
            ONE SHARED
            <br />
            ADDICTION.
          </h2>
          <p>
            ATP stands for Addicted To Pickleball. Follow upcoming Service
            Points, revisit past editions, and discover the players behind the
            results. Full format details will be shared with the first
            announcement.
          </p>
        </div>
      </section>
      <section className="wrap section-space">
        <SectionHeading eyebrow="NEXT UP">
          UPCOMING SERVICE POINTS.
        </SectionHeading>
        <EmptyState
          title="Your next Service Point: to be announced."
          to="/contact?interest=atp"
          action="Ask About ATP"
        >
          The schedule, locations, format, and entry details will be published
          here.
        </EmptyState>
      </section>
      <section className="features-section section-space">
        <div className="wrap flow-columns">
          <div>
            <h2 className="display">PAST EDITIONS.</h2>
            <EmptyState title="The ATP archive is on its way.">
              Edition recaps will live here as they become available.
            </EmptyState>
          </div>
          <div>
            <h2 className="display">CHAMPIONS & RESULTS.</h2>
            <EmptyState title="A place for every achievement.">
              Confirmed ATP results and champions will be added by edition.
            </EmptyState>
          </div>
        </div>
      </section>
      <section className="wrap section-space">
        <SectionHeading eyebrow="ATP, IN THE MOMENT">
          PHOTOS & VIDEOS.
        </SectionHeading>
        <EmptyState title="ATP highlights are coming soon.">
          Photo albums and video highlights will be added once available.
        </EmptyState>
        <Button to="/events/photos?category=ATP%20moments" variant="text">
          Explore ATP Moments
        </Button>
      </section>
    </>
  );
}
