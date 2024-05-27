var musicLibrary = {
    "1001": {
        "title": "The Dark Side of the Moon",
        "artist": "Pink Floyd",
        "genre": "Progressive Rock",
        "year": 1973
    },
    "2002": {
        "title": "Abbey Road",
        "artist": "The Beatles",
        "genre": "Rock",
        "year": 1969
    },
    "3003": {
        "title": "Kind of Blue",
        "artist": "Miles Davis",
        "genre": "Jazz",
        "year": 1959
    },
    "4004": {
        "title": "Rumors",
        "artist": "Fleetwood Mac",
        "genre": "Pop Rock",
        "year": 1977
    }
};

// Write a function called updateMusicLibrary that takes the following parameters:
// - id: The ID of the music entry to be updated.
// - prop: The property to be updated (e.g., "title", "artist", "genre", "year").
// - value: The new value to set for the specified property.

// The function should perform the following tasks:
// 1. If the value is an empty string, delete the specified property from the object with the given ID.
// 2. If the property is "year" and the value is not a valid number, do not update the property.
// 3. Otherwise, update the specified property for the object with the given ID to the new value.

// Test your function with different inputs to ensure it handles these cases correctly.

// Example usage:
// console.log(updateMusicLibrary("2002", "genre", "Psychedelic Rock")); // Update genre for ID 2002 to "Psychedelic Rock"

// Verify that the original music library is not modified
// console.log("Original Music Library:", JSON.stringify(musicLibraryCopy, null, 2));
// console.log("Updated Music Library:", JSON.stringify(musicLibrary, null, 2));


// Copy the original music library for tests
var musicLibraryCopy = JSON.parse(JSON.stringify(musicLibrary));

// Function to update the music library based on the specified rules
function updateMusicLibrary(id, prop, value) {
    if (value === "") {
        // If value is an empty string, delete the specified property
        delete musicLibrary[id][prop];
    } else if (prop === "year" && isNaN(value)) {
        // If prop is "year" and value is not a valid number, do not update the property
        console.log("Invalid year value. Year must be a number.");
    } else {
        // Update the specified property with the new value
        musicLibrary[id][prop] = value;
    }

    // Return the updated music library
    return musicLibrary;
}

// Test cases
console.log(updateMusicLibrary("1001", "genre", "Psychedelic Rock")); // Update genre for ID 1001 to "Psychedelic Rock"
console.log(updateMusicLibrary("3003", "year", 1960)); // Update year for ID 3003 to 1960
console.log(updateMusicLibrary("4004", "artist", "")); // Remove artist property for ID 4004
console.log(updateMusicLibrary("2002", "year", "Nineteen Sixty-Nine")); // Do not update year for ID 2002 (invalid value)

// Verify that the original music library is not modified
console.log("Original Music Library:", JSON.stringify(musicLibraryCopy, null, 2));
console.log("Updated Music Library:", JSON.stringify(musicLibrary, null, 2));

