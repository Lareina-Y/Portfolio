"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    type: "AI PRODUCT · FULL-STACK",
    title: "TaskMosaic",
    copy: "AI-powered project management that breaks complex work into smart, actionable tasks. Plan smarter. Build faster. Ship together.",
    tags: ["Next.js", "PostgreSQL", "Gemini", "AWS"],
    href: "https://github.com/Lareina-Y/TaskMosaic",
    imagePosition: "center",
    image: "/assets/projects/taskmosaic.png",
  },
  {
    n: "02",
    type: "AI PRODUCT · FULL-STACK",
    title: "AI Art Detector",
    copy: "Detecting AI-generated art with interpretable models, deep CNNs, and visual explanations.",
    tags: ["Python", "CNN", "Streamlit", "AWS"],
    href: "https://github.com/Lareina-Y/AI-Art-Detector",
    imagePosition: "60% center",
    image: "/assets/projects/ai-art-detector.png",
  },
  {
    n: "03",
    type: "AI PROJECT · COMPUTER VISION",
    title: "Tom’s Target",
    copy: "YOLO-powered target tracking for robotics and human-robot interaction systems.",
    tags: ["YOLOv8", "Python", "OpenCV", "PyTorch"],
    href: "https://github.com/Lareina-Y",
    imagePosition: "right center",
    image: "/assets/projects/toms-target.png",
  },
];

export function SelectedProjects() {
  return (
    <div className="page-shell selected">
      <h2>SELECTED PROJECTS</h2>
      <span>HOVER TO EXPLORE</span>
      <div className="project-rail">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-copy">
              <small>
                {project.n} · {project.type}
              </small>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href={project.href} target="_blank" rel="noreferrer">
                VIEW PROJECT <ArrowUpRight />
              </a>
            </div>
            <Image
              unoptimized
              src={project.image}
              alt={`${project.title} project preview`}
              width={1600}
              height={1000}
              style={{ objectPosition: project.imagePosition }}
            />
          </article>
        ))}
      </div>
      <Link className="more-projects" href="/projects">
        MORE PROJECTS <ArrowUpRight />
      </Link>
    </div>
  );
}
