import {createMainPageHandlers} from "../handlers/createMainPageHandlers.js";
import {createAboutCompanyPageHandlers} from "../handlers/createAboutCompanyPageHandlers.js";
import {createCatalogPageHandlers} from "../handlers/createCatalogPageHandlers.js";
import {createWorkExamplesPageHandlers} from "../handlers/createWorkExamplesPageHandlers.js";
import {createBlogPageHandlers} from "../handlers/createBlogPageHandlers.js";
import {createContactsPageHandlers} from "../handlers/createContactsPageHandlers.js";


export const routes = () => {
    const page = location.pathname.slice(6, -5);
    
    switch (page) {
        case "mainPage": {
            createMainPageHandlers();
            break;
        }
        case "aboutCompanyPage": {
            createAboutCompanyPageHandlers();
            break;
        }
        case "catalogPage": {
            createCatalogPageHandlers();
            break;
        }
        case "workExamplesPage": {
            createWorkExamplesPageHandlers();
            break;
        }
        case "blogPage": {
            createBlogPageHandlers();
            break;
        }
        case "contactsPage": {
            createContactsPageHandlers();
            break;
        }
    }
}