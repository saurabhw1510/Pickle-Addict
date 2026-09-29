import { useSearchParams } from "react-router-dom";
import { gallery, galleryCategories } from "../data/flow";
import { imageSources } from "../data/content";
import { Reveal } from "../components/UI";
import { EmptyState, PageHero } from "../components/Flow";

export default function Vault() {
  const [params, setParams] = useSearchParams();
  const requested = params.get("category");
  const category = galleryCategories.includes(requested) ? requested : "All";
  const photos = gallery.filter(
    (photo) => category === "All" || photo.category === category,
  );
  return (
    <>
      <PageHero
        eyebrow="PICKLE ADDICT / THE VAULT"
        lines={["THE GAME.", "THE MOMENTS."]}
        description="Tournament energy. Familiar faces. Everything that makes this our community."
      />
      <section className="wrap vault-section">
        <div className="filter-list" role="group" aria-label="Filter photos">
          {galleryCategories.map((item) => (
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
        {photos.length ? (
          <div className="gallery-grid">
            {photos.map((photo) => (
              <Reveal key={photo.image}>
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
              </Reveal>
            ))}
          </div>
        ) : (
          <EmptyState title={`${category} are coming soon.`}>
            New photos will appear here when the collection is ready. Explore
            another category in the meantime.
          </EmptyState>
        )}
      </section>
    </>
  );
}
