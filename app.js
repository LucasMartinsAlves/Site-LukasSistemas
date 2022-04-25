//Selectors

const aboutUs = document.querySelector(".btn-about");
const contactUs = document.querySelector(".btn-contact");

//Event Listening

aboutUs.addEventListener("click", moveAbout);
contactUs.addEventListener("click", moveContact);

//Functions

function moveAbout() {
  window.scrollTo(0, 948);
}

function moveContact() {
  window.scrollTo(0, 1452);
}
