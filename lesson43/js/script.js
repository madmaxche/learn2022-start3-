

//Обьява функцій

	function імя(параметри){
		//Тіло (код) функції
	}

/*
	//Функція виводу повідомлення
	function showMessage(){
		console.log('Повідомлення');
	}

	showMessage(); //Виклик функції(Можна і перед викликом)
*/

	//Вкладеність і видимість функції
/*
	function getSumm(){
		let numOne, numTwo;

		function getNumOne(){
			numOne = 1;
		}
		function getNumTwo(){
			numTwo = 2;
		}
		getNumOne();
		getNumTwo();

		let numSum = numOne + numTwo;
		console.log(numSum);
	}

	getSumm();
*/
	
	//Локальні і зовнішні переменні
/*
	let message;

	function showMessage(){
		message = "Повідомлення";
	}
	showMessage();
	console.log(message);
	*/

/*
	// Зовнішня перемінна
	let message = "Повідомлення №1";

	function showMessage(){
		//Локальна перемінна
		let message = "Повідомлення №2";
		console.log(message);
	}
	console.log(message);
	showMessage();
*/

	//Глобальні змінні
	/*
	let globalVar = "Я глобальна змінна";

	function getSumm() {
		let numOne, numTwo;


		function getNumOne() {
			numOne = 1;
			console.log(globalVar);
		}
		function getNumTwo() {
			numTwo = 2;
		}
		getNumOne();
		getNumTwo();

		let numSumm = numOne + numTwo;
		console.log(globalVar);
	}
	console.log(globalVar);

	getSumm();
*/

	//Параметри (Аргументи)
/*
	function calcSumm(numOne,numTwo) {
		console.log(`Перемінна numOne: ${numOne}`);
		console.log(`Перемінна numTwo: ${numTwo}`);

		let numSumm = numOne + numTwo;

		console.log(`Сумма:${numSumm}`);
	}

	calcSumm(5,2);
*/

//Функції-колбеки
/*
function calcSumm(numOne,numTwo,more,less) {
	let numSumm = numOne + numTwo;

	if (numSumm > 3){
		more();
	} else{
		less();
	}
}

function showMoreMessage() {
	console.log('Більше чим 3');
}
function showLessMessage() {
	console.log('Меньше ніж 3');
}
calcSumm(1,5,showMoreMessage,showLessMessage);
*/

//Повертання результату
/*
function calcSumm(numOne, numTwo) {
	let numSumm = numOne + numTwo;

	//Повернення
	return numSumm;

	// Далі код не виконується

}
let funcRezult = calcSumm(1,2);

console.log(`Сумма:${funcRezult}`);
*/

//Рекурсія
/*
function calcSumm(numOne,numTwo) {
	let result = 1;
	//Множимо result на numOne numTwo раз в цикл
	for(let i = 0; i < numTwo; i++){
		result *= numOne;
	}
	return result;
}
console.log(calcSumm(2,3));
*/

//
/*
function calcSumm(numOne,numTwo) {
	if(numTwo === 1){
		return numOne;
	} else {
		return numOne * calcSumm(numOne, numTwo - 1);
	}
}
console.log(calcSumm(2,3));
*/

//Функіональний вираз
/*
let showMessage = function(){
	console.log('Привіт!');
};

showMessage();

function getSumm() {
	let sum = 1 + 2;
	console.log(sum);
};

let someVar = getSumm;

someVar();
getSumm();
*/

/*
//Функціональний вираз
let імя змінної = function(параметр,...параметр){
	return вираз;
};
// Стрілкова функція

let імя змінної = (параметр, ...параметр) => вираз
*/

//Однострокова стрілкова функція
/*
let getMessage = (text, name) => text + ',' + name + '!';

console.log(getMessage('Привіт','Максиме'));
*/

//Багатострокова стрілкова функція
/*
let getMessage = (text, name) => {
	let message = text + ',' + name + '!';
	return message;
};
console.log(getMessage('Привіт', 'Максиме'));
*/

//Планування setTimeOut та setInterval
/*
function showMessage(text,name) {
	console.log(`${text}, ${name}!`);
	setTimeout(showMessage, 500, text, name);
}

//setInterval(showMessage,500,'Привіт', 'Максиме');
setTimeout(showMessage,500,'Привіт', 'Максиме');

function showNumber(num) {
	console.log(num);
	if (num<5) {
		setTimeout(showNumber,1000,++num);
	}
}
setTimeout(showNumber,1000,1)
*/

/*
function showNumber(num) {
	console.log(num);
	let timeId = setTimeout(showNumber,1000,++num);
	if(num ===6){
		clearTimeout(timeId);
	}
}
setTimeout(showNumber,1000,1)
*/

/*
let result = 0;
function showNumber(num) {
	result += num;
	console.log(result);
	if (result === 5) {
		clearInterval(timeId);
	}
}
let timeId = setInterval(showNumber,1000,1);
*/


//Застосування функцій

/*
//Функція сполучення рядків
function createMessage(text, name) {
	return `${text}, ${name}!`;
}
//Функція виводу в консоль
function showMessage(message) {
	console.log(message);
}
//Об'єднувана функція, викликає дві функції
function initMessage(text, name) {
	showMessage(createMessage(text, name));
}

initMessage('Привіт','Фрілансер')
*/

// ДОМАШКА

//№1 - КОЛЯ
/*
function showName() {
	console.log('Vasya!');
}
setTimeout(showName,0);
console.log('Коля!');
*/


//№2 - ВІРНО
/*
showMessage();
function showMessage() {
	console.log('Повідомлення');
}
*/

//№3 - НЕ ВІРНО
/*
showMessage();
let showMessage = function() {
	console.log('Повідомлення');
}
*/

//№4 - 
'use strict'
if (2 > 1){
	function showMessage() {
		console.log('Повідомлення');
	}
}
showMessage();
