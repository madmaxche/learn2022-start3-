
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
for (num = 0; num < 5; num++) {
	console.log(num);
}
console.log(`Вивід поза циклом: ${num}`);
*/


//Директива break
/*
let num = 0 ;
for(; num<5;num++){
	console.log(num);
	if(num==2)break;
}
console.log(`Робота завершена, num = ${num}`);
*/
//Директива continue
/*
let num = 0;
for(; num < 5; num++){
	if(num ==2) continue;
	console.log(num);
}
*/

//Мітки
/*
firstFor: for (let num = 0; num < 2; num++){
	for(let size = 0; size < 3; size++){
		if(size == 2){
			break firstFor;
		}
		console.log(size);
	}
}
*/
/*
firstFor: for (let num = 0; num < 2; num++){
	for(let size = 0; size < 3; size++){
		if(size == 2){
			continue firstFor;
		}
		console.log(size);
	}
}
*/

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

//Задача №1
//Вывести в консоль числа от 1 до 5
/*
let nums = 1;
while (nums<6){
	console.log(nums);
	nums++;
}
*/
//Задача №2
/*
let num = 8;
while (num) {
	//Последний результат 0, верно?
	console.log(num);
	num--;
}*/

//Задача №3. Переписать на while
/*
for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}

let num = 0;
while(num < 3){
	console.log(`Число: ${num}`);
	num++;
}
*/

//Задача №4. Прекратить работу цикла №1 когда size равна 1
//Цикл №1
/*
firstFor:for (let num = 0; num < 2; num++) {
	//Цикл №2
	for (let size = 0; size < 3; size++) {
		if(size == 2){
			break firstFor
		}
		console.log(size);
	}
}
*/