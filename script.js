'use strict'

let title = prompt("What is your project name?", "Calculator");

let screens = prompt("What type of screens do you prefer?", "simple, modern, interactive");

let screenPrice = +prompt("How much will this job cost?", "10000");

let adaptive = confirm("Do you need adaptive?");

let service1 = prompt("What additional type of service is needed?", "long");

let servicePrice1 = + prompt("How cost is it?", "1000");

let service2 = prompt("What additional type of service is needed?", "shot");

let servicePrice2 = +prompt("How cost is it?", "1000");


const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const rollBack = 20;

const servicePercentPrice = fullPrice * (1 - rollBack / 100);

console.log(Math.ceil(servicePercentPrice));

if ((fullPrice > 30000) || (fullPrice === 30000)) {
    console.log("We give a 10% discount");
}
else if ((fullPrice > 15000) || (fullPrice === 15000)) {
    console.log("We give a 5% discount");
}
else if (fullPrice > 0) {
    console.log("No discount");
}
else {
    console.log("Something wrong");
}