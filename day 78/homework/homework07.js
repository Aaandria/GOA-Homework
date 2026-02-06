// 8) შექმენი რიცხვების მასივი 3, 5, 7, 9, 11.
// თითოეული რიცხვი გაამრავლე საკუთარ თავზე,
// დატოვე მხოლოდ ის შედეგები, რომლებიც ლუწია,
// გამოთვალე რამდენი ასეთი რიცხვი მიიღება
// და დაბეჭდე ეს რაოდენობა.

let numbers = [3, 5, 7, 9, 11]

let multiplied = numbers.map(number=>number**2)
let even = multiplied.filter(nums=>nums%2===0)
console.log(even.length)