// 7. https://jsonplaceholder.typicode.com/albums/1
// 
// განაახლე ალბომის title.
// 
// წარმატების შემთხვევაში უნდა მიიღო 200 სტატუსი.
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/albums/1", {
    method: "PUT",
    body: JSON.stringify({
        title: "Updated Album Title"
    }),
    headers: {
        "Content-Type": "application/json"
    }
}).then(url => {return url.json()})
.then(data => {
    console.log(data)
})