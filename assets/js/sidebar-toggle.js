const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".container-sidebar");
const main = document.querySelector(".container-main");
const links = document.querySelectorAll(".container-sidebar a");

function closeOnESC(e) {
  if (e.key === "Escape") {
    setNav(false);
  }
}

function setNav(open) {
  toggle.setAttribute("aria-expanded", open);
  sidebar.setAttribute("aria-hidden", !open);

  document.body[open ? "addEventListener" : "removeEventListener"](
    "keydown",
    closeOnESC
  );
}

toggle.addEventListener("click", (e) => {
  e.preventDefault();

  const open = toggle.getAttribute("aria-expanded") !== "true";
  setNav(open);
});

main.addEventListener("click", () => {
  if (toggle.getAttribute("aria-expanded") === "true") {
    setNav(false);
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => setNav(false));
});