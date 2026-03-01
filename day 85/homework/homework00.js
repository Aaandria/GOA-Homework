// 1) მოცემულია მასივი:
// const numbers = [10, 20, 30, 40, 50, 60]
// Destructuring-ის გამოყენებით:
// გამოტოვეთ პირველი ელემენტი
// მეორე ელემენტი შეინახეთ secondNumber ცვლადში
// მესამე ელემენტი შეინახეთ thirdNumber ცვლადში
// დანარჩენი ელემენტები შეინახეთ restNumbers მასივში
// დაბეჭდეთ ყველა ცვლადი.

const numbers = [10, 20, 30, 40, 50, 60]

const[, secondNumber, thirdNumber, ...restNumber] = numbers
console.log("დავალება 1")
console.log("secondNumber:", secondNumber)
console.log("thirdNumber:", thirdNumber)
console.log("restNumbers:", restNumber)

// 2) მოცემულია ობიექტი:
// const employee = {
// id: 101,
// name: "Luka",
// position: "Developer",
// salary: 3000,
// contact: {
// email: "luka@gmail.com",
// phone: "555-123-456"
// }
// }
// Nested destructuring-ის გამოყენებით:
// name გადაარქვით employeeName
// salary გადაარქვით monthlySalary
// contact-იდან პირდაპირ აიღეთ email (rename გააკეთეთ workEmail)
// phone-ს მიეცით default მნიშვნელობა "Not Provided"
// დანარჩენი ზედა დონის მონაცემები შეინახეთ restEmployee ობიექტში

const employee = {
    id: 101,
    name: "Luka",
    position: "Developer",
    salary: 3000,
    contact: {
        email: "luka@gmail.com",
        phone: "555-123-456"
    }
}
console.log("დავალება 2")
const {
  name: employeeName,
  salary: monthlySalary,
  contact: { 
    email: workEmail, 
    phone: contactPhone= "Not Provided" 
  },
  ...restEmployee
} = employee

console.log(employeeName)
console.log(monthlySalary)
console.log(workEmail)
console.log(contactPhone)
console.log(restEmployee)

// 3) შექმენით ფუნქცია, რომელიც იღებს მასივს შემდეგი სტრუქტურით:
// [
// { title: "JS", lessons: 20 },
// { title: "React", lessons: 35 },
// { title: "Node", lessons: 25 }
// ]
// Destructuring-ის გამოყენებით:
// პირველი კურსიდან აიღეთ title და lessons
// მეორე კურსიდან აიღეთ მხოლოდ title (rename გააკეთეთ secondCourseName)
// მესამე კურსიდან აიღეთ lessons და მიეცით default მნიშვნელობა 0
// ფუნქციამ უნდა დაბეჭდოს ყველა მიღებული მნიშვნელობა.

const courses = [
  { title: "JS", lessons: 20 },
  { title: "React", lessons: 35 },
  { title: "Node", lessons: 25 }
]
function printCourseDetails([{ title, lessons }, { title: secondCourseName }, { lessons: thirdLessons = 0 }]) {
  console.log("პირველი კურსი:", title, "გაკვეთილები:", lessons)
  console.log("მეორე კურსის სახელი:", secondCourseName)
  console.log("მესამე კურსის გაკვეთილები:", thirdLessons)
}
console.log("დავალება 3")
printCourseDetails(courses)

// 4) მოცემულია ობიექტი:
// const order = {
// orderId: 555,
// customer: {
// name: "Ana",
// age: 16
// },
// items: [
// { product: "Phone", price: 1000 },
// { product: "Case", price: 20 }
// ]
// }
// Nested destructuring-ის გამოყენებით:
// customer-იდან აიღეთ name (rename → customerName)
// items მასივიდან აიღეთ პირველი პროდუქტის product და price
// მეორე პროდუქტიდან აიღეთ მხოლოდ product (rename → accessoryName)
// თუ items მასივი არ არსებობს, გამოიყენეთ default ცარიელი მასივი

const order = {
  orderId: 555,
  customer: {
    name: "Ana",
    age: 16
  },
  items: [
    { product: "Phone", price: 1000 },
    { product: "Case", price: 20 }
  ]
}
const {
  customer: { name: customerName },
  items: [
    { product, price },
    { product: accessoryName }
  ] = []
} = order
console.log("დავალება 4")
console.log("მომხმარებელი:", customerName)
console.log("პირველი პროდუქტი:", product)
console.log("ფასი:", price)
console.log("აქსესუარი:", accessoryName)

// 5) მოცემულია სამი ცვლადი:
// let a = 1
// let b = 2
// let c = 3
// Destructuring-ის გამოყენებით:
// გააკეთეთ ისე, რომ a-ში ჩავიდეს c-ის მნიშვნელობა
// b დარჩეს უცვლელი
// c-ში ჩავიდეს a-ის ძველი მნიშვნელობა
// (არ გამოიყენოთ დამატებითი ცვლადები)
// შემდეგ მოცემულია ობიექტი:
// const teacher = {
// name: "Maia",
// subject: "Math",
// experience: 5,
// school: "High School",
// city: "Kutaisi"
// }
// 
// Destructuring-ის გამოყენებით:
// 
// name გადაარქვით teacherName
// subject გადაარქვით mainSubject
// experience შეინახეთ ცვლადში yearsOfExperience
// დანარჩენი მონაცემები შეინახეთ სხვა ობიექტში restInfo
// დაბეჭდეთ ყველა შედეგი.

let a = 1;
let b = 2;
let c = 3;
[a, c] = [c, a]

console.log("დავალება 5")
console.log("a:", a)
console.log("b:", b)
console.log("c:", c)

const teacher = {
  name: "maia",
  subject: "Math",
  experience: 5,
  school: "High School",
  city: "Kutaisi"
}
const {
  name: teacherName,
  subject: mainSubject,
  experience: yearsOfExperience,
  ...restInfo
} = teacher

console.log("Teacher Name:", teacherName)
console.log("Main Subject:", mainSubject)
console.log("Years of Experience:", yearsOfExperience)
console.log("Rest Info:", restInfo)