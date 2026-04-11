export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export function reverse(str) {
    return str.split('').reverse().join('');
}