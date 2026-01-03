/**
 * contact.js - Contact Module
 * Handles contact button and email link functionality
 */

import {
    contactBtn,
    emailLink
} from './dom.js';

/**
 * Setup contact button functionality
 */
export function setupContactButton() {
    if (!contactBtn || !emailLink) return;

    const emailAddress = 'juanteodoro.devera@gmail.com';
    const subject = encodeURIComponent("Contact via Reviewer");
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}`;
    emailLink.href = gmailLink;
    emailLink.target = "_blank"; // Open in new tab

    contactBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior if necessary
        emailLink.classList.toggle('visible');
    });
}