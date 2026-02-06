// 7) შექმენი რიცხვების მასივი 1, 5, 10, 15, 20.
// თითოეულ რიცხვს გამოაკელი 1,
// დატოვე მხოლოდ ის შედეგები, რომლებიც 10-ზე მეტია,
// დაალაგე მიღებული რიცხვები კლებადობით
// და ეკრანზე გამოიტანე ყველა ელემენტი.

let numbers =[1, 5, 10, 15, 20]
let subtract = numbers.map(number=>number-1)
let filtered = subtract.filter(nums=>nums>10)
let sorted = filtered.sort(function(a,b){b-a})
console.log(sorted)