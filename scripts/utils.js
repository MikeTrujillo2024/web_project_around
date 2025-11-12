const popupProfile = document.querySelector("#popup-profile");
const closeModalButton = popupProfile.querySelector(".popup__button-cancel");

const popupAddCard = document.querySelector("#popup-places");
const nameInfo = popupProfile.querySelector(".popup__content-name");
const aboutInfo = popupProfile.querySelector(".popup__content-about");
const buttonAddCard = document.querySelector(".profile__info-button-add");

const popupImagen = document.querySelector("#popup-image");
const srcImgPopup = popupImagen.querySelector(".popup__img");
const titleImgPopup = popupImagen.querySelector(".popup__img-title");
const closemodalImg = popupImagen.querySelector("#popup__button-cancel-imagen");


/* open modal Imagen */
const openPopupImagen=(link, name)=>{
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

/* close modal */
function closeModal() {
  nameInfo.value = "";
  aboutInfo.value = "";
  closeModalAll(popupProfile);
  resetValidation();
}

/* cierra el modal después de dar click en el boton de guardar o de cerrar */
function handleClosePopup(){
  closeModalAll(popupAddCard);
}

/* close modal Imagen */
function handleOpenImagePopup() {
 closeModalAll(popupImagen);
}

/* open modal nwe form */
function handleOpenFormPlacePopup() {
  popupAddCard.classList.remove("popup_opened");
  popupAddCard.classList.add("mOpen");
}

buttonAddCard.addEventListener("click", handleOpenFormPlacePopup);
closeModalButton.addEventListener("click", closeModal);
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
  const popupclassModalClose = e.target.classList;
  if(popupclassModalClose.contains("mOpen")){
    closeModal();
    handleClosePopup();
    handleOpenImagePopup();
  } 
})


export {openPopupImagen}