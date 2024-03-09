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

    const IDS = {
        inputs: {
            stepTwo: ['height', 'length', 'width'],
            stepFour: ["customerName", "customerPhone", "customerMail"],
        },
        buttons: ["nextOne", "nextTwo", "calculate", "getAQuote"],
    }

    const getValue = (id) => document.getElementById(id).value;

    const checkInputs = (step) => IDS.inputs[step].filter((id) => checkCondition(id)).length;

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

    const handleClick = (event) => {
        const id = event.target.id;
        switch(id) {
            case "nextOne": {
                const typeStairsSelected = document.querySelector(
                    "input[name='typesOfStairs']:checked"
                );
                order.typeStairs = typeStairsSelected.value;
                
                break;
            }

            case "nextTwo": {
                const typeViewSelected = document.querySelector(
                    "input[name='viewStairs']:checked"
                    ).value;
        
                if (!checkInputs("stepTwo")) {
                    document.getElementById("facing").classList.add("active");
                    document.getElementById("sizeOfStairs").classList.remove("active");
                    order.stairParams = {
                        height: getValue("height"),
                        width: getValue("width"),
                        length: getValue("length"),
                    };
                    order.stairsView = typeViewSelected;
                }
                
                break;
            }

            case "calculate": {
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
                
                break;
            }
            
            case "getAQuote": {
                if (!checkInputs("stepFour")) {
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
                
                break;
            }
        }
    }   

    const createListeners = () => {
        IDS.buttons.map((elem) => document.getElementById(elem).addEventListener("click", handleClick));
        IDS.inputs.stepTwo.map((id) =>
            document
                .getElementById(id)
                .addEventListener("change", () => checkCondition(id))
            );
   
        IDS.inputs.stepFour.map((id) =>
            document
                .getElementById(id)
                .addEventListener("change", () => checkCondition(id))
            );
    
    }

    createListeners();
};


