// Select all triggers and buttons
const triggers = document.querySelectorAll(".sublist-trigger");

// Add event listeners to each trigger button
triggers.forEach((trigger) => {
  trigger.addEventListener("click", function (event) {

    const menu = trigger.nextElementSibling;
    const isOpen = (menu.getAttribute('aria-expanded')) === "true";

    menu.setAttribute(
      "aria-expanded",
      isOpen ? "false" : "true"
    );
  });
});

