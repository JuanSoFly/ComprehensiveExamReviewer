/**
 * theme.js - Theme Management Module
 * Handles light/dark theme switching and persistence
 */

import {
    currentTheme,
    setCurrentTheme
} from './state.js';
import {
    bodyElement,
    themeToggleBtn
} from './dom.js';

/**
 * Apply the specified theme
 */
export function applyTheme(theme) {
    setCurrentTheme(theme);
    if (theme === 'light') {
        bodyElement.classList.add('light-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        bodyElement.classList.remove('light-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

/**
 * Setup theme toggle functionality
 */
export function setupThemeToggle() {
    if (!themeToggleBtn) return;

    themeToggleBtn.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // Apply saved theme on load (default is dark)
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
}