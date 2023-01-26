
// Число
let someNum = 458;
console.log(someNum);

// Десяткові числа
let someNums = 4.58;
console.log(someNums);


//let someBigNum = 1000000;
//console.log(someBigNum);

let someBigNum = 1e6;		//1*1000000
console.log(someBigNum);


//let someLittleNum = 0.000001;
//console.log(someLittleNum);

let someLittleNum = 1e-6;	 //1 / 1000000
console.log(someLittleNum);


//Шістнадцятковий, двійковий і восьмирічні числа
// Шістнадцятковий широко використвується для представлення кольорів, кодування символів і багато чого іншого
console.log(0xFF); // = 0xFF = 255

//Рідше використвоються двійкові і восьмирічні числа

console.log(0b11111111); // 255
console.log(0o377); // 255

// Метод toString(base)
// Метод num.toString(base) вертає рядкове
// уявлення числа в тій чи іншій системі числення (base)
//base може приймати значення від 2 до 36 (за замовчуванням 10)

let num = 255;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));

//Округлення чисел

//В JavaScript встроєний об'єкт Math , котрий містить декілька функцій для роботи з округленням

// Math.floor - Округлення в меньшу сторону
/*
let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

// Math.ceil - Округлення в більшу сторону
/*
let numOne = Math.ceil(5.8);
let numTwo = Math.ceil(2.2);
let numThree = Math.ceil(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

// Math.round - Округлення до найближчиого цілого
/*
let numOne = Math.round(5.8);
let numTwo = Math.round(2.2);
let numThree = Math.round(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/


// Спосіб множення і ділення
/*
let numOne = Math.round(5.845 * 10) / 10;
console.log(numOne);
//58.45 -> 58 -> 5.8
let numTwo = Math.round(5.845 * 100) / 100;
console.log(numOne);
//584.5 -> 585 -> 5.85
let numThree = Math.round(5.8449 * 100) / 100;
console.log(numOne);
//584.49 -> 584 -> 5.84
*/

// Метод toFixed(n) - округлює число до n знаків після коми і повертає рядкове представлення результату
/*
let numOne = 5.845
console.log(numOne.toFixed(1));

//Перетворити в число
console.log(+numOne.toFixed(1));
console.log(Number(numOne.toFixed(1)));
*/

//Проблема неточних вичеслень
/*
let numOne = Math.round(1.005 * 100) / 100; //Очікуєм 1.01
console.log(numOne);

let numTwo = 12.35;
console.log(numTwo.toFixed(1)); // Очікуємо 12.4


let problem = 0.1 + 0.2 === 0.3;
console.log(problem);
console.log(0.1 + 0.2);
*/

// Вирішення з допомогою Number.EPSILON

let sourceNum = 1.005 + Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);

console.log(sourceNum * 100);
console.log(Math.round(sourceNum * 100));


//Провірка: isFinite та isNaN


//Провірка isNaN

console.log(Number(25 + "Привіт!"));

console.log(isNaN(25 + "Привіт!"));

if(25 + "Privet!" !==NaN){
	console.log('Ya ne NaN');
}

console.log(NaN === NaN);

//Провірка isFinite

console.log(isFinite("25"));
console.log(isFinite("Privit!"));
console.log(isFinite(10/0));


//parseInt та parseFloat

let valueOne = parseInt ("150.58px");
console.log(valueOne);
console.log(typeof valueOne);


let valueTwo = parseFloat("150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);

console.log(parseInt('0xff',16));
console.log(parseInt('ff',16));


//Math.random()
// Повертає псевдовипадкове число в діапазоні від 0(включаючи)
// до 1 (не включаючи 1)

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//Math.max(a,b,c....) / Math.min(a,b,c....)
//Вертає найбільше/найменше число з перечислених аргументів

console.log(Math.max(5,85,-49));
console.log(Math.min(5,85,-49));