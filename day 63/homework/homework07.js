// 8) შექმენი ობიექტი day და დაამატე თვისება hour. შექმენი მეთოდი, რომელიც აბრუნებს "Morning", "Afternoon", "Evening" ან "Night" if…else-ით.

let day = {
    hour: 12,
    time: function(){
        if(this.hour <= 5){
            console.log("night")
        } else if (this.hour <=12 ){
            console.log("morning")
        } else if (this.hour <= 18){
            console.log("afternoon")
        } else if (this.hour <= 23 ){
            console.log("evning")
        }
    }
}