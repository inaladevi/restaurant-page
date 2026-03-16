import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import heroImg from "./images/pizza-hero-img-cropped.jpg";

const content = document.querySelector("#content");

function clearContent() {
  content.innerHTML = "";
}

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

homeBtn.addEventListener("click", () => {
  clearContent();
  content.appendChild(loadHome());
});

menuBtn.addEventListener("click", () => {
  clearContent();
  content.appendChild(loadMenu());

});

contactBtn.addEventListener("click", () => {
  clearContent();
  content.appendChild(loadContact());
});

clearContent();
content.appendChild(loadHome()); 

document.body.style.backgroundImage = `url(${heroImg})`;