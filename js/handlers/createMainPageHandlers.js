import { scrollOfStairs } from "../scrollOfStairs.js";
import { checkOrderForm } from "../orderForm.js";
import { toggleModalMainPage } from "../toggleModalMainPage.js";
import {openBurgerMenu} from "../burgerMenu.js";
import {modalHandler} from "../utils/modalHandler.js";

export const createMainPageHandlers = () => {
    toggleModalMainPage();

            modalHandler("calculateTheCost", "choiceOfStairs__container");

            modalHandler("nextOne", "sizeOfStairs", "choiceOfStairs__container");

            modalHandler("closeStepTwo", "sizeOfStairs");

            modalHandler("closeFacing", "facing");

            const nextThree = document.getElementById("calculate");
            nextThree.addEventListener("click", () => {
                document.getElementById("facing").classList.remove("active");
                document.getElementById("finish").classList.add("active");
            });

            modalHandler("closeFinish", "finish");
            
            scrollOfStairs();
            checkOrderForm();
            openBurgerMenu();
}