import {stairsDictionary} from '../data/stairsDictionary.js';

export const checkOrderForm = () => {
    const order = {
        // typeStairs: 0,
        // stairsView: 0,
        // stairParams: {
        //     length: 1,
        //     width: 1,
        //     height: 1,
        // },
        // finishesView: 0,
        // customer: {
        //     name: '',
        //     phone: '',
        //     email: '',
        // }
    };

    //step1
    document.getElementById('nextOne').addEventListener('click', () => {
        order.typeStairs = document.getElementsByClassName('choiceOfStairs__list')[0].children.length - 1;
    });

    //step2
    document.getElementById('nextTwo').addEventListener('click', () => {
        const stairsView = document.getElementsByClassName('sizeOfStairs__viewList')[0].children.length - 1;
        const height = document.getElementById('height').value;
        const width = document.getElementById('width').value;
        const length = document.getElementById('length').value;

        order.stairsView = stairsView;
        order.stairParams = {
            height,
            width,
            length,
        };
    });

    //step3
    document.getElementById('calculate').addEventListener('click', () => {
        order.finishesView = document.getElementsByClassName('facing__list')[0].children.length - 1;
        window.setTimeout(addValues, 0);
    });
    
    //step4
    const addValues = () => {
        const optionsList = document.getElementsByClassName('finish__optionsList')[0].children;
        optionsList[0].children[0].innerText += ` ${stairsDictionary.typeStairs[order.typeStairs]}`;
        optionsList[1].children[0].innerText += ` ${order.stairsView}`;
        optionsList[2].children[0].innerText += ` ${order.finishesView}`;
        optionsList[3].children[0].innerText += ` ${order.stairParams.length}`;
        optionsList[4].children[0].innerText += ` ${order.stairParams.height}`;
        optionsList[5].children[0].innerText += ` ${order.stairParams.width}`;  
    };

    document.getElementById('getAQuote').addEventListener('click', () => {
        const customer = {
            name: document.getElementById('username1').value,
            phone: document.getElementById('phone1').value,
            email: document.getElementById('usermail1').value,
        }
        order.customer = customer;
   
       window.setTimeout(() => console.log('Заказ сформирован и отправлен: ', order), 1000);
    });
};