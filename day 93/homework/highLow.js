// 1 შექმენი ფუნქცია რომელიც მიიღებს რიცხვების array-ს და დააბრუნებს object-ს სადაც იქნება ყველაზე პატარა 
// რიცხვი და ყველაზე დიდი რიცხვი გამოიყენე for loop და if else ფუნქცია უნდა იყოს ცალკე ფაილში და 
// ექსპორტირებული და მეორე ფაილში უნდა მოხდეს იმპორტი და გამოყენება

export function lowNum(arr) {
    let low = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        }
    }
    return low;
}
export function highNum(arr) {
    let high = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i];
        }
    }
    return high;
}