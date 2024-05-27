var inventory = [
    { id: 1, name: "Laptop", quantity: 10, price: 899.99 },
    { id: 2, name: "Smartphone", quantity: 20, price: 499.99 },
    { id: 3, name: "Headphones", quantity: 30, price: 79.99 },
    { id: 4, name: "Tablet", quantity: 15, price: 299.99 }
];

// Write a function called getItemInfo that takes the following parameters:
// - id: The ID of the item to retrieve information for.
// - prop: The property to retrieve information about (e.g., "name", "quantity", "price").

// The function should perform the following tasks:
// 1. If the item with the given ID exists in the inventory, return the value of the specified property.
// 2. If the item does not exist, return "Item not found".
// 3. If the property does not exist for the item, return "Property not found".

// Test your function with different inputs to ensure it handles these cases correctly.

// Example usage:
// console.log(getItemInfo(2, "quantity")); // Output: 20

// Verify that the original inventory is not modified
// console.log("Original Inventory:", JSON.stringify(inventory, null, 2));


// Copy the original inventory for tests
var inventoryCopy = JSON.parse(JSON.stringify(inventory));

// Function to retrieve information about an item in the inventory
function getItemInfo(id, prop) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            return inventory[i][prop] !== undefined ? inventory[i][prop] : "Property not found";
        }
    }
    return "Item not found";
}

// Test cases
console.log(getItemInfo(2, "quantity")); // Output: 20
console.log(getItemInfo(3, "name")); // Output: Headphones
console.log(getItemInfo(1, "price")); // Output: 899.99
console.log(getItemInfo(4, "category")); // Output: Property not found
console.log(getItemInfo(5, "quantity")); // Output: Item not found

// Verify that the original inventory is not modified
console.log("Original Inventory:", JSON.stringify(inventoryCopy, null, 2));
console.log("Updated Inventory:", JSON.stringify(inventory, null, 2));

