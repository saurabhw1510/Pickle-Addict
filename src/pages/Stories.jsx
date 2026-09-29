import { useState } from "react";
import { storyCategories } from "../data/flow";
import { EmptyState, PageHero } from "../components/Flow";
import { Button } from "../components/UI";

export default function Stories() {
  const [category, setCategory] = useState(storyCategories[0]);
  return (
    <>
      <PageHero
        eyebrow="PICKLE ADDICT / STORIES & UPDATES"
        lines={["OFF COURT.", "ON THE RECORD."]}
        description="Announcements, achievements, and the people moving our community forward."
      />
      <section className="wrap vault-section">
        <div className="filter-list" role="group" aria-label="Story categories">
          {storyCategories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div aria-live="polite">
          <EmptyState title={category}>
            Our first {category.toLowerCase()} updates will appear here. Check
            back for the latest from Pickle Addict.
          </EmptyState>
        </div>
        <Button to="/contact?interest=community" variant="text">
          Share Your Story
        </Button>
      </section>
    </>
  );
}
