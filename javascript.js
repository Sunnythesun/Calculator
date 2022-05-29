let equation = " "; //for the stored equation when buttons are pressed


const body = document.body;
const calcContainer = document.createElement("div");        //flex container creation
const flexContainer = document.createElement("div");
const screenContainer = document.createElement("div");
calcContainer.setAttribute("id", "calc-container");
flexContainer.setAttribute("id", "flex-container");
body.append(calcContainer);

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
        //div.innerText = equation;
        div.setAttribute("id", "entriesScreen")
    }
    else if (i === 1) {
        div.innerText = "90";
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
        div.innerText = "/";
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
        div.setAttribute("id", "6button")
    }
    else if (i === 11) {
        div.innerText = "*";
        div.setAttribute("id", "*Button")
    }
    else if (i === 12) {
        div.innerText = "1";
        div.setAttribute("id", "1button")
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


document.getElementById("5Button").addEventListener("mousedown", clicked);
document.getElementById("5Button").addEventListener("mouseup", unclicked);



function clicked() {
    event.target.style.backgroundColor = "rgb(208, 208, 208)";
    equation += "5";
}

function unclicked() {
    event.target.style.backgroundColor = "rgb(238, 238, 238)";
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