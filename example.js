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

// Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе: [12, 34, 56]

// Дана некоторая строка со словами:'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'