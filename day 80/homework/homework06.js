// 7) მოცემულია რიცხვებისგან შემდგარი მასივი.
// დაწერეთ პროგრამა, რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია მასივში.
// ამოცანა შეასრულეთ forEach მეთოდის გამოყენებით.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = {
  even: 0,
  odd: 0
}

numbers.forEach(num => {
  if (num % 2 === 0) {
    result.even++
  } else {
    result.odd++
  }
})

console.log(result)