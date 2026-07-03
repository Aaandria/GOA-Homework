// 4. https://jsonplaceholder.typicode.com/users
// 
// შექმენი ახალი მომხმარებელი:
// - name
// - username
// - email
// 
// წარმატების შემთხვევაში უნდა მიიღო 201 სტატუსი.
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@example.com"
    })
})
.then(url => {return url.json()})
.then(data => {
    console.log(data)
})