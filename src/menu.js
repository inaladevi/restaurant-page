import margheritaImg from "./images/Margherita.jpg";
import marinaraImg from "./images/Marinara.jpg";
import diavolaImg from "./images/Diavola-pizza.jpg";
import quattroImg from "./images/Quattro-Formaggi.jpg";
import primaveraImg from "./images/primavera-pizza.jpg";
import burrataImg from "./images/burrata.jpg";

function loadMenu() {

  const container = document.createElement("div");
  container.classList.add("menu-container");

  const title = document.createElement("h1");
  title.textContent = "Our Pizzas";

  const grid = document.createElement("div");
  grid.classList.add("menu-grid");

  const pizzas = [
    {
      name: "Margherita",
      desc: "San Marzano tomatoes, fresh mozzarella, basil",
      img: margheritaImg,
    },
    {
      name: "Marinara",
      desc: "Tomatoes, garlic, oregano, olive oil",
      img: marinaraImg,
    },
    {
      name: "Diavola",
      desc: "Tomatoes, mozzarella, spicy salami",
      img: diavolaImg,
    },
    {
      name: "Quattro Formaggi",
      desc: "Mozzarella, gorgonzola, parmesan, ricotta",
      img: quattroImg,
    },
    {
      name: "Primavera",
      desc: "Mozzarella, cherry tomatoes, arugula, bell peppers",
      img: primaveraImg,
    },
    {
      name: "Burrata",
      desc: "Creamy burrata cheese, cherry tomatoes, fresh basil",
      img: burrataImg,
    },
  ];

  pizzas.forEach((pizza) => {
    const card = document.createElement("div");
    card.classList.add("pizza-card");

    const image = document.createElement("img");
    image.src = pizza.img;
    image.alt = pizza.name;

    const name = document.createElement("h3");
    name.textContent = pizza.name;

    const description = document.createElement("p");
    description.textContent = pizza.desc;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);

    grid.appendChild(card);
  });

  container.appendChild(title);
  container.appendChild(grid);

  return container;
}

export default loadMenu; 
