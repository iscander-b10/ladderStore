import {pasteContent} from './pasteContentInBlock.js';
import {contractOfferContent} from '../data/contractOfferContent.js';
import {privacyPolicyContent} from '../data/privacyPolicyContent.js';
import {toggleModal} from '../js/toggleModal.js';

export function toggleModalAboutCompanyPage(){
    pasteContent('contractOffer__content', contractOfferContent);
    pasteContent('privacyPolicy__content', privacyPolicyContent);

    const findModalWindow = function(idButton, idModalWindow){
        const button = document.getElementById(idButton);
        button.addEventListener("click", () => toggleModal(idModalWindow));
    };

    findModalWindow("callMeBackAboutCompanyPage", "applicationAboutCompanyPage");
    findModalWindow("closeAboutCompanyPage", "applicationAboutCompanyPage");
}