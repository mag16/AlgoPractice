/* 
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
*/

function reverseString(str) {
    let reversed = " ";

    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

console.log(reverseString("Marco"));