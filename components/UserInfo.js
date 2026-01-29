/**
 * esta clase es la responsabe de presentar la informacion del usuario
 * en la página 
 */
export default class UserInfo {
    constructor({ selectorName, selectorAbout }) {
        this._nameUser = document.querySelector(selectorName);
        this._aboutUser = document.querySelector(selectorAbout);
    }

    /**
     * este metodo devuelve un objeto con la informacion sobre el usuario
     */
    getUserInfo() {
        return {
            name: this._nameUser.textContent,
            about: this._aboutUser.textContent
        };
    }

    /**
     * toma los datos del nuevo usuario y los agrega en la pagina
     */
    setUserInfo({ name, about }) {
        this._nameUser.textContent = name;
        this._aboutUser.textContent = about;
    }
}