// import { user } from ‘./user.js’;
// export function getName() {
// return user.name;
// }

// profile.js-ში user.js-ის დაიმპორტებით წრიული დამოკიდებულება იქმნება, ასევე user.js-ში user ობიექტს name key არ აქვს.

export function getName(user) {
    return user.name
}