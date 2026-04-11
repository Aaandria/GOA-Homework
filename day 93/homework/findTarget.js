export function findTarget(arr, target) {
    let index = 0;
    while (index < arr.length) {
        if (arr[index] === target) {
            return `Target found at index: ${index}`;
        }
        index++;
    }
    return "Target not found";
}