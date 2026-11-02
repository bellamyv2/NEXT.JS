import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "IT experience and projects by Bellamy Ombaso, including network scanning, a personal portfolio, and a QR code information project.",
};

export default function ProjectsPage() {
  return (
    <div className="page-width inner-page projects-page">
      <p className="eyebrow">EXPERIENCE & PERSONAL PROJECTS</p>
      <section className="projects-heading">
        <h1>
          Learning by
          <br />
          doing <em>the work.</em>
        </h1>
        <p>
          Practical experience supporting users and maintaining technology,
          alongside personal projects that help me grow my IT and web
          development skills.
        </p>
      </section>
      <div className="project-grid project-grid-all">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="projects-end">
        <p>Have a project in mind?</p>
        <a className="text-link" href="/contact">
          Let&apos;s talk <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
