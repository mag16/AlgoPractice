/* 
5. 3Sum
Medium

18285

1762

Add to List

Share
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

var threeSum = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });

  let three_sum = [];
  //check each element in the array
  // we use i as the first element in result
  for (let i = 0; i < nums.length - 2; i++) {
    // we dont need any duplicate first elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // set index for second & last element
    let l = i + 1;
    let r = nums.length - 1;

    // move to mid
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        three_sum.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) l++;
      }
    }
  }

  //return all the pairs of integers that sum to 0
  return three_sum;
};