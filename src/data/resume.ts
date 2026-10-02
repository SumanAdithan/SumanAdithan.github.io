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
      "Built a React design system library from scratch for a leading financial services client.",
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
      "Image processing runs entirely in the browser with Rust + WebAssembly, so images never leave the device: no server uploads, no sign-ups, and no limits.",
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
      "Built a multi-tenant HR & project management SaaS end to end as the solo full-stack developer, using Next.js and NestJS.",
      "Brings people (employees, onboarding, interns, hiring) and work (Kanban boards, Scrum sprints, tasks) into one workspace.",
      "Real-time collaboration: live boards, comments with @mentions, notifications, and in-app messaging.",
      "Role-based access for Owner, Admin, HR, and Member roles.",
    ],
  },
  {
    title: "Enterprise AI Coding IDE",
    tag: "Agentic AI",
    points: [
      "Worked on an enterprise agentic AI coding IDE that plans, writes, and verifies code.",
      "Built agent workflows with LangChain and LangGraph for planning, execution, and verification.",
      "Focused on design-system-aware code generation, context management, and tool integration.",
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
    title: "Ride-Sharing Platform",
    tag: "Mobile",
    points: [
      "Worked across backend, admin web, driver, and user apps, fixing production bugs and implementing features.",
      "Improved GPS accuracy and location filtering, reducing noise for reliable distance and fare calculations.",
      "Implemented batch and local-first storage to prevent data loss during poor networks.",
    ],
  },
  {
    title: "Enterprise Design System & Insurance Platform",
    tag: "Design System · Enterprise",
    points: [
      "Built a React design system library from scratch, translating the client's Figma UI kit into reusable components.",
      "Used the library to build frontend applications for a large-scale insurance platform at a leading Indian financial services company.",
      "Kept UI consistent across the platform with shared components and reusable patterns.",
    ],
  },
];

export const skills = [
  // Six groups fill two full rows of the three-column grid.
  { group: "Languages", items: ["TypeScript", "JavaScript", "Rust"] },
  {
    group: "Frontend",
    items: ["Next.js", "React", "React Native", "Redux", "Zustand", "TanStack Query", "TanStack Table", "Tailwind CSS", "shadcn/ui"],
  },
  {
    group: "Backend",
    items: [
      "NestJS",
      "Node.js",
      "Express.js",
      "GraphQL",
      "tRPC",
      "oRPC",
      "Redis",
      "Swagger",
      "Passport.js",
      "Better Auth",
      "NextAuth.js",
      "Razorpay",
    ],
  },
  { group: "Database & ORM", items: ["SQL", "NoSQL", "Prisma", "Drizzle ORM", "Mongoose"] },
  { group: "AI & Agents", items: ["Vercel AI SDK", "LangChain", "LangGraph"] },
  {
    group: "Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "Linux", "Turborepo", "Vercel", "Firebase", "Postman", "Figma", "Google Play Console"],
  },
];

export const education = {
  degree: "B.E. in Computer Science and Engineering",
  school: "M.E.T Engineering College",
  years: "2021 – 2025",
};
