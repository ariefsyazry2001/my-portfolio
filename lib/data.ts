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
    slug: "hrms-backend",
    name: "HRMS Backend",
    tag: "Backend · HR & Payroll",
    description:
      "Multi-tenant HR and payroll backend powering daily operations, statutory calculations and staff management.",
    tech: ["Laravel", "MySQL", "AWS", "Redis"],
    problem:
      "SMEs and clinics were running HR and payroll on a mix of legacy systems and spreadsheets, making Malaysian statutory calculations hard to maintain, audit and automate across multiple companies.",
    highlights: [
      "Implemented complex EPF, SOCSO and EIS contribution rules for local and foreign workers using reusable services and reference tables.",
      "Designed a multi-tenant schema so multiple companies can share one backend while keeping data logically separated by company.",
      "Automated payroll runs, bank text generation and statutory report exports to reduce manual spreadsheet work for HR teams.",
    ],
    impact:
      "Enabled multiple companies to run monthly payroll from a single HRMS backend, reduced manual steps around payroll runs and report generation, and made it easier to onboard new tenants on shared infrastructure.",
  },
  {
    slug: "chat-system-with-search",
    name: "Chat System with Search",
    tag: "Backend · Real-time",
    description:
      "Internal chat platform with channels, DMs and full-text search over messages using Meilisearch.",
    tech: ["NestJS", "MongoDB", "Meilisearch", "WebSockets"],
    problem:
      "Teams were using scattered WhatsApp threads and emails for internal communication, making it hard to search message history, keep conversations tenant-scoped and onboard new members to existing discussions.",
    highlights: [
      "Built a WebSocket-based messaging API in NestJS with channels, direct messages and typing indicators.",
      "Stored messages in MongoDB with clear organization and channel scoping to support a multi-tenant setup.",
      "Indexed messages in Meilisearch and exposed a search API for fast, filtered full-text search across conversations.",
    ],
    impact:
      "Provided a centralized internal chat platform with real-time messaging and fast search, making it easier for teams to find past discussions and manage communication per organization.",
  },
  {
    slug: "video-interview-analytics-pipeline",
    name: "Video Interview Analytics Pipeline",
    tag: "Backend · AI/ML",
    description:
      "Async pipeline that ingests candidate videos, runs transcription and scoring, and returns structured feedback.",
    tech: ["FastAPI", "Celery", "OpenAI", "AWS S3", "FFmpeg"],
    problem:
      "Recruiters were manually watching candidate interview videos end-to-end, which didn’t scale and produced inconsistent feedback as candidate volume grew.",
    highlights: [
      "Designed an async API in FastAPI where the frontend submits a video analysis job and receives a job ID instead of blocking on long-running work.",
      "Orchestrated Celery tasks to download videos from S3, preprocess them with FFmpeg, transcribe audio with OpenAI and generate structured feedback per question.",
      "Returned analysis results as structured JSON so frontends can display per-question scores, comments and overall summaries without extra parsing.",
    ],
    impact:
      "Reduced the need for manual, real-time video review by moving heavy work into Celery workers, giving recruiters structured feedback that scales with higher candidate volume.",
  },

];

export type Project = (typeof projects)[number];
