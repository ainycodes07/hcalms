/* ==========================================================================
       ROADMAP DATA STRUCTURE (DEEP SEMESTER CONTENT - APPLIED CS & AI ENGINEERING)
       ========================================================================== */
const SEMESTER_DETAILS = {
  1: {
    title: "Semester 1: Core Computer Science & Python Foundations",
    duration: "Weeks 1 – 12 · ~15 Hrs/Week",
    holds:
      "Master computational thinking, Python 3 programming paradigms, asymptotic analysis (Big O notation), data structures (lists, hash maps, trees, graphs), sorting algorithms, and fundamental computer systems architecture.",
    why: "Every high-performance software and machine learning model relies on underlying computer science fundamentals. Mastering algorithmic efficiency and data structures ensures your solutions scale smoothly.",
    how: "Through weekly coding quests, solving algorithmic challenges on LeetCode/HackerRank, building command-line utilities, and maintaining clean version control via Git and GitHub.",
    outcomes: [
      "Algorithmic Efficiency Benchmark Suite (Python)",
      "Command-Line Resource Management Utility (Python + Data Structures)",
      "Semester 1 Capstone: Comprehensive Algorithmic Portfolio Deployed on GitHub",
    ],
    mindset:
      "Focus deeply on problem-solving mechanics! Do not skip Big O analysis. Writing clean, readable code with proper docstrings is just as important as getting the correct output.",
  },
  2: {
    title: "Semester 2: Data Science & Predictive Machine Learning",
    duration: "Weeks 13 – 24 · ~16 Hrs/Week",
    holds:
      "Deep dive into statistical inference, exploratory data analysis with Pandas and NumPy, data visualization with Seaborn/Matplotlib, and supervised/unsupervised machine learning using Scikit-Learn.",
    why: "Data is the lifeblood of artificial intelligence. Learning how to clean, process, and extract statistical patterns from raw datasets allows you to build reliable predictive models.",
    how: "Process real-world messy datasets, engineer meaningful features, train regression and classification models, and evaluate performance using cross-validation and ROC-AUC metrics.",
    outcomes: [
      "Epidemic Trend & Resource Prediction Model (Scikit-Learn + Pandas)",
      "Community Vulnerability Data Pipeline & Clustering Dashboard",
      "Semester 2 Capstone: Fully Evaluated Predictive ML Pipeline on GitHub",
    ],
    mindset:
      "Garbage in means garbage out. Spend adequate time understanding data distributions, handling missing values, and avoiding data leakage during feature engineering.",
  },
  3: {
    title: "Semester 3: Deep Learning, Neural Networks & Computer Vision",
    duration: "Weeks 25 – 36 · ~18 Hrs/Week",
    holds:
      "Neural network foundations, backpropagation, activation functions, PyTorch framework mastery, Convolutional Neural Networks (CNNs) for computer vision, and Recurrent Neural Networks (RNNs/LSTMs) for sequential data.",
    why: "Modern artificial intelligence relies on deep neural networks to handle complex unstructured data like images, audio, and text streams.",
    how: "Build custom neural network architectures from scratch using PyTorch tensors, train image classifiers on custom datasets, and optimize model weights using GPU acceleration.",
    outcomes: [
      "Disaster Relief Satellite Image Classifier (PyTorch + CNNs)",
      "Sequential Emergency Time-Series Forecaster (LSTM Models)",
      "Semester 3 Capstone: Production Deep Learning Model Weights & Weights & Biases Logging",
    ],
    mindset:
      "Deep learning requires patience. Monitor loss curves carefully, understand overfitting indicators, and learn how to debug tensor shape mismatches efficiently.",
  },
  4: {
    title: "Semester 4: Large Language Models (LLMs) & AI Systems Engineering",
    duration: "Weeks 37 – 48 · ~20 Hrs/Week",
    holds:
      "Transformer architectures, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) pipelines, vector databases (Chroma/Pinecone), model fine-tuning (LoRA/QLoRA), FastAPI microservices, and deploying AI solutions to the cloud.",
    why: "Combines every skill acquired over 36 weeks into enterprise-grade AI engineering. Building production-ready LLM apps and serving models via secure APIs represent the peak of modern tech employment.",
    how: "Architect full-stack AI applications, integrate local open-source LLMs with LangChain, containerize models using Docker, and launch robust endpoints live via cloud hosting platforms.",
    outcomes: [
      "Multilingual Crisis Response RAG Assistant (LangChain + Vector DB)",
      "Fine-Tuned Open Source Model with LoRA & Hugging Face",
      "Flagship Capstone: Deployed Full-Stack Humanitarian AI Application & Microservice",
    ],
    mindset:
      "Treat this final semester like an elite AI research lab. Focus heavily on security alignment, response hallucination mitigation, and API latency optimization.",
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
    "Welcome to Humanitarian Code Academy! The LMS system uses local browser storage to save your daily algorithm quests, machine learning devlogs, and milestone badges. Choose Semester 1 in the curriculum to start your first quest!",
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
      "Humanitarian Code Academy provides free self-learning roadmaps and tracking tools. HCA is an unaccredited independent open platform and does not confer legal college degrees. Users are responsible for verifying their code builds and AI models independently on GitHub.";
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
