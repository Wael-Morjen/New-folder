// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// function randomWholeNum() {
//     return Math.floor(Math.random() * 20)
// }

// console.log(randomWholeNum());

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

// test
console.log(ourRandomRange(10000, 99999));

