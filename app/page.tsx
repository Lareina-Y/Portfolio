"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, ArrowUpRight, BrainCircuit, Braces, Mail, Network, Phone } from "lucide-react";

const projects = [
  {
    index: "01",
    title: "TaskMosaic",
    subtitle: "AI project orchestration",
    description: "A full-stack workspace that turns project context and team strengths into fair, actionable task plans — then keeps execution moving in real time.",
    stack: ["Next.js", "Postgres", "Gemini API", "AWS"],
    href: "https://github.com/Lareina-Y/TaskMosaic",
    className: "project-violet",
  },
  {
    index: "02",
    title: "AI Art Detector",
    subtitle: "Interpretable machine learning",
    description: "A visual forensics system distinguishing human-made Ukiyo-e from Stable Diffusion work, pairing a 99.8% interpretable model with a 98.3% CNN.",
    stack: ["Python", "Scikit-learn", "CNN", "Streamlit"],
    href: "https://github.com/Lareina-Y/AI-Art-Detector",
    className: "project-cyan",
  },
  {
    index: "03",
    title: "STRICT++",
    subtitle: "Software engineering research",
    description: "A novel graph-based query reformulation method evaluated across 946 change requests from 22 systems to improve concept location accuracy.",
    stack: ["Java", "Python", "Text Graphs", "Research"],
    href: "https://github.com/Lareina-Y/STRICT-QR-Module",
    className: "project-amber",
  },
];

const strengths = [
  { icon: Braces, title: "Full-stack craft", text: "I move fluently from typed React interfaces to API design, data modeling and production infrastructure." },
  { icon: BrainCircuit, title: "Applied intelligence", text: "I turn ML and generative AI into understandable product experiences, not isolated technical demos." },
  { icon: Network, title: "Systems thinking", text: "Research and product work taught me to reason across users, architecture, performance and delivery." },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function LinkButton({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <a className={`pill-button ${light ? "pill-light" : ""}`} href={href}>{children}<ArrowUpRight size={16} /></a>;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, .25], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, .2], [1, .25]);

  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#top"><span>SY</span> LAREINA YANG</a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#work">Work</a><a href="#strengths">Expertise</a>
        </div>
        <a className="nav-contact" href="mailto:shiwen.y@outlook.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </nav>

      <section id="top" className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=80">
          <source src="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-noise" />
        <motion.div className="hero-content" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="eyebrow"><span className="status-dot" /> Available for software engineering roles <span>2026</span></div>
          <h1>Engineering<br /><em>ideas</em> into impact.</h1>
          <div className="hero-bottom">
            <p>Software engineer crafting thoughtful products at the intersection of <strong>full-stack systems, AI, and human experience.</strong></p>
            <a href="#about" className="scroll-cue"><span>Explore</span><ArrowDownRight /></a>
          </div>
        </motion.div>
        <div className="hero-index">40.71° N<br />74.00° W</div>
      </section>

      <section id="about" className="section about-section">
        <Reveal className="section-kicker"><span>01</span> Profile</Reveal>
        <div className="about-grid">
          <Reveal className="portrait-wrap"><div className="portrait-monogram">S<span>Y</span></div><div className="portrait-caption">NEW YORK · HALIFAX<br />SOFTWARE ENGINEER</div></Reveal>
          <Reveal className="about-copy">
            <p className="lead">I build software that feels <em>clear, capable,</em> and considered.</p>
            <div className="about-columns">
              <p>With an M.Eng. in Computer Science from Cornell Tech and an Honours BCS from Dalhousie, I bring research depth and product pragmatism to complex problems.</p>
              <p>At ReelData AI, I shipped end-to-end features across React, GraphQL and Spring Boot — from database schema to responsive interface — while improving reliability and performance.</p>
            </div>
            <div className="contact-row"><a href="mailto:shiwen.y@outlook.com"><Mail size={16}/> shiwen.y@outlook.com</a><a href="tel:+19022106108"><Phone size={16}/> +1 902 210 6108</a></div>
          </Reveal>
        </div>
        <div className="metrics">
          <div><strong>3.8</strong><span>Cornell GPA / 4.0</span></div>
          <div><strong>3+</strong><span>Years in industry & research</span></div>
          <div><strong>18</strong><span>Public projects</span></div>
          <div><strong>946</strong><span>Change requests studied</span></div>
        </div>
      </section>

      <section id="work" className="section work-section">
        <Reveal className="work-heading"><div className="section-kicker"><span>02</span> Selected work</div><h2>Proof, not<br />promises.</h2><p>Selected work spanning intelligent products, machine learning and software engineering research.</p></Reveal>
        <div className="project-list">
          {projects.map((project) => <Reveal key={project.title}>
            <a className={`project-card ${project.className}`} href={project.href} target="_blank" rel="noreferrer">
              <div className="project-top"><span>{project.index} / FEATURED</span><ArrowUpRight /></div>
              <div className="project-visual"><div className="visual-orbit"/><div className="visual-code">{project.index}</div><div className="visual-grid"/></div>
              <div className="project-content"><p>{project.subtitle}</p><h3>{project.title}</h3><div className="project-details"><p>{project.description}</p><div className="tags">{project.stack.map(t => <span key={t}>{t}</span>)}</div></div></div>
            </a>
          </Reveal>)}
        </div>
      </section>

      <section id="strengths" className="section strength-section">
        <Reveal className="section-kicker"><span>03</span> What I bring</Reveal>
        <Reveal><h2>Technical range.<br /><em>Product judgment.</em></h2></Reveal>
        <div className="strength-grid">{strengths.map((s, i) => <Reveal key={s.title} className="strength-card"><span>0{i + 1}</span><s.icon/><h3>{s.title}</h3><p>{s.text}</p></Reveal>)}</div>
        <div className="ticker"><div>REACT · NEXT.JS · TYPESCRIPT · PYTHON · JAVA · POSTGRESQL · AWS · DOCKER · GRAPHQL · </div></div>
      </section>

      <footer id="contact" className="contact-section">
        <div className="contact-glow" />
        <Reveal className="contact-inner">
          <div className="section-kicker"><span>04</span> Start a conversation</div>
          <h2>Have a hard problem?<br /><em>Let&apos;s make it simple.</em></h2>
          <div className="contact-actions"><LinkButton href="mailto:shiwen.y@outlook.com" light>Get in touch</LinkButton><a href="https://linkedin.com/in/shiwen-lareina-yang" target="_blank" rel="noreferrer">in LinkedIn</a><a href="https://github.com/Lareina-Y" target="_blank" rel="noreferrer">gh GitHub</a></div>
        </Reveal>
        <div className="footer-line"><span>© 2026 SHIWEN (LAREINA) YANG</span><span>DESIGNED & BUILT WITH INTENTION</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
