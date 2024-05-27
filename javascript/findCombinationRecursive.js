// Given a set of positive integers and a target sum, find all unique combinations of elements 
// from the set that sum up to the target. Each element in the set can be used any number of times.

// Non-Recursive Method:
function findCombinationsNonRecursive(set, target) {
    // Initialize a stack to simulate recursive calls
    let stack = [{ index: 0, currentSet: [], currentSum: 0 }];
    let combinations = []; // To store the final combinations

    while (stack.length > 0) {
        // Pop the top element from the stack
        let { index, currentSet, currentSum } = stack.pop();

        // Check if the current combination sums up to the target
        if (currentSum === target) {
            combinations.push(currentSet.slice()); // Add a copy of the current combination to the result
            continue; // Skip the rest of the loop and move to the next iteration
        }

        // Explore combinations by considering each element in the set
        for (let i = index; i < set.length; i++) {
            // Check if adding the current element is within the target sum
            if (currentSum + set[i] <= target) {
                // Push the new combination to the stack for further exploration
                stack.push({ index: i, currentSet: [...currentSet, set[i]], currentSum: currentSum + set[i] });
            }
        }
    }

    return combinations;
}

// Example usage:
var resultNonRecursive = findCombinationsNonRecursive([2, 3, 6, 7], 7);
console.log("Combinations (Non-Recursive):", resultNonRecursive);


// Recursive Method:
const findCombinationsRecursive = async (set, target) => {
    function findCombinationsHelper(index, currentSet, currentSum) {
        // Base case: if the current combination sums up to the target, add it to the result
        if (currentSum === target) {
            combinations.push(currentSet.slice());
            return;
        }

        // Explore combinations by considering each element in the set
        for (let i = index; i < set.length; i++) {
            // Check if adding the current element is within the target sum
            if (currentSum + set[i] <= target) {
                // Push the new element to the current combination and recursively explore
                currentSet.push(set[i]);
                findCombinationsHelper(i, currentSet, currentSum + set[i]);
                currentSet.pop(); // Backtrack to explore other combinations
            }
        }
    }

    let combinations = [];
    findCombinationsHelper(0, [], 0); // Start recursion with initial parameters
    return combinations;
}

// Example usage:
var resultRecursive = findCombinationsRecursive([2, 3, 6, 7], 7);
console.log("Combinations (Recursive):", resultRecursive);
