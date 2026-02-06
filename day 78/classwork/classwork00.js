//  1) შექმენი რიცხვების მასივი 4, 9, 2, 15, 6, 11.
// map მეთოდით თითოეული რიცხვი აიყვანე კვადრატში,
// filter მეთოდით დატოვე მხოლოდ 50-ზე ნაკლები მნიშვნელობები,
// reduce მეთოდით იპოვე მათი ჯამი
// და ბოლოს დაბეჭდე მაქსიმალური რიცხვი მიღებული მასივიდან.

let num = [4,9,2,15,6,11]

let squared = num.map(nums => nums**2)
let filtered = squared.filter(number => number<50)
let final = filtered.reduce((acc, current) => acc+current, 0)

console.log(final)