var magic = function() {
    return new Date();
}


var magicArrow = () => new Date;

var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

var myConcatArrow = (arr1, arr2) => {
    return arr1.concat(arr2);
}

console.log(magic());
console.log(myConcat([1, 2], [3, 4, 5]));