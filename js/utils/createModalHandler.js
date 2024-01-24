
export const createModalHandler = (idButton, openModalId, closeModalId) => {
    const button = document.getElementById(idButton);
    button.addEventListener("click", () => toggleModal(openModalId, closeModalId));
};

export const toggleModal = (openModalId, closeModalId) => {
    const modalWindow = document.getElementById(openModalId);
    const isOpen = modalWindow.classList.contains("active");

    if (isOpen) {
        modalWindow.classList.remove("active");
        document.body.style.overflowY = "auto";
    }

    if (!isOpen) {
        modalWindow.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    if (closeModalId) {
        document.getElementById(closeModalId).classList.remove("active");
    }
};