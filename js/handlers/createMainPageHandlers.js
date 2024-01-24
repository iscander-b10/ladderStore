import { contractOfferContent } from "../../data/contractOfferContent.js";
import { privacyPolicyContent } from "../../data/privacyPolicyContent.js";
import { pasteContent } from "../utils/pasteContentInBlock.js";
import { createModalHandler } from "../utils/createModalHandler.js";
import { scrollOfStairs } from "../utils/scrollOfStairs.js";
import { checkOrderForm } from "../../js/orderForm.js";
import { createBurgerHandler } from "../utils/createBurgerHandler.js";

export function createMainPageHandlers() {
    pasteContent("contractOffer__content", contractOfferContent);
    pasteContent("privacyPolicy__content", privacyPolicyContent);

    createModalHandler("callMeBack", "application");
    createModalHandler("closeApplication", "application");

    createModalHandler(
        "application__btn",
        "applicationSuccessfully",
        "application"
    );

    createModalHandler(
        "closeApplicationSuccessfully",
        "applicationSuccessfully"
    );

    createModalHandler(
        "applicationPrivacyPolicy",
        "privacyPolicy__wrapper",
        "application"
    );

    createModalHandler("closePrivacyPolicy", "privacyPolicy__wrapper");

    createModalHandler("promotionPrivacyPolicy", "privacyPolicy__wrapper");

    createModalHandler("feedbackPrivacyPolicy", "privacyPolicy__wrapper");

    createModalHandler("conractOffer", "contractOffer__wrapper");

    createModalHandler("closeContractOffer", "contractOffer__wrapper");

    createModalHandler("privacyPolicyFooter", "privacyPolicy__wrapper");

    createModalHandler("footerCallMeBack", "application");

    //calculateTheCost
    createModalHandler("calculateTheCost", "choiceOfStairs__container");
    // steps

    //1
    createModalHandler("nextOne", "sizeOfStairs", "choiceOfStairs__container");
    createModalHandler("closeStepOne", "choiceOfStairs__container");

    //2
    createModalHandler("closeStepTwo", "sizeOfStairs");
    if (checkOrderForm("stepTwo")) {
        createModalHandler("nextTwo", "facing", "sizeOfStairs");
    }

    //3
    createModalHandler("calculate", "finish", "facing");
    createModalHandler("closeFacing", "facing");

    //finish
    checkOrderForm();
    createModalHandler("getAQuote", "finish");
    createModalHandler("closeFinish", "finish");

    scrollOfStairs();
    createBurgerHandler();
}
