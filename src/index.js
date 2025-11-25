import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

(() => {
  const nav = document.querySelector("nav");
  const divContent = document.querySelector("#content");

  const tabs = {
    home: home(),
    menu: menu(),
    contact: contact(),
  };

  let currentTab = tabs.home;
  divContent.appendChild(currentTab);

  nav.addEventListener("click", (e) => {
    let activeNav = nav.querySelector(".active");

    if (activeNav) activeNav.classList.remove("active");
    if (currentTab) divContent.removeChild(currentTab);

    e.target.classList.add("active");
    currentTab = tabs[e.target.dataset.tabName];
    divContent.appendChild(currentTab);
  });
})();
