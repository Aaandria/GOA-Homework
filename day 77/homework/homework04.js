// 5)შექმენი რიცხვების მასივი 5, 7, 3, 8, 6. map მეთოდით თითოეულ რიცხვს დაუმატე 2,
//  filter მეთოდით დატოვე მხოლოდ 10-ზე მეტი რიცხვები, reduce მეთოდით იპოვე საშუალო და დაბეჭდე მთლიანი რიცხვი.

let numbers = [5,7,3,8,6]

let number = numbers.map(nums => nums+2)
let num = number.filter(n => n >= 10)
let final = num.reduce((acc, curent) => (acc+curent)/num.length, 0)

console.log(final)