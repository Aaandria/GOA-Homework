// 2)შექმენი რიცხვების მასივი 5, 8, 3, 12, 10, 7. filter მეთოდით დატოვე მხოლოდ ლუწი რიცხვები,
//  map მეთოდით თითოეული გაამრავლე 2-ზე, sort მეთოდით დაალაგე ზრდადობით და forEach მეთოდით დაბეჭდე თითოეული რიცხვი.

let numbers = [5,8,3,12,10,7]

let number = numbers.filter(num => num%2 === 0)

let nums = number.sort(function(a,b) {return a-b})

nums.forEach(i => {
    console.log(i)
})