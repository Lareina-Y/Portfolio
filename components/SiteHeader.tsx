import Link from "next/link";

type SiteHeaderProps = { currentPage?: "home" | "projects" };

const homeSections = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Strengths", id: "strengths" },
];

export function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  const onProjectsPage = currentPage === "projects";

  return (
    <header className="site-header">
      <Link className="brand" href={onProjectsPage ? "/" : "#home"}>
        LAREINA
      </Link>
      <nav aria-label="Primary navigation">
        {homeSections.map(({ label, id }) => (
          <Link key={id} href={onProjectsPage ? `/#${id}` : `#${id}`}>
            {label}
          </Link>
        ))}
        {onProjectsPage ? (
          <span className="active-link">All Projects</span>
        ) : (
          <Link href="/projects">All Projects</Link>
        )}
      </nav>
      <div className="header-actions">
        <Link
          className="contact-pill"
          href={onProjectsPage ? "/#contact" : "#contact"}
        >
          CONTACT
        </Link>
        <span>
          <b>EN</b>
        </span>
      </div>
    </header>
  );
}
