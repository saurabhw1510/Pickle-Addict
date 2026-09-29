import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { AnimatedText, Ball, Button, Reveal } from "./UI";
import { bottomActions } from "../data/flow";

export function PageHero({ eyebrow, lines, description }) {
  return (
    <section className="page-hero wrap flow-hero">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <AnimatedText lines={lines} />
      <p>{description}</p>
      <Ball className="about-ball" />
    </section>
  );
}
export function EmptyState({ title, children, to, action }) {
  return (
    <div className="empty-state">
      <span className="eyebrow">WATCH THIS SPACE</span>
      <h3>{title}</h3>
      <p>{children}</p>
      {to && (
        <Button to={to} variant="text">
          {action}
        </Button>
      )}
    </div>
  );
}
export function BottomCTA() {
  return (
    <section className="bottom-cta">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">ONE COMMUNITY. YOUR WAY IN.</p>
          <h2 className="display">STAY ADDICTED.</h2>
          <nav className="action-links" aria-label="Get involved">
            {bottomActions.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
