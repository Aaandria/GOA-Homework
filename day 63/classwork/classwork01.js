// 2) შექმენი ობიექტი car, რომელსაც აქვს:
// brand (სტრინგი)
// speed (ნამბერი)
// checkSpeed (მეთოდი), რომელიც აკონტროლებს:
// თუ speed > 120 → "Too fast!"
// თუ არა → "Speed is okay"

let car = {
    brand: "mersedes",
    speed: 140,
    checkspeed: function(){
        if(this.speed > 120){
            console.log("too fast")
        } else{
            console.log("speed is ok")
        }
    }
}