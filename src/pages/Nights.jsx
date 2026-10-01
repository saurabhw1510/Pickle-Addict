import { images, imageSources } from "../data/content";
import {
  AnimatedImage,
  Button,
  Reveal,
  SectionHeading,
} from "../components/UI";
import { PageHero, EmptyState } from "../components/Flow";

export default function Nights() {
  return (
    <>
      <PageHero
        eyebrow="EVENTS / PICKLEADDICT NIGHTS"
        lines={["AFTER HOURS.", "TOGETHER."]}
        description="Floodlit courts, friendly competition, and the people who make one more game impossible to resist."
      />
      <Reveal className="about-banner wrap">
        <AnimatedImage
          src={images.group}
          srcSet={imageSources(images.group)}
          sizes="100vw"
          alt="Players celebrating at PickleAddict Night"
        />
      </Reveal>
      <section className="wrap section-space">
        <SectionHeading eyebrow="YOUR NEXT NIGHT ON COURT">
          PICKLEADDICT NIGHTS.
        </SectionHeading>
        <EmptyState
          title="Next edition to be announced."
          to="/contact?interest=events"
          action="Ask About the Next Night"
        >
          Date, venue, format, and registration details will be shared here once
          confirmed.
        </EmptyState>
      </section>
      <section className="wrap section-space night-memories">
        <SectionHeading eyebrow="PAST MOMENTS">
          THE PEOPLE. THE NIGHTS.
        </SectionHeading>
        <Reveal className="flow-columns">
          <AnimatedImage
            src={images.community}
            srcSet={imageSources(images.community)}
            sizes="(max-width: 767px) 100vw, 50vw"
            alt="Players celebrating with medals at a community event"
            loading="lazy"
          />
          <div>
            <h3>More than the final score.</h3>
            <p>
              Explore moments from our event collection. Edition recaps and
              confirmed results will be added as the archive grows.
            </p>
            <Button to="/events/photos">Explore Event Photos</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
