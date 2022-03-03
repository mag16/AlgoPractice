/* 
https://www.educative.io/blog/crack-amazon-coding-interview-questions

7. String Segmentation

You are given a dictionary of words and a large input string. You have to find out whether the input string can be completely segmented into the words of a given dictionary. The following two examples elaborate on the problem further.
Given a dictionary of words.

apple
apple
pear
pie

Input string of “applepie” can be segmented into dictionary words.
applepie

Input string “applepeer” cannot be segmented into dictionary words.
applepeer

Runtime Complexity: Exponential, O(2^n)

Memory Complexity: Polynomial, O(n^2)

*/

function canSegmentString(s, dictionary) {
    
    let n = s.length;

    for (let i = 1; i < n + 1 ; i++){
        let first_word = s.substring(0, i);    
        if (dictionary.has(first_word)) {
            let second_word = s.substring(i); 
          if (dictionary.has(second_word)) {
            return true;
          }
          
          if (second_word.length === 0) {
            return true;
          }

          if (canSegmentString(second_word, dictionary)) {
            return true;
          }
        }  
    }
    return false;    
};

let s = "hellonow";
let dictionary = new Set(["hello", "hello", "on", "now"]);
if (canSegmentString(s, dictionary)) {
  console.log("String Can be Segmented");
} else {
  console.log("String Can NOT be Segmented");
}