// 1) შექმენი ფაილი, სადაც არის ორი ფუნქცია:
// ერთი პოულობს მასივში ყველაზე პატარა რიცხვს
// მეორე პოულობს ყველაზე დიდ რიცხვს
// მეორე ფაილში დააიმპორტე ეს ფუნქციები და გამოიყენე ერთ მასივზე.
console.log("Classwork 1");

import { lowNum, highNum } from "./highLow.js";
const arr = [3, 1, 4, 1, 5, 9];
console.log("Lowest number:", lowNum(arr));
console.log("Highest number:", highNum(arr));

// 2) შექმენი ფაილი, სადაც ორი ფუნქციაა:
// ერთი რიცხვს აორმაგებს
// მეორე რიცხვს ასამმაგებს
console.log("Classwork 2");

import { double, triple } from "./doubleTriple.js";
const num = 5;
console.log("Double of", num, "is", double(num));
console.log("Triple of", num, "is", triple(num));

// 3) შექმენი ფაილი, სადაც:
// default export არის ფუნქცია, რომელიც მომხმარებელს ესალმება
// დამატებით export არის ფუნქცია, რომელიც ემშვიდობება
console.log("Classwork 3");

import greet, { goodBye } from "./greet.js";
const name = "Andria";
console.log(greet(name));
console.log(goodBye(name));

// 4) შექმენი ფაილი, სადაც არის ორი ფუნქცია:
// ერთი ტექსტს დიდ ასოებად აქცევს
// მეორე პატარა ასოებად
console.log("Classwork 4");

import { upper, lower } from "./textChange.js";
const text = "Hello, World!";
console.log("Uppercase:", upper(text));
console.log("Lowercase:", lower(text));

// 5) შექმენი ერთი ფაილი, სადაც ორი ფუნქციაა: შეკრება და გამოკლება.
// მეორე ფაილში დააიმპორტე ეს ფუნქციები და გამოიტანე მათი შედეგები.
console.log("Classwork 5");

import { add, subtract } from "./math.js";
const a = 10;
const b = 5;
console.log("Addition:", add(a, b));
console.log("Subtraction:", subtract(a, b));