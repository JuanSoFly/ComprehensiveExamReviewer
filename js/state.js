/**
 * state.js - State Management Module
 * Manages all application state variables and tracking
 */

// Core state variables
let currentQuestionIndex = 0;
let questionsData = [];
let answerRevealed = false;
let currentTheme = 'light';

// Speech synthesis state
let synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();
let voices = [];
let isSpeechCancelled = false;

// Scoring state
let userAnswers = []; // Stores answer status: null (unanswered), true (correct), false (incorrect)
let correctCount = 0;
let attemptedCount = 0;
const SCORE_STORAGE_KEY = 'reviewerUserAnswers';

// Session tracking
let sessionStartTime = null;
let sessionTimerInterval = null;
let questionLoadTime = null;

// Export all state variables
export {
    currentQuestionIndex,
    questionsData,
    answerRevealed,
    currentTheme,
    synth,
    utterance,
    voices,
    isSpeechCancelled,
    userAnswers,
    correctCount,
    attemptedCount,
    SCORE_STORAGE_KEY,
    sessionStartTime,
    sessionTimerInterval,
    questionLoadTime
};

// Setter functions
export function setCurrentQuestionIndex(value) { currentQuestionIndex = value; }
export function setQuestionsData(value) { questionsData = value; }
export function setAnswerRevealed(value) { answerRevealed = value; }
export function setCurrentTheme(value) { currentTheme = value; }
export function setVoices(value) { voices = value; }
export function setIsSpeechCancelled(value) { isSpeechCancelled = value; }
export function setUserAnswers(value) { userAnswers = value; }
export function setCorrectCount(value) { correctCount = value; }
export function setAttemptedCount(value) { attemptedCount = value; }
export function setSessionStartTime(value) { sessionStartTime = value; }
export function setSessionTimerInterval(value) { sessionTimerInterval = value; }
export function setQuestionLoadTime(value) { questionLoadTime = value; }