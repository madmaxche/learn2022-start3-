"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//Динамічна типизація
var userName;
console.log(_typeof(userName));
userName = "Фрілансер по життю"; //Рядок(String)

console.log(_typeof(userName));
userName = 58; //Число (Number)

console.log(_typeof(userName)); //Приклад використання
//Перевіряєм чи визначенна перемінна

if (userName === undefined) {
  console.log('Перемінна НЕ визначена');
} else {
  console.log('Перемінна визначена');
} //Або з допомогою оператора typeof


if (_typeof(userName) === undefined) {
  console.log('Перемінна НЕ визначена');
} else {
  console.log('Перемінна визначена');
} //Null
//Приклад


var userNames = null;
console.log(userNames);
var block = document.querySelector('.block');
console.log(block);
console.log(_typeof(block)); //Boolean
//Приклад

var willYouMarryMe = true;

if (willYouMarryMe) {
  console.log(':)');
} else {
  console.log(':(');
}

var trueOrFalse = 58 < 18;
console.log(trueOrFalse); //Number

var userAge = 20;
var userHeight = 1.83;
console.log(userAge);
console.log(_typeof(userAge));
console.log(userHeight);
console.log(_typeof(userHeight)); //Infinity

var getInfinity = 58 / 0;
console.log(getInfinity);
console.log(_typeof(getInfinity)); //NaN

var getNan = 'Фрілансер' / 10;
console.log(getNan);
console.log(_typeof(getNan)); //BigInt

/*
const bigInteger = 123456789012345678901234567890n;
console.log(typeof bigInteger);
*/
//String

var userNamese = "Фрілансер по життю";
console.log(_typeof(userNamese));
var userNamesev2 = 'Фрілансер по життю';
console.log(_typeof(userNamesev2));
var userNamesev3 = "\u0424\u0440\u0456\u043B\u0430\u043D\u0441\u0435\u0440 \u043F\u043E \u0436\u0438\u0442\u0442\u044E";
console.log(_typeof(userNamesev3));
var userAges = 36;
var userAgesInfo = "\u0412\u0456\u043A: $(userAges)";
console.log(userAgesInfo); //Object

var userInfo = {
  name: "Фрілансер по життю",
  age: 36
};
console.log(userInfo);
console.log(_typeof(userInfo)); //Symbol

var id = Symbol("id");
console.log(_typeof(id)); //Function

var funcVariable = function name(params) {//Кід функції
};

console.log(_typeof(funcVariable)); // Переробка типів
//Рядкова переробка

var userAga = 58;
console.log(userAga);
console.log(_typeof(userAga));
userAga = String(userAga);
console.log(userAga);
console.log(_typeof(userAga)); //Числова переробка

var userAgas = "58";
console.log(userAgas);
console.log(_typeof(userAgas));
userAgas = Number(userAgas);
console.log(userAgas);
console.log(_typeof(userAgas)); //Приклад автоматичної переробки

var userAgaS = "72" / "2";
console.log(userAgaS);
console.log(_typeof(userAgaS)); //Логічна переробка

var userAgeS = 58;
console.log(userAgeS);
console.log(_typeof(userAgeS));
userAgeS = Boolean(userAgeS);
console.log(userAgeS);
console.log(_typeof(userAgeS));