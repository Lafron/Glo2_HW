'use strict'

const rollBack = 20;

let title = prompt("What is your project name?", "     calculator");
let screens = prompt("What type of screens do you prefer?", "simple, modern, interactive");

let screenPrice = +prompt("How much will this job cost?", "30000");

let adaptive = confirm("Do you need adaptive?");

let service1 = prompt("What additional type of service is needed?", "long");
let servicePrice1 = +prompt("How cost is it?", "1000");

let service2 = prompt("What additional type of service is needed?", "shot");
let servicePrice2 = +prompt("How cost is it?", "1000");



const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};
const allServicePrices = getAllServicePrices();


function getFullPrice() {
    return screenPrice + allServicePrices;
};
const fullPrice = getFullPrice();


const getTitle = function (title) {
    title = title.trim();
    
    let titleArr = title.split("");
    titleArr[0] = titleArr[0].toUpperCase();

    for (let i = 1; i < titleArr.length; i++) {
        titleArr[i] = titleArr[i].toLowerCase();
    };

    return titleArr.join("");
};
title = getTitle(title);


const getServicePercentPrices = function (fullPrice, rollBack) {
    return fullPrice - rollBack / 100;
};
const servicePercentPrice = getServicePercentPrices(fullPrice, rollBack);


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
    console.log(message, typeof arg);
};

showTypeOf("type of title is:", title);
showTypeOf("type of fullPrice is:", fullPrice);
showTypeOf("type of adaptive is:", adaptive);

console.log(screens.split(", "));

getRollbackMessage(fullPrice);

console.log(Math.ceil(servicePercentPrice));