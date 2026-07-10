// 4) წინა დავალების კოდი გამოიყენე. ამჯერად parent-ის click ივენთში გამოიყენე event.stopPropagation(). 
// ღილაკზე დაჭერისას დააკვირდი, რომ grandparent-ის click აღარ შესრულდეს. კომენტარებში დაწერე, 
// რატომ აღარ მივიდა ივენთი grandparent-მდე.

const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

child.addEventListener("click", () => {
    console.log("child clicked")
})

parent.addEventListener("click", (event) => {
    console.log("parent clicked")
    event.stopPropagation()
})

grandparent.addEventListener("click", () => {
    console.log("grandparentclicked")
})

// grandparent აღარ გამოვა რადგან parent event-ს უწერია stopPropagation-ი, რაც აჩერებს event bubling-ს