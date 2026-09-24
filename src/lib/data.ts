// ============================================================
// Portfolio Data — single source of truth for all content
// ============================================================

export const PERSONAL = {
  name: "Vu Ngoc Khanh Linh",
  role: "Software Developer",
  location: "Ho Chi Minh City, Vietnam",
  email: "linhlg2004@gmail.com",
  phone: "+84 364 704 715",
  github: "https://github.com/VuLinh204",
  tagline:
    "Software Developer with 1+ year building HR web applications — employee management, LMS, task workflows, and AI-assisted recruitment tools.",
  cvUrl: "/cv-vu-ngoc-khanh-linh.pdf", // place your PDF in /public
};

export const SKILLS = [
  {
    category: "Languages",
    icon: "Code2",
    items: ["JavaScript", "PHP", "SQL"],
  },
  {
    category: "Web",
    icon: "Globe",
    items: ["HTML5", "CSS3", "jQuery", "Bootstrap"],
  },
  {
    category: "Frameworks & UI",
    icon: "Layers",
    items: ["Laravel", "DevExtreme", "DevExpress UI"],
  },
  {
    category: "Database",
    icon: "Database",
    items: ["SQL Server", "Stored Procedures", "Query Optimization"],
  },
  {
    category: "Tools & APIs",
    icon: "Wrench",
    items: ["Git", "Postman", "OpenAI API", "Gemini API"],
  },
  {
    category: "Currently Learning",
    icon: "Sparkles",
    items: ["React", "Next.js"],
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

export const PROJECTS = [
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
