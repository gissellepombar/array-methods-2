//slice : (starting key, last key exclusive)
const fruits = ['apple', 'blueberry', 'cantoplope', 'dates', 'elephant'];

const newFruit = fruits.slice(1, 3);
const newFruit2 = fruits.slice(1);
const newFruit3 = fruits.slice(-1);

console.log(`slice (1, 3):`, newFruit);
console.log(`slice (1):`, newFruit2);
console.log(`slice (-1):`, newFruit3);
