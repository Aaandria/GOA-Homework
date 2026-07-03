// 3. https://jsonplaceholder.typicode.com/albums
// 
// წამოიღე ყველა ალბომი.
// კონსოლში გამოიტანე თითოეული ალბომის title.
// 
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/albums")
.then(url => {return url.json()})
.then(data => {
    data.forEach(element => {
        console.log(element.title)
    })
})