/**
 * main.js - Main Entry Point and Initialization
 * Coordinates all modules and application startup
 */

import {
    questionsData,
    setSessionStartTime,
    setSessionTimerInterval
} from './state.js';
import {
    loadingOverlay,
    resetScoreBtn
} from './dom.js';
import { fetchQuestions } from './data.js';
import { populateSelectUI } from './ui.js';
import { setupSpeech } from './tts.js';
import { setupNavigationListeners } from './navigation.js';
import { setupResetButton, performReset } from './score.js';
import { setupThemeToggle } from './theme.js';
import { setupContactButton } from './contact.js';
import { setupSessionTimer, stopSessionTimer } from './session.js';
import { setupKeyboardShortcuts, setupShortcutsGuide } from './shortcuts.js';
import { loadQuestion } from './quiz.js';

/**
 * Enhanced initialization with loading states and animations
 */
export function initializeApp() {
    if (questionsData.length === 0) {
        console.error("Initialization failed: No question data.");
        return;
    }

    // Hide loading overlay with animation
    setTimeout(() => {
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
        document.body.classList.remove('loading');
    }, 800);

    // Initialize all components
    populateSelectUI();
    setupSpeech();
    setupNavigationListeners();
    setupResetButton();
    setupSessionTimer();
    setupKeyboardShortcuts();
    setupShortcutsGuide();

    // Load first question with staggered animation
    setTimeout(() => {
        loadQuestion(0);
    }, 1000);
}

/**
 * Main entry point with enhanced font loading and animations
 */
document.addEventListener('DOMContentLoaded', () => {
    // Font loading detection
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            document.body.classList.add('fonts-loaded');
            console.log('✓ Fonts loaded');
        });
    } else {
        setTimeout(() => document.body.classList.add('fonts-loaded'), 300);
    }

    // Theme and contact setup
    setupThemeToggle();
    setupContactButton();

    // Start loading data
    fetchQuestions();
});

// Also export performReset for use in other modules if needed
export { performReset, stopSessionTimer };