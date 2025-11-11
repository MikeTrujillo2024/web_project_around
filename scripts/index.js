import { Card } from "./Card.js";

/* esta seccion va para utls.js pero en un momento las pasamos */
/* open modal Imagen */
const openPopupImagen=(link, name)=>{
  popupImagen.classList.remove("popup_opened");
  popupImagen.classList.add("mOpen");
  srcImgPopup.src = link;
  srcImgPopup.alt = name;
  titleImgPopup.textContent = name;
}
/* termina utls.js */

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const cardItem = new Card(initialCards,"#card-template");
const cardElement = cardItem.getCreateCard();

document.querySelector("#place").prepend(cardElement)