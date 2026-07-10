// 5) შექმენი div#box, რომლის შიგნით იქნება button#btn. ორივეს დაუმატე click ივენთი. პირველად ნახე, 
// რა მოხდება ღილაკზე დაჭერისას. შემდეგ button-ის click ივენთში დაამატე event.stopPropagation() და 
// შეადარე შედეგები. კომენტარებში დაწერე, რა განსხვავება მიიღე ორ შემთხვევაში.

const box = document.getElementById("box")
const btn = document.getElementById("btn")

box.addEventListener("click", () => {
    console.log("box clicked")
})

btn.addEventListener("click", (event) => {
    console.log("btn clicked")
    event.stopPropagation()
})

// პირველად ჯერ გამოვიდა "btn clicked", შემდეგ "box clicked" event bubling-ის გამო
// ხოლო event.stopPropagation()-ით ჩვენ შევაჩერეთ event bubling-ი, რის გამოც მარტო "btn clicked" გამოვიდა