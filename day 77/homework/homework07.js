// 8)შექმენი რიცხვების მასივი -5, -10, 8, -3, 2. filter მეთოდით დატოვე მხოლოდ უარყოფითი რიცხვები, 
// map მეთოდით გადაიყვანე დადებით რიცხვებში, sort მეთოდით დაალაგე კლებადობით და reduce მეთოდით იპოვე ჯამი.

let numbers = [-5,-10,8,-3,2]

let negative = numbers.filter(nums => nums < 0)

let number = negative.map(num => num-num*2)

let sorted = number.sort(function(a,b){return b-a})

let final = sorted.reduce((acc, curent) => acc+curent)
console.log(final)