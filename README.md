# Pickle Addict

Responsive static React + Vite website with Tailwind CSS and Motion. Four main navigation sections: Events, Coaching, Partners, and About. The logo links home; Contact remains a separate action.

- Events: `/events`, `/events/nights`, `/events/atp`, `/events/photos`.
- Coaching and Partners: `/coaching`, `/partners`.
- About: `/about`, `/about/stories`, `/about/vault`.
- Home and enquiries: `/`, `/contact`.

Legacy `/atp`, `/stories`, and `/vault` links redirect to their nested destinations, preserving query parameters and hashes. Event photos are scoped to event categories; the full archive remains available under About.

The mobile homepage focuses on the After Hours identity, community statistics, the next night, and four compact section links. Detailed introductions, feature grids, and repeated promotional content no longer extend the landing page. The homepage also uses a compact footer and CTA.

The site follows the Pickle Addict flow: community home, tournaments, ATP Service Points, coaching and Playmakers Academy, brands and partners, a filterable photo vault, founder journey, and stories. A shared Play / Compete / Train / Partner CTA appears on every page. Enquiry links preselect the appropriate contact subject; they do not create a booking or registration.

`src/data/flow.js` contains pathways, partner names, coaching programs, founder stages, gallery categories, and enquiry subjects. Event schedules, registration links, results, ATP details, founder biography, and stories await real content and display explicit empty states. Partner names use text until official logos are supplied. The two community statistics are supplied by the owner.

## Run

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

Deploy `dist/` to any static host. Configure an SPA fallback so `/about` and `/contact` serve `index.html` on direct requests. `public/_redirects` supplies this for Netlify-compatible hosting. For subdirectory hosting, configure Vite's `base` and BrowserRouter's `basename` together.

## Replace demo content

- `src/data/content.js`: centralized image paths, contact details, features, values, statistics, and timeline.
- `images/`: original photos. These existing local images are used as temporary site imagery; replace the configured imports to change them.
- `src/pages/`: page-specific editorial text.
- `src/styles.css`: design tokens and responsive styling.

Run `npm run images:optimize` after replacing source JPEGs to generate 640, 1280, and 1920px WebP copies in `public/images/`. The originals are preserved. Update the image mapping when filenames change. Responsive image sources let the browser choose the appropriate resolution.

Fonts are bundled locally. Non-hero images lazy-load. The contact form uses native validation and displays a local success state without sending or storing data. Contact details remain placeholders; community statistics and partner names come from the supplied brief. Social entries are labeled placeholders until real destinations are available.

Shared animation timing lives in `src/data/motion.js`: short staggered text entrances, 18px section reveals, and page fades use one easing curve. `src/refinements.css` adds consistent image and link hover treatments. Reduced-motion mode disables nonessential movement and delays and uses static counters. Navigation includes keyboard focus states, an Escape-dismissable mobile menu with focus wrapping, and a skip link.

## Quality checks

`npm test` runs browser checks using installed Google Chrome (or install it with `npx playwright install chrome`). Tests cover all routes at five viewport widths, image loading, overflow, mobile navigation, contact validation, reduced motion, and axe accessibility checks. `npm run format` formats the source.
