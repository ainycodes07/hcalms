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
    resources: "Duckett HTML/CSS · Eloquent JS · Refactoring UI · Python Crash Course · Linux Command Line · Don't Make Me Think",
    weeks: [
      {
        w: 1,
        title: "HTML5 & Semantic Web Architecture",
        resource: "CS101: HTML & CSS (Jon Duckett) / freeCodeCamp",
        type: "odd",
        challenge: "Semantic Layout Puzzle — Build 3 accessible layouts using pure HTML5 semantic elements.",
        video: 'Devlog #1 — "Structuring the Web with Semantic HTML5"',
        what: "Master structural HTML5 semantic tags (<header>, <main>, <nav>, <article>, <section>, <footer>) and baseline CSS architecture.",
        why: "Semantic markup is vital for Web Accessibility (WCAG 2.1), screen readers, and SEO.",
        when: "~15 hours total time commitment.",
        where: "Jon Duckett HTML & CSS Ch. 1–9 & MDN Web Docs.",
        how: "1. Complete freeCodeCamp's 'Learn HTML by Building a Cat Photo App'.\n2. Recreate 3 semantic wireframes without framework styling.\n3. Record a 2-minute video demonstrating code structure."
      },
      {
        w: 2,
        title: "Responsive CSS Layouts: Flexbox & Grid",
        resource: "CS101: HTML & CSS (Jon Duckett) / Web.dev",
        type: "even",
        asn: "Mobile-First Responsive Layout — Pure CSS Grid/Flexbox",
        blog: 'Blog Post #1 — "CSS Flexbox vs Grid: Modern Layout Strategies"',
        what: "Implement mobile-first workflows, CSS Grid template areas, Flexbox alignment, and fluid layout units (rem, em, clamp()).",
        why: "Over 60% of users access web platforms via mobile devices across target sectors.",
        when: "~15 hours total time commitment.",
        where: "Duckett HTML/CSS Ch. 10–15 & Google Web.dev Layout Guides.",
        how: "1. Code a fully responsive, mobile-first static layout.\n2. Test across mobile (375px), tablet (768px), and desktop (1200px) viewports.\n3. Publish Blog Post #1."
      },
      {
        w: 3,
        title: "Modern JavaScript & DOM Manipulation",
        resource: "CS102: Eloquent JavaScript (Marijn Haverbeke)",
        type: "odd",
        challenge: "Vanilla JS Katas — 5 core DOM manipulation algorithms.",
        video: 'Devlog #2 — "DOM Manipulation without Frameworks"',
        what: "DOM selection methods, dynamic event listeners, element creation, and dynamic class mutation without external libraries.",
        why: "Understanding raw DOM manipulation builds deep foundational execution insight before adopting modern JS frameworks.",
        when: "~16 hours total time commitment.",
        where: "Eloquent JavaScript Ch. 1–5 & JavaScript.info.",
        how: "1. Solve end-of-chapter algorithmic exercises on the Eloquent JS sandbox.\n2. Code dynamic list filtering scripts locally.\n3. Record Devlog #2."
      },
      {
        w: 4,
        title: "UI Micro-interactions & GSAP Animations",
        resource: "CS103: Refactoring UI & GSAP Official Docs",
        type: "even",
        asn: "Interactive Micro-UI — Replicate Figma Design Specs",
        blog: 'Guidebook #1 — "Crafting High-Performance Web Animations"',
        what: "GSAP timeline animations, scroll-triggered micro-interactions, CSS custom properties, and Refactoring UI visual hierarchy principles.",
        why: "Engaging, accessible micro-interactions raise user conversion and visual quality.",
        when: "~15 hours total time commitment.",
        where: "Refactoring UI & GSAP Interactive CodePens.",
        how: "1. Replicate micro-interactions from Figma specs using local VS Code and GSAP.\n2. Ensure 60fps performance on layout shifts.\n3. Publish Guidebook Chapter #1."
      },
      {
        w: 5,
        title: "Term Project Kickoff: OpenRelief Archivist",
        resource: "Term Project Milestone 1",
        type: "odd",
        challenge: "Architecture Specification — Submit ARCHITECTURE.md & wireframes.",
        video: 'Devlog #3 — "Scoping OpenRelief Archivist Architecture"',
        what: "Scope and document data schema, offline caching strategy, and wireframes for the OpenRelief Archivist offline reader project.",
        why: "System design docs prevent technical scope creep during multi-week build cycles.",
        when: "~16 hours total time commitment.",
        where: "OpenRelief Archivist Project Brief.",
        how: "1. Write detailed schema and PWA caching strategy docs.\n2. Commit ARCHITECTURE.md to GitHub repository."
      },
      {
        w: 6,
        title: "Python Automation & Web Scraping",
        resource: "CS104: Python Crash Course (Eric Matthes)",
        type: "even",
        asn: "Data Scraper Tool — Extracts Public Data to JSON/CSV",
        blog: 'Guidebook #2 — "Automating Data Ingestion with Python"',
        what: "Python data structures, HTTP requests handling, BeautifulSoup HTML parsing, and pandas data cleaning pipelines.",
        why: "Data automation feeds production systems with structured datasets extracted from unstructured sources.",
        when: "~16 hours total time commitment.",
        where: "Python Crash Course Ch. 1–9 & Real Python.",
        how: "1. Build a CLI data scraper using requests, BeautifulSoup, and pandas.\n2. Export sanitized data to CSV and JSON formats.\n3. Publish Guidebook Chapter #2."
      },
      {
        w: 7,
        title: "Shell Scripting & Terminal Systems",
        resource: "CS105: The Linux Command Line (William Shotts)",
        type: "odd",
        challenge: "Bash Automation Katas — Write system monitor Bash scripts.",
        video: 'Devlog #4 — "Mastering the Linux Terminal Workflow"',
        what: "Linux CLI navigation, file permissions, pipe stdout/stdin streams, environment variables, and automated Bash scripts.",
        why: "Terminal mastery is essential for managing cloud infrastructure, deployment pipelines, and server execution environments.",
        when: "~15 hours total time commitment.",
        where: "The Linux Command Line & Linux Journey.",
        how: "1. Practice CLI commands on Linux Journey.\n2. Write and execute production Bash scripts locally inside WSL/Linux terminal."
      },
      {
        w: 8,
        title: "Midterm Practical Exam — Host Pulse Dashboard",
        resource: "Midterm Exam Brief",
        type: "midterm",
        video: "Midterm Defense & Walkthrough Video",
        what: "Deliver Host Pulse: A Python system monitoring script (`monitor.py`) generating metric JSON feeds paired with a zero-framework WCAG AA compliant browser UI dashboard.",
        why: "Validates system scripting, file I/O operations, DOM rendering, and web accessibility skills under exam conditions.",
        when: "~20 hours dedicated exam sprint.",
        where: "GitHub Repository Submission.",
        how: "1. Build monitor.py to log CPU, RAM, and disk metrics.\n2. Build index.html/app.js/style.css dashboard displaying metric updates.\n3. Submit repo with DEFENSE.md and 5-minute video walkthrough."
      },
      {
        w: 9,
        title: "Term Project Sprint 1: Responsive Reading Container",
        resource: "CS101-CS106 / OpenRelief Archivist",
        type: "odd",
        challenge: "Sprint 1 Deliverable — Responsive HTML5 text container with CSS variables.",
        video: 'Devlog #5 — "Building Fluid Text Containers for Longform Reading"',
        what: "Responsive reading layouts featuring CSS variables for fluid typography scaling and theme customization.",
        why: "High-readability layouts reduce eye strain during extended document evaluation.",
        when: "~15 hours total time commitment.",
        where: "OpenRelief Archivist Sprint 1 Brief.",
        how: "1. Build responsive text reader shell.\n2. Implement smooth contrast themes using CSS custom properties."
      },
      {
        w: 10,
        title: "Term Project Sprint 2: Text Annotation & Bookmark Engine",
        resource: "CS102 / OpenRelief Archivist",
        type: "even",
        asn: "Sprint 2 Deliverable — Client-Side Bookmark & Text Highlighting System",
        blog: 'Guidebook #3 — "Persisting App State with Browser Storage"',
        what: "JavaScript text selection APIs, range selection handling, and persistent local data storage using Window.localStorage.",
        why: "Enables offline user data retention without requiring client server round-trips.",
        when: "~16 hours total time commitment.",
        where: "MDN Selection API & Web Storage Docs.",
        how: "1. Implement highlight selection persistence with localStorage.\n2. Publish Guidebook Chapter #3."
      },
      {
        w: 11,
        title: "Term Project Sprint 3: Instant Search Engine",
        resource: "CS102 / OpenRelief Archivist",
        type: "odd",
        challenge: "Sprint 3 Deliverable — Dynamic client-side JSON text search filter.",
        video: 'Devlog #6 — "Building In-Memory Search Indexing in JS"',
        what: "Client-side search algorithms, string tokenization, debouncing input listeners, and fast DOM filtering.",
        why: "Instant client-side search provides rapid information discovery across offline text caches.",
        when: "~16 hours total time commitment.",
        where: "OpenRelief Archivist Sprint 3 Brief.",
        how: "1. Write dynamic search indexing logic over ingested JSON text archives.\n2. Record Devlog #6 demonstrating search performance."
      },
      {
        w: 12,
        title: "Term Project Sprint 4: Offline-First Progressive Web App",
        resource: "CS101 / Service Worker APIs",
        type: "even",
        asn: "Sprint 4 Deliverable — Service Worker & Web App Manifest Setup",
        blog: 'Guidebook #4 — "Building Offline-First PWAs"',
        what: "Service Worker registration, cache strategy implementation (Cache-First/Network-First), and Web App Manifest configuration.",
        why: "Offline-first PWAs guarantee functionality in zero-connectivity field conditions.",
        when: "~16 hours total time commitment.",
        where: "Google Web.dev PWA Guides.",
        how: "1. Register Service Worker to cache static assets and text data.\n2. Publish Guidebook Chapter #4 on PWA architecture."
      },
      {
        w: 13,
        title: "Term Project Sprint 5: Accessibility Suite & Focus Traps",
        resource: "CS106: Don't Make Me Think & WCAG 2.1",
        type: "odd",
        challenge: "Sprint 5 Deliverable — Dyslexia font toggle, contrast engine & ARIA focus traps.",
        video: 'Devlog #7 — "Designing for Inclusive Accessibility (WCAG 2.1 AA)"',
        what: "Implement Dyslexia-friendly font settings, high-contrast themes, ARIA attributes (`aria-expanded`, `aria-live`), and keyboard focus management.",
        why: "Ensures complete operational usability for individuals with visual or cognitive impairments.",
        when: "~15 hours total time commitment.",
        where: "W3C WCAG 2.1 Guidelines & AXE DevTools.",
        how: "1. Audit reader UI with AXE DevTools and resolve keyboard navigation focus traps.\n2. Add custom accessibility controls."
      },
      {
        w: 14,
        title: "Term Project Sprint 6: Python Text Parser & Ingestion CLI",
        resource: "CS104 / Python Automation",
        type: "even",
        asn: "Sprint 6 Deliverable — Python CLI Script Parsing Raw Text to JSON",
        blog: 'Guidebook #5 — "Automated Data Ingestion Pipelines"',
        what: "Build a Python CLI scraper/parser script that ingests raw plain text documents, cleans formatting, and generates ready-to-render JSON data files.",
        why: "Automates content delivery pipeline connecting raw texts to client-side reader applications.",
        when: "~16 hours total time commitment.",
        where: "OpenRelief Archivist Sprint 6 Brief.",
        how: "1. Write Python script to format raw text files into structured JSON.\n2. Publish Guidebook Chapter #5."
      },
      {
        w: 15,
        title: "Web Standards & Quality Audit",
        resource: "CS106 / Lighthouse Audit",
        type: "odd",
        challenge: "Lighthouse Audit — Achieve 100/100 across Performance and Accessibility.",
        video: 'Devlog #8 — "Passing Automated Code & Quality Audits"',
        what: "Execute comprehensive accessibility, performance, and structural code quality audits using Lighthouse, AXE DevTools, and SonarQube rules.",
        why: "Ensures code maintainability and production deployment readiness.",
        when: "~15 hours total time commitment.",
        where: "Google Lighthouse Documentation.",
        how: "1. Audit full web application and fix all remaining warnings.\n2. Generate SonarQube zero-bug compliance report."
      },
      {
        w: 16,
        title: "Final Practical Exam — EcoHarvest Platform & OpenRelief Release",
        resource: "Final Capstone Week",
        type: "final",
        blog: 'Guidebook #6 — "Reflecting on Web Architecture & Python Foundations"',
        specialQuest: "Special Quest Gate: Complete OpenRelief Archivist final submission and deploy EcoHarvest platform live to Vercel/Netlify.",
        specialQuestLinks: [
          { name: "Vercel Platform Deployment", url: "https://vercel.com/" },
          { name: "Netlify Web Hosting", url: "https://www.netlify.com/" },
          { name: "SonarQube Code Quality Checker", url: "https://www.sonarqube.org/" }
        ],
        what: "Deploy EcoHarvest platform (pure HTML5/CSS Grid/Flexbox/GSAP + Python scraper) and release final OpenRelief Archivist PWA with 100/100 Lighthouse score proof.",
        why: "Earns official 'Junior Frontend Developer & Scripting Specialist' professional title credential.",
        when: "~22 hours dedicated exam sprint.",
        where: "Vercel/Netlify Deployment & GitHub.",
        how: "1. Deploy EcoHarvest platform live to Vercel/Netlify.\n2. Complete OpenRelief Archivist deployment and upload defense video walkthrough.\n3. Publish Guidebook Chapter #6."
      }
    ]
  },
  {
    sem: 2,
    title: "Full-Stack & Component Architecture",
    unlockTitle: "Full-Stack Web Developer",
    badgeIcon: "fa-brands fa-react",
    badgeBg: "#0891B2",
    resources: "Learning React · Tailwind CSS · Fluent Python · Learning SQL · Django for Beginners · React Design Patterns",
    weeks: [
      {
        w: 17,
        title: "Frontend Apps with React & Vite",
        resource: "CS201: Learning React (Alex Banks & Eve Porcello)",
        type: "odd",
        challenge: "React State Katas — Build dynamic multi-component interfaces using Vite.",
        video: 'Devlog #9 — "Modern React App Architecture with Vite"',
        what: "React fundamentals: JSX syntax, component hierarchy, props passing, state handling with `useState`, and Vite project setup.",
        why: "Component-driven development enables reusable, scalable UI application architecture.",
        when: "~16 hours total time commitment.",
        where: "React.dev & Learning React Ch. 1–5.",
        how: "1. Bootstrap React application using Vite.\n2. Build reusable dynamic UI components.\n3. Record Devlog #9."
      },
      {
        w: 18,
        title: "Advanced CSS & Design Systems with Tailwind",
        resource: "CS202: Tailwind CSS Official Documentation",
        type: "even",
        asn: "Design Token System — Custom Tailwind Design System Setup",
        blog: 'Guidebook #7 — "Building Scalable Design Systems with Tailwind"',
        what: "Tailwind CSS configuration, utility-first styling, design token definitions, dynamic dark mode classes, and component extraction.",
        why: "Utility-first design systems drastically accelerate UI development cycles while keeping visual styling consistent.",
        when: "~15 hours total time commitment.",
        where: "Tailwind CSS Documentation (Vite setup).",
        how: "1. Configure custom Tailwind theme tokens inside local VS Code setup.\n2. Build dark-mode compatible interface views.\n3. Publish Guidebook Chapter #7."
      },
      {
        w: 19,
        title: "Python Core & Advanced Syntax",
        resource: "CS203: Fluent Python (Luciano Ramalho)",
        type: "odd",
        challenge: "Python Advanced Katas — Asynchronous loops, dataclasses, and custom iterators.",
        video: 'Devlog #10 — "Advanced Python Syntax & Data Structures"',
        what: "Advanced Python features: Asynchronous execution (`asyncio`), dataclasses, custom iterators, generators, context managers, and type hinting.",
        why: "Deep Python mechanics mastery is required for developing high-performance backend systems and AI pipelines.",
        when: "~16 hours total time commitment.",
        where: "Fluent Python & IPython/Jupyter Environment.",
        how: "1. Build async scripts and custom iterators locally inside IPython.\n2. Record Devlog #10 breaking down async generator execution."
      },
      {
        w: 20,
        title: "Relational Databases & SQL Mastery",
        resource: "CS204: Learning SQL (Alan Beaulieu)",
        type: "even",
        asn: "PostgreSQL Database Schema — Entity Relationship & Normalized Tables",
        blog: 'Guidebook #8 — "Relational Schema Normalization & SQL Queries"',
        what: "PostgreSQL setup, Entity-Relationship Diagramming (ERD), schema normalization (1NF, 2NF, 3NF), index optimization, and multi-table JOIN queries.",
        why: "Relational database integrity guarantees reliable storage for complex web applications.",
        when: "~16 hours total time commitment.",
        where: "Learning SQL & PostgreSQL Documentation.",
        how: "1. Design normalized relational schema inside local PostgreSQL instance.\n2. Solve query optimization challenges on SQLZoo.\n3. Publish Guidebook Chapter #8."
      },
      {
        w: 21,
        title: "Term Project Kickoff: GeoStory Platform",
        resource: "CS204/CS205 / Term Project Brief",
        type: "odd",
        challenge: "Architecture Specification — Submit ARCHITECTURE.md & spatial database specs.",
        video: 'Devlog #11 — "Architecture Planning for GeoStory Mapping Platform"',
        what: "Scope and document PostGIS spatial database schemas, Mapbox canvas integrations, and state models for the GeoStory cultural mapping platform.",
        why: "Architectural blueprints prevent integration bottlenecks between GIS spatial data models and React frontends.",
        when: "~16 hours total time commitment.",
        where: "GeoStory Project Brief.",
        how: "1. Design PostGIS spatial data schemas.\n2. Submit ARCHITECTURE.md to GitHub repository."
      },
      {
        w: 22,
        title: "Django Monolithic Web Architecture",
        resource: "CS205: Django for Beginners (William S. Vincent)",
        type: "even",
        asn: "Django Web Application — Monolithic App with Auth & PostgreSQL",
        blog: 'Guidebook #9 — "Building Production-Ready Apps with Django"',
        what: "Django web development: Models, views, templates, custom user models, authentication workflows, admin portal, and ORM query optimization.",
        why: "Django provides a robust server framework with security features built-in out of the box.",
        when: "~16 hours total time commitment.",
        where: "Django Official Documentation & Django for Beginners.",
        how: "1. Build a monolithic Django platform backed by PostgreSQL.\n2. Configure custom user model authentication.\n3. Publish Guidebook Chapter #9."
      },
      {
        w: 23,
        title: "Component-Driven Architecture & Storybook",
        resource: "CS206: React Design Patterns (Michele Bertoli)",
        type: "odd",
        challenge: "Storybook Component Suite — Isolated React components with stories.",
        video: 'Devlog #12 — "Isolated Component Development using Storybook"',
        what: "Isolated component development with Storybook, compound component patterns, render props, custom hooks encapsulation, and visual testing.",
        why: "Isolated component engineering ensures UI component reliability across large engineering teams.",
        when: "~15 hours total time commitment.",
        where: "Storybook Official Documentation.",
        how: "1. Develop and document complex React compound components inside an isolated Storybook workspace.\n2. Record Devlog #12."
      },
      {
        w: 24,
        title: "Midterm Practical Exam — AtlasUI & Relational Django Portal",
        resource: "Midterm Exam Brief",
        type: "midterm",
        video: "Midterm Code Tour & Django ORM Walkthrough",
        what: "Deliver AtlasUI: Published Storybook React UI library styled with Tailwind CSS alongside a server-side Django web portal backed by PostgreSQL and session auth.",
        why: "Validates component design systems and relational full-stack Django framework mastery.",
        when: "~20 hours dedicated exam sprint.",
        where: "GitHub Repository Submission.",
        how: "1. Publish Storybook component library.\n2. Build Django PostgreSQL portal with custom authentication.\n3. Submit repo with DEFENSE.md and video walkthrough."
      },
      {
        w: 25,
        title: "GeoStory Sprint 1: PostGIS Schema & GeoJSON API",
        resource: "CS204/CS205 / GeoStory",
        type: "odd",
        challenge: "Sprint 1 Deliverable — PostGIS spatial database & Django REST GeoJSON endpoints.",
        video: 'Devlog #13 — "Building GeoJSON APIs with Django & PostGIS"',
        what: "PostGIS spatial queries, spatial indexes, and GeoJSON endpoint serialization using Django.",
        why: "Spatial APIs deliver map coordinate datasets efficiently to web mapping clients.",
        when: "~16 hours total time commitment.",
        where: "PostGIS & Django GIS (GeoDjango) Docs.",
        how: "1. Setup PostGIS database and write GeoJSON serialization endpoints.\n2. Record Devlog #13."
      },
      {
        w: 26,
        title: "GeoStory Sprint 2: Mapbox GL React Integration",
        resource: "CS201/CS206 / GeoStory",
        type: "even",
        asn: "Sprint 2 Deliverable — Interactive Mapbox GL Canvas & Clustering Layer",
        blog: 'Guidebook #10 — "Rendering Interactive Maps in React with Mapbox"',
        what: "Mapbox GL JS setup, React canvas integration, dynamic spatial marker clustering, and custom layer rendering.",
        why: "Interactive GIS maps provide visual spatial context for localized user stories.",
        when: "~16 hours total time commitment.",
        where: "Mapbox GL JS Official Documentation.",
        how: "1. Integrate Mapbox GL canvas into React rendering cluster markers dynamically.\n2. Publish Guidebook Chapter #10."
      },
      {
        w: 27,
        title: "GeoStory Sprint 3: React Spatial Submission Drawer",
        resource: "CS201 / GeoStory",
        type: "odd",
        challenge: "Sprint 3 Deliverable — Multi-step story submission drawer with spatial picker.",
        video: 'Devlog #14 — "Building Multi-Step Form Drawers in React"',
        what: "Multi-step React forms, state synchronization, spatial coordinate pickers, and file upload handling.",
        why: "Intuitive multi-step input flows improve story contribution submission rates.",
        when: "~16 hours total time commitment.",
        where: "GeoStory Sprint 3 Brief.",
        how: "1. Build multi-step story submission drawer with interactive spatial map picker."
      },
      {
        w: 28,
        title: "GeoStory Sprint 4: Geolocation Hooks & Dynamic Filters",
        resource: "CS201 / GeoStory",
        type: "even",
        asn: "Sprint 4 Deliverable — Custom Geolocation Hooks & Radius Filter Controls",
        blog: 'Guidebook #11 — "Writing Custom React Hooks for Browser APIs"',
        what: "Custom React hooks (`useGeolocation`), radius-based spatial distance calculations, and real-time category filtering.",
        why: "Location-aware filtering personalizes application data based on proximity.",
        when: "~16 hours total time commitment.",
        where: "MDN Geolocation API Documentation.",
        how: "1. Write custom `useGeolocation` hook and radius filter control UI.\n2. Publish Guidebook Chapter #11."
      },
      {
        w: 29,
        title: "GeoStory Sprint 5: Persistent Audio Narrative Player",
        resource: "CS201 / GeoStory",
        type: "odd",
        challenge: "Sprint 5 Deliverable — Persistent global audio player across map views.",
        video: 'Devlog #15 — "Managing Global Media State in React Applications"',
        what: "Global audio playback state management, HTML5 Audio API controls, and uninterrupted playback during map navigation.",
        why: "Uninterrupted audio stream playback creates seamless spatial storytelling user experiences.",
        when: "~15 hours total time commitment.",
        where: "MDN HTMLAudioElement Documentation.",
        how: "1. Build persistent global audio player component retaining playback across routes.\n2. Record Devlog #15."
      },
      {
        w: 30,
        title: "GeoStory Sprint 6: Cypress Testing & Code Audit",
        resource: "Cypress & SonarQube",
        type: "even",
        asn: "Sprint 6 Deliverable — End-to-End Cypress Suite & Quality Clearance",
        blog: 'Guidebook #12 — "Automating E2E Testing with Cypress"',
        what: "End-to-end testing with Cypress, user interaction flow assertion, and SonarQube code quality clearance.",
        why: "Automated end-to-end test suites protect core workflows from dynamic regression bugs.",
        when: "~16 hours total time commitment.",
        where: "Cypress Official Documentation.",
        how: "1. Write end-to-end spec tests for map interaction and story submission.\n2. Run SonarQube audit and publish Guidebook Chapter #12."
      },
      {
        w: 31,
        title: "Global State Management & Zustand",
        resource: "Zustand & React Design Patterns",
        type: "odd",
        challenge: "Zustand Store Refactor — Migrate complex state to centralized store.",
        video: 'Devlog #16 — "Lightweight Global State Management with Zustand"',
        what: "Centralized state management using Zustand, store slice organization, state persistence middleware, and selectors.",
        why: "Zustand offers lightweight state management without the verbose boilerplate of traditional Redux.",
        when: "~15 hours total time commitment.",
        where: "Zustand Documentation.",
        how: "1. Implement Zustand stores for full-stack client application state.\n2. Record Devlog #16."
      },
      {
        w: 32,
        title: "Final Practical Exam — PulseBoard Enterprise SaaS Platform",
        resource: "Final Capstone Week",
        type: "final",
        blog: 'Guidebook #13 — "Architecting Enterprise Full-Stack Web Applications"',
        specialQuest: "Special Quest Gate: Complete GeoStory platform deployment and launch PulseBoard live to Vercel and Render.",
        specialQuestLinks: [
          { name: "Render Cloud Hosting Platform", url: "https://render.com/" },
          { name: "Cypress Testing Suite", url: "https://www.cypress.io/" },
          { name: "Django REST Framework Docs", url: "https://www.django-rest-framework.org/" }
        ],
        what: "Build and deploy PulseBoard: Enterprise React SPA using Zustand and Tailwind CSS connected to a Django + PostgreSQL production backend with zero failing Cypress tests.",
        why: "Earns official 'Full-Stack Web Developer' professional title credential.",
        when: "~25 hours dedicated exam sprint.",
        where: "Vercel + Render Deployment & GitHub.",
        how: "1. Deploy React SPA to Vercel and Django PostgreSQL backend to Render.\n2. Execute Cypress E2E test suite and submit final project video defense.\n3. Publish Guidebook Chapter #13."
      }
    ]
  },
  {
    sem: 3,
    title: "AI Integration & Automation Systems",
    unlockTitle: "AI Integration & Automation Engineer",
    badgeIcon: "fa-robot",
    badgeBg: "#059669",
    resources: "LangChain Docs · OpenAI API · HTMX Essentials · Vector DB Guides · Celery & Redis",
    weeks: [
      {
        w: 33,
        title: "LLM APIs & Prompt Engineering Architectures",
        resource: "OpenAI API & Anthropic SDK Documentation",
        type: "odd",
        challenge: "Prompt Pipeline Script — Structured JSON parsing from LLM outputs.",
        video: 'Devlog #17 — "Building Production-Grade LLM API Pipelines"',
        what: "Interfacing with LLM APIs (OpenAI / Anthropic), structured JSON outputs using Pydantic, token optimization strategies, and robust retry logic.",
        why: "Reliable structured data extraction from probabilistic LLMs is fundamental to building production AI tools.",
        when: "~16 hours total time commitment.",
        where: "OpenAI API Docs & Instructor Library Guides.",
        how: "1. Build Python script extracting validated JSON from raw text using Pydantic.\n2. Record Devlog #17."
      },
      {
        w: 34,
        title: "Vector Databases & Embeddings (Pinecone / ChromaDB)",
        resource: "ChromaDB & Pinecone Documentation",
        type: "even",
        asn: "Semantic Vector Search Tool — Document Embedding & Similarity Search",
        blog: 'Guidebook #14 — "Understanding Embeddings & Vector Search Engines"',
        what: "Text embedding generation, vector distance metrics (Cosine/Euclidean), vector index creation, and fast similarity queries using ChromaDB / Pinecone.",
        why: "Vector search allows applications to perform semantic queries across large unstructured knowledge bases.",
        when: "~16 hours total time commitment.",
        where: "ChromaDB Docs & Pinecone Learning Center.",
        how: "1. Build vector search index over custom markdown documentation.\n2. Query index using semantic embeddings.\n3. Publish Guidebook Chapter #14."
      },
      {
        w: 35,
        title: "Retrieval-Augmented Generation (RAG) Architecture",
        resource: "LangChain & LlamaIndex Documentation",
        type: "odd",
        challenge: "RAG Pipeline Challenge — Build document chunking, retrieval, and synthesis pipeline.",
        video: 'Devlog #18 — "Building Accurate RAG Systems without Hallucinations"',
        what: "Document chunking strategies, vector store retrieval, prompt context window augmentation, and ground-truth validation to prevent LLM hallucinations.",
        why: "RAG connects general LLMs with private, up-to-date knowledge bases safely.",
        when: "~16 hours total time commitment.",
        where: "LangChain Python Documentation.",
        how: "1. Implement document RAG pipeline with custom text chunking and sources citation.\n2. Record Devlog #18."
      },
      {
        w: 36,
        title: "HTMX & Dynamic Django Interfaces",
        resource: "HTMX Official Documentation & Django Guides",
        type: "even",
        asn: "HTMX Dynamic Dashboard — Reactive Server UI without JS Frameworks",
        blog: 'Guidebook #15 — "Simpler Web Development with HTMX and Django"',
        what: "Server-driven UI reactivity using HTMX: `hx-get`, `hx-post`, `hx-swap`, partial HTML rendering, and dynamic DOM updating without SPA build setups.",
        why: "HTMX drastically reduces JavaScript complexity by rendering dynamic UI changes directly from the server.",
        when: "~15 hours total time commitment.",
        where: "HTMX.org Docs & Django HTMX tutorials.",
        how: "1. Build reactive dashboard using Django templates and HTMX attributes.\n2. Publish Guidebook Chapter #15."
      },
      {
        w: 37,
        title: "Asynchronous Workflows: Celery, Redis & Task Queues",
        resource: "Celery & Redis Official Documentation",
        type: "odd",
        challenge: "Background Worker Pipeline — Process long-running AI tasks asynchronously.",
        video: 'Devlog #19 — "Managing Asynchronous Task Queues with Celery & Redis"',
        what: "Configuring Celery task queues, Redis message brokers, background AI job processing, task status polling, and retry mechanisms.",
        why: "Asynchronous workers keep web servers responsive when processing long-running AI inference tasks.",
        when: "~16 hours total time commitment.",
        where: "Celery Project Docs & Redis Guides.",
        how: "1. Setup Celery worker queue offloading heavy Python AI computations.\n2. Record Devlog #19."
      },
      {
        w: 38,
        title: "Event-Driven AI Workflows & Webhooks",
        resource: "Event-Driven System Architecture Guides",
        type: "even",
        asn: "Automated AI Webhook Router — Intercepts Events & Triggers AI Tasks",
        blog: 'Guidebook #16 — "Building Event-Driven Automation Pipelines"',
        what: "Webhook receiver construction, event-driven payload validation, async trigger dispatches, and third-party SaaS integrations.",
        why: "Event-driven design connects isolated services into automated, real-time workflows.",
        when: "~15 hours total time commitment.",
        where: "Django Webhooks & FastAPI Event Guides.",
        how: "1. Build webhook receiver parsing inbound payload events and triggering automated AI routines.\n2. Publish Guidebook Chapter #16."
      },
      {
        w: 39,
        title: "Term Project Kickoff: Intelligent Knowledge Retrieval Agent",
        resource: "Term Project Brief",
        type: "odd",
        challenge: "Architecture Specification — Submit ARCHITECTURE.md & RAG workflow spec.",
        video: 'Devlog #20 — "Designing Enterprise Knowledge Retrieval Agents"',
        what: "Scope and document vector index pipeline, document ingestion strategies, and RAG search architecture for the intelligent retrieval system.",
        why: "Clear design scoping guarantees data privacy and low retrieval latency.",
        when: "~16 hours total time commitment.",
        where: "Knowledge Retrieval Agent Brief.",
        how: "1. Define RAG architecture and schema.\n2. Commit ARCHITECTURE.md to GitHub repository."
      },
      {
        w: 40,
        title: "Midterm Exam — Event-Driven RAG Automation Hub",
        resource: "Midterm Exam Brief",
        type: "midterm",
        video: "Midterm Demo & RAG Architecture Review",
        what: "Deliver Event-Driven RAG Automation Hub: A full server pipeline processing inbound webhooks, chunking documents, querying vector indexes, and returning grounded answers.",
        why: "Validates vector storage, RAG pipelines, and event-driven automation capabilities.",
        when: "~20 hours dedicated exam sprint.",
        where: "GitHub Repository Submission.",
        how: "1. Build end-to-end event-driven RAG pipeline.\n2. Submit repo with DEFENSE.md and video walkthrough."
      },
      {
        w: 41,
        title: "Retrieval Agent Sprint 1: Document Chunking & Vector Indexing",
        resource: "ChromaDB / LangChain",
        type: "odd",
        challenge: "Sprint 1 Deliverable — Ingestion pipeline chunking PDFs & indexing vectors.",
        video: 'Devlog #21 — "Optimizing Chunking Strategies for RAG Accuracy"',
        what: "Recursive text splitting, metadata tagging, and vector store batch ingestion.",
        why: "High quality text chunking directly improves semantic retrieval precision.",
        when: "~16 hours total time commitment.",
        where: "LangChain Text Splitter Documentation.",
        how: "1. Build document ingestion pipeline with recursive chunking and metadata tags."
      },
      {
        w: 42,
        title: "Retrieval Agent Sprint 2: HTMX Reactive Query Interface",
        resource: "HTMX & Django",
        type: "even",
        asn: "Sprint 2 Deliverable — Dynamic HTMX Search UI with Real-Time Stream",
        blog: 'Guidebook #17 — "Streaming AI Responses with HTMX and Server-Sent Events"',
        what: "Server-Sent Events (SSE), streaming LLM tokens to browser UI, and HTMX reactive response swapping.",
        why: "Token streaming lowers perceived user latency during multi-second LLM generations.",
        when: "~16 hours total time commitment.",
        where: "HTMX SSE Extension Documentation.",
        how: "1. Build streaming HTMX UI displaying LLM token stream in real-time.\n2. Publish Guidebook Chapter #17."
      },
      {
        w: 43,
        title: "Retrieval Agent Sprint 3: Grounded Sources & Citation Engine",
        resource: "RAG Evaluation Frameworks",
        type: "odd",
        challenge: "Sprint 3 Deliverable — Citation metadata tagging and source link drawer.",
        video: 'Devlog #22 — "Implementing Source Verification in RAG Systems"',
        what: "Metadata source link binding, inline citation highlights, and response trust verification.",
        why: "Citations enable users to verify factual context and build trust in AI responses.",
        when: "~15 hours total time commitment.",
        where: "RAG Citation Guidelines.",
        how: "1. Add dynamic citation links linking AI output sentences to source document chunks."
      },
      {
        w: 44,
        title: "Retrieval Agent Sprint 4: Background Task Processing",
        resource: "Celery & Redis",
        type: "even",
        asn: "Sprint 4 Deliverable — Celery Background Processing for Heavy Ingestion",
        blog: 'Guidebook #18 — "Scaling Ingestion Pipelines with Background Queues"',
        what: "Asynchronous document indexing via Celery workers with progress status updates.",
        why: "Offloading multi-megabyte PDF ingestion prevents web request timeouts.",
        when: "~16 hours total time commitment.",
        where: "Celery Task Queue Guides.",
        how: "1. Move ingestion process to Celery background task with status progress updates.\n2. Publish Guidebook Chapter #18."
      },
      {
        w: 45,
        title: "Retrieval Agent Sprint 5: Evaluation & Hallucination Guardrails",
        resource: "Ragas / TruLens Frameworks",
        type: "odd",
        challenge: "Sprint 5 Deliverable — Automated evaluation suite testing retrieval context relevance.",
        video: 'Devlog #23 — "Measuring RAG Accuracy with Automated Guardrails"',
        what: "Automated RAG metrics evaluation (Context Precision, Groundedness, Answer Relevance) using Ragas.",
        why: "Systematic metrics evaluation prevents regression during prompt or pipeline updates.",
        when: "~16 hours total time commitment.",
        where: "Ragas Framework Documentation.",
        how: "1. Write Ragas evaluation suite asserting >85% groundedness score.\n2. Record Devlog #23."
      },
      {
        w: 46,
        title: "Retrieval Agent Sprint 6: Production Packaging & Docker Setup",
        resource: "Docker & Containerization Guides",
        type: "even",
        asn: "Sprint 6 Deliverable — Multi-Container Docker Setup (App + Redis + Worker + DB)",
        blog: 'Guidebook #19 — "Containerizing AI Workflows with Docker Compose"',
        what: "Containerization using Docker, writing `Dockerfile`, configuring multi-container services with `docker-compose.yml`.",
        why: "Docker containers guarantee consistent code execution environments across development and production servers.",
        when: "~15 hours total time commitment.",
        where: "Docker Official Guides.",
        how: "1. Write Dockerfile and docker-compose setup packaging entire platform stack.\n2. Publish Guidebook Chapter #19."
      },
      {
        w: 47,
        title: "AI Pipeline Security & Vulnerability Auditing",
        resource: "OWASP Top 10 for LLM Applications",
        type: "odd",
        challenge: "Security Audit — Harden system against Prompt Injection and Data Leakage.",
        video: 'Devlog #24 — "Securing AI Applications against Prompt Injection"',
        what: "OWASP LLM Top 10 security: Defending against prompt injections, data extraction, insecure output handling, and API rate limits.",
        why: "Securing AI endpoints protects database context from malicious adversarial attacks.",
        when: "~15 hours total time commitment.",
        where: "OWASP LLM Top 10 Security Project.",
        how: "1. Run security audit patching prompt injection vulnerabilities.\n2. Record Devlog #24."
      },
      {
        w: 48,
        title: "Final Practical Exam — Enterprise Dynamic AI Workflows Platform",
        resource: "Final Capstone Week",
        type: "final",
        blog: 'Guidebook #20 — "The Architecture of Production AI Automation Systems"',
        specialQuest: "Special Quest Gate: Complete Retrieval Agent platform release and deploy multi-container stack live to cloud infrastructure.",
        specialQuestLinks: [
          { name: "Docker Containerization Portal", url: "https://www.docker.com/" },
          { name: "OWASP Top 10 for LLMs", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
          { name: "LangChain Ecosystem", url: "https://www.langchain.com/" }
        ],
        what: "Deploy production-grade HTMX + Django Dynamic AI Workflows platform featuring RAG pipelines, background Celery workers, Docker multi-container packaging, and OWASP security clearance.",
        why: "Earns official 'AI Integration & Automation Engineer' professional title credential.",
        when: "~25 hours dedicated exam sprint.",
        where: "Cloud Hosting Host (Render/AWS) & GitHub.",
        how: "1. Launch containerized AI platform to cloud infrastructure.\n2. Submit final video defense walkthrough.\n3. Publish Guidebook Chapter #20."
      }
    ]
  },
  {
    sem: 4,
    title: "Autonomous AI Systems & Product Architecture",
    unlockTitle: "Autonomous AI Systems Engineer & Product Architect",
    badgeIcon: "fa-brain",
    badgeBg: "#7C3AED",
    resources: "LangGraph Docs · CrewAI · AutoGen · System Design Interview (Alex Xu) · Cloud Deployment (AWS/Kubernetes)",
    weeks: [
      {
        w: 49,
        title: "Multi-Agent Systems & LangGraph Foundations",
        resource: "LangGraph & LangChain Documentation",
        type: "odd",
        challenge: "Stateful Agent Graph Challenge — Build cyclic multi-agent graph with state nodes.",
        video: 'Devlog #25 — "Architecting Stateful Multi-Agent Graphs with LangGraph"',
        what: "Stateful agent graphs using LangGraph: State nodes, conditional edges, cyclic loops, and multi-agent task execution.",
        why: "Cyclic state graphs enable autonomous agents to self-correct and iterate until tasks succeed.",
        when: "~16 hours total time commitment.",
        where: "LangGraph Official Guides.",
        how: "1. Build multi-node LangGraph agent graph processing and self-correcting input tasks.\n2. Record Devlog #25."
      },
      {
        w: 50,
        title: "Autonomous Agent Orchestration (CrewAI / AutoGen)",
        resource: "CrewAI & Microsoft AutoGen Frameworks",
        type: "even",
        asn: "Autonomous Agent Crew — Multi-Role Task Delegation & Execution",
        blog: 'Guidebook #21 — "Orchestrating Autonomous Agent Crews for Complex Tasks"',
        what: "Hierarchical agent roles, tool binding, autonomous task delegation, agent memory, and inter-agent communication protocols.",
        why: "Specialized multi-agent crews break down high-level goal directives into executed sub-tasks without human intervention.",
        when: "~16 hours total time commitment.",
        where: "CrewAI & AutoGen Documentation.",
        how: "1. Build CrewAI task execution team with specialized Researcher and Writer agents.\n2. Publish Guidebook Chapter #21."
      },
      {
        w: 51,
        title: "Agent Tool Binding & Custom Code Execution",
        resource: "LangChain Tools & Python Sandbox Execution",
        type: "odd",
        challenge: "Custom Tool Suite — Bind custom API and Python REPL execution tools to agents.",
        video: 'Devlog #26 — "Equipping AI Agents with Safe Custom Execution Tools"',
        what: "Tool definition schema, custom Python execution sandboxes, external API tool integrations, and error feedback loops.",
        why: "Tools enable autonomous agents to execute actions in real-world environments beyond pure text generation.",
        when: "~16 hours total time commitment.",
        where: "LangChain Tool Customization Guides.",
        how: "1. Bind custom REST API and code evaluation tools to agent graph.\n2. Record Devlog #26."
      },
      {
        w: 52,
        title: "System Design for High-Scalability Applications",
        resource: "System Design Interview by Alex Xu",
        type: "even",
        asn: "System Design Blueprint — Architecture Spec for Scalable Web/AI Platform",
        blog: 'Guidebook #22 — "System Design Principles for High-Scale Infrastructure"',
        what: "System architecture fundamentals: Load balancers, database sharding, caching strategies (Redis), message queues (Kafka/RabbitMQ), and rate limiting.",
        why: "Scalable system design ensures production availability during high traffic surges.",
        when: "~15 hours total time commitment.",
        where: "System Design Interview Vol 1 & 2.",
        how: "1. Draw complete system design diagram covering load balancing, caching, and queues.\n2. Publish Guidebook Chapter #22."
      },
      {
        w: 53,
        title: "Flagship Capstone Kickoff: Autonomous Multi-Agent Orchestrator",
        resource: "Flagship Capstone Brief",
        type: "odd",
        challenge: "Architecture Blueprint — Submit comprehensive TSD, ERD, and Graph Schemas.",
        video: 'Devlog #27 — "Scoping the Flagship Autonomous AI Capstone"',
        what: "Scope and document complete system architecture, multi-agent graph flows, database ERDs, and deployment milestones for your flagship capstone.",
        why: "Rigorous planning guarantees successful engineering execution for enterprise systems.",
        when: "~18 hours total time commitment.",
        where: "Flagship Capstone Guidelines.",
        how: "1. Submit Technical Specification Document (TSD) with system diagrams and ERD to repo."
      },
      {
        w: 54,
        title: "Observability, Tracing & Evaluation (LangSmith)",
        resource: "LangSmith & Phoenix Arize Docs",
        type: "even",
        asn: "Observability Pipeline — Instrumentation with LangSmith Tracing",
        blog: 'Guidebook #23 — "Production Observability and Tracing for AI Agents"',
        what: "Agent execution tracing using LangSmith, latency monitoring, token cost tracking, call stack inspection, and failure debugging.",
        why: "Observability tooling reveals internal agent reasoning paths and isolates failure points in production.",
        when: "~15 hours total time commitment.",
        where: "LangSmith Official Documentation.",
        how: "1. Instrument multi-agent graph with LangSmith tracing.\n2. Publish Guidebook Chapter #23."
      },
      {
        w: 55,
        title: "Production Infrastructure & Cloud Deployment (AWS / Kubernetes)",
        resource: "AWS Cloud Architecture & Kubernetes Essentials",
        type: "odd",
        challenge: "Cloud Deployment Challenge — Deploy containerized agent platform to AWS / Cloud host.",
        video: 'Devlog #28 — "Deploying Production AI Systems to Cloud Infrastructure"',
        what: "Cloud deployment strategies: Provisioning AWS resources, SSL configuration, domain setup, environment variable security, and basic Kubernetes deployment manifests.",
        why: "Cloud infrastructure deployment transforms local software builds into resilient global services.",
        when: "~16 hours total time commitment.",
        where: "AWS & Kubernetes Official Documentation.",
        how: "1. Deploy containerized platform to cloud infrastructure with managed PostgreSQL and Redis.\n2. Record Devlog #28."
      },
      {
        w: 56,
        title: "Midterm Exam — Autonomous Multi-Agent Task Orchestrator",
        resource: "Midterm Exam Brief",
        type: "midterm",
        video: "Midterm Multi-Agent System Walkthrough",
        what: "Deliver Autonomous Multi-Agent Task Orchestrator System: A deployed agent framework featuring stateful LangGraph nodes, custom execution tools, and LangSmith tracing instrumentation.",
        why: "Validates multi-agent orchestration, state management, and operational tracing capabilities.",
        when: "~22 hours dedicated exam sprint.",
        where: "GitHub Repository Submission.",
        how: "1. Deploy stateful multi-agent system.\n2. Submit repo with DEFENSE.md and video walkthrough."
      },
      {
        w: 57,
        title: "Capstone Sprint 1: Agent Core & Graph State Architecture",
        resource: "LangGraph & Capstone Spec",
        type: "odd",
        challenge: "Sprint 1 Deliverable — Stateful multi-agent graph engine with dynamic routing.",
        video: 'Devlog #29 — "Building Flagship Capstone State Graphs"',
        what: "Implementing primary multi-agent graph architecture, node state definition, and routing logic.",
        why: "Sprint 1 establishes core agent decision engine logic.",
        when: "~20 hours dedicated project sprint.",
        where: "Flagship Capstone Repo.",
        how: "1. Build and test primary LangGraph agent nodes locally."
      },
      {
        w: 58,
        title: "Capstone Sprint 2: Full-Stack Web Interface & Real-Time Monitoring",
        resource: "React / HTMX + Django",
        type: "even",
        asn: "Sprint 2 Deliverable — Production Web Interface & Live Agent State Stream",
        blog: 'Guidebook #24 — "Building Web Interfaces for Autonomous Systems"',
        what: "Building web dashboard interface displaying real-time agent execution status, thought logs, and interactive intervention controls.",
        why: "Real-time visual feedback lets users monitor autonomous agent decision processes live.",
        when: "~20 hours dedicated project sprint.",
        where: "Flagship Capstone Repo.",
        how: "1. Connect frontend web dashboard to backend live agent execution stream.\n2. Publish Guidebook Chapter #24."
      },
      {
        w: 59,
        title: "Capstone Sprint 3: Production Database & Persistence Storage",
        resource: "PostgreSQL & Redis",
        type: "odd",
        challenge: "Sprint 3 Deliverable — Persistent agent state storage with PostgreSQL & Redis.",
        video: 'Devlog #30 — "Persisting Multi-Agent Memory in Production Databases"',
        what: "Database schema implementation for multi-tenant agent execution memory, user authentication, and persistent run logs.",
        why: "Persistent state storage allows agents to pause, resume, and retain long-term memory across sessions.",
        when: "~20 hours dedicated project sprint.",
        where: "Flagship Capstone Repo.",
        how: "1. Wire state graphs to PostgreSQL database persistence layers."
      },
      {
        w: 60,
        title: "Capstone Sprint 4: Automated CI/CD Pipeline & GitHub Actions",
        resource: "GitHub Actions & DevOps Guides",
        type: "even",
        asn: "Sprint 4 Deliverable — Automated GitHub Actions CI/CD Deployment Pipeline",
        blog: 'Guidebook #25 — "Automating CI/CD Workflows for AI Systems"',
        what: "Configuring `.github/workflows/main.yml`, automated test suite execution on pull requests, linting checks, and zero-downtime automated deployment.",
        why: "CI/CD automation guarantees continuous integration stability and rapid release cycles.",
        when: "~18 hours total time commitment.",
        where: "GitHub Actions Official Docs.",
        how: "1. Configure GitHub Actions workflow running tests and deploying updates automatically on git push.\n2. Publish Guidebook Chapter #25."
      },
      {
        w: 61,
        title: "Capstone Sprint 5: Performance Optimization & Load Testing",
        resource: "Locust / K6 Performance Tools",
        type: "odd",
        challenge: "Sprint 5 Deliverable — Load test suite validating low-latency agent routing.",
        video: 'Devlog #31 — "Optimizing Multi-Agent System Performance & Latency"',
        what: "Database indexing optimization, Redis caching layers, async execution tuning, and load testing using Locust / K6.",
        why: "Performance tuning ensures system stability under heavy user load.",
        when: "~18 hours total time commitment.",
        where: "Locust.io Documentation.",
        how: "1. Conduct load testing and optimize database query indexing.\n2. Record Devlog #31."
      },
      {
        w: 62,
        title: "Capstone Sprint 6: Open-Source Documentation & Quality Audit",
        resource: "Open Source Maintenance Guides",
        type: "even",
        asn: "Sprint 6 Deliverable — Open-Source Developer Suite & Zero-Bug Audit",
        blog: 'Guidebook #26 — "Maintaining High-Quality Open-Source Repositories"',
        what: "Drafting comprehensive README.md, API documentation, contribution guidelines (CONTRIBUTING.md), and obtaining SonarQube quality clearance.",
        why: "Comprehensive documentation enables community adoption and project maintainability.",
        when: "~18 hours total time commitment.",
        where: "GitHub Open Source Guides.",
        how: "1. Finalize open-source developer docs and pass SonarQube audit.\n2. Publish Guidebook Chapter #26."
      },
      {
        w: 63,
        title: "Capstone Final Polish & Security Hardening",
        resource: "Security Audit & Production Release Prep",
        type: "odd",
        challenge: "Final Penetration Audit — Complete security audit & code polish.",
        video: 'Devlog #32 — "Final Pre-Launch Hardening & Polish"',
        what: "Conducting end-to-end security penetration testing, API key encryption verification, bug fixing, and final UI styling pass.",
        why: "Final security hardening guarantees production reliability prior to public launch.",
        when: "~20 hours total time commitment.",
        where: "Flagship Capstone Repo.",
        how: "1. Complete final security audit and verify zero open vulnerability reports."
      },
      {
        w: 64,
        title: "Graduation Flagship Capstone Launch & Defense",
        resource: "Graduation Capstone Release",
        type: "final",
        blog: 'Guidebook #27 — "My Journey to Autonomous AI Systems Engineer & Product Architect"',
        specialQuest: "Special Quest Gate: Complete Flagship Capstone production release, upload academic defense presentation, and submit open-source contribution.",
        specialQuestLinks: [
          { name: "LangChain Open Source Repository", url: "https://github.com/langchain-ai/langchain" },
          { name: "CrewAI Framework Repo", url: "https://github.com/joaomdmoura/crewAI" },
          { name: "AWS Cloud Architecture Portal", url: "https://aws.amazon.com/" }
        ],
        what: "Launch Enterprise Autonomous AI Systems Platform live to production cloud servers, present formal academic defense video, and graduate from the Applied Computer Science & AI Engineering Program!",
        why: "Unlocks your ultimate graduation and earns the primary official professional title: 'Autonomous AI Systems Engineer & Product Architect'!",
        when: "~25 hours final sprint.",
        where: "Live Production Cloud Deployment & HCA LMS.",
        how: "1. Launch Flagship Capstone live to cloud servers.\n2. Submit academic defense video walkthrough.\n3. Publish Guidebook Chapter #27 summarizing your 64-week engineering journey."
      }
    ]
  }
];

/* Helper function to extract all parallel roadmap items per week */
function getQuestItemsForWeek(wObj) {
  const list = [];

  list.push({
    tag: "CORE MODULE STUDY",
    title: `Read & Master: ${wObj.title}`,
    desc: `Primary Resource: ${wObj.resource}. Complete assigned textbook chapters, documentation, and exercises.`
  });

  if (wObj.type === "odd") {
    list.push({
      tag: "TECHNICAL CHALLENGE",
      title: `Challenge: ${wObj.challenge}`,
      desc: "Complete hands-on coding exercises, layout puzzles, or algorithmic katas in your local dev environment."
    });
  } else if (wObj.type === "even") {
    list.push({
      tag: "ASSIGNMENT BRIEF",
      title: `Assignment: ${wObj.asn}`,
      desc: "Build and commit a functional application brief to your public GitHub repository."
    });
  } else if (wObj.type === "midterm") {
    list.push({
      tag: "MIDTERM PRACTICAL EXAM",
      title: `Midterm Practical Exam: ${wObj.title}`,
      desc: "Deliver practical midterm exam project package complete with DEFENSE.md and demo video."
    });
  } else if (wObj.type === "final") {
    list.push({
      tag: "FLAGSHIP CAPSTONE SPRINT",
      title: `Capstone Final Release: ${wObj.title}`,
      desc: "Build, polish, test, and launch your capstone application live to cloud infrastructure."
    });
  }

  if (wObj.video) {
    list.push({
      tag: "DEVLOG / PROOF OF WORK",
      title: `Record & Publish: ${wObj.video}`,
      desc: "Ship a 2-minute devlog video demoing what you built, explaining key code snippets, and sharing your journey."
    });
  }

  if (wObj.blog) {
    list.push({
      tag: "TECHNICAL WRITING / BLOG",
      title: `Publish Article: ${wObj.blog}`,
      desc: "Write and publish a technical blog post or guidebook chapter documenting your technical learnings."
    });
  }

  if (wObj.specialQuest) {
    list.push({
      tag: "SPECIAL QUEST",
      title: `${wObj.specialQuest}`,
      desc: "Must fulfill career/community action item from verified resources to clear the semester gate."
    });
  }

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
    name: "Developer",
    titles: [],
    earnedBalanceLogs: {},
    shown70Popups: [],
    shown100Popups: [],
  },
  startDate: new Date().toISOString(),
  currentTheme: "light",
  activeWeekSelected: 1,
  questStates: {},
};

let state = JSON.parse(localStorage.getItem("HCA_LMS_STATE_V4")) || DEFAULT_STATE;
if (!state.startDate) state.startDate = new Date().toISOString();
if (!state.user.shown70Popups) state.user.shown70Popups = [];
if (!state.user.shown100Popups) state.user.shown100Popups = [];
if (!state.user.name) state.user.name = "Developer";

function saveState() {
  localStorage.setItem("HCA_LMS_STATE_V4", JSON.stringify(state));
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
    return `<span class="deadline-badge urgent"><i class="fa-solid fa-clock"></i> Deadline Passed</span>`;
  }

  const daysLeft = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (daysLeft < 2) {
    return `<span class="deadline-badge urgent"><i class="fa-solid fa-fire"></i> ${daysLeft}d ${hoursLeft}h left</span>`;
  }
  return `<span class="deadline-badge"><i class="fa-solid fa-clock"></i> ${daysLeft}d ${hoursLeft}h left</span>`;
}

function getSemesterDeadlineText(semNum) {
  const startMs = new Date(state.startDate).getTime();
  const semEndMs = startMs + semNum * 16 * 7 * 24 * 60 * 60 * 1000;
  const nowMs = Date.now();
  const diffMs = semEndMs - nowMs;

  if (diffMs <= 0) {
    return `<span class="deadline-badge urgent"><i class="fa-solid fa-clock"></i> Semester Ended</span>`;
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
  if (!semData) return { total: 0, completed: 0, pct: 0 };
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
  if (state.user.titles.length === 0) return "Junior Frontend Developer & Scripting Specialist (Student)";
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
    dashboard: ["Dashboard", "Track your progress, active deadlines, and learning consistency"],
    learn: ["Learning Pathway", "Explore weekly modules, requirements, and execution plans"],
    quests: ["Weekly Quests", "Mark off completed items, challenges, and public devlog deliverables"],
    accountbook: ["Account Book", "Track your accountability targets against logged earnings"],
    schedule: ["Schedule & Routine", "Daily and weekly time investment structures"],
    mycourse: ["My Course", "Full course syllabus, semester titles, and certificates"],
    profile: ["Student Profile", "Manage your titles, display name, and export progress cards"],
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
  document.getElementById("full-course-items-text").innerText = `${overall.completed} / ${overall.total} quest items complete`;

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
    titlesContainer.innerText = "None yet — reach 70% in Semester 1 to earn your first title.";
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
    <div class="drawer-section-title"><i class="fa-solid fa-circle-info"></i> WHAT (Overview & Topics Covered)</div>
    <h3>${wObj.title}</h3>
    <p style="margin-top:0.4rem; line-height:1.6;">${wObj.what}</p>
  `;
  body.appendChild(whatSec);

  // WHY Section
  const whySec = document.createElement("div");
  whySec.className = "drawer-section";
  whySec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-lightbulb"></i> WHY (Career Relevance & Industry Impact)</div>
    <p style="line-height:1.6;">${wObj.why}</p>
  `;
  body.appendChild(whySec);

  // WHEN Section
  const whenSec = document.createElement("div");
  whenSec.className = "drawer-section";
  whenSec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-clock"></i> WHEN (Commitment & Schedule)</div>
    <p style="line-height:1.6;">${wObj.when}</p>
    <div style="margin-top:0.5rem;">Deadline status: ${getWeekDeadlineText(wObj.w)}</div>
  `;
  body.appendChild(whenSec);

  // WHERE Section
  const whereSec = document.createElement("div");
  whereSec.className = "drawer-section";
  whereSec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-location-dot"></i> WHERE (Learning Material & Textbooks)</div>
    <p>Primary Resource: <strong>${wObj.resource}</strong></p>
    <p style="margin-top:0.3rem;">References: ${wObj.where}</p>
  `;
  body.appendChild(whereSec);

  // HOW Section
  const howSec = document.createElement("div");
  howSec.className = "drawer-section";
  howSec.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-list-check"></i> HOW (Action Plan & Execution)</div>
    <p style="white-space: pre-line; line-height:1.6;">${wObj.how}</p>
  `;
  body.appendChild(howSec);

  // SPECIAL QUEST SECTION
  if (wObj.specialQuest) {
    const sqSec = document.createElement("div");
    sqSec.className = "drawer-section";
    sqSec.style.borderColor = "var(--sage)";
    sqSec.innerHTML = `
      <div class="drawer-section-title" style="color:var(--sage);"><i class="fa-solid fa-star"></i> SPECIAL QUEST (Semester Gate)</div>
      <p style="font-size:0.9rem; font-weight:700; color:var(--ink);">${wObj.specialQuest}</p>
      <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:0.6rem;">
        ${
          wObj.specialQuestLinks
            ? wObj.specialQuestLinks
                .map(
                  (link) =>
                    `<a href="${link.url}" target="_blank" rel="noopener" style="font-size:0.82rem; color:var(--plum); font-weight:600; display:inline-flex; align-items:center; gap:0.4rem;"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${link.name}</a>`,
                )
                .join("")
            : ""
        }
      </div>
    `;
    body.appendChild(sqSec);
  }

  // DETAILED QUEST BREAKDOWN LIST
  const questBreakdown = document.createElement("div");
  questBreakdown.className = "drawer-section";
  questBreakdown.innerHTML = `
    <div class="drawer-section-title"><i class="fa-solid fa-tasks"></i> WEEKLY QUESTS BREAKDOWN</div>
    <div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:0.5rem;">
      ${getQuestItemsForWeek(wObj)
        .map(
          (q, i) => `
        <div style="background:var(--surface); border:1px solid var(--line); padding:0.75rem; border-radius:8px;">
          <span style="font-size:0.7rem; font-weight:800; color:var(--gold); text-transform:uppercase;">${i + 1}. ${q.tag}</span>
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
  ctaDiv.innerHTML = `<button class="btn-primary" style="width:100%;" onclick="jumpToQuestsFromDrawer(${wObj.w})">Open Quests Checklist for Week ${wObj.w} &rsaquo;</button>`;
  body.appendChild(ctaDiv);

  document.getElementById("week-drawer-overlay").classList.add("open");
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
  document.getElementById("quest-header-resource").innerText = `Resource: ${weekObj.resource}`;
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
  const targetPerMonth = 400;
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
          <p style="font-size:0.82rem; color:var(--ink-dim); margin:0.5rem 0 1rem 0;">${s.resources}</p>

          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${p.pct}%"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--ink-dim); margin-top:0.35rem; align-items:center;">
            <span><strong>${p.pct}%</strong> complete (${p.completed}/${p.total} quests)</span>
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
    encouragementEl.innerText = `Reach 70% in Semester ${targetSem.sem} to earn "${targetSem.unlockTitle}" proudly!`;
  } else {
    encouragementEl.innerText = `Congratulations! You have earned all official titles across all semesters!`;
  }

  const titlesList = document.getElementById("profile-titles-list");
  titlesList.innerHTML = "";

  if (state.user.titles.length === 0) {
    titlesList.innerHTML = `<p style="font-size:0.88rem; color:var(--ink-dim);">No titles earned yet. Reach 70% completion in Semester 1 to unlock your first title certification.</p>`;
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
            <p style="font-size:0.78rem; color:var(--ink-dim);">Semester ${s.sem} Verified Graduate · ${s.title}</p>
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

  ctx.fillStyle = "#110B15";
  ctx.fillRect(0, 0, 2000, 2000);

  const grad = ctx.createLinearGradient(0, 0, 2000, 2000);
  grad.addColorStop(0, "#4A0C37");
  grad.addColorStop(0.5, "#1C1322");
  grad.addColorStop(1, "#110B15");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 2000, 2000);

  ctx.fillStyle = "#F59E0B";
  ctx.font = "800 48px 'Space Grotesk', sans-serif";
  ctx.fillText("APPLIED COMPUTER SCIENCE & AI ENGINEERING", 120, 160);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "800 92px 'Space Grotesk', sans-serif";
  ctx.fillText("LEARNING ACHIEVEMENT", 120, 270);

  ctx.fillStyle = "#281B30";
  ctx.beginPath();
  ctx.roundRect(120, 340, 1760, 280, 32);
  ctx.fill();

  ctx.fillStyle = "#D9469F";
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

  ctx.fillStyle = "#F59E0B";
  ctx.font = "600 42px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(`Title: ${getCurrentTitle()}`, 360, 520);

  const overall = calculateOverallProgress();
  const portfolioCount = countCompletedProjects();
  const shippedCount = countShippedContent();

  const stats = [
    { label: "OVERALL PROGRESS", val: `${overall.pct}%` },
    { label: "COMPLETED QUESTS", val: `${overall.completed}/${overall.total}` },
    { label: "EXAM & TERM PROJECTS", val: `${portfolioCount}/8` },
    { label: "ITEMS SHIPPED", val: `${shippedCount}` },
  ];

  stats.forEach((s, i) => {
    const x = 120 + (i % 2) * 900;
    const y = 680 + Math.floor(i / 2) * 360;

    ctx.fillStyle = "#1C1322";
    ctx.strokeStyle = "#372642";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(x, y, 840, 300, 28);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#BBA9BC";
    ctx.font = "700 36px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(s.label, x + 50, y + 90);

    ctx.fillStyle = "#D9469F";
    ctx.font = "800 90px 'Space Grotesk', sans-serif";
    ctx.fillText(s.val, x + 50, y + 210);
  });

  ctx.fillStyle = "#281B30";
  ctx.beginPath();
  ctx.roundRect(120, 1460, 1760, 360, 32);
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "800 52px 'Space Grotesk', sans-serif";
  ctx.fillText("VERIFIED ACADEMIC RECORD & COMPETENCY PROFILE", 180, 1560);

  ctx.fillStyle = "#BBA9BC";
  ctx.font = "400 36px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Autonomous AI Systems & Full-Stack Engineering Program", 180, 1640);
  ctx.fillText(
    `Generated on: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`,
    180,
    1720,
  );

  const link = document.createElement("a");
  link.download = `AI_Engineering_Achievement_${state.user.name.replace(/\s+/g, "_")}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

/* CONGRATS POPUP MODAL */
function triggerCongratsModal(semNum, pct) {
  const semData = ROADMAP.find((s) => s.sem === semNum);
  const title = pct === 70 ? "Professional Title Unlocked!" : "Semester Complete!";
  const msg =
    pct === 70
      ? `Congratulations! You reached 70% completion in Semester ${semNum} (${semData.title}) and earned the official professional title "${semData.unlockTitle}"!`
      : `Outstanding work! You reached 100% completion in Semester ${semNum} (${semData.title})!`;

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
      "Are you sure you want to reset all progress, titles, and quest states? This action cannot be undone.",
    )
  ) {
    state = {
      user: {
        name: "Developer",
        titles: [],
        earnedBalanceLogs: {},
        shown70Popups: [],
        shown100Popups: [],
      },
      startDate: new Date().toISOString(),
      currentTheme: "light",
      activeWeekSelected: 1,
      questStates: {},
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
