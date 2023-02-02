var answer = 0;
var x = 0;
var y = 0;
let operator = 0;
let ready = "no";
var chain = 0;
let symbol = 0;

let setSymbol = function (){
    if (operator === "a"){
        symbol = "+";
    } else if (operator === "s"){
        symbol = "-";
    } else if (operator === "m"){
        symbol = "*";
    } else if (operator === "d"){
        symbol = "/";
    }
}

// This was going to be the beginning showing the work in the calculator UI

//let formula = document.getElementById('formula');

//let showForumla = function () {
//    formula.innerHTML = x + " " + symbol + " ";
//}

let add = function (a, b) {
    answer = parseFloat(a) + parseFloat(b);
    return answer;
};

let subtract = function (a, b) {
    answer = parseFloat(a) - parseFloat(b);
    return answer;
};

let multiply = function (a, b) {
    answer = parseFloat(a) * parseFloat(b);
    return answer;
};

let divide = function (a, b) {
    answer = parseFloat(a) / parseFloat(b);
    return answer;
};

let operate = function (operator, a, b) {
    if (operator === "m") {
        multiply(a,b);
    } else if (operator === "d") {
        divide(a,b);
    } else if (operator === "s") {
        subtract(a,b);
    } else if (operator === "a") {
        add(a,b);
    }
};

let inputs = document.getElementById('results');

document.getElementById('1').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "1";
    } else if (ready === "yes") {
        inputs.innerHTML = "";
        inputs.innerHTML += "1";
        ready ="no";
    } else {
    inputs.innerHTML += "1";
    }
};

document.getElementById('2').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "2";
    } else if (ready === "yes") {
        inputs.innerHTML = "";
        inputs.innerHTML += "2";
        ready ="no";
    } else {
    inputs.innerHTML += "2";
    }
};

document.getElementById('3').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "3";
    } else if (ready === "yes") {
        inputs.innerHTML = "";
        inputs.innerHTML += "3";
        ready ="no";
    } else {
    inputs.innerHTML += "3";
    }
};

document.getElementById('4').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "4";
    } else if (ready === "yes") {
        inputs.innerHTML = "";
        inputs.innerHTML += "4";
        ready ="no";
    } else {
    inputs.innerHTML += "4";
    }
};

document.getElementById('5').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "5";
    } else if (ready === "yes") {
        inputs.innerHTML = "";
        inputs.innerHTML += "5";
        ready ="no";
    } else {
    inputs.innerHTML += "5";
    }
};

document.getElementById('6').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "6";
    } else if (ready === "yes") {
        inputs.innerHTML = "";
        inputs.innerHTML += "6";
        ready ="no";
    } else {
    inputs.innerHTML += "6";
    }
};

document.getElementById('7').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "7";
    } else if (ready === "yes") {
        inputs.innerHTML = "";
        inputs.innerHTML += "7";
        ready ="no";
    } else {
    inputs.innerHTML += "7";
    }
};

document.getElementById('8').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "8";
    } else if (ready === "yes") {
        inputs.innerHTML = "";
        inputs.innerHTML += "8";
        ready ="no";
    } else {
    inputs.innerHTML += "8";
    }
};

document.getElementById('9').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "9";
    } else if (ready === "yes") {
        inputs.innerHTML = "";
        inputs.innerHTML += "9";
        ready ="no";
    } else {
    inputs.innerHTML += "9";
    }
};

document.getElementById('zero').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "0";
    } else if (ready === "yes") {
        inputs.innerHTML = "";
        inputs.innerHTML += "0";
        ready ="no";
    } else {
    inputs.innerHTML += "0";
    }
};

document.getElementById('decimal').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += ".";
    } else if (ready === "yes") {
        inputs.innerHTML = "";
        inputs.innerHTML += "1";
    } else if (inputs.innerHTML.includes(".")) {
    } else {
    inputs.innerHTML += ".";
    }
};

document.getElementById('add').onclick = function() {
    chain++;
    if (chain > 1){
        y = inputs.innerHTML;
        ready = "yes";
        operate(operator, x, y);
        x = answer;
        inputs.innerHTML = answer;
        operator = "a";
    } else {
    x = inputs.innerHTML;
    ready = "yes";
    operator = "a";
    }
}

document.getElementById('subtract').onclick = function() {
    chain++;
    if (chain > 1){
        y = inputs.innerHTML;
        ready = "yes";
        operate(operator, x, y);
        x = answer;
        inputs.innerHTML = answer;
        operator = "s";
    } else {
    x = inputs.innerHTML;
    ready = "yes";
    operator = "s";
    }
}

document.getElementById('multiply').onclick = function() {
    chain++;
    if (chain > 1){
        y = inputs.innerHTML;
        ready = "yes";
        operate(operator, x, y);
        x = answer;
        inputs.innerHTML = answer;
        operator = "m";
    } else {
    x = inputs.innerHTML;
    ready = "yes";
    operator = "m";
    }
}

document.getElementById('divide').onclick = function() {
    chain++;
    if (chain > 1){
        y = inputs.innerHTML;
        ready = "yes";
        operate(operator, x, y);
        x = answer;
        inputs.innerHTML = answer;
        operator = "d";
    } else {
    x = inputs.innerHTML;
    ready = "yes";
    operator = "d";
    }
}

document.getElementById('equal').onclick = function() {
    y = inputs.innerHTML;
    ready = "no";
    chain = 0;
    operate(operator, x, y);
    inputs.innerHTML = answer;
}

document.getElementById('clear').onclick = function() {
    x = 0;
    y = 0;
    ready = "no";
    chain = 0;
    operator = 0;
    inputs.innerHTML = 0;
}

document.getElementById('negate').onclick = function() {
    x = inputs.innerHTML * -1;
    inputs.innerHTML = x;
}

document.getElementById('percent').onclick = function() {
    if (x === 0){
        y = inputs.innerHTML/100;
        inputs.innerHTML = y;
    } else {
    y = x * inputs.innerHTML/100;
    }
}