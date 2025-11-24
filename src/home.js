const createHeroSection = () => {
  const heroSection = document.createElement("div");
  heroSection.classList.add("hero-section");

  const titleTop = document.createElement("h1");
  const titleBottom = document.createElement("h1");
  const subTitle = document.createElement("p");

  titleTop.textContent = "LUTONG";
  titleBottom.textContent = "BAHAY";
  subTitle.textContent = "Experience Home at Hapag Kainan";

  heroSection.append(titleTop, titleBottom, subTitle);
  return heroSection;
};

const createAboutSection = () => {
  const aboutSection = document.createElement("div");
  aboutSection.classList.add("right-section");

  const header = document.createElement("h2");
  header.textContent = "ABOUT";

  const intro = document.createElement("p");
  const story = document.createElement("p");

  intro.textContent =
    "At Hapag Kainan, we celebrate the warmth and richness of Filipino home-cooked meals.";
  story.textContent =
    "Our name comes from the Filipino words hapag (dining table) and kainan (place to eat), symbolizing a shared table, where stories, comfort, and love are served alongside every dish.";

  aboutSection.append(header, intro, story);
  return aboutSection;
};

const createOpenHoursSection = () => {
  const openHoursSection = document.createElement("div");
  openHoursSection.classList.add("right-section");

  const header = document.createElement("h2");
  header.textContent = "OPEN HOURS";

  openHoursSection.appendChild(header);

  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  for (let i = 0; i < daysOfTheWeek.length; i++) {
    const openHours = document.createElement("p");
    openHours.textContent = `${daysOfTheWeek[i]}: 8:00am - 10:00pm`;
    openHoursSection.appendChild(openHours);
  }

  return openHoursSection;
};

const createLocationSection = () => {
  const locationSection = document.createElement("div");
  locationSection.classList.add("right-section");

  const header = document.createElement("h2");
  const location = document.createElement("p");

  header.textContent = "LOCATION";
  location.textContent = "Ermita, Metro Manila, Philippines";

  locationSection.append(header, location);

  return locationSection;
};

const home = () => {
  const container = document.createElement("div");
  container.classList.add("home-container");

  const heroSection = createHeroSection();

  const rightSideBar = document.createElement("div");
  rightSideBar.classList.add("right-container");

  rightSideBar.append(
    createAboutSection(),
    createOpenHoursSection(),
    createLocationSection()
  );

  container.append(heroSection, rightSideBar);

  return container;
};

export default home;
