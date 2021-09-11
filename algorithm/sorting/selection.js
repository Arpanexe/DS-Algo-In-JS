/*
Similar to bubble sort but instead of placing larger values in to sorted position,
it places small values into sorted position. it repeatedly selects the next-smallest element and swaps it into place.

Time Complexity: Best, average and worst O(n^2)

Pseudocode/Algorithm: 
Set lowest to location 0 or first index in our case i=0
Iterate over all the array and search the minimum element in the list
Swap value of lowest with i
Increment MIN to point to next element
Repeat until list is sorted

Use case: 
It is good if array is very small
When memory space is limited because it makes the minimum possible number of swaps during sortingI
 */
let iteration = 0
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let lowest = i
        for (let j = i + 1; j < array.length; j++) {
            iteration++
            if (array[j] < array[lowest])
                lowest = j
        }
        //Optimization when lowest is already at i th location then we don't need to swap them
        //Since they are already sorted
        if (lowest !== i)
            [array[i], array[lowest]] = [array[lowest], array[i]]
    }
    return array
}

console.log(JSON.stringify(selectionSort([64, 34, 25, 12, 22, 11, 90])))
console.log(`Iteration : ${iteration}`)