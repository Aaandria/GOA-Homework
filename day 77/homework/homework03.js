// 4)შექმენი რიცხვების მასივი -5, 2, 3, 7, -1, 9. filter მეთოდით დატოვე მხოლოდ დადებითი რიცხვები,
//  filter მეთოდით დატოვე მხოლოდ კენტი რიცხვები, map მეთოდით თითოეული გაამრავლე 5-ზე და forEach მეთოდით დაბეჭდე შედეგები.

let numbers = [-5,2,3,7,-1,9]

let number = numbers.filter(nums => nums > 0)
let num = number.filter(n => n%2 ===1)
let final = num.map(o => o*5)

final.forEach(i => {
    console.log(i)
})