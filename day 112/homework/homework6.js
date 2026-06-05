// გამოიყენე ორი setTimeout(): პირველი 1 წამის შემდეგ უნდა ბეჭდავდეს Level 1, ხოლო მეორე 3 წამის შემდეგ Level 2.

setTimeout(() => console.log("Level 1"), 1000);
setTimeout(() => console.log("Level 2"), 3000);
// Level 1
// Level 2