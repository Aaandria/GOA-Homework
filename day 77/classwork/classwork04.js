// 5.reduce()
// პირობა:
// შექმენი რიცხვების მასივი.
// reduce() მეთოდის გამოყენებით იპოვე ყველა რიცხვის ნამრავლი.
// დაბეჭდე შედეგი.

let num = [1, 2, 3, 4]

let multiply = num.reduce((acc, current) => acc * current, 1)

console.log(multiply)