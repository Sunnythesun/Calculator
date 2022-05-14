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


//let operator = "add";
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