var user = {
    "name": "Wael",
    "lastName": "Morjen",
    "age": 24,
    "email": "waelmorjen@gmail.com",
    "friends": ["everything"]
};

function checkProperty(checkProp) {
    if (user.hasOwnProperty(checkProp)) {
        return user[checkProp];
    } else {
        return "Not Found";
    }
}



console.log(checkProperty("gender"));
// Output: Not Found
console.log(checkProperty("lastName"));
// Output: Morjen