/* ==========================================================================
   1. CURRICULUM DATA MODEL (COMPLETE HCA ROADMAP WITH FULL DEEP COVERAGE)
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
        challenge: "CSS Layout Puzzle — Build 3 responsive layouts with Flexbox & Grid.",
        video: 'Devlog #1 — "Why I\'m learning to code with purpose"',

        what: "Master structural HTML5 semantic tags (<pre> < header >, < main >, < nav >, < article >, < footer > </pre> )and modern CSS layout techniques including Flexbox axis alignment, flex grow/shrink, CSS Grid template areas, and gap properties.",
        why: "Semantic markup is vital for Web Accessibility (WCAG 2.1), screen readers, and search engine optimization. Grid and Flexbox form the foundation of responsive UI layouts.",
        when: "~15 hours total time commitment across 7 days.",
        where: "freeCodeCamp Responsive Web Design Certification & MDN Web Docs HTML/CSS Guides.",
        how: "1. Complete freeCodeCamp's 'Learn HTML by Building a Cat Photo App' and 'Learn CSS Variables by Building a City Skyline'.\n2. Recreate 3 responsive layout wireframes (Header/Sidebar/Content, 3-Column Feature Cards, Grid Gallery).\n3. Record and upload a 2-minute video sharing your motivation and demonstrating your code.",
      },
      {
        w: 2,
        title: "Responsive Design in Practice",
        resource: "fCC Responsive Web Design",
        type: "even",
        asn: "Static Responsive Page — Mobile-First Web Page",
        blog: 'Blog Post #1 — "HTML/CSS Rules Every Beginner Breaks"',
        what: "Implement mobile-first design workflows, viewport media queries (@media), fluid CSS units (vw, vh, rem, em, clamp()), and structured CSS custom properties (variables).",
        why: "Over 60% of humanitarian aid recipients and community users access web resources via mobile devices with varying screen sizes.",
        when: "~15 hours total time commitment.",
        where: "freeCodeCamp Responsive Web Design & Web.dev Responsive Design Guides.",
        how: "1. Select one of the assignment briefs provided.\n2. Code a fully responsive, mobile-first static web page without external frameworks.\n3. Test across mobile (375px), tablet (768px), and desktop (1200px) viewports.\n4. Write and publish Blog Post #1 documenting lessons learned.",
      },
      {
        w: 3,
        title: "Git & GitHub + JS Basics",
        resource: "Odin Essentials",
        type: "odd",
        challenge: "JS Logic Katas — 5 fundamental algorithmic tasks in JavaScript.",
        video: 'Devlog #2 — "My Git terminal workflow explained"',
        what: "Version control fundamentals using Git CLI commands (init, add, commit, branch, checkout, merge, push), GitHub repository setup, SSH key authentication, and introductory JavaScript syntax (variables, data types, operators).",
        why: "Git and version control are non-negotiable industry requirements for software engineering collaboration, code history tracking, and open-source contributions.",
        when: "~16 hours total time commitment.",
        where: "The Odin Project Foundations & GitHub Official Documentation.",
        how: "1. Set up SSH authentication and publish your HCA assignments repository on GitHub.\n2. Complete 5 JavaScript algorithm katas covering variable scope, arithmetic, and basic string operations.\n3. Record Devlog #2 explaining your local Git workflow and terminal terminal commands.",
      },
      {
        w: 4,
        title: "JS Control Flow Deep Dive",
        resource: "fCC JS Basic",
        type: "even",
        asn: "Form Validation Script — Client-Side Data Sanitization",
        blog: 'Guidebook Chapter #1 — "Control Flow Demystified"',
        what: "Conditional logic (if/else, switch statements, ternary operators), iteration loops (for, while, for...of), function declarations, return values, and DOM form input validation.",
        why: "Client-side validation ensures data collected from users in emergency or assistance situations is clean, safe, and formatted correctly before processing.",
        when: "~16 hours total time commitment.",
        where: "freeCodeCamp JS Algorithms & Data Structures & MDN JavaScript Guide.",
        how: "1. Select an assignment brief and build a dynamic form validation script.\n2. Prevent default form submission and render custom error messages for invalid fields.\n3. Publish Guidebook Chapter #1 detailing control flow patterns and conditional logic.",
      },
      {
        w: 5,
        title: "DOM Manipulation & Events",
        resource: "fCC JS DOM",
        type: "odd",
        challenge: "DOM Puzzles — Dynamic search list filter with keyup & click events.",
        video: 'Devlog #3 — "How DOM manipulation actually works"',
        what: "Selecting DOM nodes (querySelector, querySelectorAll), modifying element styles and classLists, handling user events (click, input, submit, keydown), dynamic element creation (createElement, appendChild), and event bubbling.",
        why: "DOM manipulation enables interactive web applications that respond instantly to user actions without page reloads.",
        when: "~16 hours total time commitment.",
        where: "JavaScript.info (Document & Event Handling) & fCC DOM Manipulation.",
        how: "1. Build an interactive filterable list that updates dynamically on input keyup.\n2. Implement smooth DOM insertion and deletion animations.\n3. Produce Devlog #3 demonstrating dynamic DOM updates.",
      },
      {
        w: 6,
        title: "Midterm Project — Code Labs",
        resource: "Project Week",
        type: "midterm",
        video: "Midterm Code Tour & Showcase",
        what: "Synthesize HTML5, CSS3, Flexbox/Grid, Git, and pure Vanilla JavaScript DOM manipulation to build a fully deployed, responsive humanitarian web tool.",
        why: "Validates your core frontend foundation and readiness to build standalone client-side web utilities.",
        when: "~20 hours dedicated project sprint.",
        where: "HCA Code Labs Briefs & GitHub Pages / Vercel.",
        how: "1. Review project options and download your chosen option's PDF brief.\n2. Build, test, and commit your project repository.\n3. Deploy live site to GitHub Pages or Vercel.\n4. Record a comprehensive video walkthrough of your project code.",
        projectOptions: [
          {
            id: "s1_m_opt1",
            title: "Option A: Disaster Preparedness & Relief Info Portal",
            desc: "Build a responsive static emergency information hub featuring interactive emergency contact filters, supply checklists, and evacuation zone search.",
            pdfBrief: "assets/project-briefs/sem1_midterm_option_a.pdf"
          },
          {
            id: "s1_m_opt2",
            title: "Option B: Local Food Shelter & Volunteer Sign-up App",
            desc: "Develop an interactive community food pantry platform with dynamic volunteer shift filtering, registration form validation, and real-time shelter status UI.",
            pdfBrief: "assets/project-briefs/sem1_midterm_option_b.pdf"
          },
          {
            id: "s1_m_opt3",
            title: "Option C: Community Health Clinic Directory & Contact Platform",
            desc: "Create a web directory for non-profit medical clinics supporting searchable medical services, dynamic appointment requests, and location tags.",
            pdfBrief: "assets/project-briefs/sem1_midterm_option_c.pdf"
          }
        ],
        aiPrompt: "Act as a Senior Humanitarian Tech Lead and Frontend Educator. My current skill set includes HTML5, CSS3 (Flexbox & Grid), Responsive Web Design, Git/GitHub, and Vanilla JavaScript (DOM Manipulation, Event Listeners, and Form Validation). Generate 3 original humanitarian project ideas and detailed project briefs similar to a Disaster Preparedness Portal or Shelter Sign-up App. For each idea, provide: 1) Project Title & Humanitarian Mission Statement, 2) Core User Stories & Target Audience, 3) Technical Specifications matching Vanilla JS/HTML/CSS without frameworks, 4) Web Accessibility (WCAG 2.1) Guidelines, and 5) A 5-step Development Roadmap."
      },
      {
        w: 7,
        title: "UX Core & Accessibility",
        resource: "Udemy UX Essentials",
        type: "odd",
        challenge: "Accessibility Audit — Audit a web page for WCAG contrast & ARIA compliance.",
        video: 'Devlog #4 — "Making web apps accessible to everyone"',
        what: "Web Content Accessibility Guidelines (WCAG 2.1 AA), semantic accessibility attributes (ARIA roles, aria-labels, aria-expanded), keyboard navigation focus traps, screen reader support, and color contrast standards.",
        why: "Humanitarian software must be accessible to every individual, including users with visual, auditory, cognitive, or motor impairments.",
        when: "~14 hours total time commitment.",
        where: "W3C Web Accessibility Initiative (WAI) & WAVE Web Accessibility Evaluation Tool.",
        how: "1. Perform a full WCAG 2.1 audit on a sample web page using WAVE and Lighthouse.\n2. Resolve key contrast, missing alt text, and keyboard navigation issues.\n3. Record Devlog #4 explaining screen reader compatibility fixes.",
      },
      {
        w: 8,
        title: "UX Heuristics Applied",
        resource: "Udemy UX Essentials",
        type: "even",
        asn: "Interface Redesign Brief — Usability Overhaul",
        blog: 'Guidebook Chapter #2 — "UX Heuristics for Developers"',
        what: "Nielsen's 10 Usability Heuristics, user flow mapping, visual hierarchy, micro-interactions, responsive typography scaling, and error prevention patterns.",
        why: "High-stress, urgent humanitarian environments require intuitive, low-cognitive-load user interfaces.",
        when: "~15 hours total time commitment.",
        where: "Nielsen Norman Group UX Guides & Material Design Guidelines.",
        how: "1. Select an assignment brief to redesign a confusing public assistance form or clinic portal.\n2. Apply Jakob Nielsen's usability principles to improve visual contrast and user flow.\n3. Publish Guidebook Chapter #2 on UX design heuristics.",
      },
      {
        w: 9,
        title: "JS Intermediate: Arrays & Objects",
        resource: "fCC JS Intermediate",
        type: "odd",
        challenge: "Array Methods Kata — Filter, map, and reduce humanitarian data arrays.",
        video: 'Devlog #5 — "Mastering Array.reduce in JavaScript"',
        what: "Advanced array manipulation methods (.map(), .filter(), .reduce(), .find(), .some(), .every()), object destructuring, key-value manipulation, and immutable data transformation techniques.",
        why: "Data transformation and array operations are fundamental to filtering resources, aggregating statistics, and rendering dynamic UI lists.",
        when: "~16 hours total time commitment.",
        where: "freeCodeCamp JS Data Structures & MDN JavaScript Array Reference.",
        how: "1. Solve 6 intermediate array and object data processing challenges.\n2. Implement a multi-criteria data filter using chained .filter() and .reduce().\n3. Record Devlog #5 demonstrating custom array reduction methods.",
      },
      {
        w: 10,
        title: "Functions, Scope & Intro Async",
        resource: "fCC JS Intermediate",
        type: "even",
        asn: "Interactive Widget Brief — Client-Side Calculator / Tool",
        blog: 'Guidebook Chapter #3 — "Understanding JS Scope and Closures"',
        what: "First-class functions, higher-order functions, execution context, call stack, lexical scope, closures, function currying, and introductory setTimeout/setInterval asynchronous timers.",
        why: "Deep comprehension of scope and closures prevents state leakage and enables clean modular code architecture.",
        when: "~16 hours total time commitment.",
        where: "You Don't Know JS (Book Series) & freeCodeCamp Advanced JS.",
        how: "1. Select an assignment brief and build an interactive calculator or quiz tool.\n2. Encapsulate widget state inside closures to avoid global scope pollution.\n3. Publish Guidebook Chapter #3 breaking down closure execution contexts.",
      },
      {
        w: 11,
        title: "JS Wrap-Up & Portfolio Prep",
        resource: "Odin / Portfolio",
        type: "odd",
        challenge: "Mixed JS Review Challenge — Debug 3 broken DOM/JS scripts.",
        video: 'Devlog #6 — "Preparing my first developer portfolio"',
        what: "Advanced browser debugging techniques using Chrome DevTools Breakpoints, Console API, Network tab inspection, code refactoring, and portfolio presentation standards.",
        why: "Debugging efficiency and clean code organization differentiate proficient developers and enable seamless team collaboration.",
        when: "~15 hours total time commitment.",
        where: "Chrome DevTools Official Documentation & Odin Project Portfolio Guides.",
        how: "1. Analyze and fix bugs in 3 broken codebase repositories.\n2. Clean up CSS and JS comments in your personal project portfolio repository.\n3. Record Devlog #6 demonstrating Chrome DevTools debugging.",
      },
      {
        w: 12,
        title: "Final Project & Special Quest",
        resource: "Capstone Week",
        type: "final",
        blog: 'Guidebook Chapter #4 — "Building Pure JS Apps"',
        specialQuest: "Special Quest Gate: Complete 1 free community action item (Open-Source PR / Tech Volunteering / Developer Networking) to unlock your Semester 1 Title Certificate.",
        specialQuestLinks: [
          { name: "Catchafire Volunteer Tech Projects", url: "https://www.catchafire.org/" },
          { name: "freeCodeCamp Open Source Guide", url: "https://www.freecodecamp.org/news/how-to-contribute-to-freecodecamp-open-source/" },
          { name: "Open Source Guides (GitHub)", url: "https://opensource.guide/how-to-contribute/" }
        ],
        what: "Build, test, and deploy a comprehensive Vanilla JavaScript web application that solves a real community or humanitarian problem, then fulfill your Special Quest action item.",
        why: "Demonstrates complete mastery of Semester 1 outcomes and earns your official 'Frontend Developer' title credential.",
        when: "~22 hours dedicated project sprint.",
        where: "GitHub Repository, Live Vercel/GitHub Pages Deployment & HCA LMS.",
        how: "1. Select one of the 3 final project briefs and download its detailed PDF.\n2. Complete project code, test responsive viewports, and deploy live.\n3. Complete 1 Special Quest activity from the approved resource links.\n4. Publish Guidebook Chapter #4 summarizing pure Vanilla JS architecture.",
        projectOptions: [
          {
            id: "s1_f_opt1",
            title: "Option A: Community Resource Finder & Mutual Aid Network",
            desc: "Build a responsive web application for finding neighborhood mutual aid groups, emergency food distributions, and housing assistance with live category filtering and search.",
            pdfBrief: "assets/project-briefs/sem1_final_option_a.pdf"
          },
          {
            id: "s1_f_opt2",
            title: "Option B: Emergency Blood Donor Tracker & Request Portal",
            desc: "Develop a web platform connecting blood donors with local urgent hospital requests, featuring dynamic donor eligibility calculators and interactive request management.",
            pdfBrief: "assets/project-briefs/sem1_final_option_b.pdf"
          },
          {
            id: "s1_f_opt3",
            title: "Option C: Clean Water Point & Well Maintenance Tracker",
            desc: "Create an emergency water access tracker for rural communities that displays active clean water points, maintenance ticket submissions, and supply status badges.",
            pdfBrief: "assets/project-briefs/sem1_final_option_c.pdf"
          }
        ],
        aiPrompt: "Act as an Expert Software Architect and Humanitarian Advisor. Given my skills in HTML5, CSS3 (Flexbox/Grid), Git/GitHub, JS DOM manipulation, Array/Object methods, and WCAG Accessibility, generate 3 innovative capstone project briefs focused on social impact and community aid. Include detailed technical specifications, DOM architecture, data filtering requirements, accessibility criteria, and deployment instructions suitable for a student portfolio."
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
        challenge: "Functional JS Katas — Refactor ES5 code to ES6+ Arrow Functions & Modules.",
        video: "Devlog #7 — Modern JS Refactoring",
        what: "Modern JavaScript (ES6+): Arrow functions, template literals, destructuring assignment, spread/rest operators, ES modules (import/export), default parameters, and array methods.",
        why: "React applications rely heavily on ES6+ syntax patterns, immutable data updates, and modular JavaScript structures.",
        when: "~15 hours total time commitment.",
        where: "freeCodeCamp ES6 Certification & MDN Modern JS Guides.",
        how: "1. Refactor 5 legacy ES5 scripts into modern ES6+ functional modules.\n2. Practice array destructuring and spread operator immutability.\n3. Record Devlog #7 explaining modern JS syntax advantages.",
      },
      {
        w: 14,
        title: "Async JS, Promises & Fetch API",
        resource: "fCC JS Async",
        type: "even",
        asn: "Crisis Alert Fetcher App — REST API Data Fetcher",
        blog: "Guidebook #5 — Promises & Async/Await",
        what: "Asynchronous JavaScript execution: Event loop, Callbacks, Promises, async/await syntax, HTTP methods, and the native Fetch API for pulling live external data.",
        why: "Modern frontend applications must consume live REST API feeds, handle loading states, and gracefully render error messages.",
        when: "~16 hours total time commitment.",
        where: "freeCodeCamp Async JS & JavaScript.info Promises/Async.",
        how: "1. Select an assignment brief and build a dynamic API fetcher web app.\n2. Implement async/await functions with try/catch block error handling.\n3. Publish Guidebook Chapter #5 explaining asynchronous execution flows.",
      },
      {
        w: 15,
        title: "UI Design Fundamentals & Figma",
        resource: "Udemy Figma",
        type: "odd",
        challenge: "Figma Component Design Challenge — Create design tokens & component variants.",
        video: "Devlog #8 — Designing in Figma as a Dev",
        what: "Figma design system workflows: Frames, auto-layout 5.0, typography scales, color palettes, component variants, interactive prototypes, and developer inspect mode.",
        why: "Professional frontend developers must seamlessly interpret design tokens and collaborate with UI/UX design teams.",
        when: "~15 hours total time commitment.",
        where: "Figma Official Learning Portal & Material Design 3 System.",
        how: "1. Design a 4-screen mobile/desktop UI mockup in Figma for a community project.\n2. Setup auto-layout components with light and dark mode variants.\n3. Record Devlog #8 demonstrating your Figma workflow.",
      },
      {
        w: 16,
        title: "Figma to UI Implementation",
        resource: "Udemy UI Design",
        type: "even",
        asn: "Figma-to-Code Responsive Page — Pixel Perfect Translation",
        blog: "Guidebook #6 — Pixel Perfect Translation",
        what: "Translating Figma design specifications into pixel-perfect responsive HTML/CSS code, extracting SVG assets, matching typography hierarchy, and implementing CSS variables.",
        why: "Bridges the gap between design prototypes and production-ready code.",
        when: "~16 hours total time commitment.",
        where: "Figma Inspect Mode & VS Code Layout Tools.",
        how: "1. Select an assignment brief and implement your Figma design design into code.\n2. Ensure zero design drift on key breakpoints.\n3. Publish Guidebook Chapter #6 on pixel-perfect frontend engineering.",
      },
      {
        w: 17,
        title: "React Core: Components & Props",
        resource: "fCC React",
        type: "odd",
        challenge: "React Prop Puzzles — Build a dynamic card library with props.",
        video: "Devlog #9 — First Steps in React",
        what: "React ecosystem basics: JSX syntax, Virtual DOM, functional components, props passing, prop destructuring, children prop, and rendering dynamic lists with unique keys.",
        why: "Component-driven architecture enables reusability, maintainability, and scalable frontend UI development.",
        when: "~16 hours total time commitment.",
        where: "React Official Documentation (React.dev) & freeCodeCamp React.",
        how: "1. Bootstrap a React project using Vite.\n2. Create a library of reusable UI components (Buttons, Cards, Badges, Navbars).\n3. Record Devlog #9 introducing React component architecture.",
      },
      {
        w: 18,
        title: "Midterm Project — Code Labs",
        resource: "React Midterm",
        type: "midterm",
        video: "Midterm React App Showcase",
        what: "Build a multi-component interactive React web application incorporating props, list rendering, custom styling, and layout architecture.",
        why: "Validates core React fundamentals before moving to complex state management and dynamic lifecycle hooks.",
        when: "~20 hours dedicated project sprint.",
        where: "GitHub Repository & Vercel Deployment.",
        how: "1. Choose one of the 3 React midterm project options and download its PDF brief.\n2. Build the application using component-driven best practices.\n3. Deploy the application to Vercel.\n4. Record a showcase video explaining your component hierarchy.",
        projectOptions: [
          {
            id: "s2_m_opt1",
            title: "Option A: Disaster Alert Dashboard in React",
            desc: "Build a component-driven emergency alert application displaying live crisis alerts, priority filters, and interactive alert details using reusable React components.",
            pdfBrief: "assets/project-briefs/sem2_midterm_option_a.pdf"
          },
          {
            id: "s2_m_opt2",
            title: "Option B: Emergency Food Bank Supply Calculator",
            desc: "Develop an interactive React tool for calculating food distribution requirements based on family size, dietary needs, and regional supply inventories.",
            pdfBrief: "assets/project-briefs/sem2_midterm_option_b.pdf"
          },
          {
            id: "s2_m_opt3",
            title: "Option C: Refugee Resettlement Services & Housing Directory",
            desc: "Create a React directory application offering searchable temporary shelter listings, language assistance tags, and dynamic contact request components.",
            pdfBrief: "assets/project-briefs/sem2_midterm_option_c.pdf"
          }
        ],
        aiPrompt: "Act as a Lead React Engineer in a Humanitarian NGO. Based on my React skills (Components, Props, JSX, CSS Modules, and Event Handling), generate 3 original humanitarian project briefs. For each idea, include project objectives, component hierarchy trees, props specifications, user interactions, and step-by-step dev milestones."
      },
      {
        w: 19,
        title: "React State & Hooks (useState, useEffect)",
        resource: "fCC React",
        type: "odd",
        challenge: "State Management Katas — Dynamic forms and side-effect data fetching.",
        video: "Devlog #10 — React Hooks Deep Dive",
        what: "React Hooks deep dive: useState hook for component state, state immutability, useEffect hook lifecycle, dependency arrays, cleanup functions, and fetching API data on mount.",
        why: "State management enables dynamic interactive user interfaces that respond seamlessly to real-time inputs.",
        when: "~16 hours total time commitment.",
        where: "React.dev Hooks Documentation & freeCodeCamp React Course.",
        how: "1. Build 3 interactive React widgets using useState and useEffect.\n2. Implement a live currency or metric converter fetching external API data.\n3. Record Devlog #10 breaking down Hook dependency arrays.",
      },
      {
        w: 20,
        title: "React Router & Multi-Page Apps",
        resource: "fCC React",
        type: "even",
        asn: "Multi-page NGO Portal — React Router SPA",
        blog: "Guidebook #7 — Single Page App Routing",
        what: "Client-side routing with React Router v6: BrowserRouter, Routes, Route, Link, NavLink, dynamic route parameters (useParams), programmatic navigation (useNavigate), and 404 pages.",
        why: "Enables Single Page Applications (SPAs) with fast, seamless multi-page navigation without full page reloads.",
        when: "~16 hours total time commitment.",
        where: "React Router v6 Official Documentation.",
        how: "1. Select an assignment brief and build a multi-page React SPA.\n2. Configure dynamic route parameters for item detail views.\n3. Publish Guidebook Chapter #7 detailing client-side routing.",
      },
      {
        w: 21,
        title: "Context API & Global State",
        resource: "fCC React",
        type: "odd",
        challenge: "Context API Refactor Challenge — Convert prop-drilled app to React Context.",
        video: "Devlog #11 — Avoiding Prop Drilling",
        what: "React Context API: createContext, Context.Provider, useContext hook, global theme state, user preferences, and avoiding prop drilling across deeply nested components.",
        why: "Provides clean global state management for application-wide data like themes, user authentication, and shopping carts.",
        when: "~15 hours total time commitment.",
        where: "React.dev Passing Data Deeply with Context.",
        how: "1. Refactor a complex multi-level React app to use Context API for state management.\n2. Implement a dynamic Dark Mode / Light Mode global state toggle.\n3. Record Devlog #11 explaining prop drilling solutions.",
      },
      {
        w: 22,
        title: "Intro to Redux Toolkit",
        resource: "fCC React",
        type: "even",
        asn: "Stateful Aid Cart App — Redux Store Implementation",
        blog: "Guidebook #8 — Redux vs Context API",
        what: "Redux Toolkit architecture: configureStore, createSlice, reducers, actions, useSelector, useDispatch hooks, and immutable state updates with Immer.",
        why: "Industry-standard enterprise global state management required for large-scale, mission-critical applications.",
        when: "~16 hours total time commitment.",
        where: "Redux Toolkit Official Quick Start Tutorials.",
        how: "1. Build an Aid Distribution Request Cart app using Redux Toolkit.\n2. Define slices for cart items, supply quantities, and order status.\n3. Publish Guidebook Chapter #8 comparing Redux Toolkit with Context API.",
      },
      {
        w: 23,
        title: "React Testing & Performance",
        resource: "fCC React",
        type: "odd",
        challenge: "React Component Unit Tests — Write 6 Jest / React Testing Library tests.",
        video: "Devlog #12 — Testing React Apps",
        what: "React testing and optimization: React Testing Library, Jest assertions, rendering tests, user-event interactions, React.memo, useMemo, and useCallback optimization hooks.",
        why: "Automated unit tests ensure code reliability, prevent regressions, and improve application render performance.",
        when: "~15 hours total time commitment.",
        where: "Testing Library React Docs & React.dev Optimization Guides.",
        how: "1. Write 6 unit tests covering button clicks, state changes, and API mocks.\n2. Optimize dynamic rendering lists using React.memo.\n3. Record Devlog #12 showcasing test suite execution.",
      },
      {
        w: 24,
        title: "Final Project & Special Quest",
        resource: "React Final",
        type: "final",
        blog: "Guidebook #9 — React for Social Good",
        specialQuest: "Special Quest Gate: Complete 1 free career simulation or volunteer platform action (The Forage Virtual Internship / Open Source Social Impact Repo) to unlock your React Developer Title.",
        specialQuestLinks: [
          { name: "The Forage Social Impact Simulations", url: "https://www.theforage.com/" },
          { name: "GitHub Open Source Humanitarian Projects", url: "https://github.com/topics/humanitarian" },
          { name: "VolunteerMatch Tech Projects", url: "https://www.volunteermatch.org/" }
        ],
        what: "Build and deploy a full-featured React Single Page Application utilizing React Router, global state management (Context or Redux), and REST API integration, then clear your Special Quest requirement.",
        why: "Demonstrates production readiness in React web development and unlocks your official 'React Developer' title certificate.",
        when: "~22 hours dedicated project sprint.",
        where: "Vercel / Netlify Cloud Deployment & GitHub.",
        how: "1. Select one of the 3 final React project options and download its PDF brief.\n2. Complete application code, write unit tests, and deploy to Vercel.\n3. Fulfill 1 Special Quest activity from the resource links.\n4. Publish Guidebook Chapter #9 summarizing social-impact React architecture.",
        projectOptions: [
          {
            id: "s2_f_opt1",
            title: "Option A: Interactive Crisis Resource Map & Relief Hub",
            desc: "Build a comprehensive React SPA featuring an interactive crisis map, multi-category supply search, live shelter capacity indicators, and persistent user bookmarks.",
            pdfBrief: "assets/project-briefs/sem2_final_option_a.pdf"
          },
          {
            id: "s2_f_opt2",
            title: "Option B: Humanitarian Volunteer Skill Matcher & Dispatch Portal",
            desc: "Develop a React portal matching skilled volunteers (medical, translation, logistics) with urgent emergency tasks, complete with stateful application forms and admin filters.",
            pdfBrief: "assets/project-briefs/sem2_final_option_b.pdf"
          },
          {
            id: "s2_f_opt3",
            title: "Option C: Medical Aid Supply Chain & Inventory Tracker",
            desc: "Create an enterprise-grade medical supply tracking SPA managing clinic inventory levels, expiring medicine alerts, and automated requisition orders in React.",
            pdfBrief: "assets/project-briefs/sem2_final_option_c.pdf"
          }
        ],
        aiPrompt: "Act as a Senior React Architect. Given my mastery of React, Hooks (useState, useEffect), React Router v6, Context API / Redux, and REST API Integration, create 3 detailed project briefs for web applications solving real humanitarian issues. Provide functional specs, data models, component trees, state architecture, and deployment steps."
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
        challenge: "Node CLI Scripting Challenge — Build a file system automation tool.",
        video: "Devlog #13 — Building CLI Tools in Node",
        what: "Server-side JavaScript runtime with Node.js: Event loop, asynchronous I/O, CommonJS vs ESM modules, native File System (fs) module, Path module, and NPM package management.",
        why: "Node.js allows JavaScript developers to run scalable server environments and build command-line tools.",
        when: "~15 hours total time commitment.",
        where: "Nodejs.org Official Documentation & freeCodeCamp Backend Course.",
        how: "1. Build a Node.js CLI tool that parses, cleans, and converts raw JSON relief data files.\n2. Manage external dependencies using package.json and npm scripts.\n3. Record Devlog #13 showcasing command-line tool execution.",
      },
      {
        w: 26,
        title: "Express.js Core & REST APIs",
        resource: "fCC Backend",
        type: "even",
        asn: "In-Memory CRUD API Brief — Build Express REST Service",
        blog: "Guidebook #10 — Designing RESTful APIs",
        what: "Web server architecture with Express.js: HTTP request/response handling, RESTful URI routing standards (GET, POST, PUT, DELETE), route parameters, query strings, and status codes.",
        why: "RESTful APIs form the backbones of modern web applications, connecting client user interfaces to server databases.",
        when: "~16 hours total time commitment.",
        where: "Expressjs.com Official Documentation.",
        how: "1. Select an assignment brief and build an Express REST API using in-memory storage.\n2. Test all HTTP CRUD endpoints using Postman or Bruno.\n3. Publish Guidebook Chapter #10 detailing RESTful design standards.",
      },
      {
        w: 27,
        title: "SQL Basics & Relational Data",
        resource: "Kaggle SQL",
        type: "odd",
        challenge: "SQL Query Katas — Solve 10 complex database query tasks.",
        video: "Devlog #14 — SQL Queries Decoded",
        what: "Relational database concepts: Table schemas, primary keys, foreign keys, SQL statements (SELECT, INSERT, UPDATE, DELETE), WHERE filtering, JOINs (INNER, LEFT, RIGHT), and GROUP BY aggregations.",
        why: "Relational databases power global financial, administrative, and data-integrity critical systems.",
        when: "~15 hours total time commitment.",
        where: "Kaggle Interactive SQL Course & PostgreSQL Tutorial.",
        how: "1. Write 10 SQL queries analyzing a database of relief aid distributions.\n2. Practice multi-table INNER JOINs and aggregate calculations.\n3. Record Devlog #14 explaining relational query execution.",
      },
      {
        w: 28,
        title: "PostgreSQL & Database Design",
        resource: "fCC Relational DB",
        type: "even",
        asn: "Relational Schema Design Brief — Entity Relationship Modeling",
        blog: "Guidebook #11 — Database Normalization",
        what: "PostgreSQL setup, Entity-Relationship Diagramming (ERD), table normalization (1NF, 2NF, 3NF), index optimization, and executing raw SQL queries via the node-postgres (pg) library.",
        why: "Proper database normalization prevents redundant data, guarantees data consistency, and optimizes query performance.",
        when: "~16 hours total time commitment.",
        where: "PostgreSQL Official Documentation & freeCodeCamp Relational Database.",
        how: "1. Design an ERD for an emergency relief management system.\n2. Implement the PostgreSQL database schema and write node-postgres database connection logic.\n3. Publish Guidebook Chapter #11 on database normalization.",
      },
      {
        w: 29,
        title: "MongoDB & Mongoose Schemas",
        resource: "fCC Backend",
        type: "odd",
        challenge: "Mongoose Schema Validation Challenge — Define robust NoSQL models.",
        video: "Devlog #15 — Working with NoSQL",
        what: "Document-oriented NoSQL databases: MongoDB Atlas cloud setup, collections, BSON documents, Mongoose Object Data Modeling (ODM), Schema types, default values, and custom validators.",
        why: "Document databases offer flexible schemas ideal for rapid iteration and hierarchical data structures.",
        when: "~15 hours total time commitment.",
        where: "MongoDB Documentation & Mongoose ODM Guides.",
        how: "1. Connect an Express server to a MongoDB Atlas cluster using Mongoose.\n2. Define models with field validation, required constraints, and timestamps.\n3. Record Devlog #15 demonstrating NoSQL database queries.",
      },
      {
        w: 30,
        title: "Midterm Project — Code Labs",
        resource: "API Midterm",
        type: "midterm",
        video: "Midterm API Showcase & Postman Tour",
        what: "Build and deploy a production-ready RESTful API backend using Express.js and MongoDB/PostgreSQL, complete with query filtering, error middleware, and Postman API documentation.",
        why: "Validates backend server architecture capabilities and database integration mastery.",
        when: "~20 hours dedicated project sprint.",
        where: "Render / Railway Cloud Hosts & GitHub.",
        how: "1. Choose one of the 3 backend API midterm briefs and download its PDF.\n2. Develop the Express API with dynamic database querying.\n3. Deploy the live backend API to Render or Railway.\n4. Export and publish a public Postman Collection for testing.",
        projectOptions: [
          {
            id: "s3_m_opt1",
            title: "Option A: Food Bank Inventory Management REST API",
            desc: "Build a complete RESTful Express API for food banks to manage food item stock levels, category tags, batch expiration dates, and donor source tracking.",
            pdfBrief: "assets/project-briefs/sem3_midterm_option_a.pdf"
          },
          {
            id: "s3_m_opt2",
            title: "Option B: Humanitarian Volunteer Shift & Roster Scheduling API",
            desc: "Develop a backend scheduling API allowing emergency organizations to manage shift rosters, volunteer skill tags, capacity limits, and assignment status.",
            pdfBrief: "assets/project-briefs/sem3_midterm_option_b.pdf"
          },
          {
            id: "s3_m_opt3",
            title: "Option C: Medical Relief Clinic Patient Queue API",
            desc: "Create an Express API for field medical clinics managing patient intake queues, triage priority rankings, doctor assignments, and treatment logs.",
            pdfBrief: "assets/project-briefs/sem3_midterm_option_c.pdf"
          }
        ],
        aiPrompt: "Act as a Backend Systems Lead. Based on my skills in Node.js, Express.js, SQL/PostgreSQL, MongoDB/Mongoose, and RESTful API architecture, generate 3 backend project briefs tailored for humanitarian NGOs. Include data schemas, API routes, controller logic specifications, input validation requirements, and Postman testing plans."
      },
      {
        w: 31,
        title: "Authentication: JWT & Bcrypt",
        resource: "Node Auth",
        type: "odd",
        challenge: "Auth Security Vulnerability Challenge — Secure an unprotected authentication flow.",
        video: "Devlog #16 — Secure JWT Auth Flow",
        what: "Server security & authentication: Password hashing with salt using Bcrypt, JSON Web Tokens (JWT) sign and verify, Authorization headers (Bearer token), and protected route middleware.",
        why: "User authentication protects administrative endpoints and guarantees sensitive beneficiary data privacy.",
        when: "~16 hours total time commitment.",
        where: "JWT.io Documentation & OWASP Authentication Cheat Sheet.",
        how: "1. Implement secure user registration and login endpoints in Express.\n2. Hash passwords with Bcrypt and return signed JWTs upon success.\n3. Record Devlog #16 testing protected endpoint access with JWTs.",
      },
      {
        w: 32,
        title: "Middleware & Input Validation",
        resource: "Node Security",
        type: "even",
        asn: "Sanitized Express API Brief — Production Middleware Layer",
        blog: "Guidebook #12 — API Security Best Practices",
        what: "Custom Express middleware pipeline, input validation with express-validator, request sanitization against SQL injection and XSS attacks, CORS security headers, and rate-limiting.",
        why: "Protects server infrastructure from malicious payloads, brute force attempts, and data corruption.",
        when: "~15 hours total time commitment.",
        where: "Express Validator Docs & OWASP Node.js Security Guides.",
        how: "1. Select an assignment brief and implement input validation middleware on all API routes.\n2. Sanitize user inputs and return structured HTTP 400 error arrays.\n3. Publish Guidebook Chapter #12 on API security best practices.",
      },
      {
        w: 33,
        title: "Testing APIs: Mocha, Chai & Supertest",
        resource: "Node Testing",
        type: "odd",
        challenge: "API Integration Test Challenge — Write 8 automated Supertest assertions.",
        video: "Devlog #17 — Automated API Testing",
        what: "Automated API testing frameworks: Mocha test runner, Chai assertion library, Supertest HTTP endpoint testing, test database setups, and tear-down hooks.",
        why: "Automated backend tests verify API business logic stability and prevent regressions during code updates.",
        when: "~15 hours total time commitment.",
        where: "Mocha & Supertest Official Documentation.",
        how: "1. Build an integration test suite for an Express API covering GET, POST, and DELETE endpoints.\n2. Verify response status codes, payload structures, and error conditions.\n3. Record Devlog #17 executing automated Mocha test suites.",
      },
      {
        w: 34,
        title: "API Documentation & Postman",
        resource: "Postman Docs",
        type: "even",
        asn: "Documented API Brief — OpenAPI / Swagger Specification",
        blog: "Guidebook #13 — Writing Great API Docs",
        what: "API documentation standards: OpenAPI 3.0 specification, Swagger UI middleware, Postman public documentation generation, environment variables, and sample response payloads.",
        why: "Clear API documentation is essential for frontend integration and open-source API consumption.",
        when: "~14 hours total time commitment.",
        where: "Swagger.io Documentation & Postman Learning Center.",
        how: "1. Document an entire Express backend API using Swagger UI or Postman Collections.\n2. Add query parameter descriptions and response code examples.\n3. Publish Guidebook Chapter #13 on writing developer-friendly API docs.",
      },
      {
        w: 35,
        title: "Error Handling & Logging Patterns",
        resource: "Node Patterns",
        type: "odd",
        challenge: "Error Handler Middleware Challenge — Build centralized error middleware.",
        video: "Devlog #18 — Enterprise Error Handling",
        what: "Centralized Express error handling middleware, custom Error classes, environment-based stack traces, application logging with Winston and Morgan, and unhandled rejection handling.",
        why: "Centralized error handling prevents server crashes and provides clean error diagnostics in production environments.",
        when: "~15 hours total time commitment.",
        where: "Express Error Handling Guides & Winston Logger Documentation.",
        how: "1. Build custom AppError class extensions and centralized error middleware in Express.\n2. Log application warnings and errors to rotating file logs using Winston.\n3. Record Devlog #18 demonstrating server error interception.",
      },
      {
        w: 36,
        title: "Final Project & Special Quest",
        resource: "Backend Final",
        type: "final",
        blog: "Guidebook #14 — Production Node Backends",
        specialQuest: "Special Quest Gate: Complete 1 free open-source backend contribution or mapping task (Humanitarian OpenStreetMap / GitHub Open Source PR) to earn your Backend Developer Title.",
        specialQuestLinks: [
          { name: "Humanitarian OpenStreetMap Team (HOT)", url: "https://www.hotosm.org/" },
          { name: "GitHub Open Source PR Guide", url: "https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-open-source" },
          { name: "Code for Africa Projects", url: "https://codeforafrica.org/" }
        ],
        what: "Complete and deploy a production-grade backend API featuring JWT authentication, database persistence, input sanitization, and automated integration test coverage, then clear your Special Quest requirement.",
        why: "Unlocks your official 'Backend Developer' title certificate and proves backend engineering competency.",
        when: "~22 hours dedicated project sprint.",
        where: "Render / Railway Cloud Host, GitHub & Postman.",
        how: "1. Select one of the 3 backend final project briefs and download its PDF.\n2. Build, test, document, and deploy your production backend API.\n3. Fulfill 1 Special Quest activity from the resource links.\n4. Publish Guidebook Chapter #14 summarizing backend architecture.",
        projectOptions: [
          {
            id: "s3_f_opt1",
            title: "Option A: Secure NGO Donor & Donation Tracking System API",
            desc: "Build a production REST API managing secure financial donation records, donor authentication, recurring gift schedules, and automated tax receipt generation.",
            pdfBrief: "assets/project-briefs/sem3_final_option_a.pdf"
          },
          {
            id: "s3_f_opt2",
            title: "Option B: Disaster Relief Asset Allocation & Supply Tracking API",
            desc: "Develop an enterprise API for international aid organizations tracking warehouse inventories, inter-facility transfers, and emergency distribution points.",
            pdfBrief: "assets/project-briefs/sem3_final_option_b.pdf"
          },
          {
            id: "s3_f_opt3",
            title: "Option C: Crisis Response Team Incident Management API",
            desc: "Create an API service managing emergency field incident reports, priority dispatch queues, multi-agency team assignments, and real-time status updates.",
            pdfBrief: "assets/project-briefs/sem3_final_option_c.pdf"
          }
        ],
        aiPrompt: "Act as an Enterprise Backend Architect and Cybersecurity Specialist. Given my skills in Node.js, Express, MongoDB/PostgreSQL, JWT Authentication, Bcrypt, Middleware, Express-Validator, and API Testing (Supertest/Mocha), produce 3 detailed production-grade backend project briefs for social impact projects. Detail security protocols, database schemas, authorization roles, and deployment configurations."
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
        challenge: "CORS & Proxy Challenge — Configure Axios instance with base URLs and interceptors.",
        video: "Devlog #19 — Connecting Frontend to Backend",
        what: "Connecting React frontend clients to Express REST APIs: Cross-Origin Resource Sharing (CORS) headers, Axios HTTP client setup, API base URL configuration, request/response interceptors, and handling loading states.",
        why: "Bridges client-side UI interfaces with server-side API systems in full-stack MERN engineering.",
        when: "~16 hours total time commitment.",
        where: "Full Stack Open (Part 3) & Axios Documentation.",
        how: "1. Wire a React application to consume endpoints from your Express backend API.\n2. Configure CORS middleware on Express and create an Axios API instance in React.\n3. Record Devlog #19 demonstrating end-to-end data flow.",
      },
      {
        w: 38,
        title: "Full Stack Auth & Session Persistence",
        resource: "Full Stack Open",
        type: "even",
        asn: "Authenticated Full Stack App Brief — Persistent Auth Flow",
        blog: "Guidebook #15 — Full Stack Auth Flows",
        what: "End-to-end full stack authentication: Storing JWTs securely in HTTP-only cookies or localStorage, attached authorization headers, protected React routes (<ProtectedRoute>), and automatic token refresh flows.",
        why: "Guarantees seamless user login sessions and protects private user pages across full-stack applications.",
        when: "~16 hours total time commitment.",
        where: "Full Stack Open (Part 4) & Auth0 Web Security Guides.",
        how: "1. Select an assignment brief and build a full-stack user authentication system.\n2. Implement protected React routes that redirect unauthenticated users to login.\n3. Publish Guidebook Chapter #15 on full-stack authentication flows.",
      },
      {
        w: 39,
        title: "TypeScript Basics for MERN",
        resource: "Full Stack Open",
        type: "odd",
        challenge: "TypeScript Typing Challenge — Type React props and Express endpoints.",
        video: "Devlog #20 — Refactoring JS to TypeScript",
        what: "Static typing with TypeScript: Primitive types, Interfaces, Type Aliases, Generics, typing React component props and state, and typing Express request/response handlers.",
        why: "TypeScript catches bugs during compile-time, improves IDE auto-completion, and enhances full-stack code maintainability.",
        when: "~16 hours total time commitment.",
        where: "TypeScript Official Handbook & Full Stack Open (Part 9).",
        how: "1. Refactor a React component library and Express API routes to TypeScript (.tsx / .ts).\n2. Define strict interfaces for user and resource models.\n3. Record Devlog #20 showcasing TypeScript compile-time error catching.",
      },
      {
        w: 40,
        title: "Deployment: Render, Vercel & AWS",
        resource: "AWS / Cloud",
        type: "even",
        asn: "Cloud Deployed MERN App Brief — Production Cloud Launch",
        blog: "Guidebook #16 — Zero to Production Deployment",
        what: "Full-stack cloud deployment: Deploying React/Next.js to Vercel, Node/Express to Render, MongoDB Atlas production setup, environment variable management (.env), and custom domain SSL configuration.",
        why: "Prepares your applications for live public usage with automated continuous deployment.",
        when: "~15 hours total time commitment.",
        where: "Vercel Docs, Render Docs & AWS Cloud Fundamentals.",
        how: "1. Select an assignment brief and deploy a full-stack MERN application to cloud hosts.\n2. Secure environment variables for database URIs and JWT secrets.\n3. Publish Guidebook Chapter #16 on cloud deployment workflows.",
      },
      {
        w: 41,
        title: "Security: OWASP Top 10 for MERN",
        resource: "Security",
        type: "odd",
        challenge: "OWASP Vulnerability Audit — Harden MERN application against attacks.",
        video: "Devlog #21 — Securing Full Stack Apps",
        what: "Full-stack application security: Securing Express with Helmet.js, rate-limiting with express-rate-limit, preventing NoSQL injection, sanitizing user HTML input (DOMPurify), and CORS restriction policies.",
        why: "Humanitarian web apps handle sensitive beneficiary data requiring enterprise-grade security.",
        when: "~15 hours total time commitment.",
        where: "OWASP Top 10 Web Application Security Risks & Helmet.js Docs.",
        how: "1. Perform a security audit on your MERN codebase using OWASP standards.\n2. Implement Helmet middleware, rate-limiting, and XSS sanitization.\n3. Record Devlog #21 demonstrating security hardening tools.",
      },
      {
        w: 42,
        title: "Midterm Project — Code Labs",
        resource: "MERN Midterm",
        type: "midterm",
        video: "Midterm Integrated App Tour",
        what: "Integrate your Semester 2 React frontend UI with your Semester 3 Node/Express backend API to build a unified full-stack MERN web application deployed to live production servers.",
        why: "Demonstrates complete MERN stack integration capabilities.",
        when: "~20 hours dedicated project sprint.",
        where: "Vercel (Frontend) + Render (Backend) + MongoDB Atlas.",
        how: "1. Choose one of the 3 MERN midterm integration options and download its PDF brief.\n2. Connect frontend components to backend API endpoints with full auth persistence.\n3. Deploy live production builds.\n4. Record a comprehensive video demonstration of full-stack data flow.",
        projectOptions: [
          {
            id: "s4_m_opt1",
            title: "Option A: Integrated Emergency Logistics & Relief Platform",
            desc: "Build a full-stack MERN application connecting real-time supply logistics tracking on the backend with dynamic React inventory maps and driver assignment interfaces.",
            pdfBrief: "assets/project-briefs/sem4_midterm_option_a.pdf"
          },
          {
            id: "s4_m_opt2",
            title: "Option B: Full Stack Community Shelter & Bed Allocation Network",
            desc: "Develop a MERN network allowing emergency shelters to report live bed availability via an authenticated admin dashboard consumed by public shelter finders.",
            pdfBrief: "assets/project-briefs/sem4_midterm_option_b.pdf"
          },
          {
            id: "s4_m_opt3",
            title: "Option C: Crisis Mental Health Support & Counselor Matching Web App",
            desc: "Create a full-stack platform matching individuals seeking urgent counseling with verified volunteer therapists, featuring secure intake forms and shift rosters.",
            pdfBrief: "assets/project-briefs/sem4_midterm_option_c.pdf"
          }
        ],
        aiPrompt: "Act as a Full Stack MERN Lead. Based on my technical skills connecting React, Node.js, Express, and MongoDB/PostgreSQL with Authentication and State Management, generate 3 full-stack humanitarian application briefs. Include system architecture diagrams, database schema designs, REST endpoints, UI view wireframes, and cloud deployment plans."
      },
      {
        w: 43,
        title: "Performance Optimization & Caching",
        resource: "Performance",
        type: "odd",
        challenge: "Lighthouse & DB Query Optimization — Achieve 90+ Lighthouse performance score.",
        video: "Devlog #22 — Optimizing MERN Performance",
        what: "Performance engineering: Database indexing in MongoDB/PostgreSQL, query projection, React code-splitting (React.lazy & Suspense), image optimization, and Lighthouse performance auditing.",
        why: "Fast loading times are critical for users in areas with slow or unreliable mobile internet infrastructure.",
        when: "~15 hours total time commitment.",
        where: "Web.dev Performance Guides & MongoDB Indexing Documentation.",
        how: "1. Audit a MERN web app with Google Lighthouse and optimize bundle sizes.\n2. Add database indexes to frequently queried fields.\n3. Record Devlog #22 showcasing before and after performance benchmarks.",
      },
      {
        w: 44,
        title: "Intro to Next.js & Server Components",
        resource: "Next.js Docs",
        type: "even",
        asn: "Next.js SSR Migration Brief — Server-Rendered Web Tool",
        blog: "Guidebook #17 — Why Next.js Matters",
        what: "Modern React framework with Next.js: App Router directory, Server Components vs Client Components, Server-Side Rendering (SSR), Static Site Generation (SSG), and API Routes.",
        why: "Next.js is the modern industry standard for production React applications, offering superior SEO, performance, and developer experience.",
        when: "~16 hours total time commitment.",
        where: "Nextjs.org/learn Interactive Course.",
        how: "1. Select an assignment brief and build a Next.js App Router application.\n2. Implement Server-Side Rendering for dynamic news feeds.\n3. Publish Guidebook Chapter #17 on Next.js server component benefits.",
      },
      {
        w: 45,
        title: "CI/CD Pipelines & GitHub Actions",
        resource: "DevOps Basics",
        type: "odd",
        challenge: "CI/CD Pipeline Setup Challenge — Configure automated GitHub Actions workflow.",
        video: "Devlog #23 — Automated Testing & Deployment",
        what: "DevOps & Continuous Integration / Continuous Deployment (CI/CD): GitHub Actions YAML workflow files, automated linting checks, automated test suites execution on Pull Requests, and auto-deployment to Vercel.",
        why: "CI/CD pipelines automate code quality verification and deployment reliability in engineering teams.",
        when: "~15 hours total time commitment.",
        where: "GitHub Actions Official Documentation & Vercel CI/CD Guides.",
        how: "1. Create a .github/workflows/main.yml pipeline for your repository.\n2. Automate test suite execution and build checks on every git push.\n3. Record Devlog #23 demonstrating a triggered GitHub Action run.",
      },
      {
        w: 46,
        title: "Capstone Proposal & Architecture Plan",
        resource: "Capstone Prep",
        type: "even",
        asn: "Capstone Proposal & Schema Brief — Architectural Blueprint",
        blog: "Guidebook #18 — Scoping Major Tech Projects",
        what: "Technical project scoping: Technical Specification Documents (TSD), Entity-Relationship Diagrams, system architecture design, wireframing user flows, dynamic API route mapping, and milestone timelines.",
        why: "Thorough architectural planning prevents scope creep and guarantees successful execution during complex capstone builds.",
        when: "~14 hours total time commitment.",
        where: "HCA Capstone Architecture Blueprint Guidelines.",
        how: "1. Select your Flagship Capstone project concept and download its PDF brief.\n2. Submit a comprehensive technical specification document containing ERDs, API routes, and wireframes.\n3. Publish Guidebook Chapter #18 on technical project scoping.",
      },
      {
        w: 47,
        title: "Capstone Sprint 1 — Backend & Core UI",
        resource: "Capstone",
        type: "odd",
        challenge: "Core API & Component Test Suite — Build core MERN models & views.",
        video: "Devlog #24 — Capstone Build Progress",
        what: "Executing Capstone Sprint 1: Setting up production database schemas, building complete backend authentication and resource APIs, unit testing endpoints, and crafting primary React UI layouts.",
        why: "Sprint 1 lays the functional backend and structural UI bedrock for your final capstone release.",
        when: "~20 hours dedicated project sprint.",
        where: "GitHub Repository & Local / Cloud Staging Servers.",
        how: "1. Implement all Capstone database schemas and backend REST controllers.\n2. Build core React view components and wire up authentication state.\n3. Record Devlog #24 showcasing Sprint 1 progress and live API responses.",
      },
      {
        w: 48,
        title: "Capstone Launch & Special Quest",
        resource: "Capstone Launch",
        type: "final",
        blog: "Guidebook #19 — My Journey to Full Stack Developer",
        specialQuest: "Special Quest Gate: Complete 1 free career push activity (Career Portfolio Review / Tech Jobs for Good Application / Apprenticeship Submission) to graduate and unlock your Full Stack Developer Title!",
        specialQuestLinks: [
          { name: "Tech Jobs for Good Network", url: "https://techjobsforgood.com/" },
          { name: "J.P. Morgan Code for Good", url: "https://www.jpmorganchase.com/impact/technology/code-for-good" },
          { name: "Humanitarian Response Tech Network", url: "https://www.humanitarianresponse.info/" }
        ],
        what: "Finalize, polish, unit-test, and deploy your Flagship Full-Stack MERN Capstone application to production servers, then clear your final Special Quest requirement to graduate!",
        why: "Unlocks your ultimate graduation and official 'Full Stack Developer' title certificate!",
        when: "~25 hours final sprint.",
        where: "Live Production Cloud Deployment & HCA LMS.",
        how: "1. Select your Flagship Capstone option and download its complete PDF brief.\n2. Complete application code, conduct security and performance audits, and launch live to the web.\n3. Fulfill 1 Special Quest activity from the approved resource links.\n4. Publish Guidebook Chapter #19 summarizing your full-stack journey.",
        projectOptions: [
          {
            id: "s4_f_opt1",
            title: "Option A: AidLink — Global Humanitarian Coordination Network",
            desc: "Build an enterprise full-stack MERN application connecting international NGOs, local field teams, and donors for real-time crisis tracking, resource allocation, and audited aid distribution.",
            pdfBrief: "assets/project-briefs/sem4_final_option_a.pdf"
          },
          {
            id: "s4_f_opt2",
            title: "Option B: CommuniCare — Community Health & Mutual Aid Portal",
            desc: "Develop a full-stack platform managing decentralized healthcare requests, volunteer medical shifts, medicine inventories, and patient intake workflows for local aid clinics.",
            pdfBrief: "assets/project-briefs/sem4_final_option_b.pdf"
          },
          {
            id: "s4_f_opt3",
            title: "Option C: GiveTrace — Transparent Grant & Resource Distribution Engine",
            desc: "Create a transparent MERN engine tracking charitable grant disbursements, spending proofs, community audit logs, and impact metrics with role-based access control.",
            pdfBrief: "assets/project-briefs/sem4_final_option_c.pdf"
          },
          {
            id: "s4_f_opt4",
            title: "Option D: Custom MERN Humanitarian Application of Choice",
            desc: "Scope, design, and build a custom full-stack MERN web application solving an approved social-impact problem of your own choice following HCA Capstone Guidelines.",
            pdfBrief: "assets/project-briefs/sem4_final_option_d.pdf"
          }
        ],
        aiPrompt: "Act as a Chief Technology Officer for Social Impact. Based on my full-stack MERN expertise (React, Node.js, Express, MongoDB/PostgreSQL, TypeScript, Next.js, OWASP Security, CI/CD, and Production Cloud Deployment), generate 3 comprehensive capstone project briefs. Include full system design, database schemas, frontend view wireframes, API routes, security measures, performance goals, and deployment workflow."
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
    desc: `Primary Resource: ${wObj.resource}. Complete assigned documentation, video modules, and syntax exercises.`,
  });

  if (wObj.type === "odd") {
    list.push({
      tag: "TECHNICAL CHALLENGE",
      title: `Challenge: ${wObj.challenge}`,
      desc: "Complete hands-on coding exercises, layout puzzles, or algorithmic katas in your local dev environment.",
    });
  } else if (wObj.type === "even") {
    list.push({
      tag: "ASSIGNMENT BRIEF",
      title: `Assignment: ${wObj.asn}`,
      desc: "Build and commit a functional real-world humanitarian application brief to your public GitHub repository.",
    });
  } else if (wObj.type === "midterm") {
    list.push({
      tag: "MIDTERM PROJECT SPRINT",
      title: `Midterm Project Sprint: ${wObj.title}`,
      desc: "Synthesize all concepts learned so far into a complete deployed project from the available project options.",
    });
  } else if (wObj.type === "final") {
    list.push({
      tag: "FLAGSHIP CAPSTONE SPRINT",
      title: `Capstone Final Sprint: ${wObj.title}`,
      desc: "Build, polish, test, and launch your major milestone capstone application live to the web.",
    });
  }

  if (wObj.video) {
    list.push({
      tag: "DEVLOG / PROOF OF WORK",
      title: `Record & Publish: ${wObj.video}`,
      desc: "Ship a 2-minute devlog video demoing what you built, explaining key code snippets, and sharing your journey.",
    });
  }

  if (wObj.blog) {
    list.push({
      tag: "TECHNICAL WRITING / BLOG",
      title: `Publish Article: ${wObj.blog}`,
      desc: "Write and publish a technical blog post or guidebook chapter documenting your technical learnings.",
    });
  }

  if (wObj.specialQuest) {
    list.push({
      tag: "SPECIAL QUEST",
      title: `${wObj.specialQuest}`,
      desc: "Must fulfill 1 free career/community action item from verified sources to clear the semester gate.",
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

let state = JSON.parse(localStorage.getItem("HCA_LMS_STATE_V3")) || DEFAULT_STATE;
if (!state.startDate) state.startDate = new Date().toISOString();
if (!state.user.shown70Popups) state.user.shown70Popups = [];
if (!state.user.shown100Popups) state.user.shown100Popups = [];
if (!state.user.name) state.user.name = "Developer";

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
  const hoursLeft = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

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

  const currentSemNum = Math.ceil(weekNum / 12);
  const isFirstWeekOfSemester = (weekNum - 1) % 12 === 0;

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

  const currentSemNum = Math.min(4, Math.ceil(state.activeWeekSelected / 12));
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
  const currentSemNum = Math.ceil(state.activeWeekSelected / 12);
  const semData = ROADMAP.find((s) => s.sem === currentSemNum);
  document.getElementById("learn-sem-title").innerText = `Semester ${semData.sem} – ${semData.title}`;

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
    <div class="drawer-section-title"><i class="fa-solid fa-lightbulb"></i> WHY (Career Relevance & Impact)</div>
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
    <div class="drawer-section-title"><i class="fa-solid fa-location-dot"></i> WHERE (Learning Material & Resources)</div>
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

  // PROJECT OPTIONS & PDF BRIEFS & AI PROMPT (For Midterm & Final weeks)
  if (wObj.projectOptions && wObj.projectOptions.length > 0) {
    const projSec = document.createElement("div");
    projSec.className = "drawer-section";
    projSec.style.borderColor = "var(--gold)";

    let optionsHTML = `
      <div class="drawer-section-title"><i class="fa-solid fa-diagram-project"></i> PROJECT BRIEFS & OPTIONS (Choose 1)</div>
      <p style="font-size:0.85rem; color:var(--ink-dim); margin-bottom:1rem;">
        Select one of the following 3 project options. Click to download its individual .pdf brief:
      </p>
      <div style="display:flex; flex-direction:column; gap:0.75rem;">
    `;

    wObj.projectOptions.forEach((opt) => {
      optionsHTML += `
        <div style="background:var(--surface); border:1px solid var(--line); padding:1rem; border-radius:10px;">
          <h4 style="color:var(--plum); font-size:0.95rem;">${opt.title}</h4>
          <p style="font-size:0.82rem; color:var(--ink-dim); margin:0.3rem 0 0.6rem 0;">${opt.desc}</p>
          <a href="${opt.pdfBrief}" download target="_blank" class="btn-secondary" style="font-size:0.8rem; padding:0.4rem 0.8rem;">
            <i class="fa-solid fa-file-pdf" style="color:var(--rust);"></i> Download PDF Brief (${opt.title.split(':')[0]})
          </a>
        </div>
      `;
    });

    optionsHTML += `</div>`;

    if (wObj.aiPrompt) {
      optionsHTML += `
        <div style="margin-top:1.25rem; padding-top:1rem; border-top:1px dashed var(--line);">
          <div style="font-size:0.8rem; font-weight:800; color:var(--gold); margin-bottom:0.4rem;">
            <i class="fa-solid fa-robot"></i> AI PROJECT IDEA GENERATOR PROMPT
          </div>
          <p style="font-size:0.8rem; color:var(--ink-dim); margin-bottom:0.5rem;">
            Copy this prompt into your AI chatbot (ChatGPT, Claude, etc.) to generate custom similar project briefs matching your skill set and humanitarian focus:
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

  // SPECIAL QUEST SECTION (Renamed from Major Requirement)
  if (wObj.specialQuest) {
    const sqSec = document.createElement("div");
    sqSec.className = "drawer-section";
    sqSec.style.borderColor = "var(--sage)";
    sqSec.innerHTML = `
      <div class="drawer-section-title" style="color:var(--sage);"><i class="fa-solid fa-star"></i> SPECIAL QUEST (Semester Gate)</div>
      <p style="font-size:0.9rem; font-weight:700; color:var(--ink);">${wObj.specialQuest}</p>
      <p style="font-size:0.82rem; color:var(--ink-dim); margin-top:0.4rem;">
        To clear this special quest gate, select and complete at least 1 action item from these verified community/career resources:
      </p>
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
          <span style="font-size:0.7rem; font-weight:800; color:var(--gold); uppercase">${i + 1}. ${q.tag}</span>
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

/* SPOTIFY-STYLE REAL-TIME ACHIEVEMENT CARD GENERATOR */
function generateAchievementCard() {
  const canvas = document.getElementById("card-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Background Fill
  ctx.fillStyle = "#110B15";
  ctx.fillRect(0, 0, 2000, 2000);

  // Gradient Overlay
  const grad = ctx.createLinearGradient(0, 0, 2000, 2000);
  grad.addColorStop(0, "#4A0C37");
  grad.addColorStop(0.5, "#1C1322");
  grad.addColorStop(1, "#110B15");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 2000, 2000);

  // Header Text
  ctx.fillStyle = "#F59E0B";
  ctx.font = "800 48px 'Space Grotesk', sans-serif";
  ctx.fillText("HUMANITARIAN CODE ACADEMY", 120, 160);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "800 92px 'Space Grotesk', sans-serif";
  ctx.fillText("LEARNING ACHIEVEMENT", 120, 270);

  // User Card Header Box
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
  ctx.fillText(`Rank: ${getCurrentTitle()}`, 360, 520);

  // Grid Stats
  const overall = calculateOverallProgress();
  const portfolioCount = countCompletedProjects();
  const shippedCount = countShippedContent();

  const stats = [
    { label: "OVERALL PROGRESS", val: `${overall.pct}%` },
    { label: "COMPLETED QUESTS", val: `${overall.completed}/${overall.total}` },
    { label: "PORTFOLIO PROJECTS", val: `${portfolioCount}/8` },
    { label: "CONTENT SHIPPED", val: `${shippedCount}` },
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

  // Footer Branding Stamp
  ctx.fillStyle = "#281B30";
  ctx.beginPath();
  ctx.roundRect(120, 1460, 1760, 360, 32);
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "800 52px 'Space Grotesk', sans-serif";
  ctx.fillText("VERIFIED HUMANITARIAN CODE ACADEMY RECORD", 180, 1560);

  ctx.fillStyle = "#BBA9BC";
  ctx.font = "400 36px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Code With Purpose — Empowering Developers for Social Impact", 180, 1640);
  ctx.fillText(
    `Generated on: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`,
    180,
    1720,
  );

  // Trigger File Download
  const link = document.createElement("a");
  link.download = `HCA_Achievement_Card_${state.user.name.replace(/\s+/g, "_")}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

/* CONGRATS POPUP MODAL */
function triggerCongratsModal(semNum, pct) {
  const semData = ROADMAP.find((s) => s.sem === semNum);
  const title = pct === 70 ? "Title Unlocked!" : "Semester Complete!";
  const msg =
    pct === 70
      ? `Congratulations! You reached 70% completion in Semester ${semNum} (${semData.title}) and earned the official title "${semData.unlockTitle}"!`
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
