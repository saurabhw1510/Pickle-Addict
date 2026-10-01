import { NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { AnimatedText, Ball, Button, Reveal, StaggerLink } from "./UI";
import { bottomActions } from "../data/flow";

export function PageHero({ eyebrow, lines, description }) {
  return (
    <section className="page-hero wrap flow-hero">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <AnimatedText lines={lines} />
      <Reveal className="page-description">
        <p>{description}</p>
      </Reveal>
      <Ball className="about-ball" />
    </section>
  );
}
export function EmptyState({ title, children, to, action }) {
  return (
    <Reveal className="empty-state">
      <span className="eyebrow">WATCH THIS SPACE</span>
      <h3>{title}</h3>
      <p>{children}</p>
      {to && (
        <Button to={to} variant="text">
          {action}
        </Button>
      )}
    </Reveal>
  );
}
export function BottomCTA() {
  const { pathname } = useLocation();
  return (
    <section
      className={`bottom-cta ${pathname === "/" ? "home-bottom-cta" : ""}`}
    >
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">ONE COMMUNITY. YOUR WAY IN.</p>
          <h2 className="display">STAY ADDICTED.</h2>
          <nav className="action-links" aria-label="Get involved">
            {bottomActions.map((item, index) => (
              <StaggerLink key={item.label} to={item.to} index={index}>
                {item.label}
                <ArrowUpRight aria-hidden="true" />
              </StaggerLink>
            ))}
          </nav>
        </Reveal>
      </div>
    </section>
  );
}

const sectionLinks = {
  events: [
    { to: "/events", label: "All events" },
    { to: "/events/nights", label: "PickleAddict Nights" },
    { to: "/events/atp", label: "ATP Events" },
    { to: "/events/photos", label: "Event photos" },
  ],
  about: [
    { to: "/about", label: "Our story" },
    { to: "/about/stories", label: "Community stories" },
    { to: "/about/vault", label: "The Vault" },
  ],
};

export function SectionNavigation({ section }) {
  return (
    <nav
      className="section-nav wrap hub-navigation"
      aria-label={`${section === "events" ? "Events" : "About"} navigation`}
    >
      {sectionLinks[section].map((link) => (
        <NavLink key={link.to} to={link.to} end>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
