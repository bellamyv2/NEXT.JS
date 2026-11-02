import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

const skills = ["IT support & troubleshooting", "Networking", "Cybersecurity fundamentals"];

export default function HomePage() {
  return (
    <>
      <section className="hero page-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" /> IT & CYBERSECURITY STUDENT</p>
          <h1>
            Technology that
            <br />
            <span>works</span> for people.
          </h1>
          <p className="hero-description">
            I&apos;m Bellamy, an Information Technology and Cybersecurity
            student with hands-on experience in IT support, networking, and
            systems administration.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/about">
              Get to know me <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/contact">
              Contact me <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hero-meta">
            <span>IT SUPPORT · NETWORKING</span>
            <span>INFORMATION & CYBERSECURITY</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-note note-top">CURIOUS BY NATURE</div>
          <div className="portrait-frame">
            <Image
              src="/images/my-picture.jpeg"
              alt="Portrait of Bellamy Ombaso"
              width={480}
              height={560}
              priority
            />
          </div>
          <div className="art-note note-bottom">TECH × PEOPLE</div>
          <span className="hero-sparkle sparkle-one" aria-hidden="true">✳</span>
          <span className="hero-sparkle sparkle-two" aria-hidden="true">✳</span>
        </div>
      </section>

      <section className="intro-band">
        <div className="page-width intro-content">
          <p className="eyebrow">ABOUT MY APPROACH</p>
          <div className="intro-grid">
            <h2>Good technology starts with <em>solving real problems.</em></h2>
            <div className="intro-copy">
              <p>
                I enjoy troubleshooting, supporting people with technology,
                and building a strong foundation in networking and
                cybersecurity. I&apos;m eager to keep learning and contribute
                in a hands-on IT environment.
              </p>
              <Link className="text-link" href="/about">
                More about me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-number">0{index + 1}</span>
                <span>{skill}</span>
                <span className="skill-arrow" aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section page-width">
        <div className="section-heading">
          <div>
              <p className="eyebrow">EXPERIENCE & PERSONAL PROJECTS</p>
              <h2>My work<span className="accent-dot">.</span></h2>
          </div>
          <Link className="text-link desktop-link" href="/projects">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <Link className="text-link mobile-link" href="/projects">
          All projects <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="home-cta">
        <div className="page-width cta-content">
          <p className="eyebrow">LET&apos;S CONNECT</p>
          <h2>Building skills. <em>Solving problems.</em></h2>
          <Link className="button button-light" href="/contact">
          Contact me <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <span className="cta-star" aria-hidden="true">✳</span>
      </section>
    </>
  );
}
