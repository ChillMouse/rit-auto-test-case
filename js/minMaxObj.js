const obj = {
    a0: {aa: [3, 9], bb: 2, cc: {aaa: 4,bbb: -5}},
    a1: {aa: [0, 8], bb: -7, cc: {aaa: 8, bbb: 7}},
    a2: {aa: [9, -4], bb: 1, cc: {aaa: -1, bbb: 8}},
    a3: {aa: [8, -1], bb: 7, cc: {aaa: 3, bbb: 0}},
    a4: {aa: [-4, -2], bb: -2, cc: {aaa: 8, bbb: 9}}
}

function getNumberFromString(str){  // Получаем все числа из строки str
    let regx = str.match(/\d/).map(Number);
    return regx;
}

let numbers = [];  // Массив всез чисел из объекта

for(let item in obj) {  //  Перебираем все свойства объекта, преобразуем их в строки, берём из строк числа и добавляем их в массив
    numbers += getNumberFromString( JSON.stringify( obj[item] ) );
}

function getMin(numbers) {  // Получить минимум
    return Math.min(...numbers);
}

function getMax(numbers) {  // Получить максимум
    return Math.max(...numbers);
}

console.log('min', getMin(numbers));
console.log('max', getMax(numbers));

const answerTask = document.querySelector('#answerTask');

answerTask.innerHTML = `Данные из объекта:<br/> Минимальное: ${getMin(numbers)} Максимальное: ${getMax(numbers)}`;
