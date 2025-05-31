/**
 * @file
 * A JavaScript file for the sidebar toggle.
 */

(function () {
  "use strict";

  const toggle = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".container-sidebar");
  const main = document.querySelector(".container-main");

  function navOpen() {
    sidebar.classList.add("open");
    sidebar.setAttribute("aria-hidden", "false");
    toggle.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.addEventListener("keydown", closeOnESC);
  }

  function navClose() {
    sidebar.classList.remove("open");
    sidebar.setAttribute("aria-hidden", "true");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.removeEventListener("keydown", closeOnESC);
  }

  function closeOnESC(e) {
    if (e.key === "Escape") {
      navClose();
    }
  }

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    if (sidebar.classList.contains("open")) {
      navClose();
    } else {
      navOpen();
    }
  });

  main.addEventListener("click", function (e) {
    if (sidebar.classList.contains("open")) {
      navClose();
    }
  });

  // Close the nav sidebar after click (needed for anchor links).
  const links = document.querySelectorAll(".container-sidebar a");
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      navClose();
    });
  });

  // Move focus back to button efter user tab out of last link.
  if (links.length) {
    const lastlink = [].slice.call(links).pop();
    lastlink.addEventListener("blur", () => toggle.focus());
  }
})();
