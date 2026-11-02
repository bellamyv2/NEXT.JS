import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer page-width">
      <Link className="wordmark" href="/">
        bellamy<span>.</span>
      </Link>
      <p>Information Technology · Cybersecurity · Always learning</p>
      <span className="copyright">© {new Date().getFullYear()} Bellamy Ombaso</span>
    </footer>
  );
}
