function getFruit (obj) {

    let sum = 0;

    for (let prop in obj) {
        sum += obj[prop];
    }

    return console.log(sum);
}

let bag = {
    apple: 5,
    pear: 7,
    banana: 9,
};

getFruit(bag);

