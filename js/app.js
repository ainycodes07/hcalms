/* ==========================================================================
   NAVIGATION TAB SWITCHING
   ========================================================================== */
function switchTab(tabId) {
    // Hide all sections
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(sec => sec.style.display = 'none');

    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Show target section
    const targetSection = document.getElementById(`sec-${tabId}`);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // Set active nav item
    const targetNavBtn = document.getElementById(`nav-${tabId}`);
    if (targetNavBtn && targetNavBtn.parentElement) {
        targetNavBtn.parentElement.classList.add('active');
    }
}

/* ==========================================================================
   THEME TOGGLE SYSTEM
   ========================================================================== */
function toggleTheme() {
    const htmlEl = document.documentElement;
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
}

/* ==========================================================================
   PROGRESS CARD & EXPORT LOGIC
   ========================================================================== */
function updateProgressView() {
    const showSem = document.getElementById('toggleSemesterBar').checked;
    const showReading = document.getElementById('toggleCourseReading').checked;

    document.getElementById('semProgressBarBlock').style.display = showSem ? 'block' : 'none';
    document.getElementById('courseReadingBlock').style.display = showReading ? 'block' : 'none';
}

function downloadProgressCard() {
    window.print();
}

/* ==========================================================================
   PROFILE TAB — EDIT USER NAME & TITLE
   ========================================================================== */
function saveProfileInfo() {
    const newName = document.getElementById('profileNameInput').value.trim();
    const newTitle = document.getElementById('profileTitleInput').value.trim();

    if (!newName) return;

    // Update names across UI
    const nameDisplays = document.querySelectorAll('.user-name');
    nameDisplays.forEach(el => el.textContent = newName);

    const titleDisplays = document.querySelectorAll('.user-title');
    titleDisplays.forEach(el => el.textContent = newTitle);

    const cardHeading = document.getElementById('displayStudentName');
    if (cardHeading) {
        cardHeading.textContent = `${newName}'s Progress Card`;
    }

    alert('Profile information updated!');
}

/* ==========================================================================
   PORTFOLIO TAB — CUSTOM SOCIAL LINKS FORM
   ========================================================================== */
function addSocialLink(event) {
    event.preventDefault();
    const platformInput = document.getElementById('platformName');
    const urlInput = document.getElementById('platformUrl');

    const platform = platformInput.value.trim();
    const url = urlInput.value.trim();

    if (!platform || !url) return;

    const container = document.getElementById('socialLinksList');
    const linkRow = document.createElement('div');
    linkRow.className = 'social-link-row';
    linkRow.innerHTML = `
        <div class="social-link-info">
            <span class="social-platform-badge">${platform}:</span>
            <a href="${url}" target="_blank" class="social-link-url">${url}</a>
        </div>
        <button type="button" class="btn-secondary" onclick="removeSocialLink(this)">Remove</button>
    `;

    container.appendChild(linkRow);
    document.getElementById('socialLinksForm').reset();
}

function removeSocialLink(buttonEl) {
    buttonEl.closest('.social-link-row').remove();
}

/* ==========================================================================
   QUEUETIMER LOGIC
   ========================================================================== */
let timerSeconds = 1500; // 25 minutes
let timerInterval = null;
let isTimerRunning = false;
let taskQueue = [];

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    const formattedMins = String(mins).padStart(2, '0');
    const formattedSecs = String(secs).padStart(2, '0');
    document.getElementById('timerDisplay').textContent = `${formattedMins}:${formattedSecs}`;
}

function toggleTimer() {
    const btn = document.getElementById('playPauseBtn');
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        btn.textContent = '▶';
    } else {
        isTimerRunning = true;
        btn.textContent = '⏸';
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                isTimerRunning = false;
                btn.textContent = '▶';
                alert('Focus session completed!');
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerSeconds = 1500;
    document.getElementById('playPauseBtn').textContent = '▶';
    updateTimerDisplay();
}

function addTimeMinutes(mins) {
    timerSeconds += mins * 60;
    updateTimerDisplay();
}

function addQueueTask() {
    const input = document.getElementById('queueTaskInput');
    const durationSelect = document.getElementById('queueDurationSelect');
    const taskName = input.value.trim();

    if (!taskName) return;

    taskQueue.push({
        name: taskName,
        duration: durationSelect.value
    });

    input.value = '';
    renderQueue();
}

function removeQueueTask(index) {
    taskQueue.splice(index, 1);
    renderQueue();
}

function renderQueue() {
    const queueList = document.getElementById('queueList');
    const countLabel = document.getElementById('queueCountLabel');
    queueList.innerHTML = '';
    countLabel.textContent = `${taskQueue.length} Items`;

    taskQueue.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'queue-item-row';
        row.innerHTML = `
            <p><strong>${item.name}</strong> (${item.duration}m)</p>
            <button type="button" class="btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;" onclick="removeQueueTask(${idx})">Done</button>
        `;
        queueList.appendChild(row);
    });
}

/* ==========================================================================
   NOTES TAB DASHBOARD
   ========================================================================== */
function filterNotes() {
    const query = document.getElementById('notesSearchInput').value.toLowerCase();
    const notes = document.querySelectorAll('.note-card-item');

    notes.forEach(note => {
        const text = note.textContent.toLowerCase();
        note.style.display = text.includes(query) ? 'block' : 'none';
    });
}

function setNotesFilter(filterType, pillBtn) {
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => p.classList.remove('active'));
    pillBtn.classList.add('active');

    const notes = document.querySelectorAll('.note-card-item');
    notes.forEach(note => {
        if (filterType === 'starred') {
            note.style.display = note.getAttribute('data-starred') === 'true' ? 'block' : 'none';
        } else {
            note.style.display = 'block';
        }
    });
}

function addNewNote() {
    const title = prompt('Enter Note Title:');
    if (!title) return;

    const container = document.getElementById('notesContainer');
    const newCard = document.createElement('div');
    newCard.className = 'note-card-item';
    newCard.setAttribute('data-starred', 'false');
    newCard.innerHTML = `
        <div class="note-card-title">📌 ${title}</div>
        <div class="note-card-excerpt">New note created on ${new Date().toLocaleDateString()}...</div>
        <div class="note-tag-chips">
            <span class="tag-chip">General</span>
        </div>
    `;

    container.prepend(newCard);
}

// Initial display setup
updateTimerDisplay();
