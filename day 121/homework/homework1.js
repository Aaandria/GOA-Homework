// 1) შექმენი div#parent, რომლის შიგნით იქნება button#child. ორივეს დაუმატე click ივენთი. ღილაკზე დაჭერისას კონსოლში 
// ჯერ უნდა დაიბეჭდოს "Child clicked", შემდეგ "Parent clicked". კომენტარებში ახსენი, რა არის Event Bubbling 
// და რატომ შესრულდა ორივე click ივენთი.

const child = document.getElementById("child")
const parent = document.getElementById("parent")

parent.addEventListener("click", () => {
    console.log("Parent clicked")
})

child.addEventListener("click", () => {
    console.log("child clicked")
})

// event bubbling არის როდესაც დაჭერისას event-ები სრულდება "შიგნიდან-გარეთ", სადაც child-ელემენტზე დაჭერისას 
// event-ები სრულდბა child-დან parent-მდე

// ორივე event-ი სრულდება რადგან child-ზე დაჭერისას farent-საც ეჭირება