import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Navbar";
import { brand, navigation } from "../data/content";
import { Reveal } from "./UI";

export default function Footer() {
  return (
    <footer className="footer">
      <Reveal className="footer-top">
        <div>
          <Logo />
          <p>
            A little competition.
            <br />A whole lot of connection.
          </p>
        </div>
        <div>
          <span className="eyebrow">EXPLORE</span>
          {navigation.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <span className="eyebrow">SAY HELLO</span>
          <Link to="/contact">Contact Us</Link>
          <a href={`mailto:${brand.email}`}>
            {brand.email}
            <ArrowUpRight size={14} />
          </a>
          <span>{brand.address}</span>
        </div>
        <div>
          <span className="eyebrow">FOLLOW THE RALLY</span>
          <span className="social-placeholder">
            Instagram ↗ <small>Coming soon</small>
          </span>
          <span className="social-placeholder">
            Facebook ↗ <small>Coming soon</small>
          </span>
        </div>
      </Reveal>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Pickle Addict. All rights reserved.
        </span>
        <span>
          MADE FOR THE LOVE OF THE GAME <span className="lime">↗</span>
        </span>
      </div>
    </footer>
  );
}
