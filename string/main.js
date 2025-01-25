// Самое простое - это иногда мы исправляем за пользователем его ввод данных и хотим, чтобы наша строка начиналась с большой буквы, независимо от того, что ввел пользователь.
// Необходимо реализовать такую функцию.

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


// Часто в интерфейсах программ мы видим какую-то длинную строку, которая не помещается и обрезана через троеточие.
// Давайте напишем аналогичный метод.
// На вход получаем длинную или не очень строку и размер ограничения (например, то что у нас влезает 40 символов).
// На выходе возвращает, по необходимости укороченную строку, в конце которой стоит троеточие.
// Усложняем задание тем, что строка не должна обрезаться посредине слова. Обрезаем строку по пробелу или по символу знака препинания (,.!?:;)/

function limitationString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }

    let cuttedStr = str.slice(0, maxLength);

    const lastSpaceIndex = Math.max(
        cuttedStr.lastIndexOf(' '),
        cuttedStr.lastIndexOf(','),
        cuttedStr.lastIndexOf('.'),
        cuttedStr.lastIndexOf('!'),
        cuttedStr.lastIndexOf('?'),
        cuttedStr.lastIndexOf(':'),
        cuttedStr.lastIndexOf(';'),
        cuttedStr.lastIndexOf('/')
    );

    if (lastSpaceIndex !== -1) {
        cuttedStr = cuttedStr.slice(0, lastSpaceIndex);
    }
    return cuttedStr + '...';
}

const longString = "Это, очень длинная строка, которая не помещается в заданный размер.";
console.log(limitationString(longString, 40));


// Небольшое практическое задание по работе с подстроками.
// Функция на вход получает 2 строки, а на выходе возвращает true/false в зависимости от того, является хотя бы одна из строк (не важно какая) подстрокой другой строки. Если да, то возвращается true. В противном случае - false.

function checkSubstring (str1, str2) {
    return (str1.includes(str2) || str2.includes(str1));
}

console.log(checkSubstring("первая строка", "вторая строка"));