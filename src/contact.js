function loadContact() {

  const container = document.createElement("div");
  container.classList.add("contact-container");

  const title = document.createElement("h1");
  title.textContent = "Visit Us";

  const phone = document.createElement("p");
  phone.textContent = "☏ (555) 123-4567";

  const address = document.createElement("p");
  address.textContent = "⚲ 14 Via Napoli, Little Italy";

  const hours = document.createElement("p");
  hours.textContent = "♨ Open Daily — 5PM to 11PM";

  container.appendChild(title);
  container.appendChild(phone);
  container.appendChild(address);
  container.appendChild(hours);

  return container;

}

export default loadContact;