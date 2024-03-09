export const checkOrderForm = () => {
    const order = {};
    const CONDITIONS = {
        height: {
            start: 200,
            end: 400,
        },
        length: {
            start: 100,
            end: 700,
        },
        width: {
            start: 100,
            end: 400,
        },
        customerName: {
            regExr: /^[А-Я][а-яё]*$/,
        },
        customerPhone: {
            regExr: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
        },
        customerMail: {
            regExr: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        },
    };

    const getValue = (id) => document.getElementById(id).value;

    const checkCondition = (id) => {
        const { start, end, regExr } = CONDITIONS[id];
        const value = start ? Number(getValue(id)) : getValue(id);
        
        const setError = (id) =>
            document.getElementById(id).classList.add("error");
        const deleteError = (id) =>
            document.getElementById(id).classList.remove("error");
        const createCondition = (value) =>
            regExr ? regExr.test(value) : value >= start && value <= end;

        if (createCondition(value)) {
            deleteError(id);
            return false;
        } else {
            setError(id);
            return true;
        }
    };

    //step1
    document.getElementById("nextOne").addEventListener("click", () => {
        const typeStairsSelected = document.querySelector(
            "input[name='typesOfStairs']:checked"
        );
        order.typeStairs = typeStairsSelected.value;
    });

    //step2
    const arrId = ['height', 'length', 'width'];
    arrId.map((id) =>
        document
            .getElementById(id)
            .addEventListener("change", () => checkCondition(id))
    );
    document.getElementById("nextTwo").addEventListener("click", () => {
        const typeViewSelected = document.querySelector(
            "input[name='viewStairs']:checked"
            ).value;
        const checkInputs = arrId.filter((id) => checkCondition(id)).length;

        if (!checkInputs) {
            document.getElementById("facing").classList.add("active");
            document.getElementById("sizeOfStairs").classList.remove("active");
            order.stairParams = {
                height: getValue("height"),
                width: getValue("width"),
                length: getValue("length"),
            };
            order.stairsView = typeViewSelected;
        }
    });

    //step3
    document.getElementById("calculate").addEventListener("click", () => {
        const pasteValue = (id, value) => {
            const adjustingValue = value > 0 ? value + " см" : value; 
            document.getElementById(id).textContent = adjustingValue;
        }
        
        const typeFacingSelected = document.querySelector(
            "input[name='facing']:checked"
        );
        order.finishesView = typeFacingSelected.value;

        const arrInputs = {
            valueType: order.typeStairs,
            valueView: order.stairsView,
            valueFinish: order.finishesView,
            valueLength: order.stairParams.length,
            valueWidth: order.stairParams.width,
            valueHeight: order.stairParams.height,
        }
        
        Object.keys(arrInputs).map((id) => pasteValue(id, arrInputs[id]));
    });

    //step4
    const arrCustomer = ["customerName", "customerPhone", "customerMail"];
    arrCustomer.map((id) =>
        document
            .getElementById(id)
            .addEventListener("change", () => checkCondition(id))
        );
    
    document.getElementById("getAQuote").addEventListener("click", () => {
        const checkInputs =  arrCustomer.filter((id) => checkCondition(id)).length;
        
        if (!checkInputs) {
            order.customer = {
                customerName: getValue("customerName"),
                customerPhone: getValue("customerPhone"),
                customerMail: getValue("customerMail"),
            };
            const closesizeOfStairs = document.getElementById("finish");
            closesizeOfStairs.classList.remove("active");
            
            window.setTimeout(
                () => console.log("Заказ сформирован и отправлен: ", order),
                1000
            );
        }
    });
};


