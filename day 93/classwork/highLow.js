export function lowNum(arr){
    let low = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < low){
            low = arr[i];
        }
    }
    return low;
}

export function highNum(arr){
    let high = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > high){
            high = arr[i];
        }
    }
    return high;
}
