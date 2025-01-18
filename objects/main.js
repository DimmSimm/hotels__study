function getSumFruit(obj) {

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

console.log(getSumFruit(bag));


function getSortedArrayFromObject(obj) {

    let filterProps = {};
    let sortedResult = [];

    for (let prop in obj) {
        if (+obj[prop]) {
            filterProps[prop] = obj[prop];
        }
    }

    let sortedArray = Object.entries(filterProps).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < sortedArray.length; i++) {
        sortedResult.push(sortedArray[i][0])
    }
    return sortedResult;
}

console.log(getSortedArrayFromObject(bag));

