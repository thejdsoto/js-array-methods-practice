function filterUnique(array) {
    let filterScore = 0;
    let filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        for (let j = i; j < array.length; j++) {
            if (element === array[j]) {
                filterScore++;
            }
        }

        if (filterScore <= 1) {
            filteredArray.push(element);
        }

        filterScore = 0;
    }

    return filteredArray;
}



let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(filterUnique(strings)); // Hare, Krishna, :-O