
let numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

console.log("Original Array");
console.log( numbers);

let ascendingOrder = numbers.slice().sort((a, b) => a - b);
console.log("Ascending order:", ascendingOrder);

let descendingOrder = numbers.slice().sort((a, b) => b - a);
console.log("Descending order:", descendingOrder);


let myColor = ["Red", "Green", "White", "Black"];

console.log("Original Array");
console.log( myColor);

let ascendingColor = myColor.slice().sort();
console.log("Ascending order:", ascendingColor);

let descendingColor = myColor.slice().sort().reverse();
console.log("Descending order:", descendingColor);



