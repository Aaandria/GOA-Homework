// 4) მოცემულია მოსწავლეთა სია ქულებით.
// დაწერეთ პროგრამა, რომელიც დაადგენს რამდენმა მოსწავლემ ჩააბარა გამოცდა (ქულა ≥ 50), 
// რამდენმა ვერ ჩააბარა, ასევე გამოითვლის ქულების ჯამსა და საშუალო ქულას.
// ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const students = [
  { name: "ანა", score: 45 },
  { name: "გიორგი", score: 78 },
  { name: "ნინო", score: 52 },
  { name: "ლუკა", score: 30 },
  { name: "მარიამი", score: 90 }
]

const result = students.reduce((acc, student) => {
  acc.totalScore += student.score

  if (student.score >= 50) {
    acc.passed++
  } else {
    acc.failed++
  }

  return acc
}, {
  passed: 0,
  failed: 0,
  totalScore: 0
})

result.averageScore = result.totalScore / students.length

console.log(result)