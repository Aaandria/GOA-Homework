// 7.map() + filter()
// პირობა:
// შექმენი რიცხვების მასივი.
// ჯერ map() მეთოდით თითოეული რიცხვი გაამრავლე 2-ზე,
// შემდეგ filter() მეთოდით დატოვე მხოლოდ ლუწი რიცხვები.
// დაბეჭდე საბოლოო მასივი.

let numbers = [1,2,3,4]

let nums = numbers.map(num => num*2)

let final = nums.filter(n => n%2 === 0)

console.log(final)
