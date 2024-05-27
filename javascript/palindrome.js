// // functions : push, pop, peek, length

// var letters = [] // empty array stack

// var word = "wael" // initial word

// var rword = "" // empty string

// // fill the array "letters" with letters from "word"

// for (var i = 0; i < word.length; i++) {
//     letters.push(word[i]);
// }
// console.log("Filled table: ", letters) // print the table 

// //pop off the table in reverse order and see if the rword is palyndrome or not 
// for (var i = 0; i < word.length; i++) {
//     rword = rword + letters.pop();
//     }
// if (rword == word){
//     console.log ("The word", rword ,"is a palindrome")

// }else if (!word) {
//     console.log ("The word", rword , "isn't a palindrome")
// }else{
//     console.log ("The word", rword, "is NOT a palindrome")
// }

function isPalindromeRecursive(word) {
    // Base case: if the word has 0 or 1 characters, it's a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Compare the first and last characters
    if (word[0] === word[word.length - 1]) {
        // Recur with the substring excluding the first and last characters
        return isPalindromeRecursive(word.substring(1, word.length - 1));
    }

    // If the first and last characters are not the same, it's not a palindrome
    return false;
}

var word = "Anna";

// Check if the word is a palindrome using the recursive method
if (isPalindromeRecursive(word)) {
    console.log("The word", word, "is a palindrome");
} else {
    console.log("The word", word, "is NOT a palindrome");
}

