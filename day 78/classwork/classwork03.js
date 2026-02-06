// 4) შექმენი რიცხვების მასივი -10, -3, 0, 4, 7, 12.
// filter მეთოდით მოაშორე ნულზე ნაკლები რიცხვები,
// map მეთოდით თითოეულ დარჩენილ რიცხვს გამოაკელი 1,
// filter მეთოდით დატოვე მხოლოდ კენტი რიცხვები
// და forEach მეთოდით დაბეჭდე ისინი.

let nums = [-10, -3,0,4,7,12]
let filtered = nums.filter(num => num>0)
let minus = filtered.map(number => number -1)
let filteredToo = minus.filter(numbers => numbers%2===1)
filteredToo.forEach(i=>{
    console.log(i)
})