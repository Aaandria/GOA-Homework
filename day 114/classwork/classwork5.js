// 5.https://jsonplaceholder.typicode.com/posts/1
// 
// შეცვალე:
// title
// body
// წარმატების შემთხვევაში უნდა მიიღო 200.
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Updated Post Title",
        body: "This is the updated body of the post",
        userId: 1
    })
}).then(url => {return url.json()})
.then(data => {
    console.log(data)
})