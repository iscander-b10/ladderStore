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
        customerMail: {
            regExr: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        }
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
    });

    //step4
    document.getElementById("getAQuote").addEventListener("click", () => {
        const name = getValue("customerName");
        const InputName = document.getElementById("customerName");
        const RegExrName = /^[А-Я][а-яё]*$/;

        const phone = getValue("customerPhone");
        const InputPhone = document.getElementById("customerPhone");
        const RegExrPhone =
            /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

        const mail = getValue("customerMail");
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
        } else if (checkCondition('customerMail')) {
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

        const closesizeOfStairs = document.getElementById("finish");
        closesizeOfStairs.classList.remove("active");

        window.setTimeout(
            () => console.log("Заказ сформирован и отправлен: ", order),
            1000
        );
    });
};
