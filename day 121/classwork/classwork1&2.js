// 1) შექმენი div#parent, რომლის შიგნით იქნება button#child. ორივეს დაუმატე click ივენთი. როდესაც ღილაკზე დააჭერ, 
// კონსოლში ჯერ გამოიტანე "Child clicked", შემდეგ "Parent clicked". კომენტარებში ახსენი, 
// რატომ შესრულდა ორივე click და რა არის Event Bubbling.

const parent = document.getElementById("parent")
const child = document.getElementById("child")

parent.addEventListener("click", () => {
    console.log("parent clicked")
})

child.addEventListener("click", () => {
    console.log("child clicked")
})

// ორივე შესრულდა რადგან child-ზე დაჭერით გააქტიურდა even bubbling და შემდეგ გადავიდა parent-ზა

// 2) იგივე HTML გამოიყენე (parent და child). ამჯერად child-ის click ივენთში გამოიყენე event.stopPropagation().
//  ღილაკზე დაჭერისას უნდა გამოჩნდეს მხოლოდ "Child clicked", ხოლო parent-ის click აღარ უნდა შესრულდეს.
//   კომენტარებში ახსენი, რას აკეთებს stopPropagation() და როდის შეიძლება მისი გამოყენება.


const parent = document.getElementById("parent");
  const child = document.getElementById("child");

  child.addEventListener("click", (event) => {
    console.log("Child clicked");

    event.stopPropagation();
  });

  parent.addEventListener("click", () => {
    console.log("Parent clicked");
  });

// აჩერებს event bubbling-ს