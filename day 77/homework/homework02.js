// 3)შექმენი რიცხვების მასივი 3, 4, 5, 7, 8. map მეთოდით თითოეულ რიცხვს დაუმატე 1,
//  map მეთოდით მეორე ნაბიჯში გაამრავლე 2-ზე, filter მეთოდით დატოვე მხოლოდ 10-ზე მეტი რიცხვები და reduce მეთოდით იპოვე ნამრავლი.

let numbers = [3,4,5,7,8]

let number = numbers.map(nums => nums+1)

let num = number.map(n => n*2)

let filtered = num.filter(i => i>10)

let final = filtered.reduce((acc, curent) => acc*curent, 1)

console.log(final)