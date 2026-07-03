// 3. https://jsonplaceholder.typicode.com/todos
// 
// შექმენი ახალი Todo.
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
        "Content-Type": "applycation/json"
    },
    body: JSON.stringify({
        title: "My New Todo",
        complited: false
    })
}
)
.then(url => {return url.json()})
.then(data => {
    console.log(data)
})