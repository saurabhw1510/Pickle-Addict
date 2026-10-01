import { Button, Reveal, SectionHeading } from "../components/UI";
import { EmptyState, PageHero } from "../components/Flow";

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="PICKLE ADDICT / EVENTS"
        lines={["BRING YOUR", "GAME."]}
        description="The tournaments, the rallies, the moments that stay with you."
      />
      <nav className="section-nav wrap" aria-label="Event sections">
        <a href="#upcoming">Upcoming</a>
        <a href="#past">Past tournaments</a>
        <a href="#results">Results & champions</a>
        <a href="#galleries">Galleries</a>
      </nav>
      <section className="wrap event-categories" aria-label="Event categories">
        <Reveal>
          <article className="feature-card">
            <p className="eyebrow">AFTER HOURS / COMMUNITY</p>
            <h2>PickleAddict Nights</h2>
            <p>Our after-hours home for good games and great company.</p>
            <Button to="/events/nights" variant="text">
              Explore the Nights
            </Button>
          </article>
        </Reveal>
        <Reveal delay={0.07}>
          <article className="feature-card">
            <p className="eyebrow">ADDICTED TO PICKLEBALL</p>
            <h2>ATP Events</h2>
            <p>Service Points, past editions, champions, and highlights.</p>
            <Button to="/events/atp" variant="text">
              Explore ATP Events
            </Button>
          </article>
        </Reveal>
      </section>
      <section id="upcoming" className="wrap section-space">
        <SectionHeading eyebrow="NEXT ON COURT">
          UPCOMING TOURNAMENTS.
        </SectionHeading>
        <EmptyState
          title="The next tournament is on its way."
          to="/contact?interest=events"
          action="Tournament Enquiry"
        >
          Dates, venue, categories, and registration will appear here once
          announced. Registration is not open yet.
        </EmptyState>
      </section>
      <section id="past" className="features-section section-space">
        <div className="wrap">
          <SectionHeading eyebrow="THE GAMES THAT BROUGHT US HERE">
            PAST TOURNAMENTS.
          </SectionHeading>
          <EmptyState title="The tournament archive is coming together.">
            Past event recaps and edition details will be added here.
          </EmptyState>
        </div>
      </section>
      <section id="results" className="wrap section-space">
        <SectionHeading eyebrow="EARNED ON COURT">
          RESULTS & CHAMPIONS.
        </SectionHeading>
        <EmptyState title="Every result deserves its moment.">
          Verified results, categories, and champions will be published with
          each tournament.
        </EmptyState>
      </section>
      <section id="galleries" className="wrap flow-panel">
        <Reveal>
          <p className="eyebrow">BEYOND THE SCOREBOARD</p>
          <h2 className="display">RELIVE THE RALLY.</h2>
          <p>Explore the photos already in our collection.</p>
          <Button to="/events/photos?category=Tournament%20photos">
            View Event Photos
          </Button>
        </Reveal>
      </section>
    </>
  );
}
