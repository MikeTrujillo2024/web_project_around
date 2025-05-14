// script.js

const openFormButton = document.querySelector(".content");
const getinfo = openFormButton.querySelector(".profile__info_edit_button");
const closeModalButton = document.querySelector(".popup__button-cancel");
let formElement = document.querySelector(".popup__container"); 
let nameProfile = document.querySelector(".profile__name");
let puesto = document.querySelector(".profile__about");
/* open modal */
function deleteClass() {
  const classModal = document.querySelector(".popup_opened");
  let nameModal = classModal.querySelector(".popup__content-name");
  let aboutModal = classModal.querySelector(".popup__content-about");


  nameModal.value=nameProfile.textContent;
  aboutModal.value=puesto.textContent;

  classModal.classList.remove("popup_opened");
}

getinfo.addEventListener("click", deleteClass);

/* close modal */
function closeModal(){
  const classModal = document.querySelector(".popup");
  let nameModal = classModal.querySelector(".popup__content-name");
  let aboutModal = classModal.querySelector(".popup__content-about");
  nameModal.value='';
  aboutModal.value='';
  classModal.classList.add("popup_opened");
}

closeModalButton.addEventListener("click",closeModal);

function handleProfileFormSubmit(evt){
  evt.preventDefault();
  
  let nameInput = formElement.querySelector(".popup__content-name");
  let jobInput = formElement.querySelector(".popup__content-about");
  

  nameProfile.textContent = nameInput.value ;
  puesto.textContent = jobInput.value  ;

  closeModal();
  
}
formElement.addEventListener('submit',handleProfileFormSubmit);