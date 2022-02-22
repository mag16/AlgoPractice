/* 

PSEUDO:
1)Let min = 0 and max = n.
2)Guess the average of max and min, rounded down so that it is an integer.
3)If you guessed the number, stop. You found it!
4)If the guess was too low, set min to be one larger than the guess.
5)If the guess was too high, set max to be one smaller than the guess.
6)Go back to step two.

*/

function BinarySearch(arr, target) {

    let start = 0;
    let end = arr.length - 1;

    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid index
      let mid = Math.floor((start + end) / 2);

      // If element is present at mid, return True
      if (arr[mid] === target) return mid;
      // Else look in left or right half accordingly
      else if (arr[mid] < target)
          start = mid + 1;
      else
          end = mid - 1;
    }

    return false;
}

console.log(BinarySearch([1, 3, 5, 7, 8, 9], 10));

/* 
the worst-case running time of binary search is Θ(lg n).

*/