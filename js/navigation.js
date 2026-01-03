/**
 * navigation.js - Navigation Module
 * Handles button navigation, select dropdown, and swipe gestures
 */

import {
    currentQuestionIndex,
    questionsData,
    setCurrentQuestionIndex
} from './state.js';
import {
    prevBtn,
    nextBtn,
    questionSelect,
    contentArea,
    swipeIndicatorPrev,
    swipeIndicatorNext
} from './dom.js';
import { loadQuestion } from './quiz.js';
import { speakCurrentQuestionAndOptions } from './tts.js';

/**
 * Setup navigation event listeners
 */
export function setupNavigationListeners() {
    // Button Listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                loadQuestion(currentQuestionIndex - 1);
                speakCurrentQuestionAndOptions();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentQuestionIndex < questionsData.length - 1) {
                loadQuestion(currentQuestionIndex + 1);
                speakCurrentQuestionAndOptions();
            }
        });
    }

    // Select Dropdown Listener
    if (questionSelect) {
        questionSelect.addEventListener('change', (e) => {
            const selectedIndex = parseInt(e.target.value, 10);
            if (selectedIndex >= 0 && selectedIndex < questionsData.length) {
                loadQuestion(selectedIndex);
                speakCurrentQuestionAndOptions();
            }
        });
    }

    // Swipe Navigation Setup
    setupSwipeNavigation();
}

/**
 * Setup swipe navigation functionality
 */
export function setupSwipeNavigation() {
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
            if (deltaX > 0 && prevBtn && !prevBtn.disabled) {
                swipeIndicatorPrev.classList.add('visible');
                swipeIndicatorNext.classList.remove('visible');
            } else if (deltaX < 0 && nextBtn && !nextBtn.disabled) {
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
            if (deltaX > 0 && prevBtn && !prevBtn.disabled) { // Swipe Right -> Previous
                loadQuestion(currentQuestionIndex - 1);
                speakCurrentQuestionAndOptions();
            } else if (deltaX < 0 && nextBtn && !nextBtn.disabled) { // Swipe Left -> Next
                loadQuestion(currentQuestionIndex + 1);
                speakCurrentQuestionAndOptions();
            }
        }
        isSwiping = false; // Reset for next touch
    });
}