import EatnslipImg from "@/public/Eatnslip.png";
import DashboardImg from "@/public/Dashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Ansible",
  "Grafana",
  "Prometheus",
] as const;

export const projectData = [
  {
    title: "Eat-n-slip",
    description:
      "The name of the app is called eat-n-slip it's an application that lets you basically to split bills with your friends when you go out be it for lunch or dinner. the application has functionality of adding friends, showing you also how much your friends are owing you and vice versa.",
    tags: ["React", "CSS", "JavaScript"],
    imageUrl: EatnslipImg,
    projectUrl: "https://eat-n-slip.vercel.app"
  },
   {
    title: "Dashboard",
    description:
      "Observability Dashboard, A high-performance React observability platform that delivers real-time monitoring,logging,metrics visualization, and distributed tracing for microservices,enabling teams to troubleshoot swiftly and understand their systems deeply.",
    tags: ["React","JavaScript","TypeScript","React Query","Tailwind"],
    imageUrl: DashboardImg,
    projectUrl: "https://kelvinseamount.github.io/Observability-Dashboard/"
  },
];
