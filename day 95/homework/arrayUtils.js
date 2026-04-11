function sumArray(arr) {
    let sum = 0;
    // arr.forEach(element => {
    //     sum += element;
    // });
    // return sum;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function findMax(arr) {
    let max = arr[0];
    // arr.forEach(element => {
    //     if (element > max) {
    //         max = element;
    //     }
    // });
    // return max;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

export default { sumArray, findMax };