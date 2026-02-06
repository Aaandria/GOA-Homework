// 3) შექმენი რიცხვების მასივი 1, 3, 5, 7, 9.
// თითოეულ რიცხვს დაუმატე მისი პოზიციის ნომერი მასივში,
// დატოვე მხოლოდ ის შედეგები, რომლებიც კენტია,
// და გამოთვალე მათი ნამრავლი.

let numbers = [1, 3, 5, 7, 9]

let add = numbers.map(number=> number+ numbers.indexOf(number))
let odd = add.filter(num => num%2===1)
let multiplied = odd.reduce((acc,current)=> acc*current, 1)

console.log(multiplied)