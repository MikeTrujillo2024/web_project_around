// script.js

const openFormButton = document.querySelector(".content");
const getinfo = openFormButton.querySelector(".profile__info--edit_button");
const closeModalButton = document.querySelector(".popup");

/* open modal */
function deleteClass(nombre,puesto) {
  const classModal = document.querySelector(".popup_opened");
  let nameModal = classModal.querySelector(".popup__content-name");
  let aboutModal = classModal.querySelector(".popup__content-about");

  nameModal.value=nombre;
  aboutModal.value=puesto;

  classModal.classList.remove("popup_opened");
}



function getinfoCostumer() {
  let name = document.querySelector(".profile__info--name");
  let puesto = document.querySelector(".profile__about");

  if(name.textContent.length != 0 && puesto.textContent.length != 0){
    deleteClass(name.textContent,puesto.textContent);

  }else{
    alert("Error con el nombre");
  }
}


getinfo.addEventListener("click", getinfoCostumer);

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

