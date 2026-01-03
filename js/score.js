/**
 * score.js - Scoring Module
 * Handles score management, localStorage persistence, and reset functionality
 */

import {
    userAnswers,
    correctCount,
    attemptedCount,
    SCORE_STORAGE_KEY,
    questionsData,
    setUserAnswers,
    setCorrectCount,
    setAttemptedCount
} from './state.js';
import { updateScoreUI } from './ui.js';
import { loadQuestion, handleOptionClick } from './quiz.js';
import { currentQuestionIndex } from './state.js';
import { resetScoreBtn } from './dom.js';
import { setupSessionTimer } from './session.js';

/**
 * Loads the user's previous answers from localStorage
 */
export function loadScore() {
    const savedAnswers = localStorage.getItem(SCORE_STORAGE_KEY);
    let localCorrectCount = 0;
    let localAttemptedCount = 0;

    if (savedAnswers) {
        try {
            const parsedAnswers = JSON.parse(savedAnswers);
            // Basic validation: ensure it's an array and matches the number of questions
            if (Array.isArray(parsedAnswers) && parsedAnswers.length === questionsData.length) {
                setUserAnswers(parsedAnswers);
                // Recalculate counts based on loaded data
                parsedAnswers.forEach(answer => {
                    if (answer !== null) {
                        localAttemptedCount++;
                        if (answer === true) {
                            localCorrectCount++;
                        }
                    }
                });
                setCorrectCount(localCorrectCount);
                setAttemptedCount(localAttemptedCount);
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

/**
 * Saves the current userAnswers array to localStorage
 */
export function saveScore() {
    try {
        localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(userAnswers));
    } catch (error) {
        console.error("Error saving score to localStorage:", error);
    }
}

/**
 * Initializes or resets the scoring state variables
 */
export function initializeScore() {
    setUserAnswers(Array(questionsData.length).fill(null));
    setCorrectCount(0);
    setAttemptedCount(0);
}

/**
 * Saves score and updates counts for a specific answer
 * @param {number} questionIndex - The index of the question answered
 * @param {boolean} isCorrect - Whether the answer was correct
 */
export function saveScoreAndUpdateCounts(questionIndex, isCorrect) {
    // Update userAnswers array
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = isCorrect;
    setUserAnswers(updatedAnswers);

    // Update counts
    const newAttemptedCount = attemptedCount + 1;
    const newCorrectCount = isCorrect ? correctCount + 1 : correctCount;
    setAttemptedCount(newAttemptedCount);
    setCorrectCount(newCorrectCount);

    // Save to localStorage
    saveScore();

    // Update UI
    updateScoreUI();
}

/**
 * Shows the custom confirmation modal
 */
export function showConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) {
        modal.style.display = '';
        modal.classList.add('visible');
    }
}

/**
 * Hides the custom confirmation modal
 */
export function hideConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) {
        modal.classList.remove('visible');
        modal.style.display = 'none';
    }
}

/**
 * Performs the actual score reset after confirmation
 */
export function performReset() {
    console.log("Resetting score...");
    initializeScore(); // Reset in-memory state
    localStorage.removeItem(SCORE_STORAGE_KEY); // Clear storage
    updateScoreUI(); // Update display to 0/0

    // Reset session timer
    setupSessionTimer();

    // Reload the current question to clear visual feedback (correct/wrong styles)
    loadQuestion(currentQuestionIndex);

    hideConfirmModal();
}

/**
 * Sets up the listener for the reset score button and modal
 */
export function setupResetButton() {
    if (!resetScoreBtn) return;

    const confirmOk = document.getElementById('confirm-ok');
    const confirmCancel = document.getElementById('confirm-cancel');
    const backdrop = document.querySelector('.confirm-backdrop');

    if (resetScoreBtn) {
        resetScoreBtn.addEventListener('click', showConfirmModal);
    }
    if (confirmOk) {
        confirmOk.addEventListener('click', performReset);
    }
    if (confirmCancel) {
        confirmCancel.addEventListener('click', hideConfirmModal);
    }
    if (backdrop) {
        backdrop.addEventListener('click', hideConfirmModal);
    }
}