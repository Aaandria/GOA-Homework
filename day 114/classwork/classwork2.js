// 2. https://jsonplaceholder.typicode.com/posts
// წამოიღე ყველა პოსტი.
// კონსოლში გამოიტანე პირველი 10 პოსტის სათაური.
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/posts")
.then(url =>{return url.json()})
.then(data => {
    for(let i = 0; i<10; i++){
        console.log(data[i].title)
    }
})