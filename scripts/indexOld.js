// script.js

const openFormButton = document.querySelector(".content");

const getinfo = openFormButton.querySelector(".profile__info_edit_button");
const popupImagen = document.querySelector("#popup-image");
const popupProfile = document.querySelector("#popup-profile");
const closeModalButton = popupProfile.querySelector(".popup__button-cancel");
const formElement = popupProfile.querySelector(".popup__container");
const nameProfile = document.querySelector(".profile__name");
const aboutProfile = document.querySelector(".profile__about");
const cardSection = document.querySelector("#place");
const templeteCard = document.querySelector("#card-template");

const nameInfo = popupProfile.querySelector(".popup__content-name");
const aboutInfo = popupProfile.querySelector(".popup__content-about");

/* popup card */
const buttonAddCard = document.querySelector(".profile__info-button-add");
const popupAddCard = document.querySelector("#popup-places");
const saveButtonAddCard = popupAddCard.querySelector("#create");
const inputTituloCard = popupAddCard.querySelector("#input__popup_name");
const inputUrlCard = popupAddCard.querySelector("#input-link");
const closeCancelButtonAddCard = popupAddCard.querySelector("#popup__button-cancelForm");
const srcImgPopup = popupImagen.querySelector(".popup__img");
const titleImgPopup = popupImagen.querySelector(".popup__img-title");
const closemodalImg = popupImagen.querySelector("#popup__button-cancel-imagen");
/* creamos array para mostrar las card en la pagina principal */
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

initialCards.forEach(function (item) {
  crearCard(item.name, item.link);
});
/* function que servira para crear los elemnetos de card  */
function crearCard(name, link) {
  const card = templeteCard.content
    .querySelector(".place__card")
    .cloneNode(true);
/* obtenemos la clase para insertar el nombnre */
  const cardName = card.querySelector(".place__card_content_text");
  cardName.textContent = name;
  /* obtenemos la clase de la imagen para obtener el link de la imagen y para generar el nombre del la propiedad alt */
  const cardImage = card.querySelector(".place__card_image");
  cardImage.src = link;
  cardImage.alt = `Imagen de ${name}`;  
  /* al hacer click se manda a llamar la funcion para abrir el popup */
  cardImage.addEventListener("click",function(){
    openPopupImagen(cardImage.src,cardImage.alt );
    
  })
  
  /* al ahacer click en el boton de me gusta (corazon) hace que este cambie de color */
  card.querySelector(".place__card_content_like").addEventListener("click", function(evt){
    evt.target.classList.toggle("place_card_content_like--active");
  });

  /* al hacer click en el boton de eliminar (bote de basura) hace que se elimine la card */
  card.querySelector(".place__card_trash").addEventListener("click",function(evt){
    card.remove();
  })
/* este hace que se agrege a la pantalla */
  cardSection.prepend(card);
}


/* open modal */
function handleOpenProfilePopup() {
  nameInfo.value = nameProfile.textContent;
  aboutInfo.value = aboutProfile.textContent;
  popupProfile.classList.remove("popup_opened");
  popupProfile.classList.add("mOpen");
}

/* open modal Imagen */
function openPopupImagen(link, name){
  popupImagen.classList.remove("popup_opened");
  popupImagen.classList.add("mOpen");
  srcImgPopup.src = link;
  srcImgPopup.alt = name;
  titleImgPopup.textContent = name;
}
/* constatne que sirve apara reseatear los modales */
const closeModalAll = ((classIdModal)=>{
 const classIdName = classIdModal;
  classIdName.classList.add("popup_opened");
  classIdName.classList.remove("mOpen");
})

/* close modal Imagen */
function handleOpenImagePopup() {
 closeModalAll(popupImagen);
}

/* open modal nwe form */
function handleOpenFormPlacePopup() {
  popupAddCard.classList.remove("popup_opened");
  popupAddCard.classList.add("mOpen");
}

/* cierra el modal después de dar click en el boton de guardar o de cerrar */
function handleClosePopup(){
  closeModalAll(popupAddCard);
}
/* funcion para guardar un nuevo lugar o nueva card */
function handleSaveNewPlace(evt) {
  evt.preventDefault();
  const title = inputTituloCard.value;
  const link = inputUrlCard.value;
  crearCard(title,link);
  inputTituloCard.value = "";
  inputUrlCard.value = "";
  handleClosePopup();
}
/* close modal */
function closeModal() {
  nameInfo.value = "";
  aboutInfo.value = "";
  closeModalAll(popupProfile);
  resetValidation();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = formElement.querySelector(".popup__content-name");
  let jobInput = formElement.querySelector(".popup__content-about");

  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = jobInput.value;

  closeModal();
}

formElement.addEventListener("submit", handleProfileFormSubmit);

/* addevenlistener */
getinfo.addEventListener("click", handleOpenProfilePopup);
closeModalButton.addEventListener("click", closeModal);
buttonAddCard.addEventListener("click", handleOpenFormPlacePopup);
saveButtonAddCard.addEventListener("click", handleSaveNewPlace);
closeCancelButtonAddCard.addEventListener("click",handleClosePopup);
closemodalImg.addEventListener("click",handleOpenImagePopup);

document.addEventListener("keydown",function(e){

  if(e.key === "Escape"){
    closeModal();
    handleClosePopup();
    handleOpenImagePopup();
  }else if(e.key === "Enter"){
    handleProfileFormSubmit;
    handleSaveNewPlace
    
  }
});

/* cerrar el modal click en cualquier parte del documento */
document.addEventListener("click",function(e){
  const popupclassMoladClose = e.target.classList;
  if(popupclassMoladClose.contains("mOpen")){
    closeModal();
    handleClosePopup();
    handleOpenImagePopup();
  } 
})

