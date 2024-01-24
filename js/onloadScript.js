import {createHandlers} from './utils/createHandlers.js';

const onload = () => {
    createHandlers(location.pathname);
};

window.onload = onload;
