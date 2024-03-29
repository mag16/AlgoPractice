/* 
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

*/


function getSum(a, b) {
  //if numbers are equal return a or b
  if (a === b) {
    return a;
  }

  if (a < b) {
    return sumRange(a, b);
  } else {
    return sumRange(b, a);
  }
  //Good luck!
}

function sumRange(x, y) {
  let sum = 0;
  let i = x;
  while (i <= y) {
    sum = sum + i;
    i++;
  }
  return sum;
}