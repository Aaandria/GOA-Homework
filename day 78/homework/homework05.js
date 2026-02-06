// 6) შექმენი რიცხვების მასივი 2, 4, 6, 8, 10, 12.
// თითოეული რიცხვი გაზარდე 3-ჯერ,
// დატოვე მხოლოდ ის შედეგები, რომლებიც 20-ს არ აღემატება,
// გამოთვალე მათი ჯამი
// და დაბეჭდე ყველაზე პატარა მიღებული რიცხვი.

let numbers = [2, 4, 6, 8, 10, 12]
let tripled = numbers.map(number=>number*3)
let filtered = tripled.filter(nums=>nums>20)
let reduced = filtered.reduce((acc,current)=> acc+current, 0)
console.log(reduced)