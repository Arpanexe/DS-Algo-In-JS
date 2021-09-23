/*
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
i.e it will move all the largest values bubble up to the top! :)

Time Complexity: Average and worst O(n^2) and best O(n)

Pseudocode/Algorithm: 
Start looping from a variable called i to the end of the array
Take flag noSwaps and set its value as true
Start and inner loop with a variable called j from the beginning until array length-i-1 (Here we don't need to iterate till last element since after each iteration largest value will be sorted at the end)
if array[j] is greater than array[j+1], swap those two values and set noSwaps flag value to false
Check if noSwaps value is true then break the outer loop, else continue
Repeat until list is sorted

Use case: 
It is mainly used for education purpose to get and idea how basic sorting works
It is good if array is mostly sorted or has very small number of elements
 */

let iteration = 0
let noSwaps //Make bubble sort more efficient when array is mostly sorted
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        noSwaps = true
        console.log(`*************************`)
        for (let j = 0; j < array.length - i - 1; j++) {
            iteration++
            if (array[j] > array[j + 1]) {
                [array[j + 1], array[j]] = [array[j], array[j + 1]]
                noSwaps = false
                console.log(JSON.stringify(array), array[j + 1], array[j])
            }
        }
        if (noSwaps) {
            break
        }
    }
    return array
}


console.log(JSON.stringify(bubbleSort([64, 34, 25, 12, 22, 11, 90])))
console.log(`Iteration : ${iteration}`)
