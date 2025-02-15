let newNumbers = [];

function myFilter(array, callback) {
    for (let i = 0; i <= array.length; i++) {
        if (callback(array[i])) {
            newNumbers.push(array[i]);
        } continue;
    }

    return newNumbers;

}

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = myFilter(numbers, num => num % 2 === 0);
console.log(evenNumbers);

newNumbers = []; // Обнуляем массив, чтобы вторая функция сработала верно

const greaterThanThree = myFilter(numbers, num => num > 3);
console.log(greaterThanThree);

console.log(numbers); // Исходный массив не изменился