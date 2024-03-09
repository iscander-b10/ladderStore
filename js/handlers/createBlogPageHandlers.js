import {openBurgerMenu} from "../utils/burgerMenu.js";
import {createModalHandler} from "../utils/createModalHandler.js";
import {pasteContent} from "../utils/pasteContentInBlock.js";
import {CONTRACT_OFFER_CONTENT} from "../../data/contractOfferContent.js";
import {PRIVACY_POLICY_CONTENT} from "../../data/privacyPolicyContent.js";
import {MODAL_IDS_BLOGPAGE} from "../../data/modalIds.js";

export const createBlogPageHandlers = () => {
    pasteContent('contractOffer__content', CONTRACT_OFFER_CONTENT);
    pasteContent('privacyPolicy__content', PRIVACY_POLICY_CONTENT);

    MODAL_IDS_BLOGPAGE.map((elem) => createModalHandler(elem));
    
    openBurgerMenu();
}