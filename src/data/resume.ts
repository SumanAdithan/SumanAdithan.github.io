// Single source of truth for portfolio content. Edit here to update the site.

export const profile = {
  name: "Suman",
  role: "Software Engineer",
  email: "sumanadithan34@gmail.com",
  phone: "9360503039",
  linkedin: "https://www.linkedin.com/in/suman-adithan/",
  github: "https://github.com/SumanAdithan",
  figma: "https://www.figma.com/@sumanadithan",
  // Drop your resume at public/resume.pdf
  resume: "/resume.pdf",
  resumeFileName: "Suman-Software-Engineer-Resume.pdf",
  headline: "Full-stack · Next.js + NestJS · React Native · Agentic AI",
  hireSubject: "Opportunity for Suman – Software Engineer",
  // Each string renders as its own paragraph in About.
  summary: [
    "I'm a Software Engineer with 1+ year of experience building full-stack web, mobile, and AI-powered products, working mainly with Next.js and NestJS in TypeScript.",
    "I've built products across HR, project management, and ride-sharing, developed AI and agentic apps with LangChain and LangGraph, and taken products from Figma design to production with end-to-end ownership.",
  ],
};

// Shown as a code-editor card in the hero. Keep each line short so it fits on phones.
export const heroCode = {
  fileName: "suman.ts",
  variable: "suman",
  fields: [
    { key: "role", value: "Software Engineer" },
    { key: "experience", value: "1+ years" },
    { key: "stack", value: ["Next.js", "NestJS"] },
    { key: "languages", value: ["TS", "JS", "Rust"] },
    { key: "builds", value: ["Web apps", "Mobile apps"] },
    { key: "ai", value: ["LangChain", "LangGraph"] },
  ],
} satisfies {
  fileName: string;
  variable: string;
  fields: { key: string; value: string | string[] }[];
};

export const marquee = [
  "Next.js",
  "NestJS",
  "TypeScript",
  "JavaScript",
  "Rust",
  "React",
  "Node.js",
  "LangChain",
  "LangGraph",
];

export const services = [
  { title: "Full-Stack Web Applications", icon: "web" },
  { title: "Mobile Applications", icon: "app" },
  { title: "AI-Powered & Agentic AI Applications", icon: "ai" },
] as const;

export const stats = [
  { value: "1", suffix: "+", label: "Years of experience" },
  { value: "20", suffix: "+", label: "Apps worked on" },
  { value: "1K", suffix: "+", label: "My Local Image users" },
];

export const experience = [
  {
    company: "AgileTribers",
    role: "Software Engineer",
    period: "Jul 2025 – Present",
    progression: "Joined as an intern through campus placement → converted to full-time",
    points: [
      "Built a multi-tenant HR & project management SaaS end to end as the solo full-stack developer, using Next.js and NestJS.",
      "Built and shipped an internal AI job discovery platform solo, automating daily job discovery and tracking for placement officers.",
      "Worked on 20+ web, mobile, and backend applications across HR, project management, and ride-sharing, covering new features, production support, and bug fixing.",
      "Worked on an enterprise agentic AI coding IDE, building planning, execution, and verification workflows with LangChain and LangGraph.",
      "Improved the reliability of a ride-sharing platform with more accurate GPS/fare calculation and local-first storage to prevent data loss on poor networks.",
      "Built a reusable React design system from scratch based on an enterprise client's Figma UI kit.",
    ],
  },
];

type PersonalProject = {
  title: string;
  tag: string;
  url: string;
  linkLabel: string;
  github?: string;
  // Screenshot in public/, with its pixel size. Omit to render a text-only card.
  image?: { src: string; alt: string; width: number; height: number };
  points: string[];
  stack: string[];
};

export const personalProjects: PersonalProject[] = [
  {
    title: "My Local Image",
    tag: "Personal Project",
    url: "https://www.mylocalimage.com/",
    linkLabel: "Visit live site",
    image: {
      src: "/my-local-image.png",
      alt: "My Local Image compressor showing a before/after comparison that saved 84% of the file size",
      width: 1891,
      height: 880,
    },
    points: [
      "Privacy-first image toolkit: compress, convert (JPG, PNG, WEBP), resize, crop, and enhance images for free.",
      "Image processing runs entirely in the browser with Rust + WebAssembly, with no uploads, no sign-ups, and no limits.",
      "Independently designed, built, and launched the product, reaching 1,000+ users.",
    ],
    stack: ["Rust", "WebAssembly", "TypeScript"],
  },
  {
    title: "Student Information System",
    tag: "Open Source · UI/UX Design + Full-Stack",
    url: "https://www.figma.com/community/file/1467196201248983459/student-information-system",
    linkLabel: "View on Figma",
    github: "https://github.com/SumanAdithan/student-information-system",
    image: {
      src: "/student-information-system.png",
      alt: "Student Information System login screen for the MET Engineering College CSE department",
      width: 1657,
      height: 1024,
    },
    points: [
      "Final-year project, designed and built end to end: role-based portals for students, faculty, and admins.",
      "Students track attendance, CGPA, results, timetable, dues, and hall ticket eligibility, and pay fees online via Razorpay with automated PDF receipts.",
      "JWT auth with role-based access and QR code login, in a Turborepo monorepo with shared TypeScript types.",
      "Published the UI/UX design on Figma Community, earning 50+ likes and 1,400+ duplicates.",
    ],
    stack: ["React", "Redux", "React Query", "Node.js", "Express", "MongoDB", "Razorpay", "Turborepo", "Figma"],
  },
];

// Client work under NDA: shown as text-only cards, no screenshots or links.
export const companyProjects = [
  {
    title: "HR & Project Management SaaS",
    tag: "Multi-Tenant SaaS",
    points: [
      "Built a multi-tenant SaaS platform for HR and project management end to end as the solo full-stack developer, bringing employees, departments, onboarding, interns, and hiring together with Kanban boards, Scrum sprints, and tasks in one workspace.",
      "Built real-time collaboration: live board updates, task comments with @mentions and file attachments, live notifications, and in-app messaging with department and project channels and direct messages.",
      "Implemented role-based access for Owner, Admin, HR, and Member roles, so each person sees only the projects and data relevant to them.",
    ],
  },
  {
    title: "Enterprise AI Coding IDE",
    tag: "Agentic AI",
    points: [
      "Worked on modern Agentic AI software for intelligent software development workflows.",
      "Developed AI workflows using LangChain and LangGraph for planning, execution and verification.",
      "Focused on design-system-aware code generation, context management and tool integration.",
    ],
  },
  {
    title: "AI-Powered Job Discovery Platform",
    tag: "AI · Internal Tool",
    points: [
      "Built and shipped an internal AI-powered job discovery platform end to end as the solo full-stack developer, helping placement officers find relevant opportunities for students.",
      "Automated keyword-based job discovery with daily tracking of new opportunities.",
      "Built the backend workflows and data processing behind discovery and tracking.",
    ],
  },
  {
    title: "Tier-2 Ride-Sharing Platform",
    tag: "Mobile",
    points: [
      "Worked across backend, admin web, driver, and user apps, fixing production bugs and implementing features.",
      "Improved GPS accuracy and location filtering, reducing noise for reliable distance and fare calculations.",
      "Implemented batch and local-first storage to prevent data loss during poor networks.",
    ],
  },
  {
    title: "Enterprise Insurance Platform",
    tag: "Leading Indian Financial Services Company",
    points: [
      "Developed frontend applications for a large-scale enterprise insurance platform.",
      "Built a React design system from scratch based on the company's Figma UI kit, creating reusable components.",
      "Ensured consistent UI and reusable patterns across the application.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Rust"] },
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native", "Redux", "Zustand", "TanStack Query", "TanStack Table", "Tailwind CSS", "shadcn/ui"],
  },
  { group: "Backend", items: ["Node.js", "Express.js", "NestJS", "GraphQL", "tRPC", "oRPC", "Redis", "Swagger"] },
  { group: "Database & ORM", items: ["SQL", "NoSQL", "Prisma", "Drizzle ORM", "Mongoose"] },
  { group: "Authentication", items: ["Passport.js", "Better Auth", "NextAuth.js"] },
  { group: "AI / LLM", items: ["Vercel AI SDK", "LangChain", "LangGraph"] },
  {
    group: "Tools & Platforms",
    items: ["Figma", "Git", "GitHub", "VS Code", "Postman", "SSH", "Docker", "Linux", "Vercel", "Firebase", "Google Play Console"],
  },
];

export const education = {
  degree: "Bachelor of Engineering in Computer Science and Engineering",
  school: "M.E.T Engineering College",
  years: "2021 – 2025",
};
