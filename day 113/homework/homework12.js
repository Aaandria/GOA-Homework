// 12. URL: https://dummyjson.com/products
// 
// მოიტანე ყველა პროდუქტი და გამოიტანე:
// - სახელი
// - ფასი

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        const products = data.products;
        products.forEach(product => {
            console.log(`Name: ${product.title}, Price: $${product.price}`);
        });
    })