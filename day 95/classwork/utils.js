export function min(arr) {
    return Math.min(...arr);
}

export function max(arr) {
    return Math.max(...arr);
}

export function average(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}