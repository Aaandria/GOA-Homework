// 3) მოცემულია თამაშის მოთამაშეების სია, სადაც თითოეულ მოთამაშეს აქვს სახელი და მოგებული ქულები. 
// დაწერეთ პროგრამა, რომელიც იპოვის მოთამაშეს, რომელსაც ყველაზე ნაკლები ქულა აქვს. ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const players = [
  { name: "Gio", score: 120 },
  { name: "Nika", score: 80 },
  { name: "Ana", score: 150 },
  { name: "Luka", score: 60 }
]

const lowestScorePlayer = players.reduce((min, player) => {
  return player.score < min.score ? player : min
})

console.log(lowestScorePlayer)