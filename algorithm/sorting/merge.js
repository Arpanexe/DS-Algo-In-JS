/*
Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, 
calls itself for the two halves, and then merges the two sorted halves. 
The merge() function is used for merging two halves. 

Time Complexity: Best, average and worst case is O(nlog(n))

Use case: 

 */

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let arr1 = mergeSort(arr.slice(0, mid))
    let arr2 = mergeSort(arr.slice(mid))
    return merge(arr1, arr2)
}

function merge(arr1, arr2) {
    let index1 = 0
    let index2 = 0
    const mergedArray = []
    while (index1 < arr1.length || index2 < arr2.length) {
        if (arr1[index1] < arr2[index2] || index2 === arr2.length) {
            mergedArray.push(arr1[index1])
            index1++
        } else if (arr1[index1] > arr2[index2] || index1 === arr1.length) {
            mergedArray.push(arr2[index2])
            index2++
        } else if (arr1[index1] === arr2[index2]) {
            mergedArray.push(arr1[index1])
            mergedArray.push(arr2[index2])
            index1++
            index2++
        }
    }
    return mergedArray
}

//console.log(JSON.stringify(mergeSort([64, 34, 25, 12, 22, 11, 90])))
console.log(JSON.stringify(mergeSort([24, 10, 76, 73])))