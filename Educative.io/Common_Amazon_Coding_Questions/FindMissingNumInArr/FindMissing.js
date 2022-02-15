/* 
Find the missing number in the array
You are given an array of positive numbers from 1 to n, such that all numbers
 from 1 to n are present except one number x. You have to find x. 
 The input array is not sorted. 
Look at the below array and give it a try before checking the solution.

arr = [3,7,1,2,8,4,5] (unsorted)




Find the sum ‘sum_of_elements’ of all the numbers in the array. This would require a linear scan, O(n).
Then find the sum ‘expected_sum’ of first ‘n’ numbers using the arithmetic series sum formula i.e. ( n * (n + 1) ) / 2.
The difference between these i.e. ‘expected_sum - sum_of_elements’, is the missing number in the array.


Runtime Complexity
Linear, O(n).

Memory Complexity
Constant, O(1).



*/

function FindmissingNum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  //the number missing in the array, denoted by + 1.
  let x = arr.length + 1;
  // use arithmetic series sum formula.   (x * (x + 1)) / 2
  let sum_of_x = Math.floor((x * (x + 1)) / 2);

  return sum_of_x - total;
}

let arr = [3, 7, 1, 2, 8, 4, 5];
let missing_number_in_array = FindmissingNum(arr);

console.log("missing number in array is " + missing_number_in_array);