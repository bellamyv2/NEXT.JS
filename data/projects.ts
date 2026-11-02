export type Project = {
  title: string;
  description: string;
  type: string;
  year: string;
  image: string;
  imageAlt: string;
  theme: string;
};

export const projects: Project[] = [
  {
    title: "Office of the Attorney General",
    description: "IT department attachment: device setup, troubleshooting, and staff support.",
    type: "IT & FINANCE ATTACHÉ",
    year: "2025",
    image: "/images/it-support.svg",
    imageAlt: "Illustration of computer equipment and an IT support checklist",
    theme: "project-peach",
  },
  {
    title: "Local Network Scanning",
    description: "A personal project exploring network scanning with Nmap.",
    type: "NETWORKING",
    year: "PROJECT",
    image: "/images/network-scanning.svg",
    imageAlt: "Illustration of a local network with connected devices",
    theme: "project-lilac",
  },
  {
    title: "Personal Portfolio Website",
    description: "A website project to present my background, skills, and work.",
    type: "HTML & CSS",
    year: "PROJECT",
    image: "/images/portfolio-project.svg",
    imageAlt: "Illustration of a personal portfolio website shown on a laptop",
    theme: "project-green",
  },
  {
    title: "QR Code Information Project",
    description: "A project using QR codes to make information easy to access.",
    type: "INFORMATION PROJECT",
    year: "PROJECT",
    image: "/images/qr-project.svg",
    imageAlt: "Illustration of a QR code linking to a digital information card",
    theme: "project-blue",
  },
];
