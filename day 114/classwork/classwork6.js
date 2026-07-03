// 6.https://jsonplaceholder.typicode.com/posts/1
// 
// წაშალე პოსტი.
// წარმატების შემთხვევაში გამოიტანე "Post deleted".
// დაამუშავე ყველა სტატუს კოდი.

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    }
}).then(url => {
    if (url.status === 200) {
        console.log("Post deleted")
    }
    else {
        console.error("Failed to delete post")
    }
})