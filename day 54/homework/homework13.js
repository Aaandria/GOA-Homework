// 18) შექმენი პროგრამა, რომელიც სვამს კითხვას:
// “Do you like JavaScript?”
// და აგრძელებს შეკითხვას მანამდე, სანამ პასუხი არ იქნება "yes"

let answer = prompt("do you like JS?")

do {
    console.log("do you like js?")
    console.log(answer)
} while(answer != "yes")