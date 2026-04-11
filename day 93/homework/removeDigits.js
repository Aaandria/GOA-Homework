export function removeDigits(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' &&  str[i] <= '9') {
            continue;
        }
        result += str[i];
    }
    return result;
}

