import { settingsValidator } from "./utils.js";
import { formValidators } from "./index.js";
/**
 * constructor que tiene dos parametros
 * el primero es un objeto de la configuracion que almacena los selectores y las clases del formulario
 * el segudo toma un elemento del formulario a validar
 */


class FormValidator {
  constructor(configObj, formElemnt) {
    this._config = configObj;
    this._elment = formElemnt;

    this._inputlist = Array.from(
      this._elment.querySelectorAll(this._config.inputSelector)
    );

    this._button = this._elment.querySelector(this._config.formbuttonSubmit);
    
    
  }

  /**
   * tomamos como referencia el id de cada span del input para
   * mostrar el error que se manda desde chekvalidity
   */
  _showInputError(inputElementList, errorMessage) {
    const errorElment = this._elment.querySelector(
      `.${inputElementList.id}-error`
    );
    inputElementList.classList.add(this._config.inactiveButtonClass);
    errorElment.textContent = errorMessage;
    errorElment.classList.add(this._config.InputErrorActive);
  }

  /**
   * elimina el error del span si es que esta activo
   */
  _hideInputError(inputElementList) {
    const errorElment = this._elment.querySelector(
      `.${inputElementList.id}-error`
    );
    inputElementList.classList.remove(this._config.inactiveButtonClass);
    errorElment.textContent = "";
    errorElment.classList.remove(this._config.InputErrorActive);
  }

  /**
   * verifica que el input que estamos usando sea del tipo (type) correcto
   * y de los caracteres quie se esta especificando a en el html al
   * momento que se esta escreibiendo
   */
  _checkInputValidity(inputElementList) {
    /*  console.log(); */
    if (!inputElementList.validity.valid) {
      this._showInputError(
        inputElementList,
        inputElementList.validationMessage
      );
    } else {
      this._hideInputError(inputElementList);
    }
  }

  /**
   * _hasInvalidInput
   * retorna si el valor es true o false
   *
   */
  _hasInvalidInput() {
   return this._inputlist.some((inputElment) => {
      return !inputElment.validity.valid;
    });
  }

  _statebutton() {
    if (this._hasInvalidInput()) {
    
      this._button.classList.add(this._config.inactiveButtonClass);
      this._button.setAttribute("disabled", "");
    } else {
     
      this._button.classList.remove(this._config.inactiveButtonClass);
      this._button.removeAttribute("disabled");
    }
  }

  _setEventListener() {
    this._statebutton();

    this._inputlist.forEach((inputElementList) => {
      inputElementList.addEventListener("input", () => {
        this._checkInputValidity(inputElementList);
        this._statebutton();
      });
    });
  }

  /**
   * obtenemos los submit de cada formulario
   */
  enableValidation() {
    
     this._elment.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListener();
  }

  resetValidation(){
    this._inputlist.forEach((inputElment)=>{
      this._hideInputError(inputElment);
      inputElment.value="";
    });
    this._statebutton();
  };
}

const resetValidation = (modal)=>{
  const formElments = modal.querySelectorAll(settingsValidator.formSelector);
  formElments.forEach((formElment)=>{
    formElment.reset();
    const formValidator = formValidators.find(
      (validator) => validator._formElement === formElment
    );
    if (formValidator) {
      formValidator.resetValidation();
    }
  })
}


export { FormValidator, resetValidation as reset };
