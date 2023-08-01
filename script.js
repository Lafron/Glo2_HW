'use strict'

let title;
let screens;
let screenPrice;

let adaptive;

let service1;
let servicePrice1;
let service2;
let servicePrice2;

const rollBack = 20;

let allServicePrices;
let fullPrice;
let servicePercentPrice;


const askFunc = () => {
    title = prompt("What is your project name?", "     calculator");
    screens = prompt("What type of screens do you prefer?", "simple, modern, interactive");

    do {
        screenPrice = prompt("How much will this job cost?", "30000");
        console.log("isNumber(screenPrice) " + isNumber(screenPrice));
    } while (!isNumber(screenPrice));

    console.log(screenPrice);
    screenPrice = parseFloat(screenPrice.trim());
    console.log(screenPrice);
    

    adaptive = confirm("Do you need adaptive?");

    let service;
    let price;

    for (let i = 0; i < 2; i++){
       service = prompt("What additional type of service is needed?", "long");

        do {
            price = prompt("How cost is it?", "1000");
        }
        while (!isNumber(price));
        console.log(price);

        if (i == 0) {
            service1 = service;
            servicePrice1 = parseFloat(price.trim());
            console.log(servicePrice1);
        } else {
            service2 = service;
            servicePrice2 = parseFloat(price.trim());
        };
    };
};


const isNumber = num => {
    return !isNaN(parseFloat(num)) && isFinite(num);
};


const checkString = str => {
    str = (typeof str === null || typeof str === undefined)
        ? "-" : typeof str === String 
            ? str : str.toString();
    return str;
};

const getAllServicePrices = function (price1, price2) {
    let res = 0;
    res = isNumber(price1) && isNumber(price2) ? price1 + price2 : 0;
    
    return res;
};



function getFullPrice() {
    console.log("typeof screenPrice " + typeof screenPrice);
    console.log("typeof allServicePrices " + typeof allServicePrices);

    return screenPrice + allServicePrices;
};


const getTitle = function (title) {
    title = title.trim();

    let titleArr = title.split("");
    titleArr[0] = titleArr[0].toUpperCase();

    for (let i = 1; i < titleArr.length; i++) {
        titleArr[i] = titleArr[i].toLowerCase();
    };

    return titleArr.join("");
};


const getServicePercentPrices = function (fullPrice, rollBack) {
    return fullPrice - rollBack / 100;
};


const getRollbackMessage = (fullPrice) => {
    if ((fullPrice > 30000) || (fullPrice === 30000)) {
        console.log("We give a 10% discount");
    } else if ((fullPrice > 15000) || (fullPrice === 15000)) {
        console.log("We give a 5% discount");
    } else if (fullPrice > 0) {
        console.log("No discount");
    } else {
        console.log("Something wrong");
    };
};


const showTypeOf = function (message, arg) {
    return message, typeof arg;
};


askFunc();

title = getTitle(title);
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice();

servicePercentPrice = getServicePercentPrices(fullPrice, rollBack);

console.log(showTypeOf("type of title is:", title));
console.log(showTypeOf("type of fullPrice is:", fullPrice));
console.log(showTypeOf("type of adaptive is:", adaptive));

console.log("service1 " + checkString(service1));
console.log("service2 " + checkString(service2));

console.log(screens.split(", "));

getRollbackMessage(fullPrice);

console.log(Math.ceil(servicePercentPrice));