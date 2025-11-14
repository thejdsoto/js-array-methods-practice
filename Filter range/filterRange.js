function filterRange(array, a, b) {
    // Write a function filterRange(arr, a, b) that gets an array arr, 
    // looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
    let filtered = array.filter((element) => element >= a && element <= b);
    console.log(`Filtered array is ${filtered}`);
    console.log(`The original array is ${array}`);
}

let arr = [5, 3, 8, 1];
filterRange(arr, 1, 4);