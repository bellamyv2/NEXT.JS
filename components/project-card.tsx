import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.theme}`}>
      <div className="project-image">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={960}
          height={720}
        />
        <span className="project-year">{project.year}</span>
      </div>
      <div className="project-info">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <span className="project-type">{project.type}</span>
      </div>
    </article>
  );
}
