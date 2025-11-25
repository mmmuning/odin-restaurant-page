import menuList from "./menu-list.js";

const createMenuSection = (title, items) => {
  const container = document.createElement("div");
  container.classList.add("menu-list");

  const headerDiv = document.createElement("div");
  const headerText = document.createElement("h1");
  const headerLine = document.createElement("hr");

  headerText.textContent = title;
  headerDiv.append(headerText, headerLine);

  const menuCardContainer = document.createElement("div");

  items.forEach((dish) => {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");

    const menuImage = document.createElement("div");
    menuImage.classList.add("menu-img");

    menuImage.style.backgroundImage = `url(${dish.image})`;

    const menuPrice = document.createElement("p");
    menuPrice.textContent = `₱ ${dish.price}.00`;

    menuImage.append(menuPrice);

    const menuDetails = document.createElement("div");
    menuDetails.classList.add("menu-details");

    const menuName = document.createElement("h2");
    const menuDescription = document.createElement("p");

    menuName.textContent = dish.name;
    menuDescription.textContent = dish.description;

    menuDetails.append(menuName, menuDescription);
    menuCard.append(menuImage, menuDetails);
    menuCardContainer.append(menuCard);
  });

  container.append(headerDiv, menuCardContainer);
  return container;
};

const menu = () => {
  const container = document.createElement("div");
  container.classList.add("menu-container");

  container.append(
    createMenuSection("SIGNATURE DISHES", menuList.signatureDishes),
    createMenuSection("MERIENDA & DESSERTS", menuList.meriendaAndDesserts),
    createMenuSection("BEVERAGES", menuList.beverages)
  );

  return container;
};

export default menu;
