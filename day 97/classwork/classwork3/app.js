// 3) მოცემულია სამი ფაილი: user.js, profile.js და app.js.
// user.js import-ავს profile.js-ს, ხოლო profile.js import-ავს user.js.
// 
// შენი დავალებაა:
// 
// გაუშვა კოდი და შეამოწმო შედეგი ან შეცდომა.
// ახსნა, რა პრობლემა წარმოიქმნება და რატომ არის circular dependency.
// მონიშვნა, სად არის წრიული დამოკიდებულება (user.js → profile.js → user.js).
// გადააკეთო კოდი ისე, რომ user.js და profile.js დამოუკიდებლად იმუშაონ, ან 
// გამოიყენე მესამე ფაილი (shared.js) საერთო ფუნქციებისთვის.


console.log("classwork 3")
import user from "./user.js";
import profile from "./profile.js";


console.log(user);
console.log(profile(user));