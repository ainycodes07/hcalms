/* =========================================================
   CURRICULUM CONTENT
   Format per week entry: [studyConcept, studyPlatform, studyOutcome, taskType, taskTitle, taskStack, taskBrief]
   16 entries per semester correspond to weeks [1,2,3,4,5,6,7,8,13,14,15,16,17,18,19,20]
   ========================================================= */
const SEM_META = [
  { id: 1, name: "Semester 1", level: "Beginner — Frontend Foundations" },
  { id: 2, name: "Semester 2", level: "Intermediate — React & UX" },
  { id: 3, name: "Semester 3", level: "Advanced — Systems & Databases" },
  { id: 4, name: "Semester 4", level: "Pro — Real World & Jobs" },
  { id: 5, name: "Semester 5", level: "Specialization I" },
  { id: 6, name: "Semester 6", level: "Specialization II — Capstone" },
];

const CURRICULUM = {
  1: {
    weeks: [
      [
        "HTML5 & CSS3 — Flexbox & Grid, responsive design",
        "The Odin Project (Foundations)",
        "Comfortable building responsive layouts from scratch",
        "quiz",
        "JS & Logic Warm-Up",
        "JavaScript",
        "Solve 8-10 beginner problems on CodeWars (8kyu-7kyu) or LeetCode Easy.",
      ],
      [
        "Semantic HTML deep-dive + CSS Grid mastery",
        "The Odin Project",
        "Can structure a page semantically and lay it out with Grid",
        "assignment",
        "Personal Landing Page",
        "HTML, CSS",
        "Build a fully responsive one-page personal site using semantic HTML and CSS Grid. No frameworks.",
      ],
      [
        "Git & GitHub — branches, commits, PRs",
        "The Odin Project + freeCodeCamp Git",
        "Confident using Git for version control and collaboration",
        "activityA",
        "First Open-Source Touchpoint",
        "Git/GitHub",
        "Join a beginner-friendly OSS Discord/Slack and attempt one 'good first issue' (merge not required).",
      ],
      [
        "JavaScript fundamentals — variables, functions, DOM",
        "The Odin Project + CS50x Week 8",
        "Understands core JS syntax and DOM manipulation",
        "activityB",
        "Build Your Public Presence",
        "GitHub, LinkedIn",
        "Create a polished GitHub profile README and set up your LinkedIn as a student developer.",
      ],
      [
        "DOM manipulation & events in depth",
        "The Odin Project",
        "Can build interactive pages that respond to input",
        "quiz",
        "DOM Logic Problems",
        "JavaScript",
        "Solve 8-10 DOM/array manipulation problems on CodeWars (6kyu).",
      ],
      [
        "JS functions, scope, closures",
        "The Odin Project",
        "Understands scope and writes reusable logic",
        "assignment",
        "Interactive JS Mini-App",
        "HTML, CSS, JavaScript",
        "Build a calculator or to-do list app using vanilla JS.",
      ],
      [
        "Modern JS (ES6+) — arrow functions, destructuring, modules",
        "The Odin Project",
        "Writes modern, idiomatic JavaScript",
        "activityA",
        "OSS Documentation Fix",
        "Markdown/Git",
        "Find and fix a documentation issue on any active open-source repository.",
      ],
      [
        "CS fundamentals refresher — memory, algorithms basics",
        "CS50x (Weeks 0-5, optional)",
        "Builds foundation in how computers work",
        "activityB",
        "First Blog Post",
        "Dev.to / Hashnode",
        "Publish 'Why I'm Learning to Code' — your motivation and goals.",
      ],
      [
        "Async JavaScript — promises, async/await, fetch API",
        "The Odin Project",
        "Can fetch and work with data from external APIs",
        "quiz",
        "Async JS Problems",
        "JavaScript",
        "Solve problems involving promises, async/await and the Fetch API.",
      ],
      [
        "Node.js & Express basics",
        "The Odin Project (NodeJS course)",
        "Can build a simple backend server and API routes",
        "assignment",
        "API Proxy Server",
        "Node.js, Express",
        "Build a backend that fetches data from a public API and serves it via your own endpoint.",
      ],
      [
        "Node/Express — middleware & routing patterns",
        "The Odin Project",
        "Understands middleware, routing, error handling",
        "activityA",
        "Hackathon Participation",
        "Any",
        "Join a beginner-friendly hackathon on Devpost or MLH — ship something small.",
      ],
      [
        "SQL fundamentals — SELECT, JOIN, WHERE",
        "freeCodeCamp Relational Database course",
        "Can write basic SQL queries confidently",
        "activityB",
        "Project Walkthrough Video",
        "YouTube/OBS",
        "Record a 5-minute walkthrough of a project you've built so far.",
      ],
      [
        "SQL — schema design, relationships",
        "freeCodeCamp Relational Database course",
        "Can design a simple relational schema",
        "quiz",
        "SQL Query Problems",
        "SQL",
        "Solve SQL problems on LeetCode Database (Easy tier).",
      ],
      [
        "REST & CRUD principles",
        "The Odin Project + MDN",
        "Understands designing and building CRUD APIs",
        "assignment",
        "Full CRUD App",
        "Node, Express, SQLite",
        "Build a CRUD app (notes or task manager) with Express and SQLite.",
      ],
      [
        "Deployment basics — hosting a live app",
        "Netlify / Render official docs",
        "Can deploy a full-stack app live with a working URL",
        "activityA",
        "Volunteer Web Build",
        "HTML/CSS/JS",
        "Build a free simple site for a local nonprofit or community group.",
      ],
      [
        "Git workflows for collaboration",
        "The Odin Project (Git deep dive)",
        "Comfortable with branches, PRs, conflict resolution",
        "activityB",
        "Freelance Profile Case Study",
        "Upwork/Fiverr",
        "Publish your nonprofit project as a case study on a freelance profile.",
      ],
    ],
    midterm: [
      [
        "Responsive Portfolio Shell",
        "HTML, CSS, vanilla JS",
        "Build a responsive, multi-page portfolio site shell (no framework) — home, about, projects, contact.",
      ],
      [
        "Interactive JS Build + Clone Project",
        "HTML, CSS, JavaScript, Git",
        "Build one interactive JS tool (quiz app or weather widget using a free API) AND recreate a real site's landing page pixel-close.",
      ],
    ],
    final: [
      [
        "Plan & Setup",
        "Wireframe a community-helper app (volunteer board or resource-sharing site), set up repo and structure.",
        "Figma/paper + Git",
      ],
      [
        "Core Build",
        "Build core CRUD features — users can post/view/manage community resources.",
        "HTML, CSS, JS, Node, Express, SQLite",
      ],
      [
        "Polish & Document",
        "Add tests, write full documentation (README + setup guide), complete a self code-review checklist.",
        "Jest (optional), Markdown",
      ],
      [
        "Deploy & Present",
        "Deploy live (Netlify/Render), record a 3-5 min video presentation. Portfolio updates to v1.0.0.",
        "Netlify/Render",
      ],
    ],
    finalTitle: "Community-Helper Web App",
  },
  2: {
    weeks: [
      [
        "React fundamentals — components, props, state",
        "Full Stack Open (Part 1)",
        "Understands React's component model",
        "quiz",
        "React Component Logic",
        "React",
        "Solve component/props/state reasoning problems.",
      ],
      [
        "React — rendering, event handling",
        "Full Stack Open (Part 1-2)",
        "Can build interactive React UIs",
        "assignment",
        "Rebuild Sem 1 Site in React",
        "React",
        "Rebuild your Semester 1 static site as a React app.",
      ],
      [
        "UI/UX basics — design thinking",
        "Google UX Design (Coursera audit) / freeCodeCamp UI/UX",
        "Understands core UX principles",
        "activityA",
        "OSS UI Bug Fix",
        "Git/React",
        "Fix a UI bug on a beginner-tagged open-source repo.",
      ],
      [
        "Tailwind CSS fundamentals",
        "Official Tailwind docs",
        "Can style rapidly with utility classes",
        "activityB",
        "Blog: Vanilla JS to React",
        "Dev.to/Hashnode",
        "Write 'From Vanilla JS to React — What Changed'.",
      ],
      [
        "React Hooks — useState, useEffect",
        "Full Stack Open (Part 2)",
        "Manages state and side-effects in React",
        "quiz",
        "React Hooks Problems",
        "React",
        "Solve hooks/state-logic problems.",
      ],
      [
        "React Router & multi-page apps",
        "Full Stack Open (Part 2)",
        "Can build multi-page React apps",
        "assignment",
        "Multi-Component App + Routing",
        "React, React Router",
        "Build a multi-component app with client-side routing.",
      ],
      [
        "Accessibility & responsive UX",
        "web.dev / MDN accessibility docs",
        "Builds accessible, responsive interfaces",
        "activityA",
        "Social-Good Hackathon",
        "Any",
        "Join a hackathon tagged 'for good' on Devpost.",
      ],
      [
        "Component design patterns",
        "Full Stack Open",
        "Writes reusable, well-structured components",
        "activityB",
        "YouTube: UI/UX Teardown",
        "YouTube/OBS",
        "Record a video reviewing a popular app's UI/UX.",
      ],
      [
        "Node/Express + React integration",
        "Full Stack Open (Part 3)",
        "Connects a React frontend to an Express backend",
        "quiz",
        "API Design/REST Problems",
        "REST",
        "Solve REST API design reasoning problems.",
      ],
      [
        "Full-stack architecture patterns",
        "Full Stack Open (Part 3-4)",
        "Understands how frontend/backend fit together",
        "assignment",
        "Full-Stack App",
        "React, Express",
        "Build a connected React + Express full-stack app.",
      ],
      [
        "State management at scale",
        "Full Stack Open (Part 4)",
        "Manages complex application state",
        "activityA",
        "Internship Applications",
        "N/A",
        "Apply to remote internships/apprenticeships, even unpaid.",
      ],
      [
        "Testing fundamentals",
        "Full Stack Open (Part 5)",
        "Understands why and how to test apps",
        "activityB",
        "2 Freelance Gig Listings",
        "Upwork/Fiverr",
        "Publish 2 gig listings (web design, landing pages).",
      ],
      [
        "Testing — Jest & React Testing Library",
        "Full Stack Open (Part 5)",
        "Can write component tests",
        "quiz",
        "Testing/Debugging Problems",
        "Jest",
        "Solve testing and debugging scenario problems.",
      ],
      [
        "Test coverage & CI basics",
        "Full Stack Open (Part 5)",
        "Understands test coverage practices",
        "assignment",
        "Add Test Coverage",
        "Jest, RTL",
        "Add test coverage to your Month 4 full-stack app.",
      ],
      [
        "Teaching & content creation skills",
        "Self-directed",
        "Can explain technical concepts clearly",
        "activityA",
        "Volunteer Teaching",
        "Any",
        "Record a free coding tutorial for beginners.",
      ],
      [
        "Video production basics",
        "YouTube Creator Academy (free)",
        "Can produce a clean instructional video",
        "activityB",
        "Publish Teaching Tutorial",
        "YouTube",
        "Publish your beginner tutorial on YouTube.",
      ],
    ],
    midterm: [
      [
        "Clone with UX Polish",
        "React, Tailwind",
        "Redesign a minimal Notion/Twitter-style UI clone with strong UX polish and accessibility.",
      ],
      [
        "Reusable Component Library",
        "React, Tailwind",
        "Build and publish 5-6 reusable styled components with documentation.",
      ],
    ],
    final: [
      [
        "Plan & Wireframe",
        "Design a mini course/tutorial-sharing platform.",
        "Figma, React",
      ],
      [
        "Core Build",
        "Build the platform — course listing, content pages, routing.",
        "React, React Router",
      ],
      [
        "Test & Document",
        "Add tests, write documentation, complete peer code review via a dev community.",
        "Jest",
      ],
      [
        "Deploy & Present",
        "Deploy live, record video presentation. Portfolio updates to v2.0.0.",
        "Netlify/Vercel",
      ],
    ],
    finalTitle: "Creative-Teaching Platform",
  },
  3: {
    weeks: [
      [
        "Redux / advanced state management",
        "Full Stack Open (Part 6)",
        "Manages global state predictably",
        "quiz",
        "State Management Problems",
        "Redux",
        "Solve state-flow reasoning problems.",
      ],
      [
        "PostgreSQL fundamentals",
        "freeCodeCamp PostgreSQL course",
        "Can design and query relational databases",
        "assignment",
        "Migrate to PostgreSQL",
        "PostgreSQL",
        "Migrate a previous project's database to PostgreSQL.",
      ],
      [
        "Advanced Git & OSS workflows",
        "Open-source repo of choice",
        "Comfortable in larger collaborative codebases",
        "activityA",
        "OSS Help-Wanted Feature",
        "Git",
        "Take on a 'help wanted' feature (not just docs) on an OSS repo.",
      ],
      [
        "Technical writing",
        "Self-directed",
        "Can write clear technical blog content",
        "activityB",
        "Blog: DB Migration Story",
        "Dev.to/Hashnode",
        "Write about migrating from SQLite to PostgreSQL.",
      ],
      [
        "Docker basics",
        "Docker official 'Getting Started' docs",
        "Understands containerization fundamentals",
        "quiz",
        "Docker Concepts Quiz",
        "Docker",
        "Solve containerization concept questions.",
      ],
      [
        "Dockerizing full-stack apps",
        "Docker docs",
        "Can containerize a full-stack application",
        "assignment",
        "Dockerize a Full-Stack App",
        "Docker",
        "Fully Dockerize an existing full-stack project.",
      ],
      [
        "Structured programs — fellowships",
        "MLH Fellowship / Outreachy (if eligible)",
        "Gains exposure to structured mentorship programs",
        "activityA",
        "Apply to a Fellowship",
        "N/A",
        "Apply to and/or participate in a fellowship program.",
      ],
      [
        "Client communication basics",
        "Self-directed",
        "Can manage a small real client relationship",
        "activityB",
        "First Real/Simulated Client Project",
        "N/A",
        "Complete a first small paid or simulated client project.",
      ],
      [
        "Advanced Docker — multi-container apps",
        "Docker Compose official docs",
        "Can orchestrate multi-service apps",
        "quiz",
        "Docker Compose Concepts",
        "Docker Compose",
        "Solve multi-container orchestration questions.",
      ],
      [
        "Docker Compose in practice",
        "Docker Compose docs",
        "Runs a full-stack app via Compose",
        "assignment",
        "Compose Your Full Stack",
        "Docker Compose",
        "Convert your Dockerized app to use Docker Compose (app + DB in one command).",
      ],
      [
        "Environment variables & secrets management",
        "12-Factor App docs (free)",
        "Manages config/secrets safely",
        "activityA",
        "OSS Config/Infra Contribution",
        "Git, Docker",
        "Contribute an infra/config improvement to an OSS repo.",
      ],
      [
        "Writing technical READMEs",
        "Self-directed",
        "Writes documentation others can actually follow",
        "activityB",
        "Publish a Docker/DB Tutorial",
        "YouTube/Blog",
        "Publish a tutorial on Docker or PostgreSQL basics.",
      ],
      [
        "Database indexing & performance basics",
        "PostgreSQL official docs",
        "Understands query performance fundamentals",
        "quiz",
        "Query Performance Problems",
        "PostgreSQL",
        "Solve query optimization/indexing reasoning problems.",
      ],
      [
        "Backups & migrations",
        "PostgreSQL docs",
        "Can safely migrate and back up a database",
        "assignment",
        "Add Migrations to a Project",
        "PostgreSQL, node-pg-migrate",
        "Add a proper migration system to an existing DB project.",
      ],
      [
        "Working with fellowship/mentor feedback",
        "Self-directed",
        "Incorporates external code review feedback",
        "activityA",
        "Apply Fellowship Feedback",
        "N/A",
        "Apply feedback received from your fellowship/mentor to a real project.",
      ],
      [
        "Client project scoping",
        "freeCodeCamp freelancing course",
        "Can scope and price a small client project",
        "activityB",
        "Scope a 2nd Client Project",
        "N/A",
        "Draft a scope/proposal for a second real or simulated client project.",
      ],
    ],
    weeks2: null,
    midterm: [
      [
        "Dockerized Full-Stack CRUD",
        "Docker, PostgreSQL, Node/Express",
        "Build and Dockerize a full-stack CRUD app backed by PostgreSQL.",
      ],
      [
        "State-Heavy App",
        "React, Redux",
        "Build a state-management-heavy app (multi-step form or shopping cart).",
      ],
    ],
    final: [
      [
        "Plan & Architecture",
        "Design a resilience-themed tool (e.g. project management for volunteer orgs).",
        "TypeScript, PostgreSQL",
      ],
      [
        "Core Build",
        "Build core features with TypeScript, GraphQL or REST, PostgreSQL.",
        "TypeScript",
      ],
      [
        "Security & CI/CD",
        "Add auth, a security review checklist, and a CI/CD pipeline.",
        "JWT, GitHub Actions",
      ],
      [
        "Deploy & Present",
        "Deploy with Docker, record video presentation. Portfolio updates to v3.0.0.",
        "Docker",
      ],
    ],
    finalTitle: "Resilience-Themed SaaS Tool",
  },
  4: {
    weeks: [
      [
        "System design basics",
        "freeCodeCamp System Design (YouTube)",
        "Understands scalability trade-offs",
        "quiz",
        "System Design Scenarios",
        "System Design",
        "Solve system design scenario problems.",
      ],
      [
        "Next.js fundamentals — SSR/SSG",
        "Official Next.js 'Learn' course",
        "Can build server-rendered React apps",
        "assignment",
        "Migrate to Next.js",
        "Next.js",
        "Migrate a project to Next.js using SSR/SSG.",
      ],
      [
        "Internship hunting strategy",
        "Self-directed",
        "Has an active job-search pipeline",
        "activityA",
        "Apply to 10+ Internships",
        "N/A",
        "Apply to 10+ remote internships.",
      ],
      [
        "Technical blogging",
        "Self-directed",
        "Can write a compelling technical deep-dive",
        "activityB",
        "Blog: A Hard Bug Solved",
        "Dev.to/Hashnode",
        "Write a deep-dive on a hard bug you solved.",
      ],
      [
        "Cloud deployment (AWS/GCP free tier)",
        "Official free-tier docs",
        "Can deploy to real cloud infrastructure",
        "quiz",
        "Deployment/Scaling Quiz",
        "AWS/GCP",
        "Solve deployment and scaling concept questions.",
      ],
      [
        "Custom domains & DNS",
        "Render/Railway/Netlify docs",
        "Can point a real domain to a live app",
        "assignment",
        "Deploy With Real Domain",
        "DNS",
        "Deploy a project with a custom domain.",
      ],
      [
        "Competitive hackathons",
        "Devpost/MLH",
        "Builds under time pressure competitively",
        "activityA",
        "Hackathon — Aim to Place",
        "Any",
        "Join a hackathon aiming for placement/award.",
      ],
      [
        "Freelance client management",
        "freeCodeCamp freelancing course",
        "Can manage real paying client relationships",
        "activityB",
        "1-2 Real Paying Clients",
        "N/A",
        "Take on 1-2 real paying freelance clients.",
      ],
      [
        "Data structures & algorithms",
        "NeetCode 150 (LeetCode, free)",
        "Builds core DSA interview skills",
        "quiz",
        "LeetCode Medium — Arrays/Strings",
        "LeetCode",
        "Solve medium-level array/string problems.",
      ],
      [
        "Major OSS contribution",
        "A major open-source project",
        "Contributes meaningfully to production-grade code",
        "assignment",
        "Significant OSS Feature",
        "Git",
        "Contribute a significant feature to a major OSS project.",
      ],
      [
        "Interview readiness",
        "Self-directed",
        "Prepared for technical interview loops",
        "activityA",
        "Continue Internship/Fellowship",
        "N/A",
        "Continue internship/fellowship, aim for a reference.",
      ],
      [
        "Career storytelling",
        "Self-directed",
        "Can narrate their own growth compellingly",
        "activityB",
        "YouTube: My Journey Recap",
        "YouTube",
        "Record 'My 2-Year Self-Taught Dev Journey' recap.",
      ],
      [
        "DSA — trees & graphs",
        "NeetCode 150",
        "Solves tree/graph interview problems",
        "quiz",
        "LeetCode Medium — Trees/Graphs",
        "LeetCode",
        "Solve medium-level tree/graph problems.",
      ],
      [
        "Mock interview practice",
        "Pramp (free peer mock interviews)",
        "Comfortable in live technical interviews",
        "assignment",
        "Mock Technical Interviews",
        "Pramp",
        "Complete mock technical interviews via Pramp.",
      ],
      [
        "Client delivery",
        "Self-directed",
        "Delivers and closes out client projects professionally",
        "activityA",
        "Finalize Client Projects",
        "N/A",
        "Finalize freelance client project(s) #2-3.",
      ],
      [
        "Personal branding",
        "Self-directed",
        "Has a cohesive, professional online presence",
        "activityB",
        "Full Profile Overhaul",
        "LinkedIn/Resume",
        "Overhaul LinkedIn, resume, and portfolio site.",
      ],
    ],
    midterm: [
      [
        "SSR/SSG Next.js App",
        "Next.js",
        "Build and deploy a Next.js app with SSR/SSG, real domain, and analytics.",
      ],
      [
        "Scalability Case Study",
        "System Design",
        "Write and diagram a scalability case study for a hypothetical high-traffic app.",
      ],
    ],
    final: [
      [
        "Plan & Scope",
        "Define your capstone — synthesizing the full HCA identity (helping people + creativity + calm reliability + strategy).",
        "Next.js, full stack",
      ],
      ["Core Build", "Build the core of your flagship app.", "Next.js, Node"],
      [
        "Polish & Review",
        "Enterprise-level documentation, full code review, CI/CD pipeline.",
        "GitHub Actions",
      ],
      [
        "Deploy & Present",
        "Live deployment with custom domain, 5-8 min video walkthrough. Portfolio updates to v4.0.0.",
        "Vercel/AWS",
      ],
    ],
    finalTitle: "Capstone Flagship App",
  },
  5: {
    weeks: [
      [
        "GraphQL fundamentals",
        "Official GraphQL docs / freeCodeCamp",
        "Understands GraphQL query language",
        "quiz",
        "GraphQL Query Problems",
        "GraphQL",
        "Solve GraphQL query-writing problems.",
      ],
      [
        "Advanced API design",
        "Full Stack Open (Part 8)",
        "Can design a GraphQL API layer",
        "assignment",
        "GraphQL API Layer",
        "GraphQL, Node",
        "Build a GraphQL API layer for a past project.",
      ],
      [
        "Advanced OSS maintenance",
        "A project you've contributed to",
        "Understands maintainer-level responsibilities",
        "activityA",
        "Maintainer-Track OSS Role",
        "Git",
        "Take on a maintainer-track role on an OSS project.",
      ],
      [
        "Newsletter/audience building",
        "Self-directed",
        "Builds an ongoing public audience",
        "activityB",
        "Start a Dev Newsletter",
        "Substack/Beehiiv",
        "Start a dev newsletter or blog series.",
      ],
      [
        "Mobile-responsive PWA development",
        "web.dev PWA docs",
        "Understands installable, offline-capable apps",
        "quiz",
        "PWA/Service Worker Quiz",
        "PWA",
        "Solve PWA/service-worker concept questions.",
      ],
      [
        "Building a PWA",
        "web.dev",
        "Can convert an app into a PWA",
        "assignment",
        "Convert Project to PWA",
        "Service Workers",
        "Convert a project into an installable PWA.",
      ],
      [
        "Remote team collaboration",
        "Self-directed",
        "Comfortable in async/remote dev teams",
        "activityA",
        "Distributed Team Sprint",
        "Any",
        "Join a distributed OSS/remote team sprint.",
      ],
      [
        "Case study writing for niche work",
        "Self-directed",
        "Can present specialized work persuasively",
        "activityB",
        "Publish Specialization Case Study",
        "Blog",
        "Publish a specialization-focused case study.",
      ],
      [
        "Advanced DevOps — CI/CD pipelines",
        "GitHub Actions docs",
        "Builds robust automated pipelines",
        "quiz",
        "CI/CD Pipeline Quiz",
        "GitHub Actions",
        "Solve CI/CD pipeline concept questions.",
      ],
      [
        "Monitoring & logging basics",
        "Free-tier tools (Sentry, LogRocket docs)",
        "Can monitor a live app for errors",
        "assignment",
        "Add Monitoring",
        "Sentry/LogRocket",
        "Add monitoring/error tracking to a live project.",
      ],
      [
        "Community building",
        "Self-directed",
        "Can organize and lead a small dev event",
        "activityA",
        "Host a Coding Event",
        "Any",
        "Host or co-host a small community coding event.",
      ],
      [
        "Video content strategy",
        "YouTube Creator Academy",
        "Produces consistent educational content",
        "activityB",
        "Specialization Tutorial Video",
        "YouTube",
        "Publish a specialization tutorial video.",
      ],
      [
        "Advanced authentication (OAuth)",
        "Official OAuth2 docs",
        "Understands third-party auth flows",
        "quiz",
        "OAuth/Auth-Flow Problems",
        "OAuth2",
        "Solve OAuth/authentication-flow problems.",
      ],
      [
        "Implementing OAuth",
        "Auth0/Clerk free-tier docs",
        "Can add real third-party login",
        "assignment",
        "Add OAuth Login",
        "Auth0/Clerk",
        "Add third-party OAuth login to a project.",
      ],
      [
        "Freelance scaling",
        "Self-directed",
        "Manages multiple concurrent clients",
        "activityA",
        "3rd-4th Paying Client",
        "N/A",
        "Take on a 3rd or 4th paying client project.",
      ],
      [
        "Portfolio storytelling",
        "Self-directed",
        "Frames work in terms of outcomes/impact",
        "activityB",
        "Rewrite Portfolio Descriptions",
        "Portfolio",
        "Rewrite project descriptions with outcome/impact framing.",
      ],
    ],
    midterm: [
      [
        "GraphQL-Powered App",
        "GraphQL, Node",
        "Build an app with a GraphQL API layer connected to a React frontend.",
      ],
      [
        "Installable PWA",
        "PWA, Service Workers",
        "Convert an existing project into a fully installable, offline-capable PWA.",
      ],
    ],
    final: [
      [
        "Choose & Plan",
        "Pick a specialization track (PWA, GraphQL platform, or DevOps-heavy app) and plan it.",
        "Varies by track",
      ],
      [
        "Core Build",
        "Build the specialization-focused core features.",
        "Varies by track",
      ],
      [
        "Harden & Document",
        "Add monitoring, auth, tests, and full documentation.",
        "Sentry, Auth0",
      ],
      [
        "Deploy & Present",
        "Deploy and record video presentation. Portfolio updates to v5.0.0.",
        "Cloud host of choice",
      ],
    ],
    finalTitle: "Specialization Deep-Dive Project",
  },
  6: {
    weeks: [
      [
        "Advanced system architecture",
        "freeCodeCamp System Design + case studies",
        "Reasons about large-scale architecture trade-offs",
        "quiz",
        "Architecture Trade-Off Problems",
        "System Design",
        "Solve architecture trade-off scenario problems.",
      ],
      [
        "Microservices vs monolith basics",
        "Free architecture articles/docs",
        "Understands major architecture patterns",
        "assignment",
        "Capstone Architecture Doc",
        "Docs",
        "Draft an architecture document for your capstone.",
      ],
      [
        "Negotiation & client contracts basics",
        "Self-directed",
        "Understands basic freelance contract terms",
        "activityA",
        "Capstone-Scale Client/Apprenticeship",
        "N/A",
        "Take on a capstone-scale freelance client or apprenticeship.",
      ],
      [
        "Public speaking for developers",
        "Self-directed",
        "Comfortable presenting technical work aloud",
        "activityB",
        "Record a Tech-Talk Video",
        "YouTube",
        "Record a tech-talk style video on a mastered topic.",
      ],
      [
        "Advanced testing strategies",
        "Full Stack Open (Part 5) + Cypress docs",
        "Understands end-to-end testing strategy",
        "quiz",
        "E2E Testing Quiz",
        "Cypress",
        "Solve E2E testing concept questions.",
      ],
      [
        "E2E testing implementation",
        "Cypress free docs",
        "Can write end-to-end tests",
        "assignment",
        "Add E2E Tests",
        "Cypress",
        "Add E2E tests to your in-progress capstone.",
      ],
      [
        "Job interview loop prep",
        "Self-directed",
        "Prepared for full interview loops",
        "activityA",
        "3+ Mock/Real Interview Rounds",
        "N/A",
        "Complete 3+ real mock or company interview rounds.",
      ],
      [
        "Public speaking / personal brand website",
        "Self-directed",
        "Has an independent professional web presence",
        "activityB",
        "Launch Personal Brand Site",
        "Domain/Hosting",
        "Launch a standalone personal brand/portfolio domain.",
      ],
      [
        "Salary negotiation & offers",
        "Self-directed / free guides",
        "Understands how to evaluate and negotiate offers",
        "quiz",
        "Negotiation Scenario Quiz",
        "Career",
        "Solve salary-negotiation scenario questions.",
      ],
      [
        "Resume & application tailoring",
        "Self-directed",
        "Can tailor applications to specific roles",
        "assignment",
        "Apply to 15+ Roles/Leads",
        "Resume",
        "Tailor resume and apply to 15+ full-time roles or client leads.",
      ],
      [
        "Long-term OSS/community involvement",
        "Chosen OSS project",
        "Sustains a long-term open-source relationship",
        "activityA",
        "Formalize an OSS/Community Role",
        "Git",
        "Formalize an ongoing OSS or community role.",
      ],
      [
        "Building a personal brand narrative",
        "Self-directed",
        "Can tell a compelling career story publicly",
        "activityB",
        "Publish '2-Year Journey' Story",
        "Blog/YouTube",
        "Publish your full 2-year journey capstone story.",
      ],
      [
        "Final interview prep — behavioral + technical",
        "Pramp + self-directed",
        "Fully interview-ready across both dimensions",
        "quiz",
        "Behavioral + Technical Mock Quiz",
        "Interview Prep",
        "Solve a combined behavioral/technical mock quiz.",
      ],
      [
        "Offer evaluation",
        "Self-directed",
        "Can evaluate and compare job offers",
        "assignment",
        "Final Round Mock Interviews",
        "Pramp",
        "Complete final round mock interviews.",
      ],
      [
        "Client retention strategy",
        "Self-directed",
        "Can secure repeat or ongoing work",
        "activityA",
        "Secure a Retainer/Offer Conversation",
        "N/A",
        "Secure a retainer client or advance a job offer conversation.",
      ],
      [
        "Portfolio finalization",
        "Self-directed",
        "Ships a fully polished, professional portfolio",
        "activityB",
        "Final Portfolio Polish Pass",
        "Portfolio",
        "Final polish pass on your entire portfolio site.",
      ],
    ],
    midterm: [
      [
        "Capstone Architecture Build",
        "Full stack of choice",
        "Build out the core architecture and backend of your capstone project.",
      ],
      [
        "Capstone Frontend & Integration",
        "React/Next.js",
        "Build and integrate the frontend, connect to backend, add E2E tests.",
      ],
    ],
    final: [
      [
        "Finalize Scope",
        "Lock scope for your true capstone — must synthesize the full HCA identity end-to-end.",
        "Full stack",
      ],
      [
        "Build & Integrate",
        "Complete full build — frontend, backend, database, auth, tests.",
        "Full stack",
      ],
      [
        "Enterprise Polish",
        "Enterprise-level docs, full code review, CI/CD, security pass.",
        "GitHub Actions",
      ],
      [
        "Launch & Present",
        "Deploy with custom domain, record final 5-8 min video presentation. Portfolio reaches v6.0.0. Program complete.",
        "Custom domain",
      ],
    ],
    finalTitle: "Flagship Capstone — Full Synthesis",
  },
};

const SUGGESTED_SCHEDULE = [
  {
    time: "7:30 AM – 8:00 AM",
    icon: "fa-mug-hot",
    title: "Wake & Warm-Up",
    desc: "Light routine, no screens. Review yesterday's notes over breakfast.",
  },
  {
    time: "9:00 AM – 11:00 AM",
    icon: "fa-brain",
    title: "Session 1 — Deep Study",
    desc: "New concepts, tutorials, reading. Your brain is freshest — use it for the hardest material.",
  },
  {
    time: "11:00 AM – 11:20 AM",
    icon: "fa-person-walking",
    title: "Break",
    desc: "Step away from the screen completely.",
  },
  {
    time: "11:20 AM – 1:00 PM",
    icon: "fa-code",
    title: "Session 2 — Practice & Build",
    desc: "Apply what you studied — coding exercises, assignment work.",
  },
  {
    time: "1:00 PM – 2:00 PM",
    icon: "fa-utensils",
    title: "Lunch Break",
    desc: "Full break — no coding.",
  },
  {
    time: "2:00 PM – 4:00 PM",
    icon: "fa-diagram-project",
    title: "Session 3 — Project / Activity Work",
    desc: "Work on midterm/final project pieces, or this week's Activity A/B task.",
  },
  {
    time: "4:00 PM – 4:30 PM",
    icon: "fa-mug-saucer",
    title: "Break",
    desc: "Rest before the final push.",
  },
  {
    time: "4:30 PM – 5:30 PM",
    icon: "fa-magnifying-glass",
    title: "Session 4 — Review & Debug",
    desc: "Review the day's code, fix bugs, read docs for tomorrow.",
  },
  {
    time: "8:00 PM – 8:30 PM",
    icon: "fa-pen",
    title: "Evening Log",
    desc: "Write 2-3 lines in your Notebook tab: what you learned, what's blocking you.",
  },
];

/* =========================================================
   DATA MODEL
   ========================================================= */
function buildNodes(semId) {
  // returns ordered list of 22 nodes: 8 individual, midterm(2), 8 individual, final(4)
  const c = CURRICULUM[semId];
  const nodes = [];
  let contentIdx = 0;
  const weightStudy = 15 / 16,
    weightQuiz = 10 / 4,
    weightAssign = 15 / 4,
    weightA = 10 / 4,
    weightB = 10 / 4;
  const weightMap = {
    quiz: weightQuiz,
    assignment: weightAssign,
    activityA: weightA,
    activityB: weightB,
  };

  // weeks 1-8
  for (let w = 1; w <= 8; w++) {
    const [sConcept, sPlatform, sOutcome, tType, tTitle, tStack, tBrief] =
      c.weeks[contentIdx++];
    nodes.push({
      key: `w${w}`,
      kind: "single",
      weekNum: w,
      weekSpan: 1,
      study: {
        label: sConcept,
        platform: sPlatform,
        outcome: sOutcome,
        weight: weightStudy,
        status: "unmarked",
      },
      task: {
        type: tType,
        title: tTitle,
        stack: tStack,
        brief: tBrief,
        weight: weightMap[tType],
        status: "unmarked",
      },
    });
  }
  // midterm 9-10, 11-12
  nodes.push({
    key: "mid1",
    kind: "midterm",
    weekNum: 9,
    weekSpan: 2,
    label: "Week 9-10",
    task: {
      type: "midterm",
      title: c.midterm[0][0],
      stack: c.midterm[0][1],
      brief: c.midterm[0][2],
      weight: 10,
      status: "unmarked",
    },
  });
  nodes.push({
    key: "mid2",
    kind: "midterm",
    weekNum: 11,
    weekSpan: 2,
    label: "Week 11-12",
    task: {
      type: "midterm",
      title: c.midterm[1][0],
      stack: c.midterm[1][1],
      brief: c.midterm[1][2],
      weight: 10,
      status: "unmarked",
    },
  });
  // weeks 13-20
  for (let w = 13; w <= 20; w++) {
    const [sConcept, sPlatform, sOutcome, tType, tTitle, tStack, tBrief] =
      c.weeks[contentIdx++];
    nodes.push({
      key: `w${w}`,
      kind: "single",
      weekNum: w,
      weekSpan: 1,
      study: {
        label: sConcept,
        platform: sPlatform,
        outcome: sOutcome,
        weight: weightStudy,
        status: "unmarked",
      },
      task: {
        type: tType,
        title: tTitle,
        stack: tStack,
        brief: tBrief,
        weight: weightMap[tType],
        status: "unmarked",
      },
    });
  }
  // final 21-24
  for (let i = 0; i < 4; i++) {
    const w = 21 + i;
    const [phaseTitle, brief, stack] = c.final[i];
    nodes.push({
      key: `w${w}`,
      kind: "final",
      weekNum: w,
      weekSpan: 1,
      label: `Week ${w}`,
      task: {
        type: "final",
        title: `${c.finalTitle} — ${phaseTitle}`,
        stack: stack,
        brief: brief,
        weight: 5,
        status: "unmarked",
      },
    });
  }
  return nodes;
}

function buildDefaultData() {
  const semesters = SEM_META.map((meta, si) => {
    const nodes = buildNodes(meta.id);
    if (si === 0) nodes[0].unlocked = true;
    return {
      ...meta,
      unlocked: si === 0,
      nodes,
      notebook: {},
      badgeEarned: false,
    };
  });
  return {
    profileName: "",
    theme: "light",
    currentSemester: 1,
    currentNodeKey: "w1",
    programStart: Date.now(),
    semesters,
    congratsShown: {},
  };
}
function loadData() {
  const raw = localStorage.getItem("hcaData");
  if (!raw) return buildDefaultData();
  try {
    const d = JSON.parse(raw);
    if (!d.semesters || !d.semesters[0].nodes) return buildDefaultData();
    return d;
  } catch (e) {
    return buildDefaultData();
  }
}
function saveData() {
  localStorage.setItem("hcaData", JSON.stringify(DATA));
}
let DATA = loadData();

/* =========================================================
   HELPERS
   ========================================================= */
function getSem(id) {
  return DATA.semesters.find((s) => s.id === id);
}
function nodeItems(node) {
  const items = [];
  if (node.study) items.push(node.study);
  items.push(node.task);
  return items;
}
function nodeDone(node) {
  return nodeItems(node).every((i) => i.status === "done");
}
function semCompletionPct(sem) {
  let earned = 0;
  sem.nodes.forEach((n) =>
    nodeItems(n).forEach((i) => {
      if (i.status === "done") earned += i.weight;
    }),
  );
  return Math.min(100, Math.round(earned));
}
function courseCompletionPct() {
  let total = 0;
  DATA.semesters.forEach((sem) => {
    total += (semCompletionPct(sem) * (100 / 6)) / 100;
  });
  return Math.round(total * 10) / 10;
}
function unlockLogic() {
  DATA.semesters.forEach((sem, si) => {
    sem.nodes.forEach((n, ni) => {
      if (ni === 0) return;
      if (nodeDone(sem.nodes[ni - 1])) n.unlocked = true;
    });
    const semFullyDone = sem.nodes.every((n) => nodeDone(n));
    if (semFullyDone) {
      if (!sem.badgeEarned) {
        sem.badgeEarned = true;
        pendingBadgeSem = sem.id;
      }
      if (DATA.semesters[si + 1] && !DATA.semesters[si + 1].unlocked) {
        DATA.semesters[si + 1].unlocked = true;
        DATA.semesters[si + 1].nodes[0].unlocked = true; // req #6: only first week unlocks
      }
    }
  });
}
let pendingBadgeSem = null;

/* Deadline calc: sequential cumulative days from programStart per semester */
function nodeDeadline(semId, nodeIndex) {
  const sem = getSem(semId);
  const semStart =
    DATA.programStart + (semId - 1) * 24 * 7 * 24 * 60 * 60 * 1000;
  let cumDays = 0;
  for (let i = 0; i <= nodeIndex; i++) {
    cumDays += sem.nodes[i].weekSpan * 7;
  }
  return semStart + cumDays * 24 * 60 * 60 * 1000;
}
function semesterEndDate(semId) {
  const sem = getSem(semId);
  return nodeDeadline(semId, sem.nodes.length - 1);
}
function formatCountdownLong(targetMs) {
  const diff = targetMs - Date.now();
  if (diff <= 0) return "Deadline passed";
  const days = Math.floor(diff / 86400000);
  const months = Math.floor(days / 30);
  const remDays = days % 30;
  return months > 0 ? `${months}m ${remDays}d left` : `${days}d left`;
}
function formatCountdownShort(targetMs) {
  const diff = targetMs - Date.now();
  if (diff <= 0) return "Deadline passed";
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  return `${days}d ${hours}h left`;
}
function nodeLabel(node) {
  if (node.kind === "single" || node.kind === "final")
    return `Week ${node.weekNum}`;
  return node.label;
}

/* =========================================================
   RENDER: DASHBOARD
   ========================================================= */
function renderDashboard() {
  document.getElementById("dashName").textContent = DATA.profileName
    ? `, ${DATA.profileName}`
    : "";
  const grid = document.getElementById("semGrid");
  grid.innerHTML = "";
  DATA.semesters.forEach((sem) => {
    const pct = semCompletionPct(sem);
    const div = document.createElement("div");
    div.className = "sem-card" + (sem.unlocked ? "" : " locked");
    const deadline = sem.unlocked
      ? formatCountdownLong(semesterEndDate(sem.id))
      : "Locked";
    div.innerHTML = `
      <div class="sem-card-top">
        <span class="sem-badge">${sem.unlocked ? "In Progress" : "Locked"}</span>
        <span><i class="fa-solid ${sem.unlocked ? "fa-lock-open" : "fa-lock"}"></i></span>
      </div>
      <h3>${sem.name}${sem.badgeEarned ? ' <i class="fa-solid fa-medal" style="color:var(--secondary);"></i>' : ""}</h3>
      <div class="sem-level">${sem.level}</div>
      <div class="deadline-chip"><i class="fa-regular fa-clock"></i> ${deadline}</div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="progress-label"><span>${pct}% complete</span><span>24 weeks</span></div>
    `;
    if (sem.unlocked) {
      div.addEventListener("click", () => {
        DATA.currentSemester = sem.id;
        saveData();
        switchTab("semester");
        renderSemester();
      });
    }
    grid.appendChild(div);
  });
}

/* =========================================================
   RENDER: SEMESTER (path)
   ========================================================= */
function renderSemester() {
  const chips = document.getElementById("semChips");
  chips.innerHTML = "";
  DATA.semesters.forEach((sem) => {
    const btn = document.createElement("button");
    btn.className = "chip" + (sem.id === DATA.currentSemester ? " active" : "");
    btn.textContent = sem.name;
    btn.disabled = !sem.unlocked;
    btn.addEventListener("click", () => {
      DATA.currentSemester = sem.id;
      saveData();
      renderSemester();
    });
    chips.appendChild(btn);
  });

  const sem = getSem(DATA.currentSemester);
  document.getElementById("semTitle").textContent =
    `${sem.name} — ${sem.level}`;
  const pct = semCompletionPct(sem);

  const track = document.getElementById("topProgressTrack");
  track
    .querySelectorAll(".milestone,.milestone-label")
    .forEach((el) => el.remove());
  document.getElementById("topProgressFill").style.width = pct + "%";
  [
    { pos: 45, label: "Midterm", at: 45 },
    { pos: 100, label: "Final", at: 100 },
  ].forEach((m) => {
    const dot = document.createElement("div");
    dot.className = "milestone" + (pct >= m.at ? " reached" : "");
    dot.style.left = m.pos + "%";
    dot.innerHTML =
      pct >= m.at
        ? '<i class="fa-solid fa-check"></i>'
        : '<i class="fa-solid fa-flag"></i>';
    track.appendChild(dot);
    const lbl = document.createElement("div");
    lbl.className = "milestone-label";
    lbl.style.left = m.pos + "%";
    lbl.textContent = m.label;
    track.appendChild(lbl);
  });

  const pathWrap = document.getElementById("pathWrap");
  pathWrap.innerHTML = `<div class="path-line"></div>`;
  sem.nodes.forEach((n, i) => {
    const row = document.createElement("div");
    row.className = "week-node-row " + (i % 2 === 0 ? "left" : "right");
    const done = nodeDone(n);
    const isMilestone = n.kind === "midterm" || n.kind === "final";
    const node = document.createElement("div");
    node.className =
      "week-node" +
      (!n.unlocked ? " locked" : "") +
      (n.unlocked && !done ? " current" : "") +
      (done ? " complete" : "") +
      (isMilestone ? " milestone-node" : "");
    const dl = n.unlocked ? formatCountdownShort(nodeDeadline(sem.id, i)) : "";
    node.innerHTML = `
      <div class="circle">${n.unlocked ? (done ? '<i class="fa-solid fa-check"></i>' : n.weekNum) : '<i class="fa-solid fa-lock"></i>'}</div>
      <div>
        <div class="week-node-text">${nodeLabel(n)}${n.kind === "midterm" ? " — Midterm Project" : ""}${n.kind === "final" ? " — Final Project" : ""}</div>
        <div class="week-node-sub">${n.unlocked ? (done ? "Completed" : dl) : "Locked"}</div>
      </div>
    `;
    if (n.unlocked) {
      node.addEventListener("click", () => {
        DATA.currentSemester = sem.id;
        DATA.currentNodeKey = n.key;
        saveData();
        switchTab("weekly");
        renderWeekly();
      });
    }
    row.appendChild(node);
    pathWrap.appendChild(row);
  });
}

/* =========================================================
   RENDER: WEEKLY TODO
   ========================================================= */
function activeNode() {
  const sem = getSem(DATA.currentSemester);
  let node = sem.nodes.find((n) => n.key === DATA.currentNodeKey);
  if (!node || !node.unlocked)
    node = sem.nodes.find((n) => n.unlocked && !nodeDone(n)) || sem.nodes[0];
  DATA.currentNodeKey = node.key;
  return { sem, node };
}

function renderWeekly() {
  const { sem, node } = activeNode();
  const nIndex = sem.nodes.findIndex((n) => n.key === node.key);

  document.getElementById("weeklyWeekLabel").textContent =
    `${sem.name} · ${nodeLabel(node)}`;
  const items = nodeItems(node);
  const doneCount = items.filter((i) => i.status === "done").length;
  document.getElementById("weeklyProgressLabel").textContent =
    `${doneCount} / ${items.length} completed`;
  document.getElementById("weeklyProgressFill").style.width =
    `${Math.round((doneCount / items.length) * 100)}%`;
  document.getElementById("weeklyDeadlineChip").innerHTML =
    `<i class="fa-regular fa-clock"></i> ${formatCountdownShort(nodeDeadline(sem.id, nIndex))}`;

  renderOverviewTab(sem, node);
  renderTasksTab(sem, node);
  renderNotebookTab(sem, node);
  renderScheduleTab();
  renderWeeklyPath(sem);
}

function renderOverviewTab(sem, node) {
  const el = document.getElementById("wtab-overview");
  let html = "";
  if (node.kind === "single") {
    html += `
    <div class="overview-card">
      <h4><i class="fa-solid fa-book"></i> What You'll Study</h4>
      <p>${node.study.label}</p>
      <div class="overview-row">
        <span class="pill accent"><i class="fa-solid fa-graduation-cap"></i> ${node.study.platform}</span>
        <span class="pill"><i class="fa-solid fa-bullseye"></i> Outcome: ${node.study.outcome}</span>
      </div>
    </div>`;
  }
  const typeLabel = {
    quiz: "Quiz",
    assignment: "Assignment",
    activityA: "Activity A",
    activityB: "Activity B",
    midterm: "Midterm Project",
    final: "Final Project",
  }[node.task.type];
  html += `
  <div class="overview-card">
    <h4><i class="fa-solid fa-star"></i> ${typeLabel}: ${node.task.title}</h4>
    <p>${node.task.brief}</p>
    <div class="overview-row">
      <span class="pill orange"><i class="fa-solid fa-layer-group"></i> Tech: ${node.task.stack}</span>
      <span class="pill"><i class="fa-solid fa-percent"></i> Worth ${node.task.weight.toFixed(2)}% of this semester</span>
      <span class="pill"><i class="fa-solid fa-folder"></i> Goes into your Portfolio's Code Labs</span>
    </div>
  </div>`;
  el.innerHTML = html;
}

function cycleStatus(status) {
  if (status === "unmarked") return "done";
  if (status === "done") return "incomplete";
  return "unmarked";
}
function renderTasksTab(sem, node) {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  nodeItems(node).forEach((item) => {
    const isStudy = item === node.study;
    const card = document.createElement("div");
    card.className = "task-card";
    const icon =
      item.status === "done"
        ? '<i class="fa-solid fa-check"></i>'
        : item.status === "incomplete"
          ? '<i class="fa-solid fa-xmark"></i>'
          : "";
    const title = isStudy ? `Studied: ${item.label}` : `${item.title}`;
    card.innerHTML = `
      <div class="task-check ${item.status}">${icon}</div>
      <div class="task-info">
        <div class="task-title">${isStudy ? "" : '<span class="star">★</span>'}${title}</div>
        <div class="task-type">${isStudy ? "Study concept" : "Graded task"}</div>
      </div>
      <div class="task-weight">${item.weight.toFixed(2)}%</div>
    `;
    card.querySelector(".task-check").addEventListener("click", () => {
      const wasFullyDone = nodeDone(node);
      item.status = cycleStatus(item.status);
      unlockLogic();
      saveData();
      const nowFullyDone = nodeDone(node);
      renderWeekly();
      renderSemester();
      renderDashboard();
      renderGradebook();
      renderProfile();
      if (!wasFullyDone && nowFullyDone) showCongrats(sem, node);
    });
    list.appendChild(card);
  });
}

function renderNotebookTab(sem, node) {
  const listEl = document.getElementById("notebookList");
  const key = `${sem.id}_${node.key}`;
  const entries = sem.notebook[key] || [];
  listEl.innerHTML = "";
  entries.forEach((e, idx) => {
    const div = document.createElement("div");
    div.className = "notebook-item" + (e.checked ? " checked" : "");
    div.innerHTML = `<input type="checkbox" ${e.checked ? "checked" : ""}> <span>${e.text}</span> ${e.date ? `<span class="nb-date">${e.date}</span>` : ""} <button class="nb-del"><i class="fa-solid fa-trash"></i></button>`;
    div.querySelector("input").addEventListener("change", () => {
      e.checked = !e.checked;
      saveData();
      renderNotebookTab(sem, node);
    });
    div.querySelector(".nb-del").addEventListener("click", () => {
      entries.splice(idx, 1);
      saveData();
      renderNotebookTab(sem, node);
    });
    listEl.appendChild(div);
  });
  const addBtn = document.getElementById("notebookAddBtn");
  addBtn.onclick = () => {
    const input = document.getElementById("notebookInput");
    const dateInput = document.getElementById("notebookDate");
    if (!input.value.trim()) return;
    if (!sem.notebook[key]) sem.notebook[key] = [];
    sem.notebook[key].push({
      text: input.value.trim(),
      date: dateInput.value,
      checked: false,
    });
    input.value = "";
    dateInput.value = "";
    saveData();
    renderNotebookTab(sem, node);
  };
}

function renderScheduleTab() {
  const el = document.getElementById("scheduleList");
  el.innerHTML = "";
  SUGGESTED_SCHEDULE.forEach((s) => {
    const div = document.createElement("div");
    div.className = "schedule-item";
    div.innerHTML = `<div class="schedule-time"><i class="fa-solid ${s.icon}"></i> ${s.time}</div>
      <div class="schedule-info"><strong>${s.title}</strong><span>${s.desc}</span></div>`;
    el.appendChild(div);
  });
}

function renderWeeklyPath(sem) {
  const scroll = document.getElementById("weeklyPathScroll");
  scroll.innerHTML = "";
  sem.nodes.forEach((n) => {
    const done = nodeDone(n);
    const isCurrent = n.key === DATA.currentNodeKey;
    const d = document.createElement("div");
    d.className = "day-node" + (!n.unlocked ? " locked" : "");
    d.innerHTML = `<div class="day-circle ${done ? "done" : ""} ${isCurrent ? "current" : ""}">${n.unlocked ? (done ? '<i class="fa-solid fa-check"></i>' : n.weekNum) : '<i class="fa-solid fa-lock"></i>'}</div><span>${n.kind === "midterm" ? n.label.replace("Week ", "") : "W" + n.weekNum}</span>`;
    if (n.unlocked) {
      d.addEventListener("click", () => {
        DATA.currentNodeKey = n.key;
        saveData();
        renderWeekly();
      });
    }
    scroll.appendChild(d);
  });
}

/* =========================================================
   RENDER: GRADEBOOK
   ========================================================= */
function renderGradebook() {
  const rows = document.getElementById("gradeRows");
  rows.innerHTML = "";
  DATA.semesters.forEach((sem) => {
    sem.nodes.forEach((n) => {
      nodeItems(n).forEach((item) => {
        if (item.status === "unmarked") return;
        const isStudy = item === n.study;
        const label = isStudy
          ? `${nodeLabel(n)} — Study: ${item.label}`
          : `${nodeLabel(n)} — ${item.title}`;
        const type = isStudy ? "study" : item.type;
        const pillClass =
          item.status === "done"
            ? ""
            : item.status === "incomplete"
              ? "incomplete"
              : "unmarked";
        const semPct =
          item.status === "done" ? item.weight.toFixed(2) + "%" : "0%";
        const coursePct =
          item.status === "done"
            ? ((item.weight * (100 / 6)) / 100).toFixed(3) + "%"
            : "0%";
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${sem.name}</td><td>${label}</td><td>${type}</td>
          <td><span class="grade-pill ${pillClass}">${item.status}</span></td>
          <td>${semPct}</td><td>${coursePct}</td>`;
        rows.appendChild(tr);
      });
    });
  });
  const total = courseCompletionPct();
  document.getElementById("courseTotalPct").textContent = total + "%";
  document.getElementById("courseTotalFill").style.width = total + "%";
}

/* =========================================================
   RENDER: PROFILE
   ========================================================= */
const BADGE_ICONS = [
  "fa-seedling",
  "fa-code-branch",
  "fa-database",
  "fa-rocket",
  "fa-diagram-project",
  "fa-crown",
];
function renderProfile() {
  const grid = document.getElementById("badgeGrid");
  const earned = DATA.semesters.filter((s) => s.badgeEarned);
  if (earned.length === 0) {
    grid.innerHTML = `<p class="muted-sm">Complete a semester to earn your first badge.</p>`;
    return;
  }
  grid.innerHTML = "";
  earned.forEach((sem) => {
    const div = document.createElement("div");
    div.className = "badge-item";
    div.innerHTML = `<div class="badge-icon"><i class="fa-solid ${BADGE_ICONS[sem.id - 1]}"></i></div><span>${sem.name} Complete</span>`;
    grid.appendChild(div);
  });
}

/* =========================================================
   TABS
   ========================================================= */
function switchTab(id) {
  document
    .querySelectorAll(".tab-content")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".nav-link")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelector(`.nav-link[data-tab="${id}"]`).classList.add("active");
}
document.querySelectorAll(".nav-link").forEach((btn) => {
  btn.addEventListener("click", () => {
    switchTab(btn.dataset.tab);
    if (btn.dataset.tab === "dashboard") renderDashboard();
    if (btn.dataset.tab === "semester") renderSemester();
    if (btn.dataset.tab === "weekly") renderWeekly();
    if (btn.dataset.tab === "gradebook") renderGradebook();
    if (btn.dataset.tab === "profile") renderProfile();
  });
});
document.querySelectorAll("#weeklyTabs .tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("#weeklyTabs .tab-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".wtab-content")
      .forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`wtab-${btn.dataset.wtab}`).classList.add("active");
  });
});
document.getElementById("gbTabGrades").addEventListener("click", () => {
  document.getElementById("gbTabGrades").classList.add("active");
  document.getElementById("gbTabScheme").classList.remove("active");
  document.getElementById("gbGrades").style.display = "block";
  document.getElementById("gbScheme").style.display = "none";
});
document.getElementById("gbTabScheme").addEventListener("click", () => {
  document.getElementById("gbTabScheme").classList.add("active");
  document.getElementById("gbTabGrades").classList.remove("active");
  document.getElementById("gbScheme").style.display = "block";
  document.getElementById("gbGrades").style.display = "none";
});

/* =========================================================
   PROFILE ACTIONS
   ========================================================= */
document.getElementById("profileNameInput").value = DATA.profileName || "";
document.getElementById("saveProfileBtn").addEventListener("click", () => {
  DATA.profileName = document.getElementById("profileNameInput").value.trim();
  saveData();
  renderDashboard();
});
document.getElementById("resetBtn").addEventListener("click", () => {
  if (confirm("This will erase ALL progress. Continue?")) {
    localStorage.removeItem("hcaData");
    DATA = loadData();
    renderAll();
  }
});

/* Theme */
const themeSwitch = document.getElementById("themeSwitch");
function applyTheme() {
  document.documentElement.setAttribute("data-theme", DATA.theme);
  themeSwitch.checked = DATA.theme === "dark";
}
themeSwitch.addEventListener("change", () => {
  DATA.theme = themeSwitch.checked ? "dark" : "light";
  saveData();
  applyTheme();
});

/* =========================================================
   SHARE CARDS (canvas)
   ========================================================= */
function drawAchievementCard(sem, node) {
  const canvas = document.getElementById("shareCanvas");
  const ctx = canvas.getContext("2d");
  const dark = DATA.theme === "dark";
  ctx.fillStyle = dark ? "#181113" : "#FFFDF9";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  grad.addColorStop(0, "#E8863A");
  grad.addColorStop(1, "#B33A6E");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, 14);

  ctx.fillStyle = dark ? "#F5EDE4" : "#292323";
  ctx.font = "bold 34px sans-serif";
  ctx.fillText("HCA — Code with Purpose", 60, 90);

  ctx.font = "20px sans-serif";
  ctx.fillStyle = dark ? "#B8A8A5" : "#7A7270";
  ctx.fillText(
    DATA.profileName
      ? `${DATA.profileName} just leveled up 🎉`
      : "Achievement unlocked 🎉",
    60,
    128,
  );

  ctx.font = "bold 26px sans-serif";
  ctx.fillStyle = dark ? "#F5EDE4" : "#292323";
  wrapText(
    ctx,
    `Completed: ${nodeLabel(node)} — ${node.task.title}`,
    60,
    200,
    880,
    34,
  );

  if (node.study) {
    ctx.font = "18px sans-serif";
    ctx.fillStyle = dark ? "#B8A8A5" : "#7A7270";
    wrapText(ctx, `Studied: ${node.study.label}`, 60, 280, 880, 26);
  }

  let ty = 360;
  ctx.font = "bold 15px sans-serif";
  ctx.fillStyle = dark ? "#F5EDE4" : "#292323";
  ctx.fillText("TECH STACK", 60, ty);
  ty += 34;
  node.task.stack.split(",").forEach((t) => {
    const w = ctx.measureText(t.trim()).width + 30;
    const g2 = ctx.createLinearGradient(60, 0, 60 + w, 0);
    g2.addColorStop(0, "#E8863A");
    g2.addColorStop(1, "#B33A6E");
    ctx.fillStyle = g2;
    roundRect(ctx, 60, ty - 22, w, 32, 16);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "14px sans-serif";
    ctx.fillText(t.trim(), 75, ty);
    ty += 44;
  });

  ctx.font = "italic 14px sans-serif";
  ctx.fillStyle = dark ? "#B8A8A5" : "#7A7270";
  ctx.fillText(`${sem.name} · Humanitarian Code Academy`, 60, 560);
  return canvas;
}
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let cy = y;
  words.forEach((w) => {
    const test = line + w + " ";
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, cy);
      line = w + " ";
      cy += lineHeight;
    } else line = test;
  });
  ctx.fillText(line, x, cy);
}
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function linkedinShare(text) {
  const url = encodeURIComponent("https://www.linkedin.com/in/ainycodes07");
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${encodeURIComponent(text)}`,
    "_blank",
  );
}
function downloadCanvas(canvas, filename) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

/* Overall profile-tab share (uses all semesters) */
function drawOverallCard() {
  const canvas = document.getElementById("shareCanvas");
  const ctx = canvas.getContext("2d");
  const dark = DATA.theme === "dark";
  ctx.fillStyle = dark ? "#181113" : "#FFFDF9";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  grad.addColorStop(0, "#E8863A");
  grad.addColorStop(1, "#B33A6E");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, 14);
  ctx.fillStyle = dark ? "#F5EDE4" : "#292323";
  ctx.font = "bold 36px sans-serif";
  ctx.fillText("HCA — Code with Purpose", 60, 90);
  ctx.font = "20px sans-serif";
  ctx.fillStyle = dark ? "#B8A8A5" : "#7A7270";
  ctx.fillText(
    DATA.profileName ? `${DATA.profileName}'s Progress` : "My Progress",
    60,
    128,
  );
  let y = 190;
  DATA.semesters.forEach((sem) => {
    const pct = semCompletionPct(sem);
    ctx.fillStyle = dark ? "#F5EDE4" : "#292323";
    ctx.font = "bold 17px sans-serif";
    ctx.fillText(sem.name, 60, y);
    ctx.fillStyle = dark ? "#241B1E" : "#F5EDE4";
    ctx.fillRect(260, y - 16, 600, 18);
    const g2 = ctx.createLinearGradient(260, 0, 260 + 600 * (pct / 100), 0);
    g2.addColorStop(0, "#E8863A");
    g2.addColorStop(1, "#B33A6E");
    ctx.fillStyle = g2;
    ctx.fillRect(260, y - 16, 600 * (pct / 100), 18);
    ctx.fillStyle = dark ? "#F5EDE4" : "#292323";
    ctx.font = "14px sans-serif";
    ctx.fillText(pct + "%", 875, y - 2);
    y += 55;
  });
  ctx.font = "bold 16px sans-serif";
  ctx.fillStyle = dark ? "#F5EDE4" : "#292323";
  ctx.fillText(`Total Course Progress: ${courseCompletionPct()}%`, 60, y + 20);
  return canvas;
}
document
  .getElementById("shareImgBtn")
  .addEventListener("click", () =>
    downloadCanvas(drawOverallCard(), "hca-progress-card.png"),
  );
document.getElementById("shareLinkedInBtn").addEventListener("click", () => {
  drawOverallCard();
  linkedinShare(
    `Making progress on my Full Stack Developer journey at Humanitarian Code Academy — Code with Purpose. Currently at ${courseCompletionPct()}% overall. 🚀 #CodeWithPurpose #LearnToCode`,
  );
  alert(
    "Your progress card has also been prepared — download it to attach on LinkedIn manually.",
  );
});

/* =========================================================
   CONGRATS MODAL
   ========================================================= */
function showCongrats(sem, node) {
  const modal = document.getElementById("congratsModal");
  const isMilestone = node.kind === "midterm" || node.kind === "final";
  document.getElementById("congratsTitle").textContent = isMilestone
    ? `${node.kind === "midterm" ? "Midterm" : "Final"} Project Complete!`
    : "Week Complete!";
  document.getElementById("congratsSub").textContent =
    `${nodeLabel(node)} — ${node.task.title}`;
  const tagsEl = document.getElementById("congratsTags");
  tagsEl.innerHTML = node.task.stack
    .split(",")
    .map((t) => `<span>${t.trim()}</span>`)
    .join("");
  modal.classList.add("active");

  document.getElementById("congratsDownloadBtn").onclick = () =>
    downloadCanvas(
      drawAchievementCard(sem, node),
      `hca-${node.key}-achievement.png`,
    );
  document.getElementById("congratsLinkedInBtn").onclick = () => {
    drawAchievementCard(sem, node);
    linkedinShare(
      `Just completed "${node.task.title}" (${nodeLabel(node)}) at Humanitarian Code Academy — building with ${node.task.stack}. #CodeWithPurpose #FullStackDeveloper`,
    );
    alert(
      "Your achievement card has also been prepared — download it to attach on LinkedIn manually.",
    );
  };
  document.getElementById("congratsCloseBtn").onclick = () =>
    modal.classList.remove("active");

  // semester-level badge popup chains after
  if (pendingBadgeSem === sem.id) {
    setTimeout(() => {
      pendingBadgeSem = null;
      alert(
        `🏅 Level Up! You've completed ${sem.name} and earned a new badge — check your Profile tab.`,
      );
      renderProfile();
    }, 400);
  }
}

/* =========================================================
   INTRO SCREENS
   ========================================================= */
function runIntro() {
  const loader = document.getElementById("loaderScreen");
  const presenter = document.getElementById("presenterScreen");
  const app = document.getElementById("appRoot");
  const fill = document.getElementById("loaderFill");
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 18 + 6;
    if (pct >= 100) {
      pct = 100;
      clearInterval(interval);
    }
    fill.style.width = pct + "%";
  }, 160);

  const goToPresenter = () => {
    loader.style.display = "none";
    presenter.style.display = "flex";
  };
  setTimeout(goToPresenter, 1800);
  loader.addEventListener("click", goToPresenter); // skip on click, prevents any stuck state

  document.getElementById("enterBtn").addEventListener("click", () => {
    presenter.style.display = "none";
    app.style.display = "flex";
    renderAll();
  });
  // safety fallback: auto-advance to presenter no matter what after 3s
  setTimeout(() => {
    if (loader.style.display !== "none") goToPresenter();
  }, 3000);
}

/* =========================================================
   INIT
   ========================================================= */
function renderAll() {
  applyTheme();
  renderDashboard();
  renderSemester();
  renderWeekly();
  renderGradebook();
  renderProfile();
}
runIntro();
