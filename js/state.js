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

// Export all state variables and setters
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
    questionLoadTime,

    // Setters for updating state
    setCurrentQuestionIndex: (value) => { currentQuestionIndex = value; },
    setQuestionsData: (value) => { questionsData = value; },
    setAnswerRevealed: (value) => { answerRevealed = value; },
    setCurrentTheme: (value) => { currentTheme = value; },
    setVoices: (value) => { voices = value; },
    setIsSpeechCancelled: (value) => { isSpeechCancelled = value; },
    setUserAnswers: (value) => { userAnswers = value; },
    setCorrectCount: (value) => { correctCount = value; },
    setAttemptedCount: (value) => { attemptedCount = value; },
    setSessionStartTime: (value) => { sessionStartTime = value; },
    setSessionTimerInterval: (value) => { sessionTimerInterval = value; },
    setQuestionLoadTime: (value) => { questionLoadTime = value; }
};