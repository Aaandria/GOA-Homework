// 1) მოცემულია მასივი:
// const colors = ["red", "green", "blue", "yellow", "black"]
// Destructuring-ის გამოყენებით:
// აიღეთ პირველი ორი ფერი ცალკე ცვლადებში (firstColor, secondColor)
// დანარჩენი ფერები შეინახეთ ახალ მასივში rest ოპერატორის გამოყენებით
// დაბეჭდეთ ყველა ცვლადი.

console.log("classwork 1")
const colors = ["red", "green", "blue", "yellow", "black"]
const [firstColor, secondColor, ...rest] = colors
console.log(firstColor)
console.log(secondColor)
console.log(rest)

// 2) მოცემულია ობიექტი:
// const user = {
// username: "gio123",
// email: "gio@gmail.com",
// address: {
// city: "Batumi",
// zip: "6000"
// }
// }
// Nested destructuring-ის გამოყენებით:
// username გადაარქვით userName
// address-იდან პირდაპირ აიღეთ city და zip ცვლადებში
// დაბეჭდეთ ყველა მიღებული ცვლადი.

console.log("classwork 2")
const user = {
    username: "gio123",
    email: "gio@gmail.com",
    address: {
        city: "Batumi",
        zip: "6000"
    }
}
const {username: userName,email, address: {city, zip}} = user
console.log(userName)
console.log(city)
console.log(zip)

// 3 )შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ობიექტს შემდეგი სტრუქტურით:
// {
// name: “Nika”,
// address: {
// city: “Tbilisi”,
// zip: “0101”
// }
// }
// 
// Destructuring-ის გამოყენებით ფუნქციაში:
// გამოიტანეთ name
// გამოიტანეთ address ობიექტიდან city და zip
// დამატებით:
// თუ address ობიექტი არ გადმოეცემა ფუნქციას, გამოიყენეთ default მნიშვნელობები:
// city იყოს “Unknown”
// zip იყოს “0000”
// ფუნქცია უნდა მუშაობდეს ორივე შემთხვევაში, როცა address არსებობს და როცა არ არსებობს.

console.log("classwork 3")
function printUser({ name, address: { city = "Unknown", zip = "0000" } }) {
  console.log("Name:", name)
  console.log("City:", city)
  console.log("ZIP:", zip)
}
const user1 = {
  name: "Nika",
  address: {
    city: "Tbilisi",
    zip: "0101"
  }
}
printUser(user1)

// 4) მოცემულია მასივი, რომელიც შეიცავს ობიექტებს:
// [
// { name: “Book”, price: 30, category: “Education” },
// { name: “Headphones”, price: 80, category: “Electronics” },
// { name: “Bag”, price: 50, category: “Fashion” }
// ]
// Destructuring-ის გამოყენებით:
// აიღეთ პირველი ობიექტიდან name და price
// მეორე ობიექტიდან აიღეთ მხოლოდ category
// მესამე ობიექტიდან აიღეთ მხოლოდ name.

console.log("classwork 4")
const items = [
  { name: "Book", price: 30, category: "Education" },
  { name: "Headphones", price: 80, category: "Electronics" },
  { name: "Bag", price: 50, category: "Fashion" }
]
const [
  { name: firstName, price: firstPrice },
  { category: secondCategory },
  { name: thirdName }
] = items
console.log(firstName)
console.log(firstPrice)
console.log(secondCategory)
console.log(thirdName)

// 5) მოცემულია ორი ცვლადი:
// let x = 100
// let y = 200
// Destructuring-ის გამოყენებით გაცვალეთ მათი მნიშვნელობები (არ გამოიყენოთ მესამე ცვლადი).
// მოცემულია ობიექტი:
// const student = {
// name: “Nika”,
// age: 12,
// grade: 6,
// school: “Public School”,
// city: “Tbilisi”
// }
// Destructuring-ის გამოყენებით:
// აიღეთ name და age ცალკე ცვლადებში
// დანარჩენი მონაცემები შეინახეთ ახალ ობიექტში Rest operator-ის გამოყენებით

console.log("classwork 5")
let x = 100;
let y = 200;

[x, y] = [y, x]

console.log(x)
console.log(y)
const student = {
  name: "Nika",
  age: 12,
  grade: 6,
  school: "Public School",
  city: "Tbilisi"
}

const { name : name1, age, ...rest1 } = student

console.log(name1)
console.log(age)
console.log(rest1)