// 2) მოცემულია ონლაინ მაღაზიაში მომხმარებლების მიერ დახარჯული თანხების მასივი.
//  დაწერეთ პროგრამა, რომელიც დაადგენს რამდენი მომხმარებელი ეკუთვნის შემდეგ კატეგორიებს:
// მცირე ხარჯვა — 100-ზე ნაკლები
// საშუალო ხარჯვა — 100-დან 499-ის ჩათვლით
// დიდი ხარჯვა — 500 და მეტი
// ამოცანა შეასრულეთ forEach მეთოდის გამოყენებით.

const expenses = [45, 120, 560, 300, 80, 499, 700, 150]

const categories = {
  small: 0,
  medium: 0,
  large: 0
}

expenses.forEach(amount => {
  if (amount < 100) {
    categories.small++
  } else if (amount <= 499) {
    categories.medium++
  } else {
    categories.large++
  }
})

console.log(categories)