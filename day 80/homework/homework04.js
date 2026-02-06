// 5) მოცემულია ტექსტი.
// დაწერეთ პროგრამა, რომელიც დაითვლის ტექსტში თითოეული სიტყვის გამეორების რაოდენობას.
// ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const text = "JS is great and JS is powerful"

const wordCount = text
  .toLowerCase()
  .split(" ")
  .reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc
  }, {})

console.log(wordCount)