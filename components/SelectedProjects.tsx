"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    type: "AI PRODUCT · FULL-STACK",
    title: "TaskMosaic",
    copy: "AI-powered project management that breaks complex work into smart, actionable tasks.",
    tags: ["React", "PostgreSQL", "Gemini API", "AWS"],
    href: "https://github.com/Lareina-Y/TaskMosaic",
    imagePosition: "center",
    image: "/assets/projects/taskmosaic.png",
  },
  {
    n: "02",
    type: "AI PRODUCT · ML",
    title: "AI Art Detector",
    copy: "Detecting AI-generated art with interpretable models, deep CNNs, and visual explanations.",
    tags: ["Python", "Scikit-learn","CNN", "Streamlit"],
    href: "https://github.com/Lareina-Y/AI-Art-Detector",
    imagePosition: "60% center",
    image: "/assets/projects/ai-art-detector.png",
  },
  {
    n: "03",
    type: "Robotics · UX",
    title: "Tom’s Target",
    copy: "YOLO-powered target tracking for robotics and human-robot interaction systems.",
    tags: ["Python", "OpenCV", "ROS2", "HRI", "3D Printing"],
    href: "https://github.com/Lareina-Y/HRI-Tom-Target/blob/main/HRI_2025_Course_Group_6.pdf",
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
