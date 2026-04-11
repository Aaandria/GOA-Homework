// 1) შექმენი ფაილი math.js
// მასში დააექსპორტე ორი ფუნქცია:
// add(a, b) აბრუნებს ორი რიცხვის ჯამს
// multiply(a, b) აბრუნებს ნამრავლს
// შემდეგ ფაილში app.js:
// დააიმპორტე ორივე ფუნქცია
// გამოიძახე კონსოლში

import { add, multiply } from './math.js';

console.log(add(2, 3));
console.log(multiply(2, 3));

// 2) შექმენი ფაილი stringUtils.js
// დააექსპორტე 3 ფუნქცია:
// toUpper(text)
// toLower(text)
// reverse(text)
// შემდეგ main.js
// დააიმპორტე ყველა ფუნქცია
// თითოეულზე გააკეთე მაგალითი

import { toUpper, toLower, reverse } from './stringUnits.js';

console.log(toUpper('hello world'));
console.log(toLower('HELLO WORLD'));
console.log(reverse('hello world'));

// 3) შექმენი ფაილი ტექსტის დამუშავებისთვის.
// ფუნქცია რომელიც ტექსტს დიდ ასოებად გადაიყვანს
// ფუნქცია რომელიც ტექსტს შემოაბრუნებს
// ფუნქცია რომელიც ტექსტს დაამატებს ძახილის ნიშანს
// ერთ-ერთი ფუნქცია იყოს default expor
// დანარჩენი იყოს named export
// შემდეგ სხვა ფაილში
// დააიმპორტე ყველა ფუნქცია
// გააკეთე მაგალითები.

import toUppercase, {reversed, addExclamation} from './textChange.js';

console.log(toUppercase('hello world'));
console.log(reversed('hello world'));
console.log(addExclamation('hello world'));

// 4) შექმენი ფაილი სადაც იქნება:
// პროდუქტების მასივი
// ფუნქცია რომელიც აბრუნებს ყველა პროდუქტს
// ფუნქცია რომელიც ფილტრავს პროდუქტებს ფასის მიხედვით
// პროდუქტების მასივი იყოს default export
// ფუნქციები იყოს named export
// შემდეგ სხვა ფაილში:
// დააიმპორტე მასივი და ფუნქციები
// დაბეჭდე შედეგები.

import products, { getAllProducts, filterByPrice } from "./price.js";

console.log("Products array:");
console.log(products);

console.log("All products:");
console.log(getAllProducts());

console.log("Products with price >= 700:");
console.log(filterByPrice(700));

// 5) შექმენი ფაილი, სადაც:
// შექმნი მომხმარებლის ობიექტს (სახელი, ასაკი, პროფესია)
// ასევე შექმნი ორ ფუნქციას: ერთი მომხმარებლის მისალმებისთვის და მეორე მისი ასაკის გამოსატანად
// 
// მომხმარებლის ობიექტი უნდა იყოს default export
// ფუნქციები უნდა იყოს named export
// 
// დააიმპორტე ობიექტიც და ფუნქციებიც
// გამოიყენე ისინი კონსოლში.

import user, { greetUser, showAge } from "./user.js";

console.log("User object:");
console.log(user);

console.log(greetUser(user));
console.log(showAge(user));