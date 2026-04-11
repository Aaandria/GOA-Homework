// 1.შექმენი ფაილი math.js, სადაც დაწერ ორ ფუნქციას add(a, b) და subtract(a, b), რომლებიც დააბრუნებენ შესაბამისად 
// ორი რიცხვის ჯამს და სხვაობას. შემდეგ ეს ფუნქციები გააერთიანე ერთ ობიექტში სახელად math და გააკეთე მისი export. 
// შემდეგ შექმენი მეორე ფაილი app.js, სადაც დააიმპორტებ math ობიექტს და გამოიყენებ მის ფუნქციებს შედეგების გამოსატანად console.log-ის საშუალებით.

console.log("homework 1")

import { add, subtract } from "./math.js"

const a = 10
const b = 5
console.log(`Add: ${add(a, b)}`)
console.log(`Subtract: ${subtract(a, b)}`)

// 2.შექმენი ფაილი utils.js, სადაც დაწერ სამ ფუნქციას min(a, b), max(a, b) და average(a, b), შემდეგ გააერთიანე ერთ 
// ობიექტში utils და გააკეთე export, ხოლო app.js-ში დააიმპორტე და დაბეჭდე შედეგები.

console.log("homework 2")

import { min, max, average } from "./utils.js"
console.log(`Min: ${min(a, b)}`)
console.log(`Max: ${max(a, b)}`)
console.log(`Average: ${average(a, b)}`)

// 3.შექმენი ფაილი stringUtils.js, სადაც დაწერ ფუნქციებს capitalize(str) და reverse(str), გააერთიანე ერთ 
// ობიექტში stringUtils და გააკეთე export, შემდეგ სხვა ფაილში გამოიყენე ეს ფუნქციები.

console.log("homework 3")

import { capitalize, reverse } from "./stringUtils.js"
const str = "hello"
console.log(`Capitalized: ${capitalize(str)}`)
console.log(`Reversed: ${reverse(str)}`)

// 4.შექმენი ფაილი math.js, სადაც დაწერ ფუნქციებს multiply(a, b) და divide(a, b), 
// გააკეთე default export ობიექტის სახით და app.js-ში დააიმპორტე და გამოიყენე.

console.log("homework 4")

import math from "./math1.js"
console.log(`Multiply: ${math.multiply(a, b)}`)
console.log(`Divide: ${math.divide(a, b)}`)

// 5.შექმენი ფაილი arrayUtils.js, სადაც დაწერ ფუნქციებს sumArray(arr) და findMax(arr), 
// გააერთიანე ერთ ობიექტში და export გააკეთე, შემდეგ app.js-ში გამოიყენე.

console.log("homework 5")

import arrayUtils from "./arrayUtils.js"
const arr = [1, 2, 3, 4, 5, 1]
console.log(`Sum of array: ${arrayUtils.sumArray(arr)}`)
console.log(`Max of array: ${arrayUtils.findMax(arr)}`)

// 6.შექმენი ფაილი user.js, სადაც შექმნი ობიექტს user (name, age) და ასევე ფუნქციას greet(), რომელიც დააბრუნებს მისალმებას, 
// გააკეთე export და სხვა ფაილში გამოიტანე ინფორმაცია.

console.log("homework 6")
import user from "./user.js"
console.log(`User name: ${user.name}`)
console.log(`User age: ${user.age}`)
console.log(user.greet())



// 8. https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

function tripleTrouble(one, two, three){
  const abc = "abcdefghijklmnopqrstuvwxyz"
  let answer = ""
  for(let i = 0; i<one.length; i++){
    answer += one[i] + two[i] + three[i]
  }
  return answer
 }

// 9. https://www.codewars.com/kata/53f9ee9f64b19d4b1d0001ed/train/javascript

function Warrior(n){
  let name = n;
  this.name = function(n){
    if( n ) name=n;
    return name;
  }  
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}