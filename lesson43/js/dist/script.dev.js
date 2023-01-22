"use strict";

//Обьява функцій
function імя(параметри) {} //Тіло (код) функції

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
// Зовнішня перемінна


var message = "Повідомлення №1";

function showMessage() {
  //Локальна перемінна
  var message = "Повідомлення №2";
  console.log(message);
}

console.log(message);
showMessage(); //

var globalVar = "Я глобальна перемінна";

function getSumm() {
  var numOne, numTwo;

  function getNumOne() {
    numOne = 1;
    console.log(globalVar);
  }

  function getNumTwo() {
    numTwo = 2;
  }

  getNumOne();
  getNumTwo();
  var numSumm = numOne + numTwo;
  console.log(globalVar);
}

console.log(globalVar);
getSumm(); //Параметри (Аргументи)

function calcSumm(numOne, numTwo) {
  console.log("\u041F\u0435\u0440\u0435\u043C\u0456\u043D\u043D\u0430 numOne: ".concat(numOne));
  console.log("\u041F\u0435\u0440\u0435\u043C\u0456\u043D\u043D\u0430 numTwo: ".concat(numTwo));
  var numSumm = numOne + numTwo;
  console.log("\u0421\u0443\u043C\u043C\u0430:".concat(numSumm));
}

calcSumm(5, 2);