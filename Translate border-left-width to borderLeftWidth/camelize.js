

function camelize(string) {
    return string
        .split("-")
        .map(
        (word, index) => index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
}


console.log(camelize(" ")); // blank text
console.log(camelize("background-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); // webkitTransition
