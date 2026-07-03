// 3) შექმენი ფუნქცია getTodos(), რომელიც async/await-ით წამოიღებს todos მონაცემებს:
// https://jsonplaceholder.typicode.com/todos
// 
// დაითვალე რამდენი completed: true ელემენტია.

async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    const completedCount = todos.filter(todo => todo.completed).length;
    console.log(`Number of completed todos: ${completedCount}`);
}

getTodos();