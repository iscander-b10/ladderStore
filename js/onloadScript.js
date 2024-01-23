import { scrollOfStairs } from "../js/scrollOfStairs.js";
import { checkOrderForm } from "../js/orderForm.js";
import { toggleModalMainPage } from "./toggleModalMainPage.js";
import { toggleModalAboutCompanyPage } from "../js/toggleModalAboutCompanyPage.js";
import {toggleModalCatalogPage} from "../js/toggleModalCatalogPage.js";
import {toggleModalWorkExamplesPage} from "../js/toggleModalWorkExamplesPage.js";
import {toggleModalBlogPage} from "../js/toggleModalBlogPage.js";
import {toggleModalContactsPage} from "../js/toggleModalContactsPage.js";
import {openBurgerMenu} from "../js/burgerMenu.js";
import {toggleModal} from "../js/toggleModal.js";

function onload() {
    const findModalWindow = function(idButton, idModalWindow){
        const button = document.getElementById(idButton);
        button.addEventListener("click", () => toggleModal(idModalWindow));
    };
    
    if (location.pathname.includes("mainPage")) {
        toggleModalMainPage();

        findModalWindow("calculateTheCost", "choiceOfStairs__container");
        
        const nextOne = document.getElementById("nextOne");
        nextOne.addEventListener("click", () => {
            document.getElementById("choiceOfStairs__container").classList.remove("active");
            document.getElementById("sizeOfStairs").classList.add("active");
        });

        findModalWindow("closeStepTwo", "sizeOfStairs");

        findModalWindow("closeFacing", "facing");

        const nextThree = document.getElementById("calculate");
        nextThree.addEventListener("click", () => {
            document.getElementById("facing").classList.remove("active");
            document.getElementById("finish").classList.add("active");
        });

        findModalWindow("closeFinish", "finish");
        
        scrollOfStairs();
        checkOrderForm();
        openBurgerMenu();
    }

    if (location.pathname.includes("aboutCompanyPage")) {
        toggleModalAboutCompanyPage();
        openBurgerMenu();
    }

    if (location.pathname.includes("catalogPage")) {
        toggleModalCatalogPage();
        openBurgerMenu();
    }

    if (location.pathname.includes("workExamplesPage")) {
        toggleModalWorkExamplesPage();
        openBurgerMenu();
    }

    if (location.pathname.includes("blogPage")) {
        toggleModalBlogPage();
        openBurgerMenu();
    }

    if (location.pathname.includes("contactsPage")) {
        toggleModalContactsPage();
        openBurgerMenu();
    }
}

window.onload = onload;
