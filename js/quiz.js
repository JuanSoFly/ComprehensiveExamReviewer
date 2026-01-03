/**
 * quiz.js - Quiz Logic Functions Module
 * Handles question loading, answer selection, and quiz flow
 */

import {
    currentQuestionIndex,
    questionsData,
    answerRevealed,
    userAnswers,
    setCurrentQuestionIndex,
    setAnswerRevealed,
    setQuestionLoadTime
} from './state.js';
import {
    questionTextElement,
    optionsListElement,
    rationalizationPanel
} from './dom.js';
import {
    updateQuestionPanelUI,
    updateRationalizationPanelUI,
    updateNavButtonsUI,
    updateNavigationDisplayUI,
    applyAnswerStylesUI,
    updateScoreUI
} from './ui.js';
import { saveScoreAndUpdateCounts } from './score.js';
import { speakRationalizationOnly, stopSpeech } from './tts.js';

/**
 * Loads a specific question by index, updating state and UI
 */
export function loadQuestion(index) {
    stopSpeech();
    setAnswerRevealed(false); // Assume not revealed initially

    if (questionsData.length === 0) {
        console.error("Cannot load question: questionsData is empty.");
        return;
    }

    if (index < 0 || index >= questionsData.length) {
        console.warn("Index out of bounds, looping:", index);
        index = (index + questionsData.length) % questionsData.length;
    }

    setCurrentQuestionIndex(index);
    const question = questionsData[currentQuestionIndex];
    const previousAnswerStatus = userAnswers[currentQuestionIndex]; // Check saved status

    // Update UI elements
    updateQuestionPanelUI(question);
    updateNavigationDisplayUI(question);
    updateNavButtonsUI();
    updateScoreUI(); // Update score display on question load

    // Restore answered state if applicable
    if (previousAnswerStatus !== null) {
        setAnswerRevealed(true);
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

    setQuestionLoadTime(Date.now());
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Handles the logic when a user clicks/selects an answer option
 */
export function handleOptionClick(selectedLiElement, selectedIndex) {
    if (answerRevealed) return; // Prevent multiple answers

    // Retrieve question data BEFORE marking as revealed
    const question = questionsData[currentQuestionIndex];
    const correctIndex = question.correctAnswerIndex;
    const isCorrect = (selectedIndex === correctIndex);

    // Mark as revealed *now*
    setAnswerRevealed(true);

    // Update Score state and save (ONLY if it's the first attempt for this question)
    if (userAnswers[currentQuestionIndex] === null) {
        saveScoreAndUpdateCounts(currentQuestionIndex, isCorrect);
    }

    // Update UI to show feedback and disable options
    applyAnswerStylesUI(correctIndex, selectedIndex); // Pass selectedIndex here

    // Show and update the rationalization panel
    updateRationalizationPanelUI(question, true);

    // Speak the rationalization and correct answer
    speakRationalizationOnly();
}

