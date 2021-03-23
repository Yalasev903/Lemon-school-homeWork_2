"use strict";

// home work 2.1 
// Переменная содержит в себе строку. Вывести строку в обратном порядке.


let name = "Yaroslav";

function reverseStr(name) {

     return name.split("").reverse().join("");
}
alert(reverseStr("Yaroslav"));


// home work 2.2
/* Переменная содержит в себе число.
 Написать скрипт который посчитает факториал этого числа.*/

 let number = 5;

function factorial(number){

     return (number != 1) ? number * factorial(number - 1) : 1;
}

console.log(factorial(number));

// home work 2.3
// Дано число - вывести первые N делителей этого числа нацело.

let num = 100;
let count = 5;
let j = 1;



for (let i = 1; j <= count; i++) {
    if (num % i == 0) {
        console.log(i);
        j++;
    }
}

// home work 2.4
// Найти сумму цифр числа которые кратны двум

let string = '012345';
let numbers = string.split('');
let sum = 0;

numbers.forEach(number => {if(number % 2 === 0) sum += +number;})
console.log(sum);

