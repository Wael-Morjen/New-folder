var ourArray = [];
for (let i = 0; i < 5; i++) {
    ourArray.push(i);
}

var myArray = [];

for (let i = 0; i < 10; i += 2) {
    myArray.push(i);
}

var backwardArray = [];

for (let i = 10; i >= 0; i -= 2 ) {
    backwardArray.push(i);
}

console.log(ourArray);
console.log(myArray);
console.log(backwardArray);