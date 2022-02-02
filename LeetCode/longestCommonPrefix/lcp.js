/* 

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


https://dev.to/urfan/leetcode-longest-common-prefix-with-javascript-32ca

*/


let LongestCommonPrefix = function (strs) {
    
    let prefix = "";
    if (strs === null || strs.length === 0) return prefix;

    for (let i = 0; i < strs[0].length; i++) {
      const char = strs[0][i]; // loop through all characters of the very first string.

      for (let j = 1; j < strs.length; j++) {
        // Check if this character is also present in the same position of each string
        if (strs[j][i] !== char) return prefix;
      }
      prefix = prefix + char;
    }

    return prefix;
};

console.log(LongestCommonPrefix(["flower", "flow", "flight"]));