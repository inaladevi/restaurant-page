function loadHome() {

  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Our Restaurant";

  const description = document.createElement("p");
  description.textContent = "Best food in town. Fresh ingredients every day.";

  content.appendChild(heading);
  content.appendChild(description);

}

export default loadHome;