/**
 * session.js - Session Timer Module
 * Handles session timing and display
 */

import {
    sessionStartTime,
    sessionTimerInterval,
    setSessionStartTime,
    setSessionTimerInterval
} from './state.js';
import {
    sessionTimerElement
} from './dom.js';

/**
 * Setup session timer
 */
export function setupSessionTimer() {
    // Stop any existing timer first
    stopSessionTimer();

    setSessionStartTime(Date.now());
    updateTimerDisplay();

    const interval = setInterval(updateTimerDisplay, 1000);
    setSessionTimerInterval(interval);
}

/**
 * Update the timer display
 */
export function updateTimerDisplay() {
    if (!sessionStartTime) return;

    const elapsed = Date.now() - sessionStartTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);

    if (sessionTimerElement) {
        sessionTimerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}

/**
 * Stop the session timer
 */
export function stopSessionTimer() {
    if (sessionTimerInterval) {
        clearInterval(sessionTimerInterval);
        setSessionTimerInterval(null);
    }
}