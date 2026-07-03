// 4. https://jsonplaceholder.typicode.com/posts
// 
// შექმენი ახალი პოსტი:
// title
// body
// userId
// წარმატების შემთხვევაში უნდა გამოჩნდეს 201 სტატუსი.
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "My New Post",
        body: "This is the body of my new post",
        userId: 1
    })
}).then(url => {return url.json()})
.then(data => {
    console.log(data)
})