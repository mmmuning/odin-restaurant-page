import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

(() => {
  const navButtons = document.querySelectorAll(".nav-btn");
  const divContent = document.querySelector("#content");

  const tabs = [home, menu, contact];

  let currentTab = tabs[0]();
  divContent.appendChild(currentTab);

  navButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (currentTab) divContent.removeChild(currentTab);

      //button.classList.add("active");

      currentTab = tabs[index]();
      divContent.appendChild(currentTab);
    });
  });
})();
