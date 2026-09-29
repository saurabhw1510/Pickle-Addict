import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { stats } from "../data/content";

function Counter({ item }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!visible || reduced) return;
    const controls = animate(0, item.value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (current) => setValue(Math.round(current)),
    });
    return () => controls.stop();
  }, [visible, reduced, item.value]);
  return (
    <div ref={ref} className="stat">
      <span className="display" aria-hidden="true">
        {reduced ? item.value : value}
        <span>{item.suffix}</span>
      </span>
      <span className="sr-only">
        {item.value}
        {item.suffix}
      </span>
      <p>{item.label}</p>
    </div>
  );
}
export default function Stats() {
  return (
    <section className="stats wrap" aria-label="Our community in numbers">
      {stats.map((item) => (
        <Counter item={item} key={item.label} />
      ))}
    </section>
  );
}
