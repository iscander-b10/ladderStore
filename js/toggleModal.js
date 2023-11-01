export function toggleModal(id){
    const modalWindow = document.getElementById(id);
    const selectionOfStairs = document.getElementById("selectionOfStairs");
    
    if (modalWindow.classList.contains("active")){
        modalWindow.classList.remove("active");
        selectionOfStairs.classList.remove("passive");
        document.body.style.overflowY = "auto";
    } else {
        modalWindow.classList.add("active");
        selectionOfStairs.classList.add("passive");
        document.body.style.overflow = "hidden";
    }
}