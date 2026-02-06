// 1) შექმენი რიცხვების მასივი 3, 6, 9, 12, 15, 18.
// თითოეული რიცხვი გაზარდე ორჯერ,
// დატოვე მხოლოდ ის შედეგები, რომლებიც 20-ზე მეტია,
// იპოვე მათი ჯამი
// და ბოლოს დაბეჭდე რამდენი რიცხვი დარჩა.

let num = [3, 6, 9, 12, 15, 18]

let doubled = num.map(nums=>nums*2)
let filtered = doubled.filter(number=>number>20)
let reduced = filtered.reduce((acc,current) => acc+current, 0)
console.log(reduced)