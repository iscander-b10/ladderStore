import { scrollOfStairs } from "../js/scrollOfStairs.js";
import { checkOrderForm } from "../js/orderForm.js";
import { toggleModalMainPage } from "./toggleModalMainPage.js";
import { toggleModalAboutCompanyPage } from "../js/toggleModalAboutCompanyPage.js";
import {toggleModalCatalogPage} from "../js/toggleModalCatalogPage.js";
import {toggleModalWorkExamplesPage} from "../js/toggleModalWorkExamplesPage.js";
import {toggleModalBlogPage} from "../js/toggleModalBlogPage.js";
import {toggleModalContactsPage} from "../js/toggleModalContactsPage.js";
import {openBurgerMenu} from "../js/burgerMenu.js";
import {modalHandler} from "../js/utils/modalHandler.js";

function onload() {
    const page = location.pathname.slice(6, -5);
    console.log(page);
    switch (page) {
        case "mainPage": {
            console.log(page);
        }
        case "aboutCompanyPage": {

        }
        case "catalogPage": {

        }
        case "workExamplesPage": {

        }
        case "blogPage": {

        }
        case "contactsPage": {

        }
    }
    
    if (location.pathname.includes("mainPage")) {
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
