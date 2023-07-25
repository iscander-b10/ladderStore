import {pasteText} from './pasteTextInBlock.js';
import {contractOffer} from '../data/contractOffer.js';
import {privacyPolicy} from '../data/privacyPolicy.js';

function onload(){
    pasteText('confidentialityText', privacyPolicy);
    pasteText('offerText', contractOffer);
}

window.onload = onload;

