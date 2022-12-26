"use strict";

// Selectors:
const body = document.querySelector("body");
const sunBtn = document.getElementById("sun");
const moonBtn = document.getElementById("moon");
const figure = document.querySelector(".accaunt_info");
const figureItem = document.querySelector(".accaunt_info .triangle");

// EventListener:
moonBtn.addEventListener("click", darkMode);
sunBtn.addEventListener("click", lightMode);

// Functions:
function darkMode() {
  body.className = "dark";
  body.classList.add("dark-color");
  sunBtn.className =
    sunBtn.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
  moonBtn.className =
    moonBtn.className == "bx bx-moon" ? "bx bxs-moon" : "bx bx-moon";
  figure.classList.add("active");
}

function lightMode() {
  body.className = "light";
  sunBtn.className =
    sunBtn.className == "bx bx-sun" ? "bx bxs-sun" : "bx bx-sun";
  moonBtn.className =
    moonBtn.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
  figure.classList.remove("active");
}
