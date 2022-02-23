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

/* 
reverseWords()
Write a function reverse_words() that takes a message as a list
of characters and reverses the order of the words in place. ↴
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
};

function reverseCharacters(message, leftIndex, rightIndex) {
    
    //walk towards the middle, from both sides
    while (leftIndex < rightIndex) {
        
        // swap the left char and right char
        const temp = message[leftIndex];
        message[leftIndex] = message[rightIndex];
        message[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}