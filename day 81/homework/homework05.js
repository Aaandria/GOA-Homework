// 6) მოცემულია საწყობში არსებული პროდუქციის სია, სადაც თითოეულ პროდუქტს აქვს ფასი და
//  საწყობში არსებული რაოდენობა. დაწერეთ პროგრამა, რომელიც თითოეული პროდუქტის საერთო 
// ღირებულებას გამოთვლის და შემდეგ დაადგენს საწყობის სრული მარაგის ფასს. ამოცანა შეასრულეთ 
// forEach და reduce მეთოდების გამოყენებით.

const products = [
  { name: "Laptop", price: 1500, quantity: 3 },
  { name: "Mouse", price: 20, quantity: 10 },
  { name: "Keyboard", price: 50, quantity: 5 }
]

products.forEach(p => {
  p.totalValue = p.price * p.quantity
})

const warehouseTotal = products.reduce(
  (sum, p) => sum + p.totalValue,
  0
)

console.log(products)
console.log(warehouseTotal)