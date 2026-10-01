import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { motionTiming } from "../data/motion";
import { gallery, galleryCategories } from "../data/flow";
import { imageSources } from "../data/content";
import { EmptyState, PageHero } from "../components/Flow";

export default function Vault({ scope = "community" }) {
  const reduced = useReducedMotion();
  const [params, setParams] = useSearchParams();
  const requested = params.get("category");
  const categories =
    scope === "events"
      ? ["All", "Tournament photos", "ATP moments"]
      : galleryCategories;
  const category = categories.includes(requested) ? requested : "All";
  const photos = gallery.filter(
    (photo) =>
      (scope !== "events" || categories.includes(photo.category)) &&
      (category === "All" || photo.category === category),
  );
  return (
    <>
      <PageHero
        eyebrow={
          scope === "events"
            ? "EVENTS / PHOTOS & MEMORIES"
            : "ABOUT / THE VAULT"
        }
        lines={["THE GAME.", "THE MOMENTS."]}
        description="Tournament energy. Familiar faces. Everything that makes this our community."
      />
      <section className="wrap vault-section">
        <div className="filter-list" role="group" aria-label="Filter photos">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              onClick={() =>
                setParams(item === "All" ? {} : { category: item }, {
                  replace: true,
                  preventScrollReset: true,
                })
              }
            >
              {item}
            </button>
          ))}
        </div>
        <p className="gallery-count" role="status">
          {photos.length} {photos.length === 1 ? "photo" : "photos"} ·{" "}
          {category}
        </p>
        <div className="gallery-grid">
          <AnimatePresence initial={false}>
            {photos.map((photo, index) => (
              <motion.div
                key={photo.image}
                layout={reduced ? false : "position"}
                initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
                transition={{
                  duration: reduced ? 0 : motionTiming.reveal,
                  ease: motionTiming.ease,
                  delay: reduced ? 0 : index * motionTiming.stagger,
                }}
              >
                <figure>
                  <a
                    href={photo.image.replace("-1280.webp", "-1920.webp")}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open photo: ${photo.title} (new tab)`}
                  >
                    <img
                      src={photo.image}
                      srcSet={imageSources(photo.image)}
                      sizes="(max-width: 767px) 100vw, 50vw"
                      alt={photo.alt}
                      loading="lazy"
                    />
                  </a>
                  <figcaption>
                    <span className="eyebrow">{photo.category}</span>
                    <h2>{photo.title}</h2>
                  </figcaption>
                </figure>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {!photos.length && (
          <EmptyState title={`${category} are coming soon.`}>
            New photos will appear here when the collection is ready. Explore
            another category in the meantime.
          </EmptyState>
        )}
      </section>
    </>
  );
}
