// 5. https://jsonplaceholder.typicode.com/albums
// 
// შექმენი ახალი ალბომი:
// - title
// - userId
// 
// წარმატების შემთხვევაში უნდა მიიღო 201 სტატუსი.
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/albums", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "My New Album",
        userId: 1
    })
}).then(url => {return url.json()})
.then(data => {
    console.log(data)
})