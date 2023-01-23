
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