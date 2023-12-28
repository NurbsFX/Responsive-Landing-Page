// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;
var header;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
  header = document.querySelector("header");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Mise à jour des couleurs du header en fonction du thème
  if (dark) {
    header.style.backgroundColor = "#f1f8fc"; 
    // Autres styles pour le mode sombre
  } else {
    header.style.backgroundColor = "#1b002b";
    // Autres styles pour le mode clair
  }

  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
    // Mise à jour des variables CSS pour le reste de la page
    document.documentElement.style.setProperty("--mainColor", "#9D4EDD");
    document.documentElement.style.setProperty("--hoverColor", "#9D4EDD");
    document.documentElement.style.setProperty("--backgroundColor", "#1b002b");
    document.documentElement.style.setProperty("--darkOne", "#f3f3f3");
    document.documentElement.style.setProperty("--darkTwo", "#fff");
    document.documentElement.style.setProperty("--lightOne", "#ccc");
    document.documentElement.style.setProperty("--lightTwo", "#e7e3e3");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
    // Mise à jour des variables CSS pour le reste de la page
    document.documentElement.style.setProperty("--mainColor", "#5A189A");
    document.documentElement.style.setProperty("--hoverColor", "#7B2CBF");
    document.documentElement.style.setProperty("--backgroundColor", "#f1f8fc");
    document.documentElement.style.setProperty("--darkOne", "#10002B");
    document.documentElement.style.setProperty("--darkTwo", "#240046");
    document.documentElement.style.setProperty("--lightOne", "#919191");
    document.documentElement.style.setProperty("--lightTwo", "#aaa");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();
