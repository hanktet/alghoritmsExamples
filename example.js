// Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.
let array = [1.456, 2.125, 3.32, 4.1, 5.34];
let arraySort = [];
for (let i = 0; i < array.length; i++) {
    arraySort.push(Math.round(array[i] * 10) / 10);
}
console.log(arraySort);


//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://
let array1 = ["http://examples", "http://hi", "ftp:// hi"];
let sortArray = [];
for (let i = 0; i < array1.length; i++) {
    if (array1[i].substring(0, 7) === 'http://') {
        sortArray.push(array1[i]);
    }
}
console.log(sortArray);


//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html
let array2 = ["http://examples", "http://hi", "ftp:// hi", "way.html"];
for (let i = array2.length - 1; i >= 0; i--) {
    if (array2[i].slice(-5) !== '.html') {
        array2.splice(i, 1);
    }
}
console.log(array2);


//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
let array3 = [10, 20, 30, 40, 54];
for (let i = 0; i < array3.length; i++) {
    array3[i] *= 1.1;
}
console.log(array3);


//Заполните массив случайными числами из промежутка от 1 до 100.
let array4 = [];
let count1 = Math.random() * 10;
for (let i = 0; i < count1; i++) {
    array4.push(Math.floor(Math.random() * 100) + 1);
}
console.log(array4);


//Дано некоторое число: 12345. Выведите в консоль все его символы с конца.
let variable = 12345;
let stringVaruable = variable.toString();
for (let i = stringVaruable.length - 1; i >= 0; i--) {
    console.log(stringVaruable[i]);
}


//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
let array5 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < array5.length; i += 2) {
    let sortarray = [array5[i], array5[i + 1]];
    console.log(sortarray);
}


//Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr = arr1.concat(arr2);
console.log(arr);


//Дана некоторая строка. Найдите позицию первого нуля в строке.
let variable_1 = 'строка с позицией 0';
let position1 = variable_1.indexOf('0');
if (position1 >= 0) {
    console.log('позиция 0 - ' + position1);
} else { console.log('нуля нет'); }


//Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
for (let number = 1; number <= 1000; number++) {
    const numberStr = number.toString(); // Преобразуем число в строку
    if (numberStr.length >= 2) {
        const firstDigit = +(numberStr[0]); // Первая цифра
        const secondDigit = +(numberStr[1]); // Вторая цифра

        if (firstDigit + secondDigit === 5) {
            console.log(number);
        }
    }
}


//Дан массив. Удалите из него элементы с заданным значением.
let arra6 = [1, 2, 3, 4, 5, 3, 6];
let valueToRemove = 3;
for (let i = array6.length - 1; i >= 0; i--) {
    if (array6[i] === valueToRemove) {
        array6.splice(i, 1);
    }
}
console.log(array6);


//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.
let array7 = [1, 2, 3, 4, 5, 6];
let middleIndex1 = Math.floor(array7.length / 2);
let sum1 = 0;
for (let i = 0; i < middleIndex1; i++) {
    sum1 += array7[i];
}
console.log("сумма первой половины элементов массива:" + sum1);


//Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
const array8 = [1, -2, 3, -4, 5, -6];
let count = 0;
for (let i = 0; i < array8.length; i++) {
    if (array8[i] < 0) {
        count++;
    }
}
console.log("количество отрицательных чисел в массиве:" + count);


//Дан массив с числами. Оставьте в нем только положительные числа.
let array9 = [1, -2, 3, -4, 5, -6];
let i = 0;
while (i < array9.length) {
    if (array9[i] <= 0) {
        array9.splice(i, 1);
    } else {
        i++;
    }
}
console.log(array9);


//Дана строка. Удалите предпоследний символ из этой строки.
let str_0 = prompt('введите строку');
if (str_0.length >= 2) {
    alert('строка после удаления предпоследнего символа - ' + str_0.slice(0, -2) + str_0.slice(-1));
} else { alert('строка пуста'); }

//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
let array10 = [1, 2, 3, 4, 5, 6];

let middleIndex = Math.floor(array.length / 2);

let sumFirstHalf = 0;
let sumSecondHalf = 0;

for (let i = 0; i < array10.length; i++) {
    if (i < middleIndex) {
        sumFirstHalf += array10[i];
    } else {
        sumSecondHalf += array10[i];
    }
}

if (sumSecondHalf !== 0) {
    const result = sumFirstHalf / sumSecondHalf;
    console.log("результат деления:", result);
} else {
    console.log("сумма второй половины элементов равна нулю. Невозможно выполнить деление.");
}


//Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
let word1 = prompt("введите первое слово");
let word2 = prompt("введите второе слово");

let lastLetterWord1 = word1[word1.length - 1];
let firstLetterWord2 = word2[0];

if (lastLetterWord1 === firstLetterWord2) {
    alert("последняя буква первого слова совпадает с первой буквой второго слова.");
} else {
    alert("последняя буква первого слова не совпадает с первой буквой второго слова.");
}


//Дана некоторая строка. Найдите позицию третьего нуля в строке.
let str = "012304050600";
let position2 = -1;
let firstZero = str.indexOf("0");
if (firstZero !== -1) {
    let secondZero = str.indexOf("0", firstZero + 1);
    if (secondZero !== -1) {
        position2 = str.indexOf("0", secondZero + 1);
    }
}

if (position2 !== -1) {
    console.log("позиция третьего нуля:" + position2);
} else {
    console.log("третий ноль не найден в строке.");
}

//Даны числа, разделенные запятыми: '12,34,56'
// Найдите сумму этих чисел.
let numbersString = '12,34,56';
let numbersArray = numbersString.split(',');
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
    sum += +(numbersArray[i]);
}
console.log("сумма чисел:" + sum);

//Дана дата в следующем формате: '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }
let dateString = '2025-12-31';
let dateComponents = dateString.split('-');
let dateObject = {
    year: dateComponents[0],
    month: dateComponents[1],
    day: dateComponents[2]
};
console.log(dateObject);


//Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
let str1 = 'abc123def';
let position = -1;

for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (char >= '0' && char <= '9') {
        position = i;
        break;
    }
}
if (position !== -1) {
    console.log("Позиция первой цифры:", position);
} else {
    console.log("цифры не найдены в строке.");
}


// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
let obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

let keysArray = [];
let valuesArray = [];

for (let key in obj) {
    keysArray.push(key);
    valuesArray.push(obj[key]);
}
console.log("массив ключей:", keysArray);
console.log("массив значений:", valuesArray);


// Дано число. Выведите в консоль количество четных цифр в этом числе.
let number = 1234567890;
let numberStr = number.toString();
let evenCount = 0;
for (let i = 0; i < numberStr.length; i++) {
    let digit = +(numberStr[i]);
    if (digit % 2 === 0) {
        evenCount++;
    }
}
console.log("количество четных цифр:", evenCount);


// Дана некоторая строка: 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'
let inputString1 = 'abcde';
let resultString1 = '';

for (let i = 0; i < inputString1.length; i++) {
    let char = inputString1[i];
    if (i % 2 === 0) {
        resultString1 += char.toUpperCase();
    } else {
        resultString1 += char;
    }
}

console.log(resultString1);

// Дана некоторая строка со словами: 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'
let inputString = 'aaa bbb ccc';
let words = inputString.split(' ');
let resultString = '';

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
        let capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
        resultString += capitalizedWord;
        if (i < words.length - 1) {
            resultString += ' ';
        }
    }
}

console.log(resultString);


//Дана некоторая строка, например, вот такая: '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.
let srt2 = '023m0df0dfg0';
let zeroPositions = [];

for (let i = 0; i < srt2.length; i++) {
    if (srt2[i] === '0') {
        zeroPositions.push(i);
    }
}

console.log(zeroPositions);


//Дана некоторая строка: 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'
let str3 = 'abcdefg';
let finalStr = '';
for (let i = 0; i < srt3.length; i++) {
    if ((i + 1) % 3 !== 0) {
        finalStr += str3[i];
    }
}
console.log(finalStr);

// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
let array11 = [1, 2, 3, 4, 5, 6];
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        sumEven += array11[i]; // Суммируем элементы на четных позициях
    } else {
        sumOdd += array11[i]; // Суммируем элементы на нечетных позициях
    }
}

if (sumOdd !== 0) {
    const result = sumEven / sumOdd;
    console.log(result);
} else {
    console.log("cумма элементов на нечетных позициях равна нулю.");
}


//Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
let str4 = 'abc123def456';
let digitPositions = [];

for (let i = 0; i < str4.length; i++) {
    let char = str4[i];
    if (char >= '0' && char <= '9') {
        digitPositions.push(i);
    }
}
console.log(digitPositions);


// Дан массив с некоторыми числами, например, вот такой: [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]
let numbers = [123, 456, 789];
let reversedNumbers = numbers.map(number => {
    let reversedString = number.toString().split('').reverse().join('');
    return +reversedString;
});

console.log(reversedNumbers);

// Дана некоторая строка с числом: '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'

let str5 = '1234567';
let formattedString = '';

for (let i = str5.length; i > 0; i -= 3) {
    let start = Math.max(0, i - 3);
    let end = i;
    let segment = str5.slice(start, end);

    if (formattedString.length > 0) {
        formattedString = ' ' + formattedString;
    }

    formattedString = segment + formattedString;
}

console.log(formattedString);


// Дана некоторая строка: 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: 'aBcDe'
let str12 = 'AbCdE';
let res = '';
for (i = 0; i < str12.length; i++) {
    if (i % 2 === 0) {
        res += str12[i].toLowerCase();
    } else {
        res += str12[i].toUpperCase()
    }
}
console.log(res);


// Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе: [12, 34, 56]
let array13 = [1, 2, 3, 4, 5, 6];
let arraySort1 = [];
for (i = 0; i < array13.length; i += 2) {
    arraySort1.push(array13[i] * 10 + array13[i + 1]);
}
console.log(arraySort1);


// Дана некоторая строка со словами:'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'
function exs_266() {
    let inputString = 'aaa bbb ccc eee fff';
    let words = inputString.split(' ');
    for (let i = 1; i < words.length; i += 2) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    let resultString = words.join(' ');
    return resultString;
}


//Дана некоторая строка:'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'
function exa_271() {
    let inputStr = 'a bc def ghij';
    let words = inputStr.split(' ');
    for (i = 0; i < words.length; i++) {
        if (words[i].length <= 3) {
            words[i] = words[i].toUpperCase();
        }
    }
    let resStr = words.join(' ');
    return resStr;
}
exa_271();


//Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
function exa_272(k) {
    if (k === k.toUpperCase()) {
        return console.log('буква в верхнем');
    } else { console.log('буква в нижнем регистре'); }
}


//Дано некоторое число, например, такое: 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28
function exa_273() {
    let number = 123789;
    let x = 1;
    let result = 0;
    while (number > 0) {
        let lastNumber = number % 10;
        if (lastNumber % 2 === 0) {
            result += lastNumber * x;
            x = 10;
        }
        number = Math.floor(number / 10);
    }
    return result;
}


//Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
function exa_281() {
    let word = 'kerERhKr';
    let wordsort = word.split('');
    let count = 0;
    for (let i = 0; i < wordsort.length; i++) {
        if (wordsort[i] === wordsort[i].toUpperCase()) {
            count += 1;
        }
    }
    if (count > 2) {
        return ('в строке более двух заглавных букв');
    }
}


//Дана некоторая строка: '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. 
// В нашем случае должно получится следующее: '1 22 333 22 1'
function exa_282() {
    let inputStr = '1 22 333 4444 22 5555 1';
    let words = inputStr.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length <= 3) {
            result.push(words[i]);
        }
    }
    return result.join(' ');
}


// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]
function exa_283() {
    let arr1 = [1, 2, 3];
    let arr2 = ['a', 'b', 'c'];
    let mergedArray = arr1.concat(arr2);
    mergedArray.splice(2, 0, 'a', 'b', 'c');
    mergedArray.splice(-3);

    console.log(mergedArray);
}


//Дано некоторое число: 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56
function exa_291() {
    let number0 = 123456;
    let sum0 = 0;

    while (number0 > 0) {
        let lastTwoDigits = number0 % 100;
        sum0 += lastTwoDigits;
        number0 = Math.floor(number0 / 100);
    }

    console.log(sum0);
}


// Дан массив с числами: [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.
function exa_292() {
    let arr = [1, 2, 3, 4, 5];

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}


// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
function exa_2101() {
    let str = "abdc123";
    let letterCount = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            letterCount++;

            if (letterCount > 3) {
                console.log("cтрока содержит более трех букв.");
                return;
            }
        }
    }

    console.log("cтрока содержит не более трех букв.");
}


// Дано число. Получите первую четную цифру с конца этого числа.
function exa_2102() {
    let number = 123456789;
    while (number > 0) {
        let lastNumber = number % 10;

        if (lastNumber % 2 === 0) {
            return lastNumber;
        }

        number = Math.floor(number / 10);
    }

    return -1;

    if (lastNumber !== -1) {
        console.log("первая четная цифра с конца числа:", lastNumber);
    } else {
        console.log("d числе нет четных цифр.");
    }
}


// Дана некоторая строка: 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'
function exa_2103() {

    let inputString = 'abcde abcde abcde';

    let words = inputString.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            words[i] = '!' + word.substring(1);
        }
    }

    let result = words.join(' ');
    return result;
}

// Дан массив с числами: [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.
function exa_2104(params) {
    let numbers = [1, 2, 3, 3, 4, 5];
    let hasTwoElements = false;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === numbers[i - 1]) {
            hasTwoElements = true;
            break;
        }
    }

    if (hasTwoElements) {
        console.log("в массиве есть два одинаковых элемента подряд.");
    } else {
        console.log("в массиве нет двух одинаковых элементов подряд.");
    }
}


// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
function exa31() {

    let inputNumber = 12345;
    let numberStr = inputNumber.toString();
    let isAscending = true;

    for (let i = 1; i < numberStr.length; i++) {
        let currentDigit = +(numberStr[i]);
        let previousDigit = +(numberStr[i - 1]);

        if (currentDigit < previousDigit) {
            isAscending = false;
            break;
        }
    }

    if (isAscending) {
        console.log("Цифры числа расположены по возрастанию.");
    } else {
        console.log("Цифры числа не расположены по возрастанию.");
    }
}


// Дан массив: [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.
function exa_32() {
    let arr = [1, '', 2, 3, '', 5];
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '') {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);
}

// Дан массив:
// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]  Отсортируйте элементы в каждом подмассиве.


// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.


//2.7.2
//Дано число. Получите массив делителей этого числа.
let number12 = 24;
let divisors = [];
for (let i = 1; i <= number12; i++) {
    if (number12 % i === 0) {
        divisors.push(i);
    }
}
console.log(result);


//2.7.3
// Даны два числа. Получите массив общих делителей этих чисел.
let num1 = 12;
let num2 = 18;

let commonDivisors = [];

for (let i = 1; i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        commonDivisors.push(i);
    }
}

console.log(commonDivisors);


////2.7.4
// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
let num = 17;
let divisorsCount = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        divisorsCount++;
        if (divisorsCount > 2) {
            break;
        }
    }
}

if (divisorsCount === 2) {
    console.log(`${num} - простое число`);
} else {
    console.log(`${num} - не простое число`);
}

////2.7.5
// Через запятую написаны числа. Получите максимальное из этих чисел.
let numbersStr = "5, 10, 15, 25, 7";
let numbersArr = numbersStr.split(",").map(Number);

let maxNumber = numbersArr[0];

for (let i = 1; i < numbersArr.length; i++) {
    if (numbersArr[i] > maxNumber) {
        maxNumber = numbersArr[i];
    }
}
console.log(maxNumber);

////2.7.6
// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
let numbers3 = [1, 2, 3, 4, 77, 5, 6];
let newArray = [];

for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i]);

    if (numbers[i] >= 0 && numbers[i] <= 9) {
        newArray.push(numbers[i]);
    }
}

console.log(newArray);

////2.7.7
// Дана строка. Удалите из нее все гласные буквы.
let str13 = "привет, мир!";
let result = "";

for (let i = 0; i < str13.length; i++) {
    if ("аеёиоуыэюяАЕЁИОУЫЭЮЯ".indexOf(str13[i]) === -1) {
        result += str13[i];
    }
}

console.log(result);

////2.7.8
// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
let str14 = "пример строки для теста";
let words1 = str14.split(" ");

for (let i = 0; i < words1.length; i++) {

    if (words1[i].length > 0) {
        let lastLetter = words1[i][(words1[i].length - 1)];
        let upperLastLetter = lastLetter.toUpperCase();
        words1[i] = words1[i].slice(0, -1) + upperLastLetter;
    }
}

let result1 = words1.join(" ");

console.log(result1);


////2.7.9
// Дан следующая структура:
// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];
// Найдите сумму элементов этой структуры.
let data = [{
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
];

let sum2 = 0;

for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    for (let key in obj) {
        let arr = obj[key];
        for (let j = 0; j < arr.length; j++) {
            sum2 += arr[j];
        }
    }
}

console.log(sum2);


//3.8.1
// Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

// №2
// Дана строка в формате:

// 'kebab-case'
// Преобразуйте ее в формат:

// 'snake_case'
let kebabCaseString = 'kebab-case';

let words5 = kebabCaseString.split('-');
let snakeCaseString = words5.join('_');

console.log(snakeCaseString); // Выведет 'snake_case'



// №3

// Дана строка в формате:

// 'snake_case'
// Преобразуйте ее в формат:

// 'camelCase'
let snakeCaseString1 = 'snake_case';
let words2 = snakeCaseString1.split('_');

for (let i = 1; i < words2.length; i++) {
    words2[i] = words2[i][0].toUpperCase() + words2[i].substring(1);
}

let camelCaseString1 = words2.join('');

console.log(camelCaseString1);


// №4

// Дана строка в формате:

// 'camelCase'
// Преобразуйте ее в формат:

// 'snake_case'

let camelCaseString = 'camelCase';
let snakeCaseString2 = '';

for (let i = 0; i < camelCaseString.length; i++) {
    let char = camelCaseString[i];
    if (char === char.toUpperCase()) {
        if (i !== 0) {
            snakeCaseString2 += '_';
        }
        snakeCaseString2 += char.toLowerCase();
    } else {
        snakeCaseString2 += char;
    }
}

console.log(snakeCaseString2);


// №5

// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]
let numRows = 5;
let numCols = 3;
let result2 = [];

for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j < numCols; j++) {
        row.push(j + 1);
    }
    result2.push(row);
}

console.log(result2);


//№1

// Дана строка. Проверьте, что эта строка состоит только из цифр.

// №2

// Дана строка. Проверьте, что эта строка состоит только из четных цифр.

// №3

// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

// №4

// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

// №5

// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]