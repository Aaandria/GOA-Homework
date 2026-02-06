// 5) შექმენი რიცხვების მასივი 6, 9, 12, 15, 18.
// map მეთოდით თითოეული რიცხვი გაამრავლე 4-ზე,
// reduce მეთოდით იპოვე საშუალო არითმეტიკული,
// Math.round()-ის გამოყენებით დაამრგვალე შედეგი
// და დაბეჭდე საბოლოო პასუხი.

let nums = [6,9,12,15,18]

let multiplied = nums.map(num => num*4)
let reduced = multiplied.reduce((acc,current) => (acc+current)/multiplied.length)
let final = Math.round(reduced)

console.log(final)