// lib/data.ts

export const skills = {
  Backend: ["Laravel", "NestJS", "FastAPI", "Flask"],
  Frontend: ["Next.js", "React", "Livewire", "HTML5", "CSS", "Tailwind CSS"],
  "Cloud & DevOps": [
    "AWS (EC2, S3, RDS, SQS)",
    "Linux (Ubuntu)",
    "Nginx",
    "PM2/systemd",
    "Celery",
    "Meilisearch",
    "Stripe API",
  ],
  "Data & ML": [
    "Python",
    "NumPy",
    "Pandas",
    "SciPy",
    "Matplotlib",
    "Seaborn",
    "scikit-learn",
  ],
  "Databases & Tools": ["MySQL", "PostgreSQL", "MongoDB", "Git", "Excel"],
};

export const experience = [
  {
    company: "INVOKE Solutions, Malaysia",
    role: "Backend Software Developer",
    period: "Feb 2025 – Present",
    bullets: [
      "Maintain and extend multi-tenant HRMS backend (Laravel, MySQL) for HR Operations.",
      "Built a real-time Chat System with NestJS, MongoDB and Meilisearch-powered search.",
      "Designed a Video Interview Analytics pipeline using FastAPI, Celery, OpenAI and AWS S3.",
      "Integrated Stripe payment gateway for Pactonline platform.",
      "Manage AWS deployments with EC2, S3, Nginx and PM2/systemd services.",
    ],
  },
  {
    company: "SD Tech Solution Sdn Bhd, Selangor",
    role: "Data Migration Analyst",
    period: "May 2023 – Sep 2024",
    bullets: [
      "Planned and executed ETL processes for client systems.",
      "Ensured data integrity and accessibility throughout migration projects.",
    ],
  },
  {
    company: "Telekom Malaysia Berhad",
    role: "Intern",
    period: "Oct 2022 – Mar 2023",
    bullets: [
      "Assisted in maintaining server-side applications and network infrastructure.",
    ],
  },
];

export const projects = [
  {
    slug: "adnexio-hrms-backend",
    name: "Adnexio HRMS Backend",
    tag: "Backend · HR & Payroll",
    description:
      "Multi-tenant HR and payroll backend powering daily operations, statutory calculations and staff management.",
    tech: ["Laravel", "MySQL", "AWS", "Redis"],
    highlights: [
      "Implemented complex EPF, SOCSO and EIS contribution rules for local and foreign workers.",
      "Designed scalable multi-tenant schema to support multiple companies sharing the same infrastructure.",
      "Automated payroll runs, bank text generation and statutory report exports.",
    ],
  },
  {
    slug: "chat-system-with-search",
    name: "Chat System with Search",
    tag: "Backend · Real-time",
    description:
      "Internal chat platform with channels, DMs and full-text search over messages using Meilisearch.",
    tech: ["NestJS", "MongoDB", "Meilisearch", "WebSockets"],
    highlights: [
      "Built WebSocket-based messaging API with channels, direct messages and typing indicators.",
      "Indexed messages in Meilisearch for fast full-text search across organizations.",
      "Handled multi-tenant access control and message history management.",
    ],
  },
  {
    slug: "video-interview-analytics-pipeline",
    name: "Video Interview Analytics Pipeline",
    tag: "Backend · AI/ML",
    description:
      "Async pipeline that ingests candidate videos, runs transcription and scoring, and returns structured feedback.",
    tech: ["FastAPI", "Celery", "OpenAI", "AWS S3", "FFmpeg"],
    highlights: [
      "Orchestrated Celery tasks for downloading, splitting and processing candidate videos.",
      "Used OpenAI APIs for transcription and feedback generation with structured JSON outputs.",
      "Exposed a clean REST API for the frontend to trigger analysis and poll for results.",
    ],
  },
];

export type Project = (typeof projects)[number];
