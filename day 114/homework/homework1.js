// 1. https://jsonplaceholder.typicode.com/users/1
// 
// წამოიღე პირველი მომხმარებელი.
// კონსოლში გამოიტანე:
// - name
// - username
// - email
// 
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(url => {return url.json()})
.then(data => {
    console.log("Name: " + data.name)
    console.log("Username: " + data.username)
    console.log("Email: " + data.email)
})