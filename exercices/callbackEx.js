/**
 * -Create a function cookDish that takes the recipe as an argument and simulates the cooking process by 
 * executing each step asynchronously using setTimeout. 
 * -The function should print the progress at each step, indicating the action, ingredient, and remaining duration.
 * -Use the cookDish function to prepare the dish based on the provided recipe.
 */

// Define a recipe object with ingredients and cooking steps
const recipe = {
    ingredients: ["onion", "tomato", "chicken", "spices", "oil", "rice"],
    steps: [
        { action: "chop", ingredient: "onion", duration: 1000 },
        { action: "chop", ingredient: "tomato", duration: 1500 },
        { action: "marinate", ingredient: "chicken", duration: 2000 },
        { action: "heat", ingredient: "oil", duration: 1000 },
        { action: "cook", ingredient: "chicken", duration: 2500 },
        { action: "cook", ingredient: "onion", duration: 2000 },
        { action: "cook", ingredient: "tomato", duration: 1500 },
        { action: "season", ingredient: "rice", duration: 1000 },
        { action: "cook", ingredient: "rice", duration: 3000 },
    ],
};

// Define a function to simulate the cooking process
function cookDish(recipe) {
    // Function to execute each cooking step
    function executeStep(step) {
        console.log(`[${step.action}] ${step.ingredient} - ${step.duration}ms`);

        // Simulate the time it takes to complete the step using setTimeout
        setTimeout(() => {
            console.log(`Finished ${step.ingredient}`);

            // Check if there are more steps in the recipe
            if (recipe.steps.length > 0) {
                executeNextStep(); // Execute the next step in the recipe
            } else {
                console.log("Dish is ready!"); // All steps completed, the dish is ready
            }
        }, step.duration);
    }

    // Function to execute the next step in the recipe
    function executeNextStep() {
        const nextStep = recipe.steps.shift(); // Get the next step in the recipe
        executeStep(nextStep); // Execute the next step
    }

    // Start the cooking process
    console.log("Cooking process started:");
    executeNextStep(); // Begin with the first step
}

// Example usage: Start cooking the dish based on the provided recipe
cookDish(recipe);
