// 1. შექმენი ორი ობიექტი: person1 (Nika, 10) და person2 (Ana, 12). დაწერე ერთი introduce(city) ფუნქცია და call()-ის გამოყენებით დაბეჭდე 
// ორივე ადამიანის სრული ინფორმაცია სხვადასხვა ქალაქით.

const person1 = {
    name: "nika",
    age: 10
}
const person2 = {
    name: "Ana",
    age: 12
}

function introduce(city){
    console.log(`${this.name} is ${this.age} years old and lives in ${city}`)
}

introduce.call(person1, "kutaisi")
introduce.call(person2, "tbilisi")

// 2. შექმენი employee ობიექტი, რომელსაც აქვს name და position. დაწერე work(company, salary) ფუნქცია. არგუმენტები შეინახე მასივში და 
// apply()-ის გამოყენებით დაბეჭდე თანამშრომლის ინფორმაცია.

const employee = {
    name: "gorgi",
    position: "hard working"
}

function work(company, salary){
    console.log(`${this.name} is ${this.position}, is working for ${company} and earns ${salary}`)
}

work.apply(employee, ["GOA", 100])

// 3. შექმენი სამი ობიექტი: student1, student2, student3. დაწერე ერთი showGrade(subject, grade) ფუნქცია და call()-ის 
// გამოყენებით თითოეულ მოსწავლეზე დაბეჭდე განსხვავებული საგანი და ქულა.

const student1 = {
    name: "ioane"
}
const student2 = {
    name: "nodi"
}
const student3 = {
    name: "luka"
}

function showGrade(subject, grade){
    console.log(`${this.name} got ${grade} in ${subject}`)
}
showGrade.call(student1, "math", 90)
showGrade.call(student2, "english", 80)
showGrade.call(student3, "history", 70)

// 4. შექმენი player ობიექტი. დაწერე play(sport, position, team) ფუნქცია. გამოიყენე apply() ისე, რომ ყველა მონაცემი მასივიდან გადავიდეს ფუნქციაში.

const player = {
    name: "goga"
}

function play(sport, position, team){
    console.log(`${this.name} plays ${sport} as a ${position} for ${team}`)
}
play.apply(player, ["football", "forward", "Dinamo"])

// 5. შექმენი teacher ობიექტი. დაწერე introduce(subject, school) ფუნქცია. bind()-ის 
// გამოყენებით შექმენი ახალი ფუნქცია, სადაც this და subject უკვე მიბმული იქნება. შემდეგ ფუნქციის გამოძახებისას მხოლოდ school გადასცეს.

const teacher = {
    name: "nika"
}

function introduce(subject, school){
    console.log(`${this.name} teaches ${subject} at ${school}`)
}

const introduceMath = introduce.bind(teacher, "math")
introduceMath("GOA")

// 6. შექმენი ორი ობიექტი: user1 (Nika) და user2 (Gio). დაწერე greet(time, city) ფუნქცია. bind()-ის გამოყენებით 
// შექმენი ორი ახალი ფუნქცია, რომ ერთმა დაბეჭდოს „Good Morning Nika from Tbilisi“, ხოლო მეორემ „Good Evening Gio from Batumi“.

const user1 = {
    name: "Nika"
}
const user2 = {
    name: "Gio"
}

function greet(time, city){
    console.log(`Good ${time} ${this.name} from ${city}`)
}


const greetNika = greet.bind(user1, "Morning", "Tbilisi")
const greetGio = greet.bind(user2, "Evening", "Batumi")

// 7. მოცემული კოდის გაშვების გარეშე დაწერე შედეგი და ახსენი კომენტარებით რატომ მიიღე ეს შედეგი:
/*
const user = {
  name: "Nika"
};

function show(age) {
  console.log(`${this.name} ${age}`);
}

const fn = show.bind(user, 10);

show.call({ name: "Ana" }, 12);
fn();

გამოიტანს: Ana 12, Nika 10
მიზეზი: პირველი გამოძახებისას show ფუნქცია იძახებს call()-ის გამოყენებით, შესაბამისად this არის {name: "Ana"} და age არის 12.

*/

// 8. მოცემული კოდის გაშვების გარეშე დაწერე შედეგი და ახსენი რატომ გამოიტანა ეს შედეგი დაწერე კომენტარებით:

/*
const person = {
  name: "Luka"
};

function greet(city) {
  console.log(`${this.name} from ${city}`);
}

const a = greet.bind(person, "Kutaisi");

greet.apply(
  { name: "Gio" },
  ["Batumi"]
);

a();

გამოიტანს: Gio from Batumi, Luka from Kutaisi
მიზეზი: პირველი გამოძახებისას greet ფუნქცია იძახებს apply()-ის გამოყენებით, შესაბამისად this არის {name: "Gio"} და city არის "Batumi". 
მეორე გამოძახებისას a ფუნქცია იძახებს bind()-ის გამოყენებით, შესაბამისად this არის {name: "Luka"} და city არის "Kutaisi".

*/