export function deposit(user, amount) {
    user.balance += amount;
}

export function withdraw(user, amount) {
    user.balance -= amount;
}