/* 
Implement strStr().

Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question
to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. 
This is consistent to C's strstr() and Java's indexOf().


https://alkeshghorpade.me/post/leetcode-implement-strstr

*/



let strStr = function (haystack, needle) {

  if (needle.length == 0) {
    return 0;
  }

  if (haystack.length < needle.length) {
    return -1;
  }

  let i = 0
  let j = 0;
  let index;

  while (i < haystack.length) {
    if (haystack[i] == needle[j]) {
      index = i;
      while (haystack[i] == needle[j] && j < needle.length) {
        i++;
        j++;
      }

      if (j == needle.length) {
        return index;
      } else {
        j = 0;
        i = index + 1;
      }
    } else {
      i++;
    }
  }

  return -1;
};

//console.log(strStr("hello", "ll"));

//Brute force approach time complexity of the program below is O(m*n).

let strStr2 = function (haystack, needle) {

  if (needle.length == 0) {
    return 0;
  }

  if (haystack.length < needle.length) {
    return -1;
  }

  let i = 0;
  let j = 0;
  
  for (; i <= haystack.length - needle.length; i++){
    for (; j < needle.length; j++){
      if (needle.charAt(j) !== haystack.charAt(i + j)) {
            break;
        }
    }

  }

  if (j == needle.length) {
    return i;
  }

}

console.log(strStr2("hello", "ll"));