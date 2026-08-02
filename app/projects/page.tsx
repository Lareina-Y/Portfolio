"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Sparkle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const filters = [
  "ALL",
  "AI & PRODUCTS",
  "SOFTWARE SYSTEMS",
  "ROBOTICS & XR",
  "RESEARCH",
] as const;
type Filter = (typeof filters)[number];

const projects = [
  {
    name: "GIS Ticket Viewer",
    category: "Software Systems",
    filter: "SOFTWARE SYSTEMS",
    year: "2026",
    focus: "Geospatial Utility Platform",
    image: "/assets/projects/ticket-viewer.png",
    description:
      "Full-stack geospatial platform for utility ticket visualization and spatial analysis. Maps infrastructure tickets and exposes spatial conflicts before they become field delays.",
    tags: ["PostGIS", "React", "Node.js", "NestJS", "Leaflet", "REST API"],
    metric: "Real-time",
    metricLabel: "Spatial Queries",
    href: "https://github.com/Lareina-Y/Ticket-Viewer",
  },
  {
    name: "TaskMosaic",
    category: "AI & Products",
    filter: "AI & PRODUCTS",
    year: "2025",
    focus: "AI task planning",
    image: "/assets/projects/taskmosaic.png",
    description:
      "Turns complex goals into clear, adaptive task plans with AI-assisted prioritization.",
    tags: ["React", "Next.js", "PostgreSQL", "Gemini API", "AWS"],
    metric: "40%",
    metricLabel: "faster planning",
    href: "https://github.com/Lareina-Y/TaskMosaic",
  },
  {
    name: "Livinit",
    category: "AI Product / iOS",
    filter: "AI & PRODUCTS",
    year: "2025",
    focus: "AI Product Development Startup",
    image: "/assets/projects/livinit.png",
    description:
      "AI-powered interior design assistant using LLMs and 3D room scanning. Implemented MVP; Waitlisted 30 designers & 6 manufacturers; secured 2 affiliate approvals.",
    tags: ["SwiftUI", "3D", "AI Integration", "Xcode", "Firebase", "Market Research"],
    metric: "120+",
    metricLabel: "Beta Users",
    href: "https://www.youtube.com/shorts/7sQmijroHrA",
  },
  {
    name: "AI Art Detector",
    category: "AI & ML",
    filter: "AI & PRODUCTS",
    year: "2025",
    focus: "ML to solve classification problems",
    image: "/assets/projects/ai-art-detector.png",
    description:
      "Detect AI-generated artwork using traditional ML and CNN models.",
    tags: ["Python", "Scikit-learn","CNN", "Streamlit", "AWS"],
    metric: "98.3%",
    metricLabel: "CNN Accuracy",
    href: "https://github.com/Lareina-Y/AI-Art-Detector",
  },
  {
    name: "Tom’s Target",
    category: "Robotics",
    filter: "ROBOTICS & XR",
    year: "2024",
    focus: "Human-robot interaction",
    image: "/assets/projects/toms-target.png",
    description:
      "Explores intuitive target selection and shared control for mobile human-robot collaboration.",
    tags: ["Python", "OpenCV", "ROS2", "YOLO", "HRI", "3D printing"],
    metric: "High",
    metricLabel: "interactivity (4.7/7) and low negative perception (1.75/7)",
    href: "https://github.com/Lareina-Y/HRI-Tom-Target/blob/main/HRI_2025_Course_Group_6.pdf",
  },
  {
    name: "STRICT++",
    category: "Research",
    filter: "RESEARCH",
    year: "2023-2024",
    focus: "Query Reformulation Technique",
    image: "/assets/projects/strict-plus-plus.png",
    description:
      "Studies change-request patterns to make large-scale software evolution easier to understand. Proposed a novel algorithm–STRICT++ that integrates four graph-based algorithms with three types of inter-word relations.",
    tags: ["Research", "NLP", "Java", "Python"],
    metric: "946",
    metricLabel: "requests analyzed from 22 systems",
    href: "https://raise.cs.dal.ca/thesis/YangBCS2024.pdf",
  },
  {
    name: "BlueTiSCH",
    category: "Research / Networks",
    filter: "RESEARCH",
    year: "2022",
    focus: "Publisher: IEEE GLOBECOM",
    image: "/assets/projects/bluetisch.png",
    description:
      "Improves time-slotted channel hopping for reliable, efficient industrial wireless networks. \"BlueTiSCH: A Multi-PHY Simulation of Low-Power 6TiSCH IoT Networks\", published at GLOBECOM 2022 - 2022 IEEE Global Communications Conference.",
    tags: ["JavaScript", "Python", "Networks", "IoT", "Research"],
    metric: "IEEE",
    metricLabel: "GLOBECOM",
    href: "https://ieeexplore.ieee.org/abstract/document/10001254",
  },
  {
    name: "Mini Gravity Sketch",
    category: "Robotics & XR",
    filter: "ROBOTICS & XR",
    year: "2024",
    focus: "Immersive 3D creation",
    image: "/assets/projects/mini-gravity-sketch.png",
    description:
      "A lightweight spatial drawing experience for creating and manipulating forms directly in 3D.",
    tags: ["XR", "Unity", "3D", "C#", "Spatial UI"],
    metric: "15+",
    metricLabel: "movement gestures implemented",
    href: "https://sites.google.com/cornell.edu/mini-gravity-sketch/g-09",
  },
] satisfies Array<{
  name: string;
  category: string;
  filter: Exclude<Filter, "ALL">;
  year: string;
  focus: string;
  image: string;
  description: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  href: string;
}>;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL");
  const [activeProjectName, setActiveProjectName] = useState("AI Art Detector");
  const visibleProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.filter === activeFilter);
  const activeProject =
    projects.find((project) => project.name === activeProjectName) ??
    visibleProjects[0];

  function selectFilter(filter: Filter) {
    const filtered =
      filter === "ALL"
        ? projects
        : projects.filter((project) => project.filter === filter);
    setActiveFilter(filter);
    setActiveProjectName(filtered[0].name);
  }

  return (
    <main id="home" className="archive">
      <SiteHeader currentPage="projects" />
      <div className="page-shell archive-body">
        <p className="eyebrow">PROJECT ARCHIVE / 08</p>
        <div className="archive-title">
          <h1>
            <span>ALL</span> PROJECTS
          </h1>
          <p>
            An evolving archive of software, research, and interactive systems.
          </p>
        </div>
        <div
          className={`archive-panel${activeFilter === "ALL" ? "" : " filtered"}`}
        >
          <div className="filters" aria-label="Filter projects by category">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? "active" : undefined}
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => selectFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="projects-layout">
            <div className="projects-table" aria-live="polite">
              <div className="table-head">
                <span>PROJECT</span>
                <span>CATEGORY</span>
                <span>YEAR</span>
                <span>FOCUS</span>
              </div>
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
                    <Link
                      className="project-row-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} project`}
                      onFocus={() => setActiveProjectName(project.name)}
                    />
                    <Image
                      unoptimized
                      src={project.image}
                      alt={`${project.name} project preview`}
                      width={160}
                      height={100}
                    />
                    <b>{project.name}</b>
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                    <span>{project.focus}</span>
                    <ArrowUpRight />
                  </motion.article>
                );
              })}
            </div>
            <motion.aside
              className="project-detail-card"
              key={activeProject.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              aria-label={`${activeProject.name} details`}
            >
              <Image
                unoptimized
                src={activeProject.image}
                alt={`${activeProject.name} detail preview`}
                width={640}
                height={360}
              />
              <h2>{activeProject.name}</h2>
              <p>{activeProject.description}</p>
              <div className="detail-tags">
                {activeProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="detail-metric">
                <strong>{activeProject.metric}</strong>
                <span>{activeProject.metricLabel}</span>
              </div>
              <a
                className="detail-link"
                href={activeProject.href}
                target="_blank"
                rel="noreferrer"
              >
                VIEW PROJECT <ArrowUpRight />
              </a>
            </motion.aside>
          </div>
          <div
            className="archive-more"
            aria-label="More projects will be added over time"
          >
            <Sparkle aria-hidden="true" />
            <span>MORE PROJECTS AND CATEGORIES WILL BE ADDED OVER TIME</span>
            <Sparkle aria-hidden="true" />
          </div>
        </div>
        <Link className="back-home" href="/">
          <ArrowLeft /> BACK TO HOME
        </Link>
      </div>
      <SiteFooter />
    </main>
  );
}
