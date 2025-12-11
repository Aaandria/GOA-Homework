// 6) შექმენი ობიექტი sum რომელიც გამოიტანს 1 დან 20 მდე რიცხვების ჯამს

let sum = {
    start:1,
    end:20,
    countUp: function(){
        final = 0
        for(let i = this.start; i <= this.end; i++){
            final += i   
        }
        console.log(final)
    }
}

sum.countUp()