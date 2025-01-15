let number = 1;
let attempt = 0;
let min = 1;
let max = 100;

const firstComputer = () => {
    if (attempt === 0) {
        number = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`Компьютер 1 загадал число: ${number}`);
        return null;
    } else if (attempt > number) {
        console.log('Компьютер 1: Меньше.')
        return "Меньше."; 
    } else if (attempt < number) {
        console.log('Компьютер 1: Больше.')
        return "Больше.";
    }
};

const secondComputer = (coldOrHot) => {
    if (!coldOrHot) {
        attempt = Math.floor((min + max) / 2);
    } else if (coldOrHot === "Меньше.") {
        max = attempt - 1;
        attempt = Math.floor((min + max) / 2);
    } else if (coldOrHot === "Больше.") {
        min = attempt + 1;
        attempt = Math.floor((min + max) / 2);
    }
    console.log(`Компьютер 2: Пробую число ${attempt}.`);
    return attempt;
};

while (attempt !== number) {
  secondComputer(firstComputer());
}

console.log('Компьютер 1: Угадал!');