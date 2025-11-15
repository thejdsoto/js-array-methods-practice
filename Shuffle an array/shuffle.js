function shuffle(array) {
    let arrayCopy = [];
    let shuffledArray = [];

    array.forEach((ele) => arrayCopy.push(ele));
    for (let i = 0; i < array.length; i++) {
        let randomNum = parseInt(Math.random() * (arrayCopy.length));
        let element = arrayCopy[randomNum];

        shuffledArray[i] = element;
        arrayCopy.splice(randomNum, 1);
    }
    console.log(shuffledArray);
}

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...