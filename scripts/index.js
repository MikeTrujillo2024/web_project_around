import Section  from "./Section.js";
import { Card } from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
/* import { settingsValidator } from "./utils.js"; */
import { FormValidator } from "./FormValidator.js";

/**
 * constiene todods los fiormularios
 */
/* const formElements = document.querySelectorAll(settingsValidator.formSelector); */

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

/***
 * hacemos que se muestra los popup de imagenes
 */
const popupImage = new PopupWithImage("#popup-image");
popupImage.setEventListeners();

const handleCardClick = (link,name) =>{
  popupImage.open(link,name)
}
/**
 * mostramos los card desde un principio
 */


const cardList = new Section(
  {
  items:initialCards,
  renderer: (item)=>{
    const cardItem = new Card(item,"#card-template",handleCardClick);
    cardList.addItem(cardItem.getCreateCard());
  }
},"#place");

cardList.rendererItems();


/* initialCards.forEach((items) => {
  const cardItem = new Card(items, "#card-template");
  const cardElement = cardItem.getCreateCard();

  document.querySelector("#place").prepend(cardElement);
}); */

/* formElements.forEach((formElement) => {
  const formValid = new FormValidator(settingsValidator, formElement);
  formValid.enableValidation();
}); */
