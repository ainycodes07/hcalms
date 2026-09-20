/* ==========================================================================
   HUMANITARIAN CODE ACADEMY LMS - MAIN ENGINE
   ========================================================================== */

const DEFAULT_STATE = {
  user: {
    name: "Developer",
    title: "Aspiring Developer",
    rankingsTitle: "Aspiring Developer",
    socialLinks: { github: "", linkedin: "", twitter: "", portfolio: "" }
  },
  settings: {
    theme: "light",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "16px",
    appScale: "1.0",
    progressCardConfig: { showSemProg: true, showOverallProg: true, showChapterProg: true }
  },
  attendance: {}, // "YYYY-MM-DD": true/false
  totalStudyTimeSeconds: 0,
  semesters: [
    {
      id: 1,
      title: "CS & Web Foundations",
      description: "Core Web Architecture, HTML5, CSS3, & Modern JS",
      weeks: [
        {
          id: 1,
          title: "HTML5 & CSS3 Semantics",
          quests: [
            { id: 101, title: "Study Semantic Elements & CSS Flexbox", type: "study", completed: false },
            { id: 102, title: "Build Responsive Personal Bio Page", type: "lab", completed: false, link: "" }
          ]
        }
      ]
    }
  ],
  courseMaterials: [
    { id: 1, semesterId: 1, title: "HTML and CSS: Design and Build Websites", author: "Jon Duckett", totalChapters: 12, completedChapters: 0, type: "Book" }
  ],
  schedule: [
    { id: 1, type: "daily", time: "09:00 - 10:30", title: "Core Study Block", description: "Read book chapters & complete quests" }
  ],
  portfolioSubmissions: {
    codelabs: [],
    projects: []
  },
  notes: [],
  activeNoteId: null,
  timers: [
    { id: 1, name: "Study", durationMinutes: 25, remainingSeconds: 1500, isRunning: false, category: "Study" }
  ]
};

let state = JSON.parse(localStorage.getItem("HCA_LMS_FULL_STATE_V2")) || DEFAULT_STATE;
let timerInterval = null;
let currentCalDate = new Date();

function saveState() {
  localStorage.setItem("HCA_LMS_FULL_STATE_V2", JSON.stringify(state));
  renderApp();
}

/* INITIALIZATION */
document.addEventListener("DOMContentLoaded", () => {
  applyAppSettings();
  startTimerTicker();
  renderApp();
  setTimeout(() => {
    const l = document.getElementById("loader");
    if (l) l.classList.add("hidden");
  }, 300);
});

/* APP SETTINGS APPLICATOR */
function applyAppSettings() {
  document.documentElement.setAttribute("data-theme", state.settings.theme);
  document.documentElement.style.setProperty("--font-main", state.settings.fontFamily);
  document.documentElement.style.setProperty("--font-base-size", state.settings.fontSize);
  document.documentElement.style.setProperty("--app-scale", state.settings.appScale);
}

/* NAVIGATION */
function switchTab(tabId) {
  document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
  const activeNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  if (activeNav) activeNav.classList.add("active");

  document.querySelectorAll(".tab-pane").forEach(el => el.classList.remove("active"));
  const target = document.getElementById(`tab-${tabId}`);
  if (target) target.classList.add("active");

  const titles = {
    dashboard: ["Dashboard", "Track your study time, attendance consistency, and course progression"],
    attendance: ["Attendance Log", "Mark/unmark daily study consistency"],
    quests: ["Study Modules & Quests", "CRUD your semesters, weeks, and study goals"],
    mycourse: ["My Course Materials", "Track reading lists, books, and chapter progress"],
    schedule: ["Schedule Manager", "Configure your daily and weekly routines"],
    portfolio: ["Portfolio & Submissions", "Review your earned skills, code labs, and projects"],
    notepad: ["Study Notepad", "Rich text study notes with sticky toolbar and tagging"],
    timers: ["Study Timers Stack", "Run and stack customizable study timers"],
    settings: ["Settings", "Customize themes, fonts, interface scale, and reset progress"]
  };

  if (titles[tabId]) {
    document.getElementById("page-heading").innerText = titles[tabId][0];
    document.getElementById("page-subheading").innerText = titles[tabId][1];
  }
}

document.querySelectorAll(".nav-item button").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const tab = e.currentTarget.parentElement.getAttribute("data-tab");
    switchTab(tab);
  });
});

/* MAIN RENDER ROUTINE */
function renderApp() {
  applyAppSettings();
  updateUserRankings();

  document.getElementById("sidebar-user-name").innerText = state.user.name;
  document.getElementById("dash-user-name").innerText = state.user.name;
  document.getElementById("sidebar-avatar-initial").innerText = state.user.name.charAt(0).toUpperCase();

  renderDashboard();
  renderAttendanceCalendar();
  renderQuestsAndModules();
  renderMyCourse();
  renderSchedule();
  renderPortfolio();
  renderNotesList();
  renderTimers();
}

/* USER RANKINGS CALCULATION */
function updateUserRankings() {
  let completedQuests = 0;
  state.semesters.forEach(s => s.weeks.forEach(w => w.quests.forEach(q => { if (q.completed) completedQuests++; })));

  let rank = "Aspiring Developer";
  if (completedQuests >= 20) rank = "Master AI & Full-Stack Engineer";
  else if (completedQuests >= 10) rank = "Full-Stack Developer";
  else if (completedQuests >= 5) rank = "Junior Frontend Developer";

  state.user.rankingsTitle = rank;
  document.getElementById("sidebar-user-title").innerText = rank;
  document.getElementById("dash-user-title").innerText = rank;
  document.getElementById("portfolio-title-display").innerText = rank;
}

/* 1. DASHBOARD */
function renderDashboard() {
  // Study Time Display
  const hrs = Math.floor(state.totalStudyTimeSeconds / 3600);
  const mins = Math.floor((state.totalStudyTimeSeconds % 3600) / 60);
  const secs = state.totalStudyTimeSeconds % 60;
  document.getElementById("dash-total-study-time").innerText = `${hrs}h ${mins}m ${secs}s`;

  // Days Studied Count
  const daysStudied = Object.values(state.attendance).filter(val => val === true).length;
  document.getElementById("dash-days-studied").innerText = `${daysStudied} Days`;

  // Completed Quests
  let completedCount = 0;
  let totalQuests = 0;
  state.semesters.forEach(s => s.weeks.forEach(w => w.quests.forEach(q => {
    totalQuests++;
    if (q.completed) completedCount++;
  })));
  document.getElementById("dash-quests-completed").innerText = `${completedCount} / ${totalQuests}`;

  // Attendance Quick Widget
  const todayStr = new Date().toISOString().split('T')[0];
  const todayMarked = state.attendance[todayStr];
  const quickWidget = document.getElementById("dash-attendance-quick-widget");
  quickWidget.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
      <div>Status for Today (${todayStr}): <strong>${todayMarked === true ? 'Studied (Present)' : todayMarked === false ? 'Not Studied (Absent)' : 'Unmarked'}</strong></div>
      <div style="display:flex; gap:0.5rem;">
        <button class="btn-primary" style="background:var(--sage);" onclick="toggleAttendanceDay('${todayStr}', true)">Mark Studied</button>
        <button class="btn-secondary" style="color:var(--rust); border-color:var(--rust);" onclick="toggleAttendanceDay('${todayStr}', false)">Mark Absent</button>
      </div>
    </div>
  `;

  // Progress Card Body
  const cfg = state.settings.progressCardConfig;
  const pBody = document.getElementById("progress-card-body");
  pBody.innerHTML = "";

  if (cfg.showSemProg) {
    const semPct = totalQuests > 0 ? Math.round((completedCount / totalQuests) * 100) : 0;
    pBody.innerHTML += `
      <div style="margin-bottom:0.75rem;">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:600;"><span>Semester Quests Progress</span><span>${semPct}%</span></div>
        <div class="progress-bar-container"><div class="progress-bar-fill" style="width:${semPct}%;"></div></div>
      </div>
    `;
  }

  if (cfg.showChapterProg) {
    let totCh = 0, compCh = 0;
    state.courseMaterials.forEach(m => { totCh += m.totalChapters; compCh += m.completedChapters; });
    const chPct = totCh > 0 ? Math.round((compCh / totCh) * 100) : 0;
    pBody.innerHTML += `
      <div>
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:600;"><span>Course Material Reading Progress</span><span>${chPct}% (${compCh}/${totCh} chapters)</span></div>
        <div class="progress-bar-container"><div class="progress-bar-fill" style="background:var(--sage); width:${chPct}%;"></div></div>
      </div>
    `;
  }
}

/* 2. ATTENDANCE */
function renderAttendanceCalendar() {
  const year = currentCalDate.getFullYear();
  const month = currentCalDate.getMonth();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById("attendance-month-year").innerText = `${monthNames[month]} ${year}`;

  const grid = document.getElementById("attendance-calendar-grid");
  grid.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    grid.innerHTML += `<div style="background:transparent;"></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const status = state.attendance[dateStr];
    const statusClass = status === true ? 'present' : status === false ? 'absent' : '';

    const cell = document.createElement("div");
    cell.className = `calendar-day-cell ${statusClass}`;
    cell.innerHTML = `
      <span style="font-weight:700; font-size:0.85rem;">${day}</span>
      <span style="font-size:0.7rem;">${status === true ? 'Present' : status === false ? 'Absent' : ''}</span>
    `;
    cell.onclick = () => {
      const nextStatus = status === true ? false : status === false ? undefined : true;
      toggleAttendanceDay(dateStr, nextStatus);
    };
    grid.appendChild(cell);
  }
}

function changeAttendanceMonth(delta) {
  currentCalDate.setMonth(currentCalDate.getMonth() + delta);
  renderAttendanceCalendar();
}

function toggleAttendanceDay(dateStr, status) {
  if (status === undefined) delete state.attendance[dateStr];
  else state.attendance[dateStr] = status;
  saveState();
}

/* 3. QUESTS & MODULES CRUD */
function renderQuestsAndModules() {
  const bar = document.getElementById("semester-tabs-bar");
  bar.innerHTML = "";

  state.semesters.forEach(s => {
    const btn = document.createElement("button");
    btn.className = `btn-secondary`;
    btn.innerText = s.title;
    btn.onclick = () => renderSemesterDetails(s.id);
    bar.appendChild(btn);
  });

  if (state.semesters.length > 0) renderSemesterDetails(state.semesters[0].id);
}

function renderSemesterDetails(semId) {
  const sem = state.semesters.find(s => s.id === semId);
  if (!sem) return;

  const header = document.getElementById("semester-detail-header");
  header.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <h3 class="brand-font">${sem.title}</h3>
        <p style="font-size:0.85rem; color:var(--ink-dim);">${sem.description}</p>
      </div>
      <div>
        <button class="btn-secondary" onclick="deleteSemester(${sem.id})" style="color:var(--rust);"><i class="fa-solid fa-trash"></i> Delete Semester</button>
      </div>
    </div>
  `;

  const weeksContainer = document.getElementById("weeks-accordion-container");
  weeksContainer.innerHTML = "";

  sem.weeks.forEach(w => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.background = "var(--surface2)";

    let questHtml = w.quests.map(q => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:0.4rem 0; border-bottom:1px solid var(--line);">
        <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem;">
          <input type="checkbox" ${q.completed ? 'checked' : ''} onchange="toggleQuestCompleted(${sem.id}, ${w.id}, ${q.id})">
          <span style="${q.completed ? 'text-decoration:line-through; color:var(--ink-dim);' : ''}">${q.title} (${q.type})</span>
        </label>
        <button class="btn-secondary" onclick="deleteQuest(${sem.id}, ${w.id}, ${q.id})" style="padding:0.2rem 0.4rem; font-size:0.75rem; color:var(--rust);"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `).join("");

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
        <h4>${w.title}</h4>
        <div>
          <button class="btn-primary" onclick="openAddQuestModal(${sem.id}, ${w.id})" style="padding:0.3rem 0.6rem; font-size:0.75rem;"><i class="fa-solid fa-plus"></i> Add Quest</button>
        </div>
      </div>
      <div>${questHtml || '<p style="font-size:0.8rem; color:var(--ink-dim);">No quests in this week.</p>'}</div>
    `;
    weeksContainer.appendChild(card);
  });
}

function toggleQuestCompleted(semId, weekId, questId) {
  const sem = state.semesters.find(s => s.id === semId);
  const week = sem.weeks.find(w => w.id === weekId);
  const quest = week.quests.find(q => q.id === questId);
  if (quest) quest.completed = !quest.completed;
  saveState();
}

function openAddSemesterModal() {
  const title = prompt("Enter Semester Title:");
  if (title) {
    const desc = prompt("Enter Semester Description:");
    state.semesters.push({ id: Date.now(), title, description: desc || "", weeks: [] });
    saveState();
  }
}

function deleteSemester(semId) {
  if (confirm("Are you sure you want to delete this semester?")) {
    state.semesters = state.semesters.filter(s => s.id !== semId);
    saveState();
  }
}

function openAddWeekModal() {
  if (state.semesters.length === 0) return alert("Please create a semester first!");
  const title = prompt("Enter Week Title (e.g. Week 1: Flexbox Layouts):");
  if (title) {
    state.semesters[0].weeks.push({ id: Date.now(), title, quests: [] });
    saveState();
  }
}

function openAddQuestModal(semId, weekId) {
  const title = prompt("Enter Quest Title:");
  if (title) {
    const type = prompt("Enter Quest Type (study / lab / project):", "study") || "study";
    const sem = state.semesters.find(s => s.id === semId);
    const week = sem.weeks.find(w => w.id === weekId);
    week.quests.push({ id: Date.now(), title, type, completed: false });
    saveState();
  }
}

function deleteQuest(semId, weekId, questId) {
  const sem = state.semesters.find(s => s.id === semId);
  const week = sem.weeks.find(w => w.id === weekId);
  week.quests = week.quests.filter(q => q.id !== questId);
  saveState();
}

/* 4. MY COURSE CRUD */
function renderMyCourse() {
  const select = document.getElementById("course-semester-select");
  select.innerHTML = state.semesters.map(s => `<option value="${s.id}">${s.title}</option>`).join("");

  const activeSemId = Number(select.value) || (state.semesters[0] ? state.semesters[0].id : 1);
  const grid = document.getElementById("course-materials-grid");
  grid.innerHTML = "";

  const materials = state.courseMaterials.filter(m => m.semesterId === activeSemId);
  materials.forEach(m => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h4>${m.title}</h4>
          <span style="font-size:0.75rem; color:var(--ink-dim);">${m.type} · ${m.author}</span>
        </div>
        <button class="btn-secondary" onclick="deleteCourseMaterial(${m.id})" style="color:var(--rust);"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div style="margin-top:1rem;">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
          <span>Chapters Studied: ${m.completedChapters} / ${m.totalChapters}</span>
          <span>${Math.round((m.completedChapters / m.totalChapters) * 100 || 0)}%</span>
        </div>
        <div class="progress-bar-container"><div class="progress-bar-fill" style="width:${(m.completedChapters / m.totalChapters) * 100}%;"></div></div>
        <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
          <button class="btn-secondary" onclick="updateChapterCount(${m.id}, 1)">+ Chapter</button>
          <button class="btn-secondary" onclick="updateChapterCount(${m.id}, -1)">- Chapter</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openAddMaterialModal() {
  const title = prompt("Enter Book/Material Title:");
  if (title) {
    const author = prompt("Author / Link:");
    const totalChapters = Number(prompt("Total Chapters/Modules:", "10")) || 10;
    const select = document.getElementById("course-semester-select");
    state.courseMaterials.push({
      id: Date.now(),
      semesterId: Number(select.value) || 1,
      title,
      author: author || "N/A",
      totalChapters,
      completedChapters: 0,
      type: "Book"
    });
    saveState();
  }
}

function updateChapterCount(matId, delta) {
  const mat = state.courseMaterials.find(m => m.id === matId);
  if (mat) {
    mat.completedChapters = Math.max(0, Math.min(mat.totalChapters, mat.completedChapters + delta));
    saveState();
  }
}

function deleteCourseMaterial(matId) {
  state.courseMaterials = state.courseMaterials.filter(m => m.id !== matId);
  saveState();
}

/* 5. SCHEDULE CRUD */
let currentSchedTab = "daily";
function toggleScheduleTab(tab) {
  currentSchedTab = tab;
  document.getElementById("sched-btn-daily").classList.toggle("active", tab === "daily");
  document.getElementById("sched-btn-weekly").classList.toggle("active", tab === "weekly");
  renderSchedule();
}

function renderSchedule() {
  const container = document.getElementById("schedule-list-container");
  container.innerHTML = "";

  const items = state.schedule.filter(s => s.type === currentSchedTab);
  items.forEach(item => {
    const div = document.createElement("div");
    div.style.padding = "0.75rem";
    div.style.borderLeft = "4px solid var(--plum)";
    div.style.background = "var(--surface2)";
    div.style.marginBottom = "0.5rem";
    div.style.borderRadius = "0 8px 8px 0";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";

    div.innerHTML = `
      <div>
        <strong style="font-size:0.85rem; color:var(--plum);">${item.time}</strong>
        <h4 style="margin:0.2rem 0;">${item.title}</h4>
        <p style="font-size:0.8rem; color:var(--ink-dim);">${item.description}</p>
      </div>
      <button class="btn-secondary" onclick="deleteScheduleItem(${item.id})" style="color:var(--rust);"><i class="fa-solid fa-trash"></i></button>
    `;
    container.appendChild(div);
  });
}

function openAddScheduleModal() {
  const time = prompt("Enter Time Slot (e.g. 10:00 - 11:30):");
  if (time) {
    const title = prompt("Enter Activity Title:");
    const desc = prompt("Enter Description:");
    state.schedule.push({ id: Date.now(), type: currentSchedTab, time, title, description: desc || "" });
    saveState();
  }
}

function deleteScheduleItem(id) {
  state.schedule = state.schedule.filter(s => s.id !== id);
  saveState();
}

/* 6. PORTFOLIO */
function renderPortfolio() {
  // Skills list from completed study quests
  const skillsContainer = document.getElementById("portfolio-skills-container");
  skillsContainer.innerHTML = "";
  state.semesters.forEach(s => s.weeks.forEach(w => w.quests.forEach(q => {
    if (q.completed) {
      skillsContainer.innerHTML += `<span style="background:var(--surface2); border:1px solid var(--line); padding:0.3rem 0.6rem; border-radius:6px; font-size:0.8rem;"><i class="fa-solid fa-check" style="color:var(--sage);"></i> ${q.title}</span>`;
    }
  })));

  // Social Links Bar
  const socialsBar = document.getElementById("portfolio-socials-bar");
  const links = state.user.socialLinks;
  socialsBar.innerHTML = Object.keys(links).map(k => links[k] ? `<a href="${links[k]}" target="_blank" style="color:#FFF; background:rgba(255,255,255,0.2); padding:0.3rem 0.6rem; border-radius:6px; font-size:0.8rem; text-decoration:none;"><i class="fa-brands fa-${k}"></i> ${k}</a>` : '').join("");

  // Code labs
  const labsList = document.getElementById("portfolio-codelabs-list");
  labsList.innerHTML = state.portfolioSubmissions.codelabs.map(l => `<div style="padding:0.4rem 0; border-bottom:1px solid var(--line);"><a href="${l.link}" target="_blank" style="color:var(--plum); font-weight:600;">${l.title}</a></div>`).join("");

  // Projects
  const projList = document.getElementById("portfolio-projects-list");
  projList.innerHTML = state.portfolioSubmissions.projects.map(p => `<div style="padding:0.4rem 0; border-bottom:1px solid var(--line);"><a href="${p.link}" target="_blank" style="color:var(--gold); font-weight:600;">${p.title}</a></div>`).join("");
}

function openSocialProfilesModal() {
  state.user.socialLinks.github = prompt("GitHub Profile URL:", state.user.socialLinks.github || "") || "";
  state.user.socialLinks.linkedin = prompt("LinkedIn Profile URL:", state.user.socialLinks.linkedin || "") || "";
  saveState();
}

function openAddSubmissionModal(type) {
  const title = prompt("Enter Submission Title:");
  if (title) {
    const link = prompt("Enter Submission Link (GitHub/CodePen):");
    if (type === 'codelab') state.portfolioSubmissions.codelabs.push({ id: Date.now(), title, link });
    else state.portfolioSubmissions.projects.push({ id: Date.now(), title, link });
    saveState();
  }
}

/* 7. NOTEPAD WITH STICKY TOOLBAR & ADVANCED FORMATTING */
function renderNotesList() {
  const container = document.getElementById("notes-list-container");
  container.innerHTML = "";

  state.notes.forEach(note => {
    const div = document.createElement("div");
    div.className = `note-item-card ${state.activeNoteId === note.id ? 'active' : ''}`;
    div.innerHTML = `
      <strong style="font-size:0.85rem;">${note.title || 'Untitled Note'}</strong>
      <div style="font-size:0.7rem; color:var(--ink-dim);">${note.tags ? 'Tags: ' + note.tags : ''}</div>
    `;
    div.onclick = () => loadNoteIntoEditor(note.id);
    container.appendChild(div);
  });
}

function createNewNote() {
  const newNote = { id: Date.now(), title: "New Study Note", tags: "", published: false, content: "" };
  state.notes.push(newNote);
  state.activeNoteId = newNote.id;
  saveState();
  loadNoteIntoEditor(newNote.id);
}

function loadNoteIntoEditor(id) {
  state.activeNoteId = id;
  const note = state.notes.find(n => n.id === id);
  if (note) {
    document.getElementById("note-title-input").value = note.title;
    document.getElementById("note-tags-input").value = note.tags;
    document.getElementById("note-publish-checkbox").checked = note.published;
    document.getElementById("note-editor-content").innerHTML = note.content;
  }
}

function saveCurrentNoteMeta() {
  const note = state.notes.find(n => n.id === state.activeNoteId);
  if (note) {
    note.title = document.getElementById("note-title-input").value;
    note.tags = document.getElementById("note-tags-input").value;
    note.published = document.getElementById("note-publish-checkbox").checked;
    saveState();
  }
}

function autoSaveCurrentNoteContent() {
  const note = state.notes.find(n => n.id === state.activeNoteId);
  if (note) {
    note.content = document.getElementById("note-editor-content").innerHTML;
    localStorage.setItem("HCA_LMS_FULL_STATE_V2", JSON.stringify(state));
  }
}

function deleteCurrentNote() {
  if (state.activeNoteId && confirm("Delete active note?")) {
    state.notes = state.notes.filter(n => n.id !== state.activeNoteId);
    state.activeNoteId = null;
    saveState();
  }
}

/* NOTEPAD TOOLBAR COMMANDS */
function applyNoteFormat(cmd, value = null) {
  document.execCommand(cmd, false, value);
}

function applyNoteFontFamily(font) { document.execCommand("fontName", false, font); }
function applyNoteFontSize(size) {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  const span = document.createElement("span");
  span.style.fontSize = size;
  selection.getRangeAt(0).surroundContents(span);
}

function applyNoteLineHeight(lh) {
  document.getElementById("note-editor-content").style.lineHeight = lh;
}

function applyNoteLetterSpacing(ls) {
  document.getElementById("note-editor-content").style.letterSpacing = ls;
}

function insertNoteChecklist() {
  const html = `<div style="display:flex; align-items:center; gap:0.4rem;"><input type="checkbox"> <span>Checklist Item</span></div>`;
  document.execCommand("insertHTML", false, html);
}

function insertNoteKbd() {
  const text = prompt("Enter shortcut text (e.g. Ctrl + C):");
  if (text) document.execCommand("insertHTML", false, `<kbd>${text}</kbd>`);
}

function insertNoteImagePrompt() {
  const url = prompt("Enter image URL:");
  if (url) document.execCommand("insertImage", false, url);
}

function insertNoteExternalLinkPrompt() {
  const url = prompt("Enter URL:");
  if (url) document.execCommand("createLink", false, url);
}

function insertInternalNoteLinkPrompt() {
  const noteTitle = prompt("Enter Title of note to link:");
  if (noteTitle) document.execCommand("insertHTML", false, `<a href="#" style="color:var(--plum); font-weight:bold;">[Note: ${noteTitle}]</a>`);
}

/* 8. STUDY TIMERS (STACK, DRAG & DROP, DUPLICATE) */
function renderTimers() {
  const container = document.getElementById("timers-stack-container");
  container.innerHTML = "";

  state.timers.forEach((timer, index) => {
    const card = document.createElement("div");
    card.className = "timer-card card";
    card.draggable = true;

    const mins = Math.floor(timer.remainingSeconds / 60);
    const secs = timer.remainingSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <strong style="font-size:0.9rem;"><i class="fa-solid fa-grip-vertical" style="color:var(--ink-dim); margin-right:0.4rem;"></i> ${timer.name}</strong>
        <div>
          <button class="btn-secondary" onclick="duplicateTimer(${timer.id})" style="padding:0.2rem 0.4rem; font-size:0.75rem;"><i class="fa-solid fa-copy"></i></button>
          <button class="btn-secondary" onclick="deleteTimer(${timer.id})" style="padding:0.2rem 0.4rem; font-size:0.75rem; color:var(--rust);"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
      <div class="timer-display">${formatted}</div>
      <div style="display:flex; gap:0.5rem;">
        <button class="btn-primary" style="flex:1;" onclick="toggleTimer(${timer.id})">${timer.isRunning ? 'Pause' : 'Start'}</button>
        <button class="btn-secondary" onclick="resetTimer(${timer.id})">Reset</button>
      </div>
    `;

    // Drag & Drop event handlers
    card.ondragstart = (e) => { e.dataTransfer.setData("text/plain", index); card.classList.add("dragging"); };
    card.ondragend = () => card.classList.remove("dragging");
    card.ondragover = (e) => e.preventDefault();
    card.ondrop = (e) => {
      e.preventDefault();
      const fromIdx = Number(e.dataTransfer.getData("text/plain"));
      const moved = state.timers.splice(fromIdx, 1)[0];
      state.timers.splice(index, 0, moved);
      saveState();
    };

    container.appendChild(card);
  });
}

function startTimerTicker() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    let hasRunningStudyTimer = false;

    state.timers.forEach(t => {
      if (t.isRunning) {
        if (t.remainingSeconds > 0) {
          t.remainingSeconds--;
          if (t.name.toLowerCase().includes("study")) hasRunningStudyTimer = true;
        } else {
          t.isRunning = false;
        }
      }
    });

    if (hasRunningStudyTimer) state.totalStudyTimeSeconds++;

    renderTimers();
    if (document.getElementById("tab-dashboard").classList.contains("active")) renderDashboard();
  }, 1000);
}

function toggleTimer(id) {
  const timer = state.timers.find(t => t.id === id);
  if (timer) timer.isRunning = !timer.isRunning;
  saveState();
}

function resetTimer(id) {
  const timer = state.timers.find(t => t.id === id);
  if (timer) {
    timer.isRunning = false;
    timer.remainingSeconds = timer.durationMinutes * 60;
  }
  saveState();
}

function duplicateTimer(id) {
  const timer = state.timers.find(t => t.id === id);
  if (timer) {
    state.timers.push({ ...timer, id: Date.now(), isRunning: false });
    saveState();
  }
}

function deleteTimer(id) {
  state.timers = state.timers.filter(t => t.id !== id);
  saveState();
}

function openAddTimerModal() {
  const name = prompt("Enter Timer Name (e.g. Study, Break):", "Study");
  if (name) {
    const mins = Number(prompt("Duration in minutes:", "25")) || 25;
    state.timers.push({ id: Date.now(), name, durationMinutes: mins, remainingSeconds: mins * 60, isRunning: false, category: name });
    saveState();
  }
}

/* 9. SETTINGS & CUSTOMIZATION */
function toggleQuickTheme() {
  state.settings.theme = state.settings.theme === "light" ? "dark" : "light";
  saveState();
}

function setThemeMode(mode) {
  state.settings.theme = mode;
  saveState();
}

function updateFontFamilySetting(font) {
  state.settings.fontFamily = font;
  saveState();
}

function updateFontSizeSetting(size) {
  state.settings.fontSize = size;
  saveState();
}

function updateAppScaleSetting(scale) {
  state.settings.appScale = scale;
  saveState();
}

function saveProgressCardConfig() {
  state.settings.progressCardConfig.showSemProg = document.getElementById("cfg-show-sem-prog").checked;
  state.settings.progressCardConfig.showOverallProg = document.getElementById("cfg-show-overall-prog").checked;
  state.settings.progressCardConfig.showChapterProg = document.getElementById("cfg-show-chapter-prog").checked;
  saveState();
}

function resetAllProgress() {
  if (confirm("Reset ALL data and progress back to defaults?")) {
    localStorage.removeItem("HCA_LMS_FULL_STATE_V2");
    location.reload();
  }
}
