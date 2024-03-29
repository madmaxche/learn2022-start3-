
//Синтаксис

//Створення об'єкта
/*
let userInfo = new Object(); // синтаксис"конструктор об'єкту"
let userInfo = {}; //синтаксис "літерал об'єкта" 
*/

//Властивості об'єктів. Ключ + значення
/*
let userInfo = {
	name: "Вася",		//Властивість об'єкта
	age: 30,				//Остання(висяча) кома
};

console.log(userInfo);
console.log(userInfo.name);
*/

//Імена властивостей

//Імя з двох і більше слів
/*
let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true,
}

console.log(userInfo.name);
console.log(userInfo['name']);
console.log(userInfo["likes javascript"]);
*/

//Імена властивостей

//Вичисляємо або передаємо імя

//Вичисляємо імя
/*
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart + " javascript"]: true,
};

console.log(userInfo["likes javascript"]);
*/

// Передаємо імя
/*
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart]: true,
};

console.log(userInfo[firstPart]);

// Перевага квадратних дужок
let key = "name";
console.log(userInfo[key]);
*/

//Зарезервовані слова в іменах
/*
let userInfo = {
	let: "Вася",
	for: 30,
};
console.log(userInfo.let);
console.log(userInfo.for);
*/

//Імена = рядки або символи
/*
let userInfo = {
	0:"Вася",	// 0 те саме що "0"
};
console.log(userInfo[0]);
console.log(userInfo["0"]);
*/

//Тип даних Symbol

//Створюємо символ id з описом (іменем)"id"
/*
let id = Symbol("id");
let userInfo = {
	name: "Вася",
	age:30,
	[id]:"Деяке значення"
};
console.log(userInfo);
*/

//Вкладеність
/*
let userInfo = {
	name: "Макс",
	age:24,
	address:{
		city:"Chernivtsi",
		street:"Freedom",
	}
}
console.log(userInfo);
console.log(userInfo.address);
console.log(userInfo.address.city);
*/

//Властивості змінної
/*
function makeUserInfo(name,age) {
	return{
		name:name,
		age:age,
		//... інші властивості
	};
}
let user = makeUserInfo("Макс",24);
console.log(user);
*/

/*
function makeUserInfo(name,age) {
	return{
		name,	// те саме що і name:name,
		age, // те саме що і age:age,
		"likes javascript": true,
		//... інші властивості
	};
}
let user = makeUserInfo("Макс",24);
console.log(user);
*/

//Зміна об'єкта

//Додавання властивості
/*
let userInfo = {
	name:"Вася",
}
console.log(userInfo);

userInfo.age = 30;

console.log(userInfo);

userInfo['likes javascript'] = true;

console.log(userInfo);

userInfo.address = {
	city:"Chernivtsi",
	street:"Freedom",
};
console.log(userInfo);
*/

//Видалення властивості
/*
let userInfo = {
	name: "Юля",
	age: 22,
	"likes javascript": true
}

console.log(userInfo);

delete userInfo.age;

console.log(userInfo);

delete userInfo["likes javascript"];

console.log(userInfo);
*/

//Зміна властивості
/*
let userInfo = {
	name: "Юля",
	age: 22,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
*/
//Зміна властивостей в константі
/*
const userInfo = {
	name: "Юля",
	age: 22,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
*/
//При копіюванні об'єкту в іншу змінну сам об'єкт не дублюється
//а копіюється тільки посилання на нього

//Дублювання об'єктів (Object.assign)
/*
let userInfo = {
	name:"Юля",
	age: 22,
}

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);
*/

//Ще про Object.assign
/*
let userInfo = {
	name:"Юля",
	age: 22,
}

Object.assign(userInfo, {['likes javascript']: true, city:"Chernivtsi"});
console.log(userInfo);
*/

//Перевірка існування властивості
/*
let userInfo = {
	name:"Юля",
	age: 22,
}

//console.log(userInfo.age);

if(userInfo.age){ //true чи false
	console.log(userInfo.age);
}
*/

//Опціональний ланцюг
/*
let userInfo = {
	name:"Юля",
	age: 22,
	address:{
		city:"Chernivtsi",
		street:"Freedom",
	}
}
console.log(userInfo.address.street);
*/
//console.log(userInfo?.address?.street);

// Оператор "in"

/*
let userInfo = {
	name:"Юля",
	age: 22,
	address:{
		city:"Chernivtsi",
		street:"Freedom",
	}
}
if ("name" in userInfo){
	console.log(userInfo.name);
}
*/

//Цикл "for_in"

//Для перебору всіх властивостей об'єкту використовується цикл for..in.
//Цей цикл відрізняється від вивченого раніше цикла for (;;).
/*
for (let key in object){
	//Тіло цикла виконується для кожної властивості об'єкта
}
*/
//Цикл "for_in"
/*
let userInfo = {
	name:"Вася",
	age:30,
	address:{
		city:"Chernivtsi",
		street:"Freedom",
	}
}

for(let key in userInfo){
	//Ключі
	console.log(key);		//name, age , address
	//Значення ключів
	console.log(userInfo[key]);	// Вася,30,object{}
}

for(let key in userInfo.address){
	//Ключі
	console.log(key);		//city.street
	//Значення ключів
	console.log(userInfo.address[key]);	// Chernivtsi, Freedom
}
*/

//Методи об'єкта
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Chernivtsi",
		street: "Freedom",
	},
	/*
	showInfo : function () {
		console.log(`${userInfo.name} ,${userInfo.age} років. Адреса : м.${userInfo.address.city} ,вул.${userInfo.address.street}.`);
	}
	*/
	/*
	showInfo(){
		console.log(`${userInfo.name} ,${userInfo.age} років. Адреса : м.${userInfo.address.city} ,вул.${userInfo.address.street}.`);
	}
	*/
	// Використання "this"
	/*
	showInfo(){
		console.log(`${this.name} ,${this.age} років. Адреса : м.${this.address.city} ,вул.${this.address.street}.`);
	}
	*/
	// У стрілкових функцій немає свого "this" 
	// використовується значеня із зовнішнього методу userInfo.showInfo()
	/*
	showInfo(){
	let show = () => console.log(`${this.name} ,${this.age} років. Адреса : м.${this.address.city} ,вул.${this.address.street}.`);

	show();
}
}
userInfo.showInfo();
*/

	//Функція конструктор
/*
	function UserInfo(name) {

		// this = {};	 Створює пустий об'єкт

		this.name = name;
		this.age = 30;

		// return rhis; Вертається об'єкт

}

console.log(new UserInfo('Макс'));
console.log(new UserInfo('Юля'));
*/
//№1 - Ні
/*
const userInfo = {
	name : "Вася",
	age: 30 
}
*/
//№2 -"58"
/*
let userInfo = {
	name : "Вася",
	age: 30 ,
	"58": 'Значення властивості'
}
console.log(userInfo[58]);
*/
//№3 - 45
/*
let userInfo = {
	name : "Вася",
	age: 30 
}
let user = userInfo;
user.age = 45;

console.log(userInfo.age);
*/
//№4 - Вася
/*
let userInfo = {
	name : "Вася",
	age: 30 ,
	showInfo(){
		console.log(`${this.name}`);
	}
}
let user = userInfo;
userInfo = null;
user.showInfo();
*/
//№5 - name+age
/*
let userInfo = {
	name : "Вася",
	age: 30, 
}
for (const key in userInfo){
	const value = userInfo[key];
	console.log(value);
}
*/
//№6 - city
/*
let userInfo = {
	name : "Вася",
	age: 30,
	address:{
		city:"Chernivtsi"
	}
}
for (const key in userInfo.address){
	console.log(userInfo.address[key]);
}
*/
//№7 - true
/*
const userInfo = {
	name:"Вася",
	age:30,
	"likes js": true
}
console.log(userInfo["likes js"]);
*/

//№8
/*
let userInfo = {
	name:"Vasya",
	age:30,
}

console.log(userInfo);

userInfo.name = "Лена";

console.log(userInfo);

delete userInfo.name;

console.log(userInfo);
*/