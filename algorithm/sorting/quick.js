/*
Like Merge Sort, QuickSort is a Divide and Conquer algorithm. 
It picks an element as pivot and partitions the given array around the picked pivot. 
There are many different versions of quickSort that pick pivot in different ways. 

Time Complexity: Best and average case O(n log n), worst case O(n^2) 
Space Complexity: worst case O(log n)

Pseudocode/Algorithm for pivot function
Given an array, this helper function should designate an element as the pivot
It should then rearrange elements in the array so that all values greater than the pivot
are moved to the right of the pivot
The order of elements on either side     of the pivot doesn't matter
The helper should do this in place that is, it should not create a new array

Pseudocode/Algorithm for Quick sort function
Call pivot helper on the array
When the helper returns to you the update pivot index, recursively call pivot helper on
the subarray to the left of that index, and the subarray to the right if that index

Use case: 
Efficient to sort data
 */
function pivot(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start]
    let swapIndex = start

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
            //console.log(JSON.stringify(arr))
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))