// 1.კომენტარებით ახსენით რა არის ES6
// ES6 არის JavaScript-ის მეექვსე ვერსია, რომელიც შემოვიდა 2015 წელს. ეს ვერსია მოიცავს ახალ ფუნქციებს და გაუმჯობესებებს, 
// რომლებიც მიზნად ისახავს კოდის წერის უფრო მარტივ და ეფექტურ გზას. ES6-ში შემოვიდა ახალი სინტაქსი, 
// როგორიცაა let და const ცვლადების დეკლარაცია, arrow functions, template literals, destructuring assignment და 
// სხვა მრავალი ფუნქცია

// 2.კომენტარებით ახსენით რა არის მოდული.
// მოდული არის კოდის ნაწილი, რომელიც დამოუკიდებლად მუშაობს და შეიძლება გამოყენებულ იქნას სხვა ნაწილებში.
// მოდულები საშუალებას აძლევენ კოდის ორგანიზებას და გადანაწილებას სხვადასხვა ფაილებში, 
// რაც ზრდის კოდის გამართულობას და ხელმისაწვდომობას.
// JavaScript-ში, ES6 მოდულები შემოვიდა import და export ფუნქციების საშუალებით, 
// რაც საშუალებას აძლევს კოდს იყოს უფრო მორგებული და მარტივად მართვადი.

// 3.კომენტარებით ახსენით რა არის ექსპორტი/def export/named export.
// ექსპორტი არის პროცესი, რომლის საშუალებითაც კოდის ნაწილი 
// (მაგალითად, ფუნქცია, კლასი ან ცვლადი) შეიძლება გამოიყენოს სხვა ფაილებში გამოყენებისთვის.
// ES6-ში, ექსპორტი შეიძლება იყოს ნაგულისხმევი (default export) ან სახელით (named export).
// ნაგულისხმევი ექსპორტი საშუალებას აძლევს მხოლოდ ერთ ელემენტი ფაილში, 
// და ის შეიძლება იმპორტირდეს ნებისმიერ სახელით.

// 4.კომენტარებით ახსენით რა არის იმპორტი.
// იმპორტი არის პროცესი, რომლის საშუალებითაც კოდის ნაწილი (მაგალითად, ფუნქცია, კლასი ან ცვლადი)
// შეიძლება  სხვა ფაილებში გამოყენებისთვის. ES6-ში, იმპორტი შეიძლება იყოს ნაგულისხმევი 
// (default import) ან სახელით (named import). ნაგულისხმევი იმპორტი საშუალებას აძლევს მხოლოდ
// ერთ ელემენტს  ფაილში, და ის შეიძლება იმპორტირდეს ნებისმიერ სახელით. 
// სახელით იმპორტი საშუალებას აძლევს რამდენიმე ელემენტს  ფაილში, და ისინი უნდა 
// იმპორტირდნენ ზუსტად იმ სახელებით, რომლითაც ისინი ექსპორტირებულია.

// 5. შექმენი ფაილი mathUtils.js. დაწერე ორი ფუნქცია double(n) და triple(n). 
// double აბრუნებს რიცხვის ორმაგს და triple აბრუნებს რიცხვის სამმაგს. ორივე გააკეთე named export.
// შემდეგ შექმენი app.js, დააიმპორტე ორივე ფუნქცია და გამოიტანე console.log-ში რამდენიმე მაგალითი.
console.log("Homework 5");
import { double, triple } from "./mathUnits.js";
console.log(double(5));
console.log(triple(5));

// 6.შექმენი ფაილი sumNumbers.js. დაწერე ფუნქცია sumTo(n) რომელიც for loop-ის გამოყენებით 
// დაითვლის 1-დან n-მდე რიცხვების ჯამს და დააბრუნებს შედეგს. ეს ფუნქცია გააკეთე default export.
//  შემდეგ main.js-ში დააიმპორტე ეს ფუნქცია და გამოიძახე console.log-ში.
console.log("Homework 6");
import sumTo from "./sumNumbers.js";
console.log(sumTo(5));

// 7. შექმენი ფაილი arrayUtils.js. დაწერე ფუნქცია getEvenNumbers(arr) რომელიც მიიღებს
//  რიცხვების array-ს, for loop-ის გამოყენებით იპოვის ყველა ლუწ რიცხვს და დააბრუნებს ახალ 
// array-ს ამ რიცხვებით. ეს ფუნქცია გააკეთე named export. შემდეგ app.js-ში 
// დააიმპორტე ფუნქცია და გამოიტანე შედეგი console.log-ში.
console.log("Homework 7");
import { getEvenNumbers } from "./arrayUtils.js";
const numbers = [1, 2, 3, 4, 5, 6];
console.log(getEvenNumbers(numbers));

// 8. შექმენი ფაილი stringTools.js. დაწერე ორი ფუნქცია. პირველი ფუნქცია reverse(text) 
// უნდა აბრუნებდეს ტექსტს უკუღმა და იყოს named export. მეორე ფუნქცია countLetters(text) 
// უნდა ითვლიდეს ტექსტში რამდენი ასოა for loop-ის გამოყენებით და იყოს default export. 
// შემდეგ main.js-ში დააიმპორტე ორივე ფუნქცია და გამოიტანე შედეგები console.log-ში.
console.log("Homework 8");
import countLetters, { reverse } from "./stringTools.js";
const text = "Hello World";
console.log(reverse(text));
console.log(countLetters(text));

// 9. შექმენი ორი მოდული numbers.js და average.js. numbers.js-ში დაწერე ფუნქცია 
// sumEven(arr) რომელიც მიიღებს array-ს, for loop-ის გამოყენებით იპოვის ყველა ლუწ 
// რიცხვს და დააჯამებს მათ. ეს ფუნქცია გააკეთე named export. average.js-ში დაწერე ფუნქცია 
// average(arr) რომელიც დაითვლის array-ის საშუალოს და იყოს default export. შემდეგ app.js-ში 
// დააიმპორტე ორივე მოდული, გამოიყენე ერთ array-ზე და გამოიტანე console.log-ში ლუწი რიცხვების ჯამი და array-ის საშუალო.
console.log("Homework 9");
import { sumEven } from "./numbers.js";
import average from "./avarage.js";
const arr = [1, 2, 3, 4, 5, 6];
console.log(sumEven(arr));
console.log(average(arr));

// 10.https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// function positiveSum(arr) {
//   let even = arr.filter(num => num > 0);
//   let final = even.reduce((acc, curr) => {
//     return acc + curr
//   }, 0)
//   return final
// }

// 11.https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

// def find_smallest_int(arr):
//     smallest_int = arr[0]
//     for i in arr:
//         if i < smallest_int:
//             smallest_int = i
//     return smallest_int