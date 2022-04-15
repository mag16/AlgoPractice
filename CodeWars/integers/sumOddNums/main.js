/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
*/


function rowSumOddNumbers(n) {
  // TODO
  if (n === 1) return 1;

  return Math.pow(n, 3); // Mathematically, the sum of the nth line of odd numbers is n3, so this gives the correct result:
}
