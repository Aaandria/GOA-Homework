//10) შექმნით Neymar-ზე ობიექტი სადაც იქნება კარგი ინფორმაცია. (საიდანაა, სად თამაშობს ეხლა, სად თამაშობდა ადრე...).
// დაამატეთ მეთოდი რომელსაც კონსოლში გამოაქვს თქვენი აზრით უნდა ითამაშოს 2026 წლის მსოფლიო ჩემპიონატზე თუ არა.
// საბოლოოდ კონსოლში გამოიტანეთ თითოეული value რაქ გაქვს.

const neymar = {
    name: "neymar",
    place: "brazil",
    played: "barselona",
    playes: "santos",
    method(){
        console.log("he should play in the 2026 world cup")
    }
}
console.log(neymar.name)
console.log(neymar["place"])
console.log(neymar["played"])
console.log(neymar.playes)
neymar.method()
