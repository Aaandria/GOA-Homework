export default function getUserInfo(user) {
    return {
        name: user.name,
        balance: user.balance
    };
}