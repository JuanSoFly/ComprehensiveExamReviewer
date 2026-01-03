/**
 * tts.js - Text-to-Speech (TTS) Module
 * Handles all speech synthesis functionality
 */

import {
    synth,
    utterance,
    voices,
    isSpeechCancelled,
    setVoices,
    setIsSpeechCancelled
} from './state.js';
import {
    voiceSelect,
    readQuestionBtn,
    readRationalizationBtn,
    stopSpeechBtn,
    setReadQuestionBtn,
    setReadRationalizationBtn,
    setStopSpeechBtn
} from './dom.js';
import { currentQuestionIndex, questionsData } from './state.js';

/**
 * Check if speech API is available
 */
export function isSpeechApiAvailable() {
    return 'speechSynthesis' in window && synth && utterance;
}

/**
 * Populate the voice list dropdown
 */
export function populateVoiceList() {
    if (!isSpeechApiAvailable()) return;
    try {
        const voicesList = synth.getVoices().sort((a, b) => a.lang.localeCompare(b.lang));
        setVoices(voicesList);

        const selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;

        // Clear options safely
        while (voiceSelect.firstChild) {
            voiceSelect.removeChild(voiceSelect.firstChild);
        }

        let preferredVoiceIndex = -1; // Start with -1 (not found)
        const preferredVoices = ["Google US English", "Microsoft Zira - English (United States)", "Microsoft David - English (United States)", "Google UK English Female", "Google UK English Male", "Alex"]; // Prioritized list

        voicesList.forEach((voice, i) => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            if (voice.default) option.textContent += ' -- DEFAULT';
            option.setAttribute('data-lang', voice.lang);
            option.setAttribute('data-name', voice.name);
            voiceSelect.appendChild(option);
            // Find the first preferred voice available
            if (preferredVoiceIndex === -1 && preferredVoices.includes(voice.name)) {
                preferredVoiceIndex = i;
            }
        });

        // Use saved voice if available, else preferred, else default/first
        const savedVoiceName = localStorage.getItem('selectedVoiceName');
        let voiceToSelect = -1;

        if (savedVoiceName) {
            voiceToSelect = voicesList.findIndex(voice => voice.name === savedVoiceName);
        }

        if (voiceToSelect === -1) { // If saved voice not found or not set
            voiceToSelect = (selectedIndex >= 0 && selectedIndex < voicesList.length) ? selectedIndex : // Use previous selection if valid
                (preferredVoiceIndex !== -1) ? preferredVoiceIndex : // Else use preferred
                    voicesList.findIndex(voice => voice.default) !== -1 ? voicesList.findIndex(voice => voice.default) : // Else use default
                        0; // Else use the first voice
        }

        voiceSelect.selectedIndex = voiceToSelect >= 0 ? voiceToSelect : 0; // Fallback to 0 if all else fails

        // Save the newly selected voice immediately
        if (voiceSelect.selectedIndex >= 0 && voicesList.length > voiceSelect.selectedIndex) {
            const selectedVoice = voicesList[voiceSelect.selectedIndex];
            if (selectedVoice) {
                localStorage.setItem('selectedVoiceName', selectedVoice.name);
            }
        }

    } catch (error) {
        console.error("Error populating voice list:", error);
    }
}

/**
 * Setup speech synthesis functionality
 */
export function setupSpeech() {
    if (!isSpeechApiAvailable()) {
        console.warn("Speech Synthesis not supported.");
        if (voiceSelect) voiceSelect.disabled = true;
        if (voiceSelect?.previousElementSibling) voiceSelect.previousElementSibling.style.opacity = 0.5;
        return;
    }

    // Select existing buttons from HTML and set them in dom.js
    const readQuestionBtnElement = document.getElementById('read-question-btn');
    const readRationalizationBtnElement = document.getElementById('read-rationalization-btn');
    const stopSpeechBtnElement = document.getElementById('stop-speech-btn');

    if (readQuestionBtnElement) setReadQuestionBtn(readQuestionBtnElement);
    if (readRationalizationBtnElement) setReadRationalizationBtn(readRationalizationBtnElement);
    if (stopSpeechBtnElement) setStopSpeechBtn(stopSpeechBtnElement);

    // Attach event listeners
    if (readQuestionBtnElement) {
        readQuestionBtnElement.addEventListener('click', speakCurrentQuestionAndOptions);
    }
    if (readRationalizationBtnElement) {
        readRationalizationBtnElement.addEventListener('click', speakRationalizationOnly);
    }
    if (stopSpeechBtnElement) {
        stopSpeechBtnElement.addEventListener('click', stopSpeech);
    }

    // Populate voice list
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    // Listener to save selected voice
    voiceSelect.addEventListener('change', () => {
        if (voiceSelect.selectedIndex >= 0 && voices.length > voiceSelect.selectedIndex) {
            const selectedVoice = voices[voiceSelect.selectedIndex];
            if (selectedVoice) {
                localStorage.setItem('selectedVoiceName', selectedVoice.name);
            }
        }
    });
}

/**
 * Stop current speech
 */
export function stopSpeech() {
    if (isSpeechApiAvailable()) {
        setIsSpeechCancelled(true);
        synth.cancel();
        console.log("Speech stopped by user.");
    }
}

/**
 * Speak text with optional callback
 */
export function speakText(text, onEndCallback = null) {
    if (!isSpeechApiAvailable()) {
        console.error("Speech synthesis not available.");
        if (onEndCallback) onEndCallback();
        return;
    }

    setIsSpeechCancelled(false); // Reset flag for new speech request

    // Define the actual speaking logic
    const performSpeak = () => {
        if (isSpeechCancelled) { // Check if cancelled during the timeout
            console.log("Speech cancelled before restarting.");
            setIsSpeechCancelled(false); // Reset for next attempt
            return;
        }
        startSpeaking(text, onEndCallback);
    };

    if (synth.speaking) {
        console.log("Cancelling previous speech for new request");
        synth.cancel(); // Cancel ongoing speech
        // Use a small delay to ensure cancel completes before starting new speech
        setTimeout(performSpeak, 150); // Slightly longer delay
    } else {
        performSpeak(); // Speak immediately if not already speaking
    }
}

/**
 * Start speaking the text
 */
export function startSpeaking(text, onEndCallback) {
    if (!isSpeechApiAvailable() || isSpeechCancelled) { // Re-check availability and cancel flag
        console.log("StartSpeaking aborted (API unavailable or cancelled).");
        setIsSpeechCancelled(false); // Reset flag if cancelled here
        return;
    }

    try {
        const selectedOption = voiceSelect.options[voiceSelect.selectedIndex];
        const selectedVoiceName = selectedOption ? selectedOption.getAttribute('data-name') : localStorage.getItem('selectedVoiceName'); // Use saved as fallback

        utterance.text = text;
        utterance.pitch = 1;
        utterance.rate = 0.9; // Adjust rate as needed

        let voiceFound = false;
        if (selectedVoiceName) {
            const found = voices.find(voice => voice.name === selectedVoiceName);
            if (found) {
                utterance.voice = found;
                voiceFound = true;
            }
        }
        if (!voiceFound) { // Fallback if selected/saved voice isn't available
            utterance.voice = voices.find(voice => voice.default) || voices[0];
        }

        utterance.onend = () => {
            utterance.onend = null; // Clean up listener
            utterance.onerror = null;
            if (!isSpeechCancelled && onEndCallback) {
                console.log("Speech ended naturally, calling callback.");
                onEndCallback();
            } else {
                console.log("Speech end event: Cancelled or no callback.");
                setIsSpeechCancelled(false); // Reset flag after speech finishes or is cancelled
            }
        };

        utterance.onerror = (event) => {
            console.error('SpeechSynthesisUtterance.onerror', event);
            utterance.onend = null; // Clean up listener
            utterance.onerror = null;
            setIsSpeechCancelled(false); // Reset flag on error
        };

        console.log("Attempting to speak:", text.substring(0, 50) + "...");
        synth.speak(utterance);

    } catch (error) {
        console.error("Error during synth.speak:", error);
        setIsSpeechCancelled(false); // Reset flag on error
    }
}

/**
 * Speak current question and options
 */
export function speakCurrentQuestionAndOptions() {
    if (questionsData.length === 0 || currentQuestionIndex < 0 || currentQuestionIndex >= questionsData.length) return;
    const question = questionsData[currentQuestionIndex];
    const textToRead = `Question ${question.id}. ${question.question}. Options are: ` +
        question.options.map((opt, i) => `${String.fromCharCode(97 + i)}. ${opt}`).join('. ');
    speakText(textToRead);
}

/**
 * Speak rationalization only
 */
export function speakRationalizationOnly() {
    if (questionsData.length === 0 || currentQuestionIndex < 0 || currentQuestionIndex >= questionsData.length) return;
    const question = questionsData[currentQuestionIndex];
    const rationalizationTextPart = `Rationalization: ${question.rationalization}.`;
    const correctLetter = String.fromCharCode(65 + question.correctAnswerIndex);
    const correctAnswerTextPart = `The correct answer is ${correctLetter}. ${question.options[question.correctAnswerIndex]}.`;

    const readCorrectAnswerCallback = () => {
        if (!isSpeechCancelled) { // Check cancellation flag before proceeding
            speakText(correctAnswerTextPart);
        }
    };

    speakText(rationalizationTextPart, readCorrectAnswerCallback);
}