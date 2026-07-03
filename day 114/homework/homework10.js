// 10. https://jsonplaceholder.typicode.com/posts/5
// 
// წამოიღე კონკრეტული პოსტი.
// კონსოლში გამოიტანე:
// - title
// - body
// 
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/posts/5")
.then(url => {return url.json()})
.then(data => {
    console.log("Title: " + data.title)
    console.log("Body: " + data.body)
})