/* 
Given a string, find the length of the longest substring in it with no more than K distinct characters.

*/



function longest_substring_with_k_distinct(str, K) {
  let windowStart = 0,
      maxLength = 0,// window length aka maxChars... windowend - windowstart
      charFrequency = {}; //use hashmap to remember frequency of each processed char

  for (let window_end = 0; window_end < str.length; window_end++) {
    const rightChar = str[window_end];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > K) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        //While shrinking, we’ll decrement the character’s frequency going out of the window and remove it from the HashMap if its frequency becomes zero.
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, window_end - windowStart + 1);
  }

  return maxLength;
}

console.log(`Length of the longest substring: ${longest_substring_with_k_distinct("araaci", 2)}`);//4
//Explanation: The longest substring with no more than '2' distinct characters is "araa".


/* 
Time Complexity#
The above algorithm’s time complexity will be O(N), 
where NN is the number of characters in the input string. 
The outer for loop runs for all characters, and the inner while loop
processes each character only once; therefore, the time complexity of the algorithm will be O(N+N)O(N+N), which is asymptotically equivalent to O(N)O(N).

Space Complexity#
The algorithm’s space complexity is O(K), 
as we will be storing a maximum of K+1K+1 characters in the HashMap.
*/