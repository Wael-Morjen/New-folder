// asynchronous

console.log("I");
console.log("eat");
setTimeout(() => {
    console.log("spoon")
}, 3000);
setTimeout(() => {
    console.log("ice cream")
}, 0)
setTimeout(() => {
    console.log("with a")
}, 1500)

