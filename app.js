//Selectors

const aboutUs = document.querySelector(".btn-about");
const contactUs = document.querySelector(".btn-contact");

const inicio = document.querySelector(".inicio");
const sobre = document.querySelector(".sobre");
const suporte = document.querySelector(".suporte");

document.getElementById("radio1").checked = true;

//counter

let count = 1;
setInterval(function () {
  nextImage();
}, 5000);

//Event Listening

aboutUs.addEventListener("click", moveAbout);
contactUs.addEventListener("click", moveContact);
inicio.addEventListener("click", moveInicio);
sobre.addEventListener("click", moveContact);
suporte.addEventListener("click", moveContact);

//Functions

function moveInicio() {
  window.scrollTo(0, 0);
}

function nextImage() {
  count++;

  if (count > 4) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
