/**
 * dom.js - DOM Element References Module
 * Centralized access to all DOM elements used throughout the application
 */

// Core UI elements
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
const contentArea = document.querySelector('.content-area');
const swipeIndicatorPrev = document.getElementById('swipe-indicator-prev');
const swipeIndicatorNext = document.getElementById('swipe-indicator-next');

// Score display elements
const scoreDisplayElement = document.getElementById('score-display');
const resetScoreBtn = document.getElementById('reset-score-btn');

// Speech buttons (defined later, but referenced here)
let readQuestionBtn, readRationalizationBtn, stopSpeechBtn;

// Modal elements
const confirmModal = document.getElementById('confirm-modal');
const confirmOk = document.getElementById('confirm-ok');
const confirmCancel = document.getElementById('confirm-cancel');
const confirmBackdrop = document.querySelector('.confirm-backdrop');

// Shortcuts modal elements
const shortcutsModal = document.getElementById('shortcuts-modal');
const shortcutsHelpBtn = document.getElementById('shortcuts-help-btn');
const shortcutsCloseBtn = document.getElementById('shortcuts-close');
const shortcutsBackdrop = document.querySelector('#shortcuts-modal .confirm-backdrop');

// Session timer element
const sessionTimerElement = document.getElementById('session-timer');

// Loading overlay
const loadingOverlay = document.getElementById('loading-overlay');

// Export all DOM elements
export {
    bodyElement,
    themeToggleBtn,
    questionPanel,
    rationalizationPanel,
    questionTextElement,
    optionsListElement,
    rationalizationTextElement,
    correctAnswerDisplayElement,
    questionNumberElement,
    prevBtn,
    nextBtn,
    questionSelect,
    navigationDiv,
    voiceSelect,
    contactBtn,
    emailLink,
    contentArea,
    swipeIndicatorPrev,
    swipeIndicatorNext,
    scoreDisplayElement,
    resetScoreBtn,
    readQuestionBtn,
    readRationalizationBtn,
    stopSpeechBtn,
    confirmModal,
    confirmOk,
    confirmCancel,
    confirmBackdrop,
    shortcutsModal,
    shortcutsHelpBtn,
    shortcutsCloseBtn,
    shortcutsBackdrop,
    sessionTimerElement,
    loadingOverlay
};

// Setters for speech buttons (they're initialized later)
export function setReadQuestionBtn(element) { readQuestionBtn = element; }
export function setReadRationalizationBtn(element) { readRationalizationBtn = element; }
export function setStopSpeechBtn(element) { stopSpeechBtn = element; }