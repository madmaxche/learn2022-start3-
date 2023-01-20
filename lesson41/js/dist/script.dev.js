"use strict";

//Синтаксис
var message = "Привіт, фрілансер!";

if (2 > 1) {
  //Код виконується лише якщо
  //вираз в дужках поверне значення true
  console.log(message);
} //Синтаксис


var messages = "Привіт, фрілансер!";
var first = 5;
var second = 5;

if (first === second) {
  //Код виконується лише якщо
  //вираз в дужках поверне значення true
  console.log(messages);
} //Синтаксис


var messagess = "Привіт, фрілансер!";

if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {
  //Код виконується лише якщо
  //вираз в дужках поверне значення true
  console.log(messagess);
} //Блоки ELSE та ELSE IF


var messagesss = "Привіт, фрілансер!";
var number = 5;

if (number > 10) {
  console.log(messagesss);
} else {
  console.log("Умова не виконана");
}

var messagessss = "Привіт, фрілансер!";
var numbers = 5;

if (numbers > 50) {
  console.log('5 більше 50');
} else if (numbers > 30) {
  console.log('5 більше 30');
} else if (numbers > 10) {
  console.log('5 більше 10');
} else if (numbers > 1) {
  console.log('5 більше 1');
} else {
  console.log('Умова не виконана');
} //Умовний оператор '?'


var messageS = "Привіт";
/*
let messageSEnd;
if(5 > 1){
	messageSEnd = ", Максим!";
} else {
	messageSEnd = ", Юлія!";
}
*/

var messageSEnd = 5 > 10 ? ", Максим!" : ", Юлія!";
messageS += messageSEnd;
console.log(messageS);
messageSEnd = 5 > 10 ? ", Максюша" : 5 > 30 ? ",Сашка" : 5 > 10 ? ",Юляшка" : 5 > 1 ? ",Петрик" : ",Ромашка";
messageS += messageSEnd;
console.log(messageS);

if (1 === "1") {
  console.log('Правда!');
} else {
  console.log('Неправда!');
}

if (5 == "5") {
  console.log('Правда!');
} else {
  console.log('Неправда!');
}

var messageSS = 92 > '11' && 58 < 100 ? 'Правда!' : 'Неправда!';
console.log(messageSS);

if (0) {
  console.log('Неправда!');
} else if (" ") {
  console.log('Правда!');
}