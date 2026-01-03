/**
 * ui.js - UI Update Functions Module
 * Handles all UI updates for questions, rationalizations, and visual feedback
 */

import {
    currentQuestionIndex,
    questionsData,
    answerRevealed,
    userAnswers,
    correctCount,
    attemptedCount
} from './state.js';
import {
    questionTextElement,
    optionsListElement,
    rationalizationPanel,
    rationalizationTextElement,
    correctAnswerDisplayElement,
    questionNumberElement,
    questionSelect,
    scoreDisplayElement,
    prevBtn,
    nextBtn
} from './dom.js';
import { handleOptionClick } from './quiz.js';

/**
 * Sets up an individual option item with proper event listeners
 */
export function setupOptionItem(li, questionId, optionIndex) {
    const input = document.createElement('input');
    const label = document.createElement('label');
    const optionLetter = String.fromCharCode(97 + optionIndex);

    input.type = 'radio';
    input.name = `question-${questionId}`;
    input.id = `q${questionId}-opt${optionIndex}`;
    input.value = optionIndex;
    input.style.marginRight = '0.8rem';
    input.disabled = false; // Ensure enabled on load

    label.htmlFor = `q${questionId}-opt${optionIndex}`;
    label.textContent = `${optionLetter}. ${questionsData[currentQuestionIndex].options[optionIndex]}`;

    // Clear potential old content safely
    while (li.firstChild) {
        li.removeChild(li.firstChild);
    }

    li.appendChild(input);
    li.appendChild(label);

    li.style.pointerEvents = 'auto';
    li.classList.remove('disabled', 'selected-answer', 'correct-answer', 'wrong-answer', 'revealed');

    // Attach listeners using the main quiz logic handler
    li.addEventListener('click', () => handleOptionClick(li, optionIndex));
    input.addEventListener('change', () => handleOptionClick(li, optionIndex));
}

/**
 * Updates the question panel UI with the current question
 */
export function updateQuestionPanelUI(question) {
    if (!question || !question.options) {
        console.error("Invalid question data for UI update:", question);
        questionTextElement.textContent = "Error displaying question.";
        // Clear options safely
        while (optionsListElement.firstChild) {
            optionsListElement.removeChild(optionsListElement.firstChild);
        }
        return;
    }

    // Clean fade-in effect for question
    questionTextElement.style.opacity = '0';
    questionTextElement.textContent = `${question.id}. ${question.question}`;

    setTimeout(() => {
        questionTextElement.style.transition = 'opacity 0.4s ease-in';
        questionTextElement.style.opacity = '1';
    }, 50);

    // Clear options safely
    while (optionsListElement.firstChild) {
        optionsListElement.removeChild(optionsListElement.firstChild);
    }

    question.options.forEach((optionText, i) => {
        const li = document.createElement('li');
        setupOptionItem(li, question.id, i);

        // Staggered animation
        li.style.opacity = '0';
        li.style.transform = 'translateX(-10px)';

        optionsListElement.appendChild(li);

        setTimeout(() => {
            li.style.transition = 'all 0.4s var(--ease-smooth)';
            li.style.opacity = '1';
            li.style.transform = 'translateX(0)';
        }, 100 + (i * 80));
    });
}

/**
 * Updates the rationalization panel UI
 */
export function updateRationalizationPanelUI(question, show) {
    if (!question) {
        console.error("Invalid question data for rationalization UI update");
        return;
    }

    rationalizationTextElement.textContent = question.rationalization;
    const correctLetter = String.fromCharCode(65 + question.correctAnswerIndex);
    correctAnswerDisplayElement.textContent = `${correctLetter}. ${question.options[question.correctAnswerIndex]}`;

    if (show) {
        rationalizationPanel.classList.add('visible');

        setTimeout(() => {
            correctAnswerDisplayElement.style.textShadow = '0 0 10px rgba(74, 158, 95, 0.5)';
            setTimeout(() => {
                correctAnswerDisplayElement.style.textShadow = 'none';
            }, 1000);
        }, 300);
    } else {
        rationalizationPanel.classList.remove('visible');
    }
}

/**
 * Updates the navigation buttons state
 */
export function updateNavButtonsUI() {
    if (questionsData.length === 0) {
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        return;
    }
    if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;
    if (nextBtn) nextBtn.disabled = currentQuestionIndex === questionsData.length - 1;
}

/**
 * Updates the navigation display (question number and select)
 */
export function updateNavigationDisplayUI(question) {
    if (!question || questionsData.length === 0) {
        questionNumberElement.textContent = `Q 0/0`;
        if (questionSelect) questionSelect.value = -1;
        return;
    }
    questionNumberElement.textContent = `Q ${question.id}/${questionsData.length}`;
    if (questionSelect && questionSelect.options.length > 0 && questionSelect.value !== currentQuestionIndex.toString()) {
        questionSelect.value = currentQuestionIndex;
    }
}

/**
 * Populates the question select dropdown
 */
export function populateSelectUI() {
    if (!questionSelect) return;

    // Clear existing options safely
    while (questionSelect.firstChild) {
        questionSelect.removeChild(questionSelect.firstChild);
    }

    if (questionsData.length === 0) {
        return;
    }

    questionSelect.disabled = false;
    questionsData.forEach((q, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `Question ${q.id}`;
        questionSelect.appendChild(option);
    });
    questionSelect.value = currentQuestionIndex; // Set initial value
}

/**
 * Applies visual styles after an answer is selected/revealed
 */
export function applyAnswerStylesUI(correctIndex, selectedIndex = -1) {
    if (!optionsListElement) return;

    optionsListElement.querySelectorAll('li').forEach((li, i) => {
        li.classList.add('disabled', 'revealed');
        const input = li.querySelector('input');
        if (input) input.disabled = true;

        if (i === correctIndex) {
            li.classList.add('correct-answer');
        } else {
            li.classList.add('wrong-answer');
        }
        // Only add 'selected-answer' if a valid selectedIndex was provided
        if (selectedIndex !== -1 && i === selectedIndex) {
            li.classList.add('selected-answer');
        }
    });
}

/**
 * Updates the score display in the navigation bar
 */
export function updateScoreUI() {
    if (questionsData.length === 0 || !scoreDisplayElement) return;

    const percentage = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;

    // Try new structure first
    const scoreValue = scoreDisplayElement.querySelector('.score-value');
    const scorePercentage = scoreDisplayElement.querySelector('.score-percentage');

    if (scoreValue && scorePercentage) {
        scoreValue.textContent = `${correctCount}/${attemptedCount}`;
        scorePercentage.textContent = `${percentage}%`;

        // Subtle animation
        scoreDisplayElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            scoreDisplayElement.style.transform = 'scale(1)';
        }, 200);
    } else {
        // Fallback to old structure
        scoreDisplayElement.textContent = `Score: ${correctCount} / ${attemptedCount} (${percentage}%)`;
    }
}