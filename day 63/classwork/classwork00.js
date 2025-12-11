// 1) შექმენი ობიექტი user, რომელსაც აქვს:
// name (სტრინგი)
// age (ნამბერი)
// isAdult (მეთოდი), რომელიც აბრუნებს ტექსტს:
// თუ age >= 18 → "You are an adult"
// თუ არა → "You are not an adult"

let user = {
    name: "andria",
    age: 14,
    isAdult: function(){
        if(this.age >= 18){
            console.log("you are an adult")
        } else{
            console.log("you are not an adult")
        }
    }
}