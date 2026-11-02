import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bellamy Ombaso about IT support, cybersecurity, or technology opportunities.",
};

export default function ContactPage() {
  return (
    <div className="page-width inner-page contact-page">
      <p className="eyebrow"><span className="availability-dot" /> OPEN TO CONNECTING</p>
      <section className="contact-content">
        <div>
          <h1>
            Let&apos;s talk
            <br />
            <em>technology.</em>
          </h1>
          <p className="contact-intro">
            I&apos;m eager to learn, grow, and contribute in information
            technology and cybersecurity. Connect with me on GitHub to start a
            conversation.
          </p>
          <a className="contact-email" href="https://github.com/bellamyv2" target="_blank" rel="noreferrer">
            github.com/bellamyv2 <span aria-hidden="true">↗</span>
          </a>
        </div>
        <aside className="contact-details">
          <div>
            <p className="eyebrow">FOCUS</p>
            <p>Information Technology<br />Cybersecurity</p>
          </div>
          <div>
            <p className="eyebrow">GITHUB</p>
            <p>
              <a href="https://github.com/bellamyv2" target="_blank" rel="noreferrer">bellamyv2 ↗</a>
            </p>
          </div>
          <div>
            <p className="eyebrow">CURRENTLY</p>
            <p>Diploma student<br />Learning and building</p>
          </div>
        </aside>
      </section>
      <div className="contact-stamp" aria-hidden="true">GOOD THINGS<br />START HERE ✳</div>
    </div>
  );
}
