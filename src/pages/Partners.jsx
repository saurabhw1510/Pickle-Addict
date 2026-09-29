import { partners } from "../data/flow";
import { Button, Reveal, SectionHeading } from "../components/UI";
import { PageHero } from "../components/Flow";

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="PICKLE ADDICT / BRANDS & PARTNERS"
        lines={["GROW THE", "GAME."]}
        description="Bringing brands, sport, and community onto the same court."
      />
      <section className="wrap partners-section">
        <SectionHeading eyebrow="BRANDS & PARTNERS">
          BETTER, TOGETHER.
        </SectionHeading>
        <div className="partner-grid">
          {partners.map((partner, index) => (
            <Reveal key={partner} delay={index * 0.05}>
              <div className="partner-wordmark">{partner}</div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mission">
        <div className="wrap">
          <p className="eyebrow">LET’S BUILD SOMETHING THAT MATTERS</p>
          <h2 className="display">
            YOUR BRAND.
            <br />
            OUR COMMUNITY.
          </h2>
          <p>
            Explore event collaborations, community initiatives, and
            opportunities to support player development.
          </p>
          <Button to="/contact?interest=partner" variant="dark">
            Partner With Pickle Addict
          </Button>
        </div>
      </section>
    </>
  );
}
