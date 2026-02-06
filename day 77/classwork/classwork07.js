// 8.filter() + reduce()
// პირობა:
// შექმენი რიცხვების მასივი.
// ჯერ filter() მეთოდით დატოვე მხოლოდ დადებითი რიცხვები,
// შემდეგ reduce() მეთოდით იპოვე მათი ჯამი.
// დაბეჭდე შედეგი.

let numbers = [-1, 2, -5, 3]

let numbs = numbers.filter(num => num >= 0)

let final = numbs.reduce((acc, curent) => acc+curent, 0)

console.log(final)