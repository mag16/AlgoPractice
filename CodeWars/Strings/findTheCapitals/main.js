/*
Write a function that takes a single string (word)
as argument. The function must return an ordered list
containing the indexes of all capital letters in the string.


Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

let capitals = function (word) {
  // Write your code here
  let indices = [];//will push indices of cap letters here

  for (let i = 0; i < word.length; i++) {
    let x = word[i].toUpperCase();//each letter to UpperCase.

    if (word.charAt(i) === x) {
      indices.push(word.indexOf(x));
    }
  }

  return indices;
};