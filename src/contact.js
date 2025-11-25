const createContactForm = () => {
  const formContainer = document.createElement("div");
  formContainer.classList.add("contact-form-container");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("contact-header");

  const headerTitle = document.createElement("h2");
  headerTitle.textContent = "YOUR DETAILS";

  const headerDesc = document.createElement("p");
  headerDesc.textContent = "Let us know how to get back to you";

  headerDiv.append(headerTitle, headerDesc);

  // NAME
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "NAME";
  nameLabel.htmlFor = "contact-name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "contact-name";
  nameInput.name = "name";
  nameInput.required = true;
  nameInput.placeholder = "Name";

  // EMAIL
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "EMAIL ADDRESS";
  emailLabel.htmlFor = "contact-email";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "contact-email";
  emailInput.name = "email";
  emailInput.required = true;
  emailInput.placeholder = "Email Address";

  // SUBJECT
  const subjectLabel = document.createElement("label");
  subjectLabel.textContent = "SUBJECT";
  subjectLabel.htmlFor = "contact-subject";

  const subjectInput = document.createElement("input");
  subjectInput.type = "text";
  subjectInput.id = "contact-subject";
  subjectInput.name = "subject";
  subjectInput.placeholder = "Subject";

  // MESSAGE
  const messageLabel = document.createElement("label");
  messageLabel.textContent = "MESSAGE";
  messageLabel.htmlFor = "contact-message";

  const messageTextarea = document.createElement("textarea");
  messageTextarea.id = "contact-message";
  messageTextarea.name = "message";
  messageTextarea.rows = 5;
  messageTextarea.placeholder = "Write your message here...";

  // BUTTON
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "CONTACT US";

  formContainer.append(
    headerDiv,
    nameLabel,
    nameInput,
    emailLabel,
    emailInput,
    subjectLabel,
    subjectInput,
    messageLabel,
    messageTextarea,
    submitBtn
  );

  return formContainer;
};

const contact = () => {
  const container = document.createElement("div");
  container.classList.add("contact-container");

  const leftDiv = document.createElement("div");
  const rightDiv = document.createElement("div");

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-div");
  const title = document.createElement("p");
  const logoTop = document.createElement("h1");
  const logoBottom = document.createElement("h1");
  const subtitle = document.createElement("p");
  const contactInfo = document.createElement("p");

  title.textContent = "CONTACT US";
  logoTop.textContent = "HAPAG";
  logoBottom.textContent = "HAPAG";
  subtitle.textContent =
    "We invite you to experience authentic Filipino dishes cooked with tradition and heart.";
  contactDiv.append(title, logoTop, logoBottom, subtitle);

  contactInfo.appendChild(
    document.createTextNode("Making reservation is simple, just call us at ")
  );

  const phone = document.createElement("strong");
  phone.textContent = "+63 987 654 3210";
  contactInfo.appendChild(phone);

  contactInfo.appendChild(document.createTextNode(" or email us at "));

  const email = document.createElement("strong");
  email.textContent = "hapagkainan.ph@email.com";
  contactInfo.appendChild(email);

  const contactForm = createContactForm();

  leftDiv.append(contactDiv, contactInfo);
  rightDiv.appendChild(contactForm);

  container.append(leftDiv, rightDiv);

  return container;
};

export default contact;
