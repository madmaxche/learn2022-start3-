"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//Терміни: унарний , бінарний , операнд
//Операнд
//let userAge = 30 - 6; //Числа 30 і 6 це операнди
//let userHeight = h - y; // Змінні h і y це операнди
//Бінарні
//let userAges = 30 - 6 ; //Бінарний бо приміняється до двух операндів
//Унарні
//let userCash = -800; //Унарний бо приміняється до одного операнда
var x; //Додавання

x = 5 + 8;
console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0434\u043E\u0434\u0430\u0432\u0430\u043D\u043D\u044F: ".concat(x)); //Віднімання

x = 9 - 5;
console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0412\u0456\u0434\u043D\u0456\u043C\u0430\u043D\u043D\u044F: ".concat(x)); //Множення

x = 2 * 3;
console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043C\u043D\u043E\u0436\u0435\u043D\u043D\u044F: ".concat(x)); //Ділення

x = 10 / 2;
console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0434\u0456\u043B\u0435\u043D\u043D\u044F: ".concat(x)); //Взяття залишку від ділення %

x = 11 % 3;
console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u0437\u044F\u0442\u0442\u044F \u0437\u0430\u043B\u0438\u0448\u043A\u0443 \u0432\u0456\u0434 \u0434\u0456\u043B\u0435\u043D\u043D\u044F %: ".concat(x)); //Піднесення в степінь

x = Math.pow(5, 3);
console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u0456\u0434\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0432 \u0441\u0442\u0435\u043F\u0456\u043D\u044C: ".concat(x)); //Спеціальні можливості операторів
//Застосування оператора додавання до рядків

var resultOne = "Фрілансер" + " " + "по" + " " + "життю";
console.log(resultOne); //Якщо хоча б один з операндів є рядком, то кінцевий результат теж буде рядком

var resultTwo = "Фрілансер " + 58;
console.log(resultTwo);
console.log(_typeof(resultTwo)); //Порядок значення не має

var resultThree = 58 + " Фрілансер";
console.log(resultThree); //Казуси

var resultFour = 2 + "2";
console.log(resultFour); //Операції до додавання зі рядком виконуються як зазвичай

var resultFive = 58 - 20 + " Фрілансер";
console.log(resultFive); //Робота інших операторів

var resultOnes = "25" - 5;
console.log(resultOnes);
console.log(_typeof(resultOnes)); //Або

var resultTwos = 10 * "80";
console.log(resultTwos);
console.log(_typeof(resultTwos)); //Недопустима опеація

var resultThrees = 3 * " Фрілансер";
console.log(resultThrees); //Верне NaN

console.log(_typeof(resultThrees)); //Унарний оператор додавання +
//З рядками

var resultUne = +"25";
console.log(resultUne);
console.log(_typeof(resultUne)); //З числами

var resultTwune = +10;
console.log(resultTwune);
console.log(_typeof(resultTwune)); //Приклад унарного оператора додавання

var users = "25";
var admins = "10";
console.log(users + admins);
console.log(+users + +admins); //Більш довгий запис

console.log(Number(users) + Number(admins)); //Пріорітет операторів
//Різний пріорітет

var resultDiff = 2 - 1 * 5;
console.log(resultDiff); //Дужки

var resultDiffTwo = (2 - 1) * 5;
console.log(resultDiffTwo); //Однаковий пріорітет

var resultDiffThree = 2 - 1 + 5;
console.log(resultDiffThree); //Оператор призначення

var a = 1 + 2;
var b = 2;
var result = 8 - (a = b + 3);
console.log("Результат в дужках " + a);
console.log("Загальний результат " + result); //Призначення по ланцюжку

var resultLanc = resultLancTwo = resultLancThree = 1 + 2;
console.log(resultLanc);
console.log(resultLancTwo);
console.log(resultLancThree); //Інкримент/ декремент
//Інкримент++

var addUser = 2;
addUser++;
console.log(addUser); //Декримент--

var removeUser = 2;
removeUser--;
console.log(removeUser); //Оператор кома

var usersCounter = (8 + 2, 19 + 1);
console.log(usersCounter); //Побітові оператори

/*
AND(и) ( & )
OR(или) ( | )
XOR(побітове виключне або) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(лівий зсув) ( << )
RIGHT SHIFT(правий зсув) ( >> )
ZERO-FILL RIGHT SHIFT(правий зсув з заповненням нулями) ( >>> )
*/
//=====================================================
//Оператори порівняння

console.log(2 > 1);
console.log(4 < 2);
console.log(58 == 36);
console.log(8 != 9); //Надаємо результат переміній

var results = 11 > 10;
console.log(result); //Порівняння рядків
//Алфавітний порядок

console.log('Б' > 'А'); //Алфавітний порядок

console.log('Скрипт' > 'Скрипка'); //Кількість символів

console.log('Слайдер' > 'Слайд'); //Регістр

console.log('Фрілансер' > 'фрілансер'); //Перетворення в число

console.log('58' > 10);
console.log('007' == 7); //Логічне значення true
//Стає 1, а false – 0.

console.log(true == 1);
console.log(false == 0); //оператор суворого рівненства чи не рівненства
//перевіряє рівненство без приведеня типів.

console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58); //Логічні оператори
//Оператор || (АБО)

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false); //Різні типи

console.log(1 || 0);
console.log(true || 'фрілансер');
console.log(null || 58);
console.log(null || 'фрілансер' || 0);
console.log(undefined || '' || null || 0); //Оператор &&
//Булеві значення

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false); //Разные типы
//Приклад 1. 0 - false

console.log('Фрилансер' && 0 && 2 && 3); //Приклад 2. null - false

console.log(1 && 2 && null && 3); //Приклад 3. Все true

console.log('15' && '42'); //Оператор ! (НЕ)
//Булеві значення

console.log(!true); //Різні типи

console.log(!null);
console.log(!1);
console.log(!'');
console.log(!'фрілансер'); //Оператор обєднання null (??)

/*
Оператор ?? повертає перший аргумент,
якщо він не null / undefined, в іншому випадку другий.
*/