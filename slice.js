const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2, 5);

const slice = Array.prototype.slice;

console.log(slice.apply(fruits, 1, 3));
