// This file contains the JavaScript code for the website, handling interactivity and dynamic content.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = 'Welcome to the Simple Website!';
    }

    const button = document.getElementById('clickMe');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});