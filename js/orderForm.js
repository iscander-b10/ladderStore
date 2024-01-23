export const checkOrderForm = () => {
    const order = {};

    //step1
    document.getElementById('nextOne').addEventListener('click', () => {
        const typeStairsSelected = document.querySelector("input[name='typesOfStairs']:checked")
        order.typeStairs = typeStairsSelected.value;
    });
    
    //step2
    document.getElementById('nextTwo').addEventListener('click', () => {
        const typeViewSelected = document.querySelector("input[name='viewStairs']:checked")
        order.stairsView = typeViewSelected.value;
        
        // const creatingVariablesForInput = function(){

        // };
        
        const height = document.getElementById('height').value;
        const InputHeigh = document.getElementById('height');
        const RegExrHeight = /[2-3]{1}[0-9]{2}|400/;
        
        const length = document.getElementById('length').value;
        const InputLenth = document.getElementById('length');
        const RegExrLength = /[1-6]{1}[0-9]{2}|700/;

        const width = document.getElementById('width').value;
        const InputWidth = document.getElementById('width');
        const RegExrWidth = /[1-3]{1}[0-9]{2}|400/;
        
        // if (RegExrHeight.test(height) == false) {
        //     InputHeigh.classList.add("error");
        //     InputHeigh.focus();
        //     return;  
        if (parseInt(height) < 200 || parseInt(height) > 400) {
            InputHeigh.classList.add("error");
            InputHeigh.focus();
            return;
        }   else if (RegExrLength.test(length) == false) {
            InputLenth.classList.add("error");
            InputHeigh.classList.remove("error");
            InputLenth.focus();
            return;
        }   else if (RegExrWidth.test(width) == false) {
            InputWidth.classList.add("error");
            InputWidth.focus();
            InputLenth.classList.remove("error");
            InputHeigh.classList.remove("error");
            return;
        }   else {
            document.getElementById("sizeOfStairs").classList.remove("active");
            document.getElementById("facing").classList.add("active"); 
            InputWidth.classList.remove("error");
            order.stairParams = {
                height : height,
                width : width,
                length : length,
            };
            
        };
    });
        
    //step3
    document.getElementById('calculate').addEventListener('click', () => {
        const typeFacingSelected = document.querySelector("input[name='facing']:checked")
        order.finishesView = typeFacingSelected.value;
        
        const valueType = document.getElementById('valueType');
        valueType.textContent = order.typeStairs;
        const valueView = document.getElementById('valueView');
        valueView.textContent = order.stairsView;
        const valueFacing = document.getElementById('valueFinish');
        valueFacing.textContent = order.finishesView;

        const valueLength = document.getElementById('valueLength');
        valueLength.textContent = order.stairParams.length + ' ' + 'см';
        const valueWidth = document.getElementById('valueWidth');
        valueWidth.textContent = order.stairParams.width + ' ' + 'см';
        const valueHeight = document.getElementById('valueHeight');
        valueHeight.textContent = order.stairParams.height + ' ' + 'см';

        
    });
    
    //step4
    document.getElementById('getAQuote').addEventListener('click', () => {
        
        const name = document.getElementById('customerName').value;
        const InputName = document.getElementById('customerName');
        const RegExrName = /^[А-Я][а-яё]*$/;

        const phone = document.getElementById('customerPhone').value;
        const InputPhone = document.getElementById('customerPhone');
        const RegExrPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

        const mail = document.getElementById('customerMail').value;
        const InputMail = document.getElementById('customerMail');
        const RegExrMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        
        if (RegExrName.test(name) == false) {
            InputName.classList.add("error");
            InputName.focus();
            return;
        } else if (RegExrPhone.test(phone) == false) {
            InputName.classList.remove("error");
            InputPhone.classList.add("error");
            InputPhone.focus();
            return;
        } else if(RegExrMail.test(mail) == false) {
            InputMail.classList.add("error");
            InputName.classList.remove("error");
            InputPhone.classList.remove("error");
            InputMail.focus();
            return;
        } else {
            InputPhone.classList.remove("error");
            InputName.classList.remove("error");
            InputMail.classList.remove("error");
        }

        const customer = {
            name: document.getElementById('customerName').value,
            phone: document.getElementById('customerPhone').value,
            email: document.getElementById('customerMail').value,
        }
        
        order.customer = customer;
        
        const closesizeOfStairs = document.getElementById("finish");
        closesizeOfStairs.classList.remove("active");
   
       window.setTimeout(() => console.log('Заказ сформирован и отправлен: ', order), 1000);
    });

};
