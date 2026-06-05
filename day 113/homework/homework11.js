// 11. URL: https://dummyjson.com/products
// 
// მოიტანე ყველა პროდუქტი და კონსოლში დაბეჭდე მათი სახელები.

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        const products = data.products;
        products.forEach(product => console.log(product.title));
    })