"use client";

import { Box, Microscope, Rocket, Users } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    period: "JAN — MAY 2025",
    company: "Livinit",
    role: "Co-Founder & Software Developer",
    text: "Co-founded an AI-powered interior design platform, leading end-to-end development from product validation to MVP using SwiftUI, Firebase, RoomPlan, and LLM-powered recommendations.",
    tags: ["SwiftUI", "AI Integration", "Xcode", "Firebase", "Startup", "MVP"],
    icon: Rocket,
  },
  {
    period: "SEP 2022 — DEC 2023",
    company: "ReelData AI",
    role: "Software Developer",
    text: "Shipped end-to-end Biomass camera product features across React, GraphQL, Spring Boot, and PostgreSQL, improving reliability and the daily workflows of aquaculture teams.",
    tags: ["React", "Java", "GraphQL", "Spring Boot", "PostgreSQL"],
    icon: Box,
  },
  {
    period: "JAN — APR 2022",
    company: "Collab · Dear Life",
    role: "Full-stack Developer",
    text: "Built product experiences across frontend authentication and cloud infrastructure in a cross-functional development team.",
    tags: ["Flutter", "Aurora MySQL", "AWS", "Product Design"],
    icon: Users,
  },
  {
    period: "MAY — AUG 2021",
    company: "PINet Lab",
    role: "Research Assistant",
    text: "Studied software change requests and built tools for graph-based concept location and query reformulation research.",
    tags: ["Java", "Python", "Research", "Text Graphs"],
    icon: Microscope,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section experience">
      <div className="page-shell section-body">
        <div className="experience-heading">
          <div>
            <p className="eyebrow">02 — EXPERIENCE</p>
            <h2>
              <span>A JOURNEY THROUGH</span>
              <br />
              PRODUCT &amp; RESEARCH
            </h2>
            <p className="experience-script">Experience</p>
            <p>
              Two years of hands-on experience across product engineering,
              collaborative development, and software research.
            </p>
          </div>
          <div className="cloud-window" />
        </div>
        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="timeline-row"
              key={item.company}
            >
              <time>{item.period}</time>
              <span className="timeline-dot" />
              <div className="experience-role">
                <span>0{index + 1}</span>
                <h3>{item.company}</h3>
                <b>{item.role}</b>
              </div>
              <p>{item.text}</p>
              <div className="experience-skills">
                <item.icon />
                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="experience-total">
          2+ &nbsp; YEARS OF EXPERIENCE 
          {/* · INTERNSHIPS INCLUDED */}
        </p>
      </div>
    </section>
  );
}
