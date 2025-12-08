/**
 * script.js - Logic for the Comprehensive Exam Reviewer
 *
 * Sections:
 * 1. State Management
 * 2. DOM Element References
 * 3. Data Loading
 * 4. UI Update Functions
 * 5. Quiz Logic Functions
 * 6. Scoring Module << NEW
 * 7. Text-to-Speech (TTS) Module
 * 8. Navigation Module (Buttons, Select, Swipe)
 * 9. Theme Management
 * 10. Contact Module
 * 11. Initialization
 */

// =========================================
// 1. State Management
// =========================================
let currentQuestionIndex = 0;
let questionsData = [];
let synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();
let voices = [];
let isSpeechCancelled = false;
let answerRevealed = false;
let currentTheme = 'light';
let userAnswers = []; // Stores answer status: null (unanswered), true (correct), false (incorrect) << NEW
let correctCount = 0;   // << NEW
let attemptedCount = 0; // << NEW
const SCORE_STORAGE_KEY = 'reviewerUserAnswers'; // << NEW localStorage key


// =========================================
// 2. DOM Element References
// =========================================
// ... (keep existing references) ...
const scoreDisplayElement = document.getElementById('score-display'); // << NEW
const resetScoreBtn = document.getElementById('reset-score-btn'); // << NEW

// ... (rest of DOM references) ...
const bodyElement = document.body;
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const questionPanel = document.querySelector('.question-panel');
const rationalizationPanel = document.querySelector('.rationalization-panel');
const questionTextElement = document.getElementById('question-text');
const optionsListElement = document.getElementById('options-list');
const rationalizationTextElement = document.getElementById('rationalization-text');
const correctAnswerDisplayElement = document.getElementById('correct-answer-display');
const questionNumberElement = document.getElementById('question-number');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const questionSelect = document.getElementById('question-select');
const navigationDiv = document.querySelector('.navigation');
const voiceSelect = document.getElementById('voice-select');
const contactBtn = document.getElementById('contact-btn');
const emailLink = document.getElementById('email-link');
const contentArea = document.querySelector('.content-area'); // For swipe
const swipeIndicatorPrev = document.getElementById('swipe-indicator-prev');
const swipeIndicatorNext = document.getElementById('swipe-indicator-next');
let readQuestionBtn, readRationalizationBtn, stopSpeechBtn; // Speech buttons (defined later)

// =========================================
// 3. Data Loading
// =========================================
async function fetchQuestions() {
    try {
        const response = await fetch('questions.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        questionsData = await response.json();
        console.log("Questions loaded successfully:", questionsData.length);
        // Initialize userAnswers array based on fetched data length BEFORE initializing app
        loadScore(); // << NEW: Load score data right after fetching questions
        initializeApp(); // Initialize after data is loaded and score is potentially loaded
    } catch (error) {
        console.error("Could not fetch questions:", error);
        displayLoadingError();
    }
}

function displayLoadingError() {
    // ... (keep existing function) ...
    questionTextElement.textContent = "Error loading questions. Please check the console or try refreshing.";
    optionsListElement.innerHTML = '';
    rationalizationPanel.style.display = 'none';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    questionSelect.disabled = true;
    if (questionSelect.options.length === 0) {
        const option = document.createElement('option');
        option.textContent = "Error";
        questionSelect.appendChild(option);
    }
    // Display error in score area too
    if (scoreDisplayElement) scoreDisplayElement.textContent = "Score: Error";
}

// =========================================
// 4. UI Update Functions
// =========================================

// ... (keep setupOptionItem, updateQuestionPanelUI, updateRationalizationPanelUI, updateNavButtonsUI, updateNavigationDisplayUI, populateSelectUI) ...
function setupOptionItem(li, questionId, optionIndex) {
    const input = document.createElement('input');
    const label = document.createElement('label');
    const optionLetter = String.fromCharCode(97 + optionIndex);

    input.type = 'radio';
    input.name = `question-${questionId}`;
    input.id = `q${questionId}-opt${optionIndex}`;
    input.value = optionIndex;
    input.style.marginRight = '0.8rem';
    input.disabled = false; // Ensure enabled on load

    label.htmlFor = `q${questionId}-opt${optionIndex}`;
    label.textContent = `${optionLetter}. ${questionsData[currentQuestionIndex].options[optionIndex]}`;

    li.innerHTML = ''; // Clear potential old content
    li.appendChild(input);
    li.appendChild(label);

    li.style.pointerEvents = 'auto';
    li.classList.remove('disabled', 'selected-answer', 'correct-answer', 'wrong-answer', 'revealed');

    // Attach listeners using the main quiz logic handler
    li.addEventListener('click', () => handleOptionClick(li, optionIndex));
    input.addEventListener('change', () => handleOptionClick(li, optionIndex));
}

function updateQuestionPanelUI(question) {
    if (!question || !question.options) {
        console.error("Invalid question data for UI update:", question);
        questionTextElement.textContent = "Error displaying question.";
        optionsListElement.innerHTML = '';
        return;
    }
    questionTextElement.textContent = `${question.id}. ${question.question}`;
    optionsListElement.innerHTML = ''; // Clear previous options

    question.options.forEach((optionText, i) => {
        const li = document.createElement('li');
        setupOptionItem(li, question.id, i);
        optionsListElement.appendChild(li);
    });
}

function updateRationalizationPanelUI(question, show) {
    if (!question) {
        console.error("Invalid question data for rationalization UI update");
        return;
    }
    rationalizationTextElement.textContent = question.rationalization;
    correctAnswerDisplayElement.textContent = `${question.correctAnswerLetter}. ${question.options[question.correctAnswerIndex]}`;

    if (show) {
        rationalizationPanel.classList.add('visible');
        rationalizationPanel.style.opacity = '1';
        rationalizationPanel.style.maxHeight = '1000px'; // Needs to be large enough
    } else {
        rationalizationPanel.classList.remove('visible');
        rationalizationPanel.style.opacity = '0';
        rationalizationPanel.style.maxHeight = '0';
    }
}

function updateNavButtonsUI() {
    if (questionsData.length === 0) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === questionsData.length - 1;
}

function updateNavigationDisplayUI(question) {
    if (!question || questionsData.length === 0) {
        questionNumberElement.textContent = `Q 0/0`;
        if (questionSelect) questionSelect.value = -1;
        return;
    }
    questionNumberElement.textContent = `Q ${question.id}/${questionsData.length}`;
    if (questionSelect && questionSelect.options.length > 0 && questionSelect.value !== currentQuestionIndex.toString()) {
        questionSelect.value = currentQuestionIndex;
    }
}

function populateSelectUI() {
    questionSelect.innerHTML = ''; // Clear existing options
    if (questionsData.length === 0) {
        displayLoadingError(); // Use the error display function
        return;
    }
    questionSelect.disabled = false;
    questionsData.forEach((q, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `Question ${q.id}`;
        questionSelect.appendChild(option);
    });
    questionSelect.value = currentQuestionIndex; // Set initial value
}

/** Applies visual styles after an answer is selected/revealed. */ // <<< MODIFIED
function applyAnswerStylesUI(correctIndex, selectedIndex = -1) { // selectedIndex is optional now
    optionsListElement.querySelectorAll('li').forEach((li, i) => {
        li.classList.add('disabled', 'revealed');
        const input = li.querySelector('input');
        if (input) input.disabled = true;

        if (i === correctIndex) {
            li.classList.add('correct-answer');
        } else {
            li.classList.add('wrong-answer');
        }
        // Only add 'selected-answer' if a valid selectedIndex was provided
        if (selectedIndex !== -1 && i === selectedIndex) {
            li.classList.add('selected-answer');
        }
    });
}

/** Updates the score display in the navigation bar. */ // <<< NEW
function updateScoreUI() {
    if (!scoreDisplayElement || questionsData.length === 0) return;
    const percentage = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
    scoreDisplayElement.textContent = `Score: ${correctCount} / ${attemptedCount} (${percentage}%)`;
}


// =========================================
// 5. Quiz Logic Functions
// =========================================

/** Loads a specific question by index, updating state and UI. */ // <<< MODIFIED
function loadQuestion(index) {
    stopSpeech();
    answerRevealed = false; // Assume not revealed initially

    if (questionsData.length === 0) {
        console.error("Cannot load question: questionsData is empty.");
        return;
    }
    if (index < 0 || index >= questionsData.length) {
        console.warn("Index out of bounds, looping:", index);
        index = (index + questionsData.length) % questionsData.length;
    }

    currentQuestionIndex = index;
    const question = questionsData[currentQuestionIndex];
    const previousAnswerStatus = userAnswers[currentQuestionIndex]; // Check saved status << NEW

    // Update UI elements
    updateQuestionPanelUI(question);
    updateNavigationDisplayUI(question);
    updateNavButtonsUI();
    updateScoreUI(); // Update score display on question load

    // Restore answered state if applicable << NEW
    if (previousAnswerStatus !== null) {
        answerRevealed = true;
        // Find the index the user previously selected (if incorrect) or the correct index
        let previouslySelectedIndex = -1;
        if (previousAnswerStatus === false) {
            // Need to find which wrong answer was selected - This info isn't stored!
            // For simplicity, we won't highlight the specific wrong selection when restoring.
            // Alternative: Store the selected index instead of true/false in userAnswers.
        }
        applyAnswerStylesUI(question.correctAnswerIndex, -1); // Apply correct/wrong styles, don't mark a 'selected' one
        updateRationalizationPanelUI(question, true); // Show rationalization
    } else {
        updateRationalizationPanelUI(question, false); // Hide rationalization if unanswered
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/** Handles the logic when a user clicks/selects an answer option. */ // <<< MODIFIED
function handleOptionClick(selectedLiElement, selectedIndex) {
    if (answerRevealed) return; // Prevent multiple answers

    // Retrieve question data BEFORE marking as revealed
    const question = questionsData[currentQuestionIndex];
    const correctIndex = question.correctAnswerIndex;
    const isCorrect = (selectedIndex === correctIndex);

    // Mark as revealed *now*
    answerRevealed = true;

    // Update Score state and save (ONLY if it's the first attempt for this question) << NEW
    if (userAnswers[currentQuestionIndex] === null) {
        userAnswers[currentQuestionIndex] = isCorrect;
        attemptedCount++;
        if (isCorrect) {
            correctCount++;
        }
        saveScore(); // Save progress to localStorage
        updateScoreUI(); // Update display
    }

    // Update UI to show feedback and disable options
    applyAnswerStylesUI(correctIndex, selectedIndex); // Pass selectedIndex here

    // Show and update the rationalization panel
    updateRationalizationPanelUI(question, true);

    // Speak the rationalization and correct answer
    speakRationalizationOnly();
}

// =========================================
// 6. Scoring Module << NEW SECTION
// =========================================

/** Loads the user's previous answers from localStorage. */
function loadScore() {
    const savedAnswers = localStorage.getItem(SCORE_STORAGE_KEY);
    correctCount = 0;
    attemptedCount = 0;

    if (savedAnswers) {
        try {
            const parsedAnswers = JSON.parse(savedAnswers);
            // Basic validation: ensure it's an array and matches the number of questions
            if (Array.isArray(parsedAnswers) && parsedAnswers.length === questionsData.length) {
                userAnswers = parsedAnswers;
                // Recalculate counts based on loaded data
                userAnswers.forEach(answer => {
                    if (answer !== null) {
                        attemptedCount++;
                        if (answer === true) {
                            correctCount++;
                        }
                    }
                });
                console.log("Score loaded from localStorage.");
            } else {
                console.warn("Stored score data mismatch or invalid. Resetting score.");
                initializeScore(); // Reset if data is invalid
            }
        } catch (error) {
            console.error("Error parsing stored score data:", error, ". Resetting score.");
            initializeScore(); // Reset on parsing error
        }
    } else {
        console.log("No previous score found. Initializing score.");
        initializeScore(); // Initialize if no data found
    }
    updateScoreUI(); // Update display after loading/initializing
}

/** Saves the current userAnswers array to localStorage. */
function saveScore() {
    try {
        localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(userAnswers));
    } catch (error) {
        console.error("Error saving score to localStorage:", error);
    }
}

/** Initializes or resets the scoring state variables. */
function initializeScore() {
    userAnswers = Array(questionsData.length).fill(null);
    correctCount = 0;
    attemptedCount = 0;
}

/** Resets the score, clears storage, and refreshes the current question view. */
function resetScore() {
    // Optional: Confirm with the user
    if (!confirm("Are you sure you want to reset your score? All progress will be lost.")) {
        return;
    }

    console.log("Resetting score...");
    initializeScore(); // Reset in-memory state
    localStorage.removeItem(SCORE_STORAGE_KEY); // Clear storage
    updateScoreUI(); // Update display to 0/0

    // Reload the current question to clear visual feedback (correct/wrong styles)
    // This will re-render the options as unanswered
    loadQuestion(currentQuestionIndex);

    // Optional: Provide feedback to the user
    // alert("Score has been reset.");
}

/** Sets up the listener for the reset score button. */
function setupResetButton() {
    if (resetScoreBtn) {
        resetScoreBtn.addEventListener('click', resetScore);
    }
}


// =========================================
// 7. Text-to-Speech (TTS) Module
// =========================================
// ... (Keep all TTS functions as they were: isSpeechApiAvailable, populateVoiceList, setupSpeech, stopSpeech, speakText, startSpeaking, speakCurrentQuestionAndOptions, speakRationalizationOnly) ...
function isSpeechApiAvailable() {
    return 'speechSynthesis' in window && synth && utterance;
}

function populateVoiceList() {
    if (!isSpeechApiAvailable()) return;
    try {
        voices = synth.getVoices().sort((a, b) => a.lang.localeCompare(b.lang));
        const selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
        voiceSelect.innerHTML = '';
        let preferredVoiceIndex = -1; // Start with -1 (not found)
        const preferredVoices = ["Google US English", "Microsoft Zira - English (United States)", "Microsoft David - English (United States)", "Google UK English Female", "Google UK English Male", "Alex"]; // Prioritized list

        voices.forEach((voice, i) => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            if (voice.default) option.textContent += ' -- DEFAULT';
            option.setAttribute('data-lang', voice.lang);
            option.setAttribute('data-name', voice.name);
            voiceSelect.appendChild(option);
            // Find the first preferred voice available
            if (preferredVoiceIndex === -1 && preferredVoices.includes(voice.name)) {
                preferredVoiceIndex = i;
            }
        });

        // Use saved voice if available, else preferred, else default/first
        const savedVoiceName = localStorage.getItem('selectedVoiceName');
        let voiceToSelect = -1;

        if (savedVoiceName) {
            voiceToSelect = voices.findIndex(voice => voice.name === savedVoiceName);
        }

        if (voiceToSelect === -1) { // If saved voice not found or not set
            voiceToSelect = (selectedIndex >= 0 && selectedIndex < voices.length) ? selectedIndex : // Use previous selection if valid
                (preferredVoiceIndex !== -1) ? preferredVoiceIndex : // Else use preferred
                    voices.findIndex(voice => voice.default) !== -1 ? voices.findIndex(voice => voice.default) : // Else use default
                        0; // Else use the first voice
        }


        voiceSelect.selectedIndex = voiceToSelect >= 0 ? voiceToSelect : 0; // Fallback to 0 if all else fails

        // Save the newly selected voice immediately
        if (voiceSelect.selectedIndex >= 0 && voices.length > voiceSelect.selectedIndex) {
            const selectedVoice = voices[voiceSelect.selectedIndex];
            if (selectedVoice) {
                localStorage.setItem('selectedVoiceName', selectedVoice.name);
            }
        }

    } catch (error) {
        console.error("Error populating voice list:", error);
    }
}

function setupSpeech() {
    if (!isSpeechApiAvailable()) {
        console.warn("Speech Synthesis not supported.");
        if (voiceSelect) voiceSelect.disabled = true;
        if (voiceSelect?.previousElementSibling) voiceSelect.previousElementSibling.style.opacity = 0.5;
        // Ensure buttons don't get created or are hidden
        return;
    }

    // Create buttons only if they don't exist
    if (!readQuestionBtn && questionPanel) {
        readQuestionBtn = document.createElement('button');
        readQuestionBtn.textContent = 'Read Q+A';
        readQuestionBtn.id = 'read-question-btn';
        readQuestionBtn.classList.add('speech-button');
        const qDiv = document.createElement('div');
        qDiv.classList.add('speech-controls');
        qDiv.appendChild(readQuestionBtn);
        questionPanel.appendChild(qDiv);
        readQuestionBtn.addEventListener('click', speakCurrentQuestionAndOptions);
    }

    if (!readRationalizationBtn && rationalizationPanel) {
        readRationalizationBtn = document.createElement('button');
        readRationalizationBtn.textContent = 'Read Rationalization';
        readRationalizationBtn.id = 'read-rationalization-btn';
        readRationalizationBtn.classList.add('speech-button');
        const rDiv = document.createElement('div');
        rDiv.classList.add('speech-controls');
        rDiv.appendChild(readRationalizationBtn);
        rationalizationPanel.appendChild(rDiv);
        readRationalizationBtn.addEventListener('click', speakRationalizationOnly);
    }

    if (!stopSpeechBtn && navigationDiv) {
        stopSpeechBtn = document.createElement('button');
        stopSpeechBtn.textContent = 'Stop Speech';
        stopSpeechBtn.id = 'stop-speech-btn';
        stopSpeechBtn.classList.add('speech-button');
        const themeBtn = document.getElementById('theme-toggle-btn');
        // Insert stop button *before* the theme toggle button if possible
        if (themeBtn && themeBtn.parentNode) {
            themeBtn.parentNode.insertBefore(stopSpeechBtn, themeBtn);
        } else {
            navigationDiv.appendChild(stopSpeechBtn); // Fallback
        }
        stopSpeechBtn.addEventListener('click', stopSpeech);
    }


    // Populate voice list
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    // Listener to save selected voice
    voiceSelect.addEventListener('change', () => {
        if (voiceSelect.selectedIndex >= 0 && voices.length > voiceSelect.selectedIndex) {
            const selectedVoice = voices[voiceSelect.selectedIndex];
            if (selectedVoice) {
                localStorage.setItem('selectedVoiceName', selectedVoice.name);
            }
        }
    });
}

function stopSpeech() {
    if (isSpeechApiAvailable()) {
        isSpeechCancelled = true;
        synth.cancel();
        console.log("Speech stopped by user.");
    }
}

function speakText(text, onEndCallback = null) {
    if (!isSpeechApiAvailable()) {
        console.error("Speech synthesis not available.");
        if (onEndCallback) onEndCallback();
        return;
    }

    isSpeechCancelled = false; // Reset flag for new speech request

    // Define the actual speaking logic
    const performSpeak = () => {
        if (isSpeechCancelled) { // Check if cancelled during the timeout
            console.log("Speech cancelled before restarting.");
            isSpeechCancelled = false; // Reset for next attempt
            return;
        }
        startSpeaking(text, onEndCallback);
    };

    if (synth.speaking) {
        console.log("Cancelling previous speech for new request");
        synth.cancel(); // Cancel ongoing speech
        // Use a small delay to ensure cancel completes before starting new speech
        setTimeout(performSpeak, 150); // Slightly longer delay
    } else {
        performSpeak(); // Speak immediately if not already speaking
    }
}

function startSpeaking(text, onEndCallback) {
    if (!isSpeechApiAvailable() || isSpeechCancelled) { // Re-check availability and cancel flag
        console.log("StartSpeaking aborted (API unavailable or cancelled).");
        isSpeechCancelled = false; // Reset flag if cancelled here
        return;
    }

    try {
        const selectedOption = voiceSelect.options[voiceSelect.selectedIndex];
        const selectedVoiceName = selectedOption ? selectedOption.getAttribute('data-name') : localStorage.getItem('selectedVoiceName'); // Use saved as fallback


        utterance.text = text;
        utterance.pitch = 1;
        utterance.rate = 0.9; // Adjust rate as needed

        let voiceFound = false;
        if (selectedVoiceName) {
            const found = voices.find(voice => voice.name === selectedVoiceName);
            if (found) {
                utterance.voice = found;
                voiceFound = true;
            }
        }
        if (!voiceFound) { // Fallback if selected/saved voice isn't available
            utterance.voice = voices.find(voice => voice.default) || voices[0];
        }

        utterance.onend = () => {
            utterance.onend = null; // Clean up listener
            utterance.onerror = null;
            if (!isSpeechCancelled && onEndCallback) {
                console.log("Speech ended naturally, calling callback.");
                onEndCallback();
            } else {
                console.log("Speech end event: Cancelled or no callback.");
                isSpeechCancelled = false; // Reset flag after speech finishes or is cancelled
            }
        };

        utterance.onerror = (event) => {
            console.error('SpeechSynthesisUtterance.onerror', event);
            utterance.onend = null; // Clean up listener
            utterance.onerror = null;
            isSpeechCancelled = false; // Reset flag on error
        };

        console.log("Attempting to speak:", text.substring(0, 50) + "...");
        synth.speak(utterance);

    } catch (error) {
        console.error("Error during synth.speak:", error);
        isSpeechCancelled = false; // Reset flag on error
    }
}

function speakCurrentQuestionAndOptions() {
    if (questionsData.length === 0 || currentQuestionIndex < 0 || currentQuestionIndex >= questionsData.length) return;
    const question = questionsData[currentQuestionIndex];
    const textToRead = `Question ${question.id}. ${question.question}. Options are: ` +
        question.options.map((opt, i) => `${String.fromCharCode(97 + i)}. ${opt}`).join('. ');
    speakText(textToRead);
}

function speakRationalizationOnly() {
    if (questionsData.length === 0 || currentQuestionIndex < 0 || currentQuestionIndex >= questionsData.length) return;
    const question = questionsData[currentQuestionIndex];
    const rationalizationTextPart = `Rationalization: ${question.rationalization}.`;
    const correctAnswerTextPart = `The correct answer is ${question.correctAnswerLetter}. ${question.options[question.correctAnswerIndex]}.`;

    const readCorrectAnswerCallback = () => {
        if (!isSpeechCancelled) { // Check cancellation flag before proceeding
            speakText(correctAnswerTextPart);
        }
    };

    speakText(rationalizationTextPart, readCorrectAnswerCallback);
}

// =========================================
// 8. Navigation Module
// =========================================
// ... (Keep setupNavigationListeners and setupSwipeNavigation as they were) ...
function setupNavigationListeners() {
    // Button Listeners
    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            loadQuestion(currentQuestionIndex - 1);
            speakCurrentQuestionAndOptions();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questionsData.length - 1) {
            loadQuestion(currentQuestionIndex + 1);
            speakCurrentQuestionAndOptions();
        }
    });

    // Select Dropdown Listener
    questionSelect.addEventListener('change', (e) => {
        const selectedIndex = parseInt(e.target.value, 10);
        if (selectedIndex >= 0 && selectedIndex < questionsData.length) {
            loadQuestion(selectedIndex);
            speakCurrentQuestionAndOptions();
        }
    });

    // Swipe Navigation Setup
    setupSwipeNavigation();
}

function setupSwipeNavigation() {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let isSwiping = false;
    const minSwipeDistance = 50;
    const maxVerticalSwipe = 70; // Increased tolerance slightly

    if (!contentArea || !swipeIndicatorPrev || !swipeIndicatorNext) {
        console.error("Swipe navigation elements missing. Swipe disabled.");
        return;
    }

    contentArea.addEventListener('touchstart', (event) => {
        const touch = event.changedTouches[0];
        touchStartX = touch.screenX;
        touchStartY = touch.screenY;
        isSwiping = false;
        touchEndX = touchStartX;
        touchEndY = touchStartY;
    }, { passive: true });

    contentArea.addEventListener('touchmove', (event) => {
        const touch = event.changedTouches[0];
        touchEndX = touch.screenX;
        touchEndY = touch.screenY;

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        // Determine if horizontal swipe is intended
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 15) { // Increased threshold slightly
            isSwiping = true;
            // Show indicator based on direction and button state
            if (deltaX > 0 && !prevBtn.disabled) {
                swipeIndicatorPrev.classList.add('visible');
                swipeIndicatorNext.classList.remove('visible');
            } else if (deltaX < 0 && !nextBtn.disabled) {
                swipeIndicatorNext.classList.add('visible');
                swipeIndicatorPrev.classList.remove('visible');
            } else {
                swipeIndicatorPrev.classList.remove('visible');
                swipeIndicatorNext.classList.remove('visible');
            }
            // Optional: Prevent vertical scroll during swipe
            // event.preventDefault(); // Requires passive: false
        } else {
            // If swipe becomes vertical or stops, hide indicators
            if (isSwiping) { // Only hide if we were previously showing them
                swipeIndicatorPrev.classList.remove('visible');
                swipeIndicatorNext.classList.remove('visible');
            }
        }
    }, { passive: true }); // Set passive: false if using preventDefault

    contentArea.addEventListener('touchend', () => {
        swipeIndicatorPrev.classList.remove('visible');
        swipeIndicatorNext.classList.remove('visible');

        if (!isSwiping) return; // Not a confirmed swipe

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) >= minSwipeDistance && Math.abs(deltaY) < maxVerticalSwipe) {
            if (deltaX > 0 && !prevBtn.disabled) { // Swipe Right -> Previous
                loadQuestion(currentQuestionIndex - 1);
                speakCurrentQuestionAndOptions();
            } else if (deltaX < 0 && !nextBtn.disabled) { // Swipe Left -> Next
                loadQuestion(currentQuestionIndex + 1);
                speakCurrentQuestionAndOptions();
            }
        }
        isSwiping = false; // Reset for next touch
    });
}

// =========================================
// 9. Theme Management
// =========================================
// ... (Keep applyTheme and setupThemeToggle as they were) ...
function applyTheme(theme) {
    currentTheme = theme;
    if (theme === 'dark') {
        bodyElement.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        bodyElement.classList.remove('dark-mode');
        themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

function setupThemeToggle() {
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
}

// =========================================
// 10. Contact Module
// =========================================
// ... (Keep setupContactButton as it was) ...
function setupContactButton() {
    if (!contactBtn || !emailLink) return;

    const emailAddress = 'juanteodoro.devera@gmail.com';
    const subject = encodeURIComponent("Contact via Reviewer");
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}`;
    emailLink.href = gmailLink;
    emailLink.target = "_blank"; // Open in new tab

    contactBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior if necessary
        emailLink.classList.toggle('visible');
    });
}


// =========================================
// 11. Initialization
// =========================================

/** Initializes the application after questions are loaded. */ // <<< MODIFIED
function initializeApp() {
    if (questionsData.length === 0) {
        console.error("Initialization failed: No question data.");
        displayLoadingError();
        return;
    }
    populateSelectUI();
    setupSpeech(); // Includes populating voices
    setupNavigationListeners(); // Includes swipe
    setupResetButton(); // << NEW: Set up the reset button listener
    loadQuestion(0); // Load the first question and update UI (will also update score display initially)
}

/** Main entry point on DOMContentLoaded. */ // <<< MODIFIED
document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle(); // Set theme immediately
    setupContactButton(); // Set up contact button immediately
    fetchQuestions(); // Start loading data, which triggers loadScore and initializeApp on success
});