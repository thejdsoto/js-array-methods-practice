function copySorted(array) {
    let newArray = [];

    array.forEach((ele) => newArray.push(ele));
    return newArray.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)