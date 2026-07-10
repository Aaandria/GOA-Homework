// 2) იგივე HTML გამოიყენე (parent და child). child-ის click ივენთში გამოიყენე event.stopPropagation(). 
// ღილაკზე დაჭერისას უნდა გამოჩნდეს მხოლოდ "Child clicked". კომენტარებში ახსენი, რას აკეთებს stopPropagation().

const child = document.getElementById("child")
const parent = document.getElementById("parent")

child.addEventListener("click", (event) => {
    console.log("child clicked")
    event.stopPropagation()
})

parent.addEventListener("click", () => {
    console.log("parent clicked")
})

// stopPropagation() აჩერებს  event bubling-ს