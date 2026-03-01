// 1) კომენტარების სახით ახსენით Spread 

// Spread ოპერატორი არის JavaScript-ში გამოყენებული სინტაქსი, რომელიც საშუალებას გვაძლევს გავავრცელოთ 
// (spread) ელემენტები ან ობიექტის თვისებები ახალ კონტექსტში. მას ხშირად იყენებენ მასივების და ობიექტების 
// გაერთიანებისთვის, ასლების შესაქმნელად და ფუნქციების არგუმენტების გადაცემისთვის. Spread ოპერატორი გამოიყენება 
// სამი წერტილის (...) სახით და მისი გამოყენება ძალიან მოსახერხებელია, რადგან ის გვაძლევს მოქნილობას და კოდს უფრო წაკითხულს ხდის.

// 2) შექმენი ობიექტი:
// const user = {
//   name: "Giga",
//   age: 17
// };
// შექმენი ახალი ობიექტი სადაც:
// დაემატება role: "admin"
// დაემატება isActive: true
// ყველაფერი გააკეთე spread-ის გამოყენებით.

console.log("homework 2");
const user = {
  name: "Giga",
  age: 17
};

const newUser = {
  ...user,
  role: "admin",
  isActive: true
};

console.log(newUser);

// 3) გაქვს ორი ობიექტი:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 20, c: 3 };
// შექმენი ახალი ობიექტი მათი გაერთიანებით.
// დააკვირდი — რომელი b დარჩება საბოლოო ობიექტში?

console.log("homework 3");
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 20, c: 3 };
const mergedObj = {
  ...obj1,
  ...obj2
};
console.log(mergedObj);

// 4) შექმენი ობიექტი:
// const product = {
//   title: "Laptop",
//   price: 1500,
//   inStock: true
// };
// შექმენი ახალი ობიექტი სადაც:
// price შეიცვლება 1200-ზე
// inStock შეიცვლება false-ზე
// Spread-ის გამოყენებით.

console.log("homework 4");
const product = {
  title: "Laptop",
  price: 1500,
  inStock: true
};
const updatedProduct = {
  ...product,
  price: 1200,
  inStock: false
};
console.log(updatedProduct);

// 5) შექმენი ობიექტი:
// const profile = {
//   username: "kocho",
//   followers: 120,
//   verified: false
// };
// შექმენი მისი ასლი spread-ით.
// შემდეგ შეცვალე ასლში followers → 500.
// შეამოწმე — ორიგინალი ობიექტი შეიცვალა თუ არა?

console.log("homework 5");
const profile = {
  username: "kocho",
  followers: 120,
  verified: false
};
const profileCopy = {
    ...profile
};
profileCopy.followers = 500;
console.log("Original profile:", profile);
console.log("Updated profile copy:", profileCopy);