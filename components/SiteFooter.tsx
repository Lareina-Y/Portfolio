import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  ContactRound,
  GitFork,
  Mail,
} from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="page-shell footer-shell">
        <div className="footer-kicker">
          <span>04 — CONTACT</span>
          <span>AVAILABLE FOR NEW OPPORTUNITIES</span>
        </div>

        <div className="footer-main">
          <div>
            <p>HAVE A PROJECT OR AN IDEA?</p>
            <h2>
              LET&apos;S BUILD
              <br />
              <span>SOMETHING THOUGHTFUL.</span>
            </h2>
          </div>
          <a className="footer-contact" href="mailto:shiwen.y@outlook.com">
            <span>START A CONVERSATION</span>
            <Mail aria-hidden="true" />
          </a>
        </div>

        <div className="footer-links">
          <a href="mailto:shiwen.y@outlook.com">
            <Mail aria-hidden="true" />
            shiwen.y@outlook.com
          </a>
          <a
            href="https://linkedin.com/in/shiwen-lareina-yang"
            target="_blank"
            rel="noreferrer"
          >
            <ContactRound aria-hidden="true" />
            LinkedIn
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Lareina-Y"
            target="_blank"
            rel="noreferrer"
          >
            <GitFork aria-hidden="true" />
            GitHub
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-meta">
        <div className="page-shell footer-bottom">
          <span>@ {new Date().getFullYear()} LAREINA YANG</span>
          <span>DESIGNED &amp; BUILT WITH CODEX</span>
          <Link href="#home">
            BACK TO TOP <ArrowUp aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
