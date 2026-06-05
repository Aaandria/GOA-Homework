// 9. URL: https://dummyjson.com/products
// გამოიტანე თითოეული პროდუქტის:
// - სურათი
// - სახელი
// - ფასი

fetch("https://dummyjson.com/products")
.then((a)=>{
    return a.json()
}).then((b)=>{
    for(let i = 0; i<20; i++){
        console.log(`<img src="${b.products[i].thumbnail}">`)
        console.log(b.products[i].title)
        console.log(b.products[i].price)
    }
})