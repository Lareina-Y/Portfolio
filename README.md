# Lareina Yang — Software Engineering Portfolio

https://portfolio.lareinay.workers.dev/

A personal portfolio showcasing my work across full-stack engineering, applied AI, software systems, robotics, and research.

The site brings together selected projects, professional experience, technical strengths, and an interactive project archive in a responsive, editorial-style interface.

## Highlights

- Curated case studies spanning AI products, software systems, robotics, XR, and research
- Filterable project archive with project details, outcomes, and repository links
- Professional experience and education presented in a concise, recruiter-friendly format
- Responsive layouts, motion-driven interactions, and accessible navigation

## Tech Stack

- **Framework:** Next.js 16, React 19, TypeScript
- **Runtime and build:** vinext, Vite, Cloudflare tooling
- **Styling:** Tailwind CSS 4 and custom CSS
- **Animation:** Motion for React
- **Icons:** Lucide React
- **Optional data layer:** Cloudflare D1 and Drizzle ORM
- **Quality:** ESLint and Node.js test runner

## Getting Started

### Prerequisites

- Node.js 22.13 or newer
- npm

### Installation

```bash
git clone https://github.com/Lareina-Y/Portfolio.git
cd Portfolio
npm ci
npm run dev
```

Open the local URL shown in the terminal.

## Available Commands

```bash
npm run dev         # Start the local development server
npm run build       # Create a production build
npm start           # Start the production server
npm test            # Build and run rendered HTML tests
npm run lint        # Run ESLint
npm run db:generate # Generate optional Drizzle migrations
```

## Project Structure

```text
app/                 Pages, metadata, and global styles
components/          Reusable portfolio sections and navigation
public/assets/       Portfolio artwork and project previews
tests/               Rendered HTML verification
db/                  Optional Drizzle schema and database setup
worker/              Cloudflare worker entry point
approved-designs/    Approved visual references
```

## Featured Work

The portfolio currently highlights projects including:

- **TaskMosaic** — AI-assisted project planning and task prioritization
- **AI Art Detector** — Interpretable classification of AI-generated artwork
- **Tom's Target** — Vision-based target selection for human-robot interaction
- **GIS Ticket Viewer** — GIS-based infrastructure conflict visualization
- **STRICT++** — Research into software change-request patterns
- **BlueTiSCH** — Reliable industrial wireless networking research

Explore the full archive through the **All Projects** page in the portfolio.

## Connect

- [GitHub](https://github.com/Lareina-Y)
- [LinkedIn](https://linkedin.com/in/shiwen-lareina-yang)

## License

This repository contains my personal portfolio content and visual assets. Please do not reuse them as your own portfolio without permission.
