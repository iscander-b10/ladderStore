import {openBurgerMenu} from "../utils/burgerMenu.js";
import {createModalHandler} from "../utils/createModalHandler.js";
import {pasteContent} from "../utils/pasteContentInBlock.js";
import {CONTRACT_OFFER_CONTENT} from "../../data/contractOfferContent.js";
import {PRIVACY_POLICY_CONTENT} from "../../data/privacyPolicyContent.js";
import {MODAL_IDS_ABOUTCOMPANYPAGE} from "../../data/MODAL_IDS.js";

export const createAboutCompanyPageHandlers = () => {
    pasteContent('contractOffer__content', CONTRACT_OFFER_CONTENT);
    pasteContent('privacyPolicy__content', PRIVACY_POLICY_CONTENT);

    MODAL_IDS_ABOUTCOMPANYPAGE.map((elem) => createModalHandler(...elem));
    
    openBurgerMenu();
}