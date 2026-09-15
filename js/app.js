/* ==========================================================================
   1. CURRICULUM DATA MODEL — APPLIED COMPUTER SCIENCE & AI ENGINEERING
   ========================================================================== */
const ROADMAP = [
  {
    sem: 1,
    title: "Web & Automation Foundations",
    unlockTitle: "Junior Frontend Developer & Scripting Specialist",
    badgeIcon: "fa-code",
    badgeBg: "#2563EB",
    resources: "Duckett HTML/CSS · Eloquent JS · Refactoring UI · Python Crash Course · Linux Command Line",
    weeks: [
      {
        w: 1,
        title: "HTML5 & Semantic Web Architecture (CS101 / CS102 / CS103)",
        resource: "HTML and CSS (Jon Duckett) & Eloquent JS",
        type: "lab",
        what: "Master structural HTML5 semantic markup (<header>, <main>, <nav>, <article>, <section>, <footer>), CSS layout fundamentals, and vanilla JavaScript variable scoping.",
        why: "Establishes core structural principles required for accessible web interfaces and clean client-side scripting.",
        when: "12–15 lecture/reading hours + 4–6 mandatory TA lab hours.",
        where: "Duckett HTML/CSS Ch. 1–5, freeCodeCamp HTML/CSS Track, Eloquent JS Ch. 1.",
        how: "1. Complete freeCodeCamp semantic HTML exercises.\n2. Build a local semantic web page layout in VS Code.\n3. Execute Lab 1 syntax audit.",
        projectOptions: []
      },
      {
        w: 2,
        title: "Modern CSS Layouts, Flexbox & Grid (CS101 / CS103)",
        resource: "HTML and CSS (Duckett) & Refactoring UI",
        type: "lab",
        what: "Flexbox container alignment, grid-template-areas, media queries, fluid units (rem, clamp), and layout refactoring.",
        why: "Responsive layout systems ensure web platforms adapt seamlessly across desktop and mobile viewports.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "Duckett CSS Ch. 10–15, Google Web.dev Responsive Guides.",
        how: "1. Recreate 3 responsive layouts (Header/Sidebar/Content, 3-Column Grid, Responsive Gallery).\n2. Audit viewports at 375px, 768px, and 1200px.\n3. Submit Lab 2 deliverable.",
        projectOptions: []
      },
      {
        w: 3,
        title: "JavaScript Syntax & Data Structures (CS102)",
        resource: "Eloquent JavaScript (Marijn Haverbeke)",
        type: "lab",
        what: "Control flow, functions, scope, arrays, objects, ES6+ features (destructuring, spread operator, array methods).",
        why: "Algorithmic thinking and data manipulation form the bedrock of interactive software applications.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "Eloquent JavaScript Ch. 2–4 & JavaScript.info.",
        how: "1. Solve end-of-chapter algorithmic exercises on Eloquent JS online sandbox.\n2. Write standalone JS data transformation utility functions.\n3. Submit Lab 3.",
        projectOptions: []
      },
      {
        w: 4,
        title: "DOM Manipulation & Event Handling (CS102 / CS106)",
        resource: "Eloquent JS & Don't Make Me Think",
        type: "lab",
        what: "Selecting DOM nodes, event listeners, element creation, dynamic UI updates, and accessibility focus traps.",
        why: "Enables interactive, user-driven applications without third-party framework overhead.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "Eloquent JS Ch. 14–15, MDN DOM Manipulation Guides.",
        how: "1. Build an interactive filterable list widget with live search.\n2. Implement form input validation and error feedback.\n3. Submit Lab 4.",
        projectOptions: []
      },
      {
        w: 5,
        title: "Python Scripting & Term Project Kickoff (CS104 & OpenRelief)",
        resource: "Python Crash Course (Eric Matthes)",
        type: "term_kickoff",
        what: "Python CLI scripting, file I/O, data extraction with requests/BeautifulSoup, and Term Project (OpenRelief Archivist) kickoff.",
        why: "Combines data automation with client-side engineering to solve real-world data collection challenges.",
        when: "Term Project Kickoff + 12–15 lecture/reading hours.",
        where: "Python Crash Course Ch. 1–8 & Term Project Architecture Specs.",
        how: "1. Complete Python automation lab exercises.\n2. Draft ARCHITECTURE.md for OpenRelief Archivist detailing data schema and caching strategy.\n3. Submit Term Project Specification.",
        projectOptions: [
          {
            id: "s1_term_proj",
            title: "Term Project: OpenRelief Archivist",
            desc: "Accessible Offline Reader for Humanitarian Texts with local caching, instant client-side search, service worker PWA capabilities, and Python data scraping pipelines.",
            pdfBrief: "../assets/project-briefs/sem1_term_project.pdf"
          }
        ]
      },
      {
        w: 6,
        title: "Animation, GSAP & Shell Scripting (CS103 / CS105)",
        resource: "Refactoring UI & Linux Command Line",
        type: "lab",
        what: "GSAP micro-interactions, CSS keyframes, terminal commands, shell scripts, and Linux directory navigation.",
        why: "Combines polished UI visual polish with system-level command-line productivity.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "GSAP Documentation, The Linux Command Line Ch. 1–10.",
        how: "1. Build smooth scroll animations using GSAP plugins.\n2. Write a Bash shell script to automate project file setups.\n3. Submit Lab 5.",
        projectOptions: []
      },
      {
        w: 7,
        title: "Midterm Review & Code Quality Audit",
        resource: "SonarQube / Code Review Rules",
        type: "midterm_sprint",
        what: "Synthesize HTML5, CSS Grid/Flexbox, DOM JS, and Python metrics scripting for the Midterm Practical Exam.",
        why: "Validates foundational technical mastery through rigorous automated code audits and defense video walkthroughs.",
        when: "Dedicated Midterm Build Sprint.",
        where: "Course Specs & Midterm Brief.",
        how: "1. Build and test the Host Pulse CLI dashboard script and frontend UI.\n2. Conduct SonarQube zero-bug code audit.\n3. Prepare defense presentation video.",
        projectOptions: []
      },
      {
        w: 8,
        title: "Midterm Exam: Host Pulse CLI System Dashboard",
        resource: "Midterm Exam Deliverable",
        type: "midterm",
        what: "Deliver Host Pulse: A Python CLI script (monitor.py) gathering host metrics into JSON + a zero-framework WCAG AA compliant browser dashboard.",
        why: "Proves mastery of system metric collection and clean, accessible DOM rendering.",
        when: "Submission Deadline: Sunday 11:59 PM.",
        where: "GitHub Repository + DEFENSE.md.",
        how: "1. Commit complete code to GitHub.\n2. Ensure zero failing unit tests and full accessibility compliance.\n3. Record 5-minute academic defense video and submit.",
        projectOptions: [
          {
            id: "s1_midterm",
            title: "Midterm Practical Exam: Host Pulse Dashboard",
            desc: "A Python CLI script collecting host system metrics (CPU, RAM, Disk) into JSON, rendered by a responsive, accessible vanilla JS dashboard.",
            pdfBrief: "../assets/project-briefs/sem1_midterm.pdf"
          }
        ],
        aiPrompt: "Act as an Academic Code Auditor and Computer Science Evaluator. Review my implementation of a Python system monitoring script that outputs JSON and a zero-framework HTML/CSS/JS frontend dashboard. Generate a technical audit assessing code cleanliness, DOM performance, WCAG AA compliance, and error handling."
      },
      {
        w: 9,
        title: "OpenRelief Sprint 1: Reading Container (Term Project)",
        resource: "OpenRelief Archivist Spec",
        type: "sprint",
        what: "Responsive HTML5/CSS reading container featuring fluid CSS custom properties for dynamic text scaling.",
        why: "Establishes readable, accessible typography and structure for offline reader applications.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "OpenRelief Archivist Repository.",
        how: "1. Implement semantic reader container layout.\n2. Configure fluid typography tokens.\n3. Submit Sprint 1 deliverable.",
        projectOptions: []
      },
      {
        w: 10,
        title: "OpenRelief Sprint 2: Annotation Engine (Term Project)",
        resource: "Eloquent JS (DOM & Storage)",
        type: "sprint",
        what: "Vanilla JavaScript text annotation, highlight selection, and bookmark persistence engine backed by localStorage.",
        why: "Enables interactive user state retention without requiring external databases.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "OpenRelief Archivist Repository.",
        how: "1. Build text selection event listeners.\n2. Store user annotations in browser localStorage.\n3. Submit Sprint 2 deliverable.",
        projectOptions: []
      },
      {
        w: 11,
        title: "OpenRelief Sprint 3: Client Search Engine (Term Project)",
        resource: "Eloquent JS (Arrays & Strings)",
        type: "sprint",
        what: "Instant client-side search engine filtering JSON text archives dynamically with highlight matching.",
        why: "Delivers rapid text retrieval capabilities locally in zero-latency offline environments.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "OpenRelief Archivist Repository.",
        how: "1. Implement text index and substring matching algorithm in JS.\n2. Render dynamic search result list in real-time.\n3. Submit Sprint 3 deliverable.",
        projectOptions: []
      },
      {
        w: 12,
        title: "OpenRelief Sprint 4: Service Worker PWA (Term Project)",
        resource: "MDN PWA & Service Worker Guides",
        type: "sprint",
        what: "Service Worker setup, web application manifest, and cache storage management transforming the app into an offline PWA.",
        why: "Ensures mission-critical text archives remain fully accessible in low or zero connectivity environments.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "OpenRelief Archivist Repository.",
        how: "1. Register Service Worker and cache static assets.\n2. Test offline loading in Chrome DevTools Network offline mode.\n3. Submit Sprint 4 deliverable.",
        projectOptions: []
      },
      {
        w: 13,
        title: "OpenRelief Sprint 5: Accessibility Suite (Term Project)",
        resource: "W3C WCAG 2.1 Guidelines",
        type: "sprint",
        what: "Dyslexia-friendly font toggles, high-contrast themes, keyboard focus traps, and screen-reader ARIA attributes.",
        why: "Guarantees universal access for diverse users and assistive technologies.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "OpenRelief Archivist Repository.",
        how: "1. Implement theme toggle and font control UI.\n2. Audit with AXE DevTools and Lighthouse A11y.\n3. Submit Sprint 5 deliverable.",
        projectOptions: []
      },
      {
        w: 14,
        title: "OpenRelief Sprint 6: Python Data Scraper (Term Project)",
        resource: "Python Crash Course (BeautifulSoup/Pandas)",
        type: "sprint",
        what: "Python CLI scraper and parser script that ingests raw plain text, cleans formatting, and generates ready-to-render JSON data files.",
        why: "Automates content pipeline pipelines for offline application consumption.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "OpenRelief Archivist Repository.",
        how: "1. Write BeautifulSoup extraction script for plain text sources.\n2. Output sanitized, structured JSON files.\n3. Submit Sprint 6 deliverable.",
        projectOptions: []
      },
      {
        w: 15,
        title: "Final Review & SonarQube Code Audit",
        resource: "SonarQube & Lighthouse Audits",
        type: "final_sprint",
        what: "Final code polish, SonarQube zero-bug compliance verification, 100/100 Lighthouse audits, and academic defense preparation.",
        why: "Verifies production quality standards before final academic release.",
        when: "Final Project Polish & Video Recording.",
        where: "OpenRelief Archivist Repository & EcoHarvest Final Exam Prep.",
        how: "1. Pass SonarQube zero-bug code inspection.\n2. Record EcoHarvest final project demonstration video.\n3. Finalize release package.",
        projectOptions: []
      },
      {
        w: 16,
        title: "Final Exam: EcoHarvest Non-Profit Platform",
        resource: "Final Exam Deliverable",
        type: "final",
        what: "Deliver EcoHarvest: Multi-page responsive portal built with pure HTML5/CSS Grid/GSAP + Python automated data pipeline + OpenRelief Archivist final release.",
        why: "Demonstrates complete mastery of Semester 1 web architecture and data automation foundations.",
        when: "Submission Deadline: Sunday 11:59 PM.",
        where: "Production Release (Vercel/Netlify) + GitHub Repository.",
        how: "1. Deploy live web portal to Vercel/Netlify.\n2. Submit final OpenRelief Archivist release with 100/100 Lighthouse audit.\n3. Conduct formal academic defense video walkthrough.",
        projectOptions: [
          {
            id: "s1_final",
            title: "Final Practical Exam: EcoHarvest Platform & Pipeline",
            desc: "A production-deployed multi-page web portal (HTML5/CSS Grid/GSAP) integrated with a Python automated food distribution data scraper.",
            pdfBrief: "../assets/project-briefs/sem1_final.pdf"
          }
        ],
        aiPrompt: "Act as a Senior Full-Stack Architect. Evaluate my production-deployed static website and Python data pipeline. Verify HTML5 semantics, GSAP animation performance, CSV/JSON data parsing reliability, and automated Lighthouse 100/100 compliance."
      }
    ]
  },
  {
    sem: 2,
    title: "Full-Stack & Component Architecture",
    unlockTitle: "Full-Stack Web Developer",
    badgeIcon: "fa-layer-group",
    badgeBg: "#7C3AED",
    resources: "Learning React · Tailwind CSS · Fluent Python · Learning SQL · Django for Beginners · React Design Patterns",
    weeks: [
      {
        w: 17,
        title: "React Core: Components & Props (CS201)",
        resource: "Learning React (Banks & Porcello)",
        type: "lab",
        what: "React fundamentals, JSX syntax, functional components, props passing, prop destructuring, component trees, and Vite build tools.",
        why: "Component-driven architecture enables modular, maintainable full-stack UI development.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "Learning React Ch. 1–5, react.dev.",
        how: "1. Bootstrap a React project using Vite.\n2. Build a library of functional UI components.\n3. Submit Lab 1.",
        projectOptions: []
      },
      {
        w: 18,
        title: "Tailwind CSS & Design Systems (CS202 / CS206)",
        resource: "Tailwind CSS Official Docs & Refactoring UI",
        type: "lab",
        what: "Utility-first CSS, custom design tokens, theme configurations, arbitrary values, responsive variants, and dark mode setup.",
        why: "Accelerates visual development while maintaining strict, scalable design system design tokens.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "Tailwind CSS Documentation & Storybook.",
        how: "1. Configure custom Tailwind theme tokens in Vite/React.\n2. Build accessible styled component variants.\n3. Submit Lab 2.",
        projectOptions: []
      },
      {
        w: 19,
        title: "Advanced Python, Dataclasses & Async (CS203)",
        resource: "Fluent Python (Luciano Ramalho)",
        type: "lab",
        what: "Python data models, dataclasses, generator functions, context managers, async/await, and type hinting.",
        why: "Provides deep Python mastery required for high-performance backend systems and asynchronous AI orchestration.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "Fluent Python Ch. 1–5, Python Morsels.",
        how: "1. Implement custom Python iterators and dataclasses.\n2. Write asynchronous file handling functions.\n3. Submit Lab 3.",
        projectOptions: []
      },
      {
        w: 20,
        title: "Relational Databases, SQL & Normalization (CS204)",
        resource: "Learning SQL (Alan Beaulieu)",
        type: "lab",
        what: "Database schemas, primary/foreign keys, 1NF/2NF/3NF normalization, SQL queries (SELECT, JOIN, GROUP BY), and PostgreSQL setup.",
        why: "Relational data integrity is essential for scalable, enterprise-grade application backends.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "Learning SQL Ch. 1–8, SQLZoo / LeetCode SQL.",
        how: "1. Design normalized relational ERD diagram.\n2. Execute PostgreSQL database setup and query benchmarks.\n3. Submit Lab 4.",
        projectOptions: []
      },
      {
        w: 21,
        title: "Django Architecture & Term Project Kickoff (CS205 & GeoStory)",
        resource: "Django for Beginners (William Vincent)",
        type: "term_kickoff",
        what: "Django ORM models, migrations, views, templates, session authentication, custom user models, and GeoStory Term Project kickoff.",
        why: "Monolithic full-stack frameworks provide robust built-in security, administrative tools, and rapid backend capabilities.",
        when: "Term Project Kickoff + 12–15 lecture/reading hours.",
        where: "Django for Beginners Ch. 1–8 & GeoStory Architecture Specs.",
        how: "1. Set up Django project with PostgreSQL database engine.\n2. Draft ARCHITECTURE.md for GeoStory specifying PostGIS schema and Mapbox integration.\n3. Submit Term Project Spec.",
        projectOptions: [
          {
            id: "s2_term_proj",
            title: "Term Project: GeoStory Platform",
            desc: "Community Cultural Mapping & Audio Archive Platform utilizing PostGIS spatial databases, Django REST APIs, Mapbox GL React canvas, and Zustand global state.",
            pdfBrief: "../assets/project-briefs/sem2_term_project.pdf"
          }
        ]
      },
      {
        w: 22,
        title: "Component Systems & Storybook (CS206)",
        resource: "React Design Patterns & Storybook Docs",
        type: "lab",
        what: "Compound components, custom hooks, Zustand state management, and component isolation testing in Storybook.",
        why: "Separates UI component design from application logic for modular testing and reuse.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "Storybook Official Docs & Component Party.",
        how: "1. Set up Storybook workspace for UI components.\n2. Build compound React components with dynamic state control.\n3. Submit Lab 5.",
        projectOptions: []
      },
      {
        w: 23,
        title: "Midterm Build Sprint & AtlasUI Integration",
        resource: "Midterm Exam Specs",
        type: "midterm_sprint",
        what: "Integrate Storybook component library with Django relational backend for AtlasUI Midterm Practical Exam.",
        why: "Validates seamless component-driven frontend integration with relational backend systems.",
        when: "Dedicated Midterm Build Sprint.",
        where: "AtlasUI Repository & Django Portal.",
        how: "1. Build and test Tailwind components in Storybook.\n2. Wire Django relational ORM backend views.\n3. Audit code quality and prepare defense presentation.",
        projectOptions: []
      },
      {
        w: 24,
        title: "Midterm Exam: AtlasUI Storybook & Django Portal",
        resource: "Midterm Exam Deliverable",
        type: "midterm",
        what: "Deliver AtlasUI: Storybook React component library styled with Tailwind CSS + Relational Django monolithic portal backed by PostgreSQL.",
        why: "Proves competency in component-driven UI architecture and relational backend design.",
        when: "Submission Deadline: Sunday 11:59 PM.",
        where: "GitHub Repository + DEFENSE.md.",
        how: "1. Publish Storybook UI suite and deploy Django application.\n2. Complete zero-bug code audit.\n3. Record 5-minute defense video walkthrough.",
        projectOptions: [
          {
            id: "s2_midterm",
            title: "Midterm Practical Exam: AtlasUI System",
            desc: "A published Storybook React UI component library styled with Tailwind CSS, integrated with a Django monolithic web portal backed by PostgreSQL.",
            pdfBrief: "../assets/project-briefs/sem2_midterm.pdf"
          }
        ],
        aiPrompt: "Act as a Lead Full-Stack Engineer. Review my Django relational portal and Storybook component library. Evaluate PostgreSQL database normalization, custom user model authentication, ORM query efficiency, and Tailwind component design patterns."
      },
      {
        w: 25,
        title: "GeoStory Sprint 1: PostGIS & Django REST (Term Project)",
        resource: "PostGIS Docs & GeoDjango Guides",
        type: "sprint",
        what: "PostgreSQL/PostGIS spatial database setup and Django REST endpoints serving GeoJSON feature collections.",
        why: "Enables geographic data querying and spatial feature indexing on the backend.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "GeoStory Repository.",
        how: "1. Configure PostGIS spatial extension in PostgreSQL.\n2. Build Django REST framework endpoints for spatial data.\n3. Submit Sprint 1 deliverable.",
        projectOptions: []
      },
      {
        w: 26,
        title: "GeoStory Sprint 2: Mapbox GL React Integration (Term Project)",
        resource: "Mapbox GL JS & React Mapbox Docs",
        type: "sprint",
        what: "Mapbox GL React canvas integration rendering dynamic spatial markers and custom cluster layers.",
        why: "Provides interactive, performant spatial visualization on the client side.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "GeoStory Repository.",
        how: "1. Initialize Mapbox canvas inside React viewport.\n2. Render dynamic GeoJSON markers fetched from Django REST API.\n3. Submit Sprint 2 deliverable.",
        projectOptions: []
      },
      {
        w: 27,
        title: "GeoStory Sprint 3: Multi-Step Story Form (Term Project)",
        resource: "React Hook Form / Zustand Docs",
        type: "sprint",
        what: "Story submission drawer featuring multi-step React forms, spatial point picker, and media uploads.",
        why: "Streamlines complex user content creation workflows with validated state management.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "GeoStory Repository.",
        how: "1. Build multi-step React form modal with dynamic step controls.\n2. Integrate spatial click listener on Mapbox canvas.\n3. Submit Sprint 3 deliverable.",
        projectOptions: []
      },
      {
        w: 28,
        title: "GeoStory Sprint 4: Geolocation & Spatial Filters (Term Project)",
        resource: "Browser Geolocation API & PostGIS Distance",
        type: "sprint",
        what: "Custom React geolocation tracking hooks and radius-based PostGIS spatial filtering.",
        why: "Delivered personalized, location-aware content based on user proximity.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "GeoStory Repository.",
        how: "1. Implement useGeolocation React hook.\n2. Send proximity coordinates to PostGIS distance query endpoint.\n3. Submit Sprint 4 deliverable.",
        projectOptions: []
      },
      {
        w: 29,
        title: "GeoStory Sprint 5: Persistent Audio Player (Term Project)",
        resource: "React Context / Zustand Audio State",
        type: "sprint",
        what: "Persistent audio narrative player component supporting uninterrupted playback across map navigation.",
        why: "Guarantees seamless media consumption while exploring spatial canvas interfaces.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "GeoStory Repository.",
        how: "1. Build global audio player state with Zustand.\n2. Ensure continuous audio playback during route and map transitions.\n3. Submit Sprint 5 deliverable.",
        projectOptions: []
      },
      {
        w: 30,
        title: "GeoStory Sprint 6: Cypress E2E Testing Suite (Term Project)",
        resource: "Cypress Testing Documentation",
        type: "sprint",
        what: "End-to-end test suite execution using Cypress, verifying key user submission and playback flows.",
        why: "Automated end-to-end tests prevent regressions and guarantee system reliability.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "GeoStory Repository.",
        how: "1. Write Cypress specs for story submission and map interactions.\n2. Achieve zero failing spec runs.\n3. Submit Sprint 6 deliverable.",
        projectOptions: []
      },
      {
        w: 31,
        title: "Production Deployment & Defense Prep",
        resource: "Vercel / Render / Cloud Deployment",
        type: "final_sprint",
        what: "Deploy React frontend to Vercel and Django/PostgreSQL backend to Render. SonarQube code audit and final defense prep.",
        why: "Ensures production cloud readiness and verified codebase quality.",
        when: "Final Production Sprint.",
        where: "Live Deployment Hosts.",
        how: "1. Configure environment variables and production CORS setup.\n2. Complete SonarQube quality clearance.\n3. Prepare PulseBoard and GeoStory final presentation.",
        projectOptions: []
      },
      {
        w: 32,
        title: "Final Exam: PulseBoard SaaS Application",
        resource: "Final Exam Deliverable",
        type: "final",
        what: "Deliver PulseBoard: Full-stack SaaS application (React + Zustand + Tailwind + Django + PostgreSQL) + GeoStory final release with Cypress suite.",
        why: "Demonstrates complete full-stack web engineering competency.",
        when: "Submission Deadline: Sunday 11:59 PM.",
        where: "Production Deployments (Vercel + Render) + GitHub.",
        how: "1. Deploy live SaaS application.\n2. Submit GeoStory release with verified Cypress testing proof.\n3. Record final academic defense walkthrough video.",
        projectOptions: [
          {
            id: "s2_final",
            title: "Final Practical Exam: PulseBoard SaaS Platform",
            desc: "A production-deployed enterprise React SPA using Zustand and Tailwind CSS, backed by a fully integrated Django REST service connected to PostgreSQL.",
            pdfBrief: "../assets/project-briefs/sem2_final.pdf"
          }
        ],
        aiPrompt: "Act as an Enterprise Software Architect. Review my full-stack MERN/Django SaaS application and spatial mapping platform. Assess state management architecture (Zustand), API REST integration, Cypress test coverage, and cloud hosting setup."
      }
    ]
  },
  {
    sem: 3,
    title: "AI Integration & Automation Engineering",
    unlockTitle: "AI Integration & Automation Engineer",
    badgeIcon: "fa-robot",
    badgeBg: "#059669",
    resources: "FastAPI · HTMX & Alpine.js · Vector Databases (Chroma/Pinecone) · LangChain · OpenAI/Anthropic APIs",
    weeks: [
      {
        w: 33,
        title: "Asynchronous Python & FastAPI Core",
        resource: "FastAPI Official Docs & Asyncio Guides",
        type: "lab",
        what: "Asynchronous Python (async/await), FastAPI routing, Pydantic data validation schemas, Dependency Injection, and OpenAPI documentation.",
        why: "High-throughput asynchronous APIs are essential for handling non-blocking AI model requests and streaming responses.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "FastAPI Documentation & Real Python.",
        how: "1. Build asynchronous FastAPI CRUD service with Pydantic validation.\n2. Inspect auto-generated OpenAPI documentation.\n3. Submit Lab 1.",
        projectOptions: []
      },
      {
        w: 34,
        title: "Server-Driven UI: HTMX & Alpine.js",
        resource: "HTMX Documentation & Alpine.js Guides",
        type: "lab",
        what: "Server-driven HTML swaps, hx-get/hx-post triggers, dynamic partial DOM updates, dynamic reactive UI state with Alpine.js.",
        why: "Eliminates heavy frontend build tools while preserving fast, dynamic single-page user experiences.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "HTMX Docs & Hypermedia Systems Book.",
        how: "1. Build dynamic search bar fetching HTML partials via HTMX.\n2. Add lightweight client interaction state using Alpine.js.\n3. Submit Lab 2.",
        projectOptions: []
      },
      {
        w: 35,
        title: "LLM Integration & Prompt Engineering",
        resource: "OpenAI / Anthropic API Official Docs",
        type: "lab",
        what: "Prompt design patterns, systemic instructions, function calling, structured JSON output generation, and token usage optimization.",
        why: "Transforms foundational language models into reliable, structured backend software components.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "OpenAI Cookbook & Anthropic API Documentation.",
        how: "1. Write FastAPI endpoints calling LLMs with function calling schemas.\n2. Implement retry logic and structured Pydantic response parsing.\n3. Submit Lab 3.",
        projectOptions: []
      },
      {
        w: 36,
        title: "Vector Embeddings & Vector DBs",
        resource: "ChromaDB / Pinecone Documentation",
        type: "lab",
        what: "Vector embedding models, distance metrics (cosine similarity, Euclidean), ChromaDB / Pinecone setup, document indexing, and similarity search.",
        why: "Vector databases power semantic retrieval and unstructured knowledge matching for enterprise AI applications.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "ChromaDB Documentation & Pinecone Guides.",
        how: "1. Generate embeddings for text documents using OpenAI/HuggingFace.\n2. Store and query vectors in ChromaDB with metadata filtering.\n3. Submit Lab 4.",
        projectOptions: []
      },
      {
        w: 37,
        title: "RAG Systems & Term Project Kickoff (NeuralDoc)",
        resource: "LangChain Docs & RAG Architecture Guides",
        type: "term_kickoff",
        what: "Retrieval-Augmented Generation (RAG) architecture, document chunking strategies, vector context injection, and NeuralDoc Term Project kickoff.",
        why: "RAG grounds AI model outputs in factual custom knowledge bases, eliminating model hallucinations.",
        when: "Term Project Kickoff + 12–15 lecture/reading hours.",
        where: "LangChain Documentation & NeuralDoc Architecture Specs.",
        how: "1. Implement basic RAG pipeline in FastAPI.\n2. Draft ARCHITECTURE.md for NeuralDoc specifying chunking strategy and vector indexing.\n3. Submit Term Project Spec.",
        projectOptions: [
          {
            id: "s3_term_proj",
            title: "Term Project: NeuralDoc Engine",
            desc: "Enterprise Knowledge Base RAG Engine featuring asynchronous document chunking, hybrid vector search (BM25 + dense vectors), HTMX chat interface, and citation generation.",
            pdfBrief: "../assets/project-briefs/sem3_term_project.pdf"
          }
        ]
      },
      {
        w: 38,
        title: "Event-Driven Automation & Celery Queues",
        resource: "Celery & Redis Official Documentation",
        type: "lab",
        what: "Asynchronous task workers with Celery, Redis message broker, background job processing, status polling, and failure retry handlers.",
        why: "Offloads long-running AI generation and document parsing tasks from the primary HTTP request pipeline.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "Celery Documentation & Redis Guides.",
        how: "1. Set up Redis broker and Celery worker process.\n2. Dispatch background document parsing tasks from FastAPI endpoints.\n3. Submit Lab 5.",
        projectOptions: []
      },
      {
        w: 39,
        title: "Midterm Build Sprint & NeuralDoc Integration",
        resource: "Midterm Exam Specs",
        type: "midterm_sprint",
        what: "Integrate FastAPI backend, HTMX interface, ChromaDB vector store, and OpenAI function calling for the Midterm Practical Exam.",
        why: "Validates practical RAG architecture and server-driven AI application integration.",
        when: "Dedicated Midterm Build Sprint.",
        where: "NeuralDoc Midterm Repository.",
        how: "1. Connect HTMX frontend to FastAPI async endpoint.\n2. Execute vector context retrieval and model response generation.\n3. Audit code quality and prepare defense presentation.",
        projectOptions: []
      },
      {
        w: 40,
        title: "Midterm Exam: NeuralDoc RAG Search Portal",
        resource: "Midterm Exam Deliverable",
        type: "midterm",
        what: "Deliver NeuralDoc: An asynchronous RAG Search Portal built with FastAPI, HTMX, Alpine.js, ChromaDB, and OpenAI function calling.",
        why: "Proves mastery of vector retrieval systems and dynamic AI API integration.",
        when: "Submission Deadline: Sunday 11:59 PM.",
        where: "GitHub Repository + DEFENSE.md.",
        how: "1. Commit complete RAG pipeline code to GitHub.\n2. Verify zero failing tests and clean vector index performance.\n3. Record 5-minute defense video walkthrough.",
        projectOptions: [
          {
            id: "s3_midterm",
            title: "Midterm Practical Exam: NeuralDoc RAG System",
            desc: "An enterprise RAG search portal using FastAPI, HTMX, ChromaDB vector indexing, and structured OpenAI responses.",
            pdfBrief: "../assets/project-briefs/sem3_midterm.pdf"
          }
        ],
        aiPrompt: "Act as an AI Systems Architect. Review my FastAPI and ChromaDB RAG implementation. Evaluate document chunking parameters, vector similarity retrieval performance, prompt engineering context injection, and HTMX UI responsiveness."
      },
      {
        w: 41,
        title: "NeuralDoc Sprint 1: Vector Pipeline (Term Project)",
        resource: "NeuralDoc Architecture Specs",
        type: "sprint",
        what: "Vector ingestion pipeline setup with configurable document chunking (recursive character splitter) and metadata tagging.",
        why: "Ensures optimal text chunk boundaries for high-precision semantic retrieval.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "NeuralDoc Repository.",
        how: "1. Implement document loader and text splitter in Python.\n2. Store embeddings with metadata tags in ChromaDB.\n3. Submit Sprint 1 deliverable.",
        projectOptions: []
      },
      {
        w: 42,
        title: "NeuralDoc Sprint 2: HTMX Interactive Chat (Term Project)",
        resource: "HTMX Dynamic Swap Guides",
        type: "sprint",
        what: "HTMX interactive chat interface supporting real-time server-driven response swaps and loading indicators.",
        why: "Delivers smooth conversational UI interactions without React client complexity.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "NeuralDoc Repository.",
        how: "1. Build HTMX template partials for user and bot messages.\n2. Configure asynchronous polling/swapping for LLM outputs.\n3. Submit Sprint 2 deliverable.",
        projectOptions: []
      },
      {
        w: 43,
        title: "NeuralDoc Sprint 3: Hybrid Search Engine (Term Project)",
        resource: "BM25 & Vector Hybrid Retrieval Papers",
        type: "sprint",
        what: "Hybrid search engine combining sparse keyword matching (BM25) with dense vector similarity.",
        why: "Improves context retrieval accuracy across exact terms and conceptual semantic queries.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "NeuralDoc Repository.",
        how: "1. Implement BM25 keyword index alongside ChromaDB vector index.\n2. Blend and re-rank search result scores.\n3. Submit Sprint 3 deliverable.",
        projectOptions: []
      },
      {
        w: 44,
        title: "NeuralDoc Sprint 4: Async Worker Queues (Term Project)",
        resource: "Celery Task Queue Setup",
        type: "sprint",
        what: "Celery and Redis background worker pipeline for processing large PDF text uploads asynchronously.",
        why: "Prevents HTTP request timeouts during heavy document processing operations.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "NeuralDoc Repository.",
        how: "1. Wire Celery tasks for PDF text extraction and embedding generation.\n2. Render live task progress bar in HTMX UI.\n3. Submit Sprint 4 deliverable.",
        projectOptions: []
      },
      {
        w: 45,
        title: "NeuralDoc Sprint 5: Citation & Fact-Checking (Term Project)",
        resource: "RAG Evaluation & Citation Matching",
        type: "sprint",
        what: "Automated source citation generator mapping generated answer sentences directly back to source document chunks.",
        why: "Guarantees answer auditability and verifiable source attribution in enterprise settings.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "NeuralDoc Repository.",
        how: "1. Build sentence-level source mapping logic.\n2. Render clickable citation badges in chat responses.\n3. Submit Sprint 5 deliverable.",
        projectOptions: []
      },
      {
        w: 46,
        title: "NeuralDoc Sprint 6: RAG Evaluation Suite (Term Project)",
        resource: "Ragas Framework / TruLens Docs",
        type: "sprint",
        what: "RAG evaluation suite scoring faithfulness, answer relevance, and context precision.",
        why: "Quantifies AI pipeline accuracy using objective benchmark metrics.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "NeuralDoc Repository.",
        how: "1. Implement Ragas benchmark evaluation scripts.\n2. Generate accuracy and context precision audit report.\n3. Submit Sprint 6 deliverable.",
        projectOptions: []
      },
      {
        w: 47,
        title: "Security Hardening & Prompt Injection Defense",
        resource: "OWASP Top 10 for Large Language Model Applications",
        type: "final_sprint",
        what: "Hardening AI backends against prompt injection attacks, enforcing API rate limits, input sanitization, and cloud deployment setup.",
        why: "Protects production AI applications from malicious prompt manipulation and API resource abuse.",
        when: "Final Security Sprint.",
        where: "Live Staging Environment.",
        how: "1. Implement input sanitization and system prompt guardrails.\n2. Pass OWASP LLM security audit checklist.\n3. Prepare final presentation.",
        projectOptions: []
      },
      {
        w: 48,
        title: "Final Exam: OmniSearch Knowledge Automation Suite",
        resource: "Final Exam Deliverable",
        type: "final",
        what: "Deliver OmniSearch: Production-deployed Autonomous Knowledge Automation Suite + NeuralDoc final release with verified RAG benchmark evaluation report.",
        why: "Demonstrates full competence as an AI Integration & Automation Engineer.",
        when: "Submission Deadline: Sunday 11:59 PM.",
        where: "Production Cloud Deployment + GitHub Repository.",
        how: "1. Deploy production FastAPI + ChromaDB service.\n2. Submit NeuralDoc final release with verified benchmark scores.\n3. Record final academic defense video walkthrough.",
        projectOptions: [
          {
            id: "s3_final",
            title: "Final Practical Exam: OmniSearch AI Suite",
            desc: "A production-ready AI automation suite built with FastAPI, HTMX, Celery, Redis, and hybrid vector retrieval, hardened against prompt injection.",
            pdfBrief: "../assets/project-briefs/sem3_final.pdf"
          }
        ],
        aiPrompt: "Act as a Principal AI Engineer. Evaluate my production FastAPI RAG application and Celery background pipeline. Audit prompt injection defenses, hybrid search re-ranking accuracy, vector index performance, and HTMX interface execution."
      }
    ]
  },
  {
    sem: 4,
    title: "Autonomous AI Systems & Multi-Agent Architecture",
    unlockTitle: "Autonomous AI Systems Engineer & Product Architect",
    badgeIcon: "fa-brain",
    badgeBg: "#DC2626",
    resources: "LangGraph · CrewAI / AutoGen · Distributed AI Systems · MLOps & LLMOps · Production Orchestration",
    weeks: [
      {
        w: 49,
        title: "Multi-Agent Architecture Principles",
        resource: "LangGraph Docs & Multi-Agent Systems Research",
        type: "lab",
        what: "Multi-agent interaction patterns, role delegation, agent communication protocols, tool definitions, and task execution loops.",
        why: "Solves complex multi-step problems by decomposing them into specialized, autonomous agent roles.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "LangGraph Documentation & CrewAI Guides.",
        how: "1. Define specialized agent roles and custom tool sets in Python.\n2. Implement sequential agent task execution.\n3. Submit Lab 1.",
        projectOptions: []
      },
      {
        w: 50,
        title: "State Graph Orchestration with LangGraph",
        resource: "LangGraph Official Documentation",
        type: "lab",
        what: "StateGraph architecture, nodes, conditional edges, state persistence, cycle management, and error recovery in graph networks.",
        why: "Provides deterministic state control and branching execution flows over autonomous agent loops.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "LangGraph Conceptual Guides & Tutorials.",
        how: "1. Construct a cyclic StateGraph with conditional routing edges.\n2. Implement node state reduction and state persistence.\n3. Submit Lab 2.",
        projectOptions: []
      },
      {
        w: 51,
        title: "Autonomous Planning & Long-Term Memory",
        resource: "Autonomous AI Agent Memory Papers",
        type: "lab",
        what: "ReAct reasoning loops, hierarchical planning, short-term vs long-term memory systems, vector memory stores, and reflection cycles.",
        why: "Equips autonomous agents with self-correction capabilities and historical context retention.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "LangGraph Memory & Reflection Documentation.",
        how: "1. Build an agent with reflection nodes that critique and revise code outputs.\n2. Integrate vector store memory for cross-session state persistence.\n3. Submit Lab 3.",
        projectOptions: []
      },
      {
        w: 52,
        title: "Human-in-the-Loop AI & Safety Controls",
        resource: "LangGraph Breakpoints & Human Intercept Guides",
        type: "lab",
        what: "Human-in-the-loop (HITL) interrupt patterns, state review breakpoints, tool execution approval gates, and safety sandboxing.",
        why: "Guarantees human oversight and authorization before AI agents execute high-risk real-world actions.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "LangGraph Human-in-the-Loop Documentation.",
        how: "1. Configure dynamic graph interrupt breakpoints prior to sensitive tool execution.\n2. Build approval CLI/UI override endpoints.\n3. Submit Lab 4.",
        projectOptions: []
      },
      {
        w: 53,
        title: "Production LLMOps, Tracing & Monitoring",
        resource: "LangSmith / Phoenix Documentation",
        type: "lab",
        what: "Agent tracing with LangSmith / Phoenix, latency monitoring, token cost tracking, prompt evaluation, and trajectory debugging.",
        why: "Provides full observability into complex multi-agent execution graphs and LLM API expenditures.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "LangSmith Docs & Arize Phoenix Guides.",
        how: "1. Instrument LangGraph multi-agent application with LangSmith tracing.\n2. Analyze agent execution trajectories and latency bottlenecks.\n3. Submit Lab 5.",
        projectOptions: []
      },
      {
        w: 54,
        title: "Scalable Infrastructure & Microservices",
        resource: "Docker & Kubernetes Official Guides",
        type: "lab",
        what: "Containerizing AI agent systems with Docker, multi-container orchestration, environment isolation, sandboxed code execution, and cloud deployment.",
        why: "Ensures secure, isolated environment execution for code-generating autonomous agents.",
        when: "12–15 lecture/reading hours + 4–6 lab hours.",
        where: "Docker Documentation & Docker-Compose Guides.",
        how: "1. Create Dockerfile and Docker-Compose setup for agent services.\n2. Build isolated container sandbox for untrusted agent code execution.\n3. Submit Lab 6.",
        projectOptions: []
      },
      {
        w: 55,
        title: "Midterm Build Sprint & DevAgent System",
        resource: "Midterm Exam Specs",
        type: "midterm_sprint",
        what: "Build and test DevAgent: Multi-Agent Autonomous Software Engineer for the Midterm Practical Exam.",
        why: "Synthesizes multi-agent orchestration, state graphs, and container sandboxing into a working software development tool.",
        when: "Dedicated Midterm Build Sprint.",
        where: "DevAgent Repository.",
        how: "1. Wire LangGraph state graph connecting Architect, Coder, and Tester agents.\n2. Execute sandboxed code tests in Docker containers.\n3. Audit code quality and prepare defense presentation.",
        projectOptions: []
      },
      {
        w: 56,
        title: "Midterm Exam: DevAgent Autonomous Engineer",
        resource: "Midterm Exam Deliverable",
        type: "midterm",
        what: "Deliver DevAgent: Autonomous Multi-Agent System using LangGraph that receives feature requests, writes code, runs unit tests in Docker, and self-corrects errors.",
        why: "Proves mastery of multi-agent state orchestration, autonomous planning, and sandboxed tool execution.",
        when: "Submission Deadline: Sunday 11:59 PM.",
        where: "GitHub Repository + DEFENSE.md.",
        how: "1. Commit complete multi-agent codebase to GitHub.\n2. Verify zero failing unit test runs in sandboxed execution.\n3. Record 5-minute defense video walkthrough.",
        projectOptions: [
          {
            id: "s4_midterm",
            title: "Midterm Practical Exam: DevAgent System",
            desc: "An autonomous multi-agent software engineering system built with LangGraph, Docker container sandboxing, and self-correcting unit test loops.",
            pdfBrief: "../assets/project-briefs/sem4_midterm.pdf"
          }
        ],
        aiPrompt: "Act as a Principal AI Systems Architect. Review my LangGraph multi-agent implementation. Evaluate StateGraph transition correctness, Docker execution sandboxing, human-in-the-loop safety interrupts, and agent trajectory tracing in LangSmith."
      },
      {
        w: 57,
        title: "Flagship Capstone Sprint 1: Architecture & Topology",
        resource: "Capstone Architecture Blueprint",
        type: "sprint",
        what: "Flagship Capstone Kickoff: Draft ARCHITECTURE.md detailing system topology, state graph nodes, tool schemas, and multi-agent roles.",
        why: "Establishes production-grade system specification before building enterprise multi-agent platforms.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "Capstone Repository.",
        how: "1. Define multi-agent state models and graph node interactions.\n2. Draft ARCHITECTURE.md and submit Capstone proposal.\n3. Submit Sprint 1 deliverable.",
        projectOptions: [
          {
            id: "s4_capstone_a",
            title: "Capstone Option A: AutoMatrix Enterprise Agent Platform",
            desc: "Enterprise Multi-Agent System for Autonomous Cloud Infrastructure Orchestration, featuring LangGraph state graphs, Docker sandboxing, human approval gates, and LangSmith tracing.",
            pdfBrief: "../assets/project-briefs/sem4_capstone_a.pdf"
          },
          {
            id: "s4_capstone_b",
            title: "Capstone Option B: NeuralResearch Multi-Agent System",
            desc: "Autonomous Academic Research & Synthesis Engine using specialized researcher, analyst, and writer agents with real-time web search tools and citation verification.",
            pdfBrief: "../assets/project-briefs/sem4_capstone_b.pdf"
          }
        ]
      },
      {
        w: 58,
        title: "Flagship Capstone Sprint 2: Tool Execution Sandbox",
        resource: "LangGraph Tool Node Specs",
        type: "sprint",
        what: "Custom tool node integrations and Docker sandboxing for secure code execution and external API calls.",
        why: "Protects production host systems while allowing agents to execute arbitrary scripts safely.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "Capstone Repository.",
        how: "1. Build Pydantic tool definitions and Docker container execution driver.\n2. Test sandboxed execution of agent-generated code.\n3. Submit Sprint 2 deliverable.",
        projectOptions: []
      },
      {
        w: 59,
        title: "Flagship Capstone Sprint 3: State Graph & Memory",
        resource: "LangGraph State & Checkpointer Docs",
        type: "sprint",
        what: "LangGraph StateGraph implementation with persistent checkpointers (PostgreSQL) for cross-session agent state.",
        why: "Enables long-running multi-agent workflows to pause, resume, and retain context indefinitely.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "Capstone Repository.",
        how: "1. Configure PostgresSaver checkpointer for LangGraph.\n2. Validate state graph resume capabilities across agent restarts.\n3. Submit Sprint 3 deliverable.",
        projectOptions: []
      },
      {
        w: 60,
        title: "Flagship Capstone Sprint 4: Agent Streaming UI",
        resource: "Next.js / React Server Sent Events (SSE)",
        type: "sprint",
        what: "Real-time user interface streaming agent reasoning steps, state graph transitions, and tool outputs to the client.",
        why: "Delivers full transparency into agent thinking trajectories and current execution status.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "Capstone Repository.",
        how: "1. Implement SSE (Server-Sent Events) endpoint in FastAPI streaming LangGraph events.\n2. Render real-time execution graph UI in React/Next.js.\n3. Submit Sprint 4 deliverable.",
        projectOptions: []
      },
      {
        w: 61,
        title: "Flagship Capstone Sprint 5: Human Intercept Layer",
        resource: "LangGraph Interrupt & Approval API",
        type: "sprint",
        what: "Human-in-the-loop review interface allowing human operators to inspect, edit, or reject pending agent tool calls.",
        why: "Ensures enterprise safety standards for mission-critical operations.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "Capstone Repository.",
        how: "1. Implement graph interrupts before high-risk execution nodes.\n2. Build approval/rejection UI controls in web dashboard.\n3. Submit Sprint 5 deliverable.",
        projectOptions: []
      },
      {
        w: 62,
        title: "Flagship Capstone Sprint 6: Observability Suite",
        resource: "LangSmith / Phoenix Benchmarks",
        type: "sprint",
        what: "Full observability suite setup using LangSmith / Phoenix with benchmark test suites evaluating agent success rates.",
        why: "Provides empirical validation of agent accuracy, reliability, and cost-efficiency.",
        when: "Friday Deep Work + Weekend Sprint.",
        where: "Capstone Repository.",
        how: "1. Run benchmark evaluation dataset through multi-agent system.\n2. Generate performance, latency, and cost telemetry report.\n3. Submit Sprint 6 deliverable.",
        projectOptions: []
      },
      {
        w: 63,
        title: "Cloud Release & Open-Source Maintainer Defense",
        resource: "Production Cloud Hosting & Open Source Docs",
        type: "final_sprint",
        what: "Production cloud deployment (AWS/GCP/Kubernetes), open-source repository documentation setup, zero-bug code audit, and defense prep.",
        why: "Prepares the candidate to operate as an industry-ready Autonomous AI Systems Engineer and Open-Source Maintainer.",
        when: "Final Production Launch.",
        where: "Cloud Infrastructure.",
        how: "1. Deploy full multi-agent system to production cloud hosts.\n2. Verify zero-bug SonarQube clearance.\n3. Prepare capstone defense demonstration.",
        projectOptions: []
      },
      {
        w: 64,
        title: "Final Capstone Defense: AutoMatrix Platform Launch",
        resource: "Final Capstone Deliverable",
        type: "final",
        what: "Graduate & Defense: Complete public release of Flagship Autonomous AI Capstone System + Live Defense Presentation before technical review panel.",
        why: "Unlocks official graduation and earns the primary title of Autonomous AI Systems Engineer & Product Architect!",
        when: "Submission Deadline: Sunday 11:59 PM.",
        where: "Live Production Cloud Deployment + GitHub Repository.",
        how: "1. Launch live cloud deployment.\n2. Submit final codebase, documentation, and benchmark report.\n3. Conduct formal academic defense video presentation.",
        projectOptions: [
          {
            id: "s4_final",
            title: "Final Practical Capstone: AutoMatrix Platform",
            desc: "A production-deployed enterprise multi-agent system with LangGraph orchestration, Docker execution sandboxing, human approval gates, and complete LangSmith observability.",
            pdfBrief: "../assets/project-briefs/sem4_final.pdf"
          }
        ],
        aiPrompt: "Act as a Chief AI Architect and Academic Defense Chair. Evaluate my multi-agent autonomous capstone platform. Review LangGraph state graph design, Docker execution isolation, human-in-the-loop intercept mechanics, LLMOps tracing benchmarks, and production cloud architecture."
      }
    ]
  }
];

/* Helper function to extract all quest items for a given week */
function getQuestItemsForWeek(wObj) {
  const list = [];

  list.push({
    tag: "LECTURE & READING (150 MINS)",
    title: `Study & Master: ${wObj.title}`,
    desc: `Primary Resource: ${wObj.resource}. Complete assigned textbook readings, syntax documentation, and theoretical concepts.`,
  });

  list.push({
    tag: "MANDATORY TA LAB (120 MINS)",
    title: `Coding Lab: ${wObj.title}`,
    desc: `Complete hands-on coding lab exercises, terminal commands, or syntax katas under strict code audit guidelines.`,
  });

  if (wObj.type === "term_kickoff") {
    list.push({
      tag: "TERM PROJECT KICKOFF",
      title: `Submit Proposal: ${wObj.title}`,
      desc: "Draft and submit ARCHITECTURE.md specifying database schemas, system architecture, and milestone roadmaps.",
    });
  } else if (wObj.type === "midterm_sprint") {
    list.push({
      tag: "MIDTERM BUILD SPRINT",
      title: `Build Sprint: ${wObj.title}`,
      desc: "Synthesize all course concepts learned so far into a complete working build for the Midterm Practical Exam.",
    });
  } else if (wObj.type === "midterm") {
    list.push({
      tag: "MIDTERM PRACTICAL EXAM",
      title: `Exam Deliverable: ${wObj.title}`,
      desc: "Submit public GitHub repository + DEFENSE.md + 5-minute video presentation walkthrough before Sunday 11:59 PM deadline.",
    });
  } else if (wObj.type === "sprint") {
    list.push({
      tag: "TERM PROJECT SPRINT",
      title: `Deliverable: ${wObj.title}`,
      desc: "Execute weekly Term Project milestone requirements during Friday Deep Work and weekend coding sprints.",
    });
  } else if (wObj.type === "final_sprint") {
    list.push({
      tag: "FINAL AUDIT & POLISH",
      title: `Audit & Polish: ${wObj.title}`,
      desc: "Run code through SonarQube automated checkers, clear bugs, write documentation, and prepare final defense presentation.",
    });
  } else if (wObj.type === "final") {
    list.push({
      tag: "FINAL PRACTICAL EXAM & DEFENSE",
      title: `Final Capstone Release: ${wObj.title}`,
      desc: "Deploy live production build, submit complete codebase, and conduct formal academic defense presentation.",
    });
  } else {
    list.push({
      tag: "WEEKLY SPRINT DELIVERABLE",
      title: `Lab Deliverable: ${wObj.title}`,
      desc: "Code, test, and commit functional weekly code deliverables to your public GitHub repository.",
    });
  }

  list.push({
    tag: "CODE AUDIT & DEFENSE PREP",
    title: `Code Quality Inspection`,
    desc: "Pass automated SonarQube syntax checks, ensure zero failing unit tests, and maintain clean documentation.",
  });

  return list;
}

/* Helper function to fetch week data by week number */
function getWeekData(weekNum) {
  for (const sem of ROADMAP) {
    const found = sem.weeks.find((w) => w.w === weekNum);
    if (found) return found;
  }
  return ROADMAP[0].weeks[0];
}

/* ==========================================================================
   2. APPLICATION STATE ENGINE
   ========================================================================== */
const DEFAULT_STATE = {
  user: {
    name: "AI Engineer Candidate",
    titles: [],
    earnedBalanceLogs: {},
    shown70Popups: [],
    shown100Popups: [],
  },
  startDate: new Date().toISOString(),
  currentTheme: "light",
  activeWeekSelected: 1,
  questStates: {},
  scheduleSubTab: "daily", // 'daily' | 'weekly' | 'semester'
  scheduleViewDate: new Date().toISOString(),
};

let state = JSON.parse(localStorage.getItem("AI_ENG_PROGRAM_STATE_V1")) || DEFAULT_STATE;
if (!state.startDate) state.startDate = new Date().toISOString();
if (!state.user.shown70Popups) state.user.shown70Popups = [];
if (!state.user.shown100Popups) state.user.shown100Popups = [];
if (!state.user.name) state.user.name = "AI Engineer Candidate";
if (!state.scheduleSubTab) state.scheduleSubTab = "daily";
if (!state.scheduleViewDate) state.scheduleViewDate = new Date().toISOString();

function saveState() {
  localStorage.setItem("AI_ENG_PROGRAM_STATE_V1", JSON.stringify(state));
  renderApp();
}

/* ==========================================================================
   3. TIMESTAMPS & DEADLINES GENERATOR
   ========================================================================== */
function getWeekDeadlineText(weekNum) {
  const startMs = new Date(state.startDate).getTime();
  const weekEndMs = startMs + weekNum * 7 * 24 * 60 * 60 * 1000;
  const nowMs = Date.now();
  const diffMs = weekEndMs - nowMs;

  if (diffMs <= 0) {
    return `<span class="deadline-badge urgent"><i class="fa-solid fa-clock"></i> Deadline Passed (Sun 11:59 PM)</span>`;
  }

  const daysLeft = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (daysLeft < 2) {
    return `<span class="deadline-badge urgent"><i class="fa-solid fa-fire"></i> ${daysLeft}d ${hoursLeft}h left (Sun 11:59 PM)</span>`;
  }
  return `<span class="deadline-badge"><i class="fa-solid fa-clock"></i> ${daysLeft}d ${hoursLeft}h left</span>`;
}

function getSemesterDeadlineText(semNum) {
  const startMs = new Date(state.startDate).getTime();
  const semEndMs = startMs + semNum * 16 * 7 * 24 * 60 * 60 * 1000;
  const nowMs = Date.now();
  const diffMs = semEndMs - nowMs;

  if (diffMs <= 0) {
    return `<span class="deadline-badge urgent"><i class="fa-solid fa-clock"></i> Semester Concluded</span>`;
  }

  const weeksLeft = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
  const daysLeft = Math.floor((diffMs % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));

  return `<span class="deadline-badge"><i class="fa-solid fa-calendar"></i> ${weeksLeft}w ${daysLeft}d left</span>`;
}

/* ==========================================================================
   4. PROGRESSION & UNLOCK LOGIC ENGINE
   ========================================================================== */
function calculateSemesterProgress(semNum) {
  const semData = ROADMAP.find((s) => s.sem === semNum);
  let totalItems = 0;
  let completedItems = 0;

  semData.weeks.forEach((w) => {
    const qList = getQuestItemsForWeek(w);
    const qStates = state.questStates[w.w] || qList.map(() => 0);
    totalItems += qList.length;
    completedItems += qStates.filter((s) => s === 1).length;
  });

  return {
    total: totalItems,
    completed: completedItems,
    pct: totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0,
  };
}

function calculateOverallProgress() {
  let total = 0;
  let completed = 0;
  for (let s = 1; s <= 4; s++) {
    const p = calculateSemesterProgress(s);
    total += p.total;
    completed += p.completed;
  }
  return {
    total: total,
    completed: completed,
    pct: total > 0 ? Math.round((completed / total) * 100) : 0,
  };
}

function getWeekUnlockStatus(weekNum) {
  if (weekNum === 1) return true;

  const currentSemNum = Math.ceil(weekNum / 16);
  const isFirstWeekOfSemester = (weekNum - 1) % 16 === 0;

  if (isFirstWeekOfSemester && currentSemNum > 1) {
    const prevSemProgress = calculateSemesterProgress(currentSemNum - 1);
    if (prevSemProgress.pct >= 70) {
      return true;
    }
  }

  const prevWeekQuests = state.questStates[weekNum - 1] || [];
  const prevWeekExpectedCount = getQuestItemsForWeek(getWeekData(weekNum - 1)).length;
  if (prevWeekQuests.length < prevWeekExpectedCount) return false;
  return prevWeekQuests.every((st) => st === 1 || st === 2);
}

function checkMilestonesAndTriggers() {
  ROADMAP.forEach((s) => {
    const p = calculateSemesterProgress(s.sem);

    if (p.pct >= 70 && !state.user.titles.includes(s.unlockTitle)) {
      state.user.titles.push(s.unlockTitle);
    }

    if (p.pct >= 70 && !state.user.shown70Popups.includes(s.sem)) {
      state.user.shown70Popups.push(s.sem);
      triggerCongratsModal(s.sem, 70);
    }

    if (p.pct === 100 && !state.user.shown100Popups.includes(s.sem)) {
      state.user.shown100Popups.push(s.sem);
      triggerCongratsModal(s.sem, 100);
    }
  });
}

function getCurrentTitle() {
  if (state.user.titles.length === 0) return "AI Systems Candidate";
  return state.user.titles[state.user.titles.length - 1];
}

function countCompletedProjects() {
  let count = 0;
  ROADMAP.forEach((s) => {
    s.weeks.forEach((w) => {
      if (w.type === "midterm" || w.type === "final") {
        const qStates = state.questStates[w.w] || [];
        if (qStates.some((st) => st === 1)) count++;
      }
    });
  });
  return count;
}

function countShippedContent() {
  let count = 0;
  ROADMAP.forEach((s) => {
    s.weeks.forEach((w) => {
      const qStates = state.questStates[w.w] || [];
      count += qStates.filter((st) => st === 1).length;
    });
  });
  return count;
}

function toggleQuestState(weekNum, questIdx) {
  if (!state.questStates[weekNum]) {
    const expectedLength = getQuestItemsForWeek(getWeekData(weekNum)).length;
    state.questStates[weekNum] = new Array(expectedLength).fill(0);
  }

  const currentVal = state.questStates[weekNum][questIdx] || 0;
  const nextVal = (currentVal + 1) % 3;
  state.questStates[weekNum][questIdx] = nextVal;

  saveState();
}

/* ==========================================================================
   5. RENDER FUNCTIONS
   ========================================================================== */
function renderApp() {
  checkMilestonesAndTriggers();
  document.documentElement.setAttribute("data-theme", state.currentTheme);

  setTimeout(() => {
    const l = document.getElementById("loader");
    if (l) l.classList.add("hidden");
  }, 300);

  document.getElementById("sidebar-user-name").innerText = state.user.name;
  document.getElementById("dash-user-name").innerText = state.user.name;
  document.getElementById("profile-name-input").value = state.user.name;
  document.getElementById("sidebar-avatar-initial").innerText = state.user.name.charAt(0).toUpperCase();
  document.getElementById("profile-avatar-large").innerText = state.user.name.charAt(0).toUpperCase();

  const currentTitle = getCurrentTitle();
  document.getElementById("sidebar-user-title").innerText = currentTitle;
  document.getElementById("dash-user-title").innerText = currentTitle;

  const isDark = state.currentTheme === "dark";
  document.getElementById("theme-icon").innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
  document.getElementById("theme-text").innerText = isDark ? "Light mode" : "Dark mode";

  renderDashboard();
  renderLearnPathway();
  renderQuests();
  renderAccountBook();
  renderSchedule();
  renderMyCourse();
  renderProfile();
}

function updateUserName(newName) {
  if (newName.trim()) {
    state.user.name = newName.trim();
    saveState();
  }
}

function toggleTheme() {
  state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
  saveState();
}

function switchTab(tabId) {
  document.querySelectorAll(".nav-item").forEach((el) => el.classList.remove("active"));
  const activeNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  if (activeNav) activeNav.classList.add("active");

  document.querySelectorAll(".tab-pane").forEach((el) => el.classList.remove("active"));
  const targetPane = document.getElementById(`tab-${tabId}`);
  if (targetPane) targetPane.classList.add("active");

  const titleMap = {
    dashboard: ["Dashboard", "Track your academic progression, deadlines, and weekly deliverables"],
    learn: ["Curriculum & Pathway", "Explore weekly modules, course codes, and lab specs"],
    quests: ["Weekly Lab Checklist", "Mark off completed lectures, coding labs, and sprint deliverables"],
    accountbook: ["Account Book", "Track your accountability target balances and project earnings"],
    schedule: ["University Schedule", "Interactive daily, weekly, and semester course schedules"],
    mycourse: ["Syllabus & Titles", "Full course syllabus, degree specialization titles, and certifications"],
    profile: ["Engineer Profile", "Manage your titles, candidate name, and export achievement cards"],
  };

  if (titleMap[tabId]) {
    document.getElementById("page-heading").innerText = titleMap[tabId][0];
    document.getElementById("page-subheading").innerText = titleMap[tabId][1];
  }
}

document.querySelectorAll(".nav-item button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const tab = e.currentTarget.parentElement.getAttribute("data-tab");
    switchTab(tab);
  });
});

/* DASHBOARD */
function renderDashboard() {
  const overall = calculateOverallProgress();
  document.getElementById("full-course-progress-bar").style.width = `${overall.pct}%`;
  document.getElementById("full-course-progress-text").innerText = `${overall.pct}%`;
  document.getElementById("full-course-items-text").innerText = `${overall.completed} / ${overall.total} academic deliverables complete`;

  const currentSemNum = Math.min(4, Math.ceil(state.activeWeekSelected / 16));
  const semProgress = calculateSemesterProgress(currentSemNum);
  const semData = ROADMAP.find((s) => s.sem === currentSemNum);

  document.getElementById("dash-sem-num").innerText = currentSemNum;
  document.getElementById("dash-sem-name").innerText = semData.title;
  document.getElementById("current-sem-progress-bar").style.width = `${semProgress.pct}%`;
  document.getElementById("current-sem-progress-text").innerText = `${semProgress.pct}%`;
  document.getElementById("dash-sem-deadline-badge").innerHTML = getSemesterDeadlineText(currentSemNum);

  const weekObj = getWeekData(state.activeWeekSelected);
  document.getElementById("dash-week-title").innerText = `Week ${weekObj.w}: ${weekObj.title}`;
  document.getElementById("dash-week-deadline").innerHTML = getWeekDeadlineText(weekObj.w);

  const qListContainer = document.getElementById("dash-quest-list");
  qListContainer.innerHTML = "";
  const quests = getQuestItemsForWeek(weekObj);
  const qStates = state.questStates[weekObj.w] || quests.map(() => 0);

  quests.forEach((q, idx) => {
    const st = qStates[idx] || 0;
    const div = document.createElement("div");
    div.className = "quest-item";
    div.setAttribute("data-state", st);
    div.onclick = () => toggleQuestState(weekObj.w, idx);
    div.innerHTML = `
          <div class="quest-checkbox">${st === 1 ? '<i class="fa-solid fa-check"></i>' : st === 2 ? '<i class="fa-solid fa-xmark"></i>' : ""}</div>
          <div class="quest-content">
            <div class="quest-tag">${q.tag}</div>
            <div class="quest-title">${q.title}</div>
          </div>
          <span style="font-size:0.75rem; font-weight:700; color:${st === 1 ? "var(--sage)" : st === 2 ? "var(--rust)" : "var(--ink-dim)"};">
            ${st === 1 ? "Done" : st === 2 ? "Incomplete" : "Pending"}
          </span>
        `;
    qListContainer.appendChild(div);
  });

  document.getElementById("dash-portfolio-count").innerText = `${countCompletedProjects()} / 8`;
  document.getElementById("dash-content-count").innerText = `${countShippedContent()} / ${overall.total}`;

  const titlesContainer = document.getElementById("dash-titles-list");
  if (state.user.titles.length === 0) {
    titlesContainer.innerText = "None yet — reach 70% in Semester 1 to unlock 'Junior Frontend Developer & Scripting Specialist'.";
  } else {
    titlesContainer.innerHTML = state.user.titles
      .map(
        (t) =>
          `<span style="display:inline-flex; align-items:center; gap:0.4rem; background:var(--surface2); padding:0.3rem 0.6rem; border-radius:8px; margin-right:0.4rem; margin-bottom:0.4rem; font-size:0.85rem;"><i class="fa-solid fa-award" style="color:var(--gold);"></i> ${t}</span>`,
      )
      .join("");
  }
}

/* LEARN PATHWAY */
function renderLearnPathway() {
  const currentSemNum = Math.ceil(state.activeWeekSelected / 16);
  const semData = ROADMAP.find((s) => s.sem === currentSemNum);
  document.getElementById("learn-sem-title").innerText = `Semester ${semData.sem} – ${semData.title}`;

  const semBtnContainer = document.getElementById("sem-switcher-buttons");
  semBtnContainer.innerHTML = "";
  ROADMAP.forEach((s) => {
    const btn = document.createElement("button");
    btn.className = `week-chip ${s.sem === currentSemNum ? "active" : ""}`;
    btn.innerText = `Semester ${s.sem}`;
    btn.onclick = () => {
      state.activeWeekSelected = (s.sem - 1) * 16 + 1;
      saveState();
    };
    semBtnContainer.appendChild(btn);
  });

  const container = document.getElementById("pathway-nodes-container");
  container.innerHTML = "";

  semData.weeks.forEach((w) => {
    const isUnlocked = getWeekUnlockStatus(w.w);
    const isActive = w.w === state.activeWeekSelected;
    const qStates = state.questStates[w.w] || [];
    const isCompleted = qStates.length > 0 && qStates.every((s) => s === 1);

    const node = document.createElement("div");
    node.className = `pathway-week-node ${isUnlocked ? "unlocked" : "locked"} ${isActive ? "active-week" : ""}`;

    node.onclick = () => {
      if (isUnlocked) openWeekDrawer(w.w);
    };

    node.innerHTML = `
          <div class="node-left">
            <div class="node-number">${isUnlocked ? (isCompleted ? '<i class="fa-solid fa-check"></i>' : w.w) : '<i class="fa-solid fa-lock"></i>'}</div>
            <div class="node-details">
              <h4>Week ${w.w}: ${w.title}</h4>
              <p>${w.resource}</p>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; align-items:flex-end; gap:0.3rem;">
            ${isUnlocked ? getWeekDeadlineText(w.w) : ""}
            ${
              !isUnlocked
                ? `<span class="node-status-badge badge-locked"><i class="fa-solid fa-lock"></i> Locked</span>`
                : isCompleted
                  ? `<span class="node-status-badge badge-done">Completed</span>`
                  : `<span class="node-status-badge badge-active">View Details &rsaquo;</span>`
            }
          </div>
        `;
    container.appendChild(node);
  });
}

function openWeekDrawer(weekNum) {
  const wObj = getWeekData(weekNum);
  const semNum = Math.ceil(weekNum / 16);

  document.getElementById("drawer-week-tag").innerText = `SEMESTER ${semNum} · WEEK ${wObj.w}`;
  document.getElementById("drawer-week-title").innerText = wObj.title;

  const body = document.getElementById("drawer-body-content");
  body.innerHTML = "";

  // WHAT Section
  const whatSec = document.createElement("div");
  whatSec.className = "drawer-section";
  whatSec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-circle-info"></i> WHAT (Topics & Curriculum Coverage)</div>
    <h3>${wObj.title}</h3>
    <p style="margin-top:0.4rem; line-height:1.6;">${wObj.what}</p>
  `;
  body.appendChild(whatSec);

  // WHY Section
  const whySec = document.createElement("div");
  whySec.className = "drawer-section";
  whySec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-lightbulb"></i> WHY (Engineering Relevance & Competency)</div>
    <p style="line-height:1.6;">${wObj.why}</p>
  `;
  body.appendChild(whySec);

  // WHEN Section
  const whenSec = document.createElement("div");
  whenSec.className = "drawer-section";
  whenSec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-clock"></i> WHEN (Weekly Commitment & Submission Deadline)</div>
    <p style="line-height:1.6;">${wObj.when}</p>
    <div style="margin-top:0.5rem;">Deadline status: ${getWeekDeadlineText(wObj.w)}</div>
  `;
  body.appendChild(whenSec);

  // WHERE Section
  const whereSec = document.createElement("div");
  whereSec.className = "drawer-section";
  whereSec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-location-dot"></i> WHERE (Primary Textbooks & Learning Platforms)</div>
    <p>Primary Textbooks: <strong>${wObj.resource}</strong></p>
    <p style="margin-top:0.3rem;">Resources & Sandbox Platforms: ${wObj.where}</p>
  `;
  body.appendChild(whereSec);

  // HOW Section
  const howSec = document.createElement("div");
  howSec.className = "drawer-section";
  howSec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-list-check"></i> HOW (Execution & Lab Submission Method)</div>
    <p style="white-space: pre-line; line-height:1.6;">${wObj.how}</p>
  `;
  body.appendChild(howSec);

  // PROJECT BRIEFS & AI PROMPT (For Midterm, Final & Term Projects)
  if (wObj.projectOptions && wObj.projectOptions.length > 0) {
    const projSec = document.createElement("div");
    projSec.className = "drawer-section";
    projSec.style.borderColor = "var(--gold)";

    let optionsHTML = `
      <div class="drawer-section-title"><i class="fa-solid fa-diagram-project"></i> PRACTICAL EXAM & PROJECT BRIEFS</div>
      <p style="font-size:0.85rem; color:var(--ink-dim); margin-bottom:1rem;">
        Review project specifications and download detailed PDF briefs below:
      </p>
      <div style="display:flex; flex-direction:column; gap:0.75rem;">
    `;

    wObj.projectOptions.forEach((opt) => {
      optionsHTML += `
        <div style="background:var(--surface); border:1px solid var(--line); padding:1rem; border-radius:10px;">
          <h4 style="color:var(--plum); font-size:0.95rem;">${opt.title}</h4>
          <p style="font-size:0.82rem; color:var(--ink-dim); margin:0.3rem 0 0.6rem 0;">${opt.desc}</p>
          <a href="${opt.pdfBrief}" download target="_blank" class="btn-secondary" style="font-size:0.8rem; padding:0.4rem 0.8rem;">
            <i class="fa-solid fa-file-pdf" style="color:var(--rust);"></i> Download PDF Specification Brief
          </a>
        </div>
      `;
    });

    optionsHTML += `</div>`;

    if (wObj.aiPrompt) {
      optionsHTML += `
        <div style="margin-top:1.25rem; padding-top:1rem; border-top:1px dashed var(--line);">
          <div style="font-size:0.8rem; font-weight:800; color:var(--gold); margin-bottom:0.4rem;">
            <i class="fa-solid fa-robot"></i> ACADEMIC DEFENSE & CODE AUDIT PROMPT
          </div>
          <p style="font-size:0.8rem; color:var(--ink-dim); margin-bottom:0.5rem;">
            Copy this prompt into your AI model (ChatGPT/Claude/Gemini) to execute an automated academic code audit and defense review:
          </p>
          <div style="position:relative; background:var(--surface2); padding:0.85rem; border-radius:8px; border:1px solid var(--line); font-size:0.8rem; color:var(--ink); font-family:monospace; line-height:1.4; word-break:break-word;">
            ${wObj.aiPrompt}
            <button class="btn-primary" onclick="copyPromptToClipboard('${wObj.aiPrompt.replace(/'/g, "\\'")}', this)" style="margin-top:0.75rem; font-size:0.75rem; padding:0.35rem 0.75rem; width:100%;">
              <i class="fa-solid fa-copy"></i> Copy Prompt to Clipboard
            </button>
          </div>
        </div>
      `;
    }

    projSec.innerHTML = optionsHTML;
    body.appendChild(projSec);
  }

  // DETAILED LAB BREAKDOWN
  const questBreakdown = document.createElement("div");
  questBreakdown.className = "drawer-section";
  questBreakdown.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-tasks"></i> WEEKLY LAB DELIVERABLES CHECKLIST</div>
    <div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:0.5rem;">
      ${getQuestItemsForWeek(wObj)
        .map(
          (q, i) => `
        <div style="background:var(--surface); border:1px solid var(--line); padding:0.75rem; border-radius:8px;">
          <span style="font-size:0.7rem; font-weight:800; color:var(--gold); text-transform:uppercase">${i + 1}. ${q.tag}</span>
          <div style="font-size:0.88rem; font-weight:700; color:var(--ink);">${q.title}</div>
          <div style="font-size:0.8rem; color:var(--ink-dim); margin-top:0.2rem;">${q.desc}</div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  body.appendChild(questBreakdown);

  // CTA Button
  const ctaDiv = document.createElement("div");
  ctaDiv.style.marginTop = "0.5rem";
  ctaDiv.innerHTML = `<button class="btn-primary" style="width:100%;" onclick="jumpToQuestsFromDrawer(${wObj.w})">Open Lab Checklist for Week ${wObj.w} &rsaquo;</button>`;
  body.appendChild(ctaDiv);

  document.getElementById("week-drawer-overlay").classList.add("open");
}

function copyPromptToClipboard(text, btnEl) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btnEl.innerHTML;
    btnEl.innerHTML = '<i class="fa-solid fa-check"></i> Copied to Clipboard!';
    btnEl.style.background = 'var(--sage)';
    setTimeout(() => {
      btnEl.innerHTML = originalText;
      btnEl.style.background = '';
    }, 2000);
  }).catch(() => {
    alert("Prompt text copied!");
  });
}

function closeWeekDrawer() {
  document.getElementById("week-drawer-overlay").classList.remove("open");
}

function jumpToQuestsFromDrawer(weekNum) {
  state.activeWeekSelected = weekNum;
  saveState();
  closeWeekDrawer();
  switchTab("quests");
}

/* QUESTS TAB */
function renderQuests() {
  const weekBar = document.getElementById("quests-week-bar");
  weekBar.innerHTML = "";

  for (let w = 1; w <= 64; w++) {
    const isUnlocked = getWeekUnlockStatus(w);
    const chip = document.createElement("div");
    chip.className = `week-chip ${w === state.activeWeekSelected ? "active" : ""} ${!isUnlocked ? "disabled" : ""}`;
    chip.innerText = `W${w}`;
    if (isUnlocked) {
      chip.onclick = () => {
        state.activeWeekSelected = w;
        saveState();
      };
    }
    weekBar.appendChild(chip);
  }

  const weekObj = getWeekData(state.activeWeekSelected);
  const currentSemNum = Math.ceil(weekObj.w / 16);

  document.getElementById("quest-header-sem").innerText = `SEMESTER ${currentSemNum} · WEEK ${weekObj.w}`;
  document.getElementById("quest-header-title").innerText = weekObj.title;
  document.getElementById("quest-header-resource").innerText = `Textbooks: ${weekObj.resource}`;
  document.getElementById("quest-header-deadline").innerHTML = getWeekDeadlineText(weekObj.w);

  const questsContainer = document.getElementById("quest-items-container");
  questsContainer.innerHTML = "";

  const quests = getQuestItemsForWeek(weekObj);
  const qStates = state.questStates[weekObj.w] || quests.map(() => 0);

  quests.forEach((q, idx) => {
    const st = qStates[idx] || 0;
    const item = document.createElement("div");
    item.className = "quest-item";
    item.setAttribute("data-state", st);
    item.onclick = () => toggleQuestState(weekObj.w, idx);

    item.innerHTML = `
          <div class="quest-checkbox">${st === 1 ? '<i class="fa-solid fa-check"></i>' : st === 2 ? '<i class="fa-solid fa-xmark"></i>' : ""}</div>
          <div class="quest-content">
            <div class="quest-tag">${q.tag}</div>
            <div class="quest-title">${q.title}</div>
            <div class="quest-desc">${q.desc}</div>
          </div>
          <span style="font-size:0.8rem; font-weight:700; color:${st === 1 ? "var(--sage)" : st === 2 ? "var(--rust)" : "var(--ink-dim)"};">
            ${st === 1 ? "Done" : st === 2 ? "Incomplete" : "Mark"}
          </span>
        `;
    questsContainer.appendChild(item);
  });
}

/* ACCOUNT BOOK TAB */
function renderAccountBook() {
  const targetPerMonth = 500;
  let totalExpected = 16 * targetPerMonth;
  let totalLogged = 0;

  const select = document.getElementById("log-month-select");
  select.innerHTML = "";
  for (let m = 1; m <= 16; m++) {
    const opt = document.createElement("option");
    opt.value = m;
    opt.innerText = `Month ${m}`;
    select.appendChild(opt);
  }

  const tbody = document.getElementById("account-log-tbody");
  tbody.innerHTML = "";

  for (let m = 1; m <= 16; m++) {
    const logged =
      state.user.earnedBalanceLogs[m] !== undefined
        ? Number(state.user.earnedBalanceLogs[m])
        : null;
    if (logged !== null) totalLogged += logged;

    const target = targetPerMonth;
    const balance = logged !== null ? logged - target : -target;

    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td><strong>Month ${m}</strong></td>
          <td>$${target}</td>
          <td>${logged !== null ? `$${logged}` : '<span style="color:var(--ink-dim)">Not logged</span>'}</td>
          <td style="font-weight:700; color: ${balance >= 0 ? "var(--sage)" : "var(--rust)"}">
            ${balance >= 0 ? `+$${balance}` : `-$${Math.abs(balance)}`}
          </td>
        `;
    tbody.appendChild(tr);
  }

  const netBalance = totalLogged - totalExpected;
  const balEl = document.getElementById("account-running-balance");
  balEl.innerText = netBalance >= 0 ? `+$${netBalance}` : `-$${Math.abs(netBalance)}`;
  balEl.className = `balance-amount ${netBalance >= 0 ? "positive" : "negative"}`;
}

function handleLogEarning(e) {
  e.preventDefault();
  const month = document.getElementById("log-month-select").value;
  const amount = document.getElementById("log-amount-input").value;
  if (month && amount !== "") {
    state.user.earnedBalanceLogs[month] = Number(amount);
    saveState();
    document.getElementById("log-amount-input").value = "";
  }
}

/* ==========================================================================
   SCHEDULE ENGINE — DAILY, WEEKLY & SEMESTER STUDENT TIMETABLES
   ========================================================================== */

function getCourseColorClass(courseCode) {
  if (!courseCode) return "tag-project";
  const code = courseCode.toUpperCase().trim();
  if (code.includes("101") || code.includes("201") || code.includes("301") || code.includes("401")) return "tag-cs101";
  if (code.includes("102") || code.includes("202") || code.includes("302") || code.includes("402")) return "tag-cs102";
  if (code.includes("103") || code.includes("203") || code.includes("303") || code.includes("403")) return "tag-cs103";
  if (code.includes("104") || code.includes("204") || code.includes("304") || code.includes("404")) return "tag-cs104";
  if (code.includes("105") || code.includes("205") || code.includes("305") || code.includes("405")) return "tag-cs105";
  if (code.includes("106") || code.includes("206") || code.includes("306") || code.includes("406")) return "tag-cs106";
  if (code.includes("MIDTERM") || code.includes("FINAL") || code.includes("EXAM")) return "tag-exam";
  if (code.includes("TERM") || code.includes("PROJECT") || code.includes("SPRINT")) return "tag-project";
  return "tag-lab";
}

function setScheduleSubTab(subTabKey) {
  state.scheduleSubTab = subTabKey;
  saveState();
}

function renderSchedule() {
  const container = document.getElementById("tab-schedule");
  if (!container) return;

  const currentSemNum = Math.ceil(state.activeWeekSelected / 16);
  const semData = ROADMAP.find((s) => s.sem === currentSemNum);
  const currentSubTab = state.scheduleSubTab || "daily";

  let html = `
    <div class="schedule-toolbar">
      <div>
        <h3 style="margin:0; font-size:1.1rem; color:var(--ink);">Semester ${currentSemNum} Timetable</h3>
        <p style="margin:0.2rem 0 0 0; font-size:0.82rem; color:var(--ink-dim);">
          Online Self-Directed Study · Strict Academic Deadline Blocks
        </p>
      </div>
      <div class="schedule-subtabs">
        <button class="schedule-subtab-btn ${currentSubTab === 'daily' ? 'active' : ''}" onclick="setScheduleSubTab('daily')">
          <i class="fa-solid fa-clock"></i> Day Schedule
        </button>
        <button class="schedule-subtab-btn ${currentSubTab === 'weekly' ? 'active' : ''}" onclick="setScheduleSubTab('weekly')">
          <i class="fa-solid fa-calendar-week"></i> Week Schedule
        </button>
        <button class="schedule-subtab-btn ${currentSubTab === 'semester' ? 'active' : ''}" onclick="setScheduleSubTab('semester')">
          <i class="fa-solid fa-table-cells"></i> Semester Schedule
        </button>
      </div>
    </div>
  `;

  if (currentSubTab === "daily") {
    html += renderDailyHourlySchedule(semData);
  } else if (currentSubTab === "weekly") {
    html += renderWeeklyCourseMatrix(semData);
  } else {
    html += renderSemesterTimelineTable(semData);
  }

  container.innerHTML = html;
}

/* 1. DAY SCHEDULE — Divided by Hours (09:00 AM - 06:45 PM) */
function renderDailyHourlySchedule(semData) {
  const weekObj = getWeekData(state.activeWeekSelected);
  const courseCodes = semData.sem === 1 ? ["CS101", "CS102", "CS103", "CS104", "CS105", "CS106"]
    : semData.sem === 2 ? ["CS201", "CS202", "CS203", "CS204", "CS205", "CS206"]
    : semData.sem === 3 ? ["CS301", "CS302", "CS303", "CS304", "CS305", "CS306"]
    : ["CS401", "CS402", "CS403", "CS404", "CS405", "CS406"];

  const hourlyBlocks = [
    { time: "09:00 AM - 10:15 AM", title: `Lecture Block 1 (${courseCodes[0]})`, desc: "75-Min Core Theory & Documentation Study", code: courseCodes[0] },
    { time: "10:15 AM - 10:45 AM", title: "Academic Break", desc: "Code Digest & Rest", code: "BREAK" },
    { time: "10:45 AM - 12:00 PM", title: `Lecture Block 2 (${courseCodes[1]})`, desc: "75-Min Applied Mechanics & Conceptual Deep Dive", code: courseCodes[1] },
    { time: "12:00 PM - 12:30 PM", title: "Lunch Break", desc: "Midday Meal & Rest", code: "BREAK" },
    { time: "12:30 PM - 01:45 PM", title: `Lecture Block 3 (${courseCodes[2]})`, desc: "75-Min Architecture & Scripting Session", code: courseCodes[2] },
    { time: "01:45 PM - 02:15 PM", title: "Afternoon Refresh", desc: "Technical Synthesis Break", code: "BREAK" },
    { time: "02:15 PM - 03:30 PM", title: "Self-Directed Reading & Notes", desc: "Textbook Exercises & MDN Documentation", code: "CS-READING" },
    { time: "03:30 PM - 04:00 PM", title: "Coffee & Setup Break", desc: "Environment Configuration for Lab", code: "BREAK" },
    { time: "04:00 PM - 06:00 PM", title: "Mandatory TA Coding Lab", desc: "120-Min Hands-On Implementation & Exercise Build", code: "LAB" },
    { time: "06:00 PM - 06:45 PM", title: "Git Push & Code Quality Audit", desc: "SonarQube Inspection & Clean Commits", code: "AUDIT" }
  ];

  let dailyHTML = `
    <div style="margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center;">
      <h4 style="margin:0; color:var(--ink);">Student Daily Schedule — Week ${weekObj.w}</h4>
      <span class="course-tag tag-lab"><i class="fa-solid fa-laptop-code"></i> Total: 6 hrs study / 2 hrs lab daily</span>
    </div>
    <div class="daily-timeline-container">
  `;

  hourlyBlocks.forEach((slot) => {
    const isBreak = slot.code === "BREAK";
    const tagClass = getCourseColorClass(slot.code);
    const eventClass = slot.code.startsWith("CS") ? `event-${slot.code.toLowerCase()}` : "event-lab";

    dailyHTML += `
      <div class="timeline-hour-row">
        <div class="timeline-time-slot">${slot.time}</div>
        <div class="timeline-event-card ${isBreak ? '' : eventClass}" style="${isBreak ? 'background:transparent; border:1px dashed var(--line);' : ''}">
          <div class="timeline-event-info">
            <h5>${slot.title}</h5>
            <p>${slot.desc}</p>
          </div>
          <div>
            ${isBreak ? '<span style="font-size:0.75rem; color:var(--ink-dim); font-weight:600;">Break</span>' : `<span class="course-tag ${tagClass}">${slot.code}</span>`}
          </div>
        </div>
      </div>
    `;
  });

  dailyHTML += `</div>`;
  return dailyHTML;
}

/* 2. WEEK SCHEDULE — Rows: Course Codes | Columns: Days (Mon-Sun) */
function renderWeeklyCourseMatrix(semData) {
  const c = semData.sem === 1 ? ["CS101", "CS102", "CS103", "CS104", "CS105", "CS106"]
    : semData.sem === 2 ? ["CS201", "CS202", "CS203", "CS204", "CS205", "CS206"]
    : semData.sem === 3 ? ["CS301", "CS302", "CS303", "CS304", "CS305", "CS306"]
    : ["CS401", "CS402", "CS403", "CS404", "CS405", "CS406"];

  const matrixRows = [
    { code: c[0], mon: "Lecture (09:00 AM)", tue: "—", wed: "Lecture (09:00 AM)", thu: "—", fri: "Textbook Reading", sat: "Lab Session", sun: "Code Review" },
    { code: c[1], mon: "Lecture (10:45 AM)", tue: "—", wed: "Lecture (10:45 AM)", thu: "—", fri: "Textbook Reading", sat: "Lab Session", sun: "Code Review" },
    { code: c[2], mon: "Lecture (12:30 PM)", tue: "—", wed: "Lecture (12:30 PM)", thu: "—", fri: "Textbook Reading", sat: "Lab Session", sun: "Code Review" },
    { code: c[3], mon: "—", tue: "Lecture (09:00 AM)", wed: "—", thu: "Lecture (09:00 AM)", fri: "Textbook Reading", sat: "Lab Session", sun: "Code Review" },
    { code: c[4], mon: "—", tue: "Lecture (10:45 AM)", wed: "—", thu: "Lecture (10:45 AM)", fri: "Textbook Reading", sat: "Lab Session", sun: "Code Review" },
    { code: c[5], mon: "—", tue: "Lecture (12:30 PM)", wed: "—", thu: "Lecture (12:30 PM)", fri: "Textbook Reading", sat: "Lab Session", sun: "Code Review" },
    { code: "Term Project", mon: "—", tue: "—", wed: "—", thu: "—", fri: "Deep Work Sprint (4 hrs)", sat: "Build & Integration", sun: "Sprint Review" },
    { code: "Deliverable", mon: "—", tue: "—", wed: "—", thu: "—", fri: "—", sat: "Quality Audit", sun: "Submit 11:59 PM" }
  ];

  let weekHTML = `
    <div style="margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center;">
      <h4 style="margin:0; color:var(--ink);">Weekly Course Schedule Matrix</h4>
      <span style="font-size:0.8rem; color:var(--ink-dim);">Courses in rows · Days in columns</span>
    </div>
    <div class="timetable-grid-wrapper">
      <table class="timetable-grid-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
  `;

  matrixRows.forEach((row) => {
    const tagClass = getCourseColorClass(row.code);
    weekHTML += `
      <tr>
        <td class="course-code-cell">
          <span class="course-tag ${tagClass}">${row.code}</span>
        </td>
        <td><div class="timetable-cell-content"><span>${row.mon}</span></div></td>
        <td><div class="timetable-cell-content"><span>${row.tue}</span></div></td>
        <td><div class="timetable-cell-content"><span>${row.wed}</span></div></td>
        <td><div class="timetable-cell-content"><span>${row.thu}</span></div></td>
        <td><div class="timetable-cell-content"><span>${row.fri}</span></div></td>
        <td><div class="timetable-cell-content"><span>${row.sat}</span></div></td>
        <td><div class="timetable-cell-content"><span>${row.sun}</span></div></td>
      </tr>
    `;
  });

  weekHTML += `
        </tbody>
      </table>
    </div>
  `;
  return weekHTML;
}

/* 3. SEMESTER SCHEDULE — Rows: Week No. (W1-W16) | Columns: Courses/Tracks */
function renderSemesterTimelineTable(semData) {
  const c = semData.sem === 1 ? ["CS101", "CS102", "CS103", "CS104", "CS105", "CS106"]
    : semData.sem === 2 ? ["CS201", "CS202", "CS203", "CS204", "CS205", "CS206"]
    : semData.sem === 3 ? ["CS301", "CS302", "CS303", "CS304", "CS305", "CS306"]
    : ["CS401", "CS402", "CS403", "CS404", "CS405", "CS406"];

  let semHTML = `
    <div style="margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center;">
      <h4 style="margin:0; color:var(--ink);">Semester ${semData.sem} Master Timeline Table</h4>
      <span style="font-size:0.8rem; color:var(--ink-dim);">Week numbers in rows · Courses in columns</span>
    </div>
    <div class="semester-table-wrapper">
      <table class="semester-matrix-table">
        <thead>
          <tr>
            <th>W#</th>
            <th><span class="course-tag ${getCourseColorClass(c[0])}">${c[0]}</span></th>
            <th><span class="course-tag ${getCourseColorClass(c[1])}">${c[1]}</span></th>
            <th><span class="course-tag ${getCourseColorClass(c[2])}">${c[2]}</span></th>
            <th><span class="course-tag ${getCourseColorClass(c[3])}">${c[3]}</span></th>
            <th><span class="course-tag ${getCourseColorClass(c[4])}">${c[4]}</span></th>
            <th><span class="course-tag ${getCourseColorClass(c[5])}">${c[5]}</span></th>
            <th>Term Project / Exam</th>
            <th>Sunday Deliverable</th>
          </tr>
        </thead>
        <tbody>
  `;

  semData.weeks.forEach((w) => {
    const isActive = w.w === state.activeWeekSelected;
    const isExam = w.type === "midterm" || w.type === "final";
    const deliverableTag = isExam ? "tag-exam" : w.type === "sprint" || w.type === "term_kickoff" ? "tag-project" : "tag-lab";

    semHTML += `
      <tr class="${isActive ? 'active-week-row' : ''}">
        <td class="week-num-cell">W${w.w}</td>
        <td>${isExam ? "EXAM PREP" : "Lecture & Lab"}</td>
        <td>${isExam ? "EXAM PREP" : "Lecture & Lab"}</td>
        <td>${isExam ? "EXAM PREP" : "Lecture & Lab"}</td>
        <td>${isExam ? "EXAM PREP" : "Lecture & Lab"}</td>
        <td>${isExam ? "EXAM PREP" : "Lecture & Lab"}</td>
        <td>${isExam ? "EXAM PREP" : "Lecture & Lab"}</td>
        <td>
          <span class="course-tag ${isExam ? 'tag-exam' : 'tag-project'}">
            ${w.type === 'term_kickoff' ? 'Kickoff' : w.type === 'sprint' ? 'Sprint Deliverable' : isExam ? 'PRACTICAL EXAM' : 'Project Build'}
          </span>
        </td>
        <td>
          <span class="course-tag ${deliverableTag}">
            ${w.type === 'midterm' ? 'Submit Midterm' : w.type === 'final' ? 'Submit Final' : `Submit Lab ${w.w}`}
          </span>
        </td>
      </tr>
    `;
  });

  semHTML += `
        </tbody>
      </table>
    </div>
  `;
  return semHTML;
}

/* MY COURSE TAB */
function renderMyCourse() {
  const container = document.getElementById("semester-cards-container");
  container.innerHTML = "";

  ROADMAP.forEach((s) => {
    const p = calculateSemesterProgress(s.sem);
    const isUnlocked = getWeekUnlockStatus((s.sem - 1) * 16 + 1);

    const card = document.createElement("div");
    card.className = `semester-card ${!isUnlocked ? "locked" : ""}`;
    card.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <span style="font-size:0.75rem; font-weight:700; color:var(--gold); text-transform:uppercase;">SEMESTER ${s.sem} (16 WEEKS)</span>
              <h3 class="brand-font" style="font-size:1.3rem;">${s.title}</h3>
            </div>
            <div>${getSemesterDeadlineText(s.sem)}</div>
          </div>
          <p style="font-size:0.82rem; color:var(--ink-dim); margin:0.5rem 0 1rem 0;">Textbooks: ${s.resources}</p>

          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${p.pct}%"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--ink-dim); margin-top:0.35rem; align-items:center;">
            <span><strong>${p.pct}%</strong> complete (${p.completed}/${p.total} deliverables)</span>
            <span style="color:var(--plum); font-weight:700;">Title: "${s.unlockTitle}"</span>
          </div>
        `;
    container.appendChild(card);
  });
}

/* PROFILE TAB */
function renderProfile() {
  let targetSem = ROADMAP.find((s) => calculateSemesterProgress(s.sem).pct < 70);
  const encouragementEl = document.getElementById("badge-encouragement-text");

  if (targetSem) {
    encouragementEl.innerText = `Reach 70% in Semester ${targetSem.sem} to earn "${targetSem.unlockTitle}"!`;
  } else {
    encouragementEl.innerText = `Congratulations! You have earned all professional specialization titles!`;
  }

  const titlesList = document.getElementById("profile-titles-list");
  titlesList.innerHTML = "";

  if (state.user.titles.length === 0) {
    titlesList.innerHTML = `<p style="font-size:0.88rem; color:var(--ink-dim);">No specialization titles earned yet. Reach 70% completion in Semester 1 to unlock your Junior Frontend Developer & Scripting Specialist credential.</p>`;
  } else {
    ROADMAP.forEach((s) => {
      const isEarned = state.user.titles.includes(s.unlockTitle);
      if (isEarned) {
        const item = document.createElement("div");
        item.className = "profile-badge-card";
        item.innerHTML = `
          <div class="badge-icon-circle" style="background:${s.badgeBg};"><i class="fa-solid ${s.badgeIcon}"></i></div>
          <div>
            <h4 style="font-size:1rem; color:var(--ink);">${s.unlockTitle}</h4>
            <p style="font-size:0.78rem; color:var(--ink-dim);">Semester ${s.sem} Graduate Credential · ${s.title}</p>
          </div>
        `;
        titlesList.appendChild(item);
      }
    });
  }
}

/* REAL-TIME ACHIEVEMENT CARD GENERATOR */
function generateAchievementCard() {
  const canvas = document.getElementById("card-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Background Fill
  ctx.fillStyle = "#0F172A";
  ctx.fillRect(0, 0, 2000, 2000);

  // Gradient Overlay
  const grad = ctx.createLinearGradient(0, 0, 2000, 2000);
  grad.addColorStop(0, "#1E1B4B");
  grad.addColorStop(0.5, "#0F172A");
  grad.addColorStop(1, "#020617");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 2000, 2000);

  // Header Text
  ctx.fillStyle = "#38BDF8";
  ctx.font = "800 48px 'Space Grotesk', sans-serif";
  ctx.fillText("APPLIED COMPUTER SCIENCE & AI ENGINEERING", 120, 160);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "800 92px 'Space Grotesk', sans-serif";
  ctx.fillText("ENGINEERING RECORD", 120, 270);

  // User Card Header Box
  ctx.fillStyle = "#1E293B";
  ctx.beginPath();
  ctx.roundRect(120, 340, 1760, 280, 32);
  ctx.fill();

  ctx.fillStyle = "#6366F1";
  ctx.beginPath();
  ctx.arc(240, 480, 80, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "800 80px 'Space Grotesk', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(state.user.name.charAt(0).toUpperCase(), 240, 508);

  ctx.textAlign = "left";
  ctx.font = "800 64px 'Space Grotesk', sans-serif";
  ctx.fillText(state.user.name, 360, 450);

  ctx.fillStyle = "#38BDF8";
  ctx.font = "600 42px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`Specialization Title: ${getCurrentTitle()}`, 360, 520);

  // Grid Stats
  const overall = calculateOverallProgress();
  const portfolioCount = countCompletedProjects();
  const shippedCount = countShippedContent();

  const stats = [
    { label: "DEGREE PROGRESS", val: `${overall.pct}%` },
    { label: "LAB DELIVERABLES", val: `${overall.completed}/${overall.total}` },
    { label: "PRACTICAL EXAMS", val: `${portfolioCount}/8` },
    { label: "CODE REPOS SHIPPED", val: `${shippedCount}` },
  ];

  stats.forEach((s, i) => {
    const x = 120 + (i % 2) * 900;
    const y = 680 + Math.floor(i / 2) * 360;

    ctx.fillStyle = "#0F172A";
    ctx.strokeStyle = "#334155";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(x, y, 840, 300, 28);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#94A3B8";
    ctx.font = "700 36px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(s.label, x + 50, y + 90);

    ctx.fillStyle = "#818CF8";
    ctx.font = "800 90px 'Space Grotesk', sans-serif";
    ctx.fillText(s.val, x + 50, y + 210);
  });

  // Footer Branding Stamp
  ctx.fillStyle = "#1E293B";
  ctx.beginPath();
  ctx.roundRect(120, 1460, 1760, 360, 32);
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "800 52px 'Space Grotesk', sans-serif";
  ctx.fillText("AUTONOMOUS AI SYSTEMS & FULL-STACK ARCHITECTURE", 180, 1560);

  ctx.fillStyle = "#94A3B8";
  ctx.font = "400 36px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Academic Competency Record — Self-Directed Engineering Degree", 180, 1640);
  ctx.fillText(
    `Verified on: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`,
    180,
    1720,
  );

  // Trigger File Download
  const link = document.createElement("a");
  link.download = `AI_Engineering_Record_${state.user.name.replace(/\s+/g, "_")}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

/* CONGRATS POPUP MODAL */
function triggerCongratsModal(semNum, pct) {
  const semData = ROADMAP.find((s) => s.sem === semNum);
  const title = pct === 70 ? "Title Credential Unlocked!" : "Semester Passed with Distinction!";
  const msg =
    pct === 70
      ? `Congratulations! You achieved 70% completion in Semester ${semNum} (${semData.title}) and unlocked the official title credential: "${semData.unlockTitle}"!`
      : `Outstanding engineering mastery! You completed 100% of deliverables in Semester ${semNum} (${semData.title})!`;

  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-message").innerText = msg;
  document.getElementById("congrats-modal-overlay").classList.add("open");
}

function closeCongratsModal() {
  document.getElementById("congrats-modal-overlay").classList.remove("open");
}

/* RESET ALL PROGRESS */
function resetAllProgress() {
  if (
    confirm(
      "Are you sure you want to reset all program progress, specialization titles, and lab completion records? This action cannot be undone.",
    )
  ) {
    state = {
      user: {
        name: "AI Engineer Candidate",
        titles: [],
        earnedBalanceLogs: {},
        shown70Popups: [],
        shown100Popups: [],
      },
      startDate: new Date().toISOString(),
      currentTheme: "light",
      activeWeekSelected: 1,
      questStates: {},
      scheduleSubTab: "daily",
      scheduleViewDate: new Date().toISOString(),
    };
    saveState();
  }
}

/* ==========================================================================
   6. INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderApp();
});
