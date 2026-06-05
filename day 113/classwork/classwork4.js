// 4. URL: https://jsonplaceholder.typicode.com/posts
// გამოიტანე მხოლოდ პირველი 10 პოსტი.

fetch("https://jsonplaceholder.typicode.com/posts")
.then((a)=>{
    return a.json()
}).then((b)=>{
    for(let i = 0; i<10; i++){
        console.log(b[i])
    }
})