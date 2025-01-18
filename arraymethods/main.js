// Аналог метода slice

function mySlice(arr, start, end) {

    const result = [];

    if (start >= end) {
        console.log("Неверно. Введите 'start' меньше 'end'");
    }
    if (start == undefined || end == undefined) {
        console.log("Неверно. Введите оба параметра")
    }
    if (start < 0 && end > 0) {
        console.log("Неверно. Если хотите получить значения из конца массива, то 'end' тоже должен быть со знаком '-'")
    }
    if (start < 0) {
        start = arr.length + start;
    }
    if (end < 0) {
        end = arr.length + end;
    }
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
}

// Аналог метода indexOf

function myIndexOf(arr, item, from = 0) {
    if (from < 0) {
        from = arr.length + from;
    }
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i
        }
    }
    return -1;
}

// Аналог метода includes

function myIncludes(arr, item, from = 0) {
    if (from < 0) {
        from = arr.length + from;
    }
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

let array = [3, 5, 2, 7, 6, 8];

console.log(mySlice(array, 3, -1));
console.log(myIndexOf(array, 2));
console.log(myIncludes(array, 5));