// 6)შექმენი ფასების მასივი 30, 60, 80, 45, 100. filter მეთოდით დატოვე მხოლოდ 50-ზე მეტი ფასები, 
// map მეთოდით თითოეული ფასს დააკელი 10, reduce მეთოდით იპოვე ჯამი და დაბეჭდე.

let numbers = [30,60,80,45,100]

let prices = numbers.filter(nums => nums>50)

let sale = prices.map(number => number-10)
let final = sale.reduce((acc, curent) => acc+curent, 0)

console.log(final)