/**
 * 
 */

"use strict";

/** LIGHT & DARK MODE */

const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {

    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);

}

$themeBtn.addEventListener("click", changeTheme);

/**
 * TAB
 */

const $tabBtn = document.querySelectorAll("[data-tab-btn]");
const $tabContents = document.querySelectorAll("[data-tab-content]");
let lastActiveTab = $tabContents[0]; // Initialize the first tab as active by default
let lastActiveTabBtn = $tabBtn[0]; // Initialize the first button as active by default

$tabBtn.forEach(item => {
    item.addEventListener("click", function () {
        // Remove 'active' class from the last active tab and button
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        // Get the corresponding tab content for the clicked button
        const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        $tabContent.classList.add("active");
        this.classList.add("active");

        // Update the last active tab and button to the current ones
        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});