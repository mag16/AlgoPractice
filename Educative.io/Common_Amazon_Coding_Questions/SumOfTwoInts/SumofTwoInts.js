/* 
Given an array of integers and a value, determine if there are any two integers
in the array whose sum is equal to the given value. Return true if the sum exists
and return false if it does not. Consider this array and the target sums:

arr = 5 7 1 2 8 4

Target Sum:10  7+3=10, 2+8=10

Target Sum:19  No 2 values sum up to 19

*/

let Sum_of_two_ints = function (arr, target) {
  let len = arr.length;
  let sums = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === target) {
        //sums.push([arr[i], arr[j]])
        return `the numbers ${arr[i]} and ${arr[j]} are equal to ${target}`;
      } else {
        return false;
      }
    }
  }
  return sums;
};

//console.log(Sum_of_two_ints([5, 7, 1, 2, 8, 4], 10));

function findTwoSum(arr, sum) {
    let foundInts = new Set();

    for (let a in arr) {
        if (foundInts.has(sum - arr[a])) {
            return true;
           // return arr[a];
        }

        foundInts.add(arr[a]);
    }

    return false;
}

console.log(findTwoSum([5, 7, 1, 2, 8, 4], 10));

/* 
Scan the whole array once and store visited elements in a hash set.
During scan, for every element e in the array, we check if val - e is present in the hash set i.e. 
val - e is already visited.
If val - e is found in the hash set, it means there is a pair (e, val - e) in array whose sum is 
equal to the given val.
If we have exhausted all elements in the array and didn’t find any such pair, 
the function will return false.

Runtime Complexity: Linear, O(n)O(n)

Memory Complexity: Linear, O(n)O(n)

*/
