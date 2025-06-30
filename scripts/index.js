// script.js

const openFormButton = document.querySelector(".content");
const getinfo = openFormButton.querySelector(".profile__info_edit_button");
const popupProfile = document.querySelector("#popup-profile");
const closeModalButton = popupProfile.querySelector(".popup__button-cancel");
const formElement = popupProfile.querySelector(".popup__container"); 
let nameProfile = document.querySelector(".profile__name");
let aboutProfile = document.querySelector(".profile__about");
const cardSection = document.querySelector("#place");
const templeteCard = document.querySelector("#card-template");

const nameInfo = popupProfile.querySelector(".popup__content-name");
const aboutInfo = popupProfile.querySelector(".popup__content-about");

/* creamos array para mostrar las card en la pagina principal */
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

initialCards.forEach(function(item){
  crearCard(item.name,item.link);
})
/* function que servira para crear los elemnetos de card  */
function crearCard(name,link){
  const card = templeteCard.content.querySelector(".place__card").cloneNode(true);

  const cardName = card.querySelector(".place__card_content_text");
  cardName.textContent = name;

  const cardImage = card.querySelector(".place__card_image");
  cardImage.src = link;
  cardImage.alt = `Imagen de ${name}`;


cardSection.prepend(card);
}

/* open modal */
function handleOpenProfilePopup() { 

  nameInfo.value=nameProfile.textContent;
  aboutInfo.value=aboutProfile.textContent;
 popupProfile.classList.remove("popup_opened");
}

getinfo.addEventListener("click", handleOpenProfilePopup);

/* close modal */
function closeModal(){
  nameInfo.value='';
  aboutInfo.value='';
  popupProfile.classList.add("popup_opened");
}

closeModalButton.addEventListener("click",closeModal);

function handleProfileFormSubmit(evt){
  evt.preventDefault();
  
  let nameInput = formElement.querySelector(".popup__content-name");
  let jobInput = formElement.querySelector(".popup__content-about");
  

  nameProfile.textContent = nameInput.value ;
  aboutProfile.textContent = jobInput.value  ;

  closeModal();
  
}
formElement.addEventListener('submit',handleProfileFormSubmit);