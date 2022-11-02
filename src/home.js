function createHome() {
  console.log("Home page");

  const about = document.createElement("section");
  about.classList.add("home");

  const title = document.createElement("h3");
  title.classList.add("section-title");
  title.textContent = "About";

  const info = document.createElement("p");
  info.className = "info";
  info.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis corrupti earum quisquam explicabo incidunt enim quia atque id quaerat unde neque, dolore quam, mollitia magni asperiores dolor. Ex, accusantium. Facere, impedit unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio assumenda nulla eum odit molestias sed, in necessitatibus! Deserunt dolore libero tempore reiciendis expedita facilis optio iusto, soluta repudiandae porro magnam cumque laboriosam in vel magni perferendis? Soluta labore laudantium commodi ratione quo vitae ullam sit neque cumque quisquam animi illum eaque molestiae unde explicabo, voluptatem molestias praesentium placeat ea corrupti suscipit tempora nesciunt? Porro iure fugiat facilis voluptatem distinctio saepe quidem? Dicta obcaecati provident dolor ipsa illo culpa est vel. Maiores culpa harum debitis non. Officiis voluptatum, ducimus laudantium dolorem odio asperiores! Et recusandae quo suscipit sequi aut possimus impedit dolores, enim numquam expedita laboriosam officiis? Aliquid voluptas, quae dicta rerum natus dolore et eum non nobis quaerat saepe tempore neque nulla molestias sapiente labore vero soluta in officiis aut ad! Quos veritatis non exercitationem quasi eligendi placeat explicabo perspiciatis reiciendis quas facere nihil animi doloribus a facilis distinctio, architecto minus praesentium rem dolor laboriosam. Ea totam molestias ipsam laudantium vero molestiae numquam odit at porro voluptatum qui eum cum, maiores recusandae quae ipsum aspernatur commodi et fuga corporis laboriosam debitis hic esse nesciunt. Dolorum beatae mollitia labore tenetur doloribus repellat dolorem quae cumque, ipsum ipsa pariatur voluptatum illum repudiandae.";

    const info2 = document.createElement("p");
    info2.className = "info2";
    info2.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis corrupti earum quisquam explicabo incidunt enim quia atque id quaerat unde neque, dolore quam, mollitia magni asperiores dolor. Ex, accusantium. Facere, impedit unde.";

  about.appendChild(title);
  about.appendChild(info);
  about.appendChild(info2);

  return about;
}

function loadHome() {
  const content = document.getElementById("main");
  content.classList.remove("section-center");
  content.classList.add("section-home");
  content.textContent = "";
  content.appendChild(createHome());
}

export default loadHome;
