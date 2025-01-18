function getFruit (obj) {

    let sum = 0;

    for (let prop in obj) {
        if (!Number.isNaN(Number(obj[prop]))) {
            sum += obj[prop];
        }
    }

    return sum;
}

let bag = {
    apple: 5,
    pear: 7,
    orange: 'apelsin',
    lemon: false,
    banana: 9,
    pineapple: NaN,
    watermelon: null,
    cherry: undefined,
};

console.log(getFruit(bag));



