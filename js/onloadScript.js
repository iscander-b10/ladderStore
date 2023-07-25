import {pasteText} from './pasteTextInBlock.js';
import {contractOffer} from './contractOffer.js';
import {privacyPolicy} from './privacyPolicy.js';

function onload(){
    pasteText('confidentialityText', privacyPolicy);
    pasteText('offerText', contractOffer);
}

window.onload = onload;

