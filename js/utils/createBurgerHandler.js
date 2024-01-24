export const createBurgerHandler = () => {
    const button = document.querySelector(".burgerIcon");
    const toggleMenu = () => {
        const burgerMenu = document.querySelector(".burgerMenu");
        const isOpen = burgerMenu.classList.contains("burgerMenuActive");

        if (isOpen) {
            button.classList.remove("menuIconRotate");
            burgerMenu.classList.remove("burgerMenuActive");
        }

        if (!isOpen) {
            button.classList.add("menuIconRotate");
            burgerMenu.classList.add("burgerMenuActive");
        }
    };

    button.addEventListener("click", toggleMenu);
};
