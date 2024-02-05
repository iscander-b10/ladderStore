import { toggleModal } from "./toggleModal";

export const modalHandler = function(idButton, openModalId, closeModalId){
    const button = document.getElementById(idButton);
    button.addEventListener("click", () => toggleModal(openModalId));

    if (closeModalId) {
        document.getElementById(closeModalId).classList.remove("active");
    }
};