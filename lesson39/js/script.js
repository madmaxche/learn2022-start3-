

//Динамічна типизація

let userName;

console.log(typeof userName);

userName = "Фрілансер по життю"; //Рядок(String)

console.log(typeof userName);

userName = 58; //Число (Number)

console.log(typeof userName);

//Приклад використання
//Перевіряєм чи визначенна перемінна

if(userName === undefined){
	console.log('Перемінна НЕ визначена');
} else{
	console.log('Перемінна визначена');
}
//Або з допомогою оператора typeof
if(typeof userName === undefined){
	console.log('Перемінна НЕ визначена');
} else{
	console.log('Перемінна визначена');
}

//Null

//Приклад

let userNames = null;
console.log(userNames);


let block = document.querySelector('.block');

console.log(block);

console.log(typeof block);

//Boolean

//Приклад
let willYouMarryMe = true;
if(willYouMarryMe){
	console.log(':)');
}else{
	console.log(':(');
}

let trueOrFalse = 58 <18
console.log(trueOrFalse);

//Number

let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);

//Infinity
let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);

//NaN
let getNan = 'Фрілансер' / 10;
console.log(getNan);
console.log(typeof getNan);

//BigInt
/*
const bigInteger = 123456789012345678901234567890n;
console.log(typeof bigInteger);
*/

//String
let userNamese = "Фрілансер по життю";
console.log(typeof userNamese);

let userNamesev2 = 'Фрілансер по життю';
console.log(typeof userNamesev2);
let userNamesev3 = `Фрілансер по життю`;
console.log(typeof userNamesev3);

let userAges = 36;
let userAgesInfo = `Вік: $(userAges)`;
console.log(userAgesInfo);

//Object

let userInfo = {
	name: "Фрілансер по життю",
	age: 36
}
console.log(userInfo);
console.log(typeof userInfo);

//Symbol

let id = Symbol("id");
console.log(typeof id);

//Function

let funcVariable = function name(params){
	//Кід функції
}
console.log(typeof funcVariable);


// Переробка типів

//Рядкова переробка

let userAga = 58;
console.log(userAga);
console.log(typeof userAga);

userAga = String(userAga);

console.log(userAga);
console.log(typeof userAga);

//Числова переробка

let userAgas = "58";
console.log(userAgas);
console.log(typeof userAgas);

userAgas = Number(userAgas);

console.log(userAgas);
console.log(typeof userAgas);

//Приклад автоматичної переробки

let userAgaS = "72" / "2"
console.log(userAgaS);
console.log(typeof userAgaS);

//Логічна переробка

let userAgeS = 58;
console.log(userAgeS);
console.log(typeof userAgeS);

userAgeS = Boolean(userAgeS);

console.log(userAgeS);
console.log(typeof userAgeS);