console.log("=== classwork 1 ===")

// 1) შექმენი მასივი numbers = [1, 2, 3].
// შექმენი ახალი მასივი newNumbers, სადაც spread-ის გამოყენებით დაამატებ რიცხვს 4 ბოლოში.

const numbers = [1,2,3]
const newNumbers = [...numbers, 4]
console.log(newNumbers)

console.log("=== classwork 2 ===")

// 2) გაქვს ორი მასივი:
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// გააერთიანე ისინი ერთ მასივად spread-ის გამოყენებით.

const arr1 = [1, 2]
const arr2 = [3, 4]
const comb = [...arr1, ...arr2]
console.log(comb)

console.log("=== classwork 3 ===")

// 3) შექმენი მასივი colors = ["red", "blue"].
// შექმენი ახალი მასივი სადაც "green" იქნება დასაწყისში, შემდეგ spread-ით ძველი ელემენტები.

const colors = ["red", "blue"]
const newColor = ["green", ...colors]
console.log(newColor)

console.log("=== classwork 4 ===")

// 4) შექმენი obj.
// შექმენი ახალი obj, newNumbersObj, სადაც spread-ის გამოყენებით დაამატებ რიცხვს 4 ბოლოში.

const numbersObj = { a: 1, b: 2, c: 3 }
const newNumbersObj = { ...numbersObj, d: 4 }
console.log(newNumbersObj)

console.log("=== classwork 5 ===")

// 5) გაქვს ორი obj
// გააერთიანე ისინი ერთ obj-ად spread-ის გამოყენებით.

const obj1 = {name: "andria", age: 15}
const obj2 = {profession: "Developer", city: "Kutaisi"}
const mergedObj = { ...obj1, ...obj2 }
console.log(mergedObj)