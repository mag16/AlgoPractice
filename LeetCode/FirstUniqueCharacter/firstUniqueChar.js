// Given a string s, find the first non-repeating character in it and return its index.
// If it does not exist, return -1.


/*
charAt() method returns a new string consisting of the single UTF-16 
code unit located at the specified offset into the string.

The indexOf() method returns the first index at which a given element 
can be found in the array, or -1 if it is not present.

The lastIndexOf() method returns the index within the calling String object of the last occurrence
 of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

*/

function firstUniqueChar(s) {
    let len = s.length;

    for (let i = 0; i < len; i++){
        let c = s.charAt(i); //position of i.
        if (s.indexOf(s) == s.lastIndexOf(c)) {
            //if s[i] is equal to the last occurrence of that string index, return i
            return i;       
        }
    }

    return -1;
}

console.log(firstUniqueChar("Marcoo"));//(0) M is firs unique character