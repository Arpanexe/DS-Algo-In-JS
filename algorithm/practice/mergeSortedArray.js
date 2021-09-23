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
            mergedArray.push(arr2[index1])
            index1++
            index2++
        }
    }
    return mergedArray
}

console.log(merge([1, 3, 5, 7, 8, 9, 10], [2, 3, 4, 6, 11, 12]))