/*

The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is, (1 + 2 + ... 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square
 of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/


let sum_squares = 0;
let square_sum = 0;
let resultSum = 0;

//sum of squares of 100 nums
for (let i = 1; i <= 100; i++) {
  sum_squares += Math.pow(i, 2);
  console.log(sum_squares);
}

//square sum
for (let j = 1; j <= 100; j++) {
  square_sum += j;
  resultSum = Math.pow(square_sum, 2);
}

let total = resultSum - sum_squares;

console.log(total);