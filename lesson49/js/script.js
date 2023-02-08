
// Розміри вікна браузера
// clientWidth та clientHeight

// Доступна ширина та висота екрану

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);


//-------------

// Ширина та висота екрану разом із полосами прокрутки

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);

// Ширина та висота документу
// включаючи прокрученну область

let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetHeight, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);

// Отримати кількість прокручених пікселів
// Тільки для читання

const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);

// Управління прокруткою сторінки

// Метод scrollBy(x,y) прокручує сторінку відносно
// її теперішнього положення

function setScrollBy() { 
	window.scrollBy(0,50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}

// Метод scrollTo(pageX,pageY) прокручує сторінку 
// на абсолютні координати (pageX,pageY)
// те саме що і window.scroll()

function setScrollTo() { 
	window.scrollTo(0,50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}


function setScrollToOptions(){
	window.scrollTo({
		top:500,
		left:0,
		// smooth, instant
		// або auto; по замовчуванню auto
		behavior:"smooth"
	});
}
// Опції не працюють в Safari


// Управління прокруткою сторінки

function setScrollIntoView(top) {
	const lessonSelected = document.querySelector('.lesson_selected');
	lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView({
		// start, "center", "end" або "nearest". По замовчуванню "center"
		block: "center",
		// start, "center", "end" або "nearest". По замовчуванню "nearest"
		inline: "nearest",
		// "auto" або "smooth". По замовчуванню "auto"
		behavior: "smooth"
	});
}


// Заборона прокрутки 

function setEnableDisableScroll() {
	//document.body.style.overflow = "hidden";
	document.body.classList.toggle('scroll-lock');
}



// Метрики елементів на сторінці

// Отримуєм об'єкт
const block = document.querySelector('.lesson__block');

// Позиція об'єкту
// Властивості offsetParent, offsetLeft, та offsetTop

// Отримуємо батьківській елемент
// відносно якого позиційований наш об'єкт
/*/
const elementOffsetParent = block.offsetParent;

console.log(elementOffsetParent);
*/
// Отримуємо позицію об'єкта відносно предка (offsetParent)
/*
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);
*/

// Отримуємо розміри об'єкта
/*
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);
*/
// Метрики для не відобраючих елементів рівні нулю


// Отримуєм об'єкт
const blockTopLeft = document.querySelector('.lesson__block');

// Відступи внутрішньої частини елемента від зовнішньої
// clientTop та clientLeft
/*
const elementClientTop = blockTopLeft.clientTop;
const elementClientLeft = blockTopLeft.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);
*/

// Отримуєм об'єкт
const blockWidthHeight= document.querySelector('.lesson__block');

// Розміри об'єкта без рамок та полоси прокрутки
// clientWidth та clientHeight
/*
const elementClientWidth = blockWidthHeight.clientWidth;
const elementClientHeight = blockWidthHeight.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);
*/
// загальна ширина - рамка ліворуч - рамка праворуч - скролл
// 500 - 20 - 20 - 17 = 443

// Отримуєм об'єкт
/*
const blockScroll= document.querySelector('.lesson__block');

// Розміри об'єкта включаючи в себе
// прокрученну (яку не видно) частину
// В іншому працюють як clientWidth/clientHeight,
//scrollWidth/scrollHeight

const elementScrollWidth = blockScroll.scrollWidth;
const elementScrollHeight = blockScroll.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);

// Розміри прокрученої области
// scrollLeft / scrollTop

//blockScroll.scrollTop = 150;

const elementScrollLeft = blockScroll.scrollLeft;
const elementScrollTop = blockScroll.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);
*/


/*
// Отримуєм об'єкт
const blockScrollBy= document.querySelector('.lesson__block');

// Методи управління прокруткою
// scrollBy, scrollTo та scrollIntoView
// працюють і для об'єкта

function setElementScrollBy() {
	blockScrollBy.scrollBy({
		top:20,
		left:0,
		behavior:"smooth"
	})
}
*/

// Координати відносно вікна браузера
// getBoundingClientRect

// Отримуємо об'єкт
const item = document.querySelector('.lesson__item');

// Отримуємо координати відно вікна браузера
const getItemCoords = item.getBoundingClientRect();

console.log(getItemCoords);

// Отримуємо конкретну координату відносно вікна браузера
const getItemLeftCoord = item.getBoundingClientRect().left;

// Отримуємо конкретну координату відносно документа
const getItemTopDocumentCoord = getItemCoord + window.pageYOffset;

console.log(getItemLeftCoord);
console.log(getItemTopDocumentCoord);

// Отримання об'єкта по координатам
// document.elementFromPoint(x,y);

const elem = document.elementFromPoint(100,100);

console.log(elem);
