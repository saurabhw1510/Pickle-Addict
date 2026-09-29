import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Zap, Users, Target, Heart } from "lucide-react";

export function Ball({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="21" fill="currentColor" />
      <g fill="var(--ink)">
        <ellipse cx="24" cy="12" rx="3" ry="4" />
        <ellipse cx="24" cy="36" rx="3" ry="4" />
        <ellipse cx="12" cy="24" rx="4" ry="3" />
        <ellipse cx="36" cy="24" rx="4" ry="3" />
        <circle cx="24" cy="24" r="3.5" />
        <circle cx="14" cy="14" r="2.5" />
        <circle cx="34" cy="34" r="2.5" />
        <circle cx="14" cy="34" r="2.5" />
        <circle cx="34" cy="14" r="2.5" />
      </g>
    </svg>
  );
}
export function Button({
  children,
  to,
  href,
  variant = "lime",
  className = "",
  ...props
}) {
  const Component = to ? Link : href ? "a" : "button";
  return (
    <Component
      to={to}
      href={href}
      className={`button button-${variant} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </Component>
  );
}
export function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduced ? 0 : 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
export function AnimatedText({ lines, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <h1 className={`display ${className}`}>
      {lines.map((line, index) => (
        <span className="text-line" key={line}>
          <motion.span
            initial={{ y: reduced ? 0 : "105%" }}
            animate={{ y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.75,
              delay: index * 0.11,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
export function SectionHeading({ eyebrow, children, text }) {
  return (
    <Reveal className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h2 className="display">{children}</h2>
      </div>
      {text && <p className="section-description">{text}</p>}
    </Reveal>
  );
}
const icons = { zap: Zap, users: Users, target: Target, heart: Heart };
export function FeatureCard({ item, index }) {
  const Icon = icons[item.icon];
  return (
    <Reveal delay={index * 0.07}>
      <article className="feature-card">
        <div className="flex items-center justify-between">
          <Icon size={29} strokeWidth={1.5} aria-hidden="true" />
          <span className="card-number">0{index + 1}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        {item.label && (
          <span className="card-label">
            {item.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        )}
      </article>
    </Reveal>
  );
}
