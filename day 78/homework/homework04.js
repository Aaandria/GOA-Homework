// 5) შექმენი რიცხვების მასივი 4, 8, 12, 16, 20.
// თითოეული რიცხვი გაყავი 2-ზე,
// იპოვე მიღებული რიცხვების საშუალო არითმეტიკული,
// დაამრგვალე შედეგი მთელ რიცხვამდე
// და დაბეჭდე საბოლოო პასუხი.

let numbers = [4, 8, 12, 16, 20]

let devided = numbers.map(number=> number/2)
let half = devided.reduce((acc,current)=> (acc+current))/devided.length
let rounded = Math.round(half)
console.log(rounded)