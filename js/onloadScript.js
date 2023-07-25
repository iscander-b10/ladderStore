import {pasteText} from './pasteTextInBlock';
import {contractOffer} from './contractOffer';
import {privacyPolicy} from './privacyPolicy';

window.onload = function(){
    pasteText('confidentialityText', privacyPolicy);
    pasteText('offerText', contractOffer);
}

