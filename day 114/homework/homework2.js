// 2. https://jsonplaceholder.typicode.com/comments
// 
// წამოიღე ყველა კომენტარი.
// კონსოლში გამოიტანე პირველი 5 კომენტარის:
// - name
// - email
// 
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/comments")
.then(url => {return url.json()})
.then(data => {
    for(let i = 0; i<5; i++){
        console.log("Name: " + data[i].name)
        console.log("Email: " + data[i].email)
    }
})