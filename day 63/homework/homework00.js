// 1) შექმენი ობიექტი user და დაამატე თვისება age. შექმენი მეთოდი, რომელიც აბრუნებს "Adult" თუ ასაკი >= 18, სხვა შემთხვევაში "Minor".

let user = {
    age: 14,
    IsAdult: function(){
        if(this.age >=18){
            console.log("adult")
        } else {
            console.log("minor")
        }
    }
}