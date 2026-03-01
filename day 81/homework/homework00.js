// 1) მოცემულია წიგნების ავტორების მასივი. დაწერეთ პროგრამა, რომელიც დააჯგუფებს ავტორებს
//  და დაითვლის რამდენი წიგნი აქვს თითოეულ ავტორს. შედეგი შეინახეთ ობიექტში. ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const authors = [
  "Ilia Chavchavadze",
  "Akaki Tsereteli",
  "Ilia Chavchavadze",
  "Vazha-Pshavela",
  "Akaki Tsereteli",
  "Ilia Chavchavadze"
]

const result = authors.reduce((acc, author) => {
  acc[author] = (acc[author] || 0) + 1
  return acc
}, {})

console.log(result)