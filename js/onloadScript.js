import {pasteContent} from '../js/pasteContentInBlock.js';
import {contractOfferContent} from '../data/contractOfferContent.js';
import {privacyPolicyContent} from '../data/privacyPolicyContent.js';
import {toggleModal} from '../js/toggleModal.js';
import {scrollOfStairs} from '../js/scrollOfStairs.js';
import {checkOrderForm} from '../js/orderForm.js';

function onload(){
    pasteContent('contractOffer__content', contractOfferContent);
    pasteContent('privacyPolicy__content', privacyPolicyContent);
    
    const findModalWindow = function(idButton, idModalWindow){
        const button = document.getElementById(idButton);
        button.addEventListener("click", () => toggleModal(idModalWindow));
    };

    findModalWindow("callMeBack", "application");
    findModalWindow("closeApplicationWindow", "application");
    
    const openApplicationPrivacyPolicy = document.getElementById("applicationPrivacyPolicy");
    openApplicationPrivacyPolicy.addEventListener("click", () => {
        toggleModal("privacyPolicy__wrapper");
        toggleModal("application");
        const selectionOfStairs = document.getElementById("selectionOfStairs");
        selectionOfStairs.classList.add("passive");
    });
    
    const applicationSentSuccessfully = document.getElementById("application__btn");
    applicationSentSuccessfully.addEventListener("click", () => {
        document.getElementById("application").classList.remove("active");
        document.getElementById("applicationSuccessfully").classList.add("active"); 
    });

    findModalWindow("closeApplicationSuccessfully", "applicationSuccessfully");
    findModalWindow("promotionPrivacyPolicy", "privacyPolicy__wrapper");
    findModalWindow("feedbackPrivacyPolicy", "privacyPolicy__wrapper");
    findModalWindow("conractOffer--btn", "contractOffer__wrapper");
    findModalWindow("closeContractOffer", "contractOffer__wrapper");
    findModalWindow("footerPrivacyPolicy", "privacyPolicy__wrapper");
    findModalWindow("closePrivacyPolicy", "privacyPolicy__wrapper");   
    findModalWindow("footer__callMeBack", "application");  

    findModalWindow("calculateTheCost", "choiceOfStairs__container");
    findModalWindow("closeStepOne", "choiceOfStairs__container");
    
    const nextOne = document.getElementById("nextOne");
    nextOne.addEventListener("click", () => {
        document.getElementById("choiceOfStairs__container").classList.remove("active");
        document.getElementById("sizeOfStairs").classList.add("active"); 
    });

    findModalWindow("closeStepTwo", "sizeOfStairs");

    // const nextTwo = document.getElementById("nextTwo");
    // nextTwo.addEventListener("click", () => {
    //     document.getElementById("sizeOfStairs").classList.remove("active");
    //     document.getElementById("facing").classList.add("active"); 
    // });

    findModalWindow("closeFacing", "facing");
    
    const nextThree = document.getElementById("calculate");
    nextThree.addEventListener("click", () => {
        document.getElementById("facing").classList.remove("active");
        document.getElementById("finish").classList.add("active"); 
    });
    
    findModalWindow("closeFinish", "finish");

    scrollOfStairs();
    
    checkOrderForm();
}

window.onload = onload;


