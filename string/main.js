function upperCaseFirstLetter(str) {
    let newString = '';
    if (str.trim().length === 0) {
        newString = 'Empty string';
    } else {
        newString = str[0].toUpperCase() + str.slice(1);
    }
    return newString;
}

console.log(upperCaseFirstLetter('hello'));
