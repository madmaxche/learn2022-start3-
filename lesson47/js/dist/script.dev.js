"use strict";

// Створення массиву

/*
let arr = new Array(); // Використовується рідко
let arr = [];
*/
// Значення массиву

/*
let arrOne = [
	'Максим',
	'Юлія',
	'Сімка',		// Висяча кома
];
*/
//або

/*
let arrOne = ['Максим','Юлія','Сімка',];
*/
// Відмінні типи значень

/*
let arrTwo = [
	'Максим',
	{
		type:"JS",
		age:24
	},
	true,
	function () {
		console.log('Привіт, я Максим');
	}
];
*/
//Багатомірні массиви

/*
let matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
];
*/
// Отримання значень

/*
let arrOne = [
	'Макс',	//0а позиція
	'Юля',	//1а позиція
	'Сіма',	//2а позиція
];

console.log(arrOne[1]);
console.log(arrOne[5]); // undefined
*/

/*
let arrTwo = [
	'Максим',
	{
		type:"JS",
		age:24
	},
	true,
	function () {
		console.log('Привіт, я Максим');
	}
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();	//Виведення функції в консоль


//Багатомірні массиви

let matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
];

console.log(matrix);
console.log(matrix[0][1]);
*/
// Довжина массиву. Властивість length

/*
let arrOne = ['Макс','Юлячка','Сімка',];
console.log(arrOne);
console.log(arrOne.length);
*/
// Доступ до массиву

/*
let arr = ['Макс','Юлячка','Сімка',];
console.log(arr);

let arrNew = arr;

arrNew.length = 2;

console.log(arr);
*/
// Зміна значень

/*
let arr = ['Макс','Юлячка','Сімка',];

//Змінюємо існуюче
arr[0]='Максim';
console.log(arr);

//Додаємо нове
arr[3] = 'Rakhilya';
console.log(arr);
*/
// Методи массивів
// Метод push - додає елемент в кінець массиву

/*
let arr =['Макс','Юля','Сімка',];
arr.push('Анжела');
console.log(arr);

arr.push('Віталік','Стефаній');
console.log(arr);
*/
// Метод shift - видалення елементу в початку,
// так що другий елемент стає першим.

/*
let arr = ['Макс','Юля','Сіма',];
arr.shift();
console.log(arr);
console.log(arr[0]);
*/
// Метод pop - видаляє останній елемент

/*
let arr = ['Макс','Юля','Сіма',];
arr.pop();
console.log(arr);
console.log(arr[2]);
*/
// Метод unshift - додає елемент в початок массиву

/*
let arr = ['Макс','Юля','Сіма',];
console.log(arr);
console.log(arr[0]);

arr.unshift('Анжела');
console.log(arr);
console.log(arr[0]);

arr.unshift('Віталій','Стефаній');
console.log(arr);
console.log(arr[0]);
*/
// Видалення/додавання/зміна конкретних елементів

/*
let arr = ['Макс','Юля','Сіма',];

delete arr[1];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
*/
// Метод splice. Дозволяє додавати, видаляти і заміняти елементи.
// Синтаксис arr.splice(index[,deleteCount, elem1,...,elemN])

/*
// Видаляємо елемент
let arrOne = ['Макс','Юля','Сіма',];
// Починаючи з першої позиції (Юля), видаляємо один елемент
arrOne.splice(1,1);
console.log(arrOne);

// Видаляємо елемент і вертаєм його в змінну
let arrTwo = ['Макс','Юля','Сіма',];
let removed = arrTwo.splice(1,1);
console.log(removed);

// Заміняємо елементи
let arrThree = ['Макс','Юля','Сіма',];
// Починаючи з першої позиції (Макс), заміняємо один елементт
arrThree.splice(0,1,'Анжела');
console.log(arrThree);

//Додаємо елменти
let arrFour = ['Макс','Юля','Сіма',];
// Починаючи з першої позиції (перед 'Юля'), додаємо один елементт
arrFour.splice(1,0,'Анжела','Віталік');
console.log(arrFour);

// Видаляємо елемент
let arrFive = ['Макс','Юля','Сіма',];
// Починаючи з останньої позиції ('Сіма'), видаляємо один елемент
arrFive.splice(-1,1);
console.log(arrFive);
*/
// Метод slice
// Створюємо новий массив, в котрий копіюємо частину або весь массив
// Синтаксис arr.slice([start],[end]) Не включаючи [end]

/*
//Копіюємо частину масссива
let arrOne = ['Макс','Юля','Сіма',];

// Починаючи з 1ої позиції 'Юля',
// до 2ої позиції 'Сіма' (не включаючи)
let arrTwo = arrOne.slice(1,2);
console.log(arrTwo);

// Починаючи з передостаньої позиції 'Юля',
// до останьої 'Сіма' (не включаючи)
let arrThree = arrOne.slice(-2,-1);
console.log(arrThree);

//Копіюємо весь массив
let arrFour = arrOne.slice();
console.log(arrFour);
*/
// Метод concat.
// Створюємо новий массив, в який копіюємо дані із інгих массивів
// І додаткові значення (в кінець массива)
// Синтаксис arr.contact(arg1,arg2...)

/*
let arrOne = ['Макс','Юля','Сіма',];
let arrTwo = arrOne.concat('Анжела');
console.log(arrTwo);
*/
// Пошук в массиві
// Методи indexOf/lastIndexOf та includes 
//аналоги рядковим методам

/*
let arr = ['Макс','Юля','Сіма',];

// indexOf

console.log(arr.indexOf('Макс'));
console.log(arr.indexOf('Анжела'));
console.log(arr.indexOf('Юля',2));

// includes

console.log(arr.includes('Макс'));
console.log(arr.includes('Анжела'));
console.log(arr.includes('Юля',2));
*/
// find та findIndex

/*
// Синтаксис
let result = arr.find(function (item, index, array) {
	// якщо true - вертається теперішній елемент і перебір преривається
	// якщо всі ітерації виявились неправильнимми, вертається undefined
});
*/

/*
let arr = [
	{name: 'Максим', age: 24},
	{name: 'Юля',age: 22},
	{name: 'Сіма',age: 'Не скажу'},
]

let resultOne = arr.find(function (item, index, array) {
	return item.age === 22;
});

// let resultOne = arr.find(item => item.age === 18);
console.log(resultOne);

//findIndex
let resultTwo = arr.findIndex(item => item.age === 22);
console.log(resultTwo);
*/
// filter

/*
// Синтаксис
let result = arr.filter(function (item, index, array) {
	// якщо true - елемент додається до результату, і перебір продовжується
	// Вертається в пустий массмв в випадку, якщо нічого не знайдено
});
*/

/*
let arr = [
	{name: 'Максим', age: 24},
	{name: 'Юля',age: 22},
	{name: 'Сіма',age: 'Не скажу'},
]
let result = arr.filter(function (item,index,array) {
	return item.age>=18;
});
console.log(result);
*/
// Сортування массивів
// Метод sort(fn)
// сортує массив на місці, замінючи в ньому порядок елементів.
// Сортування слів

/*
let arrOne = ['Максим','Юля','Сіма'];
console.log(arrOne.sort());
*/
// Сортування чисел

/*
let arrTwo = [8,22,1];
console.log(arrTwo.sort());
*/
// По замовчуванню елементи сортуються як рядки
// Для рядків приміняється лексикографічний порядок,
// і дійсно виходить, що "8" > "22".
// console.log("8">"22");
// Функція сортування

/*
function compareNumeric(a,b) {
	console.log(`Порівнюємо ${a} та ${b}`);
	//if(a > b) return 1;
	//if(a == b) return 0;
	//if(a < b) return -1;

	return a - b
}
*/
//	console.log(arrTwo.sort((a, b) => a - b));
// console.log(arrTwo.sort(compareNumeric));
// Метод reverse
// змінює порядок елементів в массиві на зворотній

/*
let arrOne = ['Макс','Юля','Сіма'];
console.log(arrOne.reverse());
*/
// Метод map.
// викликає функцію для кожного елемента массива
// та повертає массив результатів виконання цієї функції

/*
let result = arr.map(function (item,index,array) {
	// повертається нове значення замість елементу
});
*/

/*
let arr = ['Макс','Юля','Сіма',];

let result = arr.map(function (item, index,array) {
	return item[0];
});

// let result = arr.map(item => item[0]);
console.log(arr);
console.log(result);
*/
// Преобразування массивів
// Методи split та join

/*
let str = 'Максим, Юля, Сіма';

let arr = str.split(',');
console.log(arr);


// Можна обмежити кількість об'єктів
// які попадуть в массив

let arrTwo = str.split(',',2);
console.log(arrTwo);
*/

/*
let arr = ['Максим', 'Юля', 'Сіма',];
let srt = arr.join(',');
console.log(srt);

//Отримання рядка з массиву
let arrTwo = ['Максим', 'Юля', 'Сіма',];
console.log(String(arrTwo));
*/
// Провірка Array.isArray()

/*
let obj = {};
let arr = [];

console.log(typeof obj);
console.log(typeof arr);


if(Array.isArray(obj)){
	console.log('Це массив!');
} else {
	console.log('Це не массив!');
}
*/
// Перебір елементів

/*
let arr = ['Максим', 'Юля', 'Сіма',];
console.log(arr.length);

// Цикл FOR
for (let i = 0; i < arr.length; i++){
	console.log(arr[i]);
}
*/
// Цикл FOR...OF
// Можна використовувати для виводу значення

/*
let arr = ['Максим', 'Юля', 'Сіма',];

for (let arrItem of arr) {
	console.log(arrItem);
}
*/
// Метод перебору forEach
// Виконує функцію для кожного елементу массиву

/*
arr.forEach(function (item,index,array) {
	// робити щось з item
});
*/

/*
let arr = ['Макс','Юля','Сіма',];

arr.forEach(function(item,index,array) {
	console.log(`${item} знаходиться на ${index} позиції в ${array}`);
});
*/
// Стрілкова функція

/*
arr.forEach((item,index,array)) =>{
	console.log(`${item} знаходиться на ${index} позиції в ${array}`);
}
*/
// Метод reduce/reduceRight
// Синтаксис

/*
let value = arr.reduce(function(previousValue,item,index,array){
	//....
},[initial]);
*/

/*
let arrOne = [1,2,3,4];
let reduceValueOne = arrOne.reduce(function(previousValue,item,index,array){
	return item + previousValue;
},0);
console.log(reduceValueOne);
*/

/*
let arrTwo = ['Макс','Юля','Сіма',];

let reduceValueTwo = arrTwo.reduce(function(previousValue,item,index,array){
	console.log(previousValue);
	console.log(item);
	return `${item}, ${previousValue}`;
});
console.log(`Користувачі: ${reduceValueTwo}`);
*/
// Массив використовується як массив

/*
let arr = ['Макс','Юля','Сіма',];
console.log(typeof arr);
// НЕВІРНЕ використання массиву, додавання нечислової властивості
arr.name = "Анжела";
console.log(arr);
*/
// ДОМАШКА
//№1		4

/*
let arr = ['Макс','Юля','Сіма',];
let newArr = arr;
newArr.push('Віталік');
console.log(arr.length);
*/
//№2	

/*
let users = ['Ваня','Іштван',];
let newUser = users;
newUser.push('Ольга');
console.log(users);
console.log(users.indexOf('Іштван'));
users.splice(0,1);
users.splice(1,0,'Маша','Паша');
console.log(users);
*/
// №3

/*
??????????
let arr = ['Ваня', 'Іштван' ,'Ольга',];
arr.slice(0,1);
console.log(arr);
*/
//№ 4

/*
let str = 'Ваня,Іштван,Ольга';
console.log(Array(str));
*/
//№ 5
var arr = [9, 2, 8];
var reduceValue = arr.reduce(function (previousValue, item, index, array) {
  console.log(previousValue);
});