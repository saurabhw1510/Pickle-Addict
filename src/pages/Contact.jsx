import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { interests } from "../data/flow";
import { motion, useReducedMotion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Check, ArrowUpRight } from "lucide-react";
import { brand } from "../data/content";
import { AnimatedText, Ball, Button, Reveal } from "../components/UI";

export default function Contact() {
  const [params] = useSearchParams();
  const selectedSubject = interests[params.get("interest")] || "";
  const [submitted, setSubmitted] = useState(false);
  const success = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (submitted) success.current?.focus();
  }, [submitted]);
  const details = [
    {
      icon: Mail,
      label: "DROP US A LINE",
      value: brand.email,
      href: `mailto:${brand.email}`,
    },
    {
      icon: Phone,
      label: "GIVE US A CALL",
      value: brand.phone,
      href: "tel:+15550102025",
    },
    { icon: MapPin, label: "FIND OUR COURTS", value: brand.address },
    { icon: Clock, label: "TIME TO PLAY", value: brand.hours },
  ];
  return (
    <>
      <section className="page-hero contact-hero wrap">
        <p className="eyebrow">
          <span />
          YOUR NEXT RALLY STARTS WITH HELLO.
        </p>
        <AnimatedText lines={["LET’S GET", "ON COURT."]} />
        <p>
          A first game? A group session? Just curious?
          <br />
          We’d love to hear from you.
        </p>
        <Ball className="about-ball" />
      </section>
      <section className="contact-section wrap">
        <Reveal className="contact-info">
          <h2 className="display">
            LET’S TALK
            <br />
            PICKLEBALL.
          </h2>
          <p>
            There’s always room for another player.
            <br />
            Reach out and we’ll help you find your game.
          </p>
          <div className="contact-details">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div key={label}>
                <Icon size={22} aria-hidden="true" />
                <div>
                  <span className="eyebrow">{label}</span>
                  {href ? (
                    <a href={href}>
                      {value}
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <span className="demo-note">
            Demo club · Contact details are placeholders.
          </span>
        </Reveal>
        <Reveal className="form-panel">
          {submitted ? (
            <motion.div
              ref={success}
              tabIndex={-1}
              role="status"
              className="success-state"
              initial={{ opacity: 0, scale: reduced ? 1 : 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="success-icon">
                <Check size={36} />
              </span>
              <p className="eyebrow">LOOKING GOOD!</p>
              <h2 className="display">
                YOU’RE GAME.
                <br />
                SO ARE WE.
              </h2>
              <p>
                Your demo message is complete. This preview doesn’t send or
                store messages.
              </p>
              <Button onClick={() => setSubmitted(false)}>
                Write Another Message
              </Button>
            </motion.div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="form-heading">
                <h2>Say hello.</h2>
                <span>WE’RE ALL EARS ↗</span>
              </div>
              <div className="form-grid">
                <label htmlFor="name">
                  Your name <span>*</span>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Alex Morgan"
                    required
                    maxLength={100}
                    pattern=".*\S.*"
                  />
                </label>
                <label htmlFor="email">
                  Email address <span>*</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="alex@example.com"
                    required
                    maxLength={254}
                  />
                </label>
                <label htmlFor="phone">
                  Phone <span className="optional">(optional)</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Your phone number"
                    pattern="[+()0-9 .\-]{7,25}"
                    maxLength={25}
                  />
                </label>
                <label htmlFor="subject">
                  What’s on your mind? <span>*</span>
                  <select
                    key={selectedSubject}
                    id="subject"
                    name="subject"
                    required
                    defaultValue={selectedSubject}
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option>My first game</option>
                    <option>Joining the community</option>
                    <option>Group sessions</option>
                    <option>Book a coaching session</option>
                    <option>Partnership enquiry</option>
                    <option>Tournament enquiry</option>
                    <option>ATP enquiry</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label htmlFor="message" className="full-width">
                  Your message <span>*</span>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a little about what you’re looking for…"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={3000}
                    onChange={(event) =>
                      event.target.setCustomValidity(
                        event.target.value.trim().length < 10
                          ? "Please write at least 10 non-space characters."
                          : "",
                      )
                    }
                  />
                </label>
              </div>
              <Button type="submit" variant="dark">
                Send Message
              </Button>
              <p className="form-note">
                Just a friendly hello. This demo form won’t send your details.
              </p>
            </form>
          )}
        </Reveal>
      </section>
      <section className="map-section wrap">
        <div
          className="map-placeholder"
          role="img"
          aria-label="Illustrated placeholder map for the fictional club location"
        >
          <div className="map-park park-one" />
          <div className="map-park park-two" />
          <div className="map-road road-one" />
          <div className="map-road road-two" />
          <div className="map-road road-three" />
          <div className="map-pin">
            <Ball />
            <span>MEET YOU HERE.</span>
          </div>
          <span className="map-label">COURT DISTRICT</span>
          <span className="map-disclaimer">
            ILLUSTRATIVE MAP · DEMO LOCATION
          </span>
        </div>
        <div className="map-caption">
          <div>
            <p className="eyebrow">YOUR NEW FAVORITE SPOT</p>
            <h2>Good things happen on court.</h2>
          </div>
          <p>
            {brand.address}
            <br />
            {brand.hours}
          </p>
        </div>
      </section>
    </>
  );
}
