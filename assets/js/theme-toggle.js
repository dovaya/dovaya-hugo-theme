const toggleButtons = document.querySelectorAll(".theme-toggle");

// Toggle dark mode and switch icons
toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener("click", () => {
        const root = document.documentElement;
        const isLight = root.dataset.theme == "light";

        root.dataset.theme = isLight ? "dark" : "light";

        localStorage.setItem("theme", isLight ? "dark" : "light");
    });
});
