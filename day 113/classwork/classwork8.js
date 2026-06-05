// 8. URL: https://dummyjson.com/products
// კონსოლში დაბეჭდე ყველა პროდუქტის სახელი.

fetch("https://dummyjson.com/products")
.then((a)=>{
    return a.json()
}).then((b)=>{
    b.products.forEach((a)=>{
        console.log(a.title)
    })
})