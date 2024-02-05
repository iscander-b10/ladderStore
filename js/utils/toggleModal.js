export const toggleModal = (id) => {
    const modalWindow = document.getElementById(id);
    
    if (modalWindow.classList.contains("active")){
        modalWindow.classList.remove("active");
        document.body.style.overflowY = "auto";
    } else {
        modalWindow.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}