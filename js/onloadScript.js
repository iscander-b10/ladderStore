import { scrollOfStairs } from "../js/scrollOfStairs.js";
import { checkOrderForm } from "../js/orderForm.js";
import { toggleModalMainPage } from "./toggleModalMainPage.js";
import { toggleModalAboutCompanyPage } from "../js/toggleModalAboutCompanyPage.js";
import {toggleModalCatalogPage} from "../js/toggleModalCatalogPage.js";
import {toggleModalWorkExamplesPage} from "../js/toggleModalWorkExamplesPage.js";
import {toggleModalBlogPage} from "../js/toggleModalBlogPage.js";
import {toggleModalContactsPage} from "../js/toggleModalContactsPage.js";

function onload() {
    if (location.pathname.includes("mainPage")) {
        toggleModalMainPage();

        // const nextOne = document.getElementById("nextOne");
        // nextOne.addEventListener("click", () => {
        //     document
        //         .getElementById("choiceOfStairs__container")
        //         .classList.remove("active");
        //     document.getElementById("sizeOfStairs").classList.add("active");
        // });

        // findModalWindow("closeStepTwo", "sizeOfStairs");

        // findModalWindow("closeFacing", "facing");

        // const nextThree = document.getElementById("calculate");
        // nextThree.addEventListener("click", () => {
        //     document.getElementById("facing").classList.remove("active");
        //     document.getElementById("finish").classList.add("active");
        // });

        // findModalWindow("closeFinish", "finish");
        
        scrollOfStairs();
        checkOrderForm();
    }

    if (location.pathname.includes("aboutCompanyPage")) {
        toggleModalAboutCompanyPage();
    }

    if (location.pathname.includes("catalogPage")) {
        toggleModalCatalogPage();
    }

    if (location.pathname.includes("workExamplesPage")) {
        toggleModalWorkExamplesPage();
    }

    if (location.pathname.includes("blogPage")) {
        toggleModalBlogPage();
    }

    if (location.pathname.includes("contactsPage")) {
        toggleModalContactsPage();
    }
}

window.onload = onload;
