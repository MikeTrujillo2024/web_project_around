import { Card } from "./Card.js";
import { settingsValidator } from "./utils.js";
import { FormValidator } from "./formvalidator.js";

const formElements = document.querySelectorAll(settingsValidator.formSelector);
const formValidators = [];
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

initialCards.forEach((items) => {
  const cardItem = new Card(items, "#card-template");
  const cardElement = cardItem.getCreateCard();

  document.querySelector("#place").prepend(cardElement);
});

formElements.forEach((formElement) => {
  const formValid = new FormValidator(settingsValidator, formElement);
  formValid.enableValidation();
  formValidators.push(formValid);
});
/* const formVlid = new FormValidator(settingsValidator,formElements); */
export {formValidators};
