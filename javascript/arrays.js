// example of array
var ourArray = ["wael", 24]

// example of nested array
var myArray = [["wael", 24], ["mejda", 34], ["myriam", 29]];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

// modify array element
myArray[0] = ["wael morjen", 24];
myArray[1] = ["mejda bouchnak", 34];
myArray[2] = ["myriam dridi", 29];
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])

// multi dimensional array
var arr = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr)
// access elements in multidimensional arrays
console.log(arr[0][1])
console.log(arr[1][2])
console.log(arr[2][0])

// add an array with push method
arr.push([10,11,12]);
console.log(arr[3]);
