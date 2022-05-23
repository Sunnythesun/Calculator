const body = document.body;
const calcContainer = document.createElement("div");
const flexContainer = document.createElement("div");
calcContainer.setAttribute("id", "calc-container");
flexContainer.setAttribute("id", "flex-container");
body.append(calcContainer);

for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    calcContainer.append(div);
    div.style.backgroundColor = "rgb(116,179,199)";

    if (i === 0) {
        calcContainer.append(flexContainer);
    }
}

for (let i = 0; i < 18; i++) {
    const div = document.createElement("div");
    flexContainer.append(div);
    //div.style.backgroundColor = "rgb(116,179,99)";

    if (i === 0) {
        div.style.backgroundColor = "rgb(116,179,99)";
        div.setAttribute("id", "screen-container");

        for (let i = 0; i < 2; i++) {
            const screenDiv = document.createElement("div");
            div.append(screenDiv);
        }

    }
    else if (i === 1) {
        div.style.backgroundColor = "rgb(16,79,99)";
        div.setAttribute("id", "answer-container");
        const answerDiv = document.createElement("div");

        for (let i = 0; i < 2; i++) {
            const answerDiv = document.createElement("div");
            div.append(answerDiv);
        }
    }
}






function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function operate(operator, num, num2) {

    if (operator === "add") {
        return add(num, num2);
    }
    else if (operator === "subtract") {
        return subtract(num, num2);
    }
    else if (operator === "multiply") {
        return multiply(num, num2);
    }
    else if (operator === "divide") {
        return divide(num, num2);
    }
}