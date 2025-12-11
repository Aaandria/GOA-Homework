// 3) შექმენი ობიექტი student, რომელსაც აქვს:
// name (სტრინგი)
// score (ნამბერი)
// passOrFail (მეთოდი), რომელიც აბრუნებს:
// თუ score >= 50 → "Passed"
// თუ არა → "Failed"

let student = {
    name: "andria",
    score: 67,
    passOrFail: function(){
        if(score>= 50){
            console.log("passed")
        } else{
            console.log("failed")
        }
    }
}