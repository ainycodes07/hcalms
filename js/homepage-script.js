/* ==========================================================================
       ROADMAP DATA STRUCTURE (DEEP SEMESTER CONTENT)
       ========================================================================== */
const SEMESTER_DETAILS = {
  1: {
    title: "Semester 1: Frontend Architecture & Accessible UI",
    duration: "Weeks 1 – 12 · ~15 Hrs/Week",
    holds:
      "Master structural web standards using semantic HTML5, CSS3 layout systems (Grid & Flexbox), vanilla JavaScript DOM manipulation, terminal Git workflows, UX heuristics, and Web Accessibility (WCAG 2.1).",
    why: "Every web application rests on standard DOM architecture. Mastering layout logic and raw JavaScript before adopting frameworks prevents bad habits and ensures your code works for all users including those with disabilities.",
    how: "Through weekly coding quests, hands-on building without template generators, terminal Git commits, and conducting manual color-contrast and screen-reader accessibility audits.",
    outcomes: [
      "Disaster Prep Resource Portal (HTML5/CSS3 Grid)",
      "Accessible NGO Volunteer Sign-up Suite (Vanilla JS DOM & WCAG 2.1)",
      "Semester 1 Capstone: Deployed Interactive Web Utility on GitHub Pages",
    ],
    mindset:
      "Focus on fundamentals! Do not rush into React yet. Ensure you can build fluid, responsive layouts using raw CSS Flexbox and Grid without relying on bootstrap frameworks.",
  },
  2: {
    title: "Semester 2: Modern React & Application State",
    duration: "Weeks 13 – 24 · ~16 Hrs/Week",
    holds:
      "Deep dive into Modern ES6+ JavaScript, Async Promises, Figma UI design translation, React components, props, hooks (useState, useEffect), React Router v6, Context API, and Redux Toolkit.",
    why: "React powers millions of modern web applications. Learning state management and modular UI component design allows you to build scalable, reactive web apps.",
    how: "Translate Figma prototypes into pixel-perfect React components, connect public REST APIs via Fetch/Axios, and build global state management stores using Redux Toolkit.",
    outcomes: [
      "Humanitarian Supply Locator App (React + Public REST API)",
      "Interactive Aid Logistics Dashboard (React Router + Context API)",
      "Semester 2 Capstone: Fully Stateful React Web App with Redux",
    ],
    mindset:
      "Understand the component lifecycle and state flow. Master Javascript array methods (map, filter, reduce) as they form the backbone of React UI rendering.",
  },
  3: {
    title: "Semester 3: Backend Engineering & API Systems",
    duration: "Weeks 25 – 36 · ~18 Hrs/Week",
    holds:
      "Server-side development with Node.js and Express.js, relational database modeling with PostgreSQL/SQL, document databases with MongoDB/Mongoose, JWT authentication, and security middleware.",
    why: "A frontend without a backend is just a facade. Real applications require data persistence, secure user authentication, role management, and scalable server architecture.",
    how: "Design schema models, write relational SQL queries and NoSQL document pipelines, test endpoints using Postman/Supertest, and secure routes against vulnerabilities.",
    outcomes: [
      "Authenticated Crisis Incident REST API (Node.js + Express + JWT)",
      "Relational Aid Database System (PostgreSQL + SQL Migrations)",
      "Semester 3 Capstone: Production Backend Service Deployed on Render",
    ],
    mindset:
      "Backend development demands strict attention to edge cases and data validation. Always sanitize user inputs and test error responses using tools like Postman.",
  },
  4: {
    title: "Semester 4: Full Stack MERN, TypeScript & Capstone",
    duration: "Weeks 37 – 48 · ~20 Hrs/Week",
    holds:
      "Integrating React frontend with Express backend, adopting TypeScript for end-to-end type safety, Next.js App Router (SSR/SSG), OWASP security hardening, CI/CD pipelines, and launching your Flagship Capstone.",
    why: "Combines every skill acquired over 36 weeks into enterprise-grade full-stack proficiency. TypeScript and Next.js represent the modern industry standard for production web software.",
    how: "Architect a full MERN application written in TypeScript, setup GitHub Actions CI/CD workflows, perform OWASP security audits, and launch your project live on cloud servers.",
    outcomes: [
      "Type-Safe MERN Application with TypeScript & Tailwind",
      "Next.js Server-Rendered Social Impact Portal",
      "Flagship Capstone: Deployed Full Stack Humanitarian Web Platform",
    ],
    mindset:
      "Treat this final semester like a software engineering job. Write clean documentation, maintain clean Git commits, and focus on production stability.",
  },
};

/* ==========================================================================
       THEME TOGGLE & INTERACTION LOGIC
       ========================================================================== */
function toggleTheme() {
  const htmlEl = document.documentElement;
  const currentTheme = htmlEl.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  htmlEl.setAttribute("data-theme", newTheme);
  document.getElementById("theme-icon").className =
    newTheme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  document.getElementById("theme-text").innerText =
    newTheme === "dark" ? "Light" : "Dark";
}

/* FULLSCREEN MOBILE MENU */
function openMobileMenu() {
  document.getElementById("mobile-nav").classList.add("active");
}

function closeMobileMenu() {
  document.getElementById("mobile-nav").classList.remove("active");
}

/* FAQ ACCORDION */
function toggleFaq(element) {
  const parent = element.parentElement;
  const isOpen = parent.classList.contains("open");

  document
    .querySelectorAll(".faq-item")
    .forEach((item) => item.classList.remove("open"));

  if (!isOpen) {
    parent.classList.add("open");
  }
}

/* SEMESTER TAB SWITCHER */
function switchSemester(semNum) {
  document.querySelectorAll(".sem-tab-btn").forEach((btn, idx) => {
    if (idx + 1 === semNum) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  const data = SEMESTER_DETAILS[semNum];
  const displayArea = document.getElementById("semester-display-area");

  displayArea.innerHTML = `
        <div class="semester-detail-card">
          <div class="sem-header">
            <div class="sem-title-box">
              <span class="section-tag" style="margin-bottom:0.4rem;">Semester 0${semNum} Overview</span>
              <h3 class="brand-font">${data.title}</h3>
            </div>
            <span class="sem-duration-tag"><i class="fa-solid fa-clock"></i> ${data.duration}</span>
          </div>

          <div class="sem-sections-grid">
            <div class="sem-subcard">
              <h4><i class="fa-solid fa-compass"></i> What This Semester Holds</h4>
              <p>${data.holds}</p>
            </div>

            <div class="sem-subcard">
              <h4><i class="fa-solid fa-lightbulb"></i> Why We Learn This</h4>
              <p>${data.why}</p>
            </div>

            <div class="sem-subcard">
              <h4><i class="fa-solid fa-gears"></i> How We Plan To Do It</h4>
              <p>${data.how}</p>
            </div>

            <div class="sem-subcard">
              <h4><i class="fa-solid fa-trophy"></i> Semester Outcomes & Deliverables</h4>
              <ul>
                ${data.outcomes.map((item) => `<li><i class="fa-solid fa-circle-check" style="color:var(--plum);"></i> ${item}</li>`).join("")}
              </ul>
            </div>
          </div>

          <div class="notice-box">
            <strong><i class="fa-solid fa-circle-info" style="color:var(--gold);"></i> Mindset & Advice Before Starting:</strong>
            ${data.mindset}
          </div>
        </div>
      `;
}

/* LMS DEMO LAUNCH ALERT */
function launchLmsDemo() {
  alert(
    "Welcome to Humanitarian Code Academy! The LMS system uses local browser storage to save your daily coding quests, devlog entries, and milestone badges. Choose Semester 1 in the curriculum to start your first quest!",
  );
}

/* MODALS LOGIC */
function openModal(type) {
  const modal = document.getElementById("info-modal");
  const title = document.getElementById("modal-title");
  const body = document.getElementById("modal-body");

  if (type === "privacy") {
    title.innerText = "Privacy & Data Policy";
    body.innerHTML =
      "Humanitarian Code Academy (HCA) respects your privacy. Because our LMS is a privacy-first platform, your progress data and quest completions are stored locally in your browser. We do not track, collect, or sell personal identifying data to third-party advertisers.";
  } else if (type === "accessibility") {
    title.innerText = "Accessibility Statement";
    body.innerHTML =
      "HCA is dedicated to web accessibility. We design our platforms to comply with WCAG 2.1 Level AA standards, ensuring high contrast ratios, semantic HTML structure, and full keyboard navigation support for screen reader users.";
  } else if (type === "terms") {
    title.innerText = "Terms of Service";
    body.innerHTML =
      "Humanitarian Code Academy provides free self-learning roadmaps and tracking tools. HCA is an unaccredited independent open platform and does not confer legal college degrees. Users are responsible for verifying their code builds independently on GitHub.";
  }

  modal.classList.add("open");
}

function closeModal() {
  document.getElementById("info-modal").classList.remove("open");
}

/* INITIALIZATION */
window.addEventListener("DOMContentLoaded", () => {
  switchSemester(1);
});
