// Задание:
// Подготовьте простой калькулятор simpleCalculate, который будет выполнять нужную операцию из четырех стандартных: */+-. Без использования операторов ветвления (if/else). Ваш вызов будет выглядеть примерно так:
// const selectedOperation = "multiply";
// console.log(calculate(6, 3, operations[selectedOperation])); // 18

const getPlus = function (a, b) {
    return a + b;
}

const getMinus = function (a, b) {
    return a - b;
}

const getMultiply = function (a, b) {
    return a * b;
}

const getDivision = function (a, b) {
    return a / b;
}

function calculate(a, b, operation) {
    return operation(a, b);
}

const operations = {
    plus: getPlus,
    minus: getMinus,
    multiply: getMultiply,
    division: getDivision,
}

const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation]))

