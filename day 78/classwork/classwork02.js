// 3) შექმენი რიცხვების მასივი 1, 2, 3, 4, 5, 6.
// map მეთოდით თითოეულ რიცხვს დაუმატე მისი ინდექსი,
// filter მეთოდით დატოვე მხოლოდ ლუწი შედეგები,
// reduce მეთოდით იპოვე მათი ნამრავლი.

let nums = [1,2,3,4,5,6]

let add = nums.map(num => num+nums.indexOf(num))
let filtered = add.filter(number => number%2===0)
let reduced = filtered.reduce((acc, current) => acc*current, 1)
console.log(reduced)