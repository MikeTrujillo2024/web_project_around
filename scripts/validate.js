// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada

const settings = {
  formSelector: "popup__container",
  formSet: "popup__content",
  inputSelector: "popup__input",
  submitButtonSelector: "popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  InputErrorActive: "form__input-error_active",
  errorClass: "popup__error_visible",
  typeSubmit: "submit",
  typeInput: "input",
  formbuttonSubmit: "popup__content-save"
};

const showInputError = (formElement,inputElement,errorMessage)=>{
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
}

const hideInputError= (formElement,inputElement)=>{
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent= "";
}

const checkInputValidity = (formElement,inputElement)=>{
  if(!inputElement.validity.valid){                                
   showInputError(formElement,inputElement,inputElement.validationMessage);
  }else{
    hideInputError(formElement,inputElement);
  } 
}
/* retornamos el valor del boton */
const hasInvalidInput = (inputList) =>{
  return inputList.some((inputElment)=>{
    return !inputElment.validity.valid;
  });
}

const statebutton = (inputlist,botonElement)=>{
  if(hasInvalidInput(inputlist)){
    botonElement.classList.add("popup__button_inactive");
    botonElement.setAttribute("disabled","");
  }else{
    botonElement.classList.remove("popup__button_inactive");
    botonElement.removeAttribute("disabled","");
  }
}

const setEventListener = ((formElement)=>{
  const inputList = Array.from(formElement.querySelectorAll( ".popup__input"));
  const buttonElement = formElement.querySelector(".popup__content-save");

  statebutton(inputList,buttonElement);
  
  /* recorremos el array de input list */
  inputList.forEach((inputElements)=>{
    inputElements.addEventListener("input",function (){
      //validar y mostrar mensajes */
      checkInputValidity(formElement,inputElements)
      statebutton(inputList,buttonElement);
    });
  })
});


const enableValidation = () => {
  /* obtiene los formularios que se tengan con la clase popup__container */
  const formList = Array.from(
    document.querySelectorAll(".popup__container")
  );

  formList.forEach((formElement) => {    
    formElement.addEventListener("submit", function (evt) {
       evt.preventDefault();
      
    } );

    /* obtiene los contendores de los inputs y botones a validar */
    const fieldsetList = Array.from(formElement.querySelectorAll(".popup__content"));
    fieldsetList.forEach((fieldSet)=>{
      
      setEventListener(fieldSet);
        })
  });
};

enableValidation();

const resetValidation = () => {
  const formReset = Array.from(document.querySelectorAll(".popup__container"));
  formReset.forEach((formElement) => {
    formElement.reset();
    enableValidation();
  });
};
