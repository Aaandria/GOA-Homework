// 5) შექმენი ობიექტი რომელსაც ექნება მეთოდი, ობიექტს ექნება სახელი და ასაკი,
//  ამ მეთოდმა უნდა გააკეთოს "ჩემი სახელია [სახელი] და ვარ [ასაკი]"

const intro = {
    name: "andria",
    age: 14,
    greet(){
        console.log("my name is ", this.name, " i am ", this.age, " years old")
    }
}

intro.greet()