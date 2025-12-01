// Global state
let ALL_QUESTIONS = {}; // { categoryName: [QuestionObjects] }
let SELECTED_CATEGORIES = [];

// Load stats from localStorage or default to 0
let savedStats = JSON.parse(localStorage.getItem('quiz_stats'));
let STATS = {
    questions: 0,
    totalPoints: 0,      // Sum of all points earned
    maxPoints: 0         // Maximum possible points (questions * 5)
};

// Migrate old format or use saved stats
if (savedStats) {
    STATS.questions = savedStats.questions || 0;
    STATS.totalPoints = savedStats.totalPoints || 0;
    STATS.maxPoints = savedStats.maxPoints || 0;
}

// Session stats (reset on page reload)
let SESSION_STATS = {
    points: 0,
    maxPoints: 0
};

const SUBJECT_ALIASES = {
    "1_Teoria_sygnalow": "Teoria Sygnałów",
    "2_CPS": "Cyfrowe Przetwarzanie Sygnałów",
    "3_EE_AUE": "Elementy Elektroniczne & AUE",
    "4_SIS": "Systemy & Sygnały",
    "5_SIeci_komputerowe": "Sieci Komputerowe",
    "6_metodyka_programowania": "Metodyka Programowania",
    "7_Jezyki_programowania": "Języki Programowania",
    "8_TC_MP": "Technika Cyfrowa & Mikroprocesorowa",
    "9_RF": "Techniki Bezprzewodowe & Systemy Antenowe"
};

document.addEventListener('DOMContentLoaded', () => {
    const restartBtn = document.getElementById('restart-btn');
    restartBtn.addEventListener('click', startQuiz);
    
    // Show stats immediately
    updateStatsUI();
    
    // Auto-load on start
    fetchQuestions();
});

function updateStatsUI() {
    // Update session stats
    const sessionText = `${SESSION_STATS.points}/${SESSION_STATS.maxPoints}`;
    document.getElementById('stat-session').textContent = sessionText;
    
    console.log('updateStatsUI called:', sessionText, SESSION_STATS);
    
    // ALWAYS show stats bar
    document.getElementById('stats-bar').classList.remove('hidden');
    
    // Check if all questions in session are answered
    checkSessionComplete();
    
    // Save global stats to localStorage (for historical tracking)
    localStorage.setItem('quiz_stats', JSON.stringify(STATS));
}

function checkSessionComplete() {
    // Check if session is complete (all 3 questions answered)
    if (SESSION_STATS.maxPoints > 0 && SESSION_STATS.points >= 0) {
        const answeredCount = document.querySelectorAll('.question-card.card-done').length;
        const totalQuestions = document.querySelectorAll('.question-card').length;
        
        console.log('Session check:', {
            answeredCount,
            totalQuestions,
            points: SESSION_STATS.points,
            maxPoints: SESSION_STATS.maxPoints,
            sessionComplete: window.sessionAnimationPlayed
        });
        
        if (answeredCount === totalQuestions && totalQuestions > 0 && !window.sessionAnimationPlayed) {
            // Mark animation as played for this session
            window.sessionAnimationPlayed = true;
            
            // All questions answered - check pass/fail
            const passingScore = SESSION_STATS.maxPoints / 2; // 50% = 7.5/15
            
            console.log('Triggering animation:', SESSION_STATS.points >= passingScore ? 'PASS' : 'FAIL');
            
            if (SESSION_STATS.points >= passingScore) {
                // PASSED - show fireworks
                setTimeout(() => triggerFireworks(), 500);
            } else {
                // FAILED - show red alarm
                setTimeout(() => triggerAlarm(), 500);
            }
        }
    }
}

function startQuiz() {
    // Hide setup, show category view
    // Ensure stats are visible
    document.getElementById('setup-view').classList.remove('hidden');
    document.getElementById('loading-status').classList.add('hidden'); // Hide loading text
    document.getElementById('folder-input')?.classList.add('hidden'); // Hide input if it existed
    updateStatsUI();

    document.getElementById('questions-view').classList.add('hidden');
    document.getElementById('category-view').classList.remove('hidden');

    // Pick 4 random categories
    const allCategories = Object.keys(ALL_QUESTIONS);
    if (allCategories.length < 4) {
        alert("Za mało kategorii!");
        return;
    }

    // Shuffle and take 4
    const shuffled = allCategories.sort(() => 0.5 - Math.random());
    SELECTED_CATEGORIES = shuffled.slice(0, 4);

    renderCategorySelection();
}

function generateQuestions(categories) {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';

    // Reset session stats (always 3 questions = 15 points max)
    SESSION_STATS.points = 0;
    SESSION_STATS.maxPoints = 15; // Always 3 questions × 5 points
    window.sessionAnimationPlayed = false; // Reset animation flag
    
    console.log('=== generateQuestions called ===');
    console.log('SESSION_STATS after reset:', SESSION_STATS);
    
    // Increment global stats
    const numQuestions = categories.length; // always 3
    STATS.questions += numQuestions;
    STATS.maxPoints += numQuestions * 5;
    
    // Force update and show stats bar
    updateStatsUI();
    
    console.log('Stats bar element:', document.getElementById('stats-bar'));
    console.log('Stats bar classes:', document.getElementById('stats-bar').className);

    categories.forEach(cat => {
        const questionsList = ALL_QUESTIONS[cat];
        if (!questionsList || questionsList.length === 0) return;

        // Pick 1 random question
        const randomQ = questionsList[Math.floor(Math.random() * questionsList.length)];
        
        // Add category name to the object for display
        randomQ.categoryName = cat;

        renderQuestionCard(randomQ, questionsContainer);
    });

    // Switch views
    document.getElementById('category-view').classList.add('hidden');
    document.getElementById('questions-view').classList.remove('hidden');
}

function renderQuestionCard(q, container) {
    const card = document.createElement('div');
    card.className = 'question-card';

    // Clean up filename for display or use alias
    const subjectName = SUBJECT_ALIASES[q.categoryName] || q.categoryName.replace(/_/g, ' ');

    card.innerHTML = `
        <h3 style="margin-top:0; color:var(--text-color); border-bottom:1px solid #333; padding-bottom:10px;">
            Przedmiot: ${escapeHtml(subjectName)}
        </h3>
        <div class="meta-row">
            <div class="callout callout-topic">${escapeHtml(q.topic || 'Bez zagadnienia')}</div>
            <div class="callout callout-category">${escapeHtml(q.subcategory || 'Bez kategorii')}</div>
        </div>
        <div class="callout callout-question">${escapeHtml(q.question)}</div>
        <button class="btn reveal-btn">Pokaż odpowiedź</button>
        <div class="callout callout-answer hidden">${escapeHtml(q.answer)}</div>
        
        <div class="known-section hidden" style="margin-top: 15px;">
            <div style="background-color: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 15px; border-radius: 8px;">
                <div style="color: #10b981; font-weight: bold; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 10px;">Oceń swoją wiedzę (0-5 punktów)</div>
                <div style="display: flex; gap: 8px; margin-bottom: 10px;">
                    <button class="point-btn" data-points="0" style="flex: 1; padding: 10px; border: 2px solid #ef4444; background-color: rgba(239, 68, 68, 0.1); color: #ef4444; border-radius: 6px; font-weight: bold; cursor: pointer; transition: all 0.2s;">0</button>
                    <button class="point-btn" data-points="1" style="flex: 1; padding: 10px; border: 2px solid #f59e0b; background-color: rgba(245, 158, 11, 0.1); color: #f59e0b; border-radius: 6px; font-weight: bold; cursor: pointer; transition: all 0.2s;">1</button>
                    <button class="point-btn" data-points="2" style="flex: 1; padding: 10px; border: 2px solid #eab308; background-color: rgba(234, 179, 8, 0.1); color: #eab308; border-radius: 6px; font-weight: bold; cursor: pointer; transition: all 0.2s;">2</button>
                    <button class="point-btn" data-points="3" style="flex: 1; padding: 10px; border: 2px solid #84cc16; background-color: rgba(132, 204, 22, 0.1); color: #84cc16; border-radius: 6px; font-weight: bold; cursor: pointer; transition: all 0.2s;">3</button>
                    <button class="point-btn" data-points="4" style="flex: 1; padding: 10px; border: 2px solid #22c55e; background-color: rgba(34, 197, 94, 0.1); color: #22c55e; border-radius: 6px; font-weight: bold; cursor: pointer; transition: all 0.2s;">4</button>
                    <button class="point-btn" data-points="5" style="flex: 1; padding: 10px; border: 2px solid #10b981; background-color: rgba(16, 185, 129, 0.1); color: #10b981; border-radius: 6px; font-weight: bold; cursor: pointer; transition: all 0.2s;">5</button>
                </div>
                <div class="local-score" style="text-align: center; font-size: 0.9rem; color: #888; display: none;">
                    <span style="font-weight: bold; color: #10b981;">Wybrano: <span class="selected-points">0</span>/5 punktów</span>
                </div>
            </div>
        </div>
    `;

    const revealBtn = card.querySelector('.reveal-btn');
    const answerDiv = card.querySelector('.callout-answer');
    const knownSection = card.querySelector('.known-section');
    const pointBtns = card.querySelectorAll('.point-btn');
    const localScore = card.querySelector('.local-score');
    const selectedPointsSpan = card.querySelector('.selected-points');

    revealBtn.onclick = () => {
        if (answerDiv.classList.contains('hidden')) {
            answerDiv.classList.remove('hidden');
            knownSection.classList.remove('hidden');
            revealBtn.textContent = "Ukryj odpowiedź";
        } else {
            answerDiv.classList.add('hidden');
            knownSection.classList.add('hidden');
            revealBtn.textContent = "Pokaż odpowiedź";
        }
    };

    pointBtns.forEach(btn => {
        btn.onclick = () => {
            if (!card.classList.contains('card-done')) {
                const points = parseInt(btn.dataset.points);
                
                console.log('Button clicked:', points, 'points. Before:', SESSION_STATS);
                
                // Update both session and global stats
                SESSION_STATS.points += points;
                STATS.totalPoints += points;
                card.classList.add('card-done');
                
                console.log('After update:', SESSION_STATS);
                
                // Update UI
                pointBtns.forEach(b => {
                    b.disabled = true;
                    b.style.opacity = "0.5";
                    b.style.cursor = "default";
                });
                
                btn.style.opacity = "1";
                btn.style.transform = "scale(1.1)";
                btn.style.boxShadow = "0 0 10px currentColor";
                
                // Show local score
                selectedPointsSpan.textContent = points;
                localScore.style.display = "block";
                
                updateStatsUI();
            }
        };
    });

    container.appendChild(card);
}

// Escape function remains unchanged
function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ------------------- POPRAWKA JEST TU -------------------
async function fetchQuestions() {
    const statusEl = document.getElementById('loading-status');
    statusEl.textContent = "Łączenie z serwerem...";

    try {
        // Pobierz listę plików JSON z index.json
        const response = await fetch('pytania_json/index.json');
        if (!response.ok) throw new Error(`Błąd sieci: ${response.status}`);

        const jsonFiles = await response.json();
        if (!Array.isArray(jsonFiles) || jsonFiles.length === 0) {
            statusEl.textContent = "Nie znaleziono plików .json w folderze pytania_json/";
            return;
        }

        statusEl.textContent = `Znaleziono ${jsonFiles.length} plików. Pobieranie...`;

        let loadedCount = 0;
        ALL_QUESTIONS = {};

        for (const filename of jsonFiles) {
            // Fetch individual JSON file
            const fileRes = await fetch(`pytania_json/${filename}?t=${Date.now()}`);
            if (fileRes.ok) {
                const jsonData = await fileRes.json();
                const questions = parseMarkdown(jsonData.content);

                console.log(`Parsed ${filename}: ${questions.length} questions`);

                if (questions.length > 0) {
                    // Use filename without extension as category name
                    const categoryName = decodeURIComponent(filename.replace('.json', ''));
                    ALL_QUESTIONS[categoryName] = questions;
                    loadedCount++;
                } else {
                    console.warn(`File ${filename} has no valid questions.`);
                }
            }
        }

        statusEl.textContent = `Załadowano ${loadedCount} kategorii.`;

        // Start the flow
        if (Object.keys(ALL_QUESTIONS).length >= 4) {
            setTimeout(startQuiz, 1000); // Small delay to show success message
        } else {
            alert(`Załadowano tylko ${Object.keys(ALL_QUESTIONS).length} kategorii. Potrzeba minimum 4.`);
        }

    } catch (err) {
        console.error(err);
        statusEl.innerHTML = `Błąd ładowania: ${err.message}<br><br>
        Upewnij się, że uruchamiasz serwer z folderu <code>egzamin</code> (nie stronka!)<br>
        <code>cd .. && python3 -m http.server 8000</code>`;
    }
}
// ------------------- KONIEC POPRAWKI -------------------

function parseMarkdown(content) {
    const lines = content.split('\n');
    const questions = [];
    
    let currentTopic = null;
    let currentSubcategory = null;
    let currentQuestion = null;
    let currentAnswerLines = [];
    let collectingAnswer = false;

    // Regex patterns
    const topicRegex = /^>\[!warning\]\s*#\s*(.*)/;
    const subcatRegex = /^>>\[!danger\]\s*(?:##)?\s*(.*)/;
    const questionRegex = /^>>>\[!question\](?:-)?\s*(?:####|###)?\s*(.*)/;
    const answerStartRegex = /^>>>>\[!quote\]\s*(.*)/;
    const anyTagRegex = /^>+\[!/;

    const saveCurrentQuestion = () => {
        if (currentQuestion && currentAnswerLines.length > 0) {
            questions.push({
                topic: currentTopic,
                subcategory: currentSubcategory,
                question: currentQuestion,
                answer: currentAnswerLines.join('\n').trim()
            });
            currentAnswerLines = [];
            currentQuestion = null;
        }
    };

    for (let line of lines) {
        line = line.trim();

        // Topic
        const topicMatch = line.match(topicRegex);
        if (topicMatch) {
            currentTopic = topicMatch[1].trim();
            continue;
        }

        // Subcategory
        const subcatMatch = line.match(subcatRegex);
        if (subcatMatch) {
            currentSubcategory = subcatMatch[1].trim();
            continue;
        }

        // Question
        const questionMatch = line.match(questionRegex);
        if (questionMatch) {
            saveCurrentQuestion();
            currentQuestion = questionMatch[1].trim();
            collectingAnswer = false;
            continue;
        }

        // Answer Start
        const answerMatch = line.match(answerStartRegex);
        if (answerMatch) {
            collectingAnswer = true;
            const firstLine = answerMatch[1].trim();
            if (firstLine) currentAnswerLines.push(firstLine);
            continue;
        }

        // Answer Continuation
        if (collectingAnswer) {
            // Stop on empty line or line with only '>' characters (hierarchy spacers)
            if (line === '' || /^[>]+$/.test(line)) {
                collectingAnswer = false;
                continue;
            }

            // Check if we hit a new tag (redundant if caught above, but safe)
            if (anyTagRegex.test(line)) {
                collectingAnswer = false;
                continue; 
            }

            // It is answer text. Remove leading >>>> if present
            const cleanLine = line.replace(/^>>>>\s?/, '');
            currentAnswerLines.push(cleanLine);
        }
    }
    saveCurrentQuestion();
    return questions;
}

function renderCategorySelection() {
    const container = document.getElementById('categories-container');
    container.innerHTML = '';

    SELECTED_CATEGORIES.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        // Use alias if available, otherwise clean up the filename
        const displayName = SUBJECT_ALIASES[cat] || cat.replace(/_/g, ' ');
        card.textContent = displayName;
        card.onclick = () => rejectCategory(cat);
        container.appendChild(card);
    });
}

function rejectCategory(rejectedCat) {
    // Filter out the rejected one
    const finalCategories = SELECTED_CATEGORIES.filter(c => c !== rejectedCat);
    // Generate questions for the remaining 3
    generateQuestions(finalCategories);
}