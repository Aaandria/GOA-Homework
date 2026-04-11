// 1) მოცემულია სამი ფაილი: logger.js, math.js და app.js.
// logger.js import-ავს math.js-ს, ხოლო math.js import-ავს logger.js.
// 
// შენი დავალებაა:
// 
// გაუშვა კოდი და ნახო რა შედეგი ან შეცდომა გამოდის.
// ახსნა, რატომ ხდება პრობლემა და როგორ მუშაობს JavaScript circular modules.
// იპოვო circular dependency (logger.js → math.js → logger.js).
// გადააკეთო კოდი ისე, რომ ორივე ფაილი აღარ აიმპორტებდეს ერთმანეთს და ლოგიკაც 
// სწორად იმუშაოს (მაგ: შექმენი utils.js და გადანაწილე ფუნქციები).

console.log("classwork 1")

import { add } from "./math.js";
import { logger } from "./logger.js";

logger(add(5, 3));