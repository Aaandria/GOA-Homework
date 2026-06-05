// შექმენი callback ფუნქცია, რომელიც გამოიტანს Task Completed. შემდეგ შექმენი მეორე ფუნქცია, 
// რომელიც მიიღებს callback-ს და გაუშვებს მას.

function taskCompleted() {
    console.log("Task Completed");
}
function executeTask(callback) {
    callback();
}
executeTask(taskCompleted);

// Task Completed 
