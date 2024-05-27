function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10))
// Output: positive
console.log(checkSign(-10))
// Output: negative
console.log(checkSign(0))
// Output: zero
