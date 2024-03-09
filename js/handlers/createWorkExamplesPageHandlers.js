import {openBurgerMenu} from "../utils/burgerMenu.js";
import {createModalHandler} from "../utils/createModalHandler.js";
import {pasteContent} from "../utils/pasteContentInBlock.js";
import {CONTRACT_OFFER_CONTENT} from "../../data/contractOfferContent.js";
import {PRIVACY_POLICY_CONTENT} from "../../data/privacyPolicyContent.js";
import {MODAL_IDS_WORKEXAMPLESPAGE} from "../../data/modalIds.js";

export const createWorkExamplesPageHandlers = () => {
    pasteContent('contractOffer__content', CONTRACT_OFFER_CONTENT);
    pasteContent('privacyPolicy__content', PRIVACY_POLICY_CONTENT);

    MODAL_IDS_WORKEXAMPLESPAGE.map((elem) => createModalHandler(...elem));
    
    openBurgerMenu();
}