// 5) შექმენი ობიექტი repeater და დაამატე თვისება text და count. შექმენი მეთოდი, რომელიც while loop-ით აჩვენებს ტექსტს რამდენჯერაც მითითებულია.

let repeater = {
    text: "blablabla",
    count: 3,
    repeat: function(){
        num = 1
        final = ""
        while(num !== this.count){
            final += this.text
        }
        console.log(final)
    }
}