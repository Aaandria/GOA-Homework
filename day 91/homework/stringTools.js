export function reverse(text) {
    return text.split("").reverse().join("");
}

export default function countLetters(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== " ") {
            count++;
        }
    }
    return count;
}