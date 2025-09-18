import Typed from 'typed.js';

export function initTypingEffect() {
  const element = document.getElementById('typed-specialties');
  if (!element) return; // Exit if the element is not found

  // Configuration options for the typing effect
  const options = {
    strings: [
      'Creative Strategy',
      'Brand Development',
      'Content Direction'
    ],
    typeSpeed: 50,      // Typing speed in milliseconds
    backSpeed: 40,      // Deleting speed
    backDelay: 2000,    // Pause for 2s after typing a string
    startDelay: 500,    // Wait 0.5s before starting
    loop: true,         // Loop the animation indefinitely
    smartBackspace: false, // This ensures a clean erase every time
  };

  // Initialize Typed.js
  new Typed(element, options);
} 