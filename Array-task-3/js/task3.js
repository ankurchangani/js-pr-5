// Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)
function minandmax() {
    let arr = [50, 60, 70, 80, 90];

    let minvalue = arr[0];
    let maxValue = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minvalue)
            minvalue = arr[i];

        if (arr[i] > maxValue)
            maxValue = arr[i];
    }

    console.log("Minimum element is: " + minvalue);
    console.log("Maximum element is: " + maxValue);
}

minandmax();

