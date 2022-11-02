import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("title");

  const restaurantName = document.createElement("h2");
  restaurantName.classList.add("restaurant-name");
  restaurantName.setAttribute("id", "restaurant-name");
  restaurantName.textContent = "Franciscos Restaurant";

  const underline = document.createElement("div");
  underline.classList.add("underline");

  header.appendChild(restaurantName);
  header.appendChild(underline);

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("btn-container");
  // Create the home button
  const homeButton = document.createElement("button");
  homeButton.classList.add("btn-nav");
  homeButton.setAttribute("id", "btn-nav");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  // create the menu button
  const menuButton = document.createElement("button");
  menuButton.classList.add("btn-nav");
  menuButton.setAttribute("id", "btn-nav");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  // create the contact button
  const contactButton = document.createElement("button");
  contactButton.classList.add("btn-nav");
  contactButton.setAttribute("id", "btn-nav");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".btn-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("div");
  main.classList.add("section-center");
  main.setAttribute("id", "main");
  return main;
}

function initWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createMain());


  setActiveButton(document.querySelector(".btn-nav"));
  loadHome();
}

initWebsite();
