//Об'ява перемінної

//Ключове слово let для об'яви перемінної

//Імя перемінної може вміщувати тільки букви
//Краще всього латинського алфавіту
//Цифри та символи $ u _
//При цьому перший символ не повинен бути цифрою


//Вірна об'ява
/*let age;
let info123;
let $size;
let _color;*/
//Невірна об'ява
//let 123info;
//let my-age;

//Об'ява перемінної та присвоєння значеня
/*let myLifeStyle = 'freelance';
console.log(myLifeStyle);*/


//В рядок через кому
/*let myName = 'Фрілансер по життю', myAge = 24, myMessage = 'Живи, а працюй у вільний час';*/

//Через кому з нового рядка
	/*let myName = 'Фрілансер по життю',
		myAge = 24,
		myMessage = 'Живи, а працюй у вільний час';*/
//Окремо
	/*let myName = 'Фрілансер по життю';
		myAge = 24;
		myMessage = 'Живи, а працюй у вільний час';*/

//Зміна значеня переміної
/*
let myAge = 36;
myAge = 18;
console.log(myAge);
*/

//Передача значень перемінних
/*
let myAge = 36;
let myNewAge = 18;
*/

//Копіюєм значення перемінної myNewAge в перемінну myAge
/*
myAge = myNewAge;
console.log(myAge);
*/

//Область видимості перменніх

//Приклда блоку інструкцій
/*
function testBlock () {
	console.log('Вчимо');
	console.log('JS');
}
testBlock ();
*/

/*
function testBlock() {
	let myAge = 36;
	console.log(myAge);
}
testBlock();

console.log(myAge); //Перемінна не видима за приділами блока
*/


//КОНСТАНТИ

//Об'ява константи
/*
const myAge = 36;
myAge = 18;   //Неможливо змінити константу
*/

//Імена констант з завчасно відомими значеннями
const BLOCK_SIZE = 25;
const COLOR_RED = "#F00";

//Імя константи зі значенням присвоєним в процесі виконання програми
const summSizes = 25+30;


//Зміна значень в константі
//Об'єкт з данними
const userProfile = {
	name:'Фрілансер',
	age:'25',
	message:'Живи, а працюй в вільний час!'
}
console.log(userProfile);

//Далі я міняю значення одного з полей об'єкта
userProfile.age = 18;
//Помилки немає, дані змінились
console.log(userProfile);

//КЛЮЧОВЕ СЛОВО VAR

//Області видимості

if(true){
	let sizeLet = 50;
}
//Перемінна НЕ видима за межами блоку
//console.log(sizeLet);

if(true){
	var sizeLet = 50;
}
//Перемінна ВИДИМА за межами блоку
console.log(sizeLet);