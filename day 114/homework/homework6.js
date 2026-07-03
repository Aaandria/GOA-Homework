// 6. https://jsonplaceholder.typicode.com/users/1
// 
// განაახლე მომხმარებლის მონაცემები:
// - name
// - email
// 
// წარმატების შემთხვევაში უნდა მიიღო 200 სტატუსი.
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Updated User Name",
        email: "updated@example.com"
    })
})
.then(url => {return url.json()})
.then(data => {
    console.log(data)
})