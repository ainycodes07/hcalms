/* ==========================================================================
       1. CURRICULUM DATA MODEL (COMPLETE HCA ROADMAP FULL DEEP COVERAGE)
       ========================================================================== */
const ROADMAP = [
  {
    sem: 1,
    title: "Frontend Architecture",
    unlockTitle: "Frontend Developer",
    badgeIcon: "fa-code",
    badgeBg: "#2563EB",
    resources: "fCC Responsive Web Design · Odin · fCC JS Algorithms",
    weeks: [
      {
        w: 1,
        title: "HTML5 & CSS3 Semantics, Flexbox / Grid",
        resource: "fCC Responsive Web Design",
        type: "odd",
        challenge:
          "CSS Layout Puzzle — build 3 responsive layouts with Flexbox & Grid.",
        video: 'Devlog #1 — "Why I\'m learning to code with purpose"',
        what: "Master structural HTML5 tags and CSS layout techniques including Flexbox axes and CSS Grid template areas.",
        why: "Semantic markup is vital for Web Accessibility (a11y) and SEO.",
        when: "~15 hours commitment.",
        where: "fCC Responsive Web Design Certification & MDN Web Docs.",
        how: "1. Complete fCC lessons.\n2. Recreate 3 responsive layouts.\n3. Publish a 2-minute video.",
      },
      {
        w: 2,
        title: "Responsive Design in Practice",
        resource: "fCC Responsive Web Design",
        type: "even",
        asn: "Static Page Brief — Options: A) Disaster Prep Info B) Local Shelter Sign-up.",
        blog: 'Blog Post #1 — "HTML/CSS Rules Every Beginner Breaks"',
        what: "Implement mobile-first design principles, media queries, CSS variables, and fluid typography.",
        why: "Over 60% of humanitarian aid recipients access websites via mobile devices.",
        when: "~15 hours commitment.",
        where: "freeCodeCamp Responsive Web Design.",
        how: "1. Build responsive static site.\n2. Test on mobile viewports.\n3. Write Blog Post #1.",
      },
      {
        w: 3,
        title: "Git & GitHub + JS Basics",
        resource: "Odin Essentials",
        type: "odd",
        challenge: "JS Logic Katas — 5 simple algorithmic tasks.",
        video: 'Devlog #2 — "My Git terminal workflow explained"',
        what: "Version control fundamentals with Git and introductory JavaScript logic.",
        why: "Git is non-negotiable for software engineering collaboration.",
        when: "~16 hours commitment.",
        where: "The Odin Project & GitHub Docs.",
        how: "1. Set up SSH keys and GitHub profile.\n2. Complete JS logic katas.\n3. Record Devlog #2.",
      },
      {
        w: 4,
        title: "JS Control Flow Deep Dive",
        resource: "fCC JS Basic",
        type: "even",
        asn: "Form Validation Brief — Options: A) Food Bank Sign-Up B) Legal Aid Contact Form.",
        blog: 'Guidebook Chapter #1 — "Control Flow Demystified"',
        what: "Conditionals, switch statements, loops, and robust form input validation.",
        why: "Ensures data collected from users is clean and safe.",
        when: "~16 hours commitment.",
        where: "fCC JS Algorithms & Data Structures.",
        how: "1. Build form validation script.\n2. Write Guidebook Chapter #1.",
      },
      {
        w: 5,
        title: "DOM Manipulation & Events",
        resource: "fCC JS DOM",
        type: "odd",
        challenge: "DOM Puzzles — Dynamic list filter with keyup events.",
        video: 'Devlog #3 — "How DOM manipulation actually works"',
        what: "Selecting elements, updating properties, event listeners, and dynamic DOM creation.",
        why: "Allows creation of interactive user interfaces without page reloads.",
        when: "~16 hours commitment.",
        where: "JavaScript.info DOM Nodes.",
        how: "1. Build interactive search filter.\n2. Produce Devlog #3.",
      },
      {
        w: 6,
        title: "Midterm Project — Code Labs",
        resource: "Project Week",
        type: "midterm",
        project:
          "Code Lab Midterm — Options: A) Disaster Prep Landing B) Volunteer Sign-up.",
        video: "Midterm Code Tour & Showcase",
        what: "Synthesize HTML, CSS, Git, and pure JS DOM manipulation into a complete web project.",
        why: "Validates readiness to build standalone web utilities.",
        when: "~20 hours project sprint.",
        where: "HCA Code Labs & GitHub Pages.",
        how: "1. Choose midterm brief.\n2. Deploy to GitHub Pages.\n3. Record walkthrough video.",
      },
      {
        w: 7,
        title: "UX Core & Accessibility",
        resource: "Udemy UX Essentials",
        type: "odd",
        challenge:
          "Accessibility Audit — Audit page for WCAG contrast & ARIA issues.",
        video: 'Devlog #4 — "Making web apps accessible to everyone"',
        what: "WCAG 2.1 guidelines, semantic ARIA attributes, color contrast ratios.",
        why: "Humanitarian web apps must be accessible to users with impairments.",
        when: "~14 hours commitment.",
        where: "W3C Web Accessibility Initiative & WAVE Tool.",
        how: "1. Perform WCAG audit.\n2. Fix identified ARIA issues.\n3. Record Devlog #4.",
      },
      {
        w: 8,
        title: "UX Heuristics Applied",
        resource: "Udemy UX Essentials",
        type: "even",
        asn: "Redesign Brief — Options: A) Food Pantry Mobile UI B) Medical Clinic UI.",
        blog: 'Guidebook Chapter #2 — "UX Heuristics for Developers"',
        what: "Nielsen's 10 Usability Heuristics applied to digital interface design.",
        why: "Prevents user frustration during urgent situation navigation.",
        when: "~15 hours commitment.",
        where: "Nielsen Norman Group Guides.",
        how: "1. Redesign UI based on usability heuristics.\n2. Write Guidebook Chapter #2.",
      },
      {
        w: 9,
        title: "JS Intermediate: Arrays & Objects",
        resource: "fCC JS Intermediate",
        type: "odd",
        challenge:
          "Array Methods Kata — Filter, map, and reduce aid data arrays.",
        video: 'Devlog #5 — "Mastering Array.reduce in JavaScript"',
        what: "Functional programming array methods: map, filter, reduce, find, some, every.",
        why: "Data transformation is central to frontend rendering.",
        when: "~16 hours commitment.",
        where: "fCC JS Data Structures.",
        how: "1. Solve data processing katas.\n2. Record Devlog #5.",
      },
      {
        w: 10,
        title: "Functions, Scope & Intro Async",
        resource: "fCC JS Intermediate",
        type: "even",
        asn: "Interactive Widget Brief — Options: A) Aid Calculator B) Quiz Widget.",
        blog: 'Guidebook Chapter #3 — "Understanding JS Scope and Closures"',
        what: "First-class functions, higher-order functions, closures, execution context.",
        why: "Deep comprehension of JS scope prevents variable pollution.",
        when: "~16 hours commitment.",
        where: "You Don't Know JS & fCC.",
        how: "1. Build interactive widget.\n2. Publish Guidebook Chapter #3.",
      },
      {
        w: 11,
        title: "JS Wrap-Up & Portfolio Prep",
        resource: "Odin / Portfolio",
        type: "odd",
        challenge: "Mixed JS Review Challenge — Debug 3 broken DOM/JS scripts.",
        video: 'Devlog #6 — "Preparing my first developer portfolio"',
        what: "Debugging techniques, Chrome DevTools profiling, code refactoring.",
        why: "Prepares you to showcase verified code work to potential employers.",
        when: "~15 hours commitment.",
        where: "Chrome DevTools Docs & GitHub Pages.",
        how: "1. Fix bugs in 3 broken codebase challenges.\n2. Record Devlog #6.",
      },
      {
        w: 12,
        title: "Final Project & Major Requirement",
        resource: "Capstone Week",
        type: "final",
        project:
          "Semester 1 Final — Options: A) Community Resource Finder B) Blood Donor Tracker.",
        blog: 'Guidebook Chapter #4 — "Building Pure JS Apps"',
        majorReq:
          "Major Requirement Gate: Complete 1 free item (Apprenticeship / Hackathon / Dev Networking).",
        what: "Build and deploy a comprehensive Vanilla JavaScript web application.",
        why: "Demonstrates full mastery of Semester 1 outcomes.",
        when: "~22 hours sprint week.",
        where: "GitHub & Vercel.",
        how: "1. Complete chosen Capstone project.\n2. Fulfill Major Requirement gate.\n3. Publish Guidebook Chapter #4.",
      },
    ],
  },
  {
    sem: 2,
    title: "React Web Applications",
    unlockTitle: "React Developer",
    badgeIcon: "fa-brands fa-react",
    badgeBg: "#0891B2",
    resources: "fCC JS ES6 · fCC Front End Libraries (React) · Figma",
    weeks: [
      {
        w: 13,
        title: "ES6+, Closures & Modern JS",
        resource: "fCC JS ES6",
        type: "odd",
        challenge: "Functional JS Katas",
        video: "Devlog #7 — Modern JS Refactoring",
        what: "Destructuring, spread/rest operators, modules, classes, arrow functions.",
        why: "Modern JS features are essential for building React components.",
        when: "~15 hrs",
        where: "fCC ES6",
        how: "Complete katas and record video.",
      },
      {
        w: 14,
        title: "Async JS, Promises & Fetch API",
        resource: "fCC JS Async",
        type: "even",
        asn: "Crisis Alert Fetcher App",
        blog: "Guidebook #5 — Promises & Async/Await",
        what: "Promises, async/await syntax, RESTful endpoint fetching.",
        why: "Web applications need to fetch real-time data from external APIs.",
        when: "~16 hrs",
        where: "fCC Async JS",
        how: "Build crisis fetcher app and write blog.",
      },
      {
        w: 15,
        title: "UI Design Fundamentals & Figma",
        resource: "Udemy Figma",
        type: "odd",
        challenge: "Figma Component Design Challenge",
        video: "Devlog #8 — Designing in Figma as a Dev",
        what: "Figma design tools, auto-layout, design tokens, component libraries.",
        why: "Translating designer mockups to code requires Figma fluency.",
        when: "~15 hrs",
        where: "Figma Community",
        how: "Design UI component library in Figma.",
      },
      {
        w: 16,
        title: "Figma to UI Implementation",
        resource: "Udemy UI Design",
        type: "even",
        asn: "Figma-to-Code Responsive Page",
        blog: "Guidebook #6 — Pixel Perfect Translation",
        what: "Converting Figma pixel specs into responsive HTML/CSS layouts.",
        why: "Bridges the design-to-development workflow gap.",
        when: "~16 hrs",
        where: "Figma & VS Code",
        how: "Convert Figma mockup into code.",
      },
      {
        w: 17,
        title: "React Core: Components & Props",
        resource: "fCC React",
        type: "odd",
        challenge: "React Prop Puzzles",
        video: "Devlog #9 — First Steps in React",
        what: "JSX syntax, component hierarchy, props passing, functional components.",
        why: "React component architecture allows reusable UI engineering.",
        when: "~16 hrs",
        where: "React Official Docs",
        how: "Build 5 React component puzzles.",
      },
      {
        w: 18,
        title: "Midterm Project — Code Labs",
        resource: "React Midterm",
        type: "midterm",
        project:
          "Midterm React App — Options: A) Disaster Alert Dashboard B) Donation Calculator.",
        video: "Midterm React App Showcase",
        what: "Build a multi-component interactive React application.",
        why: "Validates React fundamentals before moving to complex state management.",
        when: "~20 hrs",
        where: "GitHub & Vercel",
        how: "Build and deploy React midterm app.",
      },
      {
        w: 19,
        title: "React State & Hooks (useState, useEffect)",
        resource: "fCC React",
        type: "odd",
        challenge: "State Management Katas",
        video: "Devlog #10 — React Hooks Deep Dive",
        what: "useState, useEffect hook lifecycle, side effects, API integration.",
        why: "State enables dynamic interactive UI updates without manual DOM operations.",
        when: "~16 hrs",
        where: "React.dev Hooks Guide",
        how: "Complete 4 state & hook challenges.",
      },
      {
        w: 20,
        title: "React Router & Multi-Page Apps",
        resource: "fCC React",
        type: "even",
        asn: "Multi-page NGO Portal",
        blog: "Guidebook #7 — Single Page App Routing",
        what: "Client-side routing with React Router v6, dynamic route params.",
        why: "Enables Single Page Applications with seamless page transitions.",
        when: "~16 hrs",
        where: "React Router Docs",
        how: "Build multi-page SPA for NGO.",
      },
      {
        w: 21,
        title: "Context API & Global State",
        resource: "fCC React",
        type: "odd",
        challenge: "Context API Refactor Challenge",
        video: "Devlog #11 — Avoiding Prop Drilling",
        what: "React Context API, createContext, useContext, state encapsulation.",
        why: "Prevents prop drilling across deeply nested component trees.",
        when: "~15 hrs",
        where: "React Docs",
        how: "Refactor dynamic app to use Context API.",
      },
      {
        w: 22,
        title: "Intro to Redux Toolkit",
        resource: "fCC React",
        type: "even",
        asn: "Stateful Aid Cart App",
        blog: "Guidebook #8 — Redux vs Context API",
        what: "Redux Toolkit store, slices, reducers, selectors, useDispatch.",
        why: "Industry-standard global state management for large enterprise apps.",
        when: "~16 hrs",
        where: "Redux Toolkit Docs",
        how: "Build Aid Distribution Cart with Redux.",
      },
      {
        w: 23,
        title: "React Testing & Performance",
        resource: "fCC React",
        type: "odd",
        challenge: "React Component Unit Tests",
        video: "Devlog #12 — Testing React Apps",
        what: "React Testing Library, Jest unit tests, component memoization.",
        why: "Ensures UI reliability and prevents performance bottlenecks.",
        when: "~15 hrs",
        where: "Testing Library Docs",
        how: "Write 6 unit tests for React components.",
      },
      {
        w: 24,
        title: "Final Project & Major Requirement",
        resource: "React Final",
        type: "final",
        project:
          "Semester 2 Final — Options: A) Crisis Resource Map B) Volunteer Matcher.",
        blog: "Guidebook #9 — React for Social Good",
        majorReq:
          "Major Requirement Gate: Complete 1 free item (Hackathon / Job Sim / Volunteer Site).",
        what: "Build a full-fledged React SPA with global state and routing.",
        why: "Unlocks the 'React Developer' title certificate.",
        when: "~22 hrs",
        where: "Vercel / Netlify",
        how: "Deploy React Capstone and fulfill requirement gate.",
      },
    ],
  },
  {
    sem: 3,
    title: "Backend Systems & APIs",
    unlockTitle: "Backend Developer",
    badgeIcon: "fa-server",
    badgeBg: "#059669",
    resources: "fCC Back End Dev & APIs · SQL · Node/Express/MongoDB",
    weeks: [
      {
        w: 25,
        title: "Node.js Fundamentals & NPM",
        resource: "fCC Backend",
        type: "odd",
        challenge: "Node CLI Scripting Challenge",
        video: "Devlog #13 — Building CLI Tools in Node",
        what: "Node.js runtime, event loop, CommonJS/ESM modules, file system module, NPM.",
        why: "Powers server-side JavaScript execution.",
        when: "~15 hrs",
        where: "Nodejs.org Docs",
        how: "Build CLI automation tool in Node.",
      },
      {
        w: 26,
        title: "Express.js Core & REST APIs",
        resource: "fCC Backend",
        type: "even",
        asn: "In-Memory CRUD API Brief",
        blog: "Guidebook #10 — Designing RESTful APIs",
        what: "Express routing, HTTP methods, request/response objects.",
        why: "Express is the standard web server framework for Node.js.",
        when: "~16 hrs",
        where: "Expressjs.com",
        how: "Build RESTful CRUD API.",
      },
      {
        w: 27,
        title: "SQL Basics & Relational Data",
        resource: "Kaggle SQL",
        type: "odd",
        challenge: "SQL Query Katas",
        video: "Devlog #14 — SQL Queries Decoded",
        what: "Relational database concepts, SELECT, WHERE, JOINs, GROUP BY.",
        why: "Relational data structures power financial and administrative systems.",
        when: "~15 hrs",
        where: "Kaggle SQL Course",
        how: "Solve 10 SQL query challenges.",
      },
      {
        w: 28,
        title: "PostgreSQL & Database Design",
        resource: "fCC Relational DB",
        type: "even",
        asn: "Relational Schema Design Brief",
        blog: "Guidebook #11 — Database Normalization",
        what: "Primary/Foreign keys, 1:1, 1:N, N:M database relationships, normalization.",
        why: "Proper schema design prevents data corruption.",
        when: "~16 hrs",
        where: "PostgreSQL Official Docs",
        how: "Design and implement relational schema.",
      },
      {
        w: 29,
        title: "MongoDB & Mongoose Schemas",
        resource: "fCC Backend",
        type: "odd",
        challenge: "Mongoose Schema Validation Challenge",
        video: "Devlog #15 — Working with NoSQL",
        what: "Document-oriented NoSQL databases, Mongoose ODM, schema validation rules.",
        why: "Flexible document stores allow rapid schema iteration.",
        when: "~15 hrs",
        where: "MongoDB Docs",
        how: "Create Mongoose schemas for relief tracking.",
      },
      {
        w: 30,
        title: "Midterm Project — Code Labs",
        resource: "API Midterm",
        type: "midterm",
        project:
          "Midterm Backend API — Options: A) Food Bank Inventory API B) Volunteer Shift API.",
        video: "Midterm API Showcase & Postman Tour",
        what: "Build a production-grade REST API using Express and MongoDB/PostgreSQL.",
        why: "Validates backend API architecture skills.",
        when: "~20 hrs",
        where: "Render / Railway",
        how: "Deploy Express API and publish Postman collection.",
      },
      {
        w: 31,
        title: "Authentication: JWT & Bcrypt",
        resource: "Node Auth",
        type: "odd",
        challenge: "Auth Security Vulnerability Challenge",
        video: "Devlog #16 — Secure JWT Auth Flow",
        what: "Password hashing with bcrypt, JSON Web Tokens (JWT), auth headers.",
        why: "Secures sensitive user resources and administrative endpoints.",
        when: "~16 hrs",
        where: "fCC Security",
        how: "Implement secure registration & login flow.",
      },
      {
        w: 32,
        title: "Middleware & Input Validation",
        resource: "Node Security",
        type: "even",
        asn: "Sanitized Express API Brief",
        blog: "Guidebook #12 — API Security Best Practices",
        what: "Custom Express middleware, express-validator, sanitization against SQLi/XSS.",
        why: "Protects servers from malicious injection and invalid payloads.",
        when: "~15 hrs",
        where: "OWASP API Security Top 10",
        how: "Add validation middleware to Express API.",
      },
      {
        w: 33,
        title: "Testing APIs: Mocha, Chai & Supertest",
        resource: "Node Testing",
        type: "odd",
        challenge: "API Integration Test Challenge",
        video: "Devlog #17 — Automated API Testing",
        what: "Automated API testing, assertions with Chai, HTTP endpoint tests with Supertest.",
        why: "Guarantees API endpoints behave reliably during code updates.",
        when: "~15 hrs",
        where: "Mocha/Chai Docs",
        how: "Write integration test suite for Express endpoints.",
      },
      {
        w: 34,
        title: "API Documentation & Postman",
        resource: "Postman Docs",
        type: "even",
        asn: "Documented API Brief",
        blog: "Guidebook #13 — Writing Great API Docs",
        what: "Swagger/OpenAPI spec, Postman public documentation generation.",
        why: "Frontend developers and partners require clear API contracts.",
        when: "~14 hrs",
        where: "Postman Learning Center",
        how: "Document complete API endpoints in Swagger/Postman.",
      },
      {
        w: 35,
        title: "Error Handling & Logging Patterns",
        resource: "Node Patterns",
        type: "odd",
        challenge: "Error Handler Middleware Challenge",
        video: "Devlog #18 — Enterprise Error Handling",
        what: "Centralized Express error middleware, Winston/Morgan logging tools.",
        why: "Crucial for server debugging and operational stability.",
        when: "~15 hrs",
        where: "Express Guides",
        how: "Build centralized error handling system.",
      },
      {
        w: 36,
        title: "Final Project & Major Requirement",
        resource: "Backend Final",
        type: "final",
        project:
          "Semester 3 Final — Options: A) NGO Donor Backend B) Disaster Relief Allocation API.",
        blog: "Guidebook #14 — Production Node Backends",
        majorReq:
          "Major Requirement Gate: Complete 1 free item (Open Source PR / Backend Internship).",
        what: "Complete backend production API featuring Auth, Database persistence, and tests.",
        why: "Unlocks official 'Backend Developer' title certificate.",
        when: "~22 hrs",
        where: "Render / Railway",
        how: "Deploy production API and fulfill gate requirement.",
      },
    ],
  },
  {
    sem: 4,
    title: "Full Stack MERN Architecture",
    unlockTitle: "Full Stack Developer",
    badgeIcon: "fa-layer-group",
    badgeBg: "#7C3AED",
    resources: "Full Stack Open · Next.js · TypeScript · AWS Deployment",
    weeks: [
      {
        w: 37,
        title: "Connecting React ↔ Express",
        resource: "Full Stack Open",
        type: "odd",
        challenge: "CORS & Proxy Challenge",
        video: "Devlog #19 — Connecting Frontend to Backend",
        what: "Connecting React frontend applications to Express backend APIs, CORS configuration.",
        why: "Bridges the two halves of full-stack MERN engineering.",
        when: "~16 hrs",
        where: "Full Stack Open",
        how: "Connect React UI to Node server.",
      },
      {
        w: 38,
        title: "Full Stack Auth & Session Persistence",
        resource: "Full Stack Open",
        type: "even",
        asn: "Authenticated Full Stack App Brief",
        blog: "Guidebook #15 — Full Stack Auth Flows",
        what: "Storing JWTs safely, HTTP-only cookies, protected React routes, persistent sessions.",
        why: "Ensures seamless user authentication across client and server.",
        when: "~16 hrs",
        where: "Full Stack Open",
        how: "Build end-to-end full stack auth flow.",
      },
      {
        w: 39,
        title: "TypeScript Basics for MERN",
        resource: "Full Stack Open",
        type: "odd",
        challenge: "TypeScript Typing Challenge",
        video: "Devlog #20 — Refactoring JS to TypeScript",
        what: "TypeScript interfaces, types, generics, typing React props and Express endpoints.",
        why: "TypeScript eliminates entire classes of runtime type errors.",
        when: "~16 hrs",
        where: "TypeScript Handbook",
        how: "Refactor React components to TypeScript.",
      },
      {
        w: 40,
        title: "Deployment: Render, Vercel & AWS",
        resource: "AWS / Cloud",
        type: "even",
        asn: "Cloud Deployed MERN App Brief",
        blog: "Guidebook #16 — Zero to Production Deployment",
        what: "Deploying React to Vercel, Node/Express to Render, environment setup.",
        why: "Prepares your applications for live public usage.",
        when: "~15 hrs",
        where: "Vercel & Render Docs",
        how: "Deploy complete MERN stack to cloud host.",
      },
      {
        w: 41,
        title: "Security: OWASP Top 10 for MERN",
        resource: "Security",
        type: "odd",
        challenge: "OWASP Vulnerability Audit",
        video: "Devlog #21 — Securing Full Stack Apps",
        what: "Helmet.js, rate limiting, XSS prevention, CORS hardening.",
        why: "Humanitarian web apps handle sensitive beneficiary data requiring protection.",
        when: "~15 hrs",
        where: "OWASP Web Security",
        how: "Perform security audit and fix vulnerabilities.",
      },
      {
        w: 42,
        title: "Midterm Project — Code Labs",
        resource: "MERN Midterm",
        type: "midterm",
        project:
          "Midterm Integration — Connect Semester 2 React UI to Semester 3 Backend API.",
        video: "Midterm Integrated App Tour",
        what: "Integrate your Semester 2 React UI with your Semester 3 Node/Express backend.",
        why: "Demonstrates full-stack MERN integration capabilities.",
        when: "~20 hrs",
        where: "Render + Vercel",
        how: "Deploy integrated full-stack MERN application.",
      },
      {
        w: 43,
        title: "Performance Optimization & Caching",
        resource: "Performance",
        type: "odd",
        challenge: "Lighthouse & DB Query Optimization",
        video: "Devlog #22 — Optimizing MERN Performance",
        what: "MongoDB indexing, Redis caching, React dynamic imports, Lighthouse auditing.",
        why: "Fast web loading is critical in areas with slow internet infrastructure.",
        when: "~15 hrs",
        where: "Web.dev Guides",
        how: "Optimize database queries and React bundle sizes.",
      },
      {
        w: 44,
        title: "Intro to Next.js & Server Components",
        resource: "Next.js Docs",
        type: "even",
        asn: "Next.js SSR Migration Brief",
        blog: "Guidebook #17 — Why Next.js Matters",
        what: "Next.js App Router, Server Side Rendering (SSR), Static Site Generation (SSG).",
        why: "Modern full-stack React standard for production applications.",
        when: "~16 hrs",
        where: "Nextjs.org/learn",
        how: "Migrate static React page to Next.js.",
      },
      {
        w: 45,
        title: "CI/CD Pipelines & GitHub Actions",
        resource: "DevOps Basics",
        type: "odd",
        challenge: "CI/CD Pipeline Setup Challenge",
        video: "Devlog #23 — Automated Testing & Deployment",
        what: "GitHub Actions workflows, automated linting, automated testing.",
        why: "Automates release testing and deployment reliability.",
        when: "~15 hrs",
        where: "GitHub Actions Docs",
        how: "Set up CI/CD pipeline in GitHub repository.",
      },
      {
        w: 46,
        title: "Capstone Proposal & Architecture Plan",
        resource: "Capstone Prep",
        type: "even",
        asn: "Capstone Proposal & Schema Brief",
        blog: "Guidebook #18 — Scoping Major Tech Projects",
        what: "Technical scoping, database schema design, wireframing, API endpoint planning.",
        why: "Thorough planning guarantees capstone build success.",
        when: "~14 hrs",
        where: "HCA Capstone Guidelines",
        how: "Submit capstone architecture plan & database schema.",
      },
      {
        w: 47,
        title: "Capstone Sprint 1 — Backend & Core UI",
        resource: "Capstone",
        type: "odd",
        challenge: "Core API & Component Test Suite",
        video: "Devlog #24 — Capstone Build Progress",
        what: "Building core MERN backend endpoints and primary React frontend views.",
        why: "Sprint 1 lays the functional bedrock for your final capstone.",
        when: "~20 hrs",
        where: "GitHub Repository",
        how: "Complete Capstone Sprint 1 deliverables.",
      },
      {
        w: 48,
        title: "Capstone Sprint 2 & Final Launch",
        resource: "Capstone Launch",
        type: "final",
        project:
          "FLAGSHIP CAPSTONE — Options: A) AidLink B) CommuniCare C) GiveTrace D) Custom MERN App.",
        blog: "Guidebook #19 — My Journey to Full Stack Developer",
        majorReq:
          "Major Requirement Gate: Complete 1 free item (Apprenticeship / Job Push).",
        what: "Finalize, test, and deploy your Flagship Full-Stack MERN Capstone application.",
        why: "Unlocks ultimate graduation and 'Full Stack Developer' title certificate!",
        when: "~25 hrs final sprint.",
        where: "Live Production Cloud Deployment",
        how: "Launch Flagship Capstone live to the public!",
      },
    ],
  },
];

/* Helper function to extract all parallel roadmap items per week */
function getQuestItemsForWeek(wObj) {
  const list = [];

  list.push({
    tag: "CORE MODULE STUDY",
    title: `Read & Master: ${wObj.title}`,
    desc: `Resource material: ${wObj.resource}. Study core documentation and complete exercises.`,
  });

  if (wObj.type === "odd") {
    list.push({
      tag: "TECHNICAL CHALLENGE",
      title: `Challenge: ${wObj.challenge}`,
      desc: "Complete hands-on coding exercises, layout puzzles, or algorithmic katas.",
    });
  } else if (wObj.type === "even") {
    list.push({
      tag: "ASSIGNMENT BRIEF",
      title: `Assignment: ${wObj.asn}`,
      desc: "Build and commit a functional real-world humanitarian application brief.",
    });
  } else if (wObj.type === "midterm") {
    list.push({
      tag: "MIDTERM PROJECT SPRINT",
      title: `Midterm Project: ${wObj.project}`,
      desc: "Synthesize all concepts learned so far into a complete deployed project.",
    });
  } else if (wObj.type === "final") {
    list.push({
      tag: "FLAGSHIP CAPSTONE SPRINT",
      title: `Capstone Final: ${wObj.project}`,
      desc: "Build, polish, and launch your major milestone capstone application.",
    });
  }

  if (wObj.video) {
    list.push({
      tag: "DEVLOG / PROOF OF WORK",
      title: `Record & Publish: ${wObj.video}`,
      desc: "Ship a 2-minute devlog video demoing what you built and explaining your code.",
    });
  }
  if (wObj.blog) {
    list.push({
      tag: "TECHNICAL WRITING / BLOG",
      title: `Publish Article: ${wObj.blog}`,
      desc: "Write and publish a technical blog post or guidebook chapter documenting your learnings.",
    });
  }

  if (wObj.majorReq) {
    list.push({
      tag: "MAJOR REQUIREMENT GATE",
      title: `${wObj.majorReq}`,
      desc: "Must fulfill 1 free career/community action item to clear semester gate.",
    });
  }

  return list;
}

/* ==========================================================================
       2. APPLICATION STATE ENGINE
       ========================================================================== */
const DEFAULT_STATE = {
  user: {
    name: "John Doe",
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

let state =
  JSON.parse(localStorage.getItem("HCA_LMS_STATE_V3")) || DEFAULT_STATE;
if (!state.startDate) state.startDate = new Date().toISOString();
if (!state.user.shown70Popups) state.user.shown70Popups = [];
if (!state.user.shown100Popups) state.user.shown100Popups = [];
if (!state.user.name) state.user.name = "John Doe";

function saveState() {
  localStorage.setItem("HCA_LMS_STATE_V3", JSON.stringify(state));
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
  const hoursLeft = Math.floor(
    (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  if (daysLeft < 2) {
    return `<span class="deadline-badge urgent"><i class="fa-solid fa-fire"></i> ${daysLeft}d ${hoursLeft}h left</span>`;
  }
  return `<span class="deadline-badge"><i class="fa-solid fa-clock"></i> ${daysLeft}d ${hoursLeft}h left</span>`;
}

function getSemesterDeadlineText(semNum) {
  const startMs = new Date(state.startDate).getTime();
  const semEndMs = startMs + semNum * 12 * 7 * 24 * 60 * 60 * 1000;
  const nowMs = Date.now();
  const diffMs = semEndMs - nowMs;

  if (diffMs <= 0) {
    return `<span class="deadline-badge urgent"><i class="fa-solid fa-clock"></i> Semester Ended</span>`;
  }

  const weeksLeft = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
  const daysLeft = Math.floor(
    (diffMs % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24),
  );

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

  const currentSemNum = Math.ceil(weekNum / 12);
  const isFirstWeekOfSemester = (weekNum - 1) % 12 === 0;

  if (isFirstWeekOfSemester && currentSemNum > 1) {
    const prevSemProgress = calculateSemesterProgress(currentSemNum - 1);
    if (prevSemProgress.pct >= 70) {
      return true;
    }
  }

  const prevWeekQuests = state.questStates[weekNum - 1] || [];
  const prevWeekExpectedCount = getQuestItemsForWeek(
    getWeekData(weekNum - 1),
  ).length;
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
  if (state.user.titles.length === 0) return "Aspiring Developer";
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
  document.getElementById("sidebar-avatar-initial").innerText = state.user.name
    .charAt(0)
    .toUpperCase();
  document.getElementById("profile-avatar-large").innerText = state.user.name
    .charAt(0)
    .toUpperCase();

  const currentTitle = getCurrentTitle();
  document.getElementById("sidebar-user-title").innerText = currentTitle;
  document.getElementById("dash-user-title").innerText = currentTitle;

  const isDark = state.currentTheme === "dark";
  document.getElementById("theme-icon").innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
  document.getElementById("theme-text").innerText = isDark
    ? "Light mode"
    : "Dark mode";

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
  document
    .querySelectorAll(".nav-item")
    .forEach((el) => el.classList.remove("active"));
  const activeNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  if (activeNav) activeNav.classList.add("active");

  document
    .querySelectorAll(".tab-pane")
    .forEach((el) => el.classList.remove("active"));
  const targetPane = document.getElementById(`tab-${tabId}`);
  if (targetPane) targetPane.classList.add("active");

  const titleMap = {
    dashboard: [
      "Dashboard",
      "Track your progress, active deadlines, and learning consistency",
    ],
    learn: [
      "Learning Pathway",
      "Explore weekly modules, requirements, and execution plans",
    ],
    quests: [
      "Weekly Quests",
      "Mark off completed items, challenges, and public devlog deliverables",
    ],
    accountbook: [
      "Account Book",
      "Track your accountability targets against logged earnings",
    ],
    schedule: [
      "Schedule & Routine",
      "Daily and weekly time investment structures",
    ],
    mycourse: [
      "My Course",
      "Full course syllabus, semester titles, and certificates",
    ],
    profile: [
      "Student Profile",
      "Manage your titles, display name, and export progress cards",
    ],
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
  document.getElementById("full-course-progress-bar").style.width =
    `${overall.pct}%`;
  document.getElementById("full-course-progress-text").innerText =
    `${overall.pct}%`;
  document.getElementById("full-course-items-text").innerText =
    `${overall.completed} / ${overall.total} quest items complete`;

  const currentSemNum = Math.min(4, Math.ceil(state.activeWeekSelected / 12));
  const semProgress = calculateSemesterProgress(currentSemNum);
  const semData = ROADMAP.find((s) => s.sem === currentSemNum);

  document.getElementById("dash-sem-num").innerText = currentSemNum;
  document.getElementById("dash-sem-name").innerText = semData.title;
  document.getElementById("current-sem-progress-bar").style.width =
    `${semProgress.pct}%`;
  document.getElementById("current-sem-progress-text").innerText =
    `${semProgress.pct}%`;
  document.getElementById("dash-sem-deadline-badge").innerHTML =
    getSemesterDeadlineText(currentSemNum);

  const weekObj = getWeekData(state.activeWeekSelected);
  document.getElementById("dash-week-title").innerText =
    `Week ${weekObj.w}: ${weekObj.title}`;
  document.getElementById("dash-week-deadline").innerHTML = getWeekDeadlineText(
    weekObj.w,
  );

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

  document.getElementById("dash-portfolio-count").innerText =
    `${countCompletedProjects()} / 8`;
  document.getElementById("dash-content-count").innerText =
    `${countShippedContent()} / ${overall.total}`;

  const titlesContainer = document.getElementById("dash-titles-list");
  if (state.user.titles.length === 0) {
    titlesContainer.innerText =
      "None yet — reach 70% in Semester 1 to earn your first title.";
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
  const currentSemNum = Math.ceil(state.activeWeekSelected / 12);
  const semData = ROADMAP.find((s) => s.sem === currentSemNum);
  document.getElementById("learn-sem-title").innerText =
    `Semester ${semData.sem} – ${semData.title}`;

  const semBtnContainer = document.getElementById("sem-switcher-buttons");
  semBtnContainer.innerHTML = "";
  ROADMAP.forEach((s) => {
    const btn = document.createElement("button");
    btn.className = `week-chip ${s.sem === currentSemNum ? "active" : ""}`;
    btn.innerText = `Semester ${s.sem}`;
    btn.onclick = () => {
      state.activeWeekSelected = (s.sem - 1) * 12 + 1;
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
  const semNum = Math.ceil(weekNum / 12);

  document.getElementById("drawer-week-tag").innerText =
    `SEMESTER ${semNum} · WEEK ${wObj.w}`;
  document.getElementById("drawer-week-title").innerText = wObj.title;

  const body = document.getElementById("drawer-body-content");
  body.innerHTML = `
        <div class="drawer-section">
          <div class="drawer-section-title"><i class="fa-solid fa-circle-info"></i> WHAT (Overview & Topics Covered)</div>
          <h3>${wObj.title}</h3>
          <p style="margin-top:0.4rem;">${wObj.what}</p>
        </div>

        <div class="drawer-section">
          <div class="drawer-section-title"><i class="fa-solid fa-lightbulb"></i> WHY (Career Relevance & Impact)</div>
          <p>${wObj.why}</p>
        </div>

        <div class="drawer-section">
          <div class="drawer-section-title"><i class="fa-solid fa-clock"></i> WHEN (Commitment & Schedule)</div>
          <p>${wObj.when}</p>
          <div style="margin-top:0.5rem;">Deadline status: ${getWeekDeadlineText(wObj.w)}</div>
        </div>

        <div class="drawer-section">
          <div class="drawer-section-title"><i class="fa-solid fa-location-dot"></i> WHERE (Learning Material)</div>
          <p>Primary Resource: <strong>${wObj.resource}</strong></p>
          <p style="margin-top:0.3rem;">References: ${wObj.where}</p>
        </div>

        <div class="drawer-section">
          <div class="drawer-section-title"><i class="fa-solid fa-list-check"></i> HOW (Action Plan & Parallel Tasks)</div>
          <p style="white-space: pre-line;">${wObj.how}</p>
        </div>

        <div style="margin-top:1rem; display:flex; gap:0.75rem;">
          <button class="btn-primary" style="flex:1;" onclick="jumpToQuestsFromDrawer(${wObj.w})">Open Quests for Week ${wObj.w} &rsaquo;</button>
        </div>
      `;

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

  for (let w = 1; w <= 48; w++) {
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
  const currentSemNum = Math.ceil(weekObj.w / 12);

  document.getElementById("quest-header-sem").innerText =
    `SEMESTER ${currentSemNum} · WEEK ${weekObj.w}`;
  document.getElementById("quest-header-title").innerText = weekObj.title;
  document.getElementById("quest-header-resource").innerText =
    `Resource: ${weekObj.resource}`;
  document.getElementById("quest-header-deadline").innerHTML =
    getWeekDeadlineText(weekObj.w);

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
  let totalExpected = 11 * targetPerMonth;
  let totalLogged = 0;

  const select = document.getElementById("log-month-select");
  select.innerHTML = "";
  for (let m = 1; m <= 11; m++) {
    const opt = document.createElement("option");
    opt.value = m;
    opt.innerText = `Month ${m}`;
    select.appendChild(opt);
  }

  const tbody = document.getElementById("account-log-tbody");
  tbody.innerHTML = "";

  for (let m = 1; m <= 11; m++) {
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
  balEl.innerText =
    netBalance >= 0 ? `+$${netBalance}` : `-$${Math.abs(netBalance)}`;
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
    const isUnlocked = getWeekUnlockStatus((s.sem - 1) * 12 + 1);

    const card = document.createElement("div");
    card.className = `semester-card ${!isUnlocked ? "locked" : ""}`;
    card.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <span style="font-size:0.75rem; font-weight:700; color:var(--gold); text-transform:uppercase;">SEMESTER ${s.sem}</span>
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
  let targetSem = ROADMAP.find(
    (s) => calculateSemesterProgress(s.sem).pct < 70,
  );
  const encouragementEl = document.getElementById("badge-encouragement-text");

  if (targetSem) {
    encouragementEl.innerText = `Reach 70% in Semester ${targetSem.sem} to earn "${targetSem.unlockTitle}" proudly!`;
  } else {
    encouragementEl.innerText = `Congratulations! You have earned all official titles across all semesters!`;
  }

  const titlesList = document.getElementById("profile-titles-list");
  titlesList.innerHTML = "";

  if (state.user.titles.length === 0) {
    titlesList.innerHTML = `<div style="color:var(--ink-dim); font-size:0.88rem; padding:0.5rem 0;">No badges unlocked yet — reach 70% in Semester 1 to unlock your first badge!</div>`;
  } else {
    ROADMAP.forEach((s) => {
      if (state.user.titles.includes(s.unlockTitle)) {
        const bCard = document.createElement("div");
        bCard.className = "profile-badge-card";
        bCard.innerHTML = `
              <div class="badge-icon-circle" style="background:${s.badgeBg}">
                <i class="${s.badgeIcon}"></i>
              </div>
              <div>
                <h5 style="font-size:1rem; font-weight:800; color:var(--ink);">${s.unlockTitle}</h5>
                <p style="font-size:0.78rem; color:var(--sage); font-weight:700;"><i class="fa-solid fa-certificate"></i> Verified Milestone · Semester ${s.sem}</p>
              </div>
            `;
        titlesList.appendChild(bCard);
      }
    });
  }
}

/* ==========================================================================
       6. QUEST STATE TOGGLER & HELPERS
       ========================================================================== */
function getWeekData(weekNum) {
  for (const sem of ROADMAP) {
    const found = sem.weeks.find((w) => w.w === weekNum);
    if (found) return found;
  }
  return ROADMAP[0].weeks[0];
}

function toggleQuestState(weekNum, questIdx) {
  if (!state.questStates[weekNum]) {
    const qCount = getQuestItemsForWeek(getWeekData(weekNum)).length;
    state.questStates[weekNum] = new Array(qCount).fill(0);
  }

  const current = state.questStates[weekNum][questIdx] || 0;
  state.questStates[weekNum][questIdx] = (current + 1) % 3;

  saveState();
}

/* SCHEDULE TAB TOGGLER */
function toggleSchedule(type) {
  const btnDaily = document.getElementById("sched-btn-daily");
  const btnWeekly = document.getElementById("sched-btn-weekly");
  const paneDaily = document.getElementById("sched-pane-daily");
  const paneWeekly = document.getElementById("sched-pane-weekly");

  if (type === "daily") {
    btnDaily.classList.add("active");
    btnWeekly.classList.remove("active");
    paneDaily.style.display = "block";
    paneWeekly.style.display = "none";
  } else {
    btnWeekly.classList.add("active");
    btnDaily.classList.remove("active");
    paneWeekly.style.display = "block";
    paneDaily.style.display = "none";
  }
}

/* CONGRATS POPUP MODAL */
function triggerCongratsModal(semNum, pct) {
  const semObj = ROADMAP.find((s) => s.sem === semNum);
  const overlay = document.getElementById("congrats-modal-overlay");
  const titleEl = document.getElementById("modal-title");
  const msgEl = document.getElementById("modal-message");

  if (pct === 70) {
    titleEl.innerText = `Title Certificate Unlocked!`;
    msgEl.innerHTML = `You completed <strong>70%</strong> of Semester ${semNum}!<br><br>Official Title Earned: <strong style="color:var(--gold);">${semObj.unlockTitle}</strong>.<br>You are now authorized to unlock Semester ${semNum + 1 < 5 ? semNum + 1 : 4}!`;
  } else if (pct === 100) {
    titleEl.innerText = `Semester ${semNum} Mastered!`;
    msgEl.innerHTML = `Flawless execution! You completed <strong>100%</strong> of all quests in <strong>${semObj.title}</strong>!`;
  }

  overlay.classList.add("open");
}

function closeCongratsModal() {
  document.getElementById("congrats-modal-overlay").classList.remove("open");
}

function resetAllProgress() {
  if (
    confirm(
      "Are you sure you want to reset all quest states, semester progress, and earnings data? This action cannot be undone.",
    )
  ) {
    localStorage.removeItem("HCA_LMS_STATE_V3");
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    state.startDate = new Date().toISOString();
    saveState();
    alert("Progress reset successfully!");
  }
}

/* ==========================================================================
       7. HIGH-RES SPOTIFY CHART STYLE ACHIEVEMENT CARD GENERATOR (2000x2000px)
       ========================================================================== */
function generateAchievementCard() {
  const canvas = document.getElementById("card-canvas");
  const ctx = canvas.getContext("2d");
  const width = 2000;
  const height = 2000;

  canvas.width = width;
  canvas.height = height;

  // Clear Canvas
  ctx.clearRect(0, 0, width, height);

  // Calculations for real current dynamic progress
  const overall = calculateOverallProgress();
  const currentTitle = getCurrentTitle();
  const projectsCount = countCompletedProjects();
  const contentCount = countShippedContent();

  const startMs = new Date(state.startDate).getTime();
  const now = new Date();
  const daysEnrolled = Math.max(
    1,
    Math.floor((now.getTime() - startMs) / (1000 * 60 * 60 * 24)),
  );

  const activeWObj = getWeekData(state.activeWeekSelected);
  const activeSemNum = Math.ceil(activeWObj.w / 12);
  const activeSemData = ROADMAP.find((s) => s.sem === activeSemNum);
  const semProgress = calculateSemesterProgress(activeSemNum);

  const downloadDateStr = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // 1. Background Fill with Radial & Linear Gradient (Spotify Chart Vibe)
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, "#0F0814");
  bgGrad.addColorStop(0.5, "#1C1026");
  bgGrad.addColorStop(1, "#2A1236");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Decorative Glowing Accents
  const glow1 = ctx.createRadialGradient(300, 300, 50, 300, 300, 800);
  glow1.addColorStop(0, "rgba(217, 70, 159, 0.25)");
  glow1.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = glow1;
  ctx.fillRect(0, 0, width, height);

  const glow2 = ctx.createRadialGradient(1700, 1700, 50, 1700, 1700, 800);
  glow2.addColorStop(0, "rgba(245, 158, 11, 0.2)");
  glow2.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = glow2;
  ctx.fillRect(0, 0, width, height);

  // Outer Border
  ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
  ctx.lineWidth = 6;
  ctx.strokeRect(60, 60, width - 120, height - 120);

  // 2. HEADER BRANDING (Academy Name & Logo)
  // Logo Square
  ctx.fillStyle = "#580B3E";
  ctx.beginPath();
  ctx.roundRect(120, 120, 120, 120, 24);
  ctx.fill();
  ctx.strokeStyle = "#F59E0B";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = "#F59E0B";
  ctx.font = '800 48px "Space Grotesk", sans-serif';
  ctx.textAlign = "center";
  ctx.fillText("HCA", 180, 195);

  // Academy Name
  ctx.textAlign = "left";
  ctx.fillStyle = "#FFFFFF";
  ctx.font = '800 42px "Space Grotesk", sans-serif';
  ctx.fillText("HUMANITARIAN CODE ACADEMY", 270, 170);

  ctx.fillStyle = "#BBA9BC";
  ctx.font = '600 28px "Plus Jakarta Sans", sans-serif';
  ctx.fillText("REAL-TIME LEARNING PERFORMANCE RECORD", 270, 210);

  // Timestamp Tag
  ctx.textAlign = "right";
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.beginPath();
  ctx.roundRect(width - 620, 130, 500, 70, 35);
  ctx.fill();
  ctx.fillStyle = "#F59E0B";
  ctx.font = '700 24px "Space Grotesk", sans-serif';
  ctx.fillText(`DATE: ${downloadDateStr}`, width - 150, 174);

  // Divider
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(120, 280);
  ctx.lineTo(width - 120, 280);
  ctx.stroke();

  // 3. STUDENT PROFILE HEADER
  ctx.textAlign = "left";
  ctx.fillStyle = "#D9469F";
  ctx.font = '800 32px "Space Grotesk", sans-serif';
  ctx.fillText("CURRENT STUDENT PROGRESS", 120, 350);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = '800 84px "Space Grotesk", sans-serif';
  ctx.fillText(state.user.name, 120, 440);

  ctx.fillStyle = "#F59E0B";
  ctx.font = '700 38px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`Current Rank: ${currentTitle}`, 120, 500);

  // 4. SPOTIFY CHART TOP METRICS CARDS
  // Card 1: Overall Completion
  ctx.fillStyle = "rgba(40, 27, 48, 0.8)";
  ctx.beginPath();
  ctx.roundRect(120, 560, 540, 340, 32);
  ctx.fill();
  ctx.strokeStyle = "rgba(217, 70, 159, 0.4)";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#BBA9BC";
  ctx.font = '700 28px "Space Grotesk", sans-serif';
  ctx.fillText("#01 OVERALL MASTERY", 160, 620);

  ctx.fillStyle = "#D9469F";
  ctx.font = '800 110px "Space Grotesk", sans-serif';
  ctx.fillText(`${overall.pct}%`, 160, 740);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = '600 30px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    `${overall.completed} / ${overall.total} Quests Complete`,
    160,
    820,
  );

  // Card 2: Active Days & Pace
  ctx.fillStyle = "rgba(40, 27, 48, 0.8)";
  ctx.beginPath();
  ctx.roundRect(730, 560, 540, 340, 32);
  ctx.fill();
  ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#BBA9BC";
  ctx.font = '700 28px "Space Grotesk", sans-serif';
  ctx.fillText("#02 ACTIVE DAYS ENROLLED", 770, 620);

  ctx.fillStyle = "#F59E0B";
  ctx.font = '800 110px "Space Grotesk", sans-serif';
  ctx.fillText(`${daysEnrolled} Days`, 770, 740);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = '600 30px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`Active Week: W${activeWObj.w} / 48 Weeks`, 770, 820);

  // Card 3: Portfolio & Output
  ctx.fillStyle = "rgba(40, 27, 48, 0.8)";
  ctx.beginPath();
  ctx.roundRect(1340, 560, 540, 340, 32);
  ctx.fill();
  ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#BBA9BC";
  ctx.font = '700 28px "Space Grotesk", sans-serif';
  ctx.fillText("#03 PORTFOLIO SHIPPED", 1380, 620);

  ctx.fillStyle = "#10B981";
  ctx.font = '800 110px "Space Grotesk", sans-serif';
  ctx.fillText(`${projectsCount} / 8`, 1380, 740);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = '600 30px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`${contentCount} Total Deliverables Completed`, 1380, 820);

  // 5. CURRENT SEMESTER BREAKDOWN (Spotify Track List Style)
  ctx.fillStyle = "rgba(28, 19, 34, 0.9)";
  ctx.beginPath();
  ctx.roundRect(120, 950, 1760, 560, 36);
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#F59E0B";
  ctx.font = '800 32px "Space Grotesk", sans-serif';
  ctx.fillText("ACTIVE SEMESTER PERFORMANCE BREAKDOWN", 170, 1020);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = '800 52px "Space Grotesk", sans-serif';
  ctx.fillText(`Semester ${activeSemNum}: ${activeSemData.title}`, 170, 1090);

  // Visual Progress Bar for Active Semester
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.beginPath();
  ctx.roundRect(170, 1130, 1660, 40, 20);
  ctx.fill();

  const semBarWidth = Math.max(20, (1660 * semProgress.pct) / 100);
  const semBarGrad = ctx.createLinearGradient(170, 0, 1830, 0);
  semBarGrad.addColorStop(0, "#D9469F");
  semBarGrad.addColorStop(1, "#F59E0B");
  ctx.fillStyle = semBarGrad;
  ctx.beginPath();
  ctx.roundRect(170, 1130, semBarWidth, 40, 20);
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = '700 34px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    `Progress: ${semProgress.pct}% (${semProgress.completed} of ${semProgress.total} Quests Complete)`,
    170,
    1220,
  );

  // Dynamic Real-Time Stats
  ctx.fillStyle = "#BBA9BC";
  ctx.font = '600 30px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`• Core Tech Stack: ${activeSemData.resources}`, 170, 1280);
  ctx.fillText(
    `• Milestone Unlocked: "${activeSemData.unlockTitle}" (${semProgress.pct >= 70 ? "ACHIEVED" : "IN PROGRESS"})`,
    170,
    1340,
  );
  ctx.fillText(
    `• Current Active Module: Week ${activeWObj.w} - ${activeWObj.title}`,
    170,
    1400,
  );

  // 6. VERIFIED ACCOMPLISHMENTS FOOTER
  ctx.fillStyle = "rgba(217, 70, 159, 0.12)";
  ctx.beginPath();
  ctx.roundRect(120, 1560, 1760, 240, 32);
  ctx.fill();
  ctx.strokeStyle = "rgba(217, 70, 159, 0.3)";
  ctx.stroke();

  ctx.fillStyle = "#D9469F";
  ctx.font = '800 32px "Space Grotesk", sans-serif';
  ctx.fillText("VERIFIED ACCOMPLISHMENTS TO DATE", 170, 1620);

  const titlesEarnedText =
    state.user.titles.length > 0
      ? state.user.titles.join(" • ")
      : "In progress towards first title badge";

  ctx.fillStyle = "#FFFFFF";
  ctx.font = '700 36px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`Earned Titles: ${titlesEarnedText}`, 170, 1680);

  ctx.fillStyle = "#BBA9BC";
  ctx.font = '600 28px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    `Verification Snapshot ID: ${Date.now().toString(36).toUpperCase()}`,
    170,
    1740,
  );

  // Bottom Branding Banner
  ctx.fillStyle = "#F59E0B";
  ctx.font = '800 28px "Space Grotesk", sans-serif';
  ctx.textAlign = "center";
  ctx.fillText(
    "HUMANITARIAN CODE ACADEMY • CODE WITH PURPOSE • VERIFIED LMS RECORD",
    width / 2,
    1870,
  );

  // Auto Download Image File
  setTimeout(() => {
    const imageURI = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    const safeName = state.user.name.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    link.download = `HCA_Achievement_Card_${safeName}_${Date.now()}.png`;
    link.href = imageURI;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 100);
}

/* Initialize Application */
renderApp();
