/* ==========================================================================
   1. STATE ENGINE & DEFAULT DATA
   ========================================================================== */
const DEFAULT_STATE = {
  user: {
    name: "Alex Vance",
    rank: "Novice Scholar",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      website: "https://myportfolio.dev"
    }
  },
  settings: {
    themeMode: "system",
    fontFamily: "plus-jakarta-sans",
    fontSize: "medium",
    appSize: "100",
    progressCardTitle: "Semester Mastery Goal",
    progressCardTag: "CUSTOM PROGRESS CARD",
    progressCardMotto: "Consistency over intensity. Keep pushing forward!"
  },
  modulesConfig: {
    semestersCount: 2,
    weeksPerSemester: 8,
    semesters: [
      { id: 1, name: "CS & Web Foundations" },
      { id: 2, name: "Full-Stack Architecture" }
    ]
  },
  quests: [
    { id: "q1", sem: 1, week: 1, title: "HTML5 Semantics & CSS Layouts", category: "Study", done: true, link: "" },
    { id: "q2", sem: 1, week: 1, title: "Lab 1: Flexbox & Grid Playground", category: "Lab", done: true, link: "https://github.com/lab1" },
    { id: "q3", sem: 1, week: 2, title: "JavaScript ES6+ Core Concepts", category: "Study", done: false, link: "" },
    { id: "q4", sem: 1, week: 2, title: "Term Project: Personal LMS Dashboard", category: "Project", done: false, link: "https://github.com/project-lms" }
  ],
  attendance: {}, // Format: "YYYY-MM-DD": true/false
  timers: [
    { id: "t1", name: "Study - Deep Work", duration: 1500, elapsed: 0, running: false },
    { id: "t2", name: "Break", duration: 300, elapsed: 0, running: false }
  ],
  totalStudyTimeSeconds: 0, // Calculated from timers named "Study"
  notes: [
    { id: "n1", title: "JavaScript Closures Notes", tags: ["javascript", "concept"], published: true, content: "<p>A <b>closure</b> is the combination of a function bundled together with references to its surrounding state.</p>", lineSpacing: "1.6", wordSpacing: "0px", letterSpacing: "0px" }
  ],
  currentNoteId: "n1",
  courseMaterials: [
    { id: "c1", sem: 1, title: "Eloquent JavaScript (3rd Ed)", type: "Book", link: "https://eloquentjavascript.net", totalChapters: 12, studiedChapters: [1, 2, 3] }
  ],
  schedule: [
    { id: "s1", day: "Monday", time: "09:00 - 10:30", title: "Deep Study Block", category: "Study", done: false },
    { id: "s2", day: "Wednesday", time: "14:00 - 15:30", title: "Coding Lab Practice", category: "Practice", done: false }
  ]
};

let state = JSON.parse(localStorage.getItem("PRO_LMS_STATE")) || DEFAULT_STATE;

function saveState() {
  localStorage.setItem("PRO_LMS_STATE", JSON.stringify(state));
  renderAll();
}

/* ==========================================================================
   2. INITIALIZATION & ROUTING
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  applySettings();
  renderAll();
  startTimerTicker();
});

function initNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");
      const tabKey = item.getAttribute("data-tab");
      switchTab(tabKey);
    });
  });
}

function switchTab(tabKey) {
  document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
  const targetPane = document.getElementById(`tab-${tabKey}`);
  if (targetPane) targetPane.classList.add("active");

  // Update top bar title
  const titleMap = {
    dashboard: ["Dashboard", "Track your study time, attendance consistency, and course progress"],
    attendance: ["Attendance Calendar", "Log daily study attendance and edit past dates"],
    quests: ["Quests & Modules", "Manage study modules, semesters, and weekly quests"],
    portfolio: ["Portfolio", "Showcase your completed skills, code labs, and project links"],
    notepad: ["Rich Notepad", "Create, format, and organize study notes with sticky tools"],
    timer: ["Study Timers", "Manage timer stacks with drag-and-drop support"],
    course: ["My Course", "Track learning materials, books, and chapter progress"],
    schedule: ["Schedule Manager", "Design and follow your weekly learning routine"],
    settings: ["LMS Settings", "Customize appearance, font sizes, app scale, and layout"]
  };

  if (titleMap[tabKey]) {
    document.getElementById("page-heading").innerText = titleMap[tabKey][0];
    document.getElementById("page-subheading").innerText = titleMap[tabKey][1];
  }
}

/* ==========================================================================
   3. SETTINGS & THEMES ENGINE
   ========================================================================== */
function applySettings() {
  const html = document.documentElement;
  const cfg = state.settings;

  // Theme
  if (cfg.themeMode === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    html.setAttribute("data-theme", prefersDark ? "dark" : "light");
  } else {
    html.setAttribute("data-theme", cfg.themeMode);
  }

  // Font Family, Font Size, App Scale
  html.setAttribute("data-font", cfg.fontFamily);
  html.setAttribute("data-font-size", cfg.fontSize);
  html.setAttribute("data-app-size", cfg.appSize);

  // Settings inputs sync
  const modeBtn = document.getElementById(`theme-mode-${cfg.themeMode}`);
  if (modeBtn) {
    document.querySelectorAll(".segmented-control .seg-btn").forEach(b => b.classList.remove("active"));
    modeBtn.classList.add("active");
  }
  document.getElementById("settings-font-family").value = cfg.fontFamily;
  document.getElementById("settings-font-size").value = cfg.fontSize;
  document.getElementById("settings-app-size").value = cfg.appSize;

  document.getElementById("cfg-progress-title").value = cfg.progressCardTitle;
  document.getElementById("cfg-progress-tag").value = cfg.progressCardTag;
  document.getElementById("cfg-progress-motto").value = cfg.progressCardMotto;
}

function setThemeMode(mode) {
  state.settings.themeMode = mode;
  saveState();
}

function toggleQuickTheme() {
  state.settings.themeMode = state.settings.themeMode === "dark" ? "light" : "dark";
  saveState();
}

function changeFontFamily(val) { state.settings.fontFamily = val; saveState(); }
function changeFontSize(val) { state.settings.fontSize = val; saveState(); }
function changeAppSize(val) { state.settings.appSize = val; saveState(); }

function updateProgressCardConfig() {
  state.settings.progressCardTitle = document.getElementById("cfg-progress-title").value;
  state.settings.progressCardTag = document.getElementById("cfg-progress-tag").value;
  state.settings.progressCardMotto = document.getElementById("cfg-progress-motto").value;
  saveState();
}

/* ==========================================================================
   4. RENDER PIPELINE
   ========================================================================== */
function renderAll() {
  applySettings();
  updateRankings();
  renderDashboard();
  renderAttendanceCalendar();
  renderQuestsTab();
  renderPortfolioTab();
  renderNotesList();
  renderTimersTab();
  renderCourseTab();
  renderScheduleTab();
}

function updateRankings() {
  const completedQuests = state.quests.filter(q => q.done).length;
  let rank = "Novice Scholar";
  if (completedQuests >= 15) rank = "Master Architect";
  else if (completedQuests >= 10) rank = "Senior Engineer";
  else if (completedQuests >= 5) rank = "Junior Developer";

  state.user.rank = rank;
  document.getElementById("nav-user-name").innerText = state.user.name;
  document.getElementById("nav-user-initial").innerText = state.user.name.charAt(0);
  document.getElementById("nav-user-rank").innerText = rank;
}

/* ==========================================================================
   5. DASHBOARD ENGINE
   ========================================================================== */
function renderDashboard() {
  // 1. Total Time Studied
  const totalSecs = state.totalStudyTimeSeconds;
  const hours = Math.floor(totalSecs / 3600);
  const mins = Math.floor((totalSecs % 3600) / 60);
  document.getElementById("dash-total-study-time").innerText = `${hours}h ${mins}m`;

  // 2. Days Studied count from attendance
  const daysStudied = Object.values(state.attendance).filter(v => v === true).length;
  document.getElementById("dash-days-studied").innerText = `${daysStudied} Days`;

  // 3. Completed Quests
  const totalQuests = state.quests.length;
  const doneQuests = state.quests.filter(q => q.done).length;
  const pct = totalQuests > 0 ? Math.round((doneQuests / totalQuests) * 100) : 0;

  document.getElementById("dash-quests-completed").innerText = `${doneQuests} / ${totalQuests}`;
  document.getElementById("dash-quests-pct").innerText = `${pct}% complete`;
  document.getElementById("dash-user-rank-display").innerText = state.user.rank;

  // Progress Card Custom
  document.getElementById("progress-card-title").innerText = state.settings.progressCardTitle;
  document.getElementById("progress-card-tag").innerText = state.settings.progressCardTag;
  document.getElementById("progress-card-motto").innerText = `"${state.settings.progressCardMotto}"`;
  document.getElementById("progress-card-val").innerText = `${pct}%`;
  document.getElementById("progress-card-bar").style.width = `${pct}%`;

  // Mini Quests
  const miniQuestContainer = document.getElementById("dash-recent-quests-list");
  miniQuestContainer.innerHTML = state.quests.slice(0, 4).map(q => `
    <div class="quest-item-card" style="padding: 8px 12px; margin-bottom: 6px;">
      <div class="quest-left">
        <input type="checkbox" ${q.done ? 'checked' : ''} onchange="toggleQuestDone('${q.id}')">
        <span class="quest-title ${q.done ? 'done' : ''}">${q.title}</span>
      </div>
      <span class="quest-tag">${q.category}</span>
    </div>
  `).join('');
}

/* ==========================================================================
   6. ATTENDANCE ENGINE (CALENDAR & PAST DATES)
   ========================================================================== */
let currentCalDate = new Date();

function renderAttendanceCalendar() {
  const grid = document.getElementById("calendar-days-grid");
  const monthYearHeader = document.getElementById("calendar-month-year");

  const year = currentCalDate.getFullYear();
  const month = currentCalDate.getMonth();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  monthYearHeader.innerText = `${monthNames[month]} ${year}`;

  grid.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Padding empty cells
  for (let i = 0; i < firstDay; i++) {
    grid.innerHTML += `<div class="cal-day-cell empty"></div>`;
  }

  const todayStr = new Date().toISOString().split("T")[0];

  for (let day = 1; day <= daysInMonth; day++) {
    const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const isStudied = state.attendance[formattedDate] === true;
    const isToday = formattedDate === todayStr;

    grid.innerHTML += `
      <div class="cal-day-cell ${isStudied ? 'studied' : ''} ${isToday ? 'today' : ''}" onclick="toggleDateAttendance('${formattedDate}')">
        <span>${day}</span>
        ${isStudied ? '<i class="fa-solid fa-check studied-icon"></i>' : ''}
      </div>
    `;
  }
}

function changeCalendarMonth(delta) {
  currentCalDate.setMonth(currentCalDate.getMonth() + delta);
  renderAttendanceCalendar();
}

function toggleDateAttendance(dateStr) {
  state.attendance[dateStr] = !state.attendance[dateStr];
  saveState();
}

function markTodayAttendance() {
  const todayStr = new Date().toISOString().split("T")[0];
  state.attendance[todayStr] = true;
  saveState();
}

function toggleSelectedDateAttendance(status) {
  const pickerVal = document.getElementById("attendance-picker-date").value;
  if (!pickerVal) return alert("Please select a date first.");
  state.attendance[pickerVal] = status;
  saveState();
}

/* ==========================================================================
   7. QUESTS & MODULES CONFIGURATOR ENGINE
   ========================================================================== */
function renderQuestsTab() {
  // Populate filter selectors
  const semFilter = document.getElementById("quest-sem-filter");
  const weekFilter = document.getElementById("quest-week-filter");

  if (semFilter.options.length === 0) {
    semFilter.innerHTML = state.modulesConfig.semesters.map(s => `<option value="${s.id}">Semester ${s.id}: ${s.name}</option>`).join('');
  }
  if (weekFilter.options.length === 0) {
    let opts = '<option value="all">All Weeks</option>';
    for (let w = 1; w <= state.modulesConfig.weeksPerSemester; w++) {
      opts += `<option value="${w}">Week ${w}</option>`;
    }
    weekFilter.innerHTML = opts;
  }

  const selectedSem = parseInt(semFilter.value) || 1;
  const selectedWeek = weekFilter.value;

  document.getElementById("module-structure-summary").innerText = 
    `Structure: ${state.modulesConfig.semestersCount} Semesters · ${state.modulesConfig.weeksPerSemester} Weeks/Semester`;

  const filteredQuests = state.quests.filter(q => {
    const matchSem = q.sem === selectedSem;
    const matchWeek = selectedWeek === "all" || q.week === parseInt(selectedWeek);
    return matchSem && matchWeek;
  });

  const questList = document.getElementById("quest-items-list");
  questList.innerHTML = filteredQuests.map(q => `
    <div class="quest-item-card">
      <div class="quest-left">
        <input type="checkbox" class="quest-checkbox" ${q.done ? 'checked' : ''} onchange="toggleQuestDone('${q.id}')">
        <div>
          <div class="quest-title ${q.done ? 'done' : ''}">${q.title}</div>
          <small style="color:var(--text-dim)">Week ${q.week} · ${q.category} ${q.link ? '· <a href="' + q.link + '" target="_blank">Submission Link</a>' : ''}</small>
        </div>
      </div>
      <div>
        <button class="btn-secondary btn-sm" onclick="deleteQuest('${q.id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

function toggleQuestDone(id) {
  const quest = state.quests.find(q => q.id === id);
  if (quest) {
    quest.done = !quest.done;
    saveState();
  }
}

function deleteQuest(id) {
  state.quests = state.quests.filter(q => q.id !== id);
  saveState();
}

function openAddQuestModal() {
  openModal("Add New Quest", `
    <div class="form-group">
      <label>Quest Title:</label>
      <input type="text" id="m-quest-title" class="form-input">
    </div>
    <div class="form-group">
      <label>Category:</label>
      <select id="m-quest-cat" class="form-input">
        <option value="Study">Study / Skill</option>
        <option value="Lab">Code Lab</option>
        <option value="Project">Project</option>
      </select>
    </div>
    <div class="form-group">
      <label>Semester:</label>
      <input type="number" id="m-quest-sem" value="1" class="form-input">
    </div>
    <div class="form-group">
      <label>Week:</label>
      <input type="number" id="m-quest-week" value="1" class="form-input">
    </div>
    <div class="form-group">
      <label>Submission Link (Optional for Lab/Project):</label>
      <input type="url" id="m-quest-link" class="form-input">
    </div>
    <button class="btn-primary" onclick="submitAddQuest()">Save Quest</button>
  `);
}

function submitAddQuest() {
  const title = document.getElementById("m-quest-title").value;
  const category = document.getElementById("m-quest-cat").value;
  const sem = parseInt(document.getElementById("m-quest-sem").value) || 1;
  const week = parseInt(document.getElementById("m-quest-week").value) || 1;
  const link = document.getElementById("m-quest-link").value;

  if (!title) return alert("Title is required!");

  state.quests.push({
    id: "q" + Date.now(),
    sem, week, title, category, done: false, link
  });
  closeModal();
  saveState();
}

function openModuleConfigModal() {
  openModal("Configure Study Modules", `
    <div class="form-group">
      <label>Number of Semesters:</label>
      <input type="number" id="m-sem-count" value="${state.modulesConfig.semestersCount}" class="form-input">
    </div>
    <div class="form-group">
      <label>Weeks per Semester:</label>
      <input type="number" id="m-weeks-count" value="${state.modulesConfig.weeksPerSemester}" class="form-input">
    </div>
    <button class="btn-primary" onclick="submitModuleConfig()">Save Configuration</button>
  `);
}

function submitModuleConfig() {
  const semCount = parseInt(document.getElementById("m-sem-count").value) || 1;
  const weeksCount = parseInt(document.getElementById("m-weeks-count").value) || 1;

  state.modulesConfig.semestersCount = semCount;
  state.modulesConfig.weeksPerSemester = weeksCount;

  // ensure semesters array exists
  state.modulesConfig.semesters = [];
  for (let i = 1; i <= semCount; i++) {
    state.modulesConfig.semesters.push({ id: i, name: `Semester ${i} Topics` });
  }

  closeModal();
  saveState();
}

/* ==========================================================================
   8. PORTFOLIO ENGINE
   ========================================================================== */
function renderPortfolioTab() {
  document.getElementById("portfolio-user-name").innerText = state.user.name;
  document.getElementById("portfolio-avatar-initial").innerText = state.user.name.charAt(0);
  document.getElementById("portfolio-user-rank").innerText = state.user.rank;

  // Render Social Links
  const links = state.user.socialLinks;
  document.getElementById("portfolio-social-links").innerHTML = `
    ${links.github ? `<a href="${links.github}" target="_blank" class="social-link-item"><i class="fa-brands fa-github"></i> GitHub</a>` : ''}
    ${links.linkedin ? `<a href="${links.linkedin}" target="_blank" class="social-link-item"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>` : ''}
    ${links.twitter ? `<a href="${links.twitter}" target="_blank" class="social-link-item"><i class="fa-brands fa-x-twitter"></i> Twitter</a>` : ''}
    ${links.website ? `<a href="${links.website}" target="_blank" class="social-link-item"><i class="fa-solid fa-globe"></i> Website</a>` : ''}
  `;

  // Render Skills (from done Study quests)
  const skills = state.quests.filter(q => q.category === "Study" && q.done);
  document.getElementById("portfolio-skills-container").innerHTML = skills.length > 0
    ? skills.map(s => `<span class="skill-tag"><i class="fa-solid fa-check"></i> ${s.title}</span>`).join('')
    : '<span style="color:var(--text-dim); font-size:0.85rem;">Mark Study Quests as completed to unlock skills here!</span>';

  // Render Labs
  const labs = state.quests.filter(q => q.category === "Lab" && q.done);
  document.getElementById("portfolio-labs-container").innerHTML = labs.length > 0
    ? labs.map(l => `
        <div class="quest-item-card">
          <div>
            <strong>${l.title}</strong>
            <div style="font-size:0.8rem; color:var(--text-dim);">${l.link ? `<a href="${l.link}" target="_blank">View Lab Submission</a>` : 'No link provided'}</div>
          </div>
          <span class="quest-tag" style="background:rgba(16,185,129,0.15); color:var(--success-color);">COMPLETED</span>
        </div>
      `).join('')
    : '<div style="color:var(--text-dim); font-size:0.85rem;">No completed Code Labs yet.</div>';

  // Render Projects
  const projects = state.quests.filter(q => q.category === "Project" && q.done);
  document.getElementById("portfolio-projects-container").innerHTML = projects.length > 0
    ? projects.map(p => `
        <div class="quest-item-card">
          <div>
            <strong>${p.title}</strong>
            <div style="font-size:0.8rem; color:var(--text-dim);">${p.link ? `<a href="${p.link}" target="_blank">View Project Repo / Live Demo</a>` : 'No link provided'}</div>
          </div>
          <span class="quest-tag" style="background:rgba(245,158,11,0.15); color:var(--warning-color);">SHIPPED</span>
        </div>
      `).join('')
    : '<div style="color:var(--text-dim); font-size:0.85rem;">No completed Projects yet.</div>';
}

function openSocialProfilesModal() {
  const links = state.user.socialLinks;
  openModal("Edit Social Profile Links", `
    <div class="form-group">
      <label>GitHub Profile:</label>
      <input type="url" id="m-soc-github" value="${links.github || ''}" class="form-input">
    </div>
    <div class="form-group">
      <label>LinkedIn Profile:</label>
      <input type="url" id="m-soc-linkedin" value="${links.linkedin || ''}" class="form-input">
    </div>
    <div class="form-group">
      <label>Twitter / X Profile:</label>
      <input type="url" id="m-soc-twitter" value="${links.twitter || ''}" class="form-input">
    </div>
    <div class="form-group">
      <label>Personal Website / Portfolio:</label>
      <input type="url" id="m-soc-website" value="${links.website || ''}" class="form-input">
    </div>
    <button class="btn-primary" onclick="submitSocialProfiles()">Save Profiles</button>
  `);
}

function submitSocialProfiles() {
  state.user.socialLinks = {
    github: document.getElementById("m-soc-github").value,
    linkedin: document.getElementById("m-soc-linkedin").value,
    twitter: document.getElementById("m-soc-twitter").value,
    website: document.getElementById("m-soc-website").value
  };
  closeModal();
  saveState();
}

/* ==========================================================================
   9. RICH NOTEPAD ENGINE
   ========================================================================== */
function renderNotesList() {
  const search = document.getElementById("note-search-input").value.toLowerCase();
  const listContainer = document.getElementById("notes-list-container");

  const filtered = state.notes.filter(n => {
    const titleMatch = n.title.toLowerCase().includes(search);
    const tagMatch = n.tags.some(t => t.toLowerCase().includes(search));
    return titleMatch || tagMatch;
  });

  listContainer.innerHTML = filtered.map(n => `
    <div class="note-list-item ${n.id === state.currentNoteId ? 'active' : ''}" onclick="selectNote('${n.id}')">
      <div style="font-weight:700;">${n.title || 'Untitled Note'}</div>
      <small style="color:var(--text-dim);">${n.tags.map(t => '#' + t).join(' ')}</small>
    </div>
  `).join('');

  loadCurrentNoteIntoEditor();
}

function selectNote(id) {
  state.currentNoteId = id;
  renderNotesList();
}

function createNewNote() {
  const newId = "n" + Date.now();
  state.notes.push({
    id: newId,
    title: "Untitled Note",
    tags: ["general"],
    published: false,
    content: "<p>Start typing your note here...</p>",
    lineSpacing: "1.6",
    wordSpacing: "0px",
    letterSpacing: "0px"
  });
  state.currentNoteId = newId;
  saveState();
}

function loadCurrentNoteIntoEditor() {
  const note = state.notes.find(n => n.id === state.currentNoteId);
  if (!note) return;

  document.getElementById("note-title-input").value = note.title;
  document.getElementById("note-tags-input").value = note.tags.join(', ');
  document.getElementById("note-published-toggle").checked = note.published;

  const canvas = document.getElementById("note-editor-canvas");
  canvas.innerHTML = note.content;
  canvas.style.lineHeight = note.lineSpacing || "1.6";
  canvas.style.wordSpacing = note.wordSpacing || "0px";
  canvas.style.letterSpacing = note.letterSpacing || "0px";
}

function saveCurrentNote() {
  const note = state.notes.find(n => n.id === state.currentNoteId);
  if (!note) return;

  note.title = document.getElementById("note-title-input").value;
  note.tags = document.getElementById("note-tags-input").value.split(',').map(t => t.trim()).filter(Boolean);
  note.published = document.getElementById("note-published-toggle").checked;
  note.content = document.getElementById("note-editor-canvas").innerHTML;

  localStorage.setItem("PRO_LMS_STATE", JSON.stringify(state));
}

function deleteCurrentNote() {
  if (state.notes.length <= 1) return alert("You must keep at least one note.");
  state.notes = state.notes.filter(n => n.id !== state.currentNoteId);
  state.currentNoteId = state.notes[0].id;
  saveState();
}

/* FORMATTING EXECUTOR */
function formatDoc(cmd, value = null) {
  document.execCommand(cmd, false, value);
  saveCurrentNote();
}

function insertChecklist() {
  const html = `<div style="display:flex; align-items:center; gap:8px;"><input type="checkbox"> <span>Checklist Item</span></div>`;
  document.execCommand('insertHTML', false, html);
  saveCurrentNote();
}

function insertKbd() {
  const sel = window.getSelection().toString() || "Ctrl";
  const html = `<kbd>${sel}</kbd>`;
  document.execCommand('insertHTML', false, html);
  saveCurrentNote();
}

function insertImagePrompt() {
  const url = prompt("Enter Image URL:");
  if (url) document.execCommand('insertImage', false, url);
  saveCurrentNote();
}

function insertLinkPrompt() {
  const url = prompt("Enter External Link URL:");
  if (url) document.execCommand('createLink', false, url);
  saveCurrentNote();
}

function insertNoteLinkPrompt() {
  const noteTitle = prompt("Enter Title of note to link:");
  if (noteTitle) {
    const html = `<a href="#" onclick="alert('Linking to note: ${noteTitle}')">📝 ${noteTitle}</a>`;
    document.execCommand('insertHTML', false, html);
  }
  saveCurrentNote();
}

function openSpacingControlsModal() {
  const note = state.notes.find(n => n.id === state.currentNoteId);
  openModal("Typography Spacing Controls", `
    <div class="form-group">
      <label>Line Height:</label>
      <input type="text" id="m-line-height" value="${note.lineSpacing || '1.6'}" class="form-input">
    </div>
    <div class="form-group">
      <label>Word Spacing (e.g. 2px):</label>
      <input type="text" id="m-word-spacing" value="${note.wordSpacing || '0px'}" class="form-input">
    </div>
    <div class="form-group">
      <label>Letter Spacing (e.g. 1px):</label>
      <input type="text" id="m-letter-spacing" value="${note.letterSpacing || '0px'}" class="form-input">
    </div>
    <button class="btn-primary" onclick="submitSpacingControls()">Apply Spacing</button>
  `);
}

function submitSpacingControls() {
  const note = state.notes.find(n => n.id === state.currentNoteId);
  if (note) {
    note.lineSpacing = document.getElementById("m-line-height").value;
    note.wordSpacing = document.getElementById("m-word-spacing").value;
    note.letterSpacing = document.getElementById("m-letter-spacing").value;
  }
  closeModal();
  saveState();
}

/* ==========================================================================
   10. STUDY TIMERS ENGINE (STACK & DRAG-DROP)
   ========================================================================== */
function renderTimersTab() {
  const container = document.getElementById("timers-stack-container");
  container.innerHTML = state.timers.map((t, idx) => `
    <div class="timer-card" draggable="true" data-index="${idx}" ondragstart="handleDragStart(event)" ondragover="handleDragOver(event)" ondrop="handleDrop(event)">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <strong>${t.name}</strong>
        <div>
          <button class="btn-secondary btn-sm" onclick="duplicateTimer('${t.id}')" title="Duplicate"><i class="fa-solid fa-copy"></i></button>
          <button class="btn-danger btn-sm" onclick="deleteTimer('${t.id}')" title="Delete"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
      <div class="timer-display">${formatTime(t.duration - t.elapsed)}</div>
      <div class="timer-controls">
        <button class="btn-primary btn-sm" onclick="toggleTimer('${t.id}')">${t.running ? '<i class="fa-solid fa-pause"></i> Pause' : '<i class="fa-solid fa-play"></i> Start'}</button>
        <button class="btn-secondary btn-sm" onclick="resetTimer('${t.id}')"><i class="fa-solid fa-rotate-left"></i> Reset</button>
      </div>
    </div>
  `).join('');
}

function formatTime(secs) {
  if (secs < 0) secs = 0;
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function startTimerTicker() {
  setInterval(() => {
    let stateChanged = false;
    state.timers.forEach(t => {
      if (t.running) {
        t.elapsed++;
        stateChanged = true;
        // If timer name contains "Study", accumulate total study time
        if (t.name.toLowerCase().includes("study")) {
          state.totalStudyTimeSeconds++;
        }
      }
    });
    if (stateChanged) {
      renderTimersTab();
      renderDashboard();
      localStorage.setItem("PRO_LMS_STATE", JSON.stringify(state));
    }
  }, 1000);
}

function toggleTimer(id) {
  const timer = state.timers.find(t => t.id === id);
  if (timer) timer.running = !timer.running;
  saveState();
}

function resetTimer(id) {
  const timer = state.timers.find(t => t.id === id);
  if (timer) {
    timer.running = false;
    timer.elapsed = 0;
  }
  saveState();
}

function duplicateTimer(id) {
  const timer = state.timers.find(t => t.id === id);
  if (timer) {
    state.timers.push({
      id: "t" + Date.now(),
      name: timer.name + " (Copy)",
      duration: timer.duration,
      elapsed: 0,
      running: false
    });
    saveState();
  }
}

function deleteTimer(id) {
  state.timers = state.timers.filter(t => t.id !== id);
  saveState();
}

function openAddTimerModal() {
  openModal("Create Study Timer", `
    <div class="form-group">
      <label>Timer Name (Include 'Study' to sync with Dashboard time):</label>
      <input type="text" id="m-timer-name" value="Study - Session" class="form-input">
    </div>
    <div class="form-group">
      <label>Duration in Minutes:</label>
      <input type="number" id="m-timer-mins" value="25" class="form-input">
    </div>
    <button class="btn-primary" onclick="submitAddTimer()">Create Timer</button>
  `);
}

function submitAddTimer() {
  const name = document.getElementById("m-timer-name").value;
  const mins = parseInt(document.getElementById("m-timer-mins").value) || 25;

  state.timers.push({
    id: "t" + Date.now(),
    name,
    duration: mins * 60,
    elapsed: 0,
    running: false
  });
  closeModal();
  saveState();
}

/* DRAG & DROP FOR TIMERS STACK */
let draggedIdx = null;
function handleDragStart(e) {
  draggedIdx = e.currentTarget.getAttribute("data-index");
  e.currentTarget.classList.add("dragging");
}
function handleDragOver(e) { e.preventDefault(); }
function handleDrop(e) {
  e.preventDefault();
  const targetIdx = e.currentTarget.getAttribute("data-index");
  if (draggedIdx !== null && targetIdx !== null) {
    const item = state.timers.splice(draggedIdx, 1)[0];
    state.timers.splice(targetIdx, 0, item);
    saveState();
  }
}

/* ==========================================================================
   11. COURSE MATERIALS ENGINE
   ========================================================================== */
function renderCourseTab() {
  const semSelect = document.getElementById("course-sem-select");
  if (semSelect.options.length === 0) {
    semSelect.innerHTML = state.modulesConfig.semesters.map(s => `<option value="${s.id}">Semester ${s.id}</option>`).join('');
  }

  const selectedSem = parseInt(semSelect.value) || 1;
  const materials = state.courseMaterials.filter(c => c.sem === selectedSem);

  const container = document.getElementById("course-materials-container");
  container.innerHTML = materials.map(m => {
    let chaptersChecklist = '';
    for (let i = 1; i <= m.totalChapters; i++) {
      const isStudied = m.studiedChapters.includes(i);
      chaptersChecklist += `
        <label style="display:inline-flex; align-items:center; gap:4px; font-size:0.8rem; margin:2px 6px;">
          <input type="checkbox" ${isStudied ? 'checked' : ''} onchange="toggleChapterStudied('${m.id}', ${i})"> Ch ${i}
        </label>
      `;
    }

    const pct = Math.round((m.studiedChapters.length / m.totalChapters) * 100);

    return `
      <div class="card" style="margin-bottom:1rem;">
        <div class="card-header">
          <div>
            <strong>${m.title}</strong>
            <div style="font-size:0.8rem; color:var(--text-dim);">${m.type} · ${m.link ? `<a href="${m.link}" target="_blank">Resource Link</a>` : ''}</div>
          </div>
          <button class="btn-danger btn-sm" onclick="deleteCourseMaterial('${m.id}')"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="progress-bar-container" style="margin-bottom:10px;">
          <div class="progress-bar-fill" style="width: ${pct}%;"></div>
        </div>
        <div style="font-size:0.85rem; font-weight:700; margin-bottom:8px;">Chapters Studied (${m.studiedChapters.length} / ${m.totalChapters} - ${pct}%):</div>
        <div>${chaptersChecklist}</div>
      </div>
    `;
  }).join('');
}

function toggleChapterStudied(materialId, chNum) {
  const item = state.courseMaterials.find(c => c.id === materialId);
  if (item) {
    if (item.studiedChapters.includes(chNum)) {
      item.studiedChapters = item.studiedChapters.filter(c => c !== chNum);
    } else {
      item.studiedChapters.push(chNum);
    }
    saveState();
  }
}

function deleteCourseMaterial(id) {
  state.courseMaterials = state.courseMaterials.filter(c => c.id !== id);
  saveState();
}

function openAddCourseMaterialModal() {
  openModal("Add Course Material / Book", `
    <div class="form-group">
      <label>Title / Book Name:</label>
      <input type="text" id="m-course-title" class="form-input">
    </div>
    <div class="form-group">
      <label>Material Type:</label>
      <select id="m-course-type" class="form-input">
        <option value="Book">Book</option>
        <option value="Documentation">Documentation</option>
        <option value="Video Course">Video Course</option>
      </select>
    </div>
    <div class="form-group">
      <label>Resource Link:</label>
      <input type="url" id="m-course-link" class="form-input">
    </div>
    <div class="form-group">
      <label>Total Chapters / Modules:</label>
      <input type="number" id="m-course-chapters" value="10" class="form-input">
    </div>
    <button class="btn-primary" onclick="submitAddCourseMaterial()">Save Material</button>
  `);
}

function submitAddCourseMaterial() {
  const title = document.getElementById("m-course-title").value;
  const type = document.getElementById("m-course-type").value;
  const link = document.getElementById("m-course-link").value;
  const chapters = parseInt(document.getElementById("m-course-chapters").value) || 10;
  const sem = parseInt(document.getElementById("course-sem-select").value) || 1;

  if (!title) return alert("Title required!");

  state.courseMaterials.push({
    id: "c" + Date.now(),
    sem, title, type, link, totalChapters: chapters, studiedChapters: []
  });
  closeModal();
  saveState();
}

/* ==========================================================================
   12. SCHEDULE ENGINE
   ========================================================================== */
let activeScheduleDayFilter = "All";

function filterScheduleDay(day) {
  activeScheduleDayFilter = day;
  document.querySelectorAll(".sched-day-btn").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");
  renderScheduleTab();
}

function renderScheduleTab() {
  const items = state.schedule.filter(s => activeScheduleDayFilter === "All" || s.day === activeScheduleDayFilter);
  const container = document.getElementById("schedule-items-container");

  container.innerHTML = items.map(s => `
    <div class="quest-item-card">
      <div class="quest-left">
        <input type="checkbox" ${s.done ? 'checked' : ''} onchange="toggleScheduleDone('${s.id}')">
        <div>
          <div class="quest-title ${s.done ? 'done' : ''}">${s.title}</div>
          <small style="color:var(--text-dim)">${s.day} · ${s.time} · ${s.category}</small>
        </div>
      </div>
      <button class="btn-danger btn-sm" onclick="deleteScheduleItem('${s.id}')"><i class="fa-solid fa-trash"></i></button>
    </div>
  `).join('');
}

function toggleScheduleDone(id) {
  const item = state.schedule.find(s => s.id === id);
  if (item) {
    item.done = !item.done;
    saveState();
  }
}

function deleteScheduleItem(id) {
  state.schedule = state.schedule.filter(s => s.id !== id);
  saveState();
}

function openAddScheduleModal() {
  openModal("Add Schedule Item", `
    <div class="form-group">
      <label>Day of Week:</label>
      <select id="m-sched-day" class="form-input">
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
    </div>
    <div class="form-group">
      <label>Time Slot (e.g. 09:00 - 10:30):</label>
      <input type="text" id="m-sched-time" value="09:00 - 10:30" class="form-input">
    </div>
    <div class="form-group">
      <label>Activity Title:</label>
      <input type="text" id="m-sched-title" class="form-input">
    </div>
    <div class="form-group">
      <label>Category:</label>
      <select id="m-sched-cat" class="form-input">
        <option value="Study">Study Block</option>
        <option value="Practice">Practice / Lab</option>
        <option value="Rest">Rest / Break</option>
      </select>
    </div>
    <button class="btn-primary" onclick="submitAddSchedule()">Save Schedule Block</button>
  `);
}

function submitAddSchedule() {
  const day = document.getElementById("m-sched-day").value;
  const time = document.getElementById("m-sched-time").value;
  const title = document.getElementById("m-sched-title").value;
  const category = document.getElementById("m-sched-cat").value;

  if (!title) return alert("Title required!");

  state.schedule.push({
    id: "s" + Date.now(),
    day, time, title, category, done: false
  });
  closeModal();
  saveState();
}

/* ==========================================================================
   13. MODALS & RESET HELPERS
   ========================================================================== */
function openModal(title, contentHtml) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-body").innerHTML = contentHtml;
  document.getElementById("app-modal-overlay").classList.add("active");
}

function closeModal() {
  document.getElementById("app-modal-overlay").classList.remove("active");
}

function resetAllProgress() {
  if (confirm("Are you sure you want to reset all LMS data and start fresh?")) {
    localStorage.removeItem("PRO_LMS_STATE");
    state = DEFAULT_STATE;
    saveState();
    location.reload();
  }
}
