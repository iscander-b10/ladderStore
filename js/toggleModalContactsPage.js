import {pasteContent} from './pasteContentInBlock.js';
import {contractOfferContent} from '../data/contractOfferContent.js';
import {privacyPolicyContent} from '../data/privacyPolicyContent.js';
import {toggleModal} from '../js/toggleModal.js';

export function toggleModalContactsPage(){
    pasteContent('contractOffer__content', contractOfferContent);
    pasteContent('privacyPolicy__content', privacyPolicyContent);

    const findModalWindow = function(idButton, idModalWindow){
        const button = document.getElementById(idButton);
        button.addEventListener("click", () => toggleModal(idModalWindow));
    };

    findModalWindow("callMeBack", "application");
    findModalWindow("closeApplication", "application");

    const applicationSentSuccessfully = document.getElementById("application__btn");
    applicationSentSuccessfully.addEventListener("click", () => {
        toggleModal("application");
        toggleModal("applicationSuccessfully");
    });

    findModalWindow("closeApplicationSuccessfully", "applicationSuccessfully");
    
    const openApplicationPrivacyPolicy = document.getElementById("applicationPrivacyPolicy");
    openApplicationPrivacyPolicy.addEventListener("click", () => {
        toggleModal("privacyPolicy__wrapper");
        toggleModal("application");
    });

    findModalWindow("closePrivacyPolicy", "privacyPolicy__wrapper");

    findModalWindow("feedbackPrivacyPolicy", "privacyPolicy__wrapper");

    findModalWindow("conractOffer--btn", "contractOffer__wrapper");
    findModalWindow("closeContractOffer", "contractOffer__wrapper");

    findModalWindow("footerPrivacyPolicy", "privacyPolicy__wrapper");

    findModalWindow("footer__callMeBack", "application");
}