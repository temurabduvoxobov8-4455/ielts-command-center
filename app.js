// =====================================
// IELTS COMMAND CENTER
// APP.JS — CLEAN COMPLETE VERSION
// =====================================


// =====================================
// TIMER
// =====================================

let timeLeft = 50 * 60;
let timerInterval = null;
let isRunning = false;


// =====================================
// TOTAL STUDY TIME
// =====================================

let totalStudySeconds =
    parseInt(localStorage.getItem("totalStudySeconds")) || 0;


function updateStudyTimeDisplay() {

    const element =
        document.getElementById("totalStudyTime");

    if (!element) return;

    const hours =
        Math.floor(totalStudySeconds / 3600);

    const minutes =
        Math.floor((totalStudySeconds % 3600) / 60);

    element.textContent =
        hours + "h " + minutes + "m";
}


function saveStudyTime() {

    localStorage.setItem(
        "totalStudySeconds",
        totalStudySeconds
    );

}


// =====================================
// TIMER DISPLAY
// =====================================

function updateDisplay() {

    const timerDisplay =
        document.getElementById("timer");

    if (!timerDisplay) return;

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

}


// =====================================
// START TIMER
// =====================================

function startTimer() {

    if (isRunning) return;

    isRunning = true;

    saveStudyDay();
    updateStudyStreak();

    timerInterval = setInterval(function () {

        if (timeLeft > 0) {

            timeLeft--;

            totalStudySeconds++;

            updateDisplay();
            updateStudyTimeDisplay();
            saveStudyTime();

        } else {

            clearInterval(timerInterval);

            isRunning = false;

            alert(
                "Study session finished! Take a short break."
            );

        }

    }, 1000);

}


// =====================================
// PAUSE TIMER
// =====================================

function pauseTimer() {

    clearInterval(timerInterval);

    isRunning = false;

}


// =====================================
// RESET TIMER
// =====================================

function resetTimer() {

    clearInterval(timerInterval);

    isRunning = false;

    timeLeft = 50 * 60;

    updateDisplay();

}


// =====================================
// TIMER PRESETS
// =====================================

function setTimer(minutes) {

    clearInterval(timerInterval);

    isRunning = false;

    timeLeft = minutes * 60;

    updateDisplay();

}


// =====================================
// 25 DAY IELTS PLAN
// =====================================

const plans = {

    1: [
        "Full Listening diagnostic test",
        "Full Reading diagnostic test",
        "Writing Task 2 — timed essay",
        "Speaking Part 1 + Part 2",
        "Vocabulary review",
        "Mistake analysis"
    ],

    2: [
        "Listening — distractors",
        "Reading — True / False / Not Given",
        "Grammar accuracy practice",
        "Speaking Part 1",
        "Vocabulary review",
        "Mistake analysis"
    ],

    3: [
        "Listening — paraphrases",
        "Reading — Matching Headings",
        "Writing — Introduction + Thesis",
        "Speaking practice",
        "Vocabulary review",
        "Grammar review"
    ],

    4: [
        "Listening Section 3",
        "Reading — Matching Information",
        "Speaking Part 2",
        "Complex sentence practice",
        "Vocabulary review",
        "Mistake analysis"
    ],

    5: [
        "Full Listening test",
        "Listening mistake analysis",
        "Writing Task 2",
        "Speaking Part 3",
        "Vocabulary review",
        "Grammar review"
    ],

    6: [
        "Full Reading test",
        "Reading mistake analysis",
        "Vocabulary — synonyms",
        "Speaking fluency",
        "Listening practice",
        "Grammar review"
    ],

    7: [
        "Writing Task 1 — Line Graph",
        "Writing Task 1 — Bar Chart",
        "Listening practice",
        "Speaking Part 2",
        "Vocabulary review",
        "Mistake analysis"
    ],

    8: [
        "Reading difficult passages",
        "Listening Section 4",
        "Writing Task 2",
        "Speaking Part 3",
        "Grammar practice",
        "Vocabulary review"
    ],

    9: [
        "Full Listening test",
        "Paraphrase training",
        "Grammar accuracy",
        "Vocabulary review",
        "Speaking practice",
        "Mistake analysis"
    ],

    10: [
        "Full Reading test",
        "Reading timing practice",
        "Writing Task 1",
        "Speaking mock test",
        "Vocabulary review",
        "Mistake analysis"
    ],

    11: [
        "Writing Task 2 — Agree / Disagree",
        "Essay correction",
        "Listening Section 3",
        "Speaking Part 3",
        "Grammar review",
        "Vocabulary review"
    ],

    12: [
        "Reading difficult questions",
        "Listening multiple choice",
        "Writing Task 1",
        "Speaking Part 2",
        "Vocabulary review",
        "Mistake analysis"
    ],

    13: [
        "FULL IELTS MOCK TEST",
        "Analyse Listening",
        "Analyse Reading",
        "Analyse Writing",
        "Analyse Speaking",
        "Record your scores"
    ],

    14: [
        "Fix Listening mistakes",
        "Fix Reading mistakes",
        "Grammar review",
        "Vocabulary review",
        "Speaking fluency",
        "Mistake analysis"
    ],

    15: [
        "Listening intensive practice",
        "Listening Section 3 + 4",
        "Dictation practice",
        "Paraphrase training",
        "Vocabulary review",
        "Mistake analysis"
    ],

    16: [
        "Reading intensive practice",
        "Full Reading test",
        "Timing improvement",
        "Vocabulary review",
        "Grammar practice",
        "Mistake analysis"
    ],

    17: [
        "Writing Task 1 intensive",
        "Charts and graphs",
        "Overview practice",
        "Grammar correction",
        "Vocabulary review",
        "Rewrite mistakes"
    ],

    18: [
        "Writing Task 2 intensive",
        "Essay planning",
        "Body paragraph practice",
        "Full essay",
        "Grammar correction",
        "Vocabulary review"
    ],

    19: [
        "Speaking Part 1",
        "Speaking Part 2",
        "Speaking Part 3",
        "Full Speaking mock",
        "Grammar accuracy",
        "Self-analysis"
    ],

    20: [
        "FULL IELTS MOCK TEST",
        "Listening analysis",
        "Reading analysis",
        "Writing analysis",
        "Speaking analysis",
        "Record scores"
    ],

    21: [
        "Review repeated mistakes",
        "Grammar accuracy",
        "Vocabulary review",
        "Speaking fluency",
        "Listening practice",
        "Reading practice"
    ],

    22: [
        "Full Listening",
        "Full Reading",
        "Listening analysis",
        "Reading analysis",
        "Vocabulary review",
        "Mistake review"
    ],

    23: [
        "Writing Task 1 timed",
        "Writing Task 2 timed",
        "Self-correction",
        "Speaking practice",
        "Grammar review",
        "Vocabulary review"
    ],

    24: [
        "FINAL FULL IELTS MOCK",
        "Check all scores",
        "Analyse weaknesses",
        "Final improvement",
        "Speaking practice",
        "Vocabulary review"
    ],

    25: [
        "Light Listening",
        "Light Reading",
        "Speaking practice",
        "Vocabulary review",
        "Grammar review",
        "Final preparation"
    ]

};


// =====================================
// CURRENT DAY
// =====================================

let currentDay = 1;


// =====================================
// DAY BUTTONS
// =====================================

function createDayButtons() {

    const container =
        document.getElementById("dayButtons");

    if (!container) return;

    container.innerHTML = "";

    for (let day = 1; day <= 25; day++) {

        const button =
            document.createElement("button");

        button.className = "day-button";

        button.textContent = day;

        button.onclick = function () {

            currentDay = day;

            loadSelectedDay();

        };

        container.appendChild(button);

    }

}


// =====================================
// LOAD DAY
// =====================================

function loadDay(day) {

    const dayNumber =
        document.getElementById("dayNumber");

    if (dayNumber) {

        dayNumber.textContent = day;

    }

    const dayPlan = plans[day];

    if (!dayPlan) return;

    const tasks =
        document.querySelectorAll(".task span");

    tasks.forEach(function (task, index) {

        if (dayPlan[index]) {

            task.textContent =
                dayPlan[index];

        }

    });

    const daysLeft =
        document.getElementById("daysLeft");

    if (daysLeft) {

        daysLeft.textContent =
            (25 - day) + " DAYS LEFT";

    }

}


// =====================================
// LOAD SELECTED DAY
// =====================================

function loadSelectedDay() {

    loadDay(currentDay);

    const planTitle =
        document.getElementById("planTitle");

    if (planTitle) {

        planTitle.textContent =
            "Day " + currentDay + " Plan";

    }

    document
        .querySelectorAll(".day-button")
        .forEach(function (button, index) {

            button.classList.toggle(
                "active",
                index + 1 === currentDay
            );

        });

    loadProgress();

}


// =====================================
// NEXT DAY
// =====================================

function nextDay() {

    if (currentDay < 25) {

        currentDay++;

        loadSelectedDay();

    }

}


// =====================================
// PREVIOUS DAY
// =====================================

function previousDay() {

    if (currentDay > 1) {

        currentDay--;

        loadSelectedDay();

    }

}


// =====================================
// SAVE DAILY PROGRESS
// =====================================

function saveProgress() {

    const tasks =
        document.querySelectorAll(".task input");

    const checked = [];

    tasks.forEach(function (task, index) {

        checked[index] =
            task.checked;

    });

    localStorage.setItem(
        "day_" + currentDay,
        JSON.stringify(checked)
    );

}


// =====================================
// LOAD DAILY PROGRESS
// =====================================

function loadProgress() {

    const saved =
        localStorage.getItem(
            "day_" + currentDay
        );

    const tasks =
        document.querySelectorAll(".task input");

    if (saved) {

        try {

            const checked =
                JSON.parse(saved);

            tasks.forEach(function (task, index) {

                task.checked =
                    checked[index] || false;

            });

        } catch (error) {

            tasks.forEach(function (task) {

                task.checked = false;

            });

        }

    } else {

        tasks.forEach(function (task) {

            task.checked = false;

        });

    }

    updateProgressBar();

}


// =====================================
// DAILY PROGRESS
// =====================================

function updateProgress() {

    updateProgressBar();

    saveProgress();

    updateOverallProgress();

}


// =====================================
// DAILY PROGRESS BAR
// =====================================

function updateProgressBar() {

    const tasks =
        document.querySelectorAll(".task input");

    if (tasks.length === 0) return;

    let completed = 0;

    tasks.forEach(function (task) {

        if (task.checked) {

            completed++;

        }

    });

    const percentage =
        Math.round(
            (completed / tasks.length) * 100
        );

    const progress =
        document.getElementById("progress");

    const progressText =
        document.getElementById("progressText");

    if (progress) {

        progress.style.width =
            percentage + "%";

    }

    if (progressText) {

        progressText.textContent =
            percentage + "%";

    }

}


// =====================================
// OVERALL PROGRESS
// =====================================

function updateOverallProgress() {

    const totalTasks = 25 * 6;

    let completedTasks = 0;

    for (let day = 1; day <= 25; day++) {

        const saved =
            localStorage.getItem("day_" + day);

        if (!saved) continue;

        try {

            const checked =
                JSON.parse(saved);

            checked.forEach(function (value) {

                if (value === true) {

                    completedTasks++;

                }

            });

        } catch (error) {

            console.log(
                "Progress data error:",
                error
            );

        }

    }

    const percentage =
        Math.round(
            (completedTasks / totalTasks) * 100
        );

    const progressBar =
        document.getElementById(
            "overallProgressBar"
        );

    const progressText =
        document.getElementById(
            "overallProgress"
        );

    if (progressBar) {

        progressBar.style.width =
            percentage + "%";

    }

    if (progressText) {

        progressText.textContent =
            percentage + "%";

    }

}


// =====================================
// IELTS SCORE TRACKER
// =====================================

function calculateOverall() {

    const listening =
        parseFloat(
            document.getElementById(
                "listeningScore"
            )?.value
        );

    const reading =
        parseFloat(
            document.getElementById(
                "readingScore"
            )?.value
        );

    const writing =
        parseFloat(
            document.getElementById(
                "writingScore"
            )?.value
        );

    const speaking =
        parseFloat(
            document.getElementById(
                "speakingScore"
            )?.value
        );

    const scores = [
        listening,
        reading,
        writing,
        speaking
    ];

    const validScores =
        scores.filter(function (score) {

            return !isNaN(score);

        });

    if (validScores.length !== 4) {

        const band =
            document.getElementById("overallBand");

        const large =
            document.getElementById("overallBandLarge");

        if (band) band.textContent = "0.0";
        if (large) large.textContent = "0.0";

        return;

    }

    const average =
        (
            listening +
            reading +
            writing +
            speaking
        ) / 4;

    const overall =
        roundIELTS(average);

    const band =
        document.getElementById("overallBand");

    const large =
        document.getElementById("overallBandLarge");

    if (band) {

        band.textContent =
            overall.toFixed(1);

    }

    if (large) {

        large.textContent =
            overall.toFixed(1);

    }

    saveScores();

}


// =====================================
// IELTS ROUNDING
// =====================================

function roundIELTS(score) {

    return Math.round(score * 2) / 2;

}


// =====================================
// SAVE IELTS SCORES
// =====================================

function saveScores() {

    const scores = {

        listening:
            document.getElementById(
                "listeningScore"
            )?.value || "",

        reading:
            document.getElementById(
                "readingScore"
            )?.value || "",

        writing:
            document.getElementById(
                "writingScore"
            )?.value || "",

        speaking:
            document.getElementById(
                "speakingScore"
            )?.value || ""

    };

    localStorage.setItem(
        "ielts_scores",
        JSON.stringify(scores)
    );

}


// =====================================
// LOAD IELTS SCORES
// =====================================

function loadScores() {

    const saved =
        localStorage.getItem("ielts_scores");

    if (!saved) return;

    try {

        const scores =
            JSON.parse(saved);

        const listening =
            document.getElementById(
                "listeningScore"
            );

        const reading =
            document.getElementById(
                "readingScore"
            );

        const writing =
            document.getElementById(
                "writingScore"
            );

        const speaking =
            document.getElementById(
                "speakingScore"
            );

        if (listening)
            listening.value =
                scores.listening || "";

        if (reading)
            reading.value =
                scores.reading || "";

        if (writing)
            writing.value =
                scores.writing || "";

        if (speaking)
            speaking.value =
                scores.speaking || "";

        calculateOverall();

    } catch (error) {

        console.log(
            "Score data error:",
            error
        );

    }

}


// =====================================
// STUDY STREAK
// =====================================

function getTodayDate() {

    const today = new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");

    return (
        year +
        "-" +
        month +
        "-" +
        day
    );

}


function saveStudyDay() {

    const today =
        getTodayDate();

    let studyDays = [];

    try {

        studyDays =
            JSON.parse(
                localStorage.getItem(
                    "studyDays"
                )
            ) || [];

    } catch (error) {

        studyDays = [];

    }

    if (!studyDays.includes(today)) {

        studyDays.push(today);

        localStorage.setItem(
            "studyDays",
            JSON.stringify(studyDays)
        );

    }

}


function updateStudyStreak() {

    const streakElement =
        document.getElementById(
            "studyStreak"
        );

    if (!streakElement) return;

    let studyDays = [];

    try {

        studyDays =
            JSON.parse(
                localStorage.getItem(
                    "studyDays"
                )
            ) || [];

    } catch (error) {

        studyDays = [];

    }

    if (studyDays.length === 0) {

        streakElement.textContent = "0";

        return;

    }

    studyDays.sort(function (a, b) {

        return new Date(b) -
               new Date(a);

    });

    const today =
        new Date();

    today.setHours(
        0,
        0,
        0,
        0
    );

    let streak = 0;

    for (
        let i = 0;
        i < studyDays.length;
        i++
    ) {

        const current =
            new Date(
                studyDays[i]
            );

        current.setHours(
            0,
            0,
            0,
            0
        );

        const difference =
            Math.round(
                (
                    today - current
                ) /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );

        if (difference === streak) {

            streak++;

        } else {

            break;

        }

    }

    streakElement.textContent =
        streak;

}


// =====================================
// MISTAKE NOTEBOOK
// =====================================

let mistakes = [];


function loadMistakes() {

    const saved =
        localStorage.getItem(
            "ielts_mistakes"
        );

    if (saved) {

        try {

            mistakes =
                JSON.parse(saved);

        } catch (error) {

            mistakes = [];

        }

    }

    displayMistakes();

}


function saveMistakes() {

    localStorage.setItem(
        "ielts_mistakes",
        JSON.stringify(mistakes)
    );

}


function addMistake() {

    const skill =
        document.getElementById(
            "mistakeSkill"
        )?.value;

    const mistake =
        document.getElementById(
            "mistakeText"
        )?.value.trim();

    const correct =
        document.getElementById(
            "correctText"
        )?.value.trim();

    if (!mistake || !correct) {

        alert(
            "Please write both the mistake and the correct version."
        );

        return;

    }

    const newMistake = {

        id: Date.now(),

        skill: skill,

        mistake: mistake,

        correct: correct,

        date:
            new Date().toLocaleDateString()

    };

    mistakes.unshift(newMistake);

    saveMistakes();

    displayMistakes();

    document.getElementById(
        "mistakeText"
    ).value = "";

    document.getElementById(
        "correctText"
    ).value = "";

}


function displayMistakes() {

    const list =
        document.getElementById(
            "mistakeList"
        );

    const count =
        document.getElementById(
            "mistakeCount"
        );

    if (!list) return;

    list.innerHTML = "";

    if (count) {

        count.textContent =
            mistakes.length +
            (
                mistakes.length === 1
                    ? " MISTAKE"
                    : " MISTAKES"
            );

    }

    if (mistakes.length === 0) {

        list.innerHTML = `
            <div class="mistake-empty">
                No mistakes recorded yet.
                Start adding your IELTS mistakes.
            </div>
        `;

        return;

    }

    mistakes.forEach(function (item) {

        const element =
            document.createElement("div");

        element.className =
            "mistake-item";

        element.innerHTML = `

            <div class="mistake-item-top">

                <span class="mistake-skill">
                    ${escapeHTML(item.skill)}
                </span>

                <span class="mistake-date">
                    ${escapeHTML(item.date)}
                </span>

            </div>

            <div class="mistake-label">
                YOUR MISTAKE
            </div>

            <div class="mistake-content">
                ${escapeHTML(item.mistake)}
            </div>

            <div class="mistake-label">
                CORRECT VERSION
            </div>

            <div class="mistake-correct">
                ${escapeHTML(item.correct)}
            </div>

            <button
                class="delete-mistake"
                onclick="deleteMistake(${item.id})"
            >
                DELETE
            </button>

        `;

        list.appendChild(element);

    });

}


function deleteMistake(id) {

    if (!confirm("Delete this mistake?")) {
        return;
    }

    mistakes =
        mistakes.filter(function (item) {

            return item.id !== id;

        });

    saveMistakes();

    displayMistakes();

}


function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}
// =========================================
// DASHBOARD PAGE SETUP
// =========================================

function setupDashboard() {

    const main = document.querySelector("main");

    if (!main) return;

    main.classList.add("premium-dashboard");

}

setTimeout(function () {
    setupDashboard();
}, 500);


// =====================================
// MISTAKE SEARCH & FILTER
// =====================================

function filterMistakes() {

    const searchInput =
        document.getElementById(
            "mistakeSearch"
        );

    const filterInput =
        document.getElementById(
            "mistakeFilter"
        );

    if (!searchInput || !filterInput) {
        return;
    }

    const search =
        searchInput.value
            .toLowerCase()
            .trim();

    const skill =
        filterInput.value;

    const filtered =
        mistakes.filter(function (item) {

            const matchesSearch =
                item.mistake
                    .toLowerCase()
                    .includes(search) ||
                item.correct
                    .toLowerCase()
                    .includes(search);

            const matchesSkill =
                skill === "All" ||
                item.skill === skill;

            return (
                matchesSearch &&
                matchesSkill
            );

        });

    displayFilteredMistakes(filtered);

}


function displayFilteredMistakes(filteredMistakes) {

    const list =
        document.getElementById(
            "mistakeList"
        );

    if (!list) return;

    list.innerHTML = "";

    if (filteredMistakes.length === 0) {

        list.innerHTML = `
            <div class="mistake-empty">
                No matching mistakes found.
            </div>
        `;

        return;

    }

    filteredMistakes.forEach(function (item) {

        const element =
            document.createElement("div");

        element.className =
            "mistake-item";

        element.innerHTML = `

            <div class="mistake-item-top">

                <span class="mistake-skill">
                    ${escapeHTML(item.skill)}
                </span>

                <span class="mistake-date">
                    ${escapeHTML(item.date)}
                </span>

            </div>

            <div class="mistake-label">
                YOUR MISTAKE
            </div>

            <div class="mistake-content">
                ${escapeHTML(item.mistake)}
            </div>

            <div class="mistake-label">
                CORRECT VERSION
            </div>

            <div class="mistake-correct">
                ${escapeHTML(item.correct)}
            </div>

            <button
                class="delete-mistake"
                onclick="deleteMistake(${item.id})"
            >
                DELETE
            </button>

        `;

        list.appendChild(element);

    });

}


// =====================================
// IELTS SCORE HISTORY
// =====================================

let scoreHistory = [];


function loadScoreHistory() {

    const saved =
        localStorage.getItem(
            "ielts_score_history"
        );

    if (saved) {

        try {

            scoreHistory =
                JSON.parse(saved);

        } catch (error) {

            scoreHistory = [];

        }

    }

    displayScoreHistory();

}


function saveScoreHistory() {

    const listening =
        parseFloat(
            document.getElementById(
                "historyListening"
            )?.value
        );

    const reading =
        parseFloat(
            document.getElementById(
                "historyReading"
            )?.value
        );

    const writing =
        parseFloat(
            document.getElementById(
                "historyWriting"
            )?.value
        );

    const speaking =
        parseFloat(
            document.getElementById(
                "historySpeaking"
            )?.value
        );

    const scores = [
        listening,
        reading,
        writing,
        speaking
    ];

    if (
        scores.some(function (score) {
            return isNaN(score);
        })
    ) {

        alert(
            "Please enter all four IELTS scores."
        );

        return;

    }

    const overall =
        roundIELTS(
            (
                listening +
                reading +
                writing +
                speaking
            ) / 4
        );

    const newResult = {

        id: Date.now(),

        date: getTodayDate(),

        listening: listening,

        reading: reading,

        writing: writing,

        speaking: speaking,

        overall: overall

    };

    scoreHistory.unshift(newResult);

    localStorage.setItem(
        "ielts_score_history",
        JSON.stringify(scoreHistory)
    );

    clearHistoryInputs();

    refreshPerformance();

}


function clearHistoryInputs() {

    const ids = [
        "historyListening",
        "historyReading",
        "historyWriting",
        "historySpeaking"
    ];

    ids.forEach(function (id) {

        const input =
            document.getElementById(id);

        if (input) {

            input.value = "";

        }

    });

}


function displayScoreHistory() {

    const list =
        document.getElementById(
            "scoreHistoryList"
        );

    const count =
        document.getElementById(
            "historyCount"
        );

    if (!list) return;

    list.innerHTML = "";

    if (count) {

        count.textContent =
            scoreHistory.length +
            (
                scoreHistory.length === 1
                    ? " TEST"
                    : " TESTS"
            );

    }

    if (scoreHistory.length === 0) {

        list.innerHTML = `
            <div class="history-empty">
                No test results recorded yet.
            </div>
        `;

        return;

    }

    scoreHistory.forEach(function (result) {

        const item =
            document.createElement("div");

        item.className =
            "history-item";

        item.innerHTML = `

            <div class="history-date">
                ${escapeHTML(result.date)}
            </div>

            <div class="history-score">
                <span>L</span>
                ${Number(result.listening).toFixed(1)}
            </div>

            <div class="history-score">
                <span>R</span>
                ${Number(result.reading).toFixed(1)}
            </div>

            <div class="history-score">
                <span>W</span>
                ${Number(result.writing).toFixed(1)}
            </div>

            <div class="history-score">
                <span>S</span>
                ${Number(result.speaking).toFixed(1)}
            </div>

            <div class="history-overall">
                ${Number(result.overall).toFixed(1)}
            </div>

            <button
                class="delete-history"
                onclick="deleteScoreHistory(${result.id})"
            >
                DELETE
            </button>

        `;

        list.appendChild(item);

    });

}


function deleteScoreHistory(id) {

    if (!confirm("Delete this test result?")) {
        return;
    }

    scoreHistory =
        scoreHistory.filter(function (result) {

            return result.id !== id;

        });

    localStorage.setItem(
        "ielts_score_history",
        JSON.stringify(scoreHistory)
    );

    refreshPerformance();

}


// =====================================
// IELTS PROGRESS CHART
// =====================================

function updateScoreChart() {

    const canvas =
        document.getElementById("scoreChart");

    if (!canvas) return;

    const wrapper =
        canvas.parentElement;

    if (!wrapper) return;

    const ctx =
        canvas.getContext("2d");

    const width =
        Math.max(100, wrapper.clientWidth - 36);

    const height =
        Math.max(100, wrapper.clientHeight - 36);

    const dpr =
        window.devicePixelRatio || 1;

    canvas.width =
        width * dpr;

    canvas.height =
        height * dpr;

    canvas.style.width =
        width + "px";

    canvas.style.height =
        height + "px";

    ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );

    ctx.clearRect(
        0,
        0,
        width,
        height
    );

    const results =
        [...scoreHistory].reverse();

    const bestScore =
        results.length
            ? Math.max(
                ...results.map(function (item) {
                    return Number(item.overall);
                })
            )
            : 0;

    const bestElement =
        document.getElementById(
            "chartBestScore"
        );

    if (bestElement) {

        bestElement.textContent =
            "BEST: " +
            bestScore.toFixed(1);

    }

    if (results.length === 0) {

        ctx.fillStyle =
            "#4f5b73";

        ctx.font =
            "14px Arial";

        ctx.textAlign =
            "center";

        ctx.fillText(
            "Save your first IELTS test result to see your progress.",
            width / 2,
            height / 2
        );

        return;

    }

    const paddingLeft = 42;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 35;

    const chartWidth =
        width -
        paddingLeft -
        paddingRight;

    const chartHeight =
        height -
        paddingTop -
        paddingBottom;

    const minScore = 4;
    const maxScore = 9;


    // Grid

    ctx.font =
        "10px Arial";

    ctx.textAlign =
        "right";

    for (
        let score = 4;
        score <= 9;
        score++
    ) {

        const y =
            paddingTop +
            chartHeight -
            (
                (score - minScore) /
                (maxScore - minScore)
            ) *
            chartHeight;

        ctx.strokeStyle =
            "#202b40";

        ctx.lineWidth = 1;

        ctx.beginPath();

        ctx.moveTo(
            paddingLeft,
            y
        );

        ctx.lineTo(
            width - paddingRight,
            y
        );

        ctx.stroke();

        ctx.fillStyle =
            "#56627b";

        ctx.fillText(
            score.toFixed(1),
            paddingLeft - 10,
            y + 3
        );

    }


    // Points

    const points =
        results.map(function (item, index) {

            const score =
                Number(item.overall);

            const x =
                results.length === 1
                    ? paddingLeft +
                      chartWidth / 2
                    : paddingLeft +
                      (
                        index /
                        (results.length - 1)
                      ) *
                      chartWidth;

            const y =
                paddingTop +
                chartHeight -
                (
                    (score - minScore) /
                    (maxScore - minScore)
                ) *
                chartHeight;

            return {
                x: x,
                y: y,
                score: score,
                date: item.date
            };

        });


    // Line

    ctx.beginPath();

    points.forEach(function (point, index) {

        if (index === 0) {

            ctx.moveTo(
                point.x,
                point.y
            );

        } else {

            ctx.lineTo(
                point.x,
                point.y
            );

        }

    });

    ctx.strokeStyle =
        "#7181ff";

    ctx.lineWidth = 3;

    ctx.lineJoin =
        "round";

    ctx.lineCap =
        "round";

    ctx.stroke();


    // Points + labels

    points.forEach(function (point) {

        ctx.beginPath();

        ctx.arc(
            point.x,
            point.y,
            5,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "#7181ff";

        ctx.fill();

        ctx.beginPath();

        ctx.arc(
            point.x,
            point.y,
            2,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "#ffffff";

        ctx.fill();

        ctx.fillStyle =
            "#dce2f0";

        ctx.font =
            "bold 11px Arial";

        ctx.textAlign =
            "center";

        ctx.fillText(
            point.score.toFixed(1),
            point.x,
            point.y - 12
        );

    });


    // Dates

    ctx.fillStyle =
        "#56627b";

    ctx.font =
        "9px Arial";

    ctx.textAlign =
        "center";

    points.forEach(function (point) {

        ctx.fillText(
            point.date,
            point.x,
            height - 10
        );

    });

}


// =====================================
// PROGRESS SUMMARY
// =====================================

function updateProgressSummary() {

    const last =
        document.getElementById(
            "summaryLastScore"
        );

    const best =
        document.getElementById(
            "summaryBestScore"
        );

    const target =
        document.getElementById(
            "summaryToTarget"
        );

    const strongest =
        document.getElementById(
            "summaryStrongest"
        );

    const status =
        document.getElementById(
            "summaryStatus"
        );

    if (!last) return;

    if (scoreHistory.length === 0) {

        last.textContent = "0.0";
        best.textContent = "0.0";
        target.textContent = "7.0";
        strongest.textContent = "—";
        status.textContent =
            "START YOUR JOURNEY";

        return;

    }

    const latest =
        scoreHistory[0];

    const bestScore =
        Math.max(
            ...scoreHistory.map(function (item) {
                return Number(item.overall);
            })
        );

    const difference =
        Math.max(
            0,
            7 - Number(latest.overall)
        );

    const skills = {

        Listening:
            Number(latest.listening),

        Reading:
            Number(latest.reading),

        Writing:
            Number(latest.writing),

        Speaking:
            Number(latest.speaking)

    };

    let strongestSkill = "—";
    let strongestValue = -1;

    Object.keys(skills).forEach(function (skill) {

        if (
            skills[skill] >
            strongestValue
        ) {

            strongestValue =
                skills[skill];

            strongestSkill =
                skill;

        }

    });

    last.textContent =
        Number(latest.overall).toFixed(1);

    best.textContent =
        bestScore.toFixed(1);

    target.textContent =
        difference.toFixed(1);

    strongest.textContent =
        strongestSkill;

    if (Number(latest.overall) >= 7) {

        status.textContent =
            "TARGET REACHED";

    } else if (Number(latest.overall) >= 6.5) {

        status.textContent =
            "ALMOST THERE";

    } else if (Number(latest.overall) >= 6) {

        status.textContent =
            "GOOD PROGRESS";

    } else {

        status.textContent =
            "KEEP BUILDING";

    }

}


// =====================================
// SKILL ANALYSIS
// =====================================

function updateSkillAnalysis() {

    // New Skill Analysis inputs

    const listening =
        parseFloat(
            document.getElementById(
                "analysisListening"
            )?.value
        ) || 0;

    const reading =
        parseFloat(
            document.getElementById(
                "analysisReading"
            )?.value
        ) || 0;

    const writing =
        parseFloat(
            document.getElementById(
                "analysisWriting"
            )?.value
        ) || 0;

    const speaking =
        parseFloat(
            document.getElementById(
                "analysisSpeaking"
            )?.value
        ) || 0;


    // Progress bars

    const listeningBar =
        document.getElementById(
            "skillListeningBar"
        );

    const readingBar =
        document.getElementById(
            "skillReadingBar"
        );

    const writingBar =
        document.getElementById(
            "skillWritingBar"
        );

    const speakingBar =
        document.getElementById(
            "skillSpeakingBar"
        );


    if (listeningBar) {

        listeningBar.style.width =
            (listening / 9 * 100) + "%";

    }

    if (readingBar) {

        readingBar.style.width =
            (reading / 9 * 100) + "%";

    }

    if (writingBar) {

        writingBar.style.width =
            (writing / 9 * 100) + "%";

    }

    if (speakingBar) {

        speakingBar.style.width =
            (speaking / 9 * 100) + "%";

    }


    // Average

    const average =
        (
            listening +
            reading +
            writing +
            speaking
        ) / 4;

    const averageElement =
        document.getElementById(
            "skillAverage"
        );

    if (averageElement) {

        averageElement.textContent =
            "AVERAGE: " +
            roundIELTS(average).toFixed(1);

    }

}


// =====================================
// REFRESH ALL PERFORMANCE DATA
// =====================================

function refreshPerformance() {

    displayScoreHistory();

    updateScoreChart();

    updateProgressSummary();

}


// =====================================
// RESPONSIVE CHART
// =====================================

window.addEventListener(
    "resize",
    function () {

        updateScoreChart();

    }
);


// =====================================
// START APP
// =====================================

updateDisplay();

updateStudyTimeDisplay();

createDayButtons();

loadSelectedDay();

updateOverallProgress();

loadScores();

updateStudyStreak();

loadMistakes();

loadScoreHistory();

updateSkillAnalysis();

updateScoreChart();

updateProgressSummary();
setTimeout(function () {

    const savedName = localStorage.getItem("ieltsUserName");

    if (savedName) {
        return;
    }

    const box = document.createElement("div");

    box.style.position = "fixed";
    box.style.left = "0";
    box.style.top = "0";
    box.style.width = "100%";
    box.style.height = "100%";
    box.style.background = "#070b14";
    box.style.zIndex = "999999";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";

    box.innerHTML = `
        <div style="
            width:380px;
            max-width:85%;
            padding:40px 30px;
            background:#101827;
            border:1px solid #293653;
            border-radius:24px;
            text-align:center;
            box-shadow:0 25px 70px rgba(0,0,0,.5);
        ">

            <div style="
                color:#8996ff;
                font-size:10px;
                font-weight:bold;
                letter-spacing:3px;
                margin-bottom:12px;
            ">
                IELTS COMMAND CENTER
            </div>

            <h1 style="
                color:white;
                font-size:32px;
                margin:0 0 10px;
            ">
                WELCOME
            </h1>

            <p style="
                color:#7d89a8;
                font-size:13px;
                margin-bottom:25px;
            ">
                What's your name?
            </p>

            <input
                id="nameBox"
                type="text"
                placeholder="Enter your name..."
                maxlength="30"
                style="
                    width:100%;
                    box-sizing:border-box;
                    padding:15px;
                    border-radius:12px;
                    border:1px solid #293653;
                    background:#0b1220;
                    color:white;
                    outline:none;
                    text-align:center;
                    font-size:14px;
                "
            >

            <button
                id="nameButton"
                style="
                    width:100%;
                    margin-top:14px;
                    padding:15px;
                    border:0;
                    border-radius:12px;
                    background:linear-gradient(135deg,#7181ff,#9b6cff);
                    color:white;
                    font-weight:bold;
                    cursor:pointer;
                "
            >
                CONTINUE >
            </button>

        </div>
    `;

    document.body.appendChild(box);

    const input = document.getElementById("nameBox");
    const button = document.getElementById("nameButton");

    input.focus();

    function enterSite() {

        const name = input.value.trim();

        if (name === "") {
            input.focus();
            return;
        }

        localStorage.setItem("ieltsUserName", name);

        box.remove();

       const header = document.querySelector("header p");

if (header) {
    header.textContent =
        "TEMUR'S COMMAND CENTER";
}
    }

    button.onclick = enterSite;

    input.onkeydown = function(event) {

        if (event.key === "Enter") {
            enterSite();
        }

    };

}, 500);
setTimeout(function () {

    const title = document.querySelector("header h1");

    if (title) {
        title.textContent = "TEMUR'S COMMAND CENTER";
    }

}, 600);
// =========================================
// TEMUR PREMIUM HEADER
// =========================================

setTimeout(function () {

    const header = document.querySelector("header");

    if (!header) return;

    const title = header.querySelector("h1");
    const subtitle = header.querySelector("p");

    if (title) {
        title.textContent = "TEMUR'S COMMAND CENTER";
    }

    if (subtitle) {
        subtitle.textContent = "IELTS 7.0 • 25-DAY CHALLENGE";
    }


    // PERSONAL BADGE

    const badge = document.createElement("div");

    badge.className = "temur-badge";

    badge.innerHTML = `
        <div class="temur-avatar">
            T
        </div>

        <div class="temur-info">
            <span>STUDENT</span>
            <strong>TEMUR</strong>
        </div>
    `;

    header.appendChild(badge);

}, 700);
// =========================================
// DAILY WELCOME PANEL
// =========================================

setTimeout(function () {

    const main = document.querySelector("main");
    const name = localStorage.getItem("ieltsUserName") || "STUDENT";

    if (!main) return;

    const welcome = document.createElement("section");

    welcome.className = "welcome-panel";

    welcome.innerHTML = `
        <div>
            <p class="welcome-label">PERSONAL DASHBOARD</p>
            <h2>GOOD EVENING, ${name.toUpperCase()} ??</h2>
            <p class="welcome-text">
                Stay focused. Your IELTS goal is getting closer every day.
            </p>
        </div>

        <div class="welcome-target">
            <span>TARGET</span>
            <strong>IELTS 7.0</strong>
        </div>
    `;

    main.parentNode.insertBefore(welcome, main);

}, 900);
