/*
Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.
The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct 
position in the sorted part.

Time Complexity: Best case O(n), average and worst case O(n^2) 

Pseudocode/Algorithm
Start by picking the second element in the array (We consider first element already sorted)
Now compare the second element with the one before it and swap if necessary
Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e the left side) to place
the element in correct place
Repeat until array is sorted

Use case: 
Insertion sort is used when number of elements is small. It can also be useful when input array is almost sorted,
only few elements are misplaced in complete big array.
 */
let iteration = 0
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        let j
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            iteration++
            arr[j + 1] = arr[j]
            console.log(JSON.stringify(arr))
        }
        arr[j + 1] = currentValue
        console.log(JSON.stringify(arr))
    }
    return arr
}

console.log(JSON.stringify(insertionSort([64, 34, 25, 12, 22, 11, 90])))
console.log(`Iteration : ${iteration}`)