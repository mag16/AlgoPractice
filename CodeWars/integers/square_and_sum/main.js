/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/


function squareSum(numbers) {
  //square each num and then add them (map,reduce)

  const initialValue = 0;

  const squareNAdd = numbers
    .map((x) => Math.pow(x, 2))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

  return squareNAdd;
}