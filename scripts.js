var answer = 0;
var x = 0;
var y = 0;
let operator = 0;

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
    }
    else {
    inputs.innerHTML += "1";
    }
};

document.getElementById('2').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "2";
    }
    else {
    inputs.innerHTML += "2";
    }
};

document.getElementById('3').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "3";
    }
    else {
    inputs.innerHTML += "3";
    }
};

document.getElementById('4').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "4";
    }
    else {
    inputs.innerHTML += "4";
    }
};

document.getElementById('5').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "5";
    }
    else {
    inputs.innerHTML += "5";
    }
};

document.getElementById('6').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "6";
    }
    else {
    inputs.innerHTML += "6";
    }
};

document.getElementById('7').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "7";
    }
    else {
    inputs.innerHTML += "7";
    }
};

document.getElementById('8').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "8";
    }
    else {
    inputs.innerHTML += "8";
    }
};

document.getElementById('9').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "9";
    }
    else {
    inputs.innerHTML += "9";
    }
};

document.getElementById('0').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += "0";
    }
    else {
    inputs.innerHTML += "0";
    }
};

document.getElementById('decimal').onclick = function() {
    if (parseInt(inputs.innerHTML) === 0){
        inputs.innerHTML = "";
        inputs.innerHTML += ".";
    }
    else if (inputs.innerHTML.includes(".")) {
    }
    else {
    inputs.innerHTML += ".";
    }
};

document.getElementById('add').onclick = function() {
    x = inputs.innerHTML;
    operator = "a";
    inputs.innerHTML="0";
}

document.getElementById('subtract').onclick = function() {
    x = inputs.innerHTML;
    operator = "s";
    inputs.innerHTML="0";
}

document.getElementById('multiply').onclick = function() {
    x = inputs.innerHTML;
    operator = "m";
    inputs.innerHTML="0";
}

document.getElementById('divide').onclick = function() {
    x = inputs.innerHTML;
    operator = "d";
    inputs.innerHTML="0";
}

document.getElementById('equal').onclick = function() {
    y = inputs.innerHTML;
    operate(operator, x, y);
    inputs.innerHTML = answer;
}

document.getElementById('clear').onclick = function() {
    x = 0;
    y = 0;
    operator = 0;
    inputs.innerHTML = 0;
}