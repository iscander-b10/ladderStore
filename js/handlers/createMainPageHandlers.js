import { scrollOfStairs } from "../scrollOfStairs.js";
import { checkOrderForm } from "../orderForm.js";
import {openBurgerMenu} from "../burgerMenu.js";
import {createModalHandler} from "../utils/createModalHandler.js";
import {pasteContent} from "../pasteContentInBlock.js";
import {CONTRACT_OFFER_CONTENT} from "../../data/contractOfferContent.js";
import {PRIVACY_POLICY_CONTENT} from "../../data/privacyPolicyContent.js";

const MODAL_IDS = [
    ["calculateTheCost", "choiceOfStairs__container"],
    ["nextOne", "sizeOfStairs", "choiceOfStairs__container"],
    ["closeStepTwo", "sizeOfStairs"],
    ["closeStepOne", "choiceOfStairs__container"],
    ["closeFacing", "facing"],
    ["callMeBack", "application"],
    ["closeApplication", "application"],
    ["application__btn", "applicationSuccessfully", "application"],
    ["closeApplicationSuccessfully", "applicationSuccessfully"],
    ["applicationPrivacyPolicy", "privacyPolicy__wrapper", "application"],
    ["closePrivacyPolicy", "privacyPolicy__wrapper"],
    ["promotionPrivacyPolicy", "privacyPolicy__wrapper"],
    ["feedbackPrivacyPolicy", "privacyPolicy__wrapper"],
    ["conractOffer", "contractOffer__wrapper"],
    ["closeContractOffer", "contractOffer__wrapper"],
    ["privacyPolicyFooter", "privacyPolicy__wrapper"],
    ["footerCallMeBack", "application"],
    ["closeFinish", "finish"],
    ["calculate", "finish", "facing"],
];

export const createMainPageHandlers = () => {
    pasteContent('contractOffer__content', CONTRACT_OFFER_CONTENT);
    pasteContent('privacyPolicy__content', PRIVACY_POLICY_CONTENT);

    MODAL_IDS.map((elem) => createModalHandler(...elem));
    
    scrollOfStairs();
    checkOrderForm();
    openBurgerMenu();
}