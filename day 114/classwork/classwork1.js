// 1. https://jsonplaceholder.typicode.com/users
// fetch-ის გამოყენებით წამოიღე ყველა მომხმარებელი.
// კონსოლში გამოიტანე თითოეული მომხმარებლის სახელი.
// დაამუშავე ყველა ზემოთ ჩამოთვლილი სტატუს კოდი.

console.log("classwork 1")

fetch("https://jsonplaceholder.typicode.com/users")
.then((url) => {
    return url.json()
}).then((names) => {
    names.forEach(element => {
        console.log(element.name)
    });
})

