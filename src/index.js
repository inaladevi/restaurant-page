import loadHome from "./home.js";
import loadMenu from "./menu.js";

function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");

homeBtn.addEventListener("click", () => {
  clearContent();
  loadHome();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  loadMenu();
});

clearContent();
loadHome();