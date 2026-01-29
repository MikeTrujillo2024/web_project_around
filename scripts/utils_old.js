import { CreateCard } from "./Card.js";


let newImg = [];
/**formulario editar profile */
/* const openFormButton = document.querySelector(".content");
const getinfo = openFormButton.querySelector(".profile__info_edit_button");
const nameProfile = document.querySelector(".profile__name");
const aboutProfile = document.querySelector(".profile__about");

const popupProfile = document.querySelector("#popup-profile");
const formElement = popupProfile.querySelector(".popup__container");
const closeModalButton = popupProfile.querySelector(".popup__button-cancel");
const nameInfo = popupProfile.querySelector(".popup__content-name");
const aboutInfo = popupProfile.querySelector(".popup__content-about"); */

/**nuevo lugar  */
/* const popupAddCard = document.querySelector("#popup-places");
const buttonAddCard = document.querySelector(".profile__info-button-add");
const closeCancelButtonAddCard = popupAddCard.querySelector(
  "#popup__button-cancelForm"
); */
/* const saveButtonAddCard = popupAddCard.querySelector("#create");
const namenewImg = popupAddCard.querySelector(".popup__content-name");
const linknewImg = popupAddCard.querySelector(".popup__content-about"); */


/**form image */
/* const popupImagen = document.querySelector("#popup-image"); */
/* const srcImgPopup = popupImagen.querySelector(".popup__img");
const titleImgPopup = popupImagen.querySelector(".popup__img-title"); */
/* const closemodalImg = popupImagen.querySelector("#popup__button-cancel-imagen"); */


/** reser formularios */
const resetValidation = (modal) => {
  const formElments = modal.querySelectorAll(settingsValidator.formSelector);
  formElments.forEach((formElment) => {
    formElment.reset();
  });
};


/* imagen modal */
/* open modal Imagen */
/* const openPopupImagen = (link, name) => {
  openModal(popupImagen);
  srcImgPopup.src = link;
  srcImgPopup.alt = name;
  titleImgPopup.textContent = name;
};
 */
/**cerrar cuando se presiona x de cacelar en modal de imagen */
/* closemodalImg.addEventListener("click", () => {
  closeModalAll("popup-image");
}); */

/* new Card */
/* open modal Card */
/* buttonAddCard.addEventListener("click", () => {
  openModal(popupAddCard);
}); */

/* cerrar modal cuando se presiona x de cerrar */
/* closeCancelButtonAddCard.addEventListener("click", () => {
  closeModalAll("popup-places");
});
 */
/* cuando se presiona el boton de guardar un nuevo lugar */
/* saveButtonAddCard.addEventListener("click", function (evt) {
  evt.preventDefault();
  newImg.push({
    name: namenewImg.value,
    link: linknewImg.value,
  });

  newImg.forEach((elment) => {
    const cardAdd = new CreateCard(elment, "#card-template");
    const cardNewElement = cardAdd.getCreateCard();
    document.querySelector("#place").prepend(cardNewElement);
  });
  newImg.length = 0;
  resetValidation(popupAddCard);
  closeModalAll("popup-places");
}); */

/**cerrar cuando presionamos el boton de scape */
/* document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    identifyModalOpen();
  }
});
 */
/**modal info User */
/* getinfo.addEventListener("click", handleOpenProfilePopup); */

/**presionar el boton de guardar nueva info del usuario */
/* formElement.addEventListener("submit", handleProfileFormSubmit); */

/**cuando se presioan el boton de cancelar */
/* closeModalButton.addEventListener("click", () => {
  closeModalAll("popup-profile");
});
 */
/* function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = formElement.querySelector(".popup__content-name");
  let jobInput = formElement.querySelector(".popup__content-about");

  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = jobInput.value;

  closeModalAll("popup-profile");
}
 */
/**cambia las clases para cerrar el modal */
/* function closeModalAll(idModal) {
  document.getElementById(idModal).classList.add("popup_opened");
  document.getElementById(idModal).classList.remove("mOpen");
}
 */
/* open modal infoUser*/
/* function handleOpenProfilePopup() {
  nameInfo.value = nameProfile.textContent;
  aboutInfo.value = aboutProfile.textContent;
  openModal(popupProfile);
} */

/** cambia las clases para abrir el modal */
/* function openModal(idModalOpen) {
  idModalOpen.classList.remove("popup_opened");
  idModalOpen.classList.add("mOpen");
} */
/* cerrar el modal click en cualquier parte del documento */
/* document.addEventListener("click", function (e) {
  const popupclassModalClose = e.target.classList;
  const popupidModal = e.target.id;
  if (popupclassModalClose.contains("mOpen")) {
    closeModalAll(popupidModal);
  }
}); */

/**recorremos todos los elmentos del dom que contengan el id popup y
 * debemos encontrar la clase que contenga laclase mopen
 * una vez que se encuentra se identifica el id y con este podemos
 * cerrar el modal
 */
const identifyModalOpen = () => {
  const formList = Array.from(document.getElementsByClassName("popup"));
  const modalOpen = formList.find((open) => {
    return open.classList.contains("mOpen");
  });
  if (modalOpen) {
    switch (modalOpen.id) {
      case "popup-places":
        resetValidation(popupAddCard);
        break;
      case "popup-profile":
        resetValidation(popupProfile);
        break;

      default:
        console.log(`(=^・^=)`);
    }
    closeModalAll(modalOpen.id);
  }
};
export { openPopupImagen as img, settingsValidator };
