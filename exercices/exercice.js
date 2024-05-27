/*
Exercise:
Implement a Double-Ended Queue (Deque) in JavaScript using a class. A Double-Ended Queue is a data structure that allows elements to be added or removed from both ends. Your class should have the following methods:

enqueueFront(element): Adds an element to the front of the deque.
enqueueRear(element): Adds an element to the rear of the deque.
dequeueFront(): Removes and returns the element from the front of the deque.
dequeueRear(): Removes and returns the element from the rear of the deque.
front(): Returns the element at the front of the deque without removing it.
rear(): Returns the element at the rear of the deque without removing it.
size(): Returns the number of elements in the deque.
isEmpty(): Returns true if the deque is empty, and false otherwise.
print(): Prints the elements of the deque.

Implement the class and demonstrate its usage with various deque operations.

*/

class Deque {
    constructor() {
        this.collection = [];
    }

    // Adds an element to the front of the deque
    enqueueFront(element) {
        this.collection.unshift(element);
    }

    // Adds an element to the rear of the deque
    enqueueRear(element) {
        this.collection.push(element);
    }

    // Removes and returns the element from the front of the deque
    dequeueFront() {
        return this.collection.shift();
    }

    // Removes and returns the element from the rear of the deque
    dequeueRear() {
        return this.collection.pop();
    }

    // Returns the element at the front of the deque without removing it
    front() {
        return this.collection[0];
    }

    // Returns the element at the rear of the deque without removing it
    rear() {
        return this.collection[this.collection.length - 1];
    }

    // Returns the number of elements in the deque
    size() {
        return this.collection.length;
    }

    // Returns true if the deque is empty, and false otherwise
    isEmpty() {
        return this.collection.length === 0;
    }

    // Prints the elements of the deque
    print() {
        console.log(this.collection);
    }
}

// Example usage:
const myDeque = new Deque();

myDeque.enqueueFront(1);
myDeque.enqueueRear(2);
myDeque.enqueueFront(3);
myDeque.enqueueRear(4);

console.log("Deque after enqueue operations:");
myDeque.print(); // Output: [3, 1, 2, 4]

console.log("Dequeue Front:", myDeque.dequeueFront()); // Output: 3

console.log("Dequeue Rear:", myDeque.dequeueRear()); // Output: 4

console.log("Front element:", myDeque.front()); // Output: 1

console.log("Rear element:", myDeque.rear()); // Output: 2

console.log("Deque size:", myDeque.size()); // Output: 2

console.log("Is the deque empty?", myDeque.isEmpty()); // Output: false
