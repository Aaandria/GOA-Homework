// 2) შექმენი რიცხვების მასივი 5, 11, 2, 8, 14, 7.
// დატოვე მხოლოდ ლუწი რიცხვები,
// თითოეული მათგანი აიყვანე კვადრატში,
// დაალაგე მიღებული რიცხვები ზრდადობით
// და ეკრანზე გამოიტანე თითოეული მათგანი.

let nums = [5, 11, 2, 8, 14, 7]

let even = nums.filter(num => num%2===0)
let squared = even.map(number => number**2)
let sorted = squared.sort(function(a,b){return a-b})

console.log(sorted)