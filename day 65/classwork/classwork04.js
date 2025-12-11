// 5) შექმენი ობიექტი counter. ობიექტს ქონდეს მეთოდი სადაც უკვე შექმნილ count-s (key-ს) დაემატება 1.
//  ეს უნდა გამეორდეს 50 ჯერ. დაგჭირდება for loop.

let counter = {
    countS: 1,
    count: function(){
        for(let i=this.countS; i <= 50; i++){
            console.log(i)
        }
    }
}

counter.count()