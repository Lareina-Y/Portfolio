"use client";

import { motion } from "motion/react";
import { Braces, GraduationCap, Sparkles, UserRound } from "lucide-react";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SelectedProjects } from "@/components/SelectedProjects";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactSection, SiteFooter } from "@/components/SiteFooter";
import { SocialLinks } from "@/components/SocialLinks";
import { StrengthsSection } from "@/components/StrengthsSection";

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section id="home" className="hero">
        <div className="page-shell hero-copy">
          <motion.div
            className="hero-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              <span>LAREINA YANG</span>
              <br />
              PORTFOLIO
            </h1>
            <span
              className="hero-signature"
              role="img"
              aria-label="Lareina Yang signature"
            />
          </motion.div>
          <p>
            Building thoughtful products through
            <br />
            full-stack engineering and applied AI.
          </p>
          <div className="hero-stats">
            <div>
              <b>2+</b>
              <span>
                YEARS OF EXPERIENCE
                <br />· INTERNSHIPS INCLUDED
              </span>
            </div>
            <div>
              <b>18</b>
              <span>PUBLIC PROJECTS</span>
            </div>
            <div>
              <b>3.8</b>
              <span>CORNELL GPA</span>
            </div>
          </div>
        </div>
        <SelectedProjects />
      </section>

      <section id="about" className="section about">
        <div className="page-shell section-body">
          <Reveal>
            <p className="eyebrow">01 — ABOUT</p>
            <h2>
              <span>ABOUT</span>
              <br />
              LAREINA
            </h2>
            <h3>Hi, I&apos;m Lareina Yang.</h3>
            <p className="body-copy">
              I build clear, reliable products at the intersection of full-stack
              engineering, applied AI, and human experience. With an M.Eng. in
              Computer Science from Cornell Tech and an Honours BCS from
              Dalhousie University, I bring research depth and product
              pragmatism to complex problems.
            </p>
          </Reveal>
          <div className="about-bottom">
            <div className="facts">
              <div>
                <Braces />
                <span>
                  <small>FOCUS</small>Full-stack + Applied AI
                </span>
              </div>
              <div>
                <GraduationCap />
                <span>
                  <small>EDUCATION</small>Cornell Tech · M.Eng. CS
                </span>
              </div>
              <div>
                <Sparkles />
                <span>
                  <small>FOUNDATION</small>Dalhousie · Honours BCS
                </span>
              </div>
              <div>
                <UserRound />
                <span>
                  <small>STATUS</small>Open to opportunities
                </span>
              </div>
            </div>
            <div className="metrics">
              <b>
                2+<small>YEARS OF EXPERIENCE</small>
              </b>
              <b>
                18<small>PUBLIC PROJECTS</small>
              </b>
              <b>
                946<small>CHANGE REQUESTS STUDIED</small>
              </b>
            </div>
            <SocialLinks />
          </div>
        </div>
      </section>

      <ExperienceSection />
      <StrengthsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
