// 3) შექმენი სამი ჩადგმული ელემენტი:
// div#grandparent
// div#parent
// button#child
// სამივეს დაუმატე click ივენთი. ღილაკზე დაჭერისას დააკვირდი, რა თანმიმდევრობით იბეჭდება შეტყობინებები. 
// შემდეგ parent-ზე გამოიყენე stopPropagation() და ნახე, როგორ შეიცვლება შედეგი. კომენტარებში დაწერე, რატომ მოხდა ეს.

const grandParent = document.getElementById("grandParent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

grandParent.addEventListener("click", () => {
    console.log("grandParent clicked")
})

parent.addEventListener("click", (event) => {
    console.log("parent clicked")
    event.stopPropagation()
}, 
 
)

child.addEventListener("click", () => {
    console.log("child clicked")
})

