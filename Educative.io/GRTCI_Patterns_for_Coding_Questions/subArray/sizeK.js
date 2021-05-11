/* 
Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

Ex: Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

Here, we are asked to find the average of all contiguous subarrays of size ‘5’ in the given array. Let’s solve this:

For the first 5 numbers (subarray from index 0-4), the average is: (1+3+2+6-1)/5 => 2.2(1+3+2+6−1)/5=>2.2
The average of next 5 numbers (subarray from index 1-5) is: (3+2+6-1+4)/5 => 2.8(3+2+6−1+4)/5=>2.8
For the next 5 numbers (subarray from index 2-6), the average is: (2+6-1+4+1)/5 => 2.4(2+6−1+4+1)/5=>2.4
…
Here is the final output containing the averages of all contiguous subarrays of size 5:

Output: [2.2, 2.8, 2.4, 3.6, 2.8]



*/

//Sliding Window approach

function find_averages_of_subarrays(K, arr) {
    
    const result = [];
    let windowSum = 0.0,
        windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd]; // add the next element
        // slide the window, we dont need the slide if weve not hit the required window size of 'k'
        if (windowEnd >= K - 1) {
            result.push(windowSum / K); //calculate the average
            windowSum -= arr[windowStart]; //subtract the element going out
            windowStart += 1; //slide the window ahead
        }
    }

    return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);

/* 
Given an array of positive numbers 
and a positive number ‘k,’ find the maximum sum of any contiguous 
subarray of size ‘k’.
*/