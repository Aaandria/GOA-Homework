// 7) მოცემულია რიცხვების მასივი. დაწერეთ პროგრამა, რომელიც დაითვლის რამდენი რიცხვია 0-დან 50-მდე,
//  რამდენი 51-დან 100-მდე და რამდენი 100-ზე მეტია. ამოცანა შეასრულეთ forEach მეთოდის გამოყენებით.

const numbers = [10, 45, 60, 90, 120, 5, 75, 200]

const ranges = {
  from0to50: 0,
  from51to100: 0,
  above100: 0
}

numbers.forEach(n => {
  if (n <= 50) {
    ranges.from0to50++
  } else if (n <= 100) {
    ranges.from51to100++
  } else {
    ranges.above100++
  }
})

console.log(ranges)