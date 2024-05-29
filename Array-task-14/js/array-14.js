// write a JavaScript program convert string to array.
var input = "Hire the top 1% freelance developers";


var output = input.split(" ");

document.querySelector('h1').innerHTML = output.join("  ");

document.querySelector('h2').innerHTML = (output.slice(0, 4)).join("  ");







