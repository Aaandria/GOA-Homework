// 1) შექმენი ფაილი math.js, სადაც გააკეთებ ორი ფუნქციის export-ს: ერთი შეკრებაზე, 
// მეორე გამოკლებაზე. შემდეგ სხვა ფაილში დააიმპორტე და გამოიყენე.

console.log("classwork 1");
import { add, subtract } from "./math.js";

const num1 = 10;
const num2 = 5;
console.log(add(num1, num2));
console.log(subtract(num1, num2));

// 2) შექმენი utils.js, სადაც export გააკეთებ სამ ფუნქციას: min, max, average. 
// შემდეგ app.js-ში დააიმპორტე ყველა და დაბეჭდე შედეგები.

console.log("classwork 2");

import { min, max, average } from "./utils.js";
const numbers = [3, 7, 2, 9, 5];
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));
console.log("Average:", average(numbers));

// 3) შექმენი default export ფუნქცია greet, რომელიც იღებს სახელს და აბრუნებს მისალმებას. 
// შემდეგ სხვა ფაილში დააიმპორტე default import-ით და გამოიძახე.

console.log("classwork 3");

import greett from "./greet.js";
const name = "Andria";
console.log(greett(name));

// 4) შექმენი ფაილი, სადაც ერთდროულად გამოიყენებ named export-საც და default export-საც. შემდეგ სხვა ფაილში ორივე დააიმპორტე.

console.log("classwork 4");

import greet, { age } from "./namedDefault.js";
console.log(greet("Andria"));
console.log(age(15));

// 5) შექმენი constants.js, სადაც export გააკეთებ რამდენიმე ცვლადს (მაგალითად: PI, APP_NAME, VERSION). შემდეგ გამოიყენე სხვა ფაილში.

console.log("classwork 5");

import { PI, APP_NAME, VERSION } from "./constants.js";
console.log("PI:", PI);
console.log("App Name:", APP_NAME);
console.log("Version:", VERSION);
