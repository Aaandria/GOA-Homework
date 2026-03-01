// 1) მოცემულია პროდუქტების კატეგორიების მასივი (მაგ: "ტექნიკა", "ტანსაცმელი", "ტექნიკა", "საკვები" და ა.შ). 
// დაწერეთ პროგრამა, რომელიც დაითვლის რამდენი პროდუქტი ეკუთვნის თითოეულ კატეგორიას და შედეგს შეინახავს ობიექტში. 
// ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const categories = ["ტექნიკა", "ტანსაცმელი", "ტექნიკა", "საკვები", "ტანსაცმელი", "ტექნიკა"]

const result = categories.reduce((acc, category) => {
  if (acc[category]) {
    acc[category]++
  } else {
    acc[category] = 1;
  }
  return acc
}, {})

console.log(result)

// 2) მოცემულია მოსწავლეების დასწრების პროცენტების მასივი. დაწერეთ პროგრამა,
//  რომელიც დაადგენს რამდენი მოსწავლე ეკუთვნის შემდეგ კატეგორიებს:
// დაბალი დასწრება — 50%-ზე ნაკლები
// საშუალო დასწრება — 50%-დან 79%-ის ჩათვლით
// მაღალი დასწრება — 80% და მეტი
// ამოცანა შეასრულეთ forEach მეთოდის გამოყენებით.

let attendance = [10, 50, 100, 60, 70, 55]
let obj = {
    low : 0,
    medium : 0,
    high : 0
}
attendance.forEach(scores => {
    if(scores < 50){
        obj.low++
    } else if(scores < 80){
        obj.medium++
    } else{
        obj.high++
    }
})
console.log(obj)

// 3) მოცემულია ფილმების სია, სადაც თითოეულ ფილმს აქვს დასახელება და რეიტინგი. 
// დაწერეთ პროგრამა, რომელიც იპოვის ყველაზე მაღალი რეიტინგის მქონე ფილმს. ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const movies = [
  { title: "movie1", rating: 8.8 },
  { title: "movie2", rating: 8.6 },
  { title: "movie4", rating: 9.0 },
  { title: "movie5", rating: 8.7 }
]

const topMovie = movies.reduce((best, current) => {
  return current.rating > best.rating ? current : best
})

console.log(topMovie)

// 4) მოცემულია სპორტსმენების სია, სადაც თითოეულს აქვს დაგროვილი ქულები. დაწერეთ პროგრამა, 
// რომელიც დაადგენს რამდენ სპორტსმენს აქვს 100 ან მეტი ქულა, რამდენს ნაკლები,
//  ასევე გამოითვლის ყველა სპორტსმენის ქულების ჯამსა და საშუალოს. ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.
 
const athletes = [
  { name: "athlete1", points: 120 },
  { name: "athlete2", points: 85 },
  { name: "athlete3", points: 100 },
  { name: "athlete4", points: 60 },
  { name: "athlete5", points: 150 }
]
const resultt = athletes.reduce(
  (acc, athlete) => {
    if (athlete.points >= 100) {
      acc.overOrEqual100++
    } else {
      acc.under100++
    }
    acc.totalPoints += athlete.points
    return acc
  },
  {
    overOrEqual100: 0,
    under100: 0,
    totalPoints: 0
  }
)
const averagePoints = resultt.totalPoints / athletes.length 
console.log({
  "100 ან მეტი ქულა": resultt.overOrEqual100,
  "100-ზე ნაკლები ქულა": resultt.under100,
  "ქულების ჯამი": resultt.totalPoints,
  "საშუალო ქულა": averagePoints
})

// 5) მოცემულია ტექსტი. დაწერეთ პროგრამა, რომელიც დაითვლის რამდენჯერ გვხვდება თითოეული
//  სიმბოლო ტექსტში (გაითვალისწინეთ მხოლოდ ასოები და რიცხვები, გამოტოვეთ პუნქტუაცია და სფეისები).
//   ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

const text = "Hello World! 2024, JavaScript.";

const charCount = text
  .toLowerCase()
  .replace(/[^a-z0-9]/g, "")
  .split("")
  .reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc
  }, {})

console.log(charCount)

// 6) მოცემულია რესტორნის შეკვეთების სია, სადაც თითოეულ შეკვეთას აქვს კერძის ფასი და რაოდენობა. 
// დაწერეთ პროგრამა, რომელიც თითოეული შეკვეთის ღირებულებას გამოთვლის და შემდეგ დაადგენს ყველა 
// შეკვეთის საერთო შემოსავალს. ამოცანა შეასრულეთ forEach და reduce მეთოდების გამოყენებით.

const orders = [
  { dish: "ხაჭაპური", price: 12, quantity: 2 },
  { dish: "ხინკალი", price: 1.5, quantity: 20 },
  { dish: "მწვადი", price: 18, quantity: 1 },
  { dish: "ლიმონათი", price: 4, quantity: 3 }
]

orders.forEach(order => {
  order.totalPrice = order.price * order.quantity;
})

const totalRevenue = orders.reduce((sum, order) => {
  return sum + order.totalPrice
}, 0)

console.log("შეკვეთები:", orders)
console.log("საერთო შემოსავალი:", totalRevenue)

// 7) მოცემულია რიცხვების მასივი. დაწერეთ პროგრამა, რომელიც დაითვლის რამდენი რიცხვი იყოფა 3-ზე,
//  რამდენი იყოფა 5-ზე და რამდენი არ იყოფა არც ერთზე. ამოცანა შეასრულეთ forEach მეთოდის გამოყენებით.

const numbers = [3, 5, 10, 12, 15, 7, 9, 20, 22]

const resullt = {
  divisibleBy3: 0,
  divisibleBy5: 0,
  divisibleByNone: 0
};

numbers.forEach(num => {
  if (num % 3 === 0) {
    resullt.divisibleBy3++
  }

  if (num % 5 === 0) {
    resullt.divisibleBy5++
  }

  if (num % 3 !== 0 && num % 5 !== 0) {
    resullt.divisibleByNone++
  }
})

console.log(resullt)