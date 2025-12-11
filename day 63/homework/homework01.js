// 2) შექმენი ობიექტი car და დაამატე თვისება speed. შექმენი მეთოდი, რომელიც აბრუნებს "Too fast" თუ სიჩქარე > 120, სხვა შემთხვევაში "Speed okay".

let car = {
    speed: 140,
    checkspeed: function(){
        if(this.speed > 120){
            console.log("too fast")
        } else{
            console.log("speed is ok")
        }
    }
}