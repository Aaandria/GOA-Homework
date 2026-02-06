// 5) შექმენი რიცხვების მასივი და გამოიყენე reduce, რომ დაითვალო ყველა რიცხვის ჯამი.

let numbers = [1,2,3,4,5]

let sum = numbers.reduce((acc,current)=>acc+current,0)

console.log(sum)