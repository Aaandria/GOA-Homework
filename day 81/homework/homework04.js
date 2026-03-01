// 5) მოცემულია ტექსტი. დაწერეთ პროგრამა, რომელიც დაითვლის რამდენი სიტყვა იწყება ხმოვანი ასოთი 
// (a, e, i, o, u — ინგლისურად ან ა, ე, ი, ო, უ — ქართულად). ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const text = "ანა სწავლობს პროგრამირებას online უნივერსიტეტში"

const vowels = "aeiouაეიოუ";

const count = text
  .split(" ")
  .reduce((acc, word) => {
    return vowels.includes(word[0].toLowerCase()) ? acc + 1 : acc
  }, 0)

console.log(count)