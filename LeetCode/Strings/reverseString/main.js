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

//console.log(reverseString("Marco"));

/* 
reverseWords()
Write a function reverse_words() that takes a message as a list
of characters and reverses the order of the words in place. ↴

O(n) time and O(1)O(1) space!

The naive solution of reversing the words one at a time had a worst-case O(n^2)
runtime. That's because swapping words with different lengths required "scooting over" all the other characters to make room.

To get around this "scooting over" issue, we reversed all the characters in the message first. This put all the words 
in the correct spots, but with the characters in each word backward. So to get the final 
answer, we reversed the characters in each word. This all takes two passes through the 
message, so O(n)time total.

https://www.interviewcake.com/question/javascript/reverse-words?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23388:%20Reverse%20Words&utm_medium=email&utm_medium=email

*/

function reverseWords(message) {
  // first we reverse all the chars in the entire message

  reverseCharacters(message, 0, message.length - 1);
  // This gives us the right word order
  // but with each word backward

  // Now we'll make the words forward again
  // by reversing each word's characters

  // We hold the index of the *start* of the current word
  // as we look for the *end* of the current word
    let currentWordStartIndex = 0;
    for (let i = 0; i <= message.length; i++){

        //found the end of current word
        if (i === message.length || message[i] === ' ') {
            
            // if we havent exhausted the string our
            //next words start is one char ahead
            reverseCharacters(message, currentWordStartIndex, i - 1);
            currentWordStartIndex = i + 1;
        }
    }
}

function reverseCharacters(message, leftIndex, rightIndex) {
    
    //walk towards the middle, from both sides
    while (leftIndex < rightIndex) {
        
        // swap the left char and right char
        let temp = message[leftIndex];
        message[leftIndex] = message[rightIndex];
        message[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}
let s = "Practice those coding problems";
//reverseCharacters(s,0,s.length-1)
//console.log(reverseCharacters("Practice those coding problems",0,"s"));
console.log(reverseWords(s));