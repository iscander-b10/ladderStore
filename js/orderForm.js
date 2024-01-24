export const checkOrderForm = (step) => {
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
        customerMail: {
            regExr: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        },
    };
    const IDS = {
        inputs: {
            stepOne: [],
            stepTwo: ["height", "length", "width"],
            stepThree: [],
            stepFours: [],
        },
        buttons: ["nextOne", "nextTwo", "calculate", "getAQuote"],
    };

    const getValues = (ids) => {
        return ids.map((id) => document.getElementById(id).value);
    }

    const checkInputs = (step) => {
        return !IDS.inputs[step].filter((id) => checkCondition(id)).length;
    };

    const checkCondition = (id) => {
        const { start, end, regExr } = CONDITIONS[id];
        const [value] = getValues([id]);

        const setError = (id) =>
            !step && document.getElementById(id).classList.add("error");
        const deleteError = (id) =>
            !step && document.getElementById(id).classList.remove("error");
        const createCondition = (value) =>
            regExr
                ? regExr.test(value)
                : Number(value) >= start && Number(value) <= end;

        if (createCondition(value)) {
            deleteError(id);
            return false;
        } else {
            setError(id);
            return true;
        }
    };

    const handleClick = (e) => {
        const { id } = e.target;
        console.log('id', id);

        switch (id) {
            case "nextOne": {
                const typeStairsSelected = document.querySelector(
                    "input[name='typesOfStairs']:checked"
                );
                order.typeStairs = typeStairsSelected.value;
                break;
            }
            case "nextTwo": {
                const arrIds = IDS.inputs.stepTwo;
                const typeViewSelected = document.querySelector(
                    "input[name='viewStairs']:checked"
                ).value;
                
                console.log(!checkInputs("stepTwo"))

                if (checkInputs("stepTwo")) {
                    console.log('save');
                    document.getElementById("facing").classList.add("active");
                    document
                        .getElementById("sizeOfStairs")
                        .classList.remove("active");
                    //saveData
                    const [height, length, width] = getValues(arrIds);
                    order.stairParams = { height, width, length };
                    order.stairsView = typeViewSelected;
                }
            }
            case "calculate": {
                const typeFacingSelected = document.querySelector(
                    "input[name='facing']:checked"
                );
                order.finishesView = typeFacingSelected.value;

                const valueType = document.getElementById("valueType");
                valueType.textContent = order.typeStairs;
                const valueView = document.getElementById("valueView");
                valueView.textContent = order.stairsView;
                const valueFacing = document.getElementById("valueFinish");
                valueFacing.textContent = order.finishesView;

                const valueLength = document.getElementById("valueLength");
                valueLength.textContent = order.stairParams.length + " " + "см";
                const valueWidth = document.getElementById("valueWidth");
                valueWidth.textContent = order.stairParams.width + " " + "см";
                const valueHeight = document.getElementById("valueHeight");
                valueHeight.textContent = order.stairParams.height + " " + "см";
            }
            case "getAQuote": {
                const [name] = getValues(["customerName"]);
                const InputName = document.getElementById("customerName");
                const RegExrName = /[A-Za-zА-Яа-я]/;

                const [phone] = getValues(["customerPhone"]);
                const InputPhone = document.getElementById("customerPhone");
                const RegExrPhone =
                    /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

                const [mail] = getValues(["customerMail"]);
                const InputMail = document.getElementById("customerMail");

                if (RegExrName.test(name) == false) {
                    InputName.classList.add("error");
                    InputName.focus();
                    return;
                } else if (RegExrPhone.test(phone) == false) {
                    InputName.classList.remove("error");
                    InputPhone.classList.add("error");
                    InputPhone.focus();
                    return;
                } else if (checkCondition("customerMail")) {
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

                const customer = { name, phone, email: mail };

                order.customer = customer;

                window.setTimeout(
                    () => console.log("Заказ сформирован и отправлен: ", order),
                    1000
                );
            }
        }
    };

    const createClickListeners = () => {
        IDS.buttons.map((id) =>
            document.getElementById(id).addEventListener("click", handleClick)
        );

        IDS.inputs.stepTwo.map((id) =>
            document
                .getElementById(id)
                .addEventListener("change", () => checkCondition(id))
        );
    };

    createClickListeners();

    return step && checkInputs(step);
};
