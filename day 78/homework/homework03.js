// 4) შექმენი რიცხვების მასივი -8, -2, 0, 3, 6, 9, 11.
// ამოიღე ყველა უარყოფითი რიცხვი,
// დარჩენილი რიცხვებიდან თითოეულს დაუმატე 5,
// დატოვე მხოლოდ 10-ზე ნაკლები შედეგები
// და დაბეჭდე ისინი.

let numbers = [-8, -2, 0, 3, 6, 9, 11]

let positive = numbers.filter(number=> number>0)
let add = positive.map(num=> num+5)
let final = add.filter(nums=> nums<10)
console.log(final)