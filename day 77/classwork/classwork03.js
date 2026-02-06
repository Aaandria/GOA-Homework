// 4.filter()
// პირობა:
// შექმენი რიცხვების მასივი.
// filter() მეთოდის გამოყენებით დატოვე მხოლოდ ის რიცხვები, რომლებიც 10-ზე მეტია.
// დაბეჭდე მიღებული მასივი.

let numbers = [1, 2, 20, 5, 1000, 4, 21]

let doubleDigit = numbers.filter(num => num > 10)

console.log(doubleDigit)