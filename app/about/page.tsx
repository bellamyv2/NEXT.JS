import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Bellamy Ombaso's Information Technology and Cybersecurity studies, skills, and experience.",
};

const skills = [
  "Network scanning (Nmap)",
  "Cybersecurity fundamentals",
  "HTML & CSS",
  "Git & GitHub",
  "Basic Linux commands",
  "IT support & troubleshooting",
];

const interests = ["Cybersecurity", "Ethical hacking", "Web development", "Tech entrepreneurship"];

const experience = [
  {
    year: "2025",
    title: "IT & Finance Attaché",
    organization: "Office of the Attorney General",
    text: "Configured computers and network devices, troubleshot hardware and software issues, assisted with domain configurations, and supported staff with system-related problems.",
  },
  {
    year: "2024–Present",
    title: "Diploma in Information & Cybersecurity",
    organization: "Studies",
    text: "Pursuing a diploma while building practical skills across IT support, networking, web development, and cybersecurity fundamentals.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-width inner-page">
      <p className="eyebrow"><span className="availability-dot" /> A LITTLE ABOUT ME</p>
      <section className="about-heading">
        <h1>
          Information
          <br />
          <em>and cybersecurity.</em>
        </h1>
        <p>
          I&apos;m an Information Technology and Cybersecurity student with
          hands-on experience in networking, IT support, and systems
          administration.
        </p>
      </section>

      <div className="about-profile">
        <div className="about-image">
          <Image
            src="/images/my-picture.jpeg"
            alt="Portrait of Bellamy Ombaso"
            width={480}
            height={560}
          />
        </div>
        <div className="about-story">
          <p className="eyebrow">THE SHORT VERSION</p>
          <h2>Hi, I&apos;m Bellamy.</h2>
          <p>
            I&apos;m currently pursuing a Diploma in Information and
            Cybersecurity. I have a strong foundation in troubleshooting,
            hardware and software support, and network management, and I&apos;m
            eager to keep growing in the field of information technology and
            cybersecurity.
          </p>
          <p>
            During my attachment with the IT department at the Office of the
            Attorney General, I configured computers and network devices,
            assisted with domain configurations, resolved technical issues,
            and supported staff with system-related problems.
          </p>
          <p>
            I also enjoy web development and tech entrepreneurship, and I&apos;m
            a fan of Future.
          </p>
          <Link className="text-link" href="/contact">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <section className="principles">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TOOLS & KNOWLEDGE</p>
            <h2>My skills<span className="accent-dot">.</span></h2>
          </div>
        </div>
        <div className="principle-list">
          {skills.map((skill, index) => (
            <article className="principle-item" key={skill}>
              <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{skill}</h3>
              <p>{index === 0 || index === 1 ? "Foundational knowledge" : "Practical skills"}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="principles experience-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EDUCATION & EXPERIENCE</p>
            <h2>My journey<span className="accent-dot">.</span></h2>
          </div>
        </div>
        <div className="principle-list">
          {experience.map((item) => (
            <article className="principle-item experience-item" key={item.year}>
              <span className="skill-number">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="experience-organization">{item.organization}</p>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="interests-section">
        <p className="eyebrow">WHAT I&apos;M CURIOUS ABOUT</p>
        <div className="interest-list">
          {interests.map((interest) => <span key={interest}>{interest}</span>)}
        </div>
      </section>
    </div>
  );
}
