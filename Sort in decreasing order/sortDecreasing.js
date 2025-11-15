function compareNumbers(a, b) {
    return b - a;
}

function sortDecreasing(array) {
    return array.sort(compareNumbers);
}


let arr = [5, 2, 1, -10, 8];
sortDecreasing(arr);
// ... your code to sort it in decreasing order
console.log(arr); // 8, 5, 2, 1, -10