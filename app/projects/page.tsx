"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Sparkle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const filters = ["ALL", "AI & PRODUCTS", "SOFTWARE SYSTEMS", "ROBOTICS & XR", "RESEARCH"] as const;
type Filter = (typeof filters)[number];

const projects = [
  { name: "TaskMosaic", category: "AI & Products", filter: "AI & PRODUCTS", year: "2025", focus: "AI task planning", image: "/assets/taskmosaic.png", description: "Turns complex goals into clear, adaptive task plans with AI-assisted prioritization.", tags: ["React", "AI", "Product"], metric: "40%", metricLabel: "faster planning", href: "https://github.com/Lareina-Y/TaskMosaic" },
  { name: "AI Art Detector", category: "AI & ML", filter: "AI & PRODUCTS", year: "2025", focus: "Interpretable classification", image: "/assets/projects/ai-art-detector.png", description: "Distinguishes AI-generated art from human-made pieces using deep CNNs and interpretable visualizations.", tags: ["Python", "CNN", "Streamlit"], metric: "98.3%", metricLabel: "CNN accuracy", href: "https://github.com/Lareina-Y/AI-Art-Detector" },
  { name: "Tom’s Target", category: "Robotics", filter: "ROBOTICS & XR", year: "2024", focus: "Human-robot interaction", image: "/assets/projects/toms-target.png", description: "Explores intuitive target selection and shared control for mobile human-robot collaboration.", tags: ["Robotics", "ROS", "HRI"], metric: "3×", metricLabel: "faster targeting", href: "https://github.com/Lareina-Y/HRI-Tom-Target" },
  { name: "Ticket Viewer", category: "Software Systems", filter: "SOFTWARE SYSTEMS", year: "2026", focus: "GIS conflict analysis", image: "/assets/projects/ticket-viewer.png", description: "Maps infrastructure tickets and exposes spatial conflicts before they become field delays.", tags: ["GIS", "React", "Node.js"], metric: "1 view", metricLabel: "for every conflict", href: "https://github.com/Lareina-Y/Ticket-Viewer" },
  { name: "Livinit", category: "AI Product / iOS", filter: "AI & PRODUCTS", year: "2025", focus: "3D room recommendations", image: "/assets/projects/livinit.png", description: "Creates personalized 3D room recommendations from a space, style, and everyday needs.", tags: ["SwiftUI", "3D", "AI"], metric: "360°", metricLabel: "room preview", href: "https://github.com/Lareina-Y/Livinit" },
  { name: "STRICT++", category: "Research", filter: "RESEARCH", year: "2024", focus: "946 change requests", image: "/assets/projects/strict-plus-plus.png", description: "Studies change-request patterns to make large-scale software evolution easier to understand.", tags: ["Research", "NLP", "Mining"], metric: "946", metricLabel: "requests analyzed", href: "https://github.com/Lareina-Y/STRICT-QR-Module" },
  { name: "BlueTiSCH", category: "Research / Networks", filter: "RESEARCH", year: "2022", focus: "IEEE GLOBECOM", image: "/assets/projects/bluetisch.png", description: "Improves time-slotted channel hopping for reliable, efficient industrial wireless networks.", tags: ["Networks", "IoT", "TSCH"], metric: "IEEE", metricLabel: "GLOBECOM", href: "https://github.com/Lareina-Y/tsch-project" },
  { name: "Mini Gravity Sketch", category: "Robotics & XR", filter: "ROBOTICS & XR", year: "2024", focus: "Immersive 3D creation", image: "/assets/projects/mini-gravity-sketch.png", description: "A lightweight spatial drawing experience for creating and manipulating forms directly in 3D.", tags: ["XR", "Unity", "3D"], metric: "6DoF", metricLabel: "spatial creation", href: "https://github.com/Lareina-Y/Mini-Gravity-Sketch" },
] satisfies Array<{ name: string; category: string; filter: Exclude<Filter, "ALL">; year: string; focus: string; image: string; description: string; tags: string[]; metric: string; metricLabel: string; href: string }>;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL");
  const [activeProjectName, setActiveProjectName] = useState("AI Art Detector");
  const visibleProjects = activeFilter === "ALL" ? projects : projects.filter((project) => project.filter === activeFilter);
  const activeProject = projects.find((project) => project.name === activeProjectName) ?? visibleProjects[0];

  function selectFilter(filter: Filter) {
    const filtered = filter === "ALL" ? projects : projects.filter((project) => project.filter === filter);
    setActiveFilter(filter);
    setActiveProjectName(filtered[0].name);
  }

  return (
    <main id="home" className="archive">
      <SiteHeader currentPage="projects" />
      <div className="page-shell archive-body">
        <p className="eyebrow">PROJECT ARCHIVE / 08</p>
        <div className="archive-title">
          <h1><span>ALL</span> PROJECTS</h1>
          <p>An evolving archive of software, research, and interactive systems.</p>
        </div>
        <div className={`archive-panel${activeFilter === "ALL" ? "" : " filtered"}`}>
          <div className="filters" aria-label="Filter projects by category">
            {filters.map((filter) => (
              <button className={activeFilter === filter ? "active" : undefined} key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => selectFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>
          <div className="projects-layout">
            <div className="projects-table" aria-live="polite">
              <div className="table-head"><span>PROJECT</span><span>CATEGORY</span><span>YEAR</span><span>FOCUS</span></div>
              {visibleProjects.map((project) => {
                const isActive = activeProject.name === project.name;
                return (
                  <motion.article
                    layout
                    className={isActive ? "highlight" : undefined}
                    key={project.name}
                    aria-label={`Show details for ${project.name}`}
                    onMouseEnter={() => setActiveProjectName(project.name)}
                    onFocus={() => setActiveProjectName(project.name)}
                    onClick={() => setActiveProjectName(project.name)}
                  >
                    <Link className="project-row-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} project`} onFocus={() => setActiveProjectName(project.name)} />
                    <Image unoptimized src={project.image} alt={`${project.name} project preview`} width={160} height={100} />
                    <b>{project.name}</b><span>{project.category}</span><span>{project.year}</span><span>{project.focus}</span><ArrowUpRight />
                  </motion.article>
                );
              })}
            </div>
            <motion.aside className="project-detail-card" key={activeProject.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} aria-label={`${activeProject.name} details`}>
              <Image unoptimized src={activeProject.image} alt={`${activeProject.name} detail preview`} width={640} height={360} />
              <h2>{activeProject.name}</h2>
              <p>{activeProject.description}</p>
              <div className="detail-tags">{activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="detail-metric"><strong>{activeProject.metric}</strong><span>{activeProject.metricLabel}</span></div>
              <a className="detail-link" href={activeProject.href} target="_blank" rel="noreferrer">VIEW PROJECT <ArrowUpRight /></a>
            </motion.aside>
          </div>
          <div className="archive-more" aria-label="More projects will be added over time">
            <Sparkle aria-hidden="true" />
            <span>MORE PROJECTS AND CATEGORIES WILL BE ADDED OVER TIME</span>
            <Sparkle aria-hidden="true" />
          </div>
        </div>
        <Link className="back-home" href="/"><ArrowLeft /> BACK TO HOME</Link>
      </div>
      <SiteFooter />
    </main>
  );
}
