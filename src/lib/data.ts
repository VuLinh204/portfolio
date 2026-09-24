// ============================================================
// Portfolio Data — single source of truth for all content
// ============================================================

export const PERSONAL = {
  name: "Vu Ngoc Khanh Linh",
  role: "Software Developer",
  location: "Hanh Thong Ward, Ho Chi Minh City, Vietnam",
  email: "linhlg2004@gmail.com",
  phone: "+84 364 704 715",
  github: "https://github.com/VuLinh204",
  tagline:
    "Software Developer with 1+ year building HR web applications — employee management, LMS, task workflows, and AI-assisted recruitment tools.",
  cvUrl: "/VuNgocKhanhLinh_Software_Developer.pdf",
};

export const SKILLS = [
  {
    category: "Languages",
    icon: "Code2",
    items: [
      "JavaScript",
      "TypeScript",
      "PHP",
      "SQL",
    ],
  },
  {
    category: "Web",
    icon: "Globe",
    items: [
      "HTML5",
      "CSS3",
      "jQuery",
      "AJAX",
      "Bootstrap",
      "Responsive Design",
      "Web APIs",
    ],
  },
  {
    category: "Frameworks",
    icon: "Layers",
    items: [
      "Laravel",
      "Node.js",
    ],
  },
  {
    category: "UI & Libraries",
    icon: "Layout",
    items: [
      "DevExpress",
      "DevExtreme",
      "Bootstrap",
      "jQuery UI",
    ],
  },
  {
    category: "Database",
    icon: "Database",
    items: [
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Stored Procedures",
      "Query Optimization",
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "Wrench",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Postman",
      "Figma",
      "VS Code",
      "Chrome DevTools",
    ],
  },
  {
    category: "AI",
    icon: "Brain",
    items: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Grok",
      "DeepSeek",
      "Google AI Studio",
      "Google Stitch",
    ],
  },
  {
    category: "AI Development",
    icon: "Bot",
    items: [
      "Cursor",
      "GitHub Copilot",
      "Codex",
      "Claude Code",
      "Antigravity",
    ],
  },
  {
    category: "Currently Learning",
    icon: "Sparkles",
    items: [
      "React.js",
      "Next.js",
      "AI Agent",
    ],
  },
];

export const EXPERIENCE = [
  {
    company: "Vietinsoft",
    role: "Software Developer",
    period: "Mar 2025 – May 2026",
    location: "Ho Chi Minh City, Vietnam",
    highlights: [
      "Built HR web apps: employee records, training modules, task management, and recruitment content generation",
      "Developed features & reusable UI components with JavaScript, jQuery, Bootstrap, and DevExtreme",
      "Optimised SQL Server stored procedures for complex HR data queries",
      "Designed responsive product landing pages and integrated AI tools for job descriptions & interview questions",
      "Provided remote support: installation, configuration, troubleshooting, and custom feature delivery",
    ],
  },
];
export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  tech: string[];
  problem: string;
  contribution: string;
  outcome: string;
  bullets: string[];
  highlight: boolean;
  highlightLabel?: string;
  demo?: string;
  github?: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "gymgear-app",
    title: "GymGear — Social Review & Equipment Booking Platform",
    role: "Full-Stack Developer",
    period: "2026",
    demo: "https://gymgear-app.vercel.app/",
    github: "https://github.com/VuLinh204/gymgear-app",
    tech: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "GymGear AI",
      "OriginKit Theme Engine",
      "Vercel",
    ],
    problem:
      "Gym owners and fitness practitioners lacked a dedicated platform to discover authentic equipment reviews, compare mechanical specifications, and book physical trial sessions at nearby showrooms.",
    contribution:
      "Ideated, architected, and built the entire social web application end-to-end: interactive review feed, free showroom trial booking pipeline, embedded GymGear AI workout assistant, multi-attribute gear filtering, and dynamic multi-theme engine.",
    outcome:
      "Successfully deployed to production on Vercel with high performance and mobile-first responsiveness; empowered users with 24/7 AI-guided gear recommendations and automated booking workflows.",
    bullets: [
      "Built a specialized community platform for gym equipment reviews and showroom booking",
      "Integrated GymGear AI conversational assistant with intelligent hotkey navigation (Ctrl + K)",
      "Engineered dynamic Theme Switcher (OriginKit Style) with dark/light themes and multi-language support",
      "Delivered a responsive, high-performance UI leveraging Next.js App Router and Tailwind CSS",
    ],
    highlight: true,
    highlightLabel: "Fullstack & AI",
  },
  {
    id: "paradise-hr",
    title: "ParadiseHR — LMS & Task Management",
    role: "Software Developer",
    period: "2025 – 2026",
    tech: [
      "JavaScript",
      "jQuery",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "DevExtreme",
      "SQL Server",
    ],
    problem:
      "The HR team lacked a unified platform for employee training and daily task tracking, leading to disjointed workflows and manual reporting.",
    contribution:
      "Sole developer on the LMS & Task modules within a larger HR suite, working closely with product owners to define scope and deliver iteratively.",
    outcome:
      "Shipped video-progress tracking, timed assessments, and an interactive Kanban board; optimised stored procedures cut average HR query time significantly.",
    bullets: [
      "Built lesson-management module inside an LMS platform",
      "Implemented video progress tracking + timed assessments",
      "Designed interactive Kanban board for full task lifecycle management",
      "Optimised stored procedures for complex HR data queries",
    ],
    highlight: false,
  },
  {
    id: "ai-recruitment",
    title: "AI Recruitment Tools & Landing Page",
    role: "Front-End Developer",
    period: "Aug – Oct 2025",
    tech: [
      "PHP",
      "JavaScript",
      "jQuery",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "OpenAI API",
      "Gemini API",
    ],
    problem:
      "HR teams spent hours manually crafting job descriptions and interview question sets — a repetitive, inconsistent, and error-prone process.",
    contribution:
      "Led front-end development and AI API integration for phanmemtinhluong.com; owned the full pipeline from prompt engineering to UI rendering.",
    outcome:
      "Integrated AI APIs cut content creation time by >80%; the SEO-optimised landing page drove measurable organic traffic uplift.",
    bullets: [
      "Designed responsive landing page, SEO-optimised for performance",
      "Integrated OpenAI & Gemini APIs to auto-generate job descriptions",
      "Built interview question generator powered by AI",
      "Ensured flawless cross-device experience: mobile, tablet, desktop",
    ],
    highlight: true, // AI highlight badge
    highlightLabel: "AI Integration",
  },
  {
    id: "vao-ca",
    title: "Vao Ca — HR Attendance & Payroll App",
    role: "Full-Stack Developer",
    period: "Mar – Jul 2025",
    tech: [
      "JavaScript",
      "jQuery",
      "HTML5",
      "CSS",
      "Bootstrap",
      "SQL Server",
      "DevExtreme",
    ],
    problem:
      "Attendance data was collected manually with frequent discrepancies in employee information updates, causing payroll errors.",
    contribution:
      "Full-stack ownership of the attendance & payroll module: database schema, stored procedures, front-end UI, and role-based approval logic.",
    outcome:
      "QR-based data sync eliminated manual entry errors; approval workflows enforced data integrity across all employee profile updates.",
    bullets: [
      "Built employee profiles with QR-based data synchronisation",
      "Implemented role-based approval workflows for profile updates",
      "Developed attendance tracking tied directly to payroll calculations",
      "Delivered full-stack solution from DB schema to responsive UI",
    ],
    highlight: false,
  },
];

export const EDUCATION = [
  {
    school: "Thu Duc College of Technology (TDC)",
    degree: "College Diploma — Information Technology",
    period: "Sep 2022 – Feb 2025",
    location: "Ho Chi Minh City, Vietnam",
  },
];
