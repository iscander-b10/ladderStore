import {pasteText} from './pasteTextInBlock.js';
import {contractOffer} from '../data/contractOffer.js';
import {privacyPolicy} from '../data/privacyPolicy.js';
import {toogleModal} from '../js/toogleModal.js';

function onload(){
    pasteText('confidentialityText', privacyPolicy);
    pasteText('offerText', contractOffer);
    const offerButton = document.getElementById("contractOffer");
    const modalContainer = document.getElementById("contractOffer__wrapper");
    offerButton.addEventListener("click", () => toogleModal("contractOffer__wrapper"))
    const closeOffer = document.getElementById("closeOffer");
    closeOffer.addEventListener("click", () => toogleModal("contractOffer__wrapper"))
}

window.onload = onload;

