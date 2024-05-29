// write a JavaScript program given this output using  replace concept.
// Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// Output:-  "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"


let name  = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

document.getElementById("name1").innerHTML = "input :" +name;

document.getElementById("name").innerHTML = "output :" +name.replaceAll("dog", "cat");