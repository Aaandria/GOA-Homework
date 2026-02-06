// 3) მოცემულია მოსწავლეთა სია, სადაც თითოეულ მოსწავლეს აქვს სახელი და ქულა.
// დაწერეთ პროგრამა, რომელიც იპოვის იმ მოსწავლეს, ვისაც ყველაზე მაღალი ქულა აქვს.
// ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const students = [
  { name: "ანა", score: 85 },
  { name: "გიორგი", score: 92 },
  { name: "ნინო", score: 88 },
  { name: "ლუკა", score: 92 }
]

const topStudent = students.reduce((best, current) => {
  return current.score > best.score ? current : best
})

console.log(topStudent)