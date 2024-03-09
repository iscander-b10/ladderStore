import { scrollOfStairs } from "../utils/scrollOfStairs.js";
import { checkOrderForm } from "../utils/orderForm.js";
import {openBurgerMenu} from "../utils/burgerMenu.js";
import {createModalHandler} from "../utils/createModalHandler.js";
import {pasteContent} from "../utils/pasteContentInBlock.js";
import {CONTRACT_OFFER_CONTENT} from "../../data/contractOfferContent.js";
import {PRIVACY_POLICY_CONTENT} from "../../data/privacyPolicyContent.js";
import {MODAL_IDS_MAINPAGE} from "../../data/modalIds.js";

export const createMainPageHandlers = () => {
    pasteContent('contractOffer__content', CONTRACT_OFFER_CONTENT);
    pasteContent('privacyPolicy__content', PRIVACY_POLICY_CONTENT);

    MODAL_IDS_MAINPAGE.map((elem) => createModalHandler(...elem));
    
    scrollOfStairs();
    checkOrderForm();
    openBurgerMenu();
}