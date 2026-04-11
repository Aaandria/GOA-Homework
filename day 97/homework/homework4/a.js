// import { b } from ‘./b.js’;
// export const a = b * 2;
// console.log(a);

// აქაც იგივე პრობლემაა, b.js-ს a.js-ში ვერ დავაიმპორტირებთ, რადგან ეს წრიული დამოკიდებულებას ქმნის.

export function a(b){
    return b * 2;
}