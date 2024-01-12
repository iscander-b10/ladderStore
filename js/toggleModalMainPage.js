import {pasteContent} from './pasteContentInBlock.js';
import {contractOfferContent} from '../data/contractOfferContent.js';
import {privacyPolicyContent} from '../data/privacyPolicyContent.js';
import {toggleModal} from '../js/toggleModal.js';

export function toggleModalMainPage(){
    pasteContent('contractOffer__content', contractOfferContent);
    pasteContent('privacyPolicy__content', privacyPolicyContent);

    const findModalWindow = function(idButton, idModalWindow){
        const button = document.getElementById(idButton);
        button.addEventListener("click", () => toggleModal(idModalWindow));
    };

    findModalWindow("callMeBackMainPage", "applicationMainPage");
    findModalWindow("closeApplicationMainPage", "applicationMainPage");
    
    const applicationSentSuccessfully = document.getElementById("applicationBtnMainPage");
    applicationSentSuccessfully.addEventListener("click", () => {
        toggleModal("applicationMainPage");
        toggleModal("applicationSuccessfullyMainPage");
    });

    findModalWindow("closeApplicationSuccessfullyMainPage", "applicationSuccessfullyMainPage");
    
    const openApplicationPrivacyPolicy = document.getElementById("privacyPolicyApplicationMainPage");
    openApplicationPrivacyPolicy.addEventListener("click", () => {
        toggleModal("privacyPolicy__wrapper");
        toggleModal("applicationMainPage");
    });

    findModalWindow("closePrivacyPolicy", "privacyPolicy__wrapper");

    findModalWindow("privacyPolicyPromotionMainPage", "privacyPolicy__wrapper");

    findModalWindow("privacyPolicyFeedbackMainPage", "privacyPolicy__wrapper");

    findModalWindow("conractOfferMainPage", "contractOffer__wrapper");
    findModalWindow("closeContractOfferMainPage", "contractOffer__wrapper");

    findModalWindow("privacyPolicyFooterMainPage", "privacyPolicy__wrapper");

    findModalWindow("footerCallMeBackMainPage", "applicationMainPage");
}