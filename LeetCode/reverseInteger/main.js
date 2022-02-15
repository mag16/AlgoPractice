/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside
the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

function reverseInteger(num) {
    
    const negative = num < 0;

    //if num is negative we will concat "-" to make it positive
    if (negative) {
        num = - + num;
    }

    num = Math.abs(num).toString().split("").reverse.join("");
    num = parseInt(num); // returns the previously converted string back to an int.

    if (num < -2147483647 || num > 2147483646) {
      return 0; // num out of range so we return 0.
    } else {
      return num;
    }

}