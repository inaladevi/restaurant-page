function loadMenu() {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("menu-container");

  const title = document.createElement("h1");
  title.textContent = "Our Pizzas";

  container.appendChild(title);

  const pizzas = [
    {
      name: "Margherita",
      desc: "San Marzano tomatoes, fresh mozzarella, basil",
    },
    {
      name: "Marinara",
      desc: "Tomatoes, garlic, oregano, olive oil",
    },
    {
      name: "Diavola",
      desc: "Tomatoes, mozzarella, spicy salami",
    },
    {
      name: "Quattro Formaggi",
      desc: "Mozzarella, gorgonzola, parmesan, ricotta",
    },
  ];

  pizzas.forEach((pizza) => {
    const card = document.createElement("div");
    card.classList.add("pizza-card");

    const name = document.createElement("h3");
    name.textContent = pizza.name;

    const description = document.createElement("p");
    description.textContent = pizza.desc;

    card.appendChild(name);
    card.appendChild(description);

    container.appendChild(card);
  });

  content.appendChild(container);
}

export default loadMenu; 
