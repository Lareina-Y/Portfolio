"use client";

import {
  ArrowDownRight,
  Braces,
  GraduationCap,
  Network,
  Sparkles,
  Users,
} from "lucide-react";

const strengths = [
  {
    n: "01",
    title: "END-TO-END\nENGINEERING",
    tags: ["UI → API", "DATABASE → CLOUD", "IDEA → DELIVERY"],
    icon: Braces,
    large: true,
  },
  {
    n: "02",
    title: "APPLIED\nINTELLIGENCE",
    tags: ["MACHINE LEARNING", "AI AGENTS", "LLM APPLICATIONS"],
    icon: Sparkles,
    large: true,
    featured: true,
  },
  {
    n: "03",
    title: "SYSTEMS\nTHINKING",
    tags: ["ARCHITECTURE", "SCALABILITY", "RELIABILITY"],
    icon: Network,
  },
  {
    n: "04",
    title: "RESEARCH\nDEPTH",
    tags: ["RESEARCH", "QUICK LEARNING", "VALIDATION"],
    icon: GraduationCap,
  },
  {
    n: "05",
    title: "CROSS-FUNCTIONAL\nDELIVERY",
    tags: ["COLLABORATION", "COMMUNICATION", "OWNERSHIP"],
    icon: Users,
  },
];

export function StrengthsSection() {
  return (
    <section id="strengths" className="section strengths">
      <div className="page-shell section-body">
        <p className="eyebrow">03 — STRENGTHS</p>
        <h2>
          CORE <span>STRENGTHS</span> <ArrowDownRight />
        </h2>
        <p className="subtle">What I bring</p>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article
              className={`strength-card ${item.large ? "large" : ""} ${item.featured ? "featured" : ""}`}
              key={item.n}
            >
              <div>
                <span className="num">{item.n}</span>
                <small>{item.large ? "CORE" : "SYSTEM"}</small>
              </div>
              <h3>
                {item.title.split("\n").map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
                <i>•</i>
              </h3>
              <div className="strength-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <item.icon />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
