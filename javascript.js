let equation = " "; //for the stored equation when buttons are pressed and display
let answer = " ";   //answer for display

let a = " ";    //for answer screen calculation var storage
let b = " ";
let aorb = 0;
let func = " ";


const body = document.body;
const calcContainer = document.createElement("div");        //flex container creation
const flexContainer = document.createElement("div");
const screenContainer = document.createElement("div");
calcContainer.setAttribute("id", "calc-container");
flexContainer.setAttribute("id", "flex-container");
body.append(calcContainer);

createCalculator();

function createCalculator() {
    for (let i = 0; i < 2; i++) {                                   //creates 2 more divs to get calculator in middle of page
        const div = document.createElement("div");
        calcContainer.append(div);
        //div.style.backgroundColor = "rgb(116,179,199)";

        if (i === 0) {
            calcContainer.append(flexContainer);
        }
    }

    for (let i = 0; i < 20; i++) {                                  //creates calculator grid using flexbox
        const div = document.createElement("div");
        flexContainer.append(div);

        if (i === 0) {                     //calculator buttons
            div.innerText = equation;
            div.setAttribute("id", "entriesScreen")
        }
        else if (i === 1) {
            div.innerText = answer;
            div.setAttribute("id", "answerScreen")
        }
        else if (i === 2) {
            div.innerText = "CLEAR";
            div.setAttribute("id", "clearButton")
        }
        else if (i === 3) {
            div.innerText = "BACK";
            div.setAttribute("id", "backButton")
        }
        else if (i === 4) {
            div.innerText = "7";
            div.setAttribute("id", "7Button")
        }
        else if (i === 5) {
            div.innerText = "8";
            div.setAttribute("id", "8Button")
        }
        else if (i === 6) {
            div.innerText = "9";
            div.setAttribute("id", "9Button")
        }
        else if (i === 7) {
            div.innerText = "÷";
            div.setAttribute("id", "/Button")
        }
        else if (i === 8) {
            div.innerText = "4";
            div.setAttribute("id", "4Button")
        }
        else if (i === 9) {
            div.innerText = "5";
            div.setAttribute("id", "5Button")
        }
        else if (i === 10) {
            div.innerText = "6";
            div.setAttribute("id", "6Button")
        }
        else if (i === 11) {
            div.innerText = "×";
            div.setAttribute("id", "*Button")
        }
        else if (i === 12) {
            div.innerText = "1";
            div.setAttribute("id", "1Button")
        }
        else if (i === 13) {
            div.innerText = "2";
            div.setAttribute("id", "2Button")
        }
        else if (i === 14) {
            div.innerText = "3";
            div.setAttribute("id", "3Button")
        }
        else if (i === 15) {
            div.innerText = "-";
            div.setAttribute("id", "-Button")
        }
        else if (i === 16) {
            div.innerText = "0";
            div.setAttribute("id", "0Button")

        }
        else if (i === 17) {
            div.innerText = ".";
            div.setAttribute("id", ".Button")
        }
        else if (i === 18) {
            div.innerText = "=";
            div.setAttribute("id", "=Button")
        }
        else if (i === 19) {
            div.innerText = "+";
            div.setAttribute("id", "+Button")
        }
    }
}


document.getElementById("1Button").addEventListener("mousedown", clicked);
document.getElementById("1Button").addEventListener("mouseup", unclicked);

document.getElementById("2Button").addEventListener("mousedown", clicked);
document.getElementById("2Button").addEventListener("mouseup", unclicked);

document.getElementById("3Button").addEventListener("mousedown", clicked);
document.getElementById("3Button").addEventListener("mouseup", unclicked);

document.getElementById("4Button").addEventListener("mousedown", clicked);
document.getElementById("4Button").addEventListener("mouseup", unclicked);

document.getElementById("5Button").addEventListener("mousedown", clicked);
document.getElementById("5Button").addEventListener("mouseup", unclicked);

document.getElementById("6Button").addEventListener("mousedown", clicked);
document.getElementById("6Button").addEventListener("mouseup", unclicked);

document.getElementById("7Button").addEventListener("mousedown", clicked);
document.getElementById("7Button").addEventListener("mouseup", unclicked);

document.getElementById("8Button").addEventListener("mousedown", clicked);
document.getElementById("8Button").addEventListener("mouseup", unclicked);

document.getElementById("9Button").addEventListener("mousedown", clicked);
document.getElementById("9Button").addEventListener("mouseup", unclicked);

document.getElementById("0Button").addEventListener("mousedown", clicked);
document.getElementById("0Button").addEventListener("mouseup", unclicked);

document.getElementById(".Button").addEventListener("mousedown", clicked);
document.getElementById(".Button").addEventListener("mouseup", unclicked);

document.getElementById("=Button").addEventListener("mousedown", clicked);
document.getElementById("=Button").addEventListener("mouseup", unclicked);

document.getElementById("+Button").addEventListener("mousedown", clicked);
document.getElementById("+Button").addEventListener("mouseup", unclicked);

document.getElementById("-Button").addEventListener("mousedown", clicked);
document.getElementById("-Button").addEventListener("mouseup", unclicked);

document.getElementById("*Button").addEventListener("mousedown", clicked);
document.getElementById("*Button").addEventListener("mouseup", unclicked);

document.getElementById("/Button").addEventListener("mousedown", clicked);
document.getElementById("/Button").addEventListener("mouseup", unclicked);

document.getElementById("clearButton").addEventListener("mousedown", clicked);
document.getElementById("clearButton").addEventListener("mouseup", unclicked);

document.getElementById("backButton").addEventListener("mousedown", clicked);
document.getElementById("backButton").addEventListener("mouseup", unclicked);





function clicked() {
    event.target.style.backgroundColor = "rgb(208, 208, 208)";

    if (getElementOnClick(event) === "clearButton") {
        equation = " ";
    }
    else if (getElementOnClick(event) === "backButton") {
        equation = equation.substring(0, equation.length - 1);
    }
    else if (getElementOnClick(event) === "/Button") {
        equation += "÷";
    }
    else if (getElementOnClick(event) === "*Button") {
        equation += "×";
    }
    else if (getElementOnClick(event) === "=Button") {
        console.log(parseInt(equation));
    }
    else {
        equation += getElementOnClick(event).charAt(0);
    }

    var entryDiv = document.getElementById("entriesScreen");
    entryDiv.innerText = equation;

    var answerDiv = document.getElementById("answerScreen");
    answerDiv.innerText = answer;
}

function unclicked() {
    event.target.style.backgroundColor = "rgb(238, 238, 238)";
}


function getElementOnClick(e) {
    var element = e.target;
    return element.id;
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