import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.querySelector("#content");

function clearContent() {
  content.innerHTML = "";
}

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

homeBtn.addEventListener("click", () => {
  clearContent();
  const page = loadHome();
  content.appendChild(page);
});

menuBtn.addEventListener("click", () => {
  clearContent();
  const page = loadMenu();
  content.appendChild(page);

});

contactBtn.addEventListener("click", () => {
  clearContent();
  const page = loadContact();
  content.appendChild(page);
});

clearContent();
loadHome();