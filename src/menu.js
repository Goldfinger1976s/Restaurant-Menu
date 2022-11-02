function loadMenu() {
  const content = document.getElementById("main");
  content.classList.add("section-center");
  content.textContent = "";

  const menuFood = [
    createMenu(
      "buttermilk pancakes",
      15.99,
      "./images/item-1.jpeg",
      `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
    ),
    createMenu(
      "diner double",
      13.99,
      "./images/item-2.jpeg",
      `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
    ),
    createMenu(
      "godzilla milkshake",
      6.99,
      "./images/item-3.jpeg",
      `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
    ),
    createMenu(
      "country delight",
      20.99,
      "./images/item-4.jpeg",
      `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
    ),
    createMenu(
      "egg attack",
      22.99,
      "./images/item-5.jpeg",
      `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
    ),
    createMenu(
      "oreo dream",
      18.99,
      "./images/item-6.jpeg",
      `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
    ),
    createMenu(
      "bacon overflow",
      8.99,
      "./images/item-7.jpeg",
      `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
    ),
    createMenu(
      "american classic",
      12.99,
      "./images/item-8.jpeg",
      `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
    ),
  ];

  menuFood.forEach((food) => {
    content.appendChild(food);
  });
}

function createMenu(title, price, img, desc) {

  const menu = document.createElement("article");
  menu.classList.add("menu-item");

  const foodImage = document.createElement("img");
  foodImage.classList.add("photo");
  foodImage.src = img;
  foodImage.alt = title;

  const foodName = document.createElement("h4");
  foodName.innerText = title;

  const foodPrice = document.createElement("h4");
  foodPrice.classList.add('price');
  foodPrice.innerText = price;

  const foodDesc = document.createElement("p");
  foodDesc.className = "item-text";
  foodDesc.innerText = desc;

  const itemInfo = document.createElement("div");
  itemInfo.className = "item-info";

  const menuHeader = document.createElement("header");
  menuHeader.appendChild(foodName);
  menuHeader.appendChild(foodPrice);
  itemInfo.appendChild(menuHeader);
  itemInfo.appendChild(foodDesc);

  menu.appendChild(foodImage);
  menu.appendChild(itemInfo);

  console.log(menu);

  return menu;
}

export default loadMenu;
