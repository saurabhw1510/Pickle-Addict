import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Button } from "./components/UI";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import ATP from "./pages/ATP";
import Coaching from "./pages/Coaching";
import Partners from "./pages/Partners";
import Vault from "./pages/Vault";
import Stories from "./pages/Stories";
import { BottomCTA, SectionNavigation } from "./components/Flow";
import Nights from "./pages/Nights";
import { motionTiming } from "./data/motion";
import ScrollProgress from "./components/ScrollProgress";

function LegacyRedirect({ to }) {
  const location = useLocation();
  return <Navigate to={`${to}${location.search}${location.hash}`} replace />;
}

function InSection({ section, children }) {
  return (
    <>
      <SectionNavigation section={section} />
      {children}
    </>
  );
}

export default function App() {
  const location = useLocation();
  const reduced = useReducedMotion();
  useEffect(() => {
    const titles = {
      "/": "Find your game",
      "/about": "Our story",
      "/contact": "Let’s get on court",
      "/events": "Events & tournaments",
      "/events/atp": "ATP — Addicted To Pickleball",
      "/events/nights": "PickleAddict Nights",
      "/events/photos": "Event photos",
      "/coaching": "Coaching & Playmakers Academy",
      "/partners": "Brands & partners",
      "/about/vault": "The Vault",
      "/about/stories": "Stories & updates",
    };
    document.title = `${titles[location.pathname] || "Page not found"} — Pickle Addict`;
    if (!location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <ScrollProgress />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main"
          key={location.pathname}
          tabIndex={-1}
          initial={{ opacity: reduced ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: reduced ? 1 : 0 }}
          transition={{
            duration: reduced ? 0 : motionTiming.page,
            ease: motionTiming.ease,
          }}
          onAnimationComplete={() => {
            if (location.pathname !== "/")
              document.querySelector("#main")?.focus({ preventScroll: true });
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <InSection section="about">
                  <About />
                </InSection>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/events"
              element={
                <InSection section="events">
                  <Events />
                </InSection>
              }
            />
            <Route
              path="/events/nights"
              element={
                <InSection section="events">
                  <Nights />
                </InSection>
              }
            />
            <Route
              path="/events/atp"
              element={
                <InSection section="events">
                  <ATP />
                </InSection>
              }
            />
            <Route
              path="/events/photos"
              element={
                <InSection section="events">
                  <Vault scope="events" />
                </InSection>
              }
            />
            <Route path="/atp" element={<LegacyRedirect to="/events/atp" />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/partners" element={<Partners />} />
            <Route
              path="/about/vault"
              element={
                <InSection section="about">
                  <Vault />
                </InSection>
              }
            />
            <Route
              path="/about/stories"
              element={
                <InSection section="about">
                  <Stories />
                </InSection>
              }
            />
            <Route
              path="/vault"
              element={<LegacyRedirect to="/about/vault" />}
            />
            <Route
              path="/stories"
              element={<LegacyRedirect to="/about/stories" />}
            />
            <Route
              path="*"
              element={
                <section className="page-hero wrap">
                  <p className="eyebrow">OUT OF BOUNDS / 404</p>
                  <h1 className="display">
                    LET’S GET YOU
                    <br />
                    BACK IN PLAY.
                  </h1>
                  <Button to="/">Back Home</Button>
                </section>
              }
            />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <BottomCTA />
      <Footer />
    </>
  );
}
