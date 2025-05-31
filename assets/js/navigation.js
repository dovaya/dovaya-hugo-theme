/**
 * @file
 * A JavaScript file for the navigation list dropdown trigger.
 */

(function () {
  "use strict";

  // Select all triggers and buttons
  const triggers = document.querySelectorAll(".nav__sub-list-trigger");

  // Function to close all triggers
  const closeAllTriggers = () => {
    triggers.forEach((trigger) => {
      const menu = trigger.parentElement;
      menu.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    });
  };

  // Add event listeners to each trigger button
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function (event) {
      triggers.forEach((t) => {
        if (t !== trigger) {
          const m = t.parentElement;
          m.classList.remove("open");
          m.setAttribute("aria-expanded", "false");
        }
      });

      const menu = trigger.parentElement;

      // Toggle the current trigger
      if (trigger.classList.contains("open")) {
        menu.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
      } else {
        menu.classList.toggle("open");
        menu.setAttribute("aria-expanded", "true");
      }

      // Stop propagation to prevent document click handler
      event.stopPropagation();
    });
  });

  // Close triggers when clicking outside
  document.addEventListener("click", function (e) {
    closeAllTriggers();
  });

  // Close triggers when escaping
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllTriggers();
    }
  });
})();
