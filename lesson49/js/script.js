
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