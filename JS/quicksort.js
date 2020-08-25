function quickSort(array) {
    if (array.length < 2) return array;

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];

    for (let i in array) {
        if (i != pivotIndex) {
            array[i] > pivot ? greater.push(array[i]) : less.push(array[i])
        }
    }

    return [
        ...quickSort(less),
        pivot,
        ...quickSort(greater)
    ]
}

console.log(quickSort([3,5,1,100,22,4]))


/*  
Let's talk big O notation and the importance of the pivot element. 
When it comes to sorting, every single item in the array needs to be touched.
We need to see how large or small an item is in order to know where it fits in line.
We know we're at least going to be O(n). What makes the algorithm faster is choosing the least amount of pivot items. The more pivot items we have, the larger our call stack gets. That height of our call stack at best case -- which is also the average case -- is getting O(log n), which makes our final notation O(n log n).
Worse case is having a pivot item for every single item in our array, which would give us O(n) again or O(n^2).

*/