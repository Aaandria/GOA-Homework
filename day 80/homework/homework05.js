// 6) მოცემულია პროდუქტების სია, სადაც თითოეულ პროდუქტს აქვს ფასი და რაოდენობა.
// დაწერეთ პროგრამა, რომელიც თითოეული პროდუქტის საერთო ღირებულებას გამოთვლის და შემდეგ დაადგენს ყველა პროდუქტის ჯამურ ფასს.
// ამოცანა შეასრულეთ forEach და reduce მეთოდების გამოყენებით.

const products = [
  { name: "Apple", price: 2, quantity: 5 },
  { name: "Banana", price: 1, quantity: 10 },
  { name: "Orange", price: 3, quantity: 4 }
]

products.forEach(product => {
  product.total = product.price * product.quantity
})

const grandTotal = products.reduce((sum, product) => {
  return sum + product.total
}, 0)

console.log(products)
console.log(grandTotal)