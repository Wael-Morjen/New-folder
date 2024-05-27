var contact = [
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Tennis"]
    },
    {
        "firstName": "Ronald",
        "lastName": "Weasley",
        "number": "0987654321",
        "likes": ["Hogwarts", "Magic", "Quidditch"]
    },
    {
        "firstName": "Luna",
        "lastName": "Lovegood",
        "number": "0123456789",
        "likes": ["Gardening", "Animals", "Mythology"]
    },
    {
        "firstName": "Albus",
        "lastName": "Dumbledore",
        "number": "0765432109",
        "likes": ["Wizard Chess", "History", "Theory of Magic"]
    }
];

function lookUpProfile(name, prop) {
    for (let i=0; i<contact.length;i++) {
        if (contact[i].firstName === name) {
            return contact[i][prop] || "no such property";
        }
    }
    return "no such contact"
}

var data = lookUpProfile("Harry", "likes");

console.log(data); // Output: Pizza, Coding, Tennis