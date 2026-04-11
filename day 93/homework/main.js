// 1 შექმენი ფუნქცია რომელიც მიიღებს რიცხვების array-ს და დააბრუნებს object-ს სადაც იქნება ყველაზე პატარა 
// რიცხვი და ყველაზე დიდი რიცხვი გამოიყენე for loop და if else ფუნქცია უნდა იყოს ცალკე ფაილში და 
// ექსპორტირებული და მეორე ფაილში უნდა მოხდეს იმპორტი და გამოყენება
console.log("Homework 1");

import { lowNum, highNum } from "./highLow.js";
const arr = [3, 1, 4, 1, 5, 9];
console.log("Lowest number:", lowNum(arr));
console.log("Highest number:", highNum(arr));

// 2 შექმენი ფუნქცია რომელიც მიიღებს array-ს და target რიცხვს ფუნქციამ უნდა მოძებნოს target array-ში 
// while loop-ის გამოყენებით თუ იპოვა დააბრუნოს index თუ ვერ იპოვა დააბრუნოს ტექსტი ვერ მოიძებნა 
// ფუნქცია უნდა იყოს ცალკე მოდულში ექსპორტირებული და სხვა ფაილში იმპორტირებული და გამოყენებული

console.log("Homework 2");

import { findTarget } from "./findTarget.js";
const arr2 = [10, 20, 30, 40, 50];
const target = 30;
const result = findTarget(arr2, target);
console.log(result);

// 3 შექმენი ფუნქცია რომელიც მიიღებს რიცხვების array-ს და დააბრუნებს ყველა იმ წყვილს რომლის ჯამი 
// არის 27 გამოიყენე nested for loop if და შეინახე შედეგი ახალ array-ში ფუნქცია უნდა იყოს მოდულში 
// ექსპორტირებული და სხვა ფაილში იმპორტირებული და გამოყენებული
console.log("Homework 3");

import { findPairs } from "./findPairs.js";
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 26, 17, 20, 11];
const targetSum = 27;
const pairs = findPairs(arr3, targetSum);
console.log("Pairs with sum 27:", pairs);

// 4 შექმენი ფუნქცია რომელიც მიიღებს ტექსტს და დააბრუნებს იგივე ტექსტს მაგრამ ციფრების გარეშე 
// გამოიყენე for loop if და continue ფუნქცია უნდა იყოს ცალკე ფაილში და გამოყენებული იყოს იმპორტის საშუალებით სხვა ფაილში

console.log("Homework 4");

import { removeDigits } from "./removeDigits.js";
const text = "Hello123 World456!";
const resultText = removeDigits(text);
console.log("Text without digits:", resultText);

// 5 შექმენი ფუნქცია რომელიც მიიღებს სტუდენტის ქულას და დააბრუნებს შეფასებას 90 ან მეტი არის A 70 ან მეტი 
// არის B 50 ან მეტი არის C 50-ზე ნაკლები არის F გამოიყენე if else if else ფუნქცია უნდა იყოს მოდულში 
// ექსპორტირებული და იმპორტირებული და გამოყენებული სხვა ფაილში

console.log("Homework 5");

import { gradeStudents } from "./gradeStudents.js";
const score = [85, 95, 75, 65, 55];
const grades = gradeStudents(score);
console.log("Students' grades:", grades);

// 6 შექმენი ფუნქცია რომელიც მიიღებს რიცხვების array-ს და დააბრუნებს object-ს სადაც იქნება ლუწი 
// რიცხვების რაოდენობა კენტი რიცხვების რაოდენობა და ყველა რიცხვის ჯამი გამოიყენე for loop და 
// if else ფუნქცია უნდა იყოს ცალკე მოდულში და გამოყენებული იყოს იმპორტით სხვა ფაილში

console.log("Homework 6");

import { countEvenOddSum } from "./countEvenOddSum.js";
const arr4 = [1, 2, 3, 4, 5, 6];
const resultCount = countEvenOddSum(arr4);
console.log("Even and Odd Count with Sum:", resultCount);

// 7.  შექმენი ორი ფაილი ერთში export გააკეთე ფუნქცია სახელით addNumbers მეორე ფაილში იმპორტის დროს ეს ფუნქცია 
// შემოიტანე სხვა სახელით as-ის გამოყენებით მაგალითად rename და გამოიყენე ფუნქცია იმპორტირებული სახელით ორი რიცხვის დასამატებლად

console.log("Homework 7");

import { addNumbers as rename } from "./addNumbers.js";
const num1 = 5;
const num2 = 10;
const sum = rename(num1, num2);
console.log("Sum of numbers:", sum);

// 8. შექმენი ორი ფუნქცია ერთ ფაილში ერთი ფუნქცია უნდა აბრუნებდეს ორი რიცხვის ჯამს მეორე ფუნქცია უნდა 
// აბრუნებდეს ორი რიცხვის ნამრავლს ორივე ფუნქცია უნდა იყოს export-ით გამოყვანილი მეორე ფაილში უნდა შემოიტანო 
// ორივე ფუნქცია ერთდროულად * as გამოყენებით და გამოიყენო ისინი სხვადასხვა რიცხვებზე შედეგის გამოსათვლელად

console.log("Homework 8");

import * as mathFunctions from "./mathFunctions.js";
const a = 7;
const b = 3;
const sumResult = mathFunctions.add(a, b);
const productResult = mathFunctions.multiply(a, b);
console.log("Sum of numbers:", sumResult);
console.log("Product of numbers:", productResult);

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

function noSpace(x){
  let final = "";
  for(i = 0; i < x.length; i++){
    if(x[i] != " "){
      final += x[i]
    }
  }
  return final
}

// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript

function move (position, roll) {
  return position + roll * 2
}