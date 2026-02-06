// 7)შექმენი რიცხვების მასივი 5, 8, 10, 12, 7. map მეთოდით თითოეული რიცხვი გაამრავლე 4-ზე, 
// filter მეთოდით დატოვე მხოლოდ 30-ზე მეტი რიცხვები, filter მეთოდით დატოვე მხოლოდ ლუწი რიცხვები და reduce მეთოდით იპოვე ჯამი.

let numbers = [5,8,10,12,7]

let multiplied = numbers.map(num => num*4)

let filtered = multiplied.filter(nums => nums >30)
let number = filtered.filter(n => n%2 === 0)
let final = number.reduce((acc, curent) => acc+curent, 0)

console.log(final)