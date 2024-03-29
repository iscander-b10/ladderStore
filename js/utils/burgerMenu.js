export function openBurgerMenu() {
    const button = document.querySelector(".burgerIcon");
    const burgerMenu = document.querySelector(".burgerMenu");

    function openMenu(){
        if (button.classList.contains("menuIconRotate")) {
            button.classList.remove("menuIconRotate");
        } else {
            button.classList.add("menuIconRotate");
        }

        if (burgerMenu.classList.contains("burgerMenuActive")) {
            burgerMenu.classList.remove("burgerMenuActive");
        } else {
            burgerMenu.classList.add("burgerMenuActive");
        }
    }
    
    button.addEventListener('click', openMenu);
}