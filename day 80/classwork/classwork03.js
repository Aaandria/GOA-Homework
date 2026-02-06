// 4) შექმენი მასივი პროდუქტებით (მაგალითად: პური, რძე, ყველი) და 
// forEach-ით დაბეჭდე თითოეული პროდუქტი ნომრებით (1. პური, 2. რძე და ა.შ.).

let products = ["bread", "milk", "cheese"]
let index = 1
products.forEach(i=>{
    console.log(index+". "+i)
    index++
})