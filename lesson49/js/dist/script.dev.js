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
console.log(windowHeight);