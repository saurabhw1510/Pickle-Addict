import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import { BottomCTA } from "./components/Flow";

export default function App() {
  const location = useLocation();
  const reduced = useReducedMotion();
  useEffect(() => {
    const titles = {
      "/": "Find your game",
      "/about": "Our story",
      "/contact": "Let’s get on court",
      "/events": "Events & tournaments",
      "/atp": "ATP — Addicted To Pickleball",
      "/coaching": "Coaching & Playmakers Academy",
      "/partners": "Brands & partners",
      "/vault": "The Vault",
      "/stories": "Stories & updates",
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
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main"
          key={location.pathname}
          tabIndex={-1}
          initial={{ opacity: reduced ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: reduced ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : 0.18 }}
          onAnimationComplete={() => {
            if (location.pathname !== "/")
              document.querySelector("#main")?.focus({ preventScroll: true });
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/atp" element={<ATP />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/stories" element={<Stories />} />
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
