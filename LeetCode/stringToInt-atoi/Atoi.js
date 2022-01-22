/*
Implement the myAtoi(string s) function, which converts
a string to a 32-bit signed integer (similar to C/C++'s atoi function).

Initialize the result as 0.
Start from the first character and update result for every character.
For every character update the answer as result = result * 10 + (s[i] – ‘0’)


.charAt()

*/

let AtoiJs = function (str) {
  let len = str.length;
  const intMin = -(2 ** 31);
  const intMax = 2 ** 31 - 1;
  let positive = true;
  let i = 0;

  // Remove all leading whitespace.
  while (i < len && str.charAt(i) === " ") {
    i++;
  }
  if (i === len) {
    return 0;
  }

  // Check if + or - symbol is used.
  if (str.charAt(i) === "+") {
    i++;
  } else if (str.charAt(i) === "-") {
    i++;
    positive = false;
  }

  let res = 0;
  for (; i < len && str.charAt(i) >= "0" && str.charAt(i) <= "9"; i++) {
    res = res * 10 + str[i].charCodeAt(0) - "0".charCodeAt(0);
  }

  res = positive ? res : -res;
  // If the integer is out on 32-bit signed integer range [-2³¹, 2³¹ — 1]
  //we return either of these limits based on integer sign.
  if (res < intMin) {
    return intMin;
  } else if (res > intMax) {
    return intMax;
  }

  return res;
}

console.log(AtoiJs("-871 and words"));