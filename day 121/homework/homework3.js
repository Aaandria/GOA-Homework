// 3) შექმენი სამი ჩადგმული ელემენტი:
// div#grandparent
// div#parent
// button#child
// სამივეს დაუმატე click ივენთი. ღილაკზე დაჭერისას დააკვირდი, რა თანმიმდევრობით 
// იბეჭდება შეტყობინებები. კომენტარებში ახსენი, რატომ ხდება ეს.

const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

grandparent.addEventListener("click", () => {
    console.log("grandparent clicked")
})

parent.addEventListener("click", () => {
    console.log("parent clicked")
})

child.addEventListener("click", () => {
    console.log("child clicked")
})

// ჯერ გამოდის child-ი, შემდეგ parent-ი და ბოლოს grandparent-ი, ეს ხდება event bubbling-ის გამო