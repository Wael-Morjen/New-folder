/*
Write a JavaScript class representing a Stack. The class should have the following methods:

1.push(element): Adds the given element to the top of the stack.
2.pop(): Removes and returns the element from the top of the stack.
3.top(): Returns the element at the top of the stack without removing it.
4.isEmpty(): Returns true if the stack is empty, and false otherwise.
5.size(): Returns the number of elements in the stack.
6.print(): Prints the elements of the stack.

Implement the class and demonstrate its usage with a few stack operations. 
*/

function Stack() {
    // Collection to store elements
    const collection = [];

    // Adds the given element to the top of the stack
    this.push = function(element) {
        collection.push(element);
    };

    // Removes and returns the element from the top of the stack
    this.pop = function() {
        return collection.pop();
    };

    // Returns the element at the top of the stack without removing it
    this.top = function() {
        return collection[collection.length - 1];
    };

    // Returns true if the stack is empty, and false otherwise
    this.isEmpty = function() {
        return collection.length === 0;
    };

    // Returns the number of elements in the stack
    this.size = function() {
        return collection.length;
    };

    // Prints the elements of the stack
    this.print = function() {
        console.log(collection);
    };
}

// Example usage:
const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log("Stack after pushing elements:");
myStack.print(); // Output: [1, 2, 3]

console.log("Top element:", myStack.top()); // Output: 3

console.log("Popped element:", myStack.pop()); // Output: 3

console.log("Is the stack empty?", myStack.isEmpty()); // Output: false

console.log("Stack size:", myStack.size()); // Output: 2

console.log("Stack after popping element:");
myStack.print(); // Output: [1, 2]
