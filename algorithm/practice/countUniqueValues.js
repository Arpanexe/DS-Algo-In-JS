/*
Implement function called countUniqueValues, which accepts a sorted array,
and count the unique values in array. There can be negative numbers in the array,
but it will always be sorted.
*/
//O(n) optimized solution
function countUniqueValues(arr) {
    console.log(JSON.stringify(arr))
    let left = 0
    let iteration = 0
    let right = arr.length - 1
    let uniqueValue = 0
    while (left < right) {
        console.log(`Iteration count : ${++iteration}`)
        if (arr[left] === arr[right])
            return uniqueValue
        if (arr[left] !== arr[left + 1]) {
            uniqueValue++
        }
        if (arr[right] !== arr[right - 1]) {
            uniqueValue++
        }
        left++
        right--
    }
    return uniqueValue
}

//O(n) without space complexity (Useful when array is sorted)
function countUniqueValues(arr) {
    let uniqueValue = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1])
            uniqueValue++
    }
    return uniqueValue
}
//O(n) solution with additional space complexity (useful when array is not sorted)
function countUniqueValues(arr) {
    const map = {}
    let uniqueValue = 0
    for (const item of arr) {
        if (!map[item]) {
            map[item] = item
            uniqueValue++
        }
    }
    return uniqueValue
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))