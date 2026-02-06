// 2) შექმენი რიცხვების მასივი 10, 3, 18, 7, 14, 1.
// filter მეთოდით დატოვე მხოლოდ 5-ზე მეტი რიცხვები,
// map მეთოდით თითოეული გაყავი 2-ზე,
// sort მეთოდით დაალაგე კლებადობით
// და forEach მეთოდით დაბეჭდე თითოეული ელემენტი.

let num = [10, 3,18,7,14,1]

let filtered = num.filter(nums => nums>5)
let devided = filtered.map(number => number/2)
devided.sort(function(a,b){return b-a})

devided.forEach(i => {
    console.log(i)
})