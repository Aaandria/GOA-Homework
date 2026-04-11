const products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
  { id: 4, name: "Headphones", price: 150 }
];


export function getAllProducts() {
  return products;
}


export function filterByPrice(minPrice) {
  return products.filter(product => product.price >= minPrice);
}

export default products