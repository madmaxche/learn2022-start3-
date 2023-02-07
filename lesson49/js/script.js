
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