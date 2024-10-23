// ==UserScript==
// @name        Bypass Key System
// @homepageURL https://discord.gg/gFNAH7WNZj
// @namespace   https://greasyfork.org/en/scripts/493960-arceus-bypass
// @version     2.5.8
// @description Bypass Arceus, Hydrogen, Delta, Trigon, Vegax, Codex, Linkvertise, panda, etc,...
// @author      Bacon But Pro
// @match       https://*/*
// @icon        https://cdn141.picsart.com/351217840073211.png
// @downloadURL https://github.com/BaconButPro/ron12373/raw/Premium/Install-Userscript/Bypass.user.js
// @updateURL https://github.com/BaconButPro/ron12373/raw/Premium/Install-Userscript/Bypass.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Function to create a notification box with cool animations
    function createNotification(message, duration = 20000) {
        const box = document.createElement('div');
        box.style.position = 'fixed';
        box.style.bottom = '20px';
        box.style.right = '-300px'; // Start off-screen
        box.style.padding = '15px';
        box.style.backgroundColor = '#444';
        box.style.color = '#fff';
        box.style.fontSize = '14px';
        box.style.borderRadius = '5px';
        box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        box.style.zIndex = '9999';
        box.style.opacity = '0'; // Start hidden
        box.style.transform = 'scale(0.8)'; // Start smaller
        box.innerHTML = `<strong>Make by Bacon But Pro:</strong> ${message}`;

        // Add keyframe animation styles
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes bounceIn {
                0% { transform: scale(0.8); opacity: 0; right: -300px; }
                50% { transform: scale(1.1); right: 20px; opacity: 1; }
                100% { transform: scale(1); }
            }
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            @keyframes slideOutShrink {
                0% { opacity: 1; right: 20px; transform: scale(1); }
                100% { opacity: 0; right: -300px; transform: scale(0.8); }
            }
        `;
        document.head.appendChild(style);

        // Append the box to the body
        document.body.appendChild(box);

        // Trigger the bounce-in animation
        setTimeout(() => {
            box.style.opacity = '1';
            box.style.right = '20px'; // Slide in
            box.style.transform = 'scale(1)';
            box.style.animation = 'bounceIn 0.8s ease-out, pulse 1.5s ease-in-out infinite 1.2s'; // Bounce and pulse
        }, 100);

        // Remove the box with slide-out and shrink animation after the specified duration
        setTimeout(() => {
            box.style.animation = 'slideOutShrink 0.8s ease-in';
            setTimeout(() => {
                box.remove();
            }, 800); // Matches the slide-out animation time
        }, duration);
    }

    // Example usage: show a notification
    createNotification('https://discord.gg/baconbutpro', 5000);

})();
