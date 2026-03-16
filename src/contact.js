import mapImg from "./images/map.png";

function loadContact() {

  const container = document.createElement("div");
  container.classList.add("contact-container");

  const title = document.createElement("h1");
  title.textContent = "Visit Us";

  const phone = document.createElement("p");
  phone.textContent = "☏ \u00A0\u00A0 (555) 123-4567";

  const address = document.createElement("p");
  address.textContent = "⚲ \u00A0\u00A0 14 Via Napoli, Little Italy";

  const hours = document.createElement("p");
  hours.textContent = "♨ \u00A0\u00A0 Open Daily — 5PM to 11PM";

  const map = document.createElement("img");
  map.src = mapImg;
  map.alt = "Restaurant Location";
  map.classList.add("map-image");

  container.appendChild(title);
  container.appendChild(phone);
  container.appendChild(address);
  container.appendChild(hours);
  container.appendChild(map);

  return container;

}

export default loadContact;