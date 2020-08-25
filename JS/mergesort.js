function mergeSort(array) {
  //BASE CASE: Arrays with fewer than 2 elements are sorted
  if (array.length < 2) {
    return array;
  }

  //Step 1: divide the array in half
  //need to round down to avoid getting a half index
// the Math.floor() function returns the largest integer less than or equal 
//to a given number.

  const midIndex = Math.floor(array.length / 2);

  const left = array.slice(0, midIndex);
  const right = array.slice(midIndex);

  // Step 2; sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Step 3: Merge the sorted halves
  const sortedArray = [];
  let currentLeftIndex = 0;
  let currentRightIndex = 0;

  while (sortedArray.length < left.length + right.length) {
    // sortedLeft's first element comes next
    // if it's less than sortedRight's first
    // element or if sortedRight is exhausted
    if (
      currentLeftIndex < left.length &&
      (currentRightIndex === right.length ||
        sortedLeft[currentLeftIndex] < sortedRight[currentRightIndex])
    ) {
      sortedArray.push(sortedLeft[currentLeftIndex]);
      currentLeftIndex += 1;
    } else {
      sortedArray.push(sortedRight[currentRightIndex]);
      currentRightIndex += 1;
    }
  }
    
    return sortedArray;
    
}

console.log(mergeSort([100,99,30,1,344,20,1111,2,3,7]))
