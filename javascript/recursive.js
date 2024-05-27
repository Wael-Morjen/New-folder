// In this example, we'll implement a recursive function to calculate the factorial of a given number.

// Factorial is the product of all positive integers up to a given number. 
// The factorial of 5 (written as 5!) is calculated as 5 * 4 * 3 * 2 * 1.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Example usage:
var result = factorial(5);
console.log("Factorial of 5:", result); // Output: 120


// Recursive method
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}

// Example usage:
var result = factorial(5);
console.log("Factorial of 5:", result); // Output: 120

