// 7. შექმენი 5 ფაილი ისე, რომ ერთ სისტემად იმუშაონ: პირველ ფაილში შექმენი user ობიექტი 
// სახელით და საწყისი ბალანსით, მეორე ფაილში დაწერე ფუნქციები deposit და withdraw, რომლებიც 
// შეცვლიან user-ის ბალანსს, მესამე ფაილში შექმენი transfer ფუნქცია, რომელიც აირჩევს deposit-ს ან 
// withdraw-ს ტიპის მიხედვით, მეოთხე ფაილში დაწერე ფუნქცია, რომელიც დააბრუნებს მომხმარებლის 
// ანგარიშის ინფორმაციას (name და balance), მეხუთე ფაილში შექმენი log ფუნქცია, რომელიც დაბეჭდავს 
// შეტყობინებას console-ში. ბოლოს შექმენი app.js ფაილი, სადაც დააიმპორტებ ყველა საჭირო ფუნქციას 
// და ობიექტს და გამოიყენებ ისე, რომ მომხმარებლის ბალანსი შეიცვალოს სხვადასხვა ოპერაციებით და შედეგები დაბეჭდოს console-ში.

import user from "./user.js"
import { deposit, withdraw } from "./bank.js"
import transfer from "./transfer.js"
import getUserInfo from "./getUserInfo.js"
import log from "./log.js"

console.log("homework 7")

console.log(getUserInfo(user))
deposit(user, 50)
log("After deposit:")
log(getUserInfo(user))
withdraw(user, 30)
log("After withdraw:")
log(getUserInfo(user))
transfer(user, 20, "deposit")
log("After transfer:")
log(getUserInfo(user))
