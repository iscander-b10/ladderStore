export function toogleModal(id){
    const modalWrapper = document.getElementById(id);
    
    if (modalWrapper.classList.contains("active")){
        modalWrapper.classList.remove("active");
        document.body.style.overflow = "auto";
    } else {
        modalWrapper.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}