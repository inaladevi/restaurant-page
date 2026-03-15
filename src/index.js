import loadHome from "./home.js";

function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

clearContent();
loadHome();