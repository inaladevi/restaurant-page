function loadHome() {

  const container = document.createElement("div");
  container.classList.add("home-container");

  const textBlock = document.createElement("div");
  textBlock.classList.add("home-text");

  const title = document.createElement("h1");
  title.textContent = "Kindle & Crust";

  const tagline = document.createElement("h2");
  tagline.textContent = "900 Degrees. 60 Seconds.";

  const description = document.createElement("p");
  description.textContent =
    "A soft, sourdough crust blistered by a roaring 900-degree fire, topped with hand-crushed tomatoes and fresh mozzarella that melts the moment it hits the stone.";

  textBlock.appendChild(title);
  textBlock.appendChild(tagline);
  textBlock.appendChild(description);
  container.appendChild(textBlock);

  return container;
}

export default loadHome;
