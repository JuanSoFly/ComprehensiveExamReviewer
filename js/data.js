/**
 * data.js - Data Loading Module
 * Handles fetching questions from JSON and error display
 */

import { setQuestionsData } from './state.js';
import { questionTextElement, optionsListElement, rationalizationPanel, prevBtn, nextBtn, questionSelect, scoreDisplayElement } from './dom.js';
import { initializeApp } from './main.js';
import { loadScore } from './score.js';

/**
 * Fetches questions from the JSON file
 */
export async function fetchQuestions() {
    try {
        const response = await fetch('questions.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const questions = await response.json();
        setQuestionsData(questions);
        console.log("Questions loaded successfully:", questions.length);

        // Initialize userAnswers array based on fetched data length BEFORE initializing app
        loadScore(); // Load score data right after fetching questions
        initializeApp(); // Initialize after data is loaded and score is potentially loaded
    } catch (error) {
        console.error("Could not fetch questions:", error);
        displayLoadingError();
    }
}

/**
 * Displays loading error in the UI
 */
export function displayLoadingError() {
    if (!questionTextElement) return;

    questionTextElement.textContent = "Error loading questions. Please check the console or try refreshing.";

    // Clear options list safely
    while (optionsListElement.firstChild) {
        optionsListElement.removeChild(optionsListElement.firstChild);
    }

    rationalizationPanel.style.display = 'none';

    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    if (questionSelect) questionSelect.disabled = true;

    if (questionSelect && questionSelect.options.length === 0) {
        const option = document.createElement('option');
        option.textContent = "Error";
        questionSelect.appendChild(option);
    }

    // Display error in score area too
    if (scoreDisplayElement) {
        const scoreValue = scoreDisplayElement.querySelector('.score-value');
        const scorePercentage = scoreDisplayElement.querySelector('.score-percentage');
        if (scoreValue && scorePercentage) {
            scoreValue.textContent = "Error";
            scorePercentage.textContent = "";
        } else {
            scoreDisplayElement.textContent = "Score: Error";
        }
    }
}