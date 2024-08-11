




var calculator = document.getElementById("calculator");
var operators = ["+", "-", "*", "/" , "."];
var notAbleOnStart = ["+", "*", "/" , "%"];
var allowedOnStart = ["-"];

function logCalculator(num) {
    var value = calculator.value;
    if (value === "" && notAbleOnStart.includes(num)) {
        return;
    }
    if (value === "" && allowedOnStart.includes(num)) {
        calculator.value += num;
        return;
    }
    var lastChar = value.slice(-1);
    if (operators.includes(lastChar) && operators.includes(num)) {
        calculator.value = value.slice(0, -1) + num;
    } else {
        calculator.value += num;
    }
}

function allTol(num) {
    var value = calculator.value;
    var lastChar = value.slice(-1);
    if (operators.includes(lastChar) && operators.includes(num)) {
        calculator.value = value.slice(0, -1) + num;
    } else {
        calculator.value += num;
    }
}

function AC() {
    calculator.value = '';
}

function total() {
        calculator.value = eval(calculator.value);
    
}

function delet() {
    var value = calculator.value;
    calculator.value = value.slice(0, -1);
}







