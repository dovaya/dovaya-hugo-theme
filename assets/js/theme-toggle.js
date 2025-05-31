/**
 * @file
 * A JavaScript file for the theme toggle.
 */

(function () {
    "use strict";

    const toggleButtons = document.querySelectorAll(".theme-toggle");
    const themeIcons = document.querySelectorAll(".theme-icon");
    const body = document.body;

    // SVG Icons
    const sunIcon = `
        <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    `;

    const moonIcon = `
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    `;

    // Check local storage for theme preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeIcons.forEach((themeIcon) => {
            themeIcon.innerHTML = sunIcon;
        });
    }

    // Toggle dark mode and switch icons
    toggleButtons.forEach((toggleButton) => {
        toggleButton.addEventListener("click", () => {
            body.classList.toggle("light-mode");
            const isLightMode = body.classList.contains("light-mode");

            themeIcons.forEach((themeIcon) => {
                themeIcon.innerHTML = isLightMode ? sunIcon : moonIcon;
            });

            // Store the user's preference
            localStorage.setItem("theme", isLightMode ? "light" : "dark");
        });
    });

})();
