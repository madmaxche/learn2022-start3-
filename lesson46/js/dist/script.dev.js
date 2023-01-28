/*
Одинарні і двійні лапки працюють однаково,
але якщо використовувати зворотні лапки, то в такий рядок
ми можемо вставляти довільні вирази, завернувши їх в ${...}:
*/

/*
let textHi = "Привіт!"
let textAll = `${textHi} Я рядок`;

console.log(textAll);
*/

/*
function someSum(a,b) {
	return a + b;
}
console.log(`Сумма: ${someSum(4,7)}`);
*/
//Багаторядковий запис

/*
let text = `Привіт!
Ви на каналі
Фрілансер по життю!
`;
console.log(text);
*/

/*
Все що заключенно в будь-які лапки буде мати тип данних рядок
*/

/*
let someString = "158";
let someNum = 158;
console.log(someString);
console.log(typeof someString);
console.log(someNum);
console.log(typeof someNum);

console.log(someString + someNum);

*/
//Спецсимволи

/*Всерединні рядків можна використовувати ряд спецсимволів.
Всі спецсимволи починаються з зворотного слеша. 
\ - так названого "символу екрануванн"
Ось декілька з них:
*/
//Перевод рядка \n

/*
let textOne = `Привіт!
Ви на каналі
Фрілансер по життю!
`;
console.log(textOne);

let textTwo = "Привіт!\nВи на каналі\nФрілансер по життю!"
console.log(textTwo);
*/
// Табуляція (відступ) \t

/*
let text = "Привіт!\n\tВи на каналі\n\t\tФрілансер по життю!";
console.log(text);
*/
// Зворотній слеш \\

/*
let text = "Привіт!Ви на каналіФрілансер по життю \\ АЙТИ та фріланс";
console.log(text);
*/
//Лапки \' \"

/*
let text = "Привіт! Ви на каналі \"Фрілансер по життю!\"";
console.log(text);
*/
// Іконки, символи UTF-16 \uКОД, UTF-32 \u{КОД}

/*
let text = "Живи, а працюй у вільний час! \u00A9 \u{1F60D}";
console.log(text);
*/
// Робота із рядками
// Довжина рядка. Властивість length

/*
let textOne = "Привіт!";
console.log(textOne.length);
*/
// Отримання символа рядка

/*
let text = "Привіт!";
let firstSymbol = text[0];
let lastSymbol = text[text.length - 1];
console.log(firstSymbol);
console.log(lastSymbol);


for (const char of text){
	console.log(char);
}
*/
// Зміна рядка

/*
let text = "Привіт!";
text[6] = ".";
console.log(text);
*/
// Зміна регістра

/*
let text = "Привіт!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
*/
// Пошук підрядка
// Метод str.indexOf(substr, pos)

/*
Він шукає substr в рядку str, починаючи з позиції pos,
і вертає позицію, на котрій знаходиться співпадіння,
або -1 при відсутності співпадінь.
*/

/*
let text = "Привіт!";
console.log(text.indexOf('рив'));
console.log(text.indexOf('рив', 3));
*/
// Метод includes, startWith, endsWith

/*
Більш сучасний метод str.includes(substr, pos) вертає true,
якщо в рядку є шукаємий рядок, або false, якщо ні
*/

/*
let text = "Привіт!";
console.log(text.includes('рив'));
console.log(text.includes('рив', 3));

console.log(text.startsWith('рив'));
console.log(text.endsWith('!'));
*/
// Регістр має значення!

/*
let text = "Привіт!";
let searchText = "пР";

console.log(text.toLowerCase().includes(searchText.toLowerCase()));
*/
// Отримання частини рядка (підрядка)

/*
В JavaScript існує ряд методів отримання підстроки.
Але достатньо користуватися одним.
 */

/*
Метод str.slice(start [, end]) - Вертає частину рядка від start до end(не включаючи)
*/

/*
let text = "Привіт!";
console.log(text.slice(1,2));
console.log(text.slice(-2,-1));
console.log(text.slice(1));
*/
// Порівняння рядків 

/*
// Алфавітний порядок
console.log("А" > "Б");
console.log("а" > "Б");

// Алфавітний порядок
console.log("Скрипт" > "Скрипка");

// Кількість символів
console.log("Слайдер" > "Слайд");

// Регістр
console.log("Фрілансер" > "фрілансер");
*/
// Домашка
// Задача №1 Не вірно

/*
let fls = "фрілансер";
let text = 'Привіт! Я ${fls}';
*/
// Задача №2 

/*
let text = 'фрілансер';
console.log(text.slice(5,6));
*/
// Задача №3 Не вірно 

/*
let text = 123+ "456";
console.log(text); 
*/
// Задача №4

/*
let text = 'фрілансер';
console.log(text.toLocaleUpperCase());
*/
// Задача №5

/*
let text = 'фрілансер';
console.log(text.slice(3,-3));
*/
// Задача №6 false

/*
let text = 'фрілансер';
console.log(text.includes('лан',4));
*/
"use strict";