import { createMainPageHandlers } from "../handlers/createMainPageHandlers.js";
import { createAboutCompanyPageHandlers } from "../handlers/createAboutCompanyPageHandlers.js";
// import {createAboutCompanyPageHandlers} from "../js/toggleModalCatalogPage.js";
// import {toggleModalWorkExamplesPage} from "../js/toggleModalWorkExamplesPage.js";
// import {toggleModalBlogPage} from "../js/toggleModalBlogPage.js";
// import {toggleModalContactsPage} from "../js/toggleModalContactsPage.js";
import { createBurgerHandler } from "../utils/createBurgerHandler.js";

export const createHandlers = (path) => {
    const parts = path.split("/");
    const lastPart = parts[parts.length - 1].replace(".html", "");

    switch (lastPart) {
        case "mainPage":
            createMainPageHandlers();
            break;

        case "aboutCompanyPage":
            // createAboutCompanyPageHandlers();
            createBurgerHandler();
            break;

        case "catalogPage":
            // toggleModalCatalogPage();
            createBurgerHandler();
            break;

        case "workExamplesPage":
            // toggleModalWorkExamplesPage();
            createBurgerHandler();
            break;

        case "blogPage":
            // toggleModalBlogPage();
            createBurgerHandler();
            break;

        case "contactsPage":
            // toggleModalContactsPage();
            createBurgerHandler();
            break;
    }
};