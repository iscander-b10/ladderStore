import {pasteContent} from '../utils/pasteContentInBlock.js';
import {contractOfferContent} from '../../data/contractOfferContent.js';
import {privacyPolicyContent} from '../../data/privacyPolicyContent.js';
import {toggleModal} from '../utils/createModalHandler.js';

export const createAboutCompanyPageHandlers = () => {
    pasteContent('contractOffer__content', contractOfferContent);
    pasteContent('privacyPolicy__content', privacyPolicyContent);

    const createModalHandler = function(idButton, idModalWindow){
        const button = document.getElementById(idButton);
        button.addEventListener("click", () => toggleModal(idModalWindow));
    };

    createModalHandler("callMeBack", "application");
    createModalHandler("closeApplication", "application");
    
    const applicationSentSuccessfully = document.getElementById("application__btn");
    applicationSentSuccessfully.addEventListener("click", () => {
        toggleModal("application");
        toggleModal("applicationSuccessfully");
    });

    createModalHandler("closeApplicationSuccessfully", "applicationSuccessfully");
    
    const openApplicationPrivacyPolicy = document.getElementById("applicationPrivacyPolicy");
    openApplicationPrivacyPolicy.addEventListener("click", () => {
        toggleModal("privacyPolicy__wrapper");
        toggleModal("application");
    });

    createModalHandler("closePrivacyPolicy", "privacyPolicy__wrapper");

    createModalHandler("promotionPrivacyPolicy", "privacyPolicy__wrapper");

    createModalHandler("feedbackPrivacyPolicy", "privacyPolicy__wrapper");

    createModalHandler("conractOffer", "contractOffer__wrapper");
    createModalHandler("closeContractOffer", "contractOffer__wrapper");

    createModalHandler("privacyPolicyFooter", "privacyPolicy__wrapper");

    createModalHandler("footerCallMeBack", "application");
}