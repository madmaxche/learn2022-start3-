//BOM
//ALERT
//	alert	("Привіт!");
//CONFIRM

/*
const confirmResult = confirm("Хочеш навчитися верстати?");
console.log(confirmResult);
*/
//Prompt

/*
const promptResult = prompt("Хто ти по життю?");
console.log(promptResult);
*/
//DOM
// Навігація по документу

/*
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);
*/
// Отримуємо об'єкт body
//const bodyElement = document.body;
// Перший і останій дочірні елементи

/*
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;

console.log(firstChildNode);
console.log(lastChildNode);
*/
// Отримуємо об'єкт body
//const bodyElement = document.body;
// Колекція childNodes вміщує список всіх дітей, включаючи текстові вузли

/*
const childNodes = bodyElement.childNodes;
console.log(childNodes);
*/
// Для перевірки наявності дочірніх вузлів
// існує спеціальна функція hasChildNodes()
//console.log(bodyElement.hasChildNodes());
// Отримуємо об'єкт body

/*
const bodyElement = document.body;
const childNodes = bodyElement.childNodes;

// Перебір колекції

for (let node of childNodes){
	console.log(node); // Показує всі вузли
}
// Живі колекції

// Тільки для прочитання
*/
// Отримуємо об'єкт body
//const bodyElement = document.body;
// Сусідні і батьківські вузли

/*
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);
*/

/*
//Навігація тільки по елементам
// Отримуємо колекцію всіх дочірніх вузлів
const childNodes = bodyElement.childNodes;
console.log(childNodes);

// Отримуємо колекцію всіх дочірніх елементів
const bodyChildren = bodyElement.children;
console.log(bodyChildren);
*/

/*
// Перший і останній дочірний елемент

const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;

console.log(firstChild);
console.log(lastChild);

// Сусідні і батьківські елементи

const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);
*/
// Пошук любого елементу
//elem.querySelectorAll(CSS);

/*
// Пошук по селектору классу
const elemsOne = document.querySelectorAll('.lesson__list');
console.log(elemsOne);

// Пошук по селектору тегу
const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);

// Пошук по змішаному селектору тегу та класу
const elemsThree =
	document.querySelectorAll('li.lesson__item-list');
console.log(elemsThree);

// Пошук по тегу першого рівня вклдаенності
const elemsFour =
	document.querySelectorAll('.lesson__list>li');
console.log(elemsFour);

// Пошук по декільком классам
const elemsFive =
	document.querySelectorAll('.lesson__list, .lesson__text');
console.log(elemsFive);

// Пошук по вкладенним классам
const elemsSix =
	document.querySelectorAll('.lesson__list .lesson__text');
console.log(elemsSix);

// Пошук по ID
const elemsSeven = 
	document.querySelectorAll('#listItem');
console.log(elemsSeven);

// Пошук по атрибуту
const elemsEight = 
	document.querySelectorAll('[data-item]');
console.log(elemsEight);

// Пошук по атрибуту із значенням
const elemsNine =
	document.querySelectorAll('[data-item="85"]');
	console.log(elemsNine);
*/
// querySelectorAll - статична коллекція
// Отримання конкретного елемента колекції

/*
const elems = document.querySelectorAll('li');
console.log(elems[2]);

for(const item of elems){
	console.log(item);
}

elems.forEach(item=>{
	console.log(item);
});
*/

/*
const subList = document.querySelectorAll('.lesson__sub-list');
const subItems = subList[0].querySelectorAll('li');
console.log(subItems);
*/
// Неочікуваний результат пошуку

/*
const subList = 
	document.querySelectorAll('.lesson__sub-list');
const listItems = 
	subList[0].querySelectorAll('.lesson__list .lesson__item-sub-list');
console.log(listItems);
*/
// Пошук довільного елементу
//querySelector
//const lessonList = document.querySelectorAll('.lesson__list')[0];

/*
const lessonList = document.querySelector('.lesson__list');
console.log(lessonList);
*/
// document.getElementById та elem.getElementById
//document.getElementById

/*
const elem = document.getElementById('listItem');
console.log(elem);
*/
//getElementsBy*

/*
const elems = document.getElementsByTagName('li');
console.log(elems);
*/
// getElementsByClassName

/*
const elems = document.getElementsByClassName('lesson__item-list');
console.log(elems);
*/
// getElementsByName

/*
const elems = document.getElementsByName('list');
console.log(elems);
*/

/*
// Отримуємо статичну коллекцію
const listStatic = document.querySelectorAll('.lesson__item-list');

// Отримуємо "живу" коллекцію
const listLive = document.getElementsByClassName('lesson__item-list');

console.log(listStatic);
console.log(listLive);

// Створення нового HTML-об'єкта

const lessonList = document.querySelector('.lesson__list');
lessonList.insertAdjacentHTML(
	"beforeend",
	'<li class="lesson__item-list">Новий пункт</li>'
);
*/
// closest

/*
const elem = document.querySelector('.lesson__item-sub-list');
const parentList = elem.closest('.lesson__list');
console.log(parentList);
*/
// Провірка matches

/*
const elems = document.querySelectorAll('.lesson__item-list');
for (let elem of elems) {
	if (elem.matches('[class$="lesson__item-list_red"]')){
		console.log('Червоний');
	} else if (elem.matches('[class$="lesson__item-list_blue"]')){
		console.log('Синій');
	}
}
*/
// Додавання властивості навігації до отриманного об'єкту

/*
const text = document.querySelector('.lesson__text');
const list = text.nextElementSibling;
console.log(list);
*/
// Змінна документа
// Вмістимість елементу innerHTML
//Отримуємо об'єкт

/*
const textElement = document.querySelector('.lesson__text');

// Отримуємо вмістимість об'єкта "як є" разом з HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

// Перезаписуєм вмістиме об'єкта
textElement.innerHTML = 
	`<p>${textElementContent}</p> <p>Живи а працюй в <span class="yellow">вільний</span> час!</p>`;

	console.log(textElement.innerHTML);
*/
//Отримуємо об'єкт

/*
const textElement = document.querySelector('.lesson__text');

// Отримуємо вмістимість об'єкта "як є" разом з HTML
const textElementContent = textElement.outerHTML;
console.log(textElementContent);

textElement.outerHTML = `<p> Живи, а працюй в <span class="yellow">вільний</span> час</p>`;

console.log(textElement.outerHTML);
*/
// Зміна документа
// Просто текст елементу textContent
// Отримуємо об'єкт

/*
const textElement = document.querySelector('.lesson__text');
const textElementContent = textElement.textContent;
console.log(textElementContent);

// Корисна можливість textContent - записувати текст "безпечним шляхом"

textElement.textContent = `<p>Живи, а працюй в <span class="yellow">вільний</span> час</p>`;

console.log(textElement.textContent);
*/
//data.
// Вмістиме текстового вузла/коментаря

/*
//Отримуємо об'єкт
const textElement = document.querySelector('.lesson__text');
const getComment = textElement.nextSibling;

console.log(getComment);
console.log(getComment.data);

// Зміна текстового вузла/коментаря
getComment.data = 'Привіт';
console.log(getComment.data);
*/
// Отримуєм об'єкт

/*
const textElement = document.querySelector('.lesson__text')
// Створення елементів і вузлів

// Створення новго елементу (тегу)
const newElement = document.createElement('div');

// Наповнимо новий елемент
newElement.innerHTML = `Живи, а працюй в <span class="yellow">вільний</span> час`;
console.log(newElement);

// Створення нового текстового вузла
const newText = document.createTextNode('Привіт!');
console.log(newText);

// Вставлення нового елементу

// перед об'єктом
textElement.before(newElement);
// після об'єкту
textElement.after(newElement);
// всередину і в початок об'єкту
textElement.prepend(newElement);
// всередину і в кінець об'єкту
textElement.append(newElement);
*/
"use strict";