// JS (Part 6)
// Qs1. Write a JavaScript function that returns array elements larger than a number.
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function larger(arr,num){
    for (i=0; i<arr.length; i++){
        if (arr[i]>num){
            console.log(arr[i]);
        }
    }
}

larger(arr, num)
// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :

// "United States of America"

// Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.

// Qs5. Write a JavaScript function to generate a random number within a range
// (start, end).