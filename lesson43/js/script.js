

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


	// Зовнішня перемінна
	let message = "Повідомлення №1";

	function showMessage(){
		//Локальна перемінна
		let message = "Повідомлення №2";
		console.log(message);
	}
	console.log(message);
	showMessage();


	//
	let globalVar = "Я глобальна перемінна";

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

	//Параметри (Аргументи)

	function calcSumm(numOne,numTwo) {
		console.log(`Перемінна numOne: ${numOne}`);
		console.log(`Перемінна numTwo: ${numTwo}`);
		
		let numSumm = numOne + numTwo;

		console.log(`Сумма:${numSumm}`);
	}

	calcSumm(5,2);