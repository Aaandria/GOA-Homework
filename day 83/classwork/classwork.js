// 1) მოცემულია ობიექტი:
// {
//   name: "Giga",
//   age: 16
// }
// დესტრუქტურინგის გამოყენებით შეინახე name და age ცვლადებში.

const info = {name: "andria", age: 15}

const {name, age} = info

console.log(name)
console.log(age)

// 2) მოცემულია ობიექტი:
// {
//   city: "Tbilisi",
//   country: "Georgia"
// }
// დესტრუქტურინგის გამოყენებით ამოიღე მხოლოდ city და გამოიტანეთ.

const geo = {city: "Tbilisi", country: "Georgia"}

const {city: main} = geo

console.log(main)

// 3) მოცემულია მასივი:
// [100, 200, 300]
// დესტრუქტურინგის გამოყენებით აიღე პირველი ელემენტი და გამოიტანეთ.

const numbers = [100, 200, 300]

const [a, b, c] = numbers

console.log(a)

// 4) მოცემულია მასივი:
// ["apple", "banana"]
// დესტრუქტურინგის გამოყენებით შეინახე ორივე ელემენტი ცვლადებში და გამოიტანეთ.

const fruits = ["apple", "banana"]

const [first, last] = fruits
console.log(first)
console.log(last)

// 5) მოცემულია ტექსტი. დაწერეთ პროგრამა, რომელიც დაითვლის რამდენი სიტყვა მთავრდება
//  თანხმოვანი ასოთი (ინგლისურად ნებისმიერი თანხმოვანი ან ქართულად ნებისმიერი თანხმოვანი).
//  ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const text = "hello World and HEllo JS"

const english = "bcdfghjklmnpqrstvwxyz"
const words = text.split(" ")

const count = words.reduce((acc, word) => {
    const lastChar = word[word.length - 1].toLowerCase();
    if (english.includes(lastChar)) {
        return acc + 1;
    }
    return acc;
}, 0)

console.log(count)
