// Define a constructor function for a Queue
function Queue() {
    // Collection to store elements
    collection = [];

    // Method to print the elements in the queue
    this.print = function() {
        console.log(collection);
    };

    // Method to add an element to the end of the queue (enqueue)
    this.enqueue = function(element) {
        collection.push(element);
    };

    // Method to remove and return the element from the front of the queue (dequeue)
    this.dequeue = function() {
        return collection.shift();
    };

    // Method to view the element at the front of the queue without removing it
    this.front = function() {
        return collection[0];
    };

    // Method to get the current size of the queue
    this.size = function() {
        return collection.length;
    };

    // Method to check if the queue is empty
    this.isEmpty = function() {
        return collection.length === 0;
    };
}

// Implementing methods
// var myQueue = new Queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.print(); // Output: [1, 2, 3]
// console.log(myQueue.dequeue()); // Output: 1
// console.log(myQueue.front()); // Output: 2
// console.log(myQueue.size()); // Output: 2
// console.log(myQueue.isEmpty()); // Output: false

function PriorityQueue() {
    var collection = [];

    // Method to add an element to the priority queue based on priority
    this.enqueue = function(element) {
        // If the priority queue is empty, simply push the element
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            let added = false;
            // Iterate through the elements to find the correct position based on priority
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    // Insert the element at the correct position
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            // If the element has the highest priority, push it to the end
            if (!added) {
                collection.push(element);
            }
        }
    };

    // Method to remove and return the element with the highest priority
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };

    // Method to view the element with the highest priority without removing it
    this.front = function() {
        return collection[0];
    };

    // Method to get the current size of the priority queue
    this.size = function() {
        return collection.length;
    };

    // Method to check if the priority queue is empty
    this.isEmpty = function() {
        return collection.length === 0;
    };

}

// Implementing methods:
const myPriorityQueue = new PriorityQueue();

myPriorityQueue.enqueue(['Task 1', 3]);
myPriorityQueue.enqueue(['Task 2', 1]);
myPriorityQueue.enqueue(['Task 3', 2]);

console.log("[ [Task 2, 1], [Task 3, 2], [Task 1, 3] ]")

console.log("Priority Queue after enqueue:");
console.log(myPriorityQueue.front()); // Output: ['Task 2', 1]

console.log("Dequeued element:", myPriorityQueue.dequeue()); // Output: 'Task 2'
console.log("[ [Task 3, 2], [Task 1, 3] ]")

console.log("Is the priority queue empty?", myPriorityQueue.isEmpty()); // Output: false

console.log("Priority Queue size:", myPriorityQueue.size()); // Output: 2
