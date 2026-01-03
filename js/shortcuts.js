/**
 * shortcuts.js - Keyboard Shortcuts Module
 * Handles keyboard shortcuts and help modal
 */

import {
    prevBtn,
    nextBtn,
    shortcutsModal,
    shortcutsHelpBtn,
    shortcutsCloseBtn,
    shortcutsBackdrop
} from './dom.js';
import { answerRevealed } from './state.js';
import { showConfirmModal } from './score.js';

/**
 * Setup keyboard shortcuts
 */
export function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ignore if typing in input/select
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        switch(e.key) {
            case 'ArrowLeft':
                if (prevBtn && !prevBtn.disabled) {
                    prevBtn.click();
                    e.preventDefault();
                }
                break;
            case 'ArrowRight':
            case 'Enter':
                if (nextBtn && !nextBtn.disabled) {
                    nextBtn.click();
                    e.preventDefault();
                }
                break;
            case '1':
            case '2':
            case '3':
            case '4':
                const optionIndex = parseInt(e.key) - 1;
                selectAnswerByIndex(optionIndex);
                e.preventDefault();
                break;
            case ' ':
                if (!answerRevealed && document.querySelector('#options-list li')) {
                    const firstOption = document.querySelector('#options-list li');
                    if (firstOption) firstOption.click();
                }
                e.preventDefault();
                break;
            case 't':
                document.getElementById('theme-toggle-btn')?.click();
                break;
            case 'R':
                if (e.shiftKey) {
                    document.getElementById('reset-score-btn')?.click();
                    e.preventDefault();
                }
                break;
            case '?':
                toggleShortcutsGuide();
                e.preventDefault();
                break;
        }
    });
}

/**
 * Select answer by index (1-4)
 */
export function selectAnswerByIndex(index) {
    if (answerRevealed) return;

    const options = document.querySelectorAll('#options-list li');
    if (index >= 0 && index < options.length) {
        options[index].click();
    }
}

/**
 * Toggle shortcuts guide modal
 */
export function toggleShortcutsGuide() {
    if (!shortcutsModal) return;

    const isVisible = shortcutsModal.classList.contains('visible');
    if (isVisible) {
        shortcutsModal.classList.remove('visible');
        shortcutsModal.style.display = 'none';
    } else {
        shortcutsModal.style.display = '';
        shortcutsModal.classList.add('visible');
    }
}

/**
 * Setup shortcuts guide event listeners
 */
export function setupShortcutsGuide() {
    if (shortcutsHelpBtn) {
        shortcutsHelpBtn.addEventListener('click', toggleShortcutsGuide);
    }
    if (shortcutsCloseBtn) {
        shortcutsCloseBtn.addEventListener('click', toggleShortcutsGuide);
    }
    if (shortcutsBackdrop) {
        shortcutsBackdrop.addEventListener('click', toggleShortcutsGuide);
    }
}