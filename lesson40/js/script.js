
//Терміни: унарний , бінарний , операнд

//Операнд

//let userAge = 30 - 6; //Числа 30 і 6 це операнди

//let userHeight = h - y; // Змінні h і y це операнди


//Бінарні

//let userAges = 30 - 6 ; //Бінарний бо приміняється до двух операндів

//Унарні
//let userCash = -800; //Унарний бо приміняється до одного операнда

let x;
//Додавання
x = 5 + 8;
console.log(`Результат додавання: ${x}`);
//Віднімання
x = 9 - 5;
console.log(`Результат Віднімання: ${x}`);
//Множення
x = 2 * 3;
console.log(`Результат множення: ${x}`);
//Ділення
x = 10 / 2;
console.log(`Результат ділення: ${x}`);
//Взяття залишку від ділення %
x = 11 % 3;
console.log(`Результат взяття залишку від ділення %: ${x}`);
//Піднесення в степінь
x = 5 ** 3;
console.log(`Результат піднесення в степінь: ${x}`);

//Спеціальні можливості операторів

//Застосування оператора додавання до рядків

let resultOne = "Фрілансер"+" "+"по"+" "+"життю";
console.log(resultOne);

//Якщо хоча б один з операндів є рядком, то кінцевий результат теж буде рядком
let resultTwo = "Фрілансер "+ 58;
console.log(resultTwo);
console.log(typeof resultTwo);

//Порядок значення не має
let resultThree = 58 + " Фрілансер";
console.log(resultThree);

//Казуси
let resultFour = 2 + "2";
console.log(resultFour);

//Операції до додавання зі рядком виконуються як зазвичай
let resultFive = 58 -20 + " Фрілансер";
console.log(resultFive);


//Робота інших операторів
let resultOnes = "25" - 5;
console.log(resultOnes);
console.log(typeof resultOnes);
//Або
let resultTwos = 10 * "80";
console.log(resultTwos);
console.log(typeof resultTwos);
//Недопустима опеація
let resultThrees = 3 * " Фрілансер";
console.log(resultThrees); //Верне NaN
console.log(typeof resultThrees);

//Унарний оператор додавання +

//З рядками
let resultUne = +"25";
console.log(resultUne);
console.log(typeof resultUne);

//З числами
let resultTwune = +10;
console.log(resultTwune);
console.log(typeof resultTwune);


//Приклад унарного оператора додавання
let users = "25";
let admins = "10";
console.log(users + admins);

console.log(+users + +admins);

//Більш довгий запис
console.log(Number(users)+ Number(admins));


//Пріорітет операторів

//Різний пріорітет
let resultDiff = 2 - 1 * 5 ;
console.log(resultDiff);

//Дужки
let resultDiffTwo = (2 - 1) * 5 ;
console.log(resultDiffTwo);

//Однаковий пріорітет
let resultDiffThree = 2 - 1 + 5 ;
console.log(resultDiffThree);

//Оператор призначення

let a = 1 + 2;
let b = 2;

let result = 8 - (a = b + 3);
console.log("Результат в дужках "+ a);
console.log("Загальний результат "+ result);

//Призначення по ланцюжку

let resultLanc = resultLancTwo = resultLancThree = 1 + 2;
console.log(resultLanc);
console.log(resultLancTwo);
console.log(resultLancThree);

//Інкримент/ декремент

//Інкримент++
let addUser = 2
addUser++;
console.log(addUser);
//Декримент--
let removeUser = 2
removeUser--;
console.log(removeUser);

//Оператор кома

let usersCounter = (8 + 2, 19 + 1)
console.log(usersCounter);

//Побітові оператори

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
console.log(8 != 9);

//Надаємо результат переміній

let results = 11 > 10;
console.log(result);

//Порівняння рядків

//Алфавітний порядок
console.log('Б' > 'А');

//Алфавітний порядок
console.log('Скрипт' > 'Скрипка');

//Кількість символів
console.log('Слайдер' > 'Слайд');

//Регістр
console.log('Фрілансер' > 'фрілансер');


//Перетворення в число
console.log('58' > 10);
console.log('007' == 7);

//Логічне значення true
//Стає 1, а false – 0.
console.log(true == 1);
console.log(false == 0);


//оператор суворого рівненства чи не рівненства
//перевіряє рівненство без приведеня типів.


console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58);

//Логічні оператори

//Оператор || (АБО)

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

//Різні типи

console.log(1 || 0);
console.log(true ||'фрілансер');
console.log(null || 58);
console.log(null || 'фрілансер' || 0);
console.log(undefined || '' || null || 0);


//Оператор &&

//Булеві значення
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);


//Разные типы

//Приклад 1. 0 - false
console.log('Фрилансер' && 0 && 2 && 3);
//Приклад 2. null - false
console.log(1 && 2 && null && 3);
//Приклад 3. Все true
console.log('15' && '42');


//Оператор ! (НЕ)


//Булеві значення
console.log(!true);

//Різні типи
console.log(!null);
console.log(!1);
console.log(!'');
console.log(!'фрілансер');



//Оператор обєднання null (??)

/*
Оператор ?? повертає перший аргумент,
якщо він не null / undefined, в іншому випадку другий.
*/


