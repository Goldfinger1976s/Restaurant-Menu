function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 123 456 789";

  const address = document.createElement("p");
  address.textContent = "🏠 76 Braveheart Road, Edinburgh, Scotland";

  const location = document.createElement("img");
  location.classList.add('map');
  location.src = "images/edirest.jpg";
  location.alt = "Franciscos restaurant location";

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(location);

  return contact;
}

function loadContact() {
  const content = document.getElementById("main");
  content.classList.remove("section-center");
  content.classList.add("section-contact");
  content.textContent = "";
  content.appendChild(createContact());
}
export default loadContact;
