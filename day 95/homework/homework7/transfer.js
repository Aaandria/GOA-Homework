export default function transfer(user, amount, type) {
    if (type === "deposit") {
        user.balance += amount;
    } else if (type === "withdraw") {
        user.balance -= amount;
    }
}