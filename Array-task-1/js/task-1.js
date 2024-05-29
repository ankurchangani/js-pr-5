// Write a simple JavaScript program to print expected Output using following array.

// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange 


var myColor = ["Red", "Green", "White", "Black"];


console.log(myColor.join(","));

console.log(myColor.join("+"));


console.log(myColor.slice(0, 3).join(","));

console.log(myColor[0]);

console.log(myColor.slice(1, 3).join(","));

myColor.push("orange");

console.log(myColor.join(","));
