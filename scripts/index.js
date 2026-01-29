import Section from "./Section.js";
import Card from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import UserInfo from "./UserInfo.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./popupwithform.js";
import {
  initialCards,
  settingsValidator,
  getinfo,
  addimg
} from "./utils.js";


/**
 * constiene todods los fiormularios
 */
/* const formElements = document.querySelectorAll(settingsValidator.formSelector); */


/***
 * hacemos que se muestra los popup de imagenes
 */
const popupImage = new PopupWithImage("#popup-image");
popupImage.setEventListeners();

const handleCardClick = (link, name) => {
  popupImage.open(link, name)
}


/**
 * mostramos los card desde un principio
 */
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardItem = new Card(item, "#card-template", handleCardClick);
      cardList.addItem(cardItem.getCreateCard());
    }
  }, "#place");

cardList.rendererItems();

/**
 * inicializamos user info
 */
const user = new UserInfo({ selectorName: ".profile__name", selectorAbout: ".profile__about" });

/**
 * inicializamos popupwith form para editar el formularios
 */
const profilePopup = new PopupWithForm({
  selector: "#popup-profile",
  submitCallback: (formData) => {
    user.setUserInfo({
      name: formData.name__user,
      about: formData.about
    });
    profilePopup.close();
  }
});

profilePopup.setEventListeners();

/**
 * abrir modal de edit user info
 */
getinfo.addEventListener("click", () => {
  const { name, about } = user.getUserInfo();

  document.querySelector("#input__popup_name_Editar").value = name;
  document.querySelector("#input_popup_about").value = about;
  profilePopup.open()
});

/**
 * abrir el modal para agregar una nueva imagen
 */

const addNewImage = new PopupWithForm({
  selector: "#popup-places",
  submitCallback: (formData) => {
    const newCard = new Card(
      {
        name: formData.titulo,
        link: formData.url
      },
      "#card-template",
      handleCardClick

    );
    cardList.addItem(newCard.getCreateCard());
    addNewImage.close();
  }
});

addNewImage.setEventListeners();

addimg.addEventListener("click", () => {
  addNewImage.open();
})

