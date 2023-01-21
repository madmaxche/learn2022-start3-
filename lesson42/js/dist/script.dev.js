"use strict";

// Цикл WHILE

/*
Синтаксис
while(Умови){
	Тіло цикла
	Тут буде виконуватись код
}
*/
//Приклад

/*
let num = 0;
while (num<5){
	console.log(num);
	num++;
}
*/

/*
let num = 5;
while (num){
	console.log(num);
	num--;
}
*/
//Упрощений запис

/*
let num = 5 ;
while (num) console.log(num--);
*/
//Конструкція DO...WHILE

/*
let num = 0;
do{
	console.log(num);
	num++;
} while (num < 5);
*/
//Цикл FOR
//Синтаксис

/*
for (Начало; Умова; Крок){
	Тіло цикла
	Тут буде виконуватись код
}
*/
//Приклад
//let num
//Вбудована об'ява перемінної
//Можна прибрати любу частину циклу

/*
for(let num = 0; num < 5; num++){
	console.log(num);
}
console.log('Вивід поза циклом: ${num}');
*/
//Дериктива break
var num = 0;

for (; num < 5; num++) {
  console.log(num);
  if (num == 2) break;
}

console.log('Робота закінчена, num = ${num}');