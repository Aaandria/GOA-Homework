// 9. https://jsonplaceholder.typicode.com/albums/1
// 
// წაშალე ალბომი.
// 
// წარმატების შემთხვევაში გამოიტანე:
// "Album deleted"
// 
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/albums/1", {
    method: "DELETE"
}).then(url => {
    if (url.status === 200) {
        console.log("Album deleted")
    }
    else {
        console.error("Failed to delete album")
    }
})