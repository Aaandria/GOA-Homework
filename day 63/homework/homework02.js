// 3) შექმენი ობიექტი student და დაამატე თვისება score. შექმენი მეთოდი, რომელიც აბრუნებს "Passed" თუ ქულა >= 50, სხვა შემთხვევაში "Failed".

let student = {
    score: 67,
    passOrFail: function(){
        if(score>= 50){
            console.log("passed")
        } else{
            console.log("failed")
        }
    }
}