import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/content";
import { Ball, Button } from "./UI";

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Pickle Addict home">
      <Ball />
      <span>
        pickle addict
        <small>WHERE PLAY MEETS COMMUNITY</small>
      </span>
    </Link>
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef(null);
  const menu = useRef(null);
  const location = useLocation();
  const reduced = useReducedMotion();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu.current?.querySelector("a")?.focus();
    const keyboard = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const links = [...menu.current.querySelectorAll("a")];
        const first = toggle.current;
        const last = links.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const resize = () => {
      if (window.innerWidth >= 1200) setOpen(false);
    };
    window.addEventListener("keydown", keyboard);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", keyboard);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((link) => (
            <NavLink key={link.to} to={link.to} end>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Button to="/contact" className="nav-cta">
          Contact
        </Button>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            ref={menu}
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: reduced ? 0 : -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
          >
            {navigation.map((link, index) => (
              <NavLink to={link.to} key={link.to} end>
                <span>0{index + 1}</span>
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact">Contact</Button>
            <p>Good games. Great people.</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
