(()=>{"use strict";const e=function(){const e=document.getElementById("main");e.classList.remove("section-center"),e.classList.add("section-home"),e.textContent="",e.appendChild(function(){console.log("Home page");const e=document.createElement("section");e.classList.add("home");const t=document.createElement("h3");t.classList.add("section-title"),t.textContent="About";const a=document.createElement("p");a.className="info",a.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis corrupti earum quisquam explicabo incidunt enim quia atque id quaerat unde neque, dolore quam, mollitia magni asperiores dolor. Ex, accusantium. Facere, impedit unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio assumenda nulla eum odit molestias sed, in necessitatibus! Deserunt dolore libero tempore reiciendis expedita facilis optio iusto, soluta repudiandae porro magnam cumque laboriosam in vel magni perferendis? Soluta labore laudantium commodi ratione quo vitae ullam sit neque cumque quisquam animi illum eaque molestiae unde explicabo, voluptatem molestias praesentium placeat ea corrupti suscipit tempora nesciunt? Porro iure fugiat facilis voluptatem distinctio saepe quidem? Dicta obcaecati provident dolor ipsa illo culpa est vel. Maiores culpa harum debitis non. Officiis voluptatum, ducimus laudantium dolorem odio asperiores! Et recusandae quo suscipit sequi aut possimus impedit dolores, enim numquam expedita laboriosam officiis? Aliquid voluptas, quae dicta rerum natus dolore et eum non nobis quaerat saepe tempore neque nulla molestias sapiente labore vero soluta in officiis aut ad! Quos veritatis non exercitationem quasi eligendi placeat explicabo perspiciatis reiciendis quas facere nihil animi doloribus a facilis distinctio, architecto minus praesentium rem dolor laboriosam. Ea totam molestias ipsam laudantium vero molestiae numquam odit at porro voluptatum qui eum cum, maiores recusandae quae ipsum aspernatur commodi et fuga corporis laboriosam debitis hic esse nesciunt. Dolorum beatae mollitia labore tenetur doloribus repellat dolorem quae cumque, ipsum ipsa pariatur voluptatum illum repudiandae.";const i=document.createElement("p");return i.className="info2",i.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis corrupti earum quisquam explicabo incidunt enim quia atque id quaerat unde neque, dolore quam, mollitia magni asperiores dolor. Ex, accusantium. Facere, impedit unde.",e.appendChild(t),e.appendChild(a),e.appendChild(i),e}())};function t(e,t,a,i){const n=document.createElement("article");n.classList.add("menu-item");const o=document.createElement("img");o.classList.add("photo"),o.src=a,o.alt=e;const s=document.createElement("h4");s.innerText=e;const c=document.createElement("h4");c.classList.add("price"),c.innerText=t;const r=document.createElement("p");r.className="item-text",r.innerText=i;const d=document.createElement("div");d.className="item-info";const l=document.createElement("header");return l.appendChild(s),l.appendChild(c),d.appendChild(l),d.appendChild(r),n.appendChild(o),n.appendChild(d),console.log(n),n}function a(e){document.querySelectorAll(".btn-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const i=document.getElementById("content");i.appendChild(function(){const e=document.createElement("header");e.classList.add("title");const t=document.createElement("h2");t.classList.add("restaurant-name"),t.setAttribute("id","restaurant-name"),t.textContent="Franciscos Restaurant";const a=document.createElement("div");return a.classList.add("underline"),e.appendChild(t),e.appendChild(a),e}()),i.appendChild(function(){const i=document.createElement("nav");i.classList.add("btn-container");const n=document.createElement("button");n.classList.add("btn-nav"),n.setAttribute("id","btn-nav"),n.textContent="Home",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(n),e())}));const o=document.createElement("button");o.classList.add("btn-nav"),o.setAttribute("id","btn-nav"),o.textContent="Menu",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(o),function(){const e=document.getElementById("main");e.classList.add("section-center"),e.textContent="",[t("buttermilk pancakes",15.99,"./images/item-1.jpeg","I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "),t("diner double",13.99,"./images/item-2.jpeg","vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "),t("godzilla milkshake",6.99,"./images/item-3.jpeg","ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."),t("country delight",20.99,"./images/item-4.jpeg","Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "),t("egg attack",22.99,"./images/item-5.jpeg","franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "),t("oreo dream",18.99,"./images/item-6.jpeg","Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"),t("bacon overflow",8.99,"./images/item-7.jpeg","carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "),t("american classic",12.99,"./images/item-8.jpeg","on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  ")].forEach((t=>{e.appendChild(t)}))}())}));const s=document.createElement("button");return s.classList.add("btn-nav"),s.setAttribute("id","btn-nav"),s.textContent="Contact",s.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(s),function(){const e=document.getElementById("main");e.classList.remove("section-center"),e.classList.add("section-contact"),e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.textContent="📞 123 456 789";const a=document.createElement("p");a.textContent="🏠 76 Braveheart Road, Edinburgh, Scotland";const i=document.createElement("img");return i.classList.add("map"),i.src="images/edirest.jpg",i.alt="Franciscos restaurant location",e.appendChild(t),e.appendChild(a),e.appendChild(i),e}())}())})),i.appendChild(n),i.appendChild(o),i.appendChild(s),i}()),i.appendChild(function(){const e=document.createElement("div");return e.classList.add("section-center"),e.setAttribute("id","main"),e}()),a(document.querySelector(".btn-nav")),e()}()})();