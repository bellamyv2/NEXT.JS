import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header page-width">
      <Link className="wordmark" href="/" aria-label="Bellamy Ombaso home">
        bellamy<span>.</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/contact">
        Contact <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}
