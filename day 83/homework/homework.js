// 1) კომენტარების სახით ახსენი Destructuring

// Destructuring არის JS-ის ფუნქცია, რომელიც გვაძლევს საშუალებას ამოვიღოთ მნიშვნელობები
//  ობიექტებიდან ან მასივებიდან და შევინახოთ ცვლადებში მარტივად.

// 2) მოცემულია ობიექტი:
// {
//   username: "admin",
//   password: "1234",
//   role: "user"
// }
// დესტრუქტურინგის გამოყენებით:
// username გადაარქვი user
// role-ს გაუწერე default მნიშვნელობა "guest" (თუ არ არსებობს)

const panel = {
    username: "admin",
    password: "1234",
    role: "user"
}
const {username: user, password, role="guest"} = panel
console.log("დავალება 2")
console.log(user)
console.log(password)
console.log(role)

// 3) შექმენი ფუნქცია, რომელიც პარამეტრად იღებს ობიექტს:
// {
//   price: 100,
//   discount: 20
// }
// დესტრუქტურინგით გამოთვალე საბოლოო ფასი (price - discount).

const shop = {
    price: 100,
    discount: 20
}
function final({ price, discount }) {
  return price - discount
}
const finalPrice = final(shop)
console.log("დავალება 3")
console.log(finalPrice)

// 4) მოცემულია მასივი:
// [10, 20, 30, 40, 50]
// დესტრუქტურინგის გამოყენებით:=
// აიღე პირველი ორი ელემენტი
// დანარჩენი შეინახე ცალკე მასივში

const numbers = [10, 20, 30, 40, 50]
const [first, second, ...rest] = numbers

console.log("დავალება 4")
console.log(first)
console.log(second)
console.log(rest)

// 5) მოცემულია მასივი:
// ["BMW", "Mercedes", "Audi", "Toyota"]
// დესტრუქტურინგით აიღე პირველი და მესამე ელემენტი.

const cars = ["BMW", "Mercedes", "Audi", "Toyota"]
const [one, , third] = cars

console.log("დავალება 5")
console.log(one)
console.log(third)

// 6) მოცემულია რიცხვების მასივი:
// [5, 12, 8, 20, 3]
// reduce გამოყენებით დაითვალე მხოლოდ ლუწი რიცხვების ჯამი.

let number = [5, 12, 8, 20, 3]
let answer = number.reduce((acc, current) => {
    if(current % 2 === 0){
        return acc + current
    }
    return acc
}, 0)

console.log("დავალება 6")
console.log(answer)