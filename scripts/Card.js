import { img } from "./utils.js";
/**
 * Toma los datos de la tarjeta (tanto el texto como un enlace a la imagen) y un
 * selector de elemento de plantilla como parámetros en el constructor.
 */
class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  /**
   * este elmento privado permite tomar el elmento templete
   * para clonar este elemento n veces que sea necesarop
   * */
  _getTemplate() {
    const cardElemnt = document
      .querySelector(this._cardSelector)
      .content.querySelector(".place__card")
      .cloneNode(true);

    return cardElemnt;
  }

  /**
   * metodo like
   * cada vez que se presiona el boton de me gusta (corazon)
   * este metodo hace que cambie de color
   */
  _like() {
    this._element
      .querySelector(".place__card_content_like")
      .addEventListener("click", (e) => {
        e.target.classList.toggle("place_card_content_like--active");
      });
  }

  /**
   * Metodo Trash
   * este metodo sive para eliminar el objeto del metodo array
   */
  _trash() {
    this._element
      .querySelector(".place__card_trash")
      .addEventListener("click", () => {
        this._element.remove();
      });
  }

  /**
   * metodod imgPopup
   * Este metodo sirve para mostra el popup al hacer click en la imagen
   */
  _imgPopup() {
    this._element
      .querySelector(".place__card_image")
      .addEventListener("click", () => {
        img(this._link, this._title);
      });
  }

  /**
   * este metodo justa los metodos privado
   */
  _setListener() {
    this._like();
    this._trash();
    this._imgPopup();
  }

  /**
   * aqui es donde creamos los card
   * hasta este momento esta construido cada elemenmto pero no esta visible en el dom
   */
  getCreateCard() {
    this._element = this._getTemplate();
    this._setListener();

    this._element.querySelector(".place__card_image").src = this._link;
    this._element.querySelector(".place__card_image").alt = this._title;
    this._element.querySelector(".place__card_content_text").textContent =
      this._title;

    return this._element;
  }
}

/**
 * esta clase hereda de clase card que es donde se crean las card
 * una vez que se da click en el boton de guardar del modal de crear
 * nuevo lugar
 */
class CreateCard extends Card {
  constructor(data, selector) {
    super(data, selector);
  }
}

export { Card, CreateCard };
