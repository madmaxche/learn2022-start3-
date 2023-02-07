"use strict";

// Розміри вікна браузера
// clientWidth та clientHeight
// Доступна ширина та висота екрану
var mainElement = document.documentElement;
var mainElementWidth = mainElement.clientWidth;
var mainElementHeight = mainElement.clientHeight;
console.log(mainElementWidth);
console.log(mainElementHeight); //-------------
// Ширина та висота екрану разом із полосами прокрутки

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight); // Ширина та висота документу
// включаючи прокрученну область

var scrollWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetHeight, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth);
var scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
console.log(scrollWidth);
console.log(scrollHeight); // Отримати кількість прокручених пікселів
// Тільки для читання

var windowScrollTop = window.pageYOffset;
var windowScrollLeft = window.pageXOffset;
console.log(windowScrollTop);
console.log(windowScrollLeft); // Управління прокруткою сторінки
// Метод scrollBy(x,y) прокручує сторінку відносно
// її теперішнього положення

function setScrollBy() {
  window.scrollBy(0, 50);
  var windowScrollTop = window.pageYOffset;
  console.log(windowScrollTop);
} // Метод scrollTo(pageX,pageY) прокручує сторінку 
// на абсолютні координати (pageX,pageY)
// те саме що і window.scroll()


function setScrollTo() {
  window.scrollTo(0, 50);
  var windowScrollTop = window.pageYOffset;
  console.log(windowScrollTop);
}

function setScrollToOptions() {
  window.scrollTo({
    top: 500,
    left: 0,
    // smooth, instant
    // або auto; по замовчуванню auto
    behavior: "smooth"
  });
} // Опції не працюють в Safari