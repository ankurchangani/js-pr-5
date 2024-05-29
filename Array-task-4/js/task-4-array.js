// Write a JavaScript program for convert all array element in ASCII value.


function ASCII(arr) {

    var ascilarr = [];

    for (var i = 0; i < arr.length; i++) {

        var value = arr[i].charCodeAt(0)
        ascilarr.push(value);
    }

    return ascilarr;
}

var input = ['a', 'b', 'c', 'd'];
var result = ASCII(input);

document.getElementById("1").innerHTML = (input);
document.getElementById("2").innerHTML = (result);