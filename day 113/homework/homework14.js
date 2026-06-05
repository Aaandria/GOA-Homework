// 14. URL: https://dummyjson.com/products
// 
// მოიტანე ყველა პროდუქტი და თითოეული ბარათის სახით გამოიტანე.

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        const products = data.products;
        products.forEach(product => {
            const card = document.createElement("div");
            card.style.border = "1px solid #ccc";
            card.style.padding = "10px";
            card.style.margin = "10px";
            card.style.width = "200px";
            card.style.textAlign = "center";
            card.innerHTML = `
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <img src="${product.thumbnail}" alt="${product.title}" style="width: 100%; height: auto;">
            `;
            document.body.appendChild(card);
        });
    })